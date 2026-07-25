/** Compact MCQ block compatible with StudyGuideShell setupMcqs / leaderboard. */
export function LaMcqSection({ id, badge, title, scoreId, section, questions }) {
  return (
    <section className="mcq-section" id={id}>
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{badge}</span>
        <h2 className="mcq-section-title">{title}</h2>
      </div>
      <div className="mcq-score-strip">
        <span className="score-lbl">Score</span>
        <span className="score-val" id={scoreId}>
          0 / {questions.length}
        </span>
        <span className="score-lbl" style={{ marginLeft: "auto", opacity: 0.4 }}>
          Click an option then reveal answer
        </span>
      </div>
      {questions.map((q, i) => (
        <div
          key={`${section}-${i}`}
          className="mcq-card"
          data-section={section}
          data-q={String(i + 1)}
          data-answer={q.answer}
        >
          <div className="mcq-q-row">
            <div className="mcq-num">{i + 1}</div>
            <div className="mcq-q-text">{q.prompt}</div>
          </div>
          <div className="mcq-options">
            {q.options.map((opt, j) => {
              const letter = String.fromCharCode(65 + j);
              return (
                <div key={letter} className="mcq-opt" data-opt={letter}>
                  <span className="mcq-opt-letter">{letter}</span>
                  {opt}
                </div>
              );
            })}
          </div>
          <button type="button" className="mcq-reveal-btn">
            Reveal Answer
          </button>
          <div className="mcq-answer">
            <span className="mcq-correct-badge">Correct Option: {q.answer}</span>
            <div className="mcq-explanation">{q.explanation}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
