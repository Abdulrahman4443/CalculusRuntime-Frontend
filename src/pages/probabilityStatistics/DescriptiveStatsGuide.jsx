import StudyGuideShell from "../StudyGuideShell";
import "../PartialDerivativesGuide.css";
import { LaMcqSection } from "../linearAlgebra/LaMcq";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample } from "../linearAlgebra/LaBlocks";

function Divider() {
  return <hr className="divider" />;
}

function DescriptiveStatsGuide({ part = 1 }) {
  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Descriptive Statistics (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Descriptive · Part 2</div></div>
          <a className="sb-link" href="#ps-d-spread">Spread &amp; z-scores</a>
          <a className="sb-link" href="#ps-d-proc2">Method</a>
          <a className="sb-link" href="#ps-d-ex-p2">Examples</a>
          <a className="sb-link" href="#quiz-ps-d-spread">Quiz</a>
          <a className="sb-link" href="#ps-d-plots">Plots</a>
          <a className="sb-link" href="#quiz-ps-d-plots">Quiz</a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Probability &amp; Statistics · Part 2 of 2</div>
            <h1 className="ch-title">Spread, Standardization &amp; Displays</h1>
            <p className="ch-sub">Compare values across different scales</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <section className="section" id="ps-d-spread">
            <div className="sec-badge">Section 3.3</div>
            <h2 className="sec-title">Variance, SD, and z-scores</h2>
            <TheoryBox title="How far from the center?">
              <p>
                {"Sample variance $s^2=\\frac{1}{n-1}\\sum(x_i-\\bar x)^2$ (unbiased). SD $s=\\sqrt{s^2}$. A z-score $z=(x-\\bar x)/s$ says how many SDs above/below the mean."}
              </p>
            </TheoryBox>
            <TheoremBox title="IQR robustness">
              <p>
                {"IQR $=Q_3-Q_1$ resists outliers better than SD. Outlier fences often use $Q_1-1.5\\,\\mathrm{IQR}$ and $Q_3+1.5\\,\\mathrm{IQR}$."}
              </p>
            </TheoremBox>
          </section>

          <section className="section" id="ps-d-proc2">
            <div className="sec-badge">Procedure</div>
            <ProcedureBox
              title="Standardize a value"
              steps={[
                "Compute mean and SD of the reference sample (or use population $\\mu,\\sigma$).",
                "Subtract the center from $x$.",
                "Divide by the SD to get $z$.",
                "Interpret: $|z|>2$ is often unusual; $|z|>3$ is extreme.",
                "For displays: choose histogram/boxplot to match the question (shape vs outliers).",
              ]}
            />
          </section>

          <section className="section" id="ps-d-ex-p2">
            <div className="sec-badge">Worked examples</div>
            <WorkedExample
              number={1}
              title="Sample SD"
              setup={"Data: 2, 4, 4, 6. Find $s$."}
              steps={[
                "$\\bar x=4$.",
                "Deviations: $-2,0,0,2$; squares: $4,0,0,4$; sum $8$.",
                "$s^2=8/3$, $s=\\sqrt{8/3}\\approx 1.63$.",
              ]}
              result={"$s\\approx 1.63$."}
              check={"Divide by $n-1=3$, not $n$."}
              mistake={"Dividing by $n=4$ instead of $n-1=3$ — this gives the (biased) population variance formula instead of the unbiased sample variance formula."}
            />
            <WorkedExample
              number={2}
              title="z-score compare"
              setup={"Exam A: score 85, mean 70, SD 10. Exam B: 80, mean 60, SD 15. Which is relatively better?"}
              steps={[
                "$z_A=(85-70)/10=1.5$.",
                "$z_B=(80-60)/15\\approx 1.33$.",
                "A is farther above its mean in SD units.",
              ]}
              result={"Exam A is relatively stronger."}
              check={"Compare standardized scores, not raw marks."}
              mistake={"Comparing raw scores directly (85 > 80, so 'A is better') — this ignores that the two exams have different means and spreads, which z-scores correct for."}
            />
            <WorkedExample
              number={3}
              title="IQR fences"
              setup={"$Q_1=10$, $Q_3=22$. Find upper fence."}
              steps={[
                "IQR $=12$.",
                "Upper fence $=22+1.5\\times 12=40$.",
              ]}
              result={"$40$."}
              check={"Points above 40 flagged as potential outliers."}
              mistake={"Multiplying $Q_3$ by 1.5 instead of the IQR — the fence formula scales the IQR, not the quartile itself."}
            />
            <WorkedExample
              number={4}
              title="Empirical rule"
              setup={"Approx. normal data, mean 50, SD 5. About what percent lie in $[40,60]$?"}
              steps={[
                "$[40,60]$ is mean ± 2 SD.",
                "Empirical rule ≈ 95%.",
              ]}
              result={"About 95%."}
              check={"68 / 95 / 99.7 for 1 / 2 / 3 SD."}
              mistake={"Misreading the interval width — $[40,60]$ is $\\pm 2$ SD (since SD=5), not $\\pm 1$ SD, so the answer is 95%, not 68%."}
            />
          </section>

          <LaMcqSection
            id="quiz-ps-d-spread"
            badge="Quiz 3.3"
            title="Spread"
            scoreId="score-ps-d-spread"
            section="ps-d-spread"
            questions={[
              {
                prompt: "Sample variance usually divides by:",
                options: ["$n$", "$n-1$", "$n+1$"],
                answer: "B",
                explanation: "Unbiased sample variance uses $n-1$.",
              },
              {
                prompt: "A z-score of 0 means the value equals:",
                options: ["The max", "The mean", "The SD"],
                answer: "B",
                explanation: "$z=(x-\\bar x)/s$.",
              },
              {
                prompt: "IQR is:",
                options: ["$Q_3-Q_1$", "$Q_1+Q_3$", "Max − min"],
                answer: "A",
                explanation: "Middle 50% width.",
              },
            ]}
          />

          <Divider />
          <section className="section" id="ps-d-plots">
            <div className="sec-badge">Section 3.4</div>
            <h2 className="sec-title">Visual summaries</h2>
            <TheoryBox title="Choose the right picture">
              <p>
                {"Histograms show shape (skew, modality). Boxplots highlight median, IQR, and outliers. Scatterplots preview association before regression."}
              </p>
            </TheoryBox>
            <TheoremBox title="Outlier fence rule">
              <p>
                {"Using quartiles $Q_1,Q_3$ and $\\mathrm{IQR}=Q_3-Q_1$: lower fence $=Q_1-1.5\\,\\mathrm{IQR}$, upper fence $=Q_3+1.5\\,\\mathrm{IQR}$. Points outside the fences are flagged as outliers on a boxplot."}
              </p>
            </TheoremBox>
            <ProcedureBox
              title="Reading a boxplot / histogram"
              steps={[
                "Locate the box: left edge $Q_1$, right edge $Q_3$, line inside is the median.",
                "Whiskers extend to the most extreme points within the fences.",
                "Any point beyond a fence is plotted separately as an outlier.",
                "For a histogram, compare the tail lengths on each side to judge skew direction.",
                "A long right tail with mean $>$ median signals right (positive) skew, and vice versa.",
              ]}
            />
            <WorkedExample
              number={1}
              title="Fence calculation"
              setup={"A dataset has $Q_1=20$, $Q_3=32$. Find the fences and check if a value of $55$ is an outlier."}
              steps={[
                "$\\mathrm{IQR}=32-20=12$.",
                "Upper fence $=32+1.5(12)=32+18=50$.",
                "$55>50$, so it lies beyond the upper fence.",
              ]}
              result={"$55$ is flagged as an outlier."}
              check={"Lower fence $=20-18=2$; any value below 2 would also be flagged."}
              mistake={"Comparing 55 to $Q_3=32$ directly and calling it an outlier — the correct comparison is against the fence (50), not the quartile itself."}
            />
            <WorkedExample
              number={2}
              title="Reading skew from mean vs. median"
              setup={"A dataset has mean $=48$, median $=42$. Describe the likely skew and boxplot shape."}
              steps={[
                "Mean $>$ median means a few unusually large values are pulling the mean up.",
                "This is characteristic of right (positive) skew.",
                "On a boxplot, expect a longer whisker (or more outliers) on the upper side.",
              ]}
              result={"Right-skewed distribution."}
              check={"If mean $<$ median instead, the skew would be left (negative)."}
              mistake={"Mixing up the direction — some students say 'mean > median means left-skewed'; it's the opposite: a larger mean than median signals a long tail pulling to the right."}
            />
          </section>

          <LaMcqSection
            id="quiz-ps-d-plots"
            badge="Quiz 3.4"
            title="Plots"
            scoreId="score-ps-d-plots"
            section="ps-d-plots"
            questions={[
              {
                prompt: "Best plot for outliers in one variable:",
                options: ["Pie chart", "Boxplot", "Venn diagram"],
                answer: "B",
                explanation: "Boxplots mark points beyond fences.",
              },
              {
                prompt: "A right-skewed histogram has a long tail to the:",
                options: ["Left", "Right", "Neither"],
                answer: "B",
                explanation: "Skew direction follows the long tail.",
              },
              {
                prompt: "Scatterplots show:",
                options: ["Only means", "Relationship between two quantitative variables", "Only categories"],
                answer: "B",
                explanation: "Each point is a pair $(x,y)$.",
              },
              {
                prompt: "The upper outlier fence is computed as:",
                options: ["$Q_3+1.5\\,\\mathrm{IQR}$", "$Q_3\\times 1.5$", "Mean$+2\\sigma$"],
                answer: "A",
                explanation: "Standard Tukey fence rule using IQR.",
              },
            ]}
          />

          <Divider />
          <section className="section" id="summary">
            <div className="sec-badge">Reference</div>
            <h2 className="sec-title">Part 2 complete</h2>
            <p>{"Real-life use: sports analysts use z-scores to compare players across different eras and scoring scales, quality-control teams flag defective batches using outlier fences on control charts, and schools report percentile ranks (not raw scores) so parents can compare a student against their whole cohort."}</p>
            <p>{"Next: hypothesis testing — deciding when sample evidence is strong enough to challenge a claim."}</p>
          </section>
        </main>
      </StudyGuideShell>
    );
  }

  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Descriptive Statistics (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Descriptive · Part 1</div></div>
        <a className="sb-link" href="#ps-d-center">Center</a>
        <a className="sb-link" href="#ps-d-proc1">Method</a>
        <a className="sb-link" href="#ps-d-ex-p1">Examples</a>
        <a className="sb-link" href="#quiz-ps-d-center">Quiz</a>
        <a className="sb-link" href="#ps-d-quant">Quantiles</a>
        <a className="sb-link" href="#quiz-ps-d-quant">Quiz</a>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Probability &amp; Statistics · Part 1 of 2</div>
          <h1 className="ch-title">Descriptive Statistics</h1>
          <p className="ch-sub">Summarize data before modeling it</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <section className="section" id="ps-d-center">
          <div className="sec-badge">Section 3.1</div>
          <h2 className="sec-title">Measures of center</h2>
          <TheoryBox title="Mean, median, mode">
            <p>
              {"Sample mean $\\bar x=\\frac1n\\sum x_i$ uses all values (sensitive to outliers). Median is the middle order statistic (robust). Mode is the most frequent value (useful for categories)."}
            </p>
          </TheoryBox>
          <TheoremBox title="Skew and center">
            <p>
              {"Right skew: mean $>$ median. Left skew: mean $<$ median. Symmetric unimodal: mean ≈ median ≈ mode."}
            </p>
          </TheoremBox>
        </section>

        <section className="section" id="ps-d-proc1">
          <div className="sec-badge">Procedure</div>
          <ProcedureBox
            title="Compute center"
            steps={[
              "Sort the data for median / quartiles.",
              "Mean: sum ÷ $n$.",
              "Odd $n$: median is middle value; even $n$: average of two middle values.",
              "Report units and sample size with every summary.",
              "Note outliers before trusting the mean alone.",
            ]}
          />
        </section>

        <section className="section" id="ps-d-ex-p1">
          <div className="sec-badge">Worked examples</div>
          <WorkedExample
            number={1}
            title="Mean vs median"
            setup={"Data: 3, 5, 5, 7, 100. Compare mean and median."}
            steps={[
              "Mean $=(3+5+5+7+100)/5=24$.",
              "Sorted already; median $=5$.",
              "Outlier 100 pulled the mean far above the median.",
            ]}
            result={"Mean 24, median 5."}
            check={"Median resists the outlier."}
            mistake={"Reporting the mean (24) as 'typical' when a single outlier dominates it — the median (5) better represents most of this data."}
          />
          <WorkedExample
            number={2}
            title="Even-count median"
            setup={"Data: 2, 4, 6, 10. Median?"}
            steps={[
              "Two middle values: 4 and 6.",
              "Median $=(4+6)/2=5$.",
            ]}
            result={"$5$."}
            check={"Average the two central observations."}
            mistake={"Picking just one of the two middle values (e.g. saying median = 4) — with an even count, both middle values must be averaged."}
          />
          <WorkedExample
            number={3}
            title="Weighted idea"
            setup={"Scores 80 and 90 with weights 0.4 and 0.6. Weighted mean?"}
            steps={[
              "$0.4\\cdot 80+0.6\\cdot 90=32+54=86$.",
            ]}
            result={"$86$."}
            check={"Weights sum to 1."}
            mistake={"Computing the plain average $(80+90)/2=85$ instead — that ignores the weights entirely, giving a different (wrong) answer."}
          />
          <WorkedExample
            number={4}
            title="Mode"
            setup={"Categories: red, blue, red, green, red. Mode?"}
            steps={[
              "Red appears three times; others once.",
              "Mode = red.",
            ]}
            result={"red"}
            check={"Most frequent category."}
            mistake={"Trying to compute a 'mean' or 'median' of category labels — mode is the only measure of center that makes sense for non-numeric (categorical) data."}
          />
        </section>

        <LaMcqSection
          id="quiz-ps-d-center"
          badge="Quiz 3.1"
          title="Center"
          scoreId="score-ps-d-center"
          section="ps-d-center"
          questions={[
            {
              prompt: "Most outlier-resistant center:",
              options: ["Mean", "Median", "Range"],
              answer: "B",
              explanation: "Median ignores extreme magnitude.",
            },
            {
              prompt: "Right-skewed data tend to have:",
              options: ["Mean < median", "Mean > median", "Mean = mode always"],
              answer: "B",
              explanation: "Long right tail pulls the mean up.",
            },
            {
              prompt: "Sample mean formula divides the sum by:",
              options: ["$n-1$", "$n$", "$2n$"],
              answer: "B",
              explanation: "$\\bar x=(\\sum x_i)/n$.",
            },
          ]}
        />

        <Divider />
        <section className="section" id="ps-d-quant">
          <div className="sec-badge">Section 3.2</div>
          <h2 className="sec-title">Percentiles and quartiles</h2>
          <TheoryBox title="Order statistics">
            <p>
              {"The $p$-th percentile is a value below which roughly $p\\%$ of the data fall. Quartiles split the ordered sample into fourths: $Q_1$, median ($Q_2$), $Q_3$."}
            </p>
          </TheoryBox>
        </section>

        <LaMcqSection
          id="quiz-ps-d-quant"
          badge="Quiz 3.2"
          title="Quantiles"
          scoreId="score-ps-d-quant"
          section="ps-d-quant"
          questions={[
            {
              prompt: "$Q_2$ is the:",
              options: ["Mean", "Median", "Mode"],
              answer: "B",
              explanation: "Second quartile = median.",
            },
            {
              prompt: "The 90th percentile is above roughly:",
              options: ["10% of data", "90% of data", "50% of data"],
              answer: "B",
              explanation: "About 90% lie at or below it.",
            },
            {
              prompt: "Five-number summary uses:",
              options: ["Only mean/SD", "Min, Q1, median, Q3, max", "Only mode"],
              answer: "B",
              explanation: "Classic boxplot ingredients.",
            },
          ]}
        />

        <Divider />
        <section className="section" id="summary">
          <div className="sec-badge">Reference</div>
          <h2 className="sec-title">Part 1 complete</h2>
          <p>{"Part 2 covers spread measures, z-scores, and choosing plots."}</p>
        </section>
      </main>
    </StudyGuideShell>
  );
}

export default DescriptiveStatsGuide;
