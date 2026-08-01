import React, { useState, useMemo, useEffect } from "react";import * as math from "mathjs";

const MAX_SIZE = 5;
const MIN_SIZE = 1;

const makeGrid = (rows, cols, fill = 0) =>
  Array.from({ length: rows }, () => Array.from({ length: cols }, () => fill));

const identityGrid = (n) =>
  Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))
  );

const fmt = (v) => {
  if (typeof v !== "number" || !isFinite(v)) return "—";
  const r = Math.round(v * 1000) / 1000;
  return Object.is(r, -0) ? "0" : String(r);
};

function toFraction(x) {
  try {
    return math.fraction(math.round(x, 6)).toFraction(true);
  } catch {
    return fmt(x);
  }
}

// Gaussian elimination to RREF with a human-readable step log.
function rrefWithSteps(input) {
  const M = input.map((row) => row.slice());
  const rows = M.length;
  const cols = M[0].length;
  const steps = [];
  let pivotRow = 0;

  for (let col = 0; col < cols && pivotRow < rows; col++) {
    // Find a pivot in this column at or below pivotRow.
    let sel = -1;
    let best = 1e-9;
    for (let r = pivotRow; r < rows; r++) {
      if (Math.abs(M[r][col]) > best) {
        best = Math.abs(M[r][col]);
        sel = r;
      }
    }
    if (sel === -1) continue; // no pivot in this column, move on

    if (sel !== pivotRow) {
      [M[sel], M[pivotRow]] = [M[pivotRow], M[sel]];
      steps.push({
        text: `Swap R${sel + 1} ↔ R${pivotRow + 1} to bring a nonzero entry into the pivot position (column ${col + 1}).`,
        grid: M.map((r) => r.slice()),
      });
    }

    const pivotVal = M[pivotRow][col];
    if (Math.abs(pivotVal - 1) > 1e-9) {
      M[pivotRow] = M[pivotRow].map((v) => v / pivotVal);
      steps.push({
        text: `Scale R${pivotRow + 1} by 1/${toFraction(pivotVal)} to make the pivot in column ${col + 1} equal to 1.`,
        grid: M.map((r) => r.slice()),
      });
    }

    for (let r = 0; r < rows; r++) {
      if (r === pivotRow) continue;
      const factor = M[r][col];
      const pr = pivotRow;
      if (Math.abs(factor) > 1e-9) {
        M[r] = M[r].map((v, c) => v - factor * M[pr][c]);
        steps.push({
          text: `R${r + 1} → R${r + 1} − (${toFraction(factor)})·R${pr + 1} to clear column ${col + 1} above/below the pivot.`,
          grid: M.map((row) => row.slice()),
        });
      }
    }

    pivotRow++;
  }

  return { result: M, steps, rank: pivotRow };
}

