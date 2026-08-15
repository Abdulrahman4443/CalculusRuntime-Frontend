import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getSavedExamples, unsaveExample, exampleAnchorId, } from "../utils/saveForLaterStorage";
import "./SavedForLater.css";

function exampleHref(entry) {
  const path = entry.guidePath || "/dashboard";
  const hash =
    entry.exampleId ||
    exampleAnchorId(entry.sectionId, entry.exampleTitle);
  return `${path}#${hash}`;
}

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
          Examples you have bookmarked across study guides. Click an example to
          jump to it in its guide.
        </p>
      </header>

      <section className="sfl-body">
        {examples.length === 0 ? (
          <p className="sfl-empty">
            Nothing saved yet. Tap &quot;☆ Save&quot; on any example inside a study
            guide to add it here.
          </p>
        ) : (
          <ul className="sfl-list">
            {examples.map((entry) => (
              <li key={entry.id} className="sfl-card">
                <Link to={exampleHref(entry)} className="sfl-card-main sfl-card-link">
                  <div className="sfl-card-guide">
                    {entry.guideTitle || "Study Guide"}
                  </div>
                  <div className="sfl-card-title">{entry.exampleTitle}</div>
                  <div className="sfl-card-meta">
                    Section: {entry.sectionId} · Saved{" "}
                    {new Date(entry.savedAt).toLocaleDateString()}
                    {entry.guidePath ? ` · Open in guide →` : ""}
                  </div>
                </Link>
                <button
                  type="button"
                  className="sfl-remove-btn"
                  onClick={() =>
                    handleRemove(entry.sectionId, entry.exampleTitle)
                  }
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
