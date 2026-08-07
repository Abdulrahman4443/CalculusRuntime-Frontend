import { useMemo, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useProgress } from "../context/ProgressContext";
import {
  getCourseTitle,
  isCourseCertificateEligible,
  getRequiredSections,
  getQuizId,
  getMinQuizScore,
} from "../data/courseCompletion";
import { getQuiz } from "../data/courseQuizzes";
import "./CourseQuiz.css";

function CourseQuiz() {
  const { courseId } = useParams();
  const { user, isHydrated } = useAuth();
  const { progress, saveQuizScore } = useProgress();

  const courseTitle = getCourseTitle(courseId);
  const quizId = getQuizId(courseId);
  const quiz = quizId ? getQuiz(quizId) : null;

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);

  const requiredSections = useMemo(() => getRequiredSections(courseId), [courseId]);
  const sectionsRemaining = requiredSections.filter(
    (id) => !progress.completedSections?.[id]
  );
  const sectionsComplete = sectionsRemaining.length === 0;

  if (!isCourseCertificateEligible(courseId) || !quiz) {
    return <Navigate to="/" replace />;
  }

  if (!isHydrated) {
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

  const totalQuestions = quiz.questions.length;
  const answeredCount = Object.keys(answers).length;
  const minScore = getMinQuizScore(courseId);

  function selectAnswer(qIndex, optIndex) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qIndex]: optIndex }));
  }

  async function handleSubmit() {
    let score = 0;
    quiz.questions.forEach((q, i) => {
      if (answers[i] === q.correct) score += 1;
    });
    const pct = Math.round((score / totalQuestions) * 100);
    setResult({ score, total: totalQuestions, pct, passed: pct >= minScore });
    setSubmitted(true);
    await saveQuizScore(quizId, score, totalQuestions);
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
              ? `You've met the ${minScore}% requirement for the ${courseTitle} certificate.`
              : `You need ${minScore}% to unlock the certificate. Review the guides and try again.`}
          </p>
          <div className="quiz-actions">
            {result.passed ? (
              <Link className="quiz-btn quiz-btn--primary" to={`/certificate/${courseId}`}>
                Get your certificate →
              </Link>
            ) : (
              <button
                className="quiz-btn quiz-btn--primary"
                onClick={() => {
                  setAnswers({});
                  setSubmitted(false);
                  setResult(null);
                }}
              >
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

  return (
    <main className="quiz-page">
      <header className="quiz-header">
        <p className="quiz-eyebrow">Certification Quiz</p>
        <h1>{courseTitle}</h1>
        <p className="quiz-sub">
          {totalQuestions} questions · {minScore}% required to unlock your certificate
        </p>
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
        {quiz.questions.map((q, qi) => (
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
          disabled={answeredCount < totalQuestions}
          onClick={handleSubmit}
        >
          {answeredCount < totalQuestions
            ? `Answer all questions (${answeredCount}/${totalQuestions})`
            : "Submit quiz"}
        </button>
      </div>
    </main>
  );
}

export default CourseQuiz;