function MatrixGrid({ grid, onChange, editable = true, label, highlightCol = -1 }) {
  return (
    <div className="ms-matrix">
      {label ? <div className="ms-matrix-label">{label}</div> : null}
      <div
        className="ms-grid"
        style={{ gridTemplateColumns: `repeat(${grid[0]?.length || 1}, minmax(3.2rem, 1fr))` }}
      >
        {grid.map((row, i) =>
          row.map((val, j) => (
            <input
              key={`${i}-${j}`}
              className={"ms-cell" + (j === highlightCol ? " ms-cell-hl" : "")}
              type="number"
              value={val}
              disabled={!editable}
              onChange={(e) => {
                if (!onChange) return;
                const next = grid.map((r) => r.slice());
                const parsed = e.target.value === "" ? "" : Number(e.target.value);
                next[i][j] = parsed;
                onChange(next);
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}

function MatrixSandbox() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Matrix Sandbox · CalcVoyager";
    return () => {
      document.title = previous;
    };
  }, []);
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [grid, setGrid] = useState(() => identityGrid(3).map((r, i) => r.map((v, j) => (i === j ? 2 : i === j - 1 ? 1 : 0))));
  const [activeTab, setActiveTab] = useState("rref");
  const [scalar, setScalar] = useState(2);
  const [stepIndex, setStepIndex] = useState(0);

  const resize = (newRows, newCols) => {
    const r = Math.min(MAX_SIZE, Math.max(MIN_SIZE, newRows));
    const c = Math.min(MAX_SIZE, Math.max(MIN_SIZE, newCols));
    setRows(r);
    setCols(c);
    setGrid((prev) => {
      const next = makeGrid(r, c, 0);
      for (let i = 0; i < Math.min(r, prev.length); i++) {
        for (let j = 0; j < Math.min(c, prev[0].length); j++) {
          next[i][j] = prev[i][j];
        }
      }
      return next;
    });
    setStepIndex(0);
  };

  const numericGrid = useMemo(
    () => grid.map((row) => row.map((v) => (v === "" || v === undefined ? 0 : Number(v)))),
    [grid]
  );
  const isSquare = rows === cols;

  const rref = useMemo(() => rrefWithSteps(numericGrid), [numericGrid]);

  const determinant = useMemo(() => {
    if (!isSquare) return null;
    try {
      return math.det(numericGrid);
    } catch {
      return null;
    }
  }, [numericGrid, isSquare]);

  const inverse = useMemo(() => {
    if (!isSquare) return null;
    try {
      if (Math.abs(determinant) < 1e-9) return "singular";
      return math.inv(numericGrid);
    } catch {
      return "singular";
    }
  }, [numericGrid, isSquare, determinant]);

  const transpose = useMemo(() => math.transpose(numericGrid), [numericGrid]);

  const rank = rref.rank;

  const scaled = useMemo(
    () => numericGrid.map((row) => row.map((v) => v * (Number(scalar) || 0))),
    [numericGrid, scalar]
  );

  const currentStepGrid = rref.steps.length
    ? (stepIndex === 0 ? numericGrid : rref.steps[stepIndex - 1].grid)
    : numericGrid;

  const tabs = [
    { id: "rref", label: "RREF (step-by-step)" },
    { id: "det", label: "Determinant" },
    { id: "inverse", label: "Inverse" },
    { id: "transpose", label: "Transpose" },
    { id: "scalar", label: "Scalar multiply" },
  ];

  return (
    <div className="ms-page">
      <div className="ms-container">
        <h1 className="ms-title">Matrix Sandbox</h1>
        <div className="ms-subtitle">
          Enter a matrix, then row-reduce it, find its determinant/inverse/transpose, or scale it — with every step shown.
        </div>

        <div className="ms-controls">
          <label className="ms-size-label">
            Rows
            <input
              type="number"
              min={MIN_SIZE}
              max={MAX_SIZE}
              value={rows}
              onChange={(e) => resize(Number(e.target.value) || MIN_SIZE, cols)}
            />
          </label>
          <label className="ms-size-label">
            Columns
            <input
              type="number"
              min={MIN_SIZE}
              max={MAX_SIZE}
              value={cols}
              onChange={(e) => resize(rows, Number(e.target.value) || MIN_SIZE)}
            />
          </label>
          <button className="ms-btn ms-btn-ghost" onClick={() => setGrid(makeGrid(rows, cols, 0))}>
            Clear
          </button>
          <button
            className="ms-btn ms-btn-ghost"
            onClick={() => isSquare && setGrid(identityGrid(rows))}
            disabled={!isSquare}
            title={isSquare ? "Load identity matrix" : "Only available for square matrices"}
          >
            Identity
          </button>
        </div>

        <MatrixGrid grid={grid} onChange={(g) => { setGrid(g); setStepIndex(0); }} label={`A (${rows}×${cols})`} />

        <div className="ms-tabs">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={"ms-tab" + (activeTab === t.id ? " ms-tab-active" : "")}
              onClick={() => { setActiveTab(t.id); setStepIndex(0); }}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="ms-panel">
          {activeTab === "rref" && (
            <>
              <div className="ms-panel-title">Row reduction, one step at a time</div>
              <MatrixGrid grid={currentStepGrid} editable={false} label={stepIndex === 0 ? "Starting matrix" : `After step ${stepIndex}`} />
              {rref.steps.length > 0 ? (
                <>
                  <div className="ms-step-text">
                    {stepIndex === 0
                      ? "Click \"Next step\" to begin row-reducing toward RREF."
                      : rref.steps[stepIndex - 1].text}
                  </div>
                  <div className="ms-step-nav">
                    <button className="ms-btn" disabled={stepIndex === 0} onClick={() => setStepIndex((s) => Math.max(0, s - 1))}>
                      ← Prev step
                    </button>
                    <span className="ms-step-count">{stepIndex} / {rref.steps.length}</span>
                    <button
                      className="ms-btn"
                      disabled={stepIndex >= rref.steps.length}
                      onClick={() => setStepIndex((s) => Math.min(rref.steps.length, s + 1))}
                    >
                      Next step →
                    </button>
                  </div>
                </>
              ) : (
                <div className="ms-step-text">This matrix is already in reduced row-echelon form.</div>
              )}
              <div className="ms-note">Rank of A (number of pivot rows): <strong>{rank}</strong></div>
            </>
          )}

          {activeTab === "det" && (
            <>
              <div className="ms-panel-title">Determinant</div>
              {isSquare ? (
                <div className="ms-result-big">det(A) = {fmt(determinant)}</div>
              ) : (
                <div className="ms-step-text">The determinant is only defined for square matrices. Set rows = columns first.</div>
              )}
            </>
          )}

          {activeTab === "inverse" && (
            <>
              <div className="ms-panel-title">Inverse</div>
              {!isSquare ? (
                <div className="ms-step-text">The inverse is only defined for square matrices.</div>
              ) : inverse === "singular" ? (
                <div className="ms-step-text">det(A) = {fmt(determinant)} ≈ 0, so A is singular — no inverse exists.</div>
              ) : (
                <MatrixGrid grid={inverse.map((row) => row.map(fmt))} editable={false} label="A⁻¹" />
              )}
            </>
          )}

          {activeTab === "transpose" && (
            <>
              <div className="ms-panel-title">Transpose</div>
              <MatrixGrid grid={transpose} editable={false} label={`Aᵀ (${cols}×${rows})`} />
            </>
          )}

          {activeTab === "scalar" && (
            <>
              <div className="ms-panel-title">Scalar multiply</div>
              <label className="ms-size-label">
                k
                <input type="number" value={scalar} onChange={(e) => setScalar(e.target.value)} />
              </label>
              <MatrixGrid grid={scaled.map((row) => row.map(fmt))} editable={false} label={`${scalar}·A`} />
            </>
          )}
        </div>
      </div>

      <style>{`
                .ms-page {
                    --ms-teal: #a0720a;
                    --ms-gold: #c89318;
                    --ms-blue: #2f4d6b;
                    --ms-red: #7c2f0a;
                    --ms-green: #3a5f32;
                    --ms-ink: #16120a;
                    --ms-muted: #5c4f3a;
                    --ms-card: #fdf8f0;
                    --ms-soft: #f4ede0;
                    --ms-line: #d4c4a8;
                    --ms-shadow: 0 8px 32px rgba(21,16,12,0.10);
                    min-height: 100vh;
                    background: var(--paper, #f4ede0);
                    padding: clamp(1.5rem, 5vw, 3.5rem) clamp(1rem, 4vw, 3rem);
                }
                [data-theme="dark"] .ms-page {
                    --ms-ink: #f5f0e8;
                    --ms-muted: #b5a98e;
                    --ms-card: #1e1a14;
                    --ms-soft: #17130d;
                    --ms-line: #3a3020;
                }
                .ms-container { max-width: 760px; margin: 0 auto; }
                .ms-title {
                    font-family: Georgia, serif;
                    font-size: clamp(2rem, 6vw, 3.2rem);
                    color: var(--ms-ink);
                    margin: 0;
                    text-align: center;
                    font-weight: 700;
                }
                .ms-subtitle {
                    color: var(--ms-muted);
                    text-align: center;
                    margin: 0.8rem auto 2rem;
                    max-width: 520px;
                    line-height: 1.6;
                }
                .ms-controls {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                    align-items: end;
                    justify-content: center;
                    margin-bottom: 1.25rem;
                }
                .ms-size-label {
                    display: flex;
                    flex-direction: column;
                    font-size: 0.75rem;
                    color: var(--ms-muted);
                    gap: 0.25rem;
                }
                .ms-size-label input {
                    width: 4.2rem;
                    padding: 0.4rem 0.5rem;
                    border: 1px solid var(--ms-line);
                    border-radius: 6px;
                    background: var(--ms-card);
                    color: var(--ms-ink);
                }
                .ms-btn {
                    padding: 0.5rem 0.9rem;
                    border-radius: 6px;
                    border: 1px solid var(--ms-teal);
                    background: var(--ms-teal);
                    color: #fff;
                    font-weight: 600;
                    cursor: pointer;
                }
                .ms-btn:disabled { opacity: 0.4; cursor: not-allowed; }
                .ms-btn-ghost {
                    background: transparent;
                    color: var(--ms-teal);
                }
                .ms-matrix { margin: 0 auto 1.5rem; display: flex; flex-direction: column; align-items: center; }
                .ms-matrix-label { font-size: 0.8rem; color: var(--ms-muted); margin-bottom: 0.5rem; font-weight: 600; }
                .ms-grid {
                    display: grid;
                    gap: 0.4rem;
                    background: var(--ms-card);
                    border: 1px solid var(--ms-line);
                    border-radius: 10px;
                    padding: 0.9rem;
                    box-shadow: var(--ms-shadow);
                }
                .ms-cell {
                    width: 100%;
                    text-align: center;
                    padding: 0.5rem 0.3rem;
                    border: 1px solid var(--ms-line);
                    border-radius: 6px;
                    background: var(--ms-soft);
                    color: var(--ms-ink);
                    font-size: 0.95rem;
                }
                .ms-cell:disabled { opacity: 0.85; }
                .ms-cell-hl { border-color: var(--ms-gold); box-shadow: 0 0 0 2px var(--ms-gold) inset; }
                .ms-tabs {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    justify-content: center;
                    margin-bottom: 1rem;
                }
                .ms-tab {
                    padding: 0.45rem 0.85rem;
                    border-radius: 999px;
                    border: 1px solid var(--ms-line);
                    background: var(--ms-card);
                    color: var(--ms-muted);
                    font-size: 0.85rem;
                    cursor: pointer;
                }
                .ms-tab-active {
                    background: var(--ms-teal);
                    border-color: var(--ms-teal);
                    color: #fff;
                    font-weight: 600;
                }
                .ms-panel {
                    background: var(--ms-card);
                    border: 1px solid var(--ms-line);
                    border-radius: 12px;
                    padding: 1.25rem 1.4rem;
                    box-shadow: var(--ms-shadow);
                }
                .ms-panel-title {
                    font-family: Georgia, serif;
                    font-size: 1.1rem;
                    color: var(--ms-ink);
                    margin-bottom: 0.9rem;
                    text-align: center;
                }
                .ms-step-text {
                    color: var(--ms-muted);
                    line-height: 1.6;
                    text-align: center;
                    margin: 0.75rem 0;
                }
                .ms-step-nav {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    margin-top: 0.75rem;
                }
                .ms-step-count { color: var(--ms-muted); font-size: 0.85rem; }
                .ms-note { text-align: center; color: var(--ms-muted); margin-top: 1rem; font-size: 0.9rem; }
                .ms-result-big {
                    text-align: center;
                    font-size: 1.4rem;
                    font-weight: 700;
                    color: var(--ms-ink);
                    padding: 1rem 0;
                }
            `}</style>
    </div>
  );
}

export default MatrixSandbox;