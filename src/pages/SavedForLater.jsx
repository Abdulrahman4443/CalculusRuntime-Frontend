import { useEffect, useState } from "react";
import { getSavedExamples, unsaveExample } from "../utils/saveForLaterStorage";
import "./SavedForLater.css";

function SavedForLater() {
  const [examples, setExamples] = useState([]);

  useEffect(() => {
    setExamples(getSavedExamples());
  }, []);

  const handleRemove = (sectionId, exampleTitle) => {
    unsaveExample(sectionId, exampleTitle);
    setExamples(getSavedExamples());
  };

  return (
    <main className="saved-for-later-page">
      <header className="sfl-header">
        <div className="sfl-eye">CalcVoyager</div>
        <h1 className="sfl-title">Saved for Later</h1>
        <p className="sfl-sub">
          Examples you've bookmarked across all study guides.
        </p>
      </header>

      <section className="sfl-body">
        {examples.length === 0 ? (
          <p className="sfl-empty">
            Nothing saved yet. Tap "☆ Save" on any example inside a study
            guide to add it here.
          </p>
        ) : (
          <ul className="sfl-list">
            {examples.map((entry) => (
              <li key={entry.id} className="sfl-card">
                <div className="sfl-card-main">
                  <div className="sfl-card-guide">
                    {entry.guideTitle || "Study Guide"}
                  </div>
                  <div className="sfl-card-title">{entry.exampleTitle}</div>
                  <div className="sfl-card-meta">
                    Section: {entry.sectionId} · Saved{" "}
                    {new Date(entry.savedAt).toLocaleDateString()}
                  </div>
                </div>
                <button
                  type="button"
                  className="sfl-remove-btn"
                  onClick={() => handleRemove(entry.sectionId, entry.exampleTitle)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default SavedForLater;