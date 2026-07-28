import StudyGuideShell from "../StudyGuideShell";
import "../PartialDerivativesGuide.css";
import { LaMcqSection } from "../linearAlgebra/LaMcq";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample } from "../linearAlgebra/LaBlocks";

function Divider() {
  return <hr className="divider" />;
}

function RegressionGuide({ part = 1 }) {
  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Regression (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Regression · Part 2</div></div>
          <a className="sb-link" href="#ps-r-fit">Least squares</a>
          <a className="sb-link" href="#ps-r-proc2">Method</a>
          <a className="sb-link" href="#ps-r-ex-p2">Examples</a>
          <a className="sb-link" href="#quiz-ps-r-fit">Quiz</a>
          <a className="sb-link" href="#ps-r-resid">Residuals</a>
          <a className="sb-link" href="#quiz-ps-r-resid">Quiz</a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Probability &amp; Statistics · Part 2 of 2</div>
            <h1 className="ch-title">Fitting Lines &amp; Residuals</h1>
            <p className="ch-sub">Predict $y$ from $x$ and check the fit</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <section className="section" id="ps-r-fit">
            <div className="sec-badge">Section 5.3</div>
            <h2 className="sec-title">Least-squares line</h2>
            <TheoryBox title="Minimize squared error">
              <p>
                {"Fit $\\hat y=b_0+b_1 x$ by minimizing $\\sum(y_i-\\hat y_i)^2$. Slope $b_1=r\\,s_y/s_x$ and intercept $b_0=\\bar y-b_1\\bar x$. The line always passes through $(\\bar x,\\bar y)$."}
              </p>
            </TheoryBox>
            <TheoremBox title="Interpretation">
              <p>
                {"$b_1$: expected change in $y$ per one-unit increase in $x$ (holding the linear model). $b_0$: predicted $y$ when $x=0$ — only meaningful if $x=0$ is in range."}
              </p>
            </TheoremBox>
          </section>

          <section className="section" id="ps-r-proc2">
            <div className="sec-badge">Procedure</div>
            <ProcedureBox
              title="Fit and check"
              steps={[
                "Plot the scatterplot first — look for linearity.",
                "Compute $r$, then $b_1=r s_y/s_x$, $b_0=\\bar y-b_1\\bar x$.",
                "Predict with $\\hat y=b_0+b_1 x$ (avoid wild extrapolation).",
                "Residuals $e_i=y_i-\\hat y_i$; plot $e$ vs $\\hat y$ for patterns.",
                "If curved or fan-shaped residuals, linear model is inadequate.",
              ]}
            />
          </section>

          <section className="section" id="ps-r-ex-p2">
            <div className="sec-badge">Worked examples</div>
            <WorkedExample
              number={1}
              title="Slope from r"
              setup={"$r=0.8$, $s_x=2$, $s_y=5$. Find $b_1$."}
              steps={[
                "$b_1=r s_y/s_x=0.8\\cdot 5/2=2$.",
              ]}
              result={"$b_1=2$."}
              check={"Positive r ⇒ positive slope."}
            />
            <WorkedExample
              number={2}
              title="Intercept"
              setup={"$\\bar x=3$, $\\bar y=10$, $b_1=2$. Find $b_0$."}
              steps={[
                "$b_0=\\bar y-b_1\\bar x=10-2\\cdot 3=4$.",
                "Line: $\\hat y=4+2x$.",
              ]}
              result={"$b_0=4$."}
              check={"Passes through $(3,10)$: $4+6=10$."}
            />
            <WorkedExample
              number={3}
              title="Prediction"
              setup={"$\\hat y=4+2x$. Predict at $x=5$."}
              steps={[
                "$\\hat y=4+10=14$.",
              ]}
              result={"$14$."}
              check={"Only trust if $x=5$ is near the observed $x$-range."}
            />
            <WorkedExample
              number={4}
              title="Residual"
              setup={"Observed $y=16$ at $x=5$, $\\hat y=14$. Residual?"}
              steps={[
                "$e=y-\\hat y=16-14=2$.",
                "Positive residual ⇒ point above the line.",
              ]}
              result={"$e=2$."}
              check={"Observed minus predicted."}
            />
          </section>

          <LaMcqSection
            id="quiz-ps-r-fit"
            badge="Quiz 5.3"
            title="Least squares"
            scoreId="score-ps-r-fit"
            section="ps-r-fit"
            questions={[
              {
                prompt: "Least squares minimizes:",
                options: ["Sum of residuals", "Sum of squared residuals", "Sum of $|e_i|$ only"],
                answer: "B",
                explanation: "Squared vertical errors.",
              },
              {
                prompt: "The fitted line always goes through:",
                options: ["$(0,0)$", "$(\\bar x,\\bar y)$", "$(1,1)$"],
                answer: "B",
                explanation: "Centroid property of least squares.",
              },
              {
                prompt: "$b_1=r s_y/s_x$ implies if $r=0$ then:",
                options: ["Slope is infinite", "Slope is 0", "Intercept is 0"],
                answer: "B",
                explanation: "No linear association ⇒ flat best line.",
              },
            ]}
          />

          <Divider />
          <section className="section" id="ps-r-resid">
            <div className="sec-badge">Section 5.4</div>
            <h2 className="sec-title">Residual diagnostics</h2>
            <TheoryBox title="What good residuals look like">
              <p>
                {"Ideally: scatter randomly about 0 with constant spread. Patterns (curves, funnels, clumps) warn that linearity, equal variance, or independence may fail."}
              </p>
            </TheoryBox>
          </section>

          <LaMcqSection
            id="quiz-ps-r-resid"
            badge="Quiz 5.4"
            title="Residuals"
            scoreId="score-ps-r-resid"
            section="ps-r-resid"
            questions={[
              {
                prompt: "Residual equals:",
                options: ["$\\hat y-y$", "$y-\\hat y$", "$y-\\bar y$"],
                answer: "B",
                explanation: "Observed minus fitted.",
              },
              {
                prompt: "A curved residual plot suggests:",
                options: ["Perfect fit", "Nonlinear relationship", "r must be 1"],
                answer: "B",
                explanation: "Linear model misses curvature.",
              },
              {
                prompt: "Extrapolation is risky because:",
                options: ["r becomes 2", "The linear pattern may not continue outside the data range", "Residuals become correlations"],
                answer: "B",
                explanation: "Model is local to observed $x$.",
              },
            ]}
          />

          <Divider />
          <section className="section" id="summary">
            <div className="sec-badge">Reference</div>
            <h2 className="sec-title">Course module complete</h2>
            <p>{"You finished Probability & Statistics study guides — return to the course hub or drill in Practice Arena."}</p>
          </section>
        </main>
      </StudyGuideShell>
    );
  }

  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Regression (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Regression · Part 1</div></div>
        <a className="sb-link" href="#ps-r-corr">Correlation</a>
        <a className="sb-link" href="#ps-r-proc1">Method</a>
        <a className="sb-link" href="#ps-r-ex-p1">Examples</a>
        <a className="sb-link" href="#quiz-ps-r-corr">Quiz</a>
        <a className="sb-link" href="#ps-r-assoc">Association</a>
        <a className="sb-link" href="#quiz-ps-r-assoc">Quiz</a>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Probability &amp; Statistics · Part 1 of 2</div>
          <h1 className="ch-title">Regression &amp; Correlation</h1>
          <p className="ch-sub">Measure and model linear association</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <section className="section" id="ps-r-corr">
          <div className="sec-badge">Section 5.1</div>
          <h2 className="sec-title">Correlation coefficient</h2>
          <TheoryBox title="What r measures">
            <p>
              {"Pearson $r$ measures strength and direction of linear association: $-1\\le r\\le 1$. $r>0$ rises together; $r<0$ moves oppositely; $r\\approx 0$ means little linear pattern (nonlinear links can still exist)."}
            </p>
          </TheoryBox>
          <TheoremBox title="Properties">
            <p>
              {"$r$ is unitless and symmetric in $x$ and $y$. Outliers can inflate or deflate $r$. Correlation ≠ causation."}
            </p>
          </TheoremBox>
        </section>

        <section className="section" id="ps-r-proc1">
          <div className="sec-badge">Procedure</div>
          <ProcedureBox
            title="Assess association"
            steps={[
              "Draw the scatterplot before trusting any number.",
              "Compute $r$ (or read it from software).",
              "Describe direction, form (linear?), and strength.",
              "Flag outliers and subgroups.",
              "Only then move to fitting a regression line.",
            ]}
          />
        </section>

        <section className="section" id="ps-r-ex-p1">
          <div className="sec-badge">Worked examples</div>
          <WorkedExample
            number={1}
            title="Interpret r"
            setup={"$r=-0.85$ between study hours of video games and exam score."}
            steps={[
              "Negative: more games ↔ lower scores on average.",
              "$|r|=0.85$ is strong linear association.",
              "Does not prove games cause lower scores.",
            ]}
            result={"Strong negative linear association."}
            check={"Always pair $r$ with a plot."}
          />
          <WorkedExample
            number={2}
            title="r = 0"
            setup={"A perfect U-shaped curve of $y$ vs $x$. What can $r$ be?"}
            steps={[
              "Linear correlation can be near 0.",
              "Strong nonlinear association is invisible to $r$.",
            ]}
            result={"$r$ near 0 despite clear pattern."}
            check={"Plot first."}
          />
          <WorkedExample
            number={3}
            title="Swap axes"
            setup={"If you swap $x$ and $y$, what happens to $r$?"}
            steps={[
              "$r$ is unchanged — it is symmetric.",
              "Regression slope would change (different roles).",
            ]}
            result={"$r$ same; regression of $y$ on $x$ ≠ $x$ on $y$."}
            check={"Correlation ≠ slope."}
          />
          <WorkedExample
            number={4}
            title="Outlier effect"
            setup={"Cloud with $r\\approx 0.2$, plus one far outlier aligning the cloud. Effect?"}
            steps={[
              "Outlier can push $r$ much higher.",
              "Report $r$ with and without the point; show the plot.",
            ]}
            result={"$r$ is outlier-sensitive."}
            check={"Robustness check is good practice."}
          />
        </section>

        <LaMcqSection
          id="quiz-ps-r-corr"
          badge="Quiz 5.1"
          title="Correlation"
          scoreId="score-ps-r-corr"
          section="ps-r-corr"
          questions={[
            {
              prompt: "Range of Pearson $r$:",
              options: ["$[0,1]$", "$[-1,1]$", "$(-\\infty,\\infty)$"],
              answer: "B",
              explanation: "Bounded linear association measure.",
            },
            {
              prompt: "$r=1$ means:",
              options: ["Random cloud", "Perfect positive linear fit", "Causation proven"],
              answer: "B",
              explanation: "All points on an upward line.",
            },
            {
              prompt: "Correlation proves causation:",
              options: ["Always", "Never by itself", "When $|r|>0.5$"],
              answer: "B",
              explanation: "Confounding and reverse causality remain possible.",
            },
          ]}
        />

        <Divider />
        <section className="section" id="ps-r-assoc">
          <div className="sec-badge">Section 5.2</div>
          <h2 className="sec-title">Association vocabulary</h2>
          <TheoryBox title="Describe the scatter">
            <p>
              {"Comment on direction, form, strength, and outliers. Mention clusters or lurking variables when relevant."}
            </p>
          </TheoryBox>
        </section>

        <LaMcqSection
          id="quiz-ps-r-assoc"
          badge="Quiz 5.2"
          title="Association"
          scoreId="score-ps-r-assoc"
          section="ps-r-assoc"
          questions={[
            {
              prompt: "First step before computing r:",
              options: ["Fit multiple regression", "Look at the scatterplot", "Delete half the data"],
              answer: "B",
              explanation: "Visual form guides interpretation.",
            },
            {
              prompt: "A lurking variable is:",
              options: ["Always the response", "An unmeasured factor that may drive the association", "The intercept"],
              answer: "B",
              explanation: "Confounders create spurious correlations.",
            },
            {
              prompt: "Strength of linear association is mainly read from:",
              options: ["Sign of r only", "$|r|$ and the plot", "Sample size alone"],
              answer: "B",
              explanation: "Magnitude plus visual confirmation.",
            },
          ]}
        />

        <Divider />
        <section className="section" id="summary">
          <div className="sec-badge">Reference</div>
          <h2 className="sec-title">Part 1 complete</h2>
          <p>{"Part 2 builds the least-squares line and residual checks."}</p>
        </section>
      </main>
    </StudyGuideShell>
  );
}

export default RegressionGuide;
