import { Link } from "react-router-dom";
import { getCourseById } from "../../data/courses";
import "../linearAlgebra/LinearAlgebraOverview.css";

const CORE_CERT_PATHS = new Set([
  "/probability-statistics/probability-basics/1",
  "/probability-statistics/random-variables/1",
  "/probability-statistics/descriptive-statistics/1",
  "/probability-statistics/hypothesis-testing/1",
  "/probability-statistics/regression-correlation/1",
]);

const EXCLUDED_FROM_ROADMAP = new Set([
  "/probability-statistics/overview",
  "/courses/probability-statistics/overview",
  "/practice",
  "/quiz/probability-statistics",
]);

function ProbabilityStatisticsOverview() {
  const course = getCourseById("probability-statistics");
  const roadmap = (course?.modules || []).filter((m) => !EXCLUDED_FROM_ROADMAP.has(m.path));
  const firstTopicPath = roadmap[0]?.path || "/probability-statistics/probability-basics/1";

  return (
    <main className="home-page la-overview">
      <section className="home-hero" style={{ minHeight: "auto" }}>
        <div className="hero-copy">
          <p className="eyebrow">Start here · Course overview</p>
          <h1>Probability &amp; Statistics, from first principles</h1>
          <p>
            Probability and Statistics provides the mathematical tools to quantify uncertainty, model
            stochastic systems, and make principled inferences from data. Covering Kolmogorov probability
            axioms, Bayes' Theorem, discrete and continuous random variables, moment generating functions,
            sampling distributions, statistical hypothesis testing, ANOVA, and linear regression, this
            curriculum bridges theoretical rigor with modern applications in data science and machine learning.
          </p>
          <div className="hero-actions">
            <Link className="secondary-action" to="/courses/probability-statistics">
              ← All modules
            </Link>
            <Link className="primary-action" to={firstTopicPath}>
              Begin with {roadmap[0]?.title || "Probability Basics"} →
            </Link>
          </div>
        </div>
        <div className="hero-image-container course-hero-image-container">
          <img
            src="/images/courses/prob-stats-hero.svg"
            alt="Probability and Statistics Gaussian Bell Curve and Regression Visual"
            className="hero-graph-img course-hero-img"
          />
        </div>
      </section>

      <section className="guide-section" aria-labelledby="why-heading">
        <div className="section-kicker">Why it matters</div>
        <h2 id="why-heading">What probability &amp; statistics actually gives you</h2>
        <p className="la-overview-lead">
          From medicine and finance to artificial intelligence and quantum mechanics, real systems are
          inherently uncertain. Probability provides the formal framework to reason about uncertainty,
          while statistics lets you test hypotheses, estimate parameters, and discover patterns from real-world data.
        </p>
        <ul className="la-overview-bullets">
          <li>Quantify risk and update beliefs rationally using conditional probability and Bayes' Theorem.</li>
          <li>Model real-world phenomena with named distributions (Binomial, Poisson, Exponential, Normal).</li>
          <li>Make scientific decisions and validate claims with Z-tests, t-tests, ANOVA, and p-values.</li>
          <li>Predict outcomes and measure explanatory relationships using Ordinary Least Squares regression and correlation.</li>
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
          Every topic module contains two detailed sections with formal definitions, theorems, step-by-step
          procedures, worked certificate examples with common pitfalls, and interactive MCQ quizzes after
          each major concept. Score 80%+ on each quiz to unlock section completion.
        </p>
        <p className="la-overview-lead">
          <strong>Probability Basics</strong>, <strong>Random Variables &amp; Distributions</strong>,{" "}
          <strong>Descriptive Statistics</strong>, <strong>Hypothesis Testing</strong>, and{" "}
          <strong>Regression &amp; Correlation</strong> form the core certificate track. Complete all ten
          sections to unlock the 30-question final certification exam.
        </p>
      </section>

      <section className="guide-section" aria-labelledby="prereq-heading">
        <div className="section-kicker">Before you start</div>
        <h2 id="prereq-heading">Prerequisites</h2>
        <p className="la-overview-lead">
          Familiarity with basic high school algebra (working with equations, summation notation, and exponents)
          and basic single-variable calculus (derivatives and simple integrals for continuous PDFs) is recommended.
        </p>
      </section>
    </main>
  );
}

export default ProbabilityStatisticsOverview;
