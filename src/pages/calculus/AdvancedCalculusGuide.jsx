import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { TheoryBox, PracticalTheory, RealLifeUse, ProcedureBox } from "./CalcBlocks";
import {
  Dev1EightExamples,
  ADVCALC_P1_EXAMPLES,
  ADVCALC_P2_EXAMPLES,
} from "../../data/calcAgDev1Examples";
import { ADVCALC_P1_QUIZ, ADVCALC_P2_QUIZ } from "../../data/calcAgDev1Quizzes";

function Divider() {
  return <hr className="divider" />;
}

function CurriculumBadge({ code }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.4rem 0.85rem",
        borderRadius: "999px",
        background: "rgba(13, 148, 136, 0.12)",
        border: "1px solid rgba(13, 148, 136, 0.3)",
        color: "var(--teal)",
        fontSize: "0.85rem",
        fontWeight: 600,
        marginBottom: "1.25rem",
      }}
    >
      <span>📚 Curriculum Ref:</span>
      <span>{code}</span>
    </div>
  );
}

export default function AdvancedCalculusGuide({ part = 1 }) {
  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Hyperbolics, Curvature & Applied Integrals (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Applied Calculus · Part 2</div></div>
          <a className="sb-link" href="#adv-hyperbolic">Hyperbolic Functions &amp; Inverses</a>
          <a className="sb-link" href="#adv-lhopital">L'Hôpital &amp; Indeterminate Forms</a>
          <a className="sb-link" href="#adv-arc-curvature">Arc Length &amp; Curvature κ</a>
          <a className="sb-link" href="#adv-surface-work">Surface Area, Work &amp; Hydrostatics</a>
          <a className="sb-link" href="#adv-proc2">Integration &amp; Analysis Workflow</a>
          <a className="sb-link" href="#adv-ex-p2">Lengthy Certificate Examples (8)</a>
          <a className="sb-link" href="#quiz-adv-p2">Interactive Mastery Quiz · 15 Qs</a>
          <a className="sb-link" href="#adv-life2">Civil, Marine &amp; Robotics Engineering</a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Module C: Advanced Single-Variable Calculus · Part 2 of 2</div>
            <h1 className="ch-title">Hyperbolic Functions, Curvature &amp; Applied Integrals</h1>
            <p className="ch-sub">From catenary physics and generalized L'Hôpital expansions to differential curvature, arc length, centroid mechanics, and hydrostatic fluid forces.</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <CurriculumBadge code="F.Sc Part 2 Ch. 1, 3.8 + Math-101 (Hyperbolics, Curvature, Definite Integral Applications)" />

          <section id="adv-hyperbolic" className="sec">
            <h2 className="sec-title">1. Hyperbolic Functions and Their Inverse Logarithms</h2>
            <TheoryBox title="Fundamental Hyperbolic Definitions and Differential Identities">
              <p>
                {"Hyperbolic functions arise naturally from the even and odd decompositions of the exponential function $e^x$, parameterizing the standard unit hyperbola $x^2 - y^2 = 1$:"}
              </p>
              <p>
                {"$$\\sinh x = \\frac{e^x - e^{-x}}{2}, \\qquad \\cosh x = \\frac{e^x + e^{-x}}{2}, \\qquad \\tanh x = \\frac{\\sinh x}{\\cosh x} = \\frac{e^x - e^{-x}}{e^x + e^{-x}}$$"}
              </p>
              <p>
                {"Fundamental Identity:"}
              </p>
              <p>
                {"$$\\cosh^2 x - \\sinh^2 x = 1, \\qquad 1 - \\tanh^2 x = \\operatorname{sech}^2 x, \\qquad \\coth^2 x - 1 = \\operatorname{csch}^2 x$$"}
              </p>
              <p>
                {"Derivatives:"}
              </p>
              <p>
                {"$$\\frac{d}{dx}(\\sinh x) = \\cosh x, \\qquad \\frac{d}{dx}(\\cosh x) = \\sinh x, \\qquad \\frac{d}{dx}(\\tanh x) = \\operatorname{sech}^2 x$$"}
              </p>
              <p>
                {"Inverse Hyperbolic Logarithmic Forms:"}
              </p>
              <p>
                {"$$\\begin{aligned} \\operatorname{arsinh} x &= \\ln\\left(x + \\sqrt{x^2 + 1}\\right), \\quad x \\in \\mathbb{R} \\\\ \\operatorname{arcosh} x &= \\ln\\left(x + \\sqrt{x^2 - 1}\\right), \\quad x \\ge 1 \\\\ \\operatorname{artanh} x &= \\frac{1}{2} \\ln\\left(\\frac{1 + x}{1 - x}\\right), \\quad |x| < 1 \\end{aligned}$$"}
              </p>
            </TheoryBox>
          </section>

          <Divider />

          <section id="adv-lhopital" className="sec">
            <h2 className="sec-title">2. Extended L'Hôpital's Rule and Power Forms</h2>
            <PracticalTheory title="Systematic Reduction of Indeterminate Limits">
              <p>
                {"For differentiable functions $f, g$ near $c$ where $g'(x) \\neq 0$:"}
              </p>
              <p>
                {"$$\\text{If } \\lim_{x \\to c} \\frac{f(x)}{g(x)} \\to \\left[\\frac{0}{0}\\right] \\text{ or } \\left[\\frac{\\pm \\infty}{\\pm \\infty}\\right], \\quad \\text{then } \\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f'(x)}{g'(x)}$$"}
              </p>
              <p>
                {"Handling Non-Quotient Indeterminate Types:"}
              </p>
              <ul>
                <li>{"Product $[0 \\cdot \\infty]$: Convert to fraction: $f(x) g(x) = \\frac{f(x)}{1/g(x)} \\to [0/0]$ or $\\frac{g(x)}{1/f(x)} \\to [\\infty/\\infty]$."}</li>
                <li>{"Difference $[\\infty - \\infty]$: Combine over common denominator or rationalize algebraic surds."}</li>
                <li>{"Exponential Powers $[1^\\infty, 0^0, \\infty^0]$: Let $y = [f(x)]^{g(x)}$, take natural logarithm $\\ln y = g(x) \\ln f(x)$, compute limit $L = \\lim_{x \\to c} \\ln y$, then restore original limit $\\lim y = e^L$."}</li>
              </ul>
            </PracticalTheory>
          </section>

          <Divider />

          <section id="adv-arc-curvature" className="sec">
            <h2 className="sec-title">3. Arc Length and Curvature of Planar Curves</h2>
            <TheoryBox title="Differential Geometry: Arc Length and Curvature κ">
              <p>
                {"Rectification of Curves (Arc Length): For a smooth curve $y = f(x)$ over $[a, b]$:"}
              </p>
              <p>
                {"$$L = \\int_a^b \\sqrt{1 + \\left[f'(x)\\right]^2}\\, dx$$"}
              </p>
              <p>
                {"For parametric curves $x = x(t), y = y(t)$ on $t \\in [t_1, t_2]$:"}
              </p>
              <p>
                {"$$L = \\int_{t_1}^{t_2} \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}\\, dt$$"}
              </p>
              <p>
                {"Curvature ($\\kappa$): The rate of change of the unit tangent vector direction with respect to arc length $s$:"}
              </p>
              <p>
                {"$$\\kappa = \\left\\|\\frac{d\\mathbf{T}}{ds}\\right\\| = \\frac{|y''|}{[1 + (y')^2]^{3/2}}$$"}
              </p>
              <p>
                {"In parametric coordinates $(\\dot{x}, \\dot{y})$ where dot denotes $d/dt$:"}
              </p>
              <p>
                {"$$\\kappa(t) = \\frac{|\\dot{x}\\ddot{y} - \\dot{y}\\ddot{x}|}{(\\dot{x}^2 + \\dot{y}^2)^{3/2}}$$"}
              </p>
              <p>
                {"The radius of curvature is $\\rho = \\frac{1}{\\kappa}$, defining the osculating circle."}
              </p>
            </TheoryBox>
          </section>

          <Divider />

          <section id="adv-surface-work" className="sec">
            <h2 className="sec-title">4. Surface Area of Revolution, Work &amp; Fluid Hydrostatics</h2>
            <PracticalTheory title="Physical Applications of the Definite Integral">
              <p>
                {"Surface Area of Revolution: Rotating $y = f(x) \\ge 0$ around the $x$-axis:"}
              </p>
              <p>
                {"$$S = 2\\pi \\int_a^b y \\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^2}\\, dx$$"}
              </p>
              <p>
                {"Work Done by a Variable Force:"}
              </p>
              <p>
                {"$$W = \\int_a^b F(x)\\, dx$$"}
              </p>
              <p>
                {"Centroid $(\\bar{x}, \\bar{y})$ of a Planar Region:"}
              </p>
              <p>
                {"$$\\bar{x} = \\frac{1}{A} \\int_a^b x [f(x) - g(x)]\\, dx, \\qquad \\bar{y} = \\frac{1}{2A} \\int_a^b [f(x)^2 - g(x)^2]\\, dx$$"}
              </p>
              <p>
                {"Hydrostatic Force on Submerged Vertical Plate:"}
              </p>
              <p>
                {"$$F_{\\text{fluid}} = \\int_c^d \\rho g \\cdot (\\text{depth } h(y)) \\cdot (\\text{width } w(y))\\, dy$$"}
              </p>
            </PracticalTheory>
          </section>

          <Divider />

          <section id="adv-proc2" className="sec">
            <h2 className="sec-title">5. Applied Integration Workflow</h2>
            <ProcedureBox title="Algorithmic Protocol for Applied Integral Setups">
              <ol>
                <li>{"Differential Strip: Draw the geometric cross-section or slice at coordinate $x$ (or depth $y$)."}</li>
                <li>{"Differential Quantity: Formulate infinitesimal element $dL = \\sqrt{1+(y')^2}\\,dx$, $dW = dF \\cdot d$, or $dF_{\\text{fluid}} = \\rho g h(y) w(y) dy$."}</li>
                <li>{"Limits of Integration: Identify the exact physical bounding coordinates from problem constraints."}</li>
                <li>{"Analytical Integration: Apply trigonometric, hyperbolic, or integration-by-parts substitution."}</li>
                <li>{"Dimensional Check: Confirm physical units (Joules for work, Newtons for force, meters for length/radius)."}</li>
              </ol>
            </ProcedureBox>
          </section>

          <Divider />

          <section id="adv-ex-p2" className="sec">
            <h2 className="sec-title">6. Eight Comprehensive Worked Examples</h2>
            <Dev1EightExamples examples={ADVCALC_P2_EXAMPLES} />
          </section>

          <Divider />

          <section id="quiz-adv-p2" className="sec">
            <h2 className="sec-title">7. Interactive Mastery Quiz · Applied Calculus</h2>
            <GuideMcqSection
              id="quiz-adv-p2"
              badge="Section 2 Mastery"
              title="Hyperbolic Functions, Curvature &amp; Applied Integrals (15 Questions)"
              scoreId="scoreadvcalc-2"
              section="advcalc-2"
              questions={ADVCALC_P2_QUIZ}
            />
          </section>

          <Divider />

          <section id="adv-life2" className="sec">
            <h2 className="sec-title">8. Real-World Engineering Applications</h2>
            <RealLifeUse title="Catenary Transmission Lines, Dam Engineering & Rollercoaster G-Forces">
              <p>
                {"The Catenary Curve: A uniform cable hanging under gravity takes the shape of $y = a \\cosh(x/a)$. Unlike a parabola, the catenary minimizes gravitational potential energy and experiences purely tensile stress along its length, forming the foundation of high-voltage transmission lines and suspension bridges."}
              </p>
              <p>
                {"Track Curvature and Centripetal Acceleration: High-speed rail and rollercoaster design require continuous curvature $\\kappa(s)$ and continuous derivative $d\\kappa/ds$ (jerk minimization) using clothoid Euler spirals to prevent passenger injury from abrupt lateral accelerations $a_c = v^2 \\kappa$."}
              </p>
            </RealLifeUse>
          </section>
        </main>
      </StudyGuideShell>
    );
  }

  // Part 1
  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Rigorous Limits, Theorems & Differentiation (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Advanced Calculus · Part 1</div></div>
        <a className="sb-link" href="#adv-eps-delta">Epsilon-Delta Definition of Limits</a>
        <a className="sb-link" href="#adv-discont">Classification of Discontinuities</a>
        <a className="sb-link" href="#adv-theorems">IVT, EVT &amp; Rolle's / MVT</a>
        <a className="sb-link" href="#adv-diff-methods">Logarithmic &amp; Parametric Derivatives</a>
        <a className="sb-link" href="#adv-proc1">Rigorous Limit Proof Protocol</a>
        <a className="sb-link" href="#adv-ex-p1">Lengthy Certificate Examples (8)</a>
        <a className="sb-link" href="#quiz-adv-p1">Interactive Mastery Quiz · 15 Qs</a>
        <a className="sb-link" href="#adv-life1">Control Engineering &amp; Stability</a>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Module C: Advanced Single-Variable Calculus · Part 1 of 2</div>
          <h1 className="ch-title">Rigorous Limits, Existence Theorems &amp; Differentiation</h1>
          <p className="ch-sub">Mastering formal (ε, δ) definitions, discontinuity taxonomy, IVT/EVT/MVT foundational proofs, logarithmic derivation, and parametric calculus.</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <CurriculumBadge code="F.Sc Part 2 Ch. 1.3-1.5, Ch. 2.1-2.9 + Math-101 (Calculus I - Analysis Foundations)" />

        <section id="adv-eps-delta" className="sec">
          <h2 className="sec-title">1. Formal (ε, δ) Definition of Limits</h2>
          <TheoryBox title="Cauchy-Weierstrass Rigorous Foundation of Limits">
            <p>
              {"We say that $\\lim_{x \\to c} f(x) = L$ if and only if for every real number $\\varepsilon > 0$, there exists a corresponding real number $\\delta > 0$ such that for all $x$ in the domain of $f$:"}
            </p>
            <p>
              {"$$0 < |x - c| < \\delta \\implies |f(x) - L| < \\varepsilon$$"}
            </p>
            <p>
              {"Anatomy of the Definition:"}
            </p>
            <ul>
              <li>{"$\\varepsilon$ represents an arbitrarily small error tolerance around the output limit $L$ on the vertical axis."}</li>
              <li>{"$\\delta$ represents the allowable neighborhood radius around input $c$ on the horizontal axis."}</li>
              <li>{"$0 < |x - c|$ explicitly excludes $x = c$, formalizing that the limit depends strictly on behavior near $c$, not the value at $c$."}</li>
            </ul>
            <p>
              {"Finding $\\delta(\\varepsilon)$ for Linear Functions $f(x) = mx + b$:"}
            </p>
            <p>
              {"$$|f(x) - L| = |(mx + b) - (mc + b)| = |m(x - c)| = |m| \\cdot |x - c| < \\varepsilon \\iff |x - c| < \\frac{\\varepsilon}{|m|}$$"}
            </p>
            <p>
              {"Choosing $\\delta = \\frac{\\varepsilon}{|m|}$ completes the rigorous proof."}
            </p>
          </TheoryBox>
        </section>

        <Divider />

        <section id="adv-discont" className="sec">
          <h2 className="sec-title">2. Classification of Discontinuities</h2>
          <PracticalTheory title="Taxonomy of Function Discontinuities">
            <p>
              {"A function $f(x)$ is continuous at $x = c$ if and only if: (1) $f(c)$ is defined, (2) $\\lim_{x \\to c} f(x)$ exists, and (3) $\\lim_{x \\to c} f(x) = f(c)$. Failure gives rise to four classical types:"}
            </p>
            <div className="table-wrap">
              <table className="calc-table">
                <thead>
                  <tr>
                    <th>Discontinuity Type</th>
                    <th>Left &amp; Right Limits</th>
                    <th>Analytical Condition</th>
                    <th>Prototypical Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Removable (Hole)</strong></td>
                    <td>{"$\\lim_{x \\to c^-} f = \\lim_{x \\to c^+} f = L$"}</td>
                    <td>{"Limit exists ($L \\in \\mathbb{R}$), but $f(c)$ is undefined or $f(c) \\neq L$."}</td>
                    <td>{"$f(x) = \\frac{x^2 - 4}{x - 2}$ at $x = 2$"}</td>
                  </tr>
                  <tr>
                    <td><strong>Jump (Step)</strong></td>
                    <td>{"$\\lim_{x \\to c^-} f \\neq \\lim_{x \\to c^+} f$"}</td>
                    <td>{"Both one-sided limits exist and are finite, but differ: $\\Delta = |L_1 - L_2| > 0$."}</td>
                    <td>{"$f(x) = \\operatorname{sgn}(x) = \\frac{x}{|x|}$ at $x = 0$"}</td>
                  </tr>
                  <tr>
                    <td><strong>Infinite (Essential)</strong></td>
                    <td>{"At least one limit is $\\pm \\infty$"}</td>
                    <td>{"Function blows up asymptotically near $x = c$."}</td>
                    <td>{"$f(x) = \\frac{1}{x - 3}$ or $\\frac{1}{(x-3)^2}$ at $x = 3$"}</td>
                  </tr>
                  <tr>
                    <td><strong>Oscillatory</strong></td>
                    <td>{"Does not exist"}</td>
                    <td>{"Function oscillates infinitely often with non-vanishing amplitude near $c$."}</td>
                    <td>{"$f(x) = \\sin(1/x)$ at $x = 0$"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </PracticalTheory>
        </section>

        <Divider />

        <section id="adv-theorems" className="sec">
          <h2 className="sec-title">3. The Big Three Existence Theorems: IVT, EVT &amp; MVT</h2>
          <TheoryBox title="Core Existence Theorems of Real Analysis">
            <p>
              {"1. Intermediate Value Theorem (IVT): If $f$ is continuous on closed interval $[a, b]$, and $u$ is any number between $f(a)$ and $f(b)$, then there exists at least one $c \\in (a, b)$ such that $f(c) = u$."}
            </p>
            <p>
              {"Bolzano's Corollary: If $f(a) \\cdot f(b) < 0$, there exists at least one real root $c \\in (a, b)$ where $f(c) = 0$."}
            </p>
            <p>
              {"2. Extreme Value Theorem (EVT): A continuous function on a closed, bounded (compact) interval $[a, b]$ attains both an absolute maximum and an absolute minimum at least once on $[a, b]$."}
            </p>
            <p>
              {"3. Rolle's Theorem: If $f$ is continuous on $[a, b]$, differentiable on $(a, b)$, and $f(a) = f(b)$, then there exists at least one $c \\in (a, b)$ such that $f'(c) = 0$."}
            </p>
            <p>
              {"4. Mean Value Theorem (MVT): Under the same hypotheses (without requiring $f(a) = f(b)$):"}
            </p>
            <p>
              {"$$f'(c) = \\frac{f(b) - f(a)}{b - a} \\quad \\text{for some } c \\in (a, b)$$"}
            </p>
            <p>
              {"Cauchy's Extended MVT: For two functions $f, g$: $\\frac{f'(c)}{g'(c)} = \\frac{f(b) - f(a)}{g(b) - g(a)}$."}
            </p>
          </TheoryBox>
        </section>

        <Divider />

        <section id="adv-diff-methods" className="sec">
          <h2 className="sec-title">4. Advanced Differentiation: Logarithmic &amp; Parametric Forms</h2>
          <PracticalTheory title="Power-Tower and Parametric Velocity Calculus">
            <p>
              {"Logarithmic Differentiation for $y = [u(x)]^{v(x)}$:"}
            </p>
            <p>
              {"$$\\ln y = v(x) \\ln u(x) \\implies \\frac{1}{y} \\frac{dy}{dx} = v'(x) \\ln u(x) + v(x) \\frac{u'(x)}{u(x)}$$"}
            </p>
            <p>
              {"$$\\frac{dy}{dx} = [u(x)]^{v(x)} \\left[ v'(x) \\ln u(x) + \\frac{v(x) u'(x)}{u(x)} \\right]$$"}
            </p>
            <p>
              {"Parametric Derivatives ($x = x(t), y = y(t)$):"}
            </p>
            <p>
              {"$$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{y'(t)}{x'(t)} \\quad (x'(t) \\neq 0)$$"}
            </p>
            <p>
              {"Second Parametric Derivative: Note that $\\frac{d^2 y}{dx^2} \\neq \\frac{y''(t)}{x''(t)}$! By the chain rule:"}
            </p>
            <p>
              {"$$\\frac{d^2 y}{dx^2} = \\frac{d}{dx}\\left(\\frac{dy}{dx}\\right) = \\frac{\\frac{d}{dt}\\left[\\frac{y'(t)}{x'(t)}\\right]}{x'(t)} = \\frac{x'(t) y''(t) - y'(t) x''(t)}{[x'(t)]^3}$$"}
            </p>
          </PracticalTheory>
        </section>

        <Divider />

        <section id="adv-proc1" className="sec">
          <h2 className="sec-title">5. Rigorous Limit Proof Protocol</h2>
          <ProcedureBox title="Step-by-Step Epsilon-Delta Proof Template">
            <ol>
              <li>{"Scrapwork / Discovery Phase: Set $|f(x) - L| < \\varepsilon$ and factor out $|x - c|$."}</li>
              <li>{"Bound Variable Coefficients: If factoring leaves another factor $g(x)$, assume a preliminary radius (e.g. $|x - c| < 1$) to find an upper bound $M$ such that $|g(x)| \\le M$."}</li>
              <li>{"Select Delta: Choose $\\delta = \\min(1, \\varepsilon / M)$."}</li>
              <li>{"Formal Proof Writing: Given $\\varepsilon > 0$, whenever $0 < |x - c| < \\delta$, both bounds hold simultaneously, guaranteeing $|f(x) - L| < \\varepsilon$."}</li>
            </ol>
          </ProcedureBox>
        </section>

        <Divider />

        <section id="adv-ex-p1" className="sec">
          <h2 className="sec-title">6. Eight Comprehensive Worked Examples</h2>
          <Dev1EightExamples examples={ADVCALC_P1_EXAMPLES} />
        </section>

        <Divider />

        <section id="quiz-adv-p1" className="sec">
          <h2 className="sec-title">7. Interactive Mastery Quiz · Analysis &amp; Differentiation</h2>
          <GuideMcqSection
            id="quiz-adv-p1"
            badge="Section 1 Mastery"
            title="Limits, Theorems &amp; Advanced Differentiation (15 Questions)"
            scoreId="scoreadvcalc-1"
            section="advcalc-1"
            questions={ADVCALC_P1_QUIZ}
          />
        </section>

        <Divider />

        <section id="adv-life1" className="sec">
          <h2 className="sec-title">8. Real-World Engineering Applications</h2>
          <RealLifeUse title="Feedback Control Loops, Sensor Sampling & Aerospace Stability">
            <p>
              {"Control System Stability and Discontinuities: In digital feedback control (such as PID controllers or flight stabilization systems), continuous physical phenomena are sampled at discrete time intervals $\\Delta t$. If the sampling rate is too low or actuator saturation occurs, the control response exhibits jump discontinuities that induce high-frequency ringing and catastrophic limit-cycle oscillations."}
            </p>
            <p>
              {"Mean Value Theorem in Speed Radar & Telemetry: Average speed cameras measure entry and exit times across highway stretches. By the MVT, if the average speed exceeds the legal limit, the driver's instantaneous speed $v(t) = s'(t)$ guaranteed exceeded the threshold at some instant $c \\in (t_1, t_2)$, providing conclusive legal proof of speeding."}
            </p>
          </RealLifeUse>
        </section>
      </main>
    </StudyGuideShell>
  );
}
