import StudyGuideShell from "../StudyGuideShell";
import "../PartialDerivativesGuide.css";
import { LaMcqSection } from "../linearAlgebra/LaMcq";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample } from "../linearAlgebra/LaBlocks";

function Divider() {
  return <hr className="divider" />;
}

function ProbabilityBasicsGuide({ part = 1 }) {
  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Probability Basics (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Prob Basics · Part 2</div></div>
          <a className="sb-link" href="#ps-b-cond">Conditional probability</a>
          <a className="sb-link" href="#ps-b-proc2">Method</a>
          <a className="sb-link" href="#ps-b-ex-p2">Examples</a>
          <a className="sb-link" href="#quiz-ps-b-cond">Quiz</a>
          <a className="sb-link" href="#ps-b-bayes">Bayes</a>
          <a className="sb-link" href="#quiz-ps-b-bayes">Quiz</a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Probability &amp; Statistics · Part 2 of 2</div>
            <h1 className="ch-title">Conditional Probability &amp; Bayes</h1>
            <p className="ch-sub">Update beliefs when new information arrives</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <section className="section" id="ps-b-cond">
            <div className="sec-badge">Section 1.3</div>
            <h2 className="sec-title">Conditional probability — deep theory</h2>
            <TheoryBox title="Restricting the sample space">
              <p>
                {"$P(A\\mid B)=P(A\\cap B)/P(B)$ when $P(B)>0$. Conditioning on $B$ shrinks the universe to outcomes inside $B$, then renormalizes."}
              </p>
              <p>
                {"Independence means $P(A\\cap B)=P(A)P(B)$, equivalently $P(A\\mid B)=P(A)$. Dependence is the default in real problems — always check rather than assume."}
              </p>
            </TheoryBox>
            <TheoremBox title="Law of total probability">
              <p>
                {"If $B_1,\\ldots,B_k$ partition $\\Omega$, then $P(A)=\\sum_i P(A\\mid B_i)P(B_i)$. This is the bridge to Bayes’ theorem."}
              </p>
            </TheoremBox>
          </section>

          <section className="section" id="ps-b-proc2">
            <div className="sec-badge">Procedure</div>
            <h2 className="sec-title">How to compute conditionals</h2>
            <ProcedureBox
              title="Checklist"
              steps={[
                "Identify the event you condition on (the new information).",
                "Write $P(A\\cap B)$ carefully — often via a tree or table.",
                "Divide by $P(B)$; never skip the denominator.",
                "For Bayes: compute $P(B\\mid A)$ from $P(A\\mid B)P(B)/P(A)$, using total probability for $P(A)$.",
                "Sanity-check: answers must lie in $[0,1]$.",
              ]}
            />
          </section>

          <section className="section" id="ps-b-ex-p2">
            <div className="sec-badge">Worked examples</div>
            <h2 className="sec-title">Four detailed examples</h2>
            <WorkedExample
              number={1}
              title="Cards given a red card"
              setup={"Draw one card from a 52-card deck. Let $A=$ ace, $B=$ red. Find $P(A\\mid B)$."}
              steps={[
                "$B$ has 26 red cards; among them 2 are aces (hearts, diamonds).",
                "So $P(A\\mid B)=2/26=1/13$.",
                "Note $P(A)=4/52=1/13$ as well — here $A$ and $B$ are independent.",
              ]}
              result={"$P(A\\mid B)=1/13$."}
              check={"$P(A\\cap B)=(2/52)$, $P(B)=26/52$, ratio $2/26$."}
            />
            <WorkedExample
              number={2}
              title="Two dice, given sum ≥ 10"
              setup={"Fair dice. $A=$ sum is 11, $B=$ sum ≥ 10. Find $P(A\\mid B)$."}
              steps={[
                "Sums ≥ 10: (4,6),(5,5),(5,6),(6,4),(6,5),(6,6) → 6 outcomes.",
                "Sum 11: (5,6),(6,5) → 2 outcomes.",
                "$P(A\\mid B)=2/6=1/3$.",
              ]}
              result={"$1/3$."}
              check={"Equally likely outcomes restricted to $B$."}
            />
            <WorkedExample
              number={3}
              title="Medical test (Bayes)"
              setup={"Disease rate 1%. Test: sensitivity 99%, false positive 2%. Given positive test, find $P(\\text{disease})$."}
              steps={[
                "Let $D=$ disease, $+=$ positive. $P(D)=0.01$, $P(+\\mid D)=0.99$, $P(+\\mid D^c)=0.02$.",
                "$P(+)=0.99(0.01)+0.02(0.99)=0.0099+0.0198=0.0297$.",
                "$P(D\\mid +)=0.0099/0.0297\\approx 0.333$.",
              ]}
              result={"About $33\\%$ — still more likely healthy than sick after one positive."}
              check={"Most positives come from the large healthy population."}
            />
            <WorkedExample
              number={4}
              title="Independence check"
              setup={"$P(A)=0.4$, $P(B)=0.5$, $P(A\\cap B)=0.2$. Are $A,B$ independent?"}
              steps={[
                "Need $P(A\\cap B)=P(A)P(B)=0.20$.",
                "Observed intersection is also $0.2$.",
                "Yes — independent. Also $P(A\\mid B)=0.2/0.5=0.4=P(A)$.",
              ]}
              result={"Independent."}
              check={"Product rule holds exactly."}
            />
          </section>

          <LaMcqSection
            id="quiz-ps-b-cond"
            badge="Quiz 1.3"
            title="Conditionals"
            scoreId="score-ps-b-cond"
            section="ps-b-cond"
            questions={[
              {
                prompt: "$P(A\\mid B)$ equals:",
                options: ["$P(A)/P(B)$", "$P(A\\cap B)/P(B)$", "$P(A)P(B)$"],
                answer: "B",
                explanation: "Definition of conditional probability.",
              },
              {
                prompt: "If $A$ and $B$ are independent, then $P(A\\mid B)$ equals:",
                options: ["$P(B)$", "$P(A)$", "$0$"],
                answer: "B",
                explanation: "Independence means conditioning does not change $P(A)$.",
              },
              {
                prompt: "The law of total probability requires the $B_i$ to:",
                options: ["Overlap freely", "Partition the sample space", "Be independent of $A$"],
                answer: "B",
                explanation: "A partition covers $\\Omega$ with disjoint pieces.",
              },
            ]}
          />

          <Divider />
          <section className="section" id="ps-b-bayes">
            <div className="sec-badge">Section 1.4</div>
            <h2 className="sec-title">Bayes’ theorem</h2>
            <TheoryBox title="Flipping the conditioning">
              <p>
                {"$P(B\\mid A)=P(A\\mid B)P(B)/P(A)$. Prior $P(B)$ becomes posterior $P(B\\mid A)$ after observing $A$."}
              </p>
            </TheoryBox>
          </section>

          <LaMcqSection
            id="quiz-ps-b-bayes"
            badge="Quiz 1.4"
            title="Bayes"
            scoreId="score-ps-b-bayes"
            section="ps-b-bayes"
            questions={[
              {
                prompt: "Bayes’ theorem updates:",
                options: ["Only sample spaces", "Priors into posteriors", "Only means"],
                answer: "B",
                explanation: "Evidence revises belief about hypotheses.",
              },
              {
                prompt: "In the medical test example, a rare disease implies:",
                options: ["Positive tests are always disease", "False positives can dominate", "Sensitivity is irrelevant"],
                answer: "B",
                explanation: "Large healthy pool generates many false positives.",
              },
              {
                prompt: "$P(A)$ in Bayes’ formula is often found by:",
                options: ["Guessing", "Law of total probability", "Setting it to 1"],
                answer: "B",
                explanation: "Marginalize over partitions of the cause.",
              },
            ]}
          />

          <Divider />
          <section className="section" id="summary">
            <div className="sec-badge">Reference</div>
            <h2 className="sec-title">Part 2 complete</h2>
            <p>{"Next: random variables turn events into numbers you can average and model with distributions."}</p>
          </section>
        </main>
      </StudyGuideShell>
    );
  }

  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Probability Basics (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Prob Basics · Part 1</div></div>
        <a className="sb-link" href="#ps-b-intro">Axioms</a>
        <a className="sb-link" href="#ps-b-proc1">Method</a>
        <a className="sb-link" href="#ps-b-ex-p1">Examples</a>
        <a className="sb-link" href="#quiz-ps-b-intro">Quiz</a>
        <a className="sb-link" href="#ps-b-combo">Counting</a>
        <a className="sb-link" href="#quiz-ps-b-combo">Quiz</a>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Probability &amp; Statistics · Part 1 of 2</div>
          <h1 className="ch-title">Probability Basics</h1>
          <p className="ch-sub">Sample spaces, events, and the axioms</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <div className="opening-note-box">
          <p className="opening-note">
            {"Probability quantifies uncertainty. Start with a sample space of outcomes, assign weights that obey Kolmogorov’s axioms, then compute probabilities of events — subsets of that space."}
          </p>
        </div>

        <section className="section" id="ps-b-intro">
          <div className="sec-badge">Section 1.1</div>
          <h2 className="sec-title">Sample spaces and axioms</h2>
          <TheoryBox title="What probability is">
            <p>
              {"A sample space $\\Omega$ lists all possible outcomes of an experiment. An event $A\\subseteq\\Omega$ is a set of outcomes. Probability $P$ assigns each event a number in $[0,1]$."}
            </p>
          </TheoryBox>
          <TheoremBox title="Kolmogorov axioms">
            <p>
              {"(1) $P(A)\\ge 0$. (2) $P(\\Omega)=1$. (3) For countable disjoint events, $P(\\bigcup A_i)=\\sum P(A_i)$. From these: $P(A^c)=1-P(A)$ and $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$."}
            </p>
          </TheoremBox>
        </section>

        <section className="section" id="ps-b-proc1">
          <div className="sec-badge">Procedure</div>
          <h2 className="sec-title">How to set up a probability model</h2>
          <ProcedureBox
            title="Setup checklist"
            steps={[
              "Define $\\Omega$ clearly (what counts as one outcome?).",
              "Decide if outcomes are equally likely; if yes, $P(A)=|A|/|\\Omega|$.",
              "Otherwise assign probabilities that sum to 1.",
              "Translate the word problem into unions, intersections, complements.",
              "Use axioms and identities — avoid inventing new rules mid-problem.",
            ]}
          />
        </section>

        <section className="section" id="ps-b-ex-p1">
          <div className="sec-badge">Worked examples</div>
          <h2 className="sec-title">Four detailed examples</h2>
          <WorkedExample
            number={1}
            title="Fair die"
            setup={"Roll a fair six-sided die. Find $P(\\text{even})$ and $P(\\text{at least }5)$."}
            steps={[
              "$\\Omega=\\{1,2,3,4,5,6\\}$, each probability $1/6$.",
              "Even: $\\{2,4,6\\}$ → $3/6=1/2$.",
              "At least 5: $\\{5,6\\}$ → $2/6=1/3$.",
            ]}
            result={"$1/2$ and $1/3$."}
            check={"Counts over 6 equally likely faces."}
          />
          <WorkedExample
            number={2}
            title="Complement"
            setup={"$P(A)=0.35$. Find $P(A^c)$."}
            steps={[
              "Axiom: $P(A)+P(A^c)=1$.",
              "$P(A^c)=1-0.35=0.65$.",
            ]}
            result={"$0.65$."}
            check={"Sums with $P(A)$ to 1."}
          />
          <WorkedExample
            number={3}
            title="Inclusion–exclusion"
            setup={"$P(A)=0.4$, $P(B)=0.5$, $P(A\\cap B)=0.15$. Find $P(A\\cup B)$."}
            steps={[
              "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.",
              "$=0.4+0.5-0.15=0.75$.",
            ]}
            result={"$0.75$."}
            check={"Intersection was subtracted once to avoid double-counting."}
          />
          <WorkedExample
            number={4}
            title="Two coins"
            setup={"Two fair coins. Find $P(\\text{exactly one head})$."}
            steps={[
              "$\\Omega=\\{HH,HT,TH,TT\\}$, each $1/4$.",
              "Exactly one head: $\\{HT,TH\\}$.",
              "Probability $2/4=1/2$.",
            ]}
            result={"$1/2$."}
            check={"Not $1/3$ — outcomes are equally likely only if listed this way."}
          />
        </section>

        <LaMcqSection
          id="quiz-ps-b-intro"
          badge="Quiz 1.1"
          title="Axioms"
          scoreId="score-ps-b-intro"
          section="ps-b-intro"
          questions={[
            {
              prompt: "$P(\\Omega)$ equals:",
              options: ["0", "1", "Depends on the experiment"],
              answer: "B",
              explanation: "The certain event has probability 1.",
            },
            {
              prompt: "$P(A^c)$ equals:",
              options: ["$P(A)$", "$1-P(A)$", "$P(A)^2$"],
              answer: "B",
              explanation: "Complement rule from the axioms.",
            },
            {
              prompt: "For disjoint $A,B$, $P(A\\cup B)$ equals:",
              options: ["$P(A)P(B)$", "$P(A)+P(B)$", "$P(A)-P(B)$"],
              answer: "B",
              explanation: "Additivity for disjoint events.",
            },
          ]}
        />

        <Divider />
        <section className="section" id="ps-b-combo">
          <div className="sec-badge">Section 1.2</div>
          <h2 className="sec-title">Equally likely outcomes &amp; counting</h2>
          <TheoryBox title="Classical probability">
            <p>
              {String.raw`When all outcomes are equally likely, $P(A)=|A|/|\Omega|$. Combinations $\binom{n}{k}$ and permutations $P(n,k)$ build $|\Omega|$ and $|A|$ for cards, committees, and passwords.`}
            </p>
          </TheoryBox>
        </section>

        <LaMcqSection
          id="quiz-ps-b-combo"
          badge="Quiz 1.2"
          title="Counting"
          scoreId="score-ps-b-combo"
          section="ps-b-combo"
          questions={[
            {
              prompt: "For equally likely outcomes, $P(A)$ is:",
              options: ["$|A|+|\\Omega|$", "$|A|/|\\Omega|$", "$|\\Omega|/|A|$"],
              answer: "B",
              explanation: "Favorable over total.",
            },
            {
              prompt: "$\\binom{5}{2}$ equals:",
              options: ["10", "20", "25"],
              answer: "A",
              explanation: "$5!/(2!3!)=10$.",
            },
            {
              prompt: "Order matters for:",
              options: ["Combinations only", "Permutations", "Neither"],
              answer: "B",
              explanation: "Permutations count ordered selections.",
            },
          ]}
        />

        <Divider />
        <section className="section" id="summary">
          <div className="sec-badge">Reference</div>
          <h2 className="sec-title">Part 1 complete</h2>
          <p>{"Continue to Part 2 for conditionals and Bayes — the tools used in every diagnostic and classification problem."}</p>
        </section>
      </main>
    </StudyGuideShell>
  );
}

export default ProbabilityBasicsGuide;
