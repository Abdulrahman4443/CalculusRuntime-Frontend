import React, { useState, useEffect } from 'react';
import SubmitToLeaderboard from '../components/SubmitToLeaderboard';
import { CALC_AG_PRACTICE_BANK } from '../data/calcAgPracticeBank';
import { PS_PRACTICE_BANK } from '../data/psPracticeBank';
import { LA_PRACTICE_BANK } from '../data/laPracticeBank';
import { MV_PRACTICE_BANK } from '../data/mvPracticeBank';
import './Leaderboard.css';
import './PractiseSection.css';

// --- MASTER PROBLEM DATABASE ---
const PRACTICE_PROBLEMS = [
  // Certificate-depth banks: 15 Easy + 15 Medium + 15 Hard per topic
  ...CALC_AG_PRACTICE_BANK,
  ...MV_PRACTICE_BANK,
  ...PS_PRACTICE_BANK,
  ...LA_PRACTICE_BANK,
];

const DIFFICULTIES = ['Easy', 'Medium', 'Hard'];

const TOPICS = [
  'Lagrange Multipliers',
  'Divergence & Curl',
  "Stokes' Theorem",
  'Taylor Series for Multivariable Functions',
  'Partial Derivatives',
  'Vector Calculus',
  'Limits and Continuity',
  'Differentiation',
  'Integration',
  'Sequences and Infinite Series',
  'Conic Sections and Analytic Geometry',
  'Multiple Integrals',
  'Vectors & Vector Spaces',
  'Matrices & Determinants',
  'Systems of Linear Equations',
  'Eigenvalues & Eigenvectors',
  'Probability Basics',
  'Random Variables & Distributions',
  'Descriptive Statistics',
  'Hypothesis Testing',
  'Regression & Correlation',
];

