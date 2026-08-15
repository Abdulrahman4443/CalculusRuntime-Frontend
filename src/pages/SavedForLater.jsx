import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSavedExamples, unsaveExample } from "../utils/saveForLaterStorage";
import "./SavedForLater.css";

function SavedForLater() {
  const [examples, setExamples] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setExamples(getSavedExamples());
  }, []);

  const handleRemove = (sectionId, exampleTitle) => {
    unsaveExample(sectionId, exampleTitle);
    setExamples(getSavedExamples());
  };

  const handleGoTo = (entry) => {
    if (!entry.route) return;
    navigate(entry.route, { state: { scrollToId: entry.anchorId } });
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
                <div className="sfl-card-actions">
                  <button
                    type="button"
                    className="sfl-goto-btn"
                    onClick={() => handleGoTo(entry)}
                    disabled={!entry.route}
                    title={
                      entry.route
                        ? "Jump to this example"
                        : "Saved before this feature — re-save it from the guide to enable jumping"
                    }
                  >
                    View Full Example
                  </button>
                  <button
                    type="button"
                    className="sfl-remove-btn"
                    onClick={() => handleRemove(entry.sectionId, entry.exampleTitle)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default SavedForLater;