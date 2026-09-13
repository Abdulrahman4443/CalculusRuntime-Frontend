import { Link } from "react-router-dom";
import { getCourseById } from "../../data/courses";
import "../linearAlgebra/LinearAlgebraOverview.css";

const CORE_CERT_PATHS = new Set([
  "/partial-derivatives/1",
  "/vector-calculus/1",
  "/multiple-integrals/1",
  "/lagrange-multipliers/1",
  "/divergence-curl/1",
  "/stokes-theorem/1",
]);

const EXCLUDED_FROM_ROADMAP = new Set([
  "/multivariable-calculus/overview",
  "/courses/multivariable-calculus/overview",
  "/practice",
  "/quiz/multivariable-calculus",
]);

function MultivariableOverview() {
  const course = getCourseById("multivariable-calculus");
  const roadmap = (course?.modules || []).filter((m) => !EXCLUDED_FROM_ROADMAP.has(m.path));
  const firstTopicPath = roadmap[0]?.path || "/partial-derivatives/1";

  return (
    <main className="home-page la-overview">
      <section className="home-hero" style={{ minHeight: "auto" }}>
        <div className="hero-copy">
          <p className="eyebrow">Start here · Course overview</p>
          <h1>Multivariable Calculus, from first principles</h1>
          <p>
            Multivariable Calculus extends single-variable analysis into multidimensional space and
            physical vector field theory. Master surfaces, directional derivatives, tangent planes,
            constrained optimization via Lagrange multipliers, double and triple integrals in multiple
            coordinate systems, and the crown jewel theorems of vector calculus—Green's, Stokes', and
            the Divergence Theorem.
          </p>
          <div className="hero-actions">
            <Link className="secondary-action" to="/courses/multivariable-calculus">
              ← All modules
            </Link>
            <Link className="primary-action" to={firstTopicPath}>
              Begin with {roadmap[0]?.title || "Partial Derivatives"} →
            </Link>
          </div>
        </div>
        <div className="hero-image-container course-hero-image-container">
          <img
            src="/images/courses/multivariable-calc-hero.svg"
            alt="Multivariable Calculus 3D Surface and Gradient Field"
            className="hero-graph-img course-hero-img"
          />
        </div>
      </section>

      <section className="guide-section" aria-labelledby="why-heading">
        <div className="section-kicker">Why it matters</div>
        <h2 id="why-heading">What multivariable calculus actually gives you</h2>
        <p className="la-overview-lead">
          The real world has three spatial dimensions (and time as the fourth). Understanding gravity,
          electromagnetism, fluid flow, aerodynamics, neural network gradient descent, and thermodynamic
          heat transfer requires multivariable calculus.
        </p>
        <ul className="la-overview-bullets">
          <li>Optimize multidimensional functions and find extrema using partial derivatives and Hessians.</li>
          <li>Find constrained optima in economics and engineering with Lagrange Multipliers.</li>
          <li>Compute masses, moments, and volumes of 3D solids using Cartesian, cylindrical, and spherical triple integrals.</li>
          <li>Connect microscopic circulation and flux to macroscopic boundary integrals through Green's, Gauss's, and Stokes' Theorems.</li>
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
          Every topic guide is split into two sections with rigorous theoretical foundations, graphical
          intuition, worked examples, and interactive MCQ checkpoints with instant score tracking.
        </p>
        <p className="la-overview-lead">
          The core certificate track covers <strong>Partial Derivatives</strong>, <strong>Vector Calculus</strong>,{" "}
          <strong>Multiple Integrals</strong>, <strong>Lagrange Multipliers</strong>,{" "}
          <strong>Divergence &amp; Curl</strong>, and <strong>Stokes' Theorem</strong>. Complete all twelve
          sections to unlock the 30-question final exam and earn your verifiable digital certificate.
        </p>
      </section>

      <section className="guide-section" aria-labelledby="prereq-heading">
        <div className="section-kicker">Before you start</div>
        <h2 id="prereq-heading">Prerequisites</h2>
        <p className="la-overview-lead">
          Comfort with single-variable differential and integral calculus (derivatives, product/chain rules,
          definite integrals) and basic vector algebra (dot and cross products in 3D) is recommended.
        </p>
      </section>
    </main>
  );
}

export default MultivariableOverview;