export default function PractiseSection() {
  // --- LAYER 1: DIFFICULTY SELECTION ---
  const [chosenDifficulty, setChosenDifficulty] = useState(null);
  
  // --- LAYER 2: TOPIC SELECTION ---
  const [chosenTopic, setChosenTopic] = useState(null);

  // --- CORE GAMEPLAY STATE ---
  const [poolProblems, setPoolProblems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  // --- RUNNING SCORE PERSISTENCE ---
  const [score, setScore] = useState(() => {
    const saved = localStorage.getItem('arena_score_tracker');
    return saved ? JSON.parse(saved) : { correct: 0, total: 0 };
  });

  useEffect(() => {
    localStorage.setItem('arena_score_tracker', JSON.stringify(score));
  }, [score]);

  // Handle building the problem pool based on selection matrices
  useEffect(() => {
    if (chosenDifficulty && chosenTopic) {
      const filtered = PRACTICE_PROBLEMS.filter(
        p => p.difficulty === chosenDifficulty && p.topic === chosenTopic
      );
      setPoolProblems(filtered);
      setCurrentIndex(0);
      setIsQuizCompleted(false);
      resetQuizTurn();
    }
  }, [chosenDifficulty, chosenTopic]);

  const resetQuizTurn = () => {
    setSelectedAnswer(null);
    setIsSubmitted(false);
  };

  const handleSelectionReset = () => {
    setChosenDifficulty(null);
    setChosenTopic(null);
    setPoolProblems([]);
    setCurrentIndex(0);
    setIsQuizCompleted(false);
    resetQuizTurn();
  };

  const handleAnswerClick = (index) => {
    if (isSubmitted) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null || isSubmitted) return;
    const currentProblem = poolProblems[currentIndex];
    const correct = selectedAnswer === currentProblem.correctAnswer;
    setScore(prev => ({
      correct: prev.correct + (correct ? 1 : 0),
      total: prev.total + 1
    }));
    setIsSubmitted(true);
  };

  // PROGRESSIVE QUIZ FLOW: Move to the next question or complete quiz
  const handleNextQuestion = () => {
    if (currentIndex < poolProblems.length - 1) {
      setCurrentIndex(prev => prev + 1);
      resetQuizTurn();
    } else {
      setIsQuizCompleted(true);
    }
  };

  const currentProblem = poolProblems[currentIndex] || null;

  return (
    <div className="practice-page">
      <div className="practice-hud">
        <div>
          <h1>Focused Practice Arena</h1>
          <p>Comprehensive testing workspace for Advanced Calculus modules.</p>
        </div>
        <div className="practice-score">
          <div>
            <span className="practice-score-label">Total Score</span>
            <div className="practice-score-value">
              {score.correct} <span>/</span> {score.total}
            </div>
          </div>
          <button
            type="button"
            className="practice-reset"
            onClick={() => setScore({ correct: 0, total: 0 })}
          >
            Reset
          </button>
        </div>
      </div>

      {!chosenDifficulty && (
        <div className="practice-panel">
          <h2>Select Targeted Practice Tier</h2>
          <p style={{ margin: 0, color: 'var(--muted)', fontSize: '0.9rem' }}>
            Choose a difficulty tier to unlock the specific topic modules.
          </p>
          <div className="practice-tier-grid">
            {DIFFICULTIES.map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setChosenDifficulty(level)}
                className={`practice-tier-btn practice-tier-btn--${level.toLowerCase()}`}
              >
                {level} Mode
              </button>
            ))}
          </div>
        </div>
      )}

      {chosenDifficulty && !chosenTopic && (
        <div className="practice-panel">
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', marginBottom: '1rem' }}>
            <span className="practice-crumb">
              Difficulty Tier: <span className="practice-crumb-pill">{chosenDifficulty}</span>
            </span>
            <button type="button" className="practice-back" onClick={handleSelectionReset}>
              ← Back to Tiers
            </button>
          </div>
          <h3>Select Practice Topic</h3>
          <div className="practice-topic-grid">
            {TOPICS.map((topic) => (
              <button
                key={topic}
                type="button"
                className="practice-topic-btn"
                onClick={() => setChosenTopic(topic)}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      )}

      {chosenDifficulty && chosenTopic && (
        <div>
          <div className="practice-toolbar">
            <div className="practice-crumb">
              <span className="practice-crumb-pill">{chosenDifficulty}</span>
              <span>/</span>
              <span style={{ color: 'var(--ink)' }}>{chosenTopic}</span>
            </div>
            <div className="practice-toolbar-actions">
              <button
                type="button"
                className="practice-tool-btn"
                onClick={handleSelectionReset}
              >
                Change Topic
              </button>
            </div>
          </div>

          <div className="practice-panel">
            {!isQuizCompleted && currentProblem ? (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <p className="practice-kicker" style={{ margin: 0 }}>
                    Question Workspace
                  </p>
                  <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--accent)' }}>
                    Question {currentIndex + 1} of {poolProblems.length}
                  </span>
                </div>

                <h2 className="practice-question">{currentProblem.question}</h2>

                <div className="practice-options" role="listbox" aria-label="Answer choices">
                  {currentProblem.options.map((option, idx) => {
                    let stateClass = '';
                    if (selectedAnswer === idx && !isSubmitted) {
                      stateClass = 'practice-option--selected';
                    }
                    if (isSubmitted) {
                      if (idx === currentProblem.correctAnswer) {
                        stateClass = 'practice-option--correct';
                      } else if (selectedAnswer === idx) {
                        stateClass = 'practice-option--wrong';
                      } else {
                        stateClass = 'practice-option--muted';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        type="button"
                        role="option"
                        aria-selected={selectedAnswer === idx}
                        disabled={isSubmitted}
                        onClick={() => handleAnswerClick(idx)}
                        className={`practice-option ${stateClass}`.trim()}
                      >
                        <span className="practice-option__letter">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="practice-option__text">{option}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="practice-actions">
                  {!isSubmitted ? (
                    <button
                      type="button"
                      className="practice-submit"
                      onClick={handleSubmit}
                      disabled={selectedAnswer === null}
                    >
                      Submit Verification
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="practice-next"
                      onClick={handleNextQuestion}
                    >
                      {currentIndex < poolProblems.length - 1 ? 'Next Question →' : 'Finish Quiz & View Score'}
                    </button>
                  )}
                </div>

                {isSubmitted && (
                  <div className="practice-insight">
                    <h4>Solution Insight</h4>
                    <p>{currentProblem.explanation}</p>
                  </div>
                )}
              </div>
            ) : isQuizCompleted ? (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <h2>Quiz Complete!</h2>
                <p>You have finished all questions for <strong>{chosenTopic}</strong> ({chosenDifficulty}).</p>
                <div style={{ margin: '1.5rem 0' }}>
                  <SubmitToLeaderboard
                    quizId={`practice-${chosenTopic}-${chosenDifficulty}`}
                    score={score.correct}
                    total={Math.max(score.total, 1)}
                  />
                </div>
                <button
                  type="button"
                  className="practice-tool-btn practice-tool-btn--accent"
                  onClick={handleSelectionReset}
                  style={{ marginTop: '1rem' }}
                >
                  Choose Another Topic
                </button>
              </div>
            ) : (
              <div className="practice-empty">
                No questions populated matching this configuration choice.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}