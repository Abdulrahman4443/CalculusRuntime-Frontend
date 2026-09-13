import { Link } from "react-router-dom";
import { getCourseById } from "../../data/courses";
import "../linearAlgebra/LinearAlgebraOverview.css";

const CORE_CERT_PATHS = new Set([
  "/limits-continuity/1",
  "/differentiation/1",
  "/integration/1",
  "/sequences-series/1",
  "/conic-sections/1",
  "/lines-geometry/1",
  "/circles-tangents/1",
  "/advanced-calculus/1",
  "/differential-equations/1",
]);

const EXCLUDED_FROM_ROADMAP = new Set([
  "/calculus/overview",
  "/courses/calculus-analytical-geometry/overview",
  "/practice",
  "/quiz/calculus-analytical-geometry",
]);

function CalculusOverview() {
  const course = getCourseById("calculus-analytical-geometry");
  const roadmap = (course?.modules || []).filter((m) => !EXCLUDED_FROM_ROADMAP.has(m.path));
  const firstTopicPath = roadmap[0]?.path || "/limits-continuity/1";

  return (
    <main className="home-page la-overview">
      <section className="home-hero" style={{ minHeight: "auto" }}>
        <div className="hero-copy">
          <p className="eyebrow">Start here · Course overview</p>
          <h1>Calculus &amp; Analytical Geometry, from first principles</h1>
          <p>
            Calculus and Analytical Geometry forms the mathematical bedrock for modern science,
            engineering, and computational physics. From rigorous epsilon-delta limit definitions and
            rates of change to accumulation via Riemann integrals, infinite series, coordinate geometry,
            and differential equations, this course takes you from foundational principles to university
            mastery aligned with F.Sc (FBISE/Punjab) and Pakistani university syllabi (NUST, FAST, GIKI, UET).
          </p>
          <div className="hero-actions">
            <Link className="secondary-action" to="/courses/calculus-analytical-geometry">
              ← All modules
            </Link>
            <Link className="primary-action" to={firstTopicPath}>
              Begin with {roadmap[0]?.title || "Limits & Continuity"} →
            </Link>
          </div>
        </div>
        <div className="hero-image-container course-hero-image-container">
          <img
            src="/images/courses/calc-geometry-hero.svg"
            alt="Calculus and Analytical Geometry Curves and Tangents Visual"
            className="hero-graph-img course-hero-img"
          />
        </div>
      </section>

      <section className="guide-section" aria-labelledby="why-heading">
        <div className="section-kicker">Why it matters</div>
        <h2 id="why-heading">What calculus &amp; geometry actually gives you</h2>
        <p className="la-overview-lead">
          Every discipline that models physical change, optimization, geometry, or rates depends on
          calculus. Analytical geometry bridges algebra with spatial reasoning, allowing lines, curves,
          and conic sections to be analyzed through equations.
        </p>
        <ul className="la-overview-bullets">
          <li>Model rates of change, velocity, acceleration, and sensitivity with differential calculus.</li>
          <li>Calculate accumulated quantities, areas, volumes, work, and center of mass using integration.</li>
          <li>Classify trajectories and orbits using analytical conic equations and tangent properties.</li>
          <li>Solve physical rate equations and dynamic systems using ordinary differential equations (ODEs).</li>
        </ul>
      </section>

      <section className="guide-section" aria-labelledby="roadmap-heading">
        <div className="section-kicker">Roadmap</div>
        <h2 id="roadmap-heading">What you'll learn, in order</h2>
        <ol className="la-roadmap">
          {roadmap.map((mod, i) => {
            const isCore = CORE_CERT_PATHS.has(mod.path);
            const isTool = mod.meta?.toLowerCase().includes("tool") || mod.meta?.toLowerCase().includes("interactive");
            return (
              <li key={mod.path}>
                <Link to={mod.path} className="la-roadmap-row">
                  <span className="la-roadmap-num">{i + 1}</span>
                  <span className="la-roadmap-copy">
                    <span className="la-roadmap-title">
                      {mod.title}
                      <span className={`la-roadmap-tag${isCore ? " la-roadmap-tag--core" : ""}`}>
                        {isCore ? "Core · certificate" : isTool ? "Interactive Tool" : "Additional Depth"}
                      </span>
                    </span>
                    <small>{mod.description}</small>
                  </span>
                  <span className="la-roadmap-arrow" aria-hidden="true">→</span>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="guide-section" aria-labelledby="structure-heading">
        <div className="section-kicker">How this course works</div>
        <h2 id="structure-heading">Structure &amp; certificate</h2>
        <p className="la-overview-lead">
          Every topic module contains two detailed sections of in-depth theory, step-by-step certificate
          worked examples, and interactive MCQ checkpoints with instant feedback and step-by-step reasoning.
          Scoring 80%+ on each topic's quizzes unlocks section completion.
        </p>
        <p className="la-overview-lead">
          Complete all nine core certificate tracks—<strong>Limits &amp; Continuity</strong>,{" "}
          <strong>Differentiation</strong>, <strong>Integration</strong>, <strong>Sequences &amp; Series</strong>,{" "}
          <strong>Conic Sections</strong>, <strong>Straight Lines</strong>, <strong>Circles &amp; Tangents</strong>,{" "}
          <strong>Advanced Single-Variable Calculus</strong>, and <strong>Ordinary Differential Equations</strong>—to{" "}
          unlock the 30-question comprehensive certification exam and earn your verifiable digital certificate.
        </p>
      </section>

      <section className="guide-section" aria-labelledby="prereq-heading">
        <div className="section-kicker">Before you start</div>
        <h2 id="prereq-heading">Prerequisites</h2>
        <p className="la-overview-lead">
          A solid grounding in high school algebra, basic trigonometry (unit circle, identities), and
          standard function notation is all you need. The course starts from intuitive limits and builds
          steadily through every concept from first principles.
        </p>
      </section>
    </main>
  );
}

export default CalculusOverview;
