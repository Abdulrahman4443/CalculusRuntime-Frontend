// src/pages/courses/CheatSheet.jsx
import { useState, useRef, useMemo } from "react";
import { useProgress } from "../../context/ProgressContext";
import formulaData from "../../data/formulaData.js";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./CheatSheet.css";

// ─── Topic key → progress key mapping ────────────────────────────────────────
const TOPIC_PROGRESS_KEYS = {
  "limits-continuity":   ["limits-1", "limits-2"],
  differentiation:       ["calc-diff-1", "calc-diff-2"],
  integration:           ["calc-int-1", "calc-int-2"],
  "sequences-series":    ["calc-series-1", "calc-series-2"],
  "conic-sections":      ["calc-conics-1", "calc-conics-2"],
  "lines-geometry":      ["lines-1", "lines-2"],
  "circles-tangents":    ["circles-1", "circles-2"],
  "advanced-calculus":   ["advcalc-1", "advcalc-2"],
  "differential-equations": ["ode-1", "ode-2"],
  "taylor-series":       ["taylor-1", "taylor-2"],
  "partial-derivatives": ["partial-1", "partial-2"],
  extrema:               ["extreme", "extrema"],
  "lagrange-multipliers": ["lagrange-1", "lagrange-2"],
  "multiple-integrals":  ["integrals-1", "integrals-2"],
  "vector-calculus":     ["vector-1", "vector-2"],
  "divergence-curl":     ["divergence-1", "divergence-2"],
  "stokes-theorem":      ["stokes-1", "stokes-2"],
  "la-equations":        ["la-eq-1", "la-eq-2"],
  "la-subspaces":        ["la-sys-2", "la-vec-2"],
  "la-vectors":          ["la-vec-1", "la-vec-2"],
  "la-matrices":         ["la-mat-1", "la-mat-2"],
  "la-systems":          ["la-sys-1", "la-sys-2"],
  "la-transformations":  ["la-trans-1", "la-trans-2"],
  "la-orthogonality":    ["la-ortho-1", "la-ortho-2"],
  "la-eigen":            ["la-eigen-1", "la-eigen-2"],
  "la-svd":              ["la-svd-1", "la-svd-2"],
  "prob-basics":         ["ps-prob-1", "ps-prob-2"],
  "prob-random-vars":    ["ps-rv-1", "ps-rv-2"],
  "prob-distributions":  ["ps-rv-1", "ps-rv-2"],
  "prob-descriptive":    ["ps-desc-1", "ps-desc-2"],
  "prob-hypothesis":     ["ps-hyp-1", "ps-hyp-2"],
  "prob-regression":     ["ps-reg-1", "ps-reg-2"],
};

const CATEGORIES = [
  "All Subjects",
  "Calculus & Geometry",
  "Multivariable Calculus",
  "Linear Algebra",
  "Probability & Stats",
];

