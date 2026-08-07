import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useProgress } from "../context/ProgressContext";
import {
  getCourseTitle,
  isCourseCertificateEligible,
  getRequiredSections,
  getQuizId,
} from "../data/courseCompletion";
import "./CourseQuiz.css";

const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8002";

function formatClock(totalSeconds) {
  const s = Math.max(0, Math.ceil(totalSeconds));
  const m = Math.floor(s / 60);
  const rem = s % 60;
  return `${m}:${rem.toString().padStart(2, "0")}`;
}

function CourseQuiz() {
  const { courseId } = useParams();
  const { user, isHydrated } = useAuth();
  const { progress, saveQuizScore } = useProgress();

  const courseTitle = getCourseTitle(courseId);
  const quizId = getQuizId(courseId);

  // Quiz attempt state — questions/attempt_token come from the server on
  // each fresh attempt, never from a bundled answer key.
  const [attempt, setAttempt] = useState(null); // { attempt_token, title, questions, total_seconds, seconds_per_question }
  const [loadError, setLoadError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [remaining, setRemaining] = useState(null); // seconds left in this attempt
  const deadlineRef = useRef(null);

  const requiredSections = useMemo(() => getRequiredSections(courseId), [courseId]);
  const sectionsRemaining = requiredSections.filter(
    (id) => !progress.completedSections?.[id]
  );
  const sectionsComplete = sectionsRemaining.length === 0;

  const eligible = isCourseCertificateEligible(courseId) && !!quizId;
  const canStart = eligible && isHydrated && !!user && sectionsComplete;

  async function startAttempt() {
    setLoading(true);
    setLoadError(null);
    setSubmitted(false);
    setResult(null);
    setAnswers({});
    try {
      const res = await fetch(`${API_URL}/api/quiz/${quizId}/start`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.detail || `Could not start quiz (${res.status}).`);
      }
      const data = await res.json();
      setAttempt(data);
      deadlineRef.current = Date.now() + data.total_seconds * 1000;
      setRemaining(data.total_seconds);
    } catch (e) {
      setLoadError(e.message || "Could not start the quiz. Try again.");
    } finally {
      setLoading(false);
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (canStart) startAttempt();
  }, [canStart, quizId]);

  // Overall attempt countdown — auto-submits whatever is answered when time
  // runs out. Full per-question 10s pacing/auto-advance UI is a follow-up;
  // this enforces the same total time budget the server enforces via the
  // attempt token's `exp` claim, so the UI can't silently disagree with it.
  useEffect(() => {
    if (!attempt || submitted) return undefined;
    const id = setInterval(() => {
      const secsLeft = Math.max(0, (deadlineRef.current - Date.now()) / 1000);
      setRemaining(secsLeft);
      if (secsLeft <= 0) {
        clearInterval(id);
        handleSubmit();
      }
    }, 250);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attempt, submitted]);

  if (!eligible) {
    return <Navigate to="/" replace />;
  }

  if (!isHydrated || (user && !attempt && loading)) {
    return (
      <main className="quiz-page">
        <div className="quiz-state">
          <div className="quiz-spinner" />
          <p>Loading…</p>
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="quiz-page">
        <div className="quiz-state">
          <h2>Sign in required</h2>
          <p>Sign in to take the {courseTitle} certification quiz.</p>
          <Link className="quiz-btn" to="/login">
            Sign in
          </Link>
        </div>
      </main>
    );
  }

  if (!sectionsComplete) {
    return (
      <main className="quiz-page">
        <div className="quiz-state">
          <h2>Finish the course first</h2>
          <p>
            Complete every module of {courseTitle} before attempting the
            certification quiz. {sectionsRemaining.length} section
            {sectionsRemaining.length === 1 ? "" : "s"} remaining.
          </p>
          <Link className="quiz-btn" to={`/courses/${courseId}`}>
            Back to course
          </Link>
        </div>
      </main>
    );
  }

  if (loadError) {
    return (
      <main className="quiz-page">
        <div className="quiz-state quiz-state--fail">
          <h2>Couldn't start the quiz</h2>
          <p>{loadError}</p>
          <div className="quiz-actions">
            <button className="quiz-btn quiz-btn--primary" onClick={startAttempt}>
              Try again
            </button>
            <Link className="quiz-btn" to={`/courses/${courseId}`}>
              Back to course
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (!attempt) {
    return (
      <main className="quiz-page">
        <div className="quiz-state">
          <div className="quiz-spinner" />
          <p>Preparing your quiz…</p>
        </div>
      </main>
    );
  }

  const totalQuestions = attempt.questions.length;
  const answeredCount = Object.keys(answers).length;

  function selectAnswer(qIndex, optIndex) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qIndex]: optIndex }));
  }

  async function handleSubmit() {
    if (submitting || submitted) return;
    setSubmitting(true);

    // answers[] must be positional (one entry per question, in the order
    // /start returned them) — null for anything left blank.
    const answersArray = attempt.questions.map((_, i) =>
      Object.prototype.hasOwnProperty.call(answers, i) ? answers[i] : null
    );

    try {
      const res = await fetch(`${API_URL}/api/quiz/${quizId}/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
        },
        body: JSON.stringify({
          attempt_token: attempt.attempt_token,
          answers: answersArray,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.detail || `Submit failed (${res.status}).`);
      }
      setResult(data);
      setSubmitted(true);
      await saveQuizScore(quizId, data.score, data.total);
    } catch (e) {
      setLoadError(e.message || "Could not submit the quiz. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted && result) {
    return (
      <main className="quiz-page">
        <div className={`quiz-state ${result.passed ? "quiz-state--pass" : "quiz-state--fail"}`}>
          <h2>{result.passed ? "You passed! 🎉" : "Not quite there yet"}</h2>
          <p className="quiz-score-big">
            {result.score} / {result.total} ({result.pct}%)
          </p>
          <p>
            {result.passed
              ? `You've met the ${result.min_pass_percent}% requirement for the ${courseTitle} certificate.`
              : `You need ${result.min_pass_percent}% to unlock the certificate. Review the guides and try again.`}
          </p>
          <div className="quiz-actions">
            {result.passed ? (
              <Link className="quiz-btn quiz-btn--primary" to={`/certificate/${courseId}`}>
                Get your certificate →
              </Link>
            ) : (
              <button className="quiz-btn quiz-btn--primary" onClick={startAttempt}>
                Retry quiz
              </button>
            )}
            <Link className="quiz-btn" to={`/courses/${courseId}`}>
              Back to course
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const timeLow = remaining !== null && remaining <= 30;

  return (
    <main className="quiz-page">
      <header className="quiz-header">
        <p className="quiz-eyebrow">Certification Quiz</p>
        <h1>{courseTitle}</h1>
        <p className="quiz-sub">
          {totalQuestions} questions · {attempt.seconds_per_question}s per question ·{" "}
          {result?.min_pass_percent ?? 80}% required to unlock your certificate
        </p>
        {remaining !== null && (
          <p className={`quiz-sub ${timeLow ? "quiz-timer--low" : ""}`}>
            Time remaining: {formatClock(remaining)}
          </p>
        )}
        <div className="quiz-progress-track">
          <div
            className="quiz-progress-fill"
            style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
          />
        </div>
        <p className="quiz-progress-label">
          {answeredCount} / {totalQuestions} answered
        </p>
      </header>

      <div className="quiz-list">
        {attempt.questions.map((q, qi) => (
          <div className="quiz-card" key={qi}>
            <div className="quiz-q-num">Question {qi + 1}</div>
            <div className="quiz-q-text">{q.q}</div>
            <div className="quiz-options">
              {q.options.map((opt, oi) => (
                <button
                  key={oi}
                  type="button"
                  className={`quiz-opt ${answers[qi] === oi ? "quiz-opt--selected" : ""}`}
                  onClick={() => selectAnswer(qi, oi)}
                >
                  <span className="quiz-opt-letter">{String.fromCharCode(65 + oi)}</span>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="quiz-submit-bar">
        <button
          className="quiz-btn quiz-btn--primary"
          disabled={answeredCount < totalQuestions || submitting}
          onClick={handleSubmit}
        >
          {submitting
            ? "Submitting…"
            : answeredCount < totalQuestions
            ? `Answer all questions (${answeredCount}/${totalQuestions})`
            : "Submit quiz"}
        </button>
      </div>
    </main>
  );
}

export default CourseQuiz;
