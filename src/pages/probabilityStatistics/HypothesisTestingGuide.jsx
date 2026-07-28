import StudyGuideShell from "../StudyGuideShell";
import "../PartialDerivativesGuide.css";
import { LaMcqSection } from "../linearAlgebra/LaMcq";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample } from "../linearAlgebra/LaBlocks";

function Divider() {
  return <hr className="divider" />;
}

function HypothesisTestingGuide({ part = 1 }) {
  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Hypothesis Testing (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Testing · Part 2</div></div>
          <a className="sb-link" href="#ps-h-pval">p-values</a>
          <a className="sb-link" href="#ps-h-proc2">Method</a>
          <a className="sb-link" href="#ps-h-ex-p2">Examples</a>
          <a className="sb-link" href="#quiz-ps-h-pval">Quiz</a>
          <a className="sb-link" href="#ps-h-errors">Errors &amp; power</a>
          <a className="sb-link" href="#quiz-ps-h-errors">Quiz</a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Probability &amp; Statistics · Part 2 of 2</div>
            <h1 className="ch-title">p-values, Errors &amp; Power</h1>
            <p className="ch-sub">How strong is the evidence against $H_0$?</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <section className="section" id="ps-h-pval">
            <div className="sec-badge">Section 4.3</div>
            <h2 className="sec-title">p-values</h2>
            <TheoryBox title="Definition">
              <p>
                {"The p-value is the probability, under $H_0$, of a result at least as extreme as observed. Small p ⇒ data are surprising if $H_0$ were true."}
              </p>
            </TheoryBox>
            <TheoremBox title="Decision rule">
              <p>
                {"Fix significance level $\\alpha$ (often 0.05). Reject $H_0$ if p ≤ $\\alpha$. Equivalently, reject if the test statistic falls in the critical region."}
              </p>
            </TheoremBox>
          </section>

          <section className="section" id="ps-h-proc2">
            <div className="sec-badge">Procedure</div>
            <ProcedureBox
              title="From statistic to decision"
              steps={[
                "Compute the test statistic (z, t, …).",
                "Find the p-value from the null sampling distribution (one- or two-sided as designed).",
                "Compare to $\\alpha$; state reject / fail to reject in context.",
                "Report effect size and CI when possible — significance ≠ importance.",
                "Discuss Type I/II risk if the decision has real costs.",
              ]}
            />
          </section>

          <section className="section" id="ps-h-ex-p2">
            <div className="sec-badge">Worked examples</div>
            <WorkedExample
              number={1}
              title="Two-sided z-test"
              setup={"$H_0:\\mu=100$, $n$ large, $z=2.1$, $\\alpha=0.05$. Decision?"}
              steps={[
                "Two-sided p ≈ $2(1-\\Phi(2.1))\\approx 0.036$.",
                "$0.036<0.05$ ⇒ reject $H_0$.",
              ]}
              result={"Reject $H_0$ at 5%."}
              check={"Critical values ±1.96; $|2.1|>1.96$."}
            />
            <WorkedExample
              number={2}
              title="Fail to reject"
              setup={"Same setup but $z=1.2$, $\\alpha=0.05$."}
              steps={[
                "Two-sided p ≈ 0.23 > 0.05.",
                "Do not reject $H_0$ — evidence is weak, not proof that $H_0$ is true.",
              ]}
              result={"Fail to reject $H_0$."}
              check={"Absence of evidence ≠ evidence of absence."}
            />
            <WorkedExample
              number={3}
              title="Type I vs II"
              setup={"Drug is truly ineffective ($H_0$ true) but you reject $H_0$. Error type?"}
              steps={[
                "False positive: rejecting a true null.",
                "That is a Type I error; rate controlled by $\\alpha$.",
              ]}
              result={"Type I error."}
              check={"Type II = failing to reject a false $H_0$."}
            />
            <WorkedExample
              number={4}
              title="Power"
              setup={"Power is 0.80 at a specific alternative. What is $\\beta$?"}
              steps={[
                "Power $=1-\\beta$.",
                "$\\beta=1-0.80=0.20$.",
              ]}
              result={"$\\beta=0.20$."}
              check={"Power rises with $n$, effect size, and $\\alpha$."}
            />
          </section>

          <LaMcqSection
            id="quiz-ps-h-pval"
            badge="Quiz 4.3"
            title="p-values"
            scoreId="score-ps-h-pval"
            section="ps-h-pval"
            questions={[
              {
                prompt: "A p-value is computed assuming:",
                options: ["$H_1$ is true", "$H_0$ is true", "Neither"],
                answer: "B",
                explanation: "Sampling distribution under the null.",
              },
              {
                prompt: "If p = 0.01 and $\\alpha=0.05$, you:",
                options: ["Fail to reject $H_0$", "Reject $H_0$", "Accept $H_0$ as proven"],
                answer: "B",
                explanation: "p ≤ α ⇒ reject.",
              },
              {
                prompt: "p = 0.20 means:",
                options: ["$H_0$ is true", "Data are not very surprising under $H_0$", "$H_1$ is proven"],
                answer: "B",
                explanation: "Large p ⇒ weak evidence against $H_0$.",
              },
            ]}
          />

          <Divider />
          <section className="section" id="ps-h-errors">
            <div className="sec-badge">Section 4.4</div>
            <h2 className="sec-title">Errors and power</h2>
            <TheoryBox title="Trade-offs">
              <p>
                {"Lower $\\alpha$ reduces Type I errors but can increase Type II errors (lower power) unless you gather more data. Design studies for adequate power at scientifically meaningful effects."}
              </p>
            </TheoryBox>
          </section>

          <LaMcqSection
            id="quiz-ps-h-errors"
            badge="Quiz 4.4"
            title="Errors"
            scoreId="score-ps-h-errors"
            section="ps-h-errors"
            questions={[
              {
                prompt: "Type II error is:",
                options: ["Reject true $H_0$", "Fail to reject false $H_0$", "Correct rejection"],
                answer: "B",
                explanation: "Missed detection of a real effect.",
              },
              {
                prompt: "Power equals:",
                options: ["$\\alpha$", "$1-\\beta$", "$\\beta$"],
                answer: "B",
                explanation: "Probability of correctly rejecting a false null.",
              },
              {
                prompt: "Increasing sample size typically:",
                options: ["Lowers power", "Raises power", "Forces $\\alpha=0$"],
                answer: "B",
                explanation: "More data sharpen the sampling distribution.",
              },
            ]}
          />

          <Divider />
          <section className="section" id="summary">
            <div className="sec-badge">Reference</div>
            <h2 className="sec-title">Part 2 complete</h2>
            <p>{"Next: regression and correlation — quantifying linear relationships between variables."}</p>
          </section>
        </main>
      </StudyGuideShell>
    );
  }

  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Hypothesis Testing (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Testing · Part 1</div></div>
        <a className="sb-link" href="#ps-h-framework">Framework</a>
        <a className="sb-link" href="#ps-h-proc1">Method</a>
        <a className="sb-link" href="#ps-h-ex-p1">Examples</a>
        <a className="sb-link" href="#quiz-ps-h-framework">Quiz</a>
        <a className="sb-link" href="#ps-h-tests">Common tests</a>
        <a className="sb-link" href="#quiz-ps-h-tests">Quiz</a>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Probability &amp; Statistics · Part 1 of 2</div>
          <h1 className="ch-title">Hypothesis Testing</h1>
          <p className="ch-sub">Formal decisions from noisy data</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <section className="section" id="ps-h-framework">
          <div className="sec-badge">Section 4.1</div>
          <h2 className="sec-title">Hypotheses and significance</h2>
          <TheoryBox title="Null and alternative">
            <p>
              {"$H_0$ is the status-quo claim (often 'no effect'). $H_1$ is the research claim. We never 'prove' $H_0$; we either reject it or fail to reject it based on evidence."}
            </p>
          </TheoryBox>
          <TheoremBox title="One-sided vs two-sided">
            <p>
              {"Two-sided $H_1:\\mu\\ne\\mu_0$ looks for any departure. One-sided alternatives look only higher or only lower — choose before seeing the data."}
            </p>
          </TheoremBox>
        </section>

        <section className="section" id="ps-h-proc1">
          <div className="sec-badge">Procedure</div>
          <ProcedureBox
            title="Test workflow"
            steps={[
              "State $H_0$ and $H_1$ in symbols and words.",
              "Choose test (z / t / …) matching design and assumptions.",
              "Fix $\\alpha$ and the rejection region direction.",
              "Compute the statistic from the sample.",
              "Decide and interpret in the problem’s context.",
            ]}
          />
        </section>

        <section className="section" id="ps-h-ex-p1">
          <div className="sec-badge">Worked examples</div>
          <WorkedExample
            number={1}
            title="State hypotheses"
            setup={"Claim: average battery life is still 10 hours. Researchers suspect it dropped."}
            steps={[
              "$H_0:\\mu=10$.",
              "$H_1:\\mu<10$ (one-sided lower).",
            ]}
            result={"Lower-tailed test for a decrease."}
            check={"Alternative matches the scientific suspicion."}
          />
          <WorkedExample
            number={2}
            title="z-statistic"
            setup={"$\\bar x=9.6$, $\\mu_0=10$, $\\sigma=2$, $n=100$. Compute $z$."}
            steps={[
              "$z=(\\bar x-\\mu_0)/(\\sigma/\\sqrt n)=(9.6-10)/(2/10)=-2$.",
            ]}
            result={"$z=-2$."}
            check={"SE $=\\sigma/\\sqrt n=0.2$."}
          />
          <WorkedExample
            number={3}
            title="When to use t"
            setup={"$\\sigma$ unknown, $n=20$, roughly normal data. Which test?"}
            steps={[
              "Use one-sample t with $df=n-1=19$.",
              "Replace $\\sigma$ by sample $s$ in the SE.",
            ]}
            result={"t-test, df 19."}
            check={"z needs known $\\sigma$ or very large $n$."}
          />
          <WorkedExample
            number={4}
            title="Critical value"
            setup={"Two-sided $\\alpha=0.05$ normal test. Critical values?"}
            steps={[
              "Split $\\alpha/2=0.025$ in each tail.",
              "Reject if $|z|>1.96$.",
            ]}
            result={"±1.96."}
            check={"Standard normal quantiles."}
          />
        </section>

        <LaMcqSection
          id="quiz-ps-h-framework"
          badge="Quiz 4.1"
          title="Framework"
          scoreId="score-ps-h-framework"
          section="ps-h-framework"
          questions={[
            {
              prompt: "$H_0$ usually represents:",
              options: ["The research hope", "The status-quo / no-effect claim", "Always $\\mu>0$"],
              answer: "B",
              explanation: "Null is the claim we challenge.",
            },
            {
              prompt: "Significance level $\\alpha$ is:",
              options: ["Power", "Type I error rate we allow", "Always 0.5"],
              answer: "B",
              explanation: "Long-run false positive rate under $H_0$.",
            },
            {
              prompt: "Failing to reject $H_0$ means:",
              options: ["$H_0$ is proven true", "Evidence was not strong enough to reject", "$H_1$ is true"],
              answer: "B",
              explanation: "Inconclusive against the null.",
            },
          ]}
        />

        <Divider />
        <section className="section" id="ps-h-tests">
          <div className="sec-badge">Section 4.2</div>
          <h2 className="sec-title">Common one-sample tests</h2>
          <TheoryBox title="z and t">
            <p>
              {"Mean with known $\\sigma$ (or huge $n$): z-test. Unknown $\\sigma$: t-test. Both compare $\\bar x$ to $\\mu_0$ using an estimated standard error."}
            </p>
          </TheoryBox>
        </section>

        <LaMcqSection
          id="quiz-ps-h-tests"
          badge="Quiz 4.2"
          title="Tests"
          scoreId="score-ps-h-tests"
          section="ps-h-tests"
          questions={[
            {
              prompt: "SE of $\\bar x$ with known $\\sigma$ is:",
              options: ["$\\sigma$", "$\\sigma/\\sqrt n$", "$\\sigma n$"],
              answer: "B",
              explanation: "Averaging reduces SD by $\\sqrt n$.",
            },
            {
              prompt: "t-distribution vs normal has:",
              options: ["Thinner tails", "Heavier tails", "No mean"],
              answer: "B",
              explanation: "Extra uncertainty from estimating $\\sigma$.",
            },
            {
              prompt: "df for one-sample t is:",
              options: ["$n$", "$n-1$", "$n-2$"],
              answer: "B",
              explanation: "One parameter estimated for the mean.",
            },
          ]}
        />

        <Divider />
        <section className="section" id="summary">
          <div className="sec-badge">Reference</div>
          <h2 className="sec-title">Part 1 complete</h2>
          <p>{"Part 2 focuses on p-values, Type I/II errors, and power."}</p>
        </section>
      </main>
    </StudyGuideShell>
  );
}

export default HypothesisTestingGuide;
