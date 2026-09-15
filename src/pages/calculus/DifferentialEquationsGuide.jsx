import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { Link } from "react-router-dom";
import { GuideMcqSection } from "../../components/GuideMcq";
import { TheoryBox, PracticalTheory, RealLifeUse, ProcedureBox } from "./CalcBlocks";
import {
  Dev1EightExamples,
  ODES_P1_EXAMPLES,
  ODES_P2_EXAMPLES,
} from "../../data/calcAgDev1Examples";
import { ODES_P1_QUIZ, ODES_P2_QUIZ } from "../../data/calcAgDev1Quizzes";

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

export default function DifferentialEquationsGuide({ part = 1 }) {
  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Exact, Bernoulli & 2nd-Order Linear ODEs (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">ODEs · Part 2</div></div>
          <a className="sb-link" href="#ode-exact">Exact Equations &amp; Integrating Factors</a>
          <a className="sb-link" href="#ode-bernoulli">Bernoulli Nonlinear ODEs</a>
          <a className="sb-link" href="#ode-second-homo">2nd-Order Homogeneous (Damping Modes)</a>
          <a className="sb-link" href="#ode-nonhomo">Undetermined Coeffs &amp; Variation of Params</a>
          <a className="sb-link" href="#ode-systems-link">Bridge to Linear ODE Systems</a>
          <a className="sb-link" href="#ode-proc2">2nd-Order Solving Protocol</a>
          <a className="sb-link" href="#ode-ex-p2">Lengthy Certificate Examples (8)</a>
          <a className="sb-link" href="#quiz-ode-p2">Interactive Mastery Quiz · 15 Qs</a>
          <a className="sb-link" href="#ode-life2">Mechanical Vibrations &amp; RLC Circuits</a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Module D: Ordinary Differential Equations · Part 2 of 2</div>
            <h1 className="ch-title">Exact, Bernoulli &amp; Second-Order Differential Equations</h1>
            <p className="ch-sub">Exactness conditions, Bernoulli linearization, characteristic roots, damping classifications, undetermined coefficients, and the Wronskian variation of parameters.</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <CurriculumBadge code="F.Sc Part 2 Ch. 3.8 + Math-201 (Ordinary Differential Equations - Higher Order & Systems)" />

          <section id="ode-exact" className="sec">
            <h2 className="sec-title">1. Exact Differential Equations &amp; Integrating Factors</h2>
            <TheoryBox title="Total Differential Formulation and Exactness Condition">
              <p>
                {"A first-order differential equation written in differential form:"}
              </p>
              <p>
                {"$$M(x, y)\\, dx + N(x, y)\\, dy = 0$$"}
              </p>
              <p>
                {"is exact if and only if there exists a scalar potential function $\\Psi(x, y)$ such that $d\\Psi = M dx + N dy$. By Clairaut-Schwarz symmetry of mixed partial derivatives ($\\Psi_{xy} = \\Psi_{yx}$), this holds if and only if:"}
              </p>
              <p>
                {"$$\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$$"}
              </p>
              <p>
                {"When exact, the solution is $\\Psi(x, y) = C$, obtained by integrating $\\Psi = \\int M\\, dx + g(y)$ and differentiating with respect to $y$ to solve for $g'(y) = N - \\frac{\\partial}{\\partial y}\\int M dx$."}
              </p>
              <p>
                {"Integrating Factors $\\mu$: If the equation is non-exact:"}
              </p>
              <ul>
                <li>{"If $\\frac{1}{N}\\left(\\frac{\\partial M}{\\partial y} - \\frac{\\partial N}{\\partial x}\\right) = f(x)$, then $\\mu(x) = \\exp\\left(\\int f(x)\\, dx\\right)$."}</li>
                <li>{"If $\\frac{1}{M}\\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right) = g(y)$, then $\\mu(y) = \\exp\\left(\\int g(y)\\, dy\\right)$."}</li>
              </ul>
            </TheoryBox>
          </section>

          <Divider />

          <section id="ode-bernoulli" className="sec">
            <h2 className="sec-title">2. Bernoulli Nonlinear Differential Equations</h2>
            <PracticalTheory title="Power Transformation to Linear First-Order Form">
              <p>
                {"A Bernoulli equation is a nonlinear first-order equation of the form:"}
              </p>
              <p>
                {"$$\\frac{dy}{dx} + P(x) y = Q(x) y^n \\quad (n \\neq 0, 1)$$"}
              </p>
              <p>
                {"Linearization Method:"}
              </p>
              <ol>
                <li>{"Divide the entire equation by $y^n$:"}
                  <p>{"$$y^{-n} \\frac{dy}{dx} + P(x) y^{1-n} = Q(x)$$"}</p>
                </li>
                <li>{"Substitute $v = y^{1-n}$. Differentiating with respect to $x$:"}
                  <p>{"$$\\frac{dv}{dx} = (1 - n) y^{-n} \\frac{dy}{dx} \\implies y^{-n} \\frac{dy}{dx} = \\frac{1}{1 - n} \\frac{dv}{dx}$$"}</p>
                </li>
                <li>{"Substitute back into the ODE:"}
                  <p>{"$$\\frac{dv}{dx} + (1 - n) P(x) v = (1 - n) Q(x)$$"}</p>
                </li>
              </ol>
              <p>
                {"This is a standard linear first-order equation in $v(x)$, solved using integrating factor $\\mu(x) = \\exp\\left((1-n)\\int P dx\\right)$."}
              </p>
            </PracticalTheory>
          </section>

          <Divider />

          <section id="ode-second-homo" className="sec">
            <h2 className="sec-title">3. Second-Order Homogeneous Linear ODEs with Constant Coefficients</h2>
            <TheoryBox title="Characteristic Equation and Three Physical Damping Modes">
              <p>
                {"Consider the linear homogeneous second-degree ODE:"}
              </p>
              <p>
                {"$$a \\frac{d^2 y}{dx^2} + b \\frac{dy}{dx} + c y = 0 \\quad (a \\neq 0)$$"}
              </p>
              <p>
                {"Assuming exponential ansatz $y = e^{r x}$ leads directly to the Characteristic Equation:"}
              </p>
              <p>
                {"$$a r^2 + b r + c = 0 \\implies r = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$"}
              </p>
              <p>
                {"The discriminant $\\Delta = b^2 - 4ac$ dictates the three fundamental physical damping regimes:"}
              </p>
              <div className="table-wrap">
                <table className="calc-table">
                  <thead>
                    <tr>
                      <th>Discriminant</th>
                      <th>Roots</th>
                      <th>General Solution</th>
                      <th>Oscillation Regime</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{"$\\Delta > 0$"}</td>
                      <td>Real &amp; Distinct ($r_1 \neq r_2$)</td>
                      <td>{"$y_h = c_1 e^{r_1 x} + c_2 e^{r_2 x}$"}</td>
                      <td><strong>Overdamped</strong> (pure decay)</td>
                    </tr>
                    <tr>
                      <td>{"$\\Delta = 0$"}</td>
                      <td>Real &amp; Repeated ($r_1 = r_2 = r$)</td>
                      <td>{"$y_h = (c_1 + c_2 x) e^{r x}$"}</td>
                      <td><strong>Critically Damped</strong> (fastest decay)</td>
                    </tr>
                    <tr>
                      <td>{"$\\Delta < 0$"}</td>
                      <td>Complex ($\alpha \pm i\beta$)</td>
                      <td>{"$y_h = e^{\\alpha x} (c_1 \\cos\\beta x + c_2 \\sin\\beta x)$"}</td>
                      <td><strong>Underdamped</strong> (decaying oscillations)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TheoryBox>
          </section>

          <Divider />

          <section id="ode-nonhomo" className="sec">
            <h2 className="sec-title">4. Non-Homogeneous Equations: Undetermined Coefficients &amp; Wronskian</h2>
            <PracticalTheory title="Complete Solution Structure: y(x) = y_h(x) + y_p(x)">
              <p>
                {"For non-homogeneous equation $a y'' + b y' + c y = g(x)$, the complete general solution is the superposition of the homogeneous complementary solution $y_h(x)$ and any particular integral $y_p(x)$."}
              </p>
              <p>
                {"Method of Undetermined Coefficients:"}
              </p>
              <ul>
                <li>{"If $g(x) = P_n(x)$ (polynomial of degree $n$), try $y_p = x^s (A_n x^n + \\dots + A_0)$."}</li>
                <li>{"If $g(x) = e^{k x}$, try $y_p = x^s (A e^{k x})$."}</li>
                <li>{"If $g(x) = \\sin(k x)$ or $\\cos(k x)$, try $y_p = x^s (A \\cos kx + B \\sin kx)$."}</li>
                <li>{"The resonance factor $s \\in \\{0, 1, 2\\}$ is the smallest non-negative integer ensuring no term in $y_p$ duplicates a term in $y_h$."}</li>
              </ul>
              <p>
                {"Variation of Parameters (Universal Method): Given fundamental homogeneous solutions $y_1, y_2$, compute the Wronskian determinant:"}
              </p>
              <p>
                {"$$W(y_1, y_2)(x) = \\begin{vmatrix} y_1 & y_2 \\\\ y_1' & y_2' \\end{vmatrix} = y_1 y_2' - y_2 y_1' \\neq 0$$"}
              </p>
              <p>
                {"The particular integral is given universally by:"}
              </p>
              <p>
                {"$$y_p(x) = -y_1(x) \\int \\frac{y_2(x) g(x)}{a W(x)}\\, dx + y_2(x) \\int \\frac{y_1(x) g(x)}{a W(x)}\\, dx$$"}
              </p>
            </PracticalTheory>
          </section>

          <Divider />

          <section id="ode-systems-link" className="sec">
            <h2 className="sec-title">5. Bridging Forward to Linear ODE Systems</h2>
            <TheoryBox title="From Higher-Order Scalars to State-Space First-Order Systems">
              <p>
                {"Every $n$-th order linear ODE $y^{(n)} = F(x, y, y', \\dots, y^{(n-1)})$ can be converted into an equivalent system of $n$ coupled first-order linear ODEs:"}
              </p>
              <p>
                {"$$x_1 = y, \\quad x_2 = y', \\quad \\dots, \\quad x_n = y^{(n-1)} \\implies \\mathbf{x}'(t) = \\mathbf{A} \\mathbf{x}(t) + \\mathbf{f}(t)$$"}
              </p>
              <p>
                {"Such systems are solved using matrix eigenvalues, eigenvectors, and matrix exponentials $e^{\\mathbf{A} t}$."}
              </p>
              <div style={{ marginTop: "1rem", padding: "1rem", background: "rgba(13, 148, 136, 0.1)", borderRadius: "8px", border: "1px solid rgba(13, 148, 136, 0.3)" }}>
                <span style={{ fontWeight: "bold", color: "var(--teal)" }}>{"🔗 Next Step in the Curriculum: "}</span>
                <span>{"To master matrix diagonalization and eigenbasis decoupling for multi-variable dynamical systems, explore our "}</span>
                <Link to="/linear-algebra/systems/1" style={{ color: "#38bdf8", textDecoration: "underline", fontWeight: "600" }}>
                  {"Linear Algebra Systems Guide (/linear-algebra/systems/1)"}
                </Link>.
              </div>
            </TheoryBox>
          </section>

          <Divider />

          <section id="ode-proc2" className="sec">
            <h2 className="sec-title">6. Second-Order Linear Solving Protocol</h2>
            <ProcedureBox title="Step-by-Step Second-Order ODE Solution Blueprint">
              <ol>
                <li>{"Characteristic Roots: Write $a r^2 + b r + c = 0$ and find roots $r_1, r_2$."}</li>
                <li>{"Complementary Function: Formulate $y_h(x)$ based on the sign of $b^2 - 4ac$ (distinct real, repeated real, or complex conjugate)."}</li>
                <li>{"Identify Driving Term $g(x)$: Select undetermined coefficients for standard families, or compute Wronskian $W$ and use Variation of Parameters for arbitrary $g(x)$."}</li>
                <li>{"Assemble General Solution: $y(x) = y_h(x) + y_p(x)$."}</li>
                <li>{"Apply Initial Conditions: If given $y(x_0) = y_0$ and $y'(x_0) = y_0'$, differentiate $y(x)$ after adding $y_p$, then solve the $2 \\times 2$ linear system for $(c_1, c_2)$."}</li>
              </ol>
            </ProcedureBox>
          </section>

          <Divider />

          <section id="ode-ex-p2" className="sec">
            <h2 className="sec-title">7. Eight Comprehensive Worked Examples</h2>
            <Dev1EightExamples examples={ODES_P2_EXAMPLES} />
          </section>

          <Divider />

          <section id="quiz-ode-p2" className="sec">
            <h2 className="sec-title">8. Interactive Mastery Quiz · Higher-Order ODEs</h2>
            <GuideMcqSection
              id="quiz-ode-p2"
              badge="Section 2 Mastery"
              title="Exact, Bernoulli &amp; Second-Order ODEs (15 Questions)"
              scoreId="scoreode-2"
              section="ode-2"
              questions={ODES_P2_QUIZ}
            />
          </section>

          <Divider />

          <section id="ode-life2" className="sec">
            <h2 className="sec-title">9. Real-World Engineering Applications</h2>
            <RealLifeUse title="Tuned Mass Dampers, Vehicle Suspensions & Harmonic Resonance">
              <p>
                {"Mechanical Harmonic Resonance: The equation $m x''(t) + c x'(t) + k x(t) = F_0 \\cos(\\omega t)$ models skyscrapers in earthquakes and automotive suspensions on bumpy roads. When the driving frequency $\\omega$ approaches natural frequency $\\omega_0 = \\sqrt{k/m}$, damping ratio $\\zeta = c/(2\\sqrt{km})$ determines maximum amplitude. Civil engineers install tuned mass dampers (e.g., Taipei 101's 660-tonne pendulum) that create counteracting anti-resonance to prevent structural failure."}
              </p>
            </RealLifeUse>
          </section>
        </main>
      </StudyGuideShell>
    );
  }

  // Part 1
  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="First-Order ODEs: Separable, Homogeneous & Linear (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">ODEs · Part 1</div></div>
        <a className="sb-link" href="#ode-fundamentals">Classification: Order, Degree &amp; Linearity</a>
        <a className="sb-link" href="#ode-separable">Separable Differential Equations</a>
        <a className="sb-link" href="#ode-homogeneous">Homogeneous Equations (y = vx)</a>
        <a className="sb-link" href="#ode-linear-first">First-Order Linear &amp; Integrating Factor</a>
        <a className="sb-link" href="#ode-proc1">First-Order Solution Decision Tree</a>
        <a className="sb-link" href="#ode-ex-p1">Lengthy Certificate Examples (8)</a>
        <a className="sb-link" href="#quiz-ode-p1">Interactive Mastery Quiz · 15 Qs</a>
        <a className="sb-link" href="#ode-life1">RC Circuits &amp; Dynamic Systems</a>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Module D: Ordinary Differential Equations · Part 1 of 2</div>
          <h1 className="ch-title">First-Order Ordinary Differential Equations</h1>
          <p className="ch-sub">Classification, initial value problems, separation of variables, homogeneous substitutions, and integrating factor techniques for linear systems.</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <CurriculumBadge code="F.Sc Part 2 Ch. 3.8 (Differential Equations) + Math-201 (Ordinary Differential Equations I)" />

        <section id="ode-fundamentals" className="sec">
          <h2 className="sec-title">1. Classification: Order, Degree, Linearity &amp; Solutions</h2>
          <TheoryBox title="Fundamental Taxonomy of Differential Equations">
            <p>
              {"An Ordinary Differential Equation (ODE) is an equation containing an unknown function $y(x)$ and its ordinary derivatives $y', y'', \\dots, y^{(n)}$:"}
            </p>
            <ul>
              <li>{"Order: The order of the highest derivative occurring in the equation (e.g. $y'' + 3y' = 0$ has order 2)."}</li>
              <li>{"Degree: The power to which the highest-order derivative is raised, after the equation has been rationalized and cleared of fractional/radical powers of derivatives."}</li>
              <li>{"Linearity: An ODE is linear if: (1) The dependent variable $y$ and all its derivatives appear only to the first power, (2) No cross-products of $y$ and its derivatives exist, and (3) No transcendental functions of $y$ exist."}</li>
              <li>{"General vs Particular Solution: An $n$-th order ODE has a general solution containing $n$ arbitrary constants of integration ($C_1, \\dots, C_n$). An Initial Value Problem (IVP) specifies $n$ initial conditions to fix these constants uniquely."}</li>
            </ul>
          </TheoryBox>
        </section>

        <Divider />

        <section id="ode-separable" className="sec">
          <h2 className="sec-title">2. Separable Differential Equations</h2>
          <PracticalTheory title="Separation of Variables Technique">
            <p>
              {"A first-order ODE is separable if it can be factored into a product of a pure $x$-function and a pure $y$-function:"}
            </p>
            <p>
              {"$$\\frac{dy}{dx} = g(x) h(y) \\iff \\frac{1}{h(y)}\\, dy = g(x)\\, dx \\quad (h(y) \\neq 0)$$"}
            </p>
            <p>
              {"Integrating both sides directly gives the implicit general solution:"}
            </p>
            <p>
              {"$$\\int \\frac{1}{h(y)}\\, dy = \\int g(x)\\, dx + C$$"}
            </p>
            <p>
              {"Singular Solutions: The values $y = y_0$ where $h(y_0) = 0$ represent constant (equilibrium) solutions. They must be verified separately to check if they are contained in the family for some choice of $C$ or constitute singular solutions."}
            </p>
          </PracticalTheory>
        </section>

        <Divider />

        <section id="ode-homogeneous" className="sec">
          <h2 className="sec-title">3. Homogeneous First-Order Equations</h2>
          <TheoryBox title="Degree Invariance and the y = vx Transformation">
            <p>
              {"A first-order equation $\\frac{dy}{dx} = f(x, y)$ is homogeneous of degree 0 if $f(tx, ty) = f(x, y)$ for all $t > 0$, meaning $f(x, y)$ can be expressed solely as a function of the ratio $y/x$:"}
            </p>
            <p>
              {"$$\\frac{dy}{dx} = F\\left(\\frac{y}{x}\\right)$$"}
            </p>
            <p>
              {"Substitution Workflow:"}
            </p>
            <p>
              {"$$y = v(x) \\cdot x \\implies \\frac{dy}{dx} = v + x \\frac{dv}{dx}$$"}
            </p>
            <p>
              {"Equating with $F(v)$:"}
            </p>
            <p>
              {"$$v + x \\frac{dv}{dx} = F(v) \\implies x \\frac{dv}{dx} = F(v) - v \\implies \\frac{1}{F(v) - v}\\, dv = \\frac{1}{x}\\, dx$$"}
            </p>
            <p>
              {"The equation is now completely separated in $v$ and $x$. After integrating, substitute $v = y/x$ back to restore the original coordinates."}
            </p>
          </TheoryBox>
        </section>

        <Divider />

        <section id="ode-linear-first" className="sec">
          <h2 className="sec-title">4. First-Order Linear Equations &amp; Integrating Factor</h2>
          <PracticalTheory title="The Canonical Integrating Factor Method (Leibniz Form)">
            <p>
              {"A first-order linear ODE can always be cast into the canonical standard form:"}
            </p>
            <p>
              {"$$\\frac{dy}{dx} + P(x) y = Q(x)$$"}
            </p>
            <p>
              {"To make the left-hand side an exact product derivative $\\frac{d}{dx}[\\mu(x) y]$, we multiply the entire equation by the Integrating Factor:"}
            </p>
            <p>
              {"$$\\mu(x) = \\exp\\left(\\int P(x)\\, dx\\right) = e^{\\int P(x)\\, dx}$$"}
            </p>
            <p>
              {"Multiplying through:"}
            </p>
            <p>
              {"$$\\mu(x) \\frac{dy}{dx} + \\mu(x) P(x) y = \\mu(x) Q(x) \\iff \\frac{d}{dx}\\left[\\mu(x) y\\right] = \\mu(x) Q(x)$$"}
            </p>
            <p>
              {"Integrating both sides with respect to $x$ yields the explicit general solution:"}
            </p>
            <p>
              {"$$\\mu(x) y = \\int \\mu(x) Q(x)\\, dx + C \\implies y(x) = \\frac{1}{\\mu(x)} \\left[ \\int \\mu(x) Q(x)\\, dx + C \\right]$$"}
            </p>
          </PracticalTheory>
        </section>

        <Divider />

        <section id="ode-proc1" className="sec">
          <h2 className="sec-title">5. First-Order Solution Decision Protocol</h2>
          <ProcedureBox title="Algorithmic Classifier for First-Order ODEs">
            <ol>
              <li>{"Check Separability: Can you write the equation as $\\frac{dy}{dx} = g(x) h(y)$? If yes, separate and integrate."}</li>
              <li>{"Check Linearity: Can you write $\\frac{dy}{dx} + P(x) y = Q(x)$? If yes, find $\\mu(x) = e^{\\int P dx}$ and integrate."}</li>
              <li>{"Check Homogeneity: Does replacing $(x, y) \\to (tx, ty)$ leave the right side unchanged? If yes, let $y = vx$ and separate."}</li>
              <li>{"Check Exactness: In $M dx + N dy = 0$, does $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$? If yes, integrate potential $\\Psi(x, y) = C$."}</li>
              <li>{"Check Bernoulli Form: Is it $y' + P(x)y = Q(x)y^n$? If yes, divide by $y^n$ and substitute $v = y^{1-n}$."}</li>
            </ol>
          </ProcedureBox>
        </section>

        <Divider />

        <section id="ode-ex-p1" className="sec">
          <h2 className="sec-title">6. Eight Comprehensive Worked Examples</h2>
          <Dev1EightExamples examples={ODES_P1_EXAMPLES} />
        </section>

        <Divider />

        <section id="quiz-ode-p1" className="sec">
          <h2 className="sec-title">7. Interactive Mastery Quiz · First-Order ODEs</h2>
          <GuideMcqSection
            id="quiz-ode-p1"
            badge="Section 1 Mastery"
            title="First-Order Ordinary Differential Equations (15 Questions)"
            scoreId="scoreode-1"
            section="ode-1"
            questions={ODES_P1_QUIZ}
          />
        </section>

        <Divider />

        <section id="ode-life1" className="sec">
          <h2 className="sec-title">8. Real-World Engineering Applications</h2>
          <RealLifeUse title="Transient RC/RL Electronics, Newton's Law of Cooling & Chemical Tanks">
            <p>
              {"Electrical RC Circuits: By Kirchhoff's Voltage Law, charging a capacitor through resistance $R$ is governed by $R \\frac{dq}{dt} + \\frac{1}{C} q = V(t)$. With $P(t) = \\frac{1}{RC}$, integrating factor $\\mu(t) = e^{t/(RC)}$ yields the ubiquitous exponential rise $q(t) = C V_0 (1 - e^{-t/\\tau})$ where $\\tau = RC$ is the circuit time constant."}
            </p>
            <p>
              {"Chemical Mixing Reactors: In continuous stirred tank reactors (CSTR), the rate of change of solute mass $x(t)$ satisfies $\\frac{dx}{dt} = \\text{Rate}_{\\text{in}} - \\text{Rate}_{\\text{out}} = c_{\\text{in}} r_{\\text{in}} - \\frac{x(t)}{V(t)} r_{\\text{out}}$, perfectly modeled and resolved by first-order linear integrating factors."}
            </p>
          </RealLifeUse>
        </section>
      </main>
    </StudyGuideShell>
  );
}
