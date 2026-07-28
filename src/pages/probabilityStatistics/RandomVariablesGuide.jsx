import StudyGuideShell from "../StudyGuideShell";
import "../PartialDerivativesGuide.css";
import { LaMcqSection } from "../linearAlgebra/LaMcq";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample } from "../linearAlgebra/LaBlocks";

function Divider() {
  return <hr className="divider" />;
}

function RandomVariablesGuide({ part = 1 }) {
  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Random Variables (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">RVs · Part 2</div></div>
          <a className="sb-link" href="#ps-rv-cont">Continuous RVs</a>
          <a className="sb-link" href="#ps-rv-proc2">Method</a>
          <a className="sb-link" href="#ps-rv-ex-p2">Examples</a>
          <a className="sb-link" href="#quiz-ps-rv-cont">Quiz</a>
          <a className="sb-link" href="#ps-rv-named">Named families</a>
          <a className="sb-link" href="#quiz-ps-rv-named">Quiz</a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Probability &amp; Statistics · Part 2 of 2</div>
            <h1 className="ch-title">Continuous RVs &amp; Distributions</h1>
            <p className="ch-sub">PDFs, CDFs, and standard families</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <section className="section" id="ps-rv-cont">
            <div className="sec-badge">Section 2.3</div>
            <h2 className="sec-title">Continuous random variables</h2>
            <TheoryBox title="Density instead of mass">
              <p>
                {"A continuous RV has a PDF $f$ with $f(x)\\ge 0$ and $\\int_{-\\infty}^{\\infty} f(x)\\,dx=1$. Then $P(a\\le X\\le b)=\\int_a^b f$. Point probabilities are zero: $P(X=c)=0$."}
              </p>
            </TheoryBox>
            <TheoremBox title="CDF and expectation">
              <p>
                {"$F(x)=P(X\\le x)=\\int_{-\\infty}^x f$. For continuous $X$, $E[X]=\\int x f(x)\\,dx$ and $\\mathrm{Var}(X)=E[X^2]-(E[X])^2$."}
              </p>
            </TheoremBox>
          </section>

          <section className="section" id="ps-rv-proc2">
            <div className="sec-badge">Procedure</div>
            <ProcedureBox
              title="Working with a PDF"
              steps={[
                "Verify $\\int f=1$ (normalize if needed).",
                "Probabilities = areas under $f$ between bounds.",
                "Use $F$ when cumulative questions appear.",
                "Compute $E[X]$ and $E[X^2]$ by integration for mean/variance.",
                "Match named families by support and shape (uniform, exponential, normal).",
              ]}
            />
          </section>

          <section className="section" id="ps-rv-ex-p2">
            <div className="sec-badge">Worked examples</div>
            <WorkedExample
              number={1}
              title="Uniform on [0,2]"
              setup={"$X\\sim\\mathrm{Unif}[0,2]$. Find $P(0.5\\le X\\le 1.5)$ and $E[X]$."}
              steps={[
                "$f(x)=1/2$ on $[0,2]$.",
                "$P=\\int_{0.5}^{1.5}(1/2)\\,dx=1/2$.",
                "$E[X]=(0+2)/2=1$.",
              ]}
              result={"Probability $1/2$, mean $1$."}
              check={"Length of interval over length of support."}
            />
            <WorkedExample
              number={2}
              title="Exponential waiting time"
              setup={"$f(x)=\\lambda e^{-\\lambda x}$ for $x>0$, $\\lambda=2$. Find $P(X>1)$."}
              steps={[
                "$P(X>1)=\\int_1^{\\infty} 2e^{-2x}\\,dx=e^{-2}$.",
                "Memoryless: $P(X>s+t\\mid X>s)=P(X>t)$.",
              ]}
              result={"$e^{-2}\\approx 0.135$."}
              check={"Survival function $e^{-\\lambda x}$."}
            />
            <WorkedExample
              number={3}
              title="Standard normal"
              setup={"$Z\\sim N(0,1)$. Interpret $P(|Z|\\le 1)$."}
              steps={[
                "About 68% of mass lies within one SD of the mean.",
                "Within two SDs ≈ 95%; three ≈ 99.7% (empirical rule).",
              ]}
              result={"≈ 0.68."}
              check={"68–95–99.7 rule for bell curves."}
            />
            <WorkedExample
              number={4}
              title="Normalize a density"
              setup={"$f(x)=c x$ on $[0,1]$. Find $c$ and $P(X>1/2)$."}
              steps={[
                "$\\int_0^1 c x\\,dx=c/2=1$ ⇒ $c=2$.",
                "$P(X>1/2)=\\int_{1/2}^1 2x\\,dx=[x^2]_{1/2}^1=1-1/4=3/4$.",
              ]}
              result={"$c=2$, probability $3/4$."}
              check={"Integral of PDF is 1."}
            />
          </section>

          <LaMcqSection
            id="quiz-ps-rv-cont"
            badge="Quiz 2.3"
            title="Continuous"
            scoreId="score-ps-rv-cont"
            section="ps-rv-cont"
            questions={[
              {
                prompt: "For a continuous RV, $P(X=c)$ is:",
                options: ["$f(c)$", "0", "1"],
                answer: "B",
                explanation: "Points have zero area under a PDF.",
              },
              {
                prompt: "A valid PDF must integrate to:",
                options: ["0", "1", "$\\infty$"],
                answer: "B",
                explanation: "Total probability is 1.",
              },
              {
                prompt: "$F(x)=P(X\\le x)$ is the:",
                options: ["PDF", "CDF", "Variance"],
                answer: "B",
                explanation: "Cumulative distribution function.",
              },
            ]}
          />

          <Divider />
          <section className="section" id="ps-rv-named">
            <div className="sec-badge">Section 2.4</div>
            <h2 className="sec-title">Named distributions</h2>
            <TheoryBox title="Quick catalog">
              <p>
                {"Bernoulli/Binomial (counts of successes), Poisson (rare events), Uniform (flat), Exponential (waiting), Normal (sums / CLT). Learn support, mean, and variance for each."}
              </p>
            </TheoryBox>
          </section>

          <LaMcqSection
            id="quiz-ps-rv-named"
            badge="Quiz 2.4"
            title="Families"
            scoreId="score-ps-rv-named"
            section="ps-rv-named"
            questions={[
              {
                prompt: "Binomial models:",
                options: ["Waiting times only", "Number of successes in n trials", "Only continuous heights"],
                answer: "B",
                explanation: "Fixed n independent Bernoulli trials.",
              },
              {
                prompt: "Normal distribution is determined by:",
                options: ["Only the mean", "Mean and variance", "Only the mode"],
                answer: "B",
                explanation: "$N(\\mu,\\sigma^2)$ has two parameters.",
              },
              {
                prompt: "Exponential is famous for:",
                options: ["Memorylessness", "Being discrete", "Negative density"],
                answer: "A",
                explanation: "Past waiting time does not change future odds.",
              },
            ]}
          />

          <Divider />
          <section className="section" id="summary">
            <div className="sec-badge">Reference</div>
            <h2 className="sec-title">Part 2 complete</h2>
            <p>{"Next: descriptive statistics — summarizing real samples with means, spreads, and plots."}</p>
          </section>
        </main>
      </StudyGuideShell>
    );
  }

  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Random Variables (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">RVs · Part 1</div></div>
        <a className="sb-link" href="#ps-rv-intro">Discrete RVs</a>
        <a className="sb-link" href="#ps-rv-proc1">Method</a>
        <a className="sb-link" href="#ps-rv-ex-p1">Examples</a>
        <a className="sb-link" href="#quiz-ps-rv-intro">Quiz</a>
        <a className="sb-link" href="#ps-rv-moments">Mean &amp; variance</a>
        <a className="sb-link" href="#quiz-ps-rv-moments">Quiz</a>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Probability &amp; Statistics · Part 1 of 2</div>
          <h1 className="ch-title">Random Variables &amp; Distributions</h1>
          <p className="ch-sub">From events to numerical outcomes</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <section className="section" id="ps-rv-intro">
          <div className="sec-badge">Section 2.1</div>
          <h2 className="sec-title">Discrete random variables</h2>
          <TheoryBox title="PMF">
            <p>
              {"A discrete RV $X$ takes countable values with PMF $p(x)=P(X=x)$, $\\sum_x p(x)=1$. The CDF $F(x)=P(X\\le x)$ jumps at those values."}
            </p>
          </TheoryBox>
          <TheoremBox title="Linearity of expectation">
            <p>
              {"$E[aX+bY]=aE[X]+bE[Y]$ always — independence not required. Variance needs care: $\\mathrm{Var}(X+Y)=\\mathrm{Var}X+\\mathrm{Var}Y$ if uncorrelated."}
            </p>
          </TheoremBox>
        </section>

        <section className="section" id="ps-rv-proc1">
          <div className="sec-badge">Procedure</div>
          <ProcedureBox
            title="Discrete checklist"
            steps={[
              "List possible values of $X$.",
              "Assign / derive $p(x)$ and verify sum 1.",
              "$E[X]=\\sum x p(x)$; $E[g(X)]=\\sum g(x)p(x)$.",
              "$\\mathrm{Var}(X)=E[X^2]-(E[X])^2$.",
              "Use CDF for 'at most / at least' questions.",
            ]}
          />
        </section>

        <section className="section" id="ps-rv-ex-p1">
          <div className="sec-badge">Worked examples</div>
          <WorkedExample
            number={1}
            title="Fair die as RV"
            setup={"$X=$ face of a fair die. Find $E[X]$ and $P(X\\ge 5)$."}
            steps={[
              "$p(x)=1/6$ for $x=1..6$.",
              "$E[X]=(1+\\cdots+6)/6=3.5$.",
              "$P(X\\ge 5)=P(5)+P(6)=1/3$.",
            ]}
            result={"Mean $3.5$, probability $1/3$."}
            check={"Symmetric around 3.5."}
          />
          <WorkedExample
            number={2}
            title="Bernoulli"
            setup={"$X\\sim\\mathrm{Bern}(p)$ with $p=0.3$. Find $E[X]$ and $\\mathrm{Var}(X)$."}
            steps={[
              "$E[X]=p=0.3$.",
              "$E[X^2]=p$ (since $X^2=X$).",
              "$\\mathrm{Var}=p-p^2=0.3\\cdot 0.7=0.21$.",
            ]}
            result={"Mean $0.3$, variance $0.21$."}
            check={"Formula $p(1-p)$."}
          />
          <WorkedExample
            number={3}
            title="Binomial count"
            setup={"$X\\sim\\mathrm{Bin}(n=5,p=1/2)$. Find $P(X=2)$."}
            steps={[
              "$P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$.",
              "$\\binom{5}{2}(1/2)^5=10/32=5/16$.",
            ]}
            result={"$5/16$."}
            check={"Binomial coefficients count sequences."}
          />
          <WorkedExample
            number={4}
            title="Variance shortcut"
            setup={"$P(X=0)=0.2$, $P(X=1)=0.5$, $P(X=2)=0.3$. Find $\\mathrm{Var}(X)$."}
            steps={[
              "$E[X]=0(0.2)+1(0.5)+2(0.3)=1.1$.",
              "$E[X^2]=0+1(0.5)+4(0.3)=1.7$.",
              "$\\mathrm{Var}=1.7-1.1^2=1.7-1.21=0.49$.",
            ]}
            result={"$0.49$."}
            check={"Uses $E[X^2]-(E[X])^2$."}
          />
        </section>

        <LaMcqSection
          id="quiz-ps-rv-intro"
          badge="Quiz 2.1"
          title="Discrete RVs"
          scoreId="score-ps-rv-intro"
          section="ps-rv-intro"
          questions={[
            {
              prompt: "A PMF must:",
              options: ["Integrate to 1", "Sum to 1", "Always be continuous"],
              answer: "B",
              explanation: "Discrete probabilities sum over atoms.",
            },
            {
              prompt: "Bernoulli RV takes values:",
              options: ["Any real", "0 and 1", "Only positive integers"],
              answer: "B",
              explanation: "Success/failure indicator.",
            },
            {
              prompt: "CDF $F(x)$ is:",
              options: ["Always decreasing", "Nondecreasing", "Always equal to the PMF"],
              answer: "B",
              explanation: "Cumulative probabilities only grow.",
            },
          ]}
        />

        <Divider />
        <section className="section" id="ps-rv-moments">
          <div className="sec-badge">Section 2.2</div>
          <h2 className="sec-title">Expectation and variance</h2>
          <TheoryBox title="Center and spread">
            <p>
              {"Expectation is the balance point of the distribution. Variance measures squared spread about that center; SD is its square root (same units as $X$)."}
            </p>
          </TheoryBox>
        </section>

        <LaMcqSection
          id="quiz-ps-rv-moments"
          badge="Quiz 2.2"
          title="Moments"
          scoreId="score-ps-rv-moments"
          section="ps-rv-moments"
          questions={[
            {
              prompt: "$E[aX+b]$ equals:",
              options: ["$aE[X]+b$", "$aE[X]$ only", "$E[X]+b$ only"],
              answer: "A",
              explanation: "Affinity of expectation.",
            },
            {
              prompt: "$\\mathrm{Var}(X)$ equals:",
              options: ["$E[X]^2$", "$E[X^2]-(E[X])^2$", "$(E[X])^2-E[X^2]$"],
              answer: "B",
              explanation: "Computational formula for variance.",
            },
            {
              prompt: "Linearity of expectation requires independence:",
              options: ["Always", "Never (not required)", "Only for discrete RVs"],
              answer: "B",
              explanation: "Linearity holds regardless of dependence.",
            },
          ]}
        />

        <Divider />
        <section className="section" id="summary">
          <div className="sec-badge">Reference</div>
          <h2 className="sec-title">Part 1 complete</h2>
          <p>{"Part 2 moves to continuous densities and classic named distributions."}</p>
        </section>
      </main>
    </StudyGuideShell>
  );
}

export default RandomVariablesGuide;
