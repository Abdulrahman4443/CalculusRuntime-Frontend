/** Shared theory / procedure / worked-example blocks for Linear Algebra guides. */

export function TheoryBox({ title, children }) {
  return (
    <div className="box def">
      <div className="box-lbl">Theory</div>
      {title ? <div className="exm-title">{title}</div> : null}
      {children}
    </div>
  );
}

export function TheoremBox({ title, children }) {
  return (
    <div className="box thm">
      <div className="box-lbl">Key fact</div>
      {title ? <div className="exm-title">{title}</div> : null}
      {children}
    </div>
  );
}

export function ProcedureBox({ title, steps }) {
  return (
    <div className="box thm">
      <div className="box-lbl">Method — step by step</div>
      {title ? <div className="exm-title">{title}</div> : null}
      <ol style={{ margin: "0.5rem 0 0 1.15rem", padding: 0 }}>
        {steps.map((step, i) => (
          <li key={i} style={{ marginBottom: "0.55rem", lineHeight: 1.55 }}>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function WorkedExample({ number, title, setup, steps, result, check, mistake }) {
  return (
    <div className="box exm">
      <div className="box-lbl">Large worked example {number}</div>
      <div className="exm-title">{title}</div>
      {setup ? <p style={{ lineHeight: 1.6 }}>{setup}</p> : null}
      <div className="sol">
        <div className="sol-lbl">Detailed steps</div>
        <ol style={{ margin: "0.55rem 0 0 1.15rem", padding: 0 }}>
          {steps.map((step, i) => (
            <li key={i} style={{ marginBottom: "0.55rem", lineHeight: 1.55 }}>
              {step}
            </li>
          ))}
        </ol>
        {result ? (
          <p style={{ marginTop: "0.85rem", fontWeight: 600, lineHeight: 1.55 }}>
            <strong>Final answer: </strong>
            {result}
          </p>
        ) : null}
        {check ? (
          <p style={{ marginTop: "0.45rem", lineHeight: 1.55, opacity: 0.92 }}>
            <strong>Check: </strong>
            {check}
          </p>
        ) : null}
      </div>
      {mistake ? (
        <div className="box warn" style={{ marginTop: "0.9rem", marginBottom: 0 }}>
          <div className="box-lbl">Common mistake</div>
          <p style={{ lineHeight: 1.55, marginBottom: 0 }}>{mistake}</p>
        </div>
      ) : null}
    </div>
  );
}