export default function CheatSheet() {
  const { progress } = useProgress();
  const completedSections = progress?.completedSections || {};
  const sheetRef = useRef(null);
  
  const [activeCategory, setActiveCategory] = useState("All Subjects");
  const [downloading, setDownloading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [selectedTopics, setSelectedTopics] = useState(() => Object.keys(formulaData));
  const [searchTerm, setSearchTerm] = useState("");

  // ── Which topics has the student completed? ──────────────────────────────
  const isCompleted = (topicKey) => {
    const keys = TOPIC_PROGRESS_KEYS[topicKey] ?? [topicKey];
    return keys.some((k) => !!completedSections[k]);
  };

  // ── Toggle topic selection ───────────────────────────────────────────────
  const toggleTopic = (key) => {
    setSelectedTopics((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const selectAll = () => setSelectedTopics(Object.keys(formulaData));
  const selectDone = () =>
    setSelectedTopics(Object.keys(formulaData).filter(isCompleted));
  const clearAll = () => setSelectedTopics([]);

  // Copy formula text to clipboard
  const copyFormula = (formulaText, id) => {
    navigator.clipboard.writeText(formulaText);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // ── Filtered formulas by search and category ──────────────────────────────
  const filteredData = useMemo(() => {
    return Object.entries(formulaData)
      .filter(([key, topic]) => {
        const matchesSelection = selectedTopics.includes(key);
        const matchesCategory =
          activeCategory === "All Subjects" || topic.category === activeCategory;
        return matchesSelection && matchesCategory;
      })
      .map(([key, topic]) => ({
        key,
        ...topic,
        formulas: topic.formulas.filter(
          (f) =>
            searchTerm === "" ||
            f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            f.formula.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (f.note && f.note.toLowerCase().includes(searchTerm.toLowerCase()))
        ),
      }))
      .filter((t) => t.formulas.length > 0);
  }, [selectedTopics, activeCategory, searchTerm]);

  // Total formulas count
  const totalFormulasCount = useMemo(() => {
    return filteredData.reduce((acc, t) => acc + t.formulas.length, 0);
  }, [filteredData]);

  // ── PDF Download ─────────────────────────────────────────────────────────
  const downloadPDF = async () => {
    if (!sheetRef.current) return;
    setDownloading(true);
    try {
      const canvas = await html2canvas(sheetRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const ratio = canvas.width / canvas.height;
      const imgW = pageW - 20;
      const imgH = imgW / ratio;
      let heightLeft = imgH;
      let position = 10;

      pdf.addImage(imgData, "PNG", 10, position, imgW, imgH);
      heightLeft -= pageH - 20;

      while (heightLeft > 0) {
        position = heightLeft - imgH + 10;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 10, position, imgW, imgH);
        heightLeft -= pageH - 20;
      }
      pdf.save("CalcVoyager-Formula-CheatSheet.pdf");
    } catch (err) {
      console.error("PDF generation failed:", err);
    }
    setDownloading(false);
  };

  return (
    <div className="cheat-page">
      {/* ── Page Hero ── */}
      <div className="cs-hero">
        <div className="cs-hero-kicker">Formula Reference &amp; Study Guide</div>
        <h1 className="cs-hero-title">Mathematical Formula Cheat Sheet</h1>
        <p className="cs-hero-desc">
          Comprehensive catalog of definitions, identities, theorems, and computational formulas across Single-Variable Calculus, Multivariable Calculus, Linear Algebra, and Probability &amp; Statistics.
        </p>
      </div>

      {/* ── Category Filter Tabs ── */}
      <div className="cs-category-tabs">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`cs-cat-tab ${activeCategory === cat ? "cs-cat-tab--active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Controls Bar ── */}
      <div className="cs-controls-bar">
        {/* Search */}
        <div className="cs-search-box">
          <span className="cs-search-icon">🔍</span>
          <input
            type="text"
            className="cs-search-input"
            placeholder="Search formulas, theorems, variables (e.g. Stokes, Bayes, Eigen, Taylor)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Action Buttons */}
        <div className="cs-btn-group">
          <button onClick={selectAll} className="cs-action-btn">
            All Topics
          </button>
          <button onClick={selectDone} className="cs-action-btn">
            ✓ Mastered Only
          </button>
          <button onClick={clearAll} className="cs-action-btn">
            Clear
          </button>
          <button
            onClick={downloadPDF}
            disabled={downloading || totalFormulasCount === 0}
            className="cs-action-btn cs-download-btn"
          >
            {downloading ? "⏳ Building PDF..." : `⬇ Export PDF (${totalFormulasCount})`}
          </button>
        </div>
      </div>

      {/* ── Topic Filter Chips ── */}
      <div className="cs-chips-container">
        {Object.entries(formulaData)
          .filter(
            ([, topic]) =>
              activeCategory === "All Subjects" || topic.category === activeCategory
          )
          .map(([key, topic]) => {
            const active = selectedTopics.includes(key);
            const completed = isCompleted(key);
            return (
              <button
                key={key}
                onClick={() => toggleTopic(key)}
                className={`cs-chip ${active ? "cs-chip--active" : ""}`}
              >
                {completed ? "✓ " : ""}
                {topic.title}
              </button>
            );
          })}
      </div>

      {/* ── Formula Sheet (Rendered on page & Exported to PDF) ── */}
      {filteredData.length === 0 ? (
        <div className="cs-empty-state">
          <span className="cs-empty-icon">📭</span>
          <h3>No matching formulas found</h3>
          <p>Try clearing your search or selecting different topics above.</p>
        </div>
      ) : (
        <div className="cs-sheet-container" ref={sheetRef}>
          {/* PDF Brand Header */}
          <div className="cs-sheet-header">
            <h2 className="cs-sheet-logo">CalcVoyager — Comprehensive Mathematical Reference Sheet</h2>
            <p className="cs-sheet-date">
              Curated Reference Guide · Generated on {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          {/* Topics & Formula Cards */}
          {filteredData.map((topic) => (
            <div key={topic.key} className="cs-topic-block">
              {/* Topic Header */}
              <div className="cs-topic-header">
                <div
                  className="cs-topic-color-bar"
                  style={{ background: topic.color || "#0284c7" }}
                />
                <h3 className="cs-topic-title">{topic.title}</h3>
                <span className="cs-topic-badge">{topic.category}</span>
                <span className="cs-topic-count">
                  {topic.formulas.length} formula{topic.formulas.length === 1 ? "" : "s"}
                </span>
              </div>

              {/* Formulas Grid */}
              <div className="cs-formula-grid">
                {topic.formulas.map((f, i) => {
                  const cardId = `${topic.key}-${i}`;
                  return (
                    <div
                      key={i}
                      className="cs-formula-card"
                      style={{ borderLeft: `4px solid ${topic.color || "#0284c7"}` }}
                    >
                      <div className="cs-formula-top">
                        <span
                          className="cs-formula-name"
                          style={{ color: topic.color || "#0284c7" }}
                        >
                          {f.name}
                        </span>
                        <button
                          className="cs-copy-btn"
                          onClick={() => copyFormula(f.formula, cardId)}
                          title="Copy formula expression"
                        >
                          {copiedIndex === cardId ? "✓ Copied" : "Copy"}
                        </button>
                      </div>

                      <div className="cs-formula-box">{f.formula}</div>

                      {f.note && (
                        <div className="cs-formula-note">
                          💡 <strong>Note:</strong> {f.note}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
