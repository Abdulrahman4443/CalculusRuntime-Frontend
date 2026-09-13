import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { TheoryBox, PracticalTheory, RealLifeUse, ProcedureBox } from "./CalcBlocks";
import {
  Dev1EightExamples,
  CIRCLES_P1_EXAMPLES,
  CIRCLES_P2_EXAMPLES,
} from "../../data/calcAgDev1Examples";
import { CIRCLES_P1_QUIZ, CIRCLES_P2_QUIZ } from "../../data/calcAgDev1Quizzes";

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

export default function CirclesTangentsGuide({ part = 1 }) {
  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Circle & Conic Tangents & Normals (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Conics &amp; Tangents · Part 2</div></div>
          <a className="sb-link" href="#circ-tangent-t">The T = 0 Operator &amp; Tangent Equation</a>
          <a className="sb-link" href="#circ-slope-cond">Condition of Tangency (c² = r²(1+m²))</a>
          <a className="sb-link" href="#circ-conics-tang">Tangents to Parabola, Ellipse &amp; Hyperbola</a>
          <a className="sb-link" href="#circ-length-tang">Length of Tangent &amp; Power of a Point</a>
          <a className="sb-link" href="#circ-director">Director Circle &amp; Chord of Contact</a>
          <a className="sb-link" href="#circ-proc2">Systematic Tangency Workflow</a>
          <a className="sb-link" href="#circ-ex-p2">Lengthy Certificate Examples (8)</a>
          <a className="sb-link" href="#quiz-circ-p2">Interactive Mastery Quiz · 15 Qs</a>
          <a className="sb-link" href="#circ-life2">Real-World Aerospace &amp; Optics</a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Module B: Circle &amp; Conic Tangents · Part 2 of 2</div>
            <h1 className="ch-title">Tangents, Normals &amp; Conic Section Properties</h1>
            <p className="ch-sub">Mastering the universal T = 0 operator, slope conditions across all conics, tangent lengths, director loci, and chords of contact.</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <CurriculumBadge code="F.Sc Part 2 Ch. 6.2-6.9 (Tangents/Normals to Conics) + Math-101 (Calculus & Conics)" />

          <section id="circ-tangent-t" className="sec">
            <h2 className="sec-title">1. The Universal T = 0 Linearization Operator</h2>
            <TheoryBox title="Rigorous Mathematical Formulation of the T Operator">
              <p>
                {"In second-degree curve theory, the equation of the tangent at any point $P(x_1, y_1)$ lying on the conic $S(x, y) = 0$ is obtained by the universal replacement transformation denoted $T = 0$:"}
              </p>
              <p>
                {"$$\\begin{aligned} x^2 &\\longrightarrow x x_1 \\\\ y^2 &\\longrightarrow y y_1 \\\\ 2x &\\longrightarrow x + x_1 \\\\ 2y &\\longrightarrow y + y_1 \\\\ 2xy &\\longrightarrow x y_1 + x_1 y \\\\ \\text{constant } c &\\longrightarrow c \\end{aligned}$$"}
              </p>
              <p>
                {"For the general second-degree conic $S(x, y) = ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$, the tangent at point $P(x_1, y_1) \\in S$ is:"}
              </p>
              <p>
                {"$$T(x, y; x_1, y_1) \\equiv a x x_1 + h(x y_1 + x_1 y) + b y y_1 + g(x + x_1) + f(y + y_1) + c = 0$$"}
              </p>
              <p>
                {"For the standard circle $x^2 + y^2 = r^2$, the tangent at $(x_1, y_1)$ simplifies cleanly to:"}
              </p>
              <p>
                {"$$x x_1 + y y_1 = r^2$$"}
              </p>
              <p>
                {"The normal line is perpendicular to the tangent at $(x_1, y_1)$. Since the radius of a circle is always normal to the boundary tangent, the normal passes through the center $(0,0)$, having the line equation:"}
              </p>
              <p>
                {"$$y x_1 - x y_1 = 0 \\iff y = \\left(\\frac{y_1}{x_1}\\right) x$$"}
              </p>
            </TheoryBox>
          </section>

          <Divider />

          <section id="circ-slope-cond" className="sec">
            <h2 className="sec-title">2. Slope Conditions for Circle Tangency</h2>
            <PracticalTheory title="Condition of Tangency in Slope Form (y = mx + c)">
              <p>
                {"Consider the line $y = mx + c$ and the circle $x^2 + y^2 = r^2$. The line is tangent to the circle if and only if the perpendicular distance from the center $(0,0)$ to the line equals the circle radius $r$:"}
              </p>
              <p>
                {"$$d = \\frac{|m(0) - 0 + c|}{\\sqrt{1 + m^2}} = \\frac{|c|}{\\sqrt{1 + m^2}} = r \\implies c^2 = r^2(1 + m^2) \\implies c = \\pm r\\sqrt{1 + m^2}$$"}
              </p>
              <p>
                {"Therefore, the two parallel tangents with slope $m$ are given by:"}
              </p>
              <p>
                {"$$y = mx \\pm r\\sqrt{1 + m^2}$$"}
              </p>
              <p>
                {"The precise coordinates of the points of contact for slope $m$ are:"}
              </p>
              <p>
                {"$$\\left(\\mp \\frac{m r}{\\sqrt{1 + m^2}}, \\pm \\frac{r}{\\sqrt{1 + m^2}}\\right)$$"}
              </p>
            </PracticalTheory>
          </section>

          <Divider />

          <section id="circ-conics-tang" className="sec">
            <h2 className="sec-title">3. Tangents and Slope Conditions across All Conics</h2>
            <TheoryBox title="Unified Conic Tangency Conditions in Slope Form y = mx + c">
              <p>
                {"Applying identical discriminant analysis ($\\Delta = 0$) to lines intersecting each standard conic section yields the classical tangency relationships:"}
              </p>
              <div className="table-wrap">
                <table className="calc-table">
                  <thead>
                    <tr>
                      <th>Conic Section</th>
                      <th>Standard Equation</th>
                      <th>Condition on Intercept c</th>
                      <th>Equation of Tangent</th>
                      <th>Point of Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Circle</strong></td>
                      <td>{"$x^2 + y^2 = r^2$"}</td>
                      <td>{"$c^2 = r^2(1 + m^2)$"}</td>
                      <td>{"$y = mx \\pm r\\sqrt{1 + m^2}$"}</td>
                      <td>{"$(\\mp mr/\\sqrt{1+m^2}, \\pm r/\\sqrt{1+m^2})$"}</td>
                    </tr>
                    <tr>
                      <td><strong>Parabola</strong></td>
                      <td>{"$y^2 = 4ax$"}</td>
                      <td>{"$c = a/m \\quad (m \\neq 0)$"}</td>
                      <td>{"$y = mx + a/m$"}</td>
                      <td>{"$(a/m^2, 2a/m)$"}</td>
                    </tr>
                    <tr>
                      <td><strong>Ellipse</strong></td>
                      <td>{"$x^2/a^2 + y^2/b^2 = 1$"}</td>
                      <td>{"$c^2 = a^2 m^2 + b^2$"}</td>
                      <td>{"$y = mx \\pm \\sqrt{a^2 m^2 + b^2}$"}</td>
                      <td>{"$(\\mp a^2 m/\\sqrt{a^2 m^2+b^2}, \\pm b^2/\\sqrt{a^2 m^2+b^2})$"}</td>
                    </tr>
                    <tr>
                      <td><strong>Hyperbola</strong></td>
                      <td>{"$x^2/a^2 - y^2/b^2 = 1$"}</td>
                      <td>{"$c^2 = a^2 m^2 - b^2$"}</td>
                      <td>{"$y = mx \\pm \\sqrt{a^2 m^2 - b^2}$"}</td>
                      <td>{"$(\\mp a^2 m/\\sqrt{a^2 m^2-b^2}, \\mp b^2/\\sqrt{a^2 m^2-b^2})$"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TheoryBox>
          </section>

          <Divider />

          <section id="circ-length-tang" className="sec">
            <h2 className="sec-title">4. Tangent Length &amp; Power of a Point</h2>
            <PracticalTheory title="Length of Tangent from External Point P₁(x₁, y₁)">
              <p>
                {"Let $P_1(x_1, y_1)$ be a point outside circle $S(x, y) = x^2 + y^2 + 2gx + 2fy + c = 0$. By the Pythagorean theorem on the right triangle formed by point $P_1$, the circle center $C(-g, -f)$, and the point of tangency $T$:"}
              </p>
              <p>
                {"$$|P_1 T|^2 = |P_1 C|^2 - r^2 = \\left[(x_1 + g)^2 + (y_1 + f)^2\\right] - (g^2 + f^2 - c) = x_1^2 + y_1^2 + 2gx_1 + 2fy_1 + c = S_1$$"}
              </p>
              <p>
                {"Hence, the tangent length $L$ is simply:"}
              </p>
              <p>
                {"$$L = \\sqrt{S_1} = \\sqrt{x_1^2 + y_1^2 + 2gx_1 + 2fy_1 + c}$$"}
              </p>
              <p>
                {"Power of a Point Theorem: If a secant line through $P_1$ intersects the circle at $A$ and $B$, then $|P_1 A| \\cdot |P_1 B| = |P_1 T|^2 = S_1$. This power is positive outside, zero on the boundary, and negative inside."}
              </p>
            </PracticalTheory>
          </section>

          <Divider />

          <section id="circ-director" className="sec">
            <h2 className="sec-title">5. Director Circle &amp; Chord of Contact</h2>
            <TheoryBox title="Locus of Perpendicular Tangents and Chords of Contact">
              <p>
                {"Director Circle: The locus of the point of intersection of two mutually perpendicular tangents drawn to a conic:"}
              </p>
              <ul>
                <li>{"Circle $x^2 + y^2 = r^2$: Director circle is $x^2 + y^2 = 2r^2$ (concentric with radius $\\sqrt{2}r$)."}</li>
                <li>{"Ellipse $x^2/a^2 + y^2/b^2 = 1$: Director circle is $x^2 + y^2 = a^2 + b^2$."}</li>
                <li>{"Hyperbola $x^2/a^2 - y^2/b^2 = 1$ ($a > b$): Director circle is $x^2 + y^2 = a^2 - b^2$."}</li>
                <li>{"Parabola $y^2 = 4ax$: Locus of perpendicular tangents is its directrix, $x = -a$."}</li>
              </ul>
              <p>
                {"Chord of Contact: If two tangents are drawn from an external point $P_1(x_1, y_1)$ touching the circle at $A$ and $B$, the chord of contact line is identically:"}
              </p>
              <p>
                {"$$T(x, y; x_1, y_1) = 0 \\iff x x_1 + y y_1 + g(x + x_1) + f(y + y_1) + c = 0$$"}
              </p>
            </TheoryBox>
          </section>

          <Divider />

          <section id="circ-proc2" className="sec">
            <h2 className="sec-title">6. Systematic Tangency Workflow</h2>
            <ProcedureBox title="Step-by-Step Algorithm: Tangents from External Point P₁(x₁, y₁)">
              <ol>
                <li>{"Verification: Evaluate $S_1 = S(x_1, y_1)$. Verify $S_1 > 0$ so exactly two distinct real tangents exist."}</li>
                <li>{"Slope Equation: Assume tangent line equation $y - y_1 = m(x - x_1) \\implies mx - y + (y_1 - mx_1) = 0$."}</li>
                <li>{"Distance Equating: Set perpendicular distance from center $(-g, -f)$ equal to radius $r$:"}
                  <p>{"$$\\frac{|-gm - (-f) + y_1 - mx_1|}{\\sqrt{m^2 + 1}} = r$$"}</p>
                </li>
                <li>{"Solve for $m$: Square both sides to obtain a quadratic in $m$: $A m^2 + B m + C = 0$."}</li>
                <li>{"Evaluate Roots: The two real roots $m_1, m_2$ yield the two tangent lines. If the quadratic reduces to degree 1, the other tangent is vertical ($x = x_1$)."}</li>
              </ol>
            </ProcedureBox>
          </section>

          <Divider />

          <section id="circ-ex-p2" className="sec">
            <h2 className="sec-title">7. Eight Comprehensive Worked Examples</h2>
            <Dev1EightExamples examples={CIRCLES_P2_EXAMPLES} />
          </section>

          <Divider />

          <section id="quiz-circ-p2" className="sec">
            <h2 className="sec-title">8. Interactive Mastery Quiz · Conics &amp; Tangents</h2>
            <GuideMcqSection
              id="quiz-circ-p2"
              badge="Section 2 Mastery"
              title="Conic Tangents, Normals &amp; Loci (15 Questions)"
              scoreId="scorecircles-2"
              section="circles-2"
              questions={CIRCLES_P2_QUIZ}
            />
          </section>

          <Divider />

          <section id="circ-life2" className="sec">
            <h2 className="sec-title">9. Real-World Engineering Applications</h2>
            <RealLifeUse title="Reflective Optics, Whispering Galleries & Satellite Orbital Insertion">
              <p>
                {"Reflective Property of Conics: Tangents and normals define ray propagation in engineering systems:"}
              </p>
              <ul>
                <li>{"Parabolic dishes & headlights: Normals bisect incoming parallel rays through the focal point, enabling high-gain satellite dishes and solar concentrators."}</li>
                <li>{"Elliptical reflectors & lithotripsy: Shock waves generated at one focus reflect off the elliptical reflector and converge at the second focus to break kidney stones non-invasively."}</li>
                <li>{"Hyperbolic navigational systems: LORAN calculates time difference of arrival between two fixed transmitters, placing the receiver on a hyperbolic trajectory."}</li>
              </ul>
            </RealLifeUse>
          </section>
        </main>
      </StudyGuideShell>
    );
  }

  // Part 1
  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Circle Geometry & Point Classification (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Circle Geometry · Part 1</div></div>
        <a className="sb-link" href="#circ-standard">Standard &amp; General Form</a>
        <a className="sb-link" href="#circ-nature">Center, Radius &amp; Degeneracy</a>
        <a className="sb-link" href="#circ-three-pts">Circle Through 3 Non-Collinear Points</a>
        <a className="sb-link" href="#circ-parametric">Parametric Equations &amp; Intercepts</a>
        <a className="sb-link" href="#circ-point-pos">Point Position S₁ &amp; Concentricity</a>
        <a className="sb-link" href="#circ-proc1">Algorithmic Solver Workflow</a>
        <a className="sb-link" href="#circ-ex-p1">Lengthy Certificate Examples (8)</a>
        <a className="sb-link" href="#quiz-circ-p1">Interactive Mastery Quiz · 15 Qs</a>
        <a className="sb-link" href="#circ-life1">Engineering Trilateration &amp; GPS</a>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Module B: Circle &amp; Conic Tangents · Part 1 of 2</div>
          <h1 className="ch-title">Circle Equations, Analytic Geometry &amp; Loci</h1>
          <p className="ch-sub">Standard form, general second-degree circle equations, 3-point determinants, parametric representations, and point-position power functions.</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <CurriculumBadge code="F.Sc Part 2 Ch. 6.1 (Circle) + Math-101 (Calculus & Analytic Geometry)" />

        <section id="circ-standard" className="sec">
          <h2 className="sec-title">1. Standard and General Equations of a Circle</h2>
          <TheoryBox title="Fundamental Geometric Locus Definition">
            <p>
              {"A circle is the planar locus of a point $P(x, y)$ that moves such that its Euclidean distance from a fixed point $C(h, k)$ (the center) remains constant ($r$, the radius):"}
            </p>
            <p>
              {"$$|P C| = \\sqrt{(x - h)^2 + (y - k)^2} = r \\iff (x - h)^2 + (y - k)^2 = r^2$$"}
            </p>
            <p>
              {"Expanding the central equation produces:"}
            </p>
            <p>
              {"$$x^2 - 2hx + h^2 + y^2 - 2ky + k^2 = r^2 \\iff x^2 + y^2 - 2hx - 2ky + (h^2 + k^2 - r^2) = 0$$"}
            </p>
            <p>
              {"By defining $g = -h$, $f = -k$, and $c = h^2 + k^2 - r^2$, we obtain the General Equation of the Circle:"}
            </p>
            <p>
              {"$$x^2 + y^2 + 2gx + 2fy + c = 0$$"}
            </p>
            <p>
              {"Distinctive Algebraic Criteria for a Circle: In the general second-degree equation $ax^2 + 2h_{xy}xy + by^2 + 2gx + 2fy + c = 0$:"}
            </p>
            <ul>
              <li>{"The coefficients of $x^2$ and $y^2$ must be equal ($a = b \\neq 0$)."}</li>
              <li>{"There must be no cross-product $xy$ term ($h_{xy} = 0$)."}</li>
            </ul>
          </TheoryBox>
        </section>

        <Divider />

        <section id="circ-nature" className="sec">
          <h2 className="sec-title">2. Center, Radius and Nature of the Circle</h2>
          <PracticalTheory title="Completing the Square and Degenerate Loci">
            <p>
              {"Rewriting $x^2 + y^2 + 2gx + 2fy + c = 0$ by completing squares:"}
            </p>
            <p>
              {"$$(x + g)^2 + (y + f)^2 = g^2 + f^2 - c$$"}
            </p>
            <p>
              {"Matching with $(x - h)^2 + (y - k)^2 = r^2$, we extract:"}
            </p>
            <p>
              {"$$\\text{Center: } C(-g, -f), \\qquad \\text{Radius: } r = \\sqrt{g^2 + f^2 - c}$$"}
            </p>
            <p>
              {"The discriminant quantity $\\Delta_{\\text{circ}} = g^2 + f^2 - c$ determines the nature of the locus:"}
            </p>
            <ul>
              <li>{"$g^2 + f^2 - c > 0$: A Real Circle with non-zero radius."}</li>
              <li>{"$g^2 + f^2 - c = 0$: A Point Circle (degenerate circle consisting solely of the point $(-g, -f)$)."}</li>
              <li>{"$g^2 + f^2 - c < 0$: A Virtual / Imaginary Circle with no real Euclidean points."}</li>
            </ul>
          </PracticalTheory>
        </section>

        <Divider />

        <section id="circ-three-pts" className="sec">
          <h2 className="sec-title">3. Circle Through Three Non-Collinear Points</h2>
          <TheoryBox title="Determining a Unique Circle from 3 Planar Points">
            <p>
              {"Three non-collinear points $A(x_1, y_1), B(x_2, y_2), C(x_3, y_3)$ uniquely determine a circle. Substituting each point into the general equation yields a linear system of 3 equations in 3 unknowns $(g, f, c)$:"}
            </p>
            <p>
              {"$$\\begin{aligned} 2x_1 g + 2y_1 f + c &= -(x_1^2 + y_1^2) \\\\ 2x_2 g + 2y_2 f + c &= -(x_2^2 + y_2^2) \\\\ 2x_3 g + 2y_3 f + c &= -(x_3^2 + y_3^2) \\end{aligned}$$"}
            </p>
            <p>
              {"Alternatively, this can be stated compactly in determinant form:"}
            </p>
            <p>
              {"$$\\begin{vmatrix} x^2 + y^2 & x & y & 1 \\\\ x_1^2 + y_1^2 & x_1 & y_1 & 1 \\\\ x_2^2 + y_2^2 & x_2 & y_2 & 1 \\\\ x_3^2 + y_3^2 & x_3 & y_3 & 1 \\end{vmatrix} = 0$$"}
            </p>
            <p>
              {"Geometrically, the center is the circumcenter—the intersection of the perpendicular bisectors of $AB$ and $BC$."}
            </p>
          </TheoryBox>
        </section>

        <Divider />

        <section id="circ-parametric" className="sec">
          <h2 className="sec-title">4. Parametric Equations &amp; Intercepts on Coordinate Axes</h2>
          <PracticalTheory title="Trigonometric Parameterization and Axis Chords">
            <p>
              {"For circle $(x - h)^2 + (y - k)^2 = r^2$, setting $(x - h)/r = \\cos\\theta$ and $(y - k)/r = \\sin\\theta$ yields the parametric equations:"}
            </p>
            <p>
              {"$$x = h + r\\cos\\theta, \\quad y = k + r\\sin\\theta \\quad (\\theta \\in [0, 2\\pi))$$"}
            </p>
            <p>
              {"Intercepts Cut from Coordinate Axes:"}
            </p>
            <ul>
              <li>{"$x$-intercept length: Set $y = 0 \\implies x^2 + 2gx + c = 0$. The roots $x_1, x_2$ satisfy $|x_1 - x_2| = 2\\sqrt{g^2 - c}$."}</li>
              <li>{"$y$-intercept length: Set $x = 0 \\implies y^2 + 2fy + c = 0$. The roots $y_1, y_2$ satisfy $|y_1 - y_2| = 2\\sqrt{f^2 - c}$."}</li>
            </ul>
          </PracticalTheory>
        </section>

        <Divider />

        <section id="circ-point-pos" className="sec">
          <h2 className="sec-title">5. Position of a Point P₁(x₁, y₁) &amp; Concentricity</h2>
          <TheoryBox title="Power Evaluation S₁ and Circle Families">
            <p>
              {"Given circle $S(x, y) \\equiv x^2 + y^2 + 2gx + 2fy + c = 0$, evaluate the function at point $P_1(x_1, y_1)$:"}
            </p>
            <p>
              {"$$S_1 \\equiv x_1^2 + y_1^2 + 2gx_1 + 2fy_1 + c$$"}
            </p>
            <p>
              {"Since $S_1 = |P_1 C|^2 - r^2$, we classify:"}
            </p>
            <ul>
              <li>{"$S_1 > 0$: Point $P_1$ lies outside the circle (distance to center $> r$)."}</li>
              <li>{"$S_1 = 0$: Point $P_1$ lies on the circle boundary (distance to center $= r$)."}</li>
              <li>{"$S_1 < 0$: Point $P_1$ lies inside the circle (distance to center $< r$)."}</li>
            </ul>
            <p>
              {"Concentric Circles: Circles that share the exact same center $(-g, -f)$ differ only in their constant term:"}
            </p>
            <p>
              {"$$x^2 + y^2 + 2gx + 2fy + c' = 0 \\quad (c' \\neq c)$$"}
            </p>
          </TheoryBox>
        </section>

        <Divider />

        <section id="circ-proc1" className="sec">
          <h2 className="sec-title">6. Algorithmic Circle Solver Workflow</h2>
          <ProcedureBox title="Workflow: Fitting a Circle to Geometric Constraints">
            <ol>
              <li>{"Normalize Equation: Ensure the coefficients of $x^2$ and $y^2$ are 1 by dividing out any scalar multiplier."}</li>
              <li>{"Set Up Unknowns: Write $x^2 + y^2 + 2gx + 2fy + c = 0$ with 3 unknowns $(g, f, c)$."}</li>
              <li>{"Translate Conditions to Equations:"}
                <ul>
                  <li>{"Passes through $(x_i, y_i) \\implies 2x_i g + 2y_i f + c = -(x_i^2 + y_i^2)$."}</li>
                  <li>{"Center $(-g, -f)$ lies on line $Ax + By + C = 0 \\implies -Ag - Bf + C = 0$."}</li>
                  <li>{"Touches line $Ax + By + C = 0 \\implies \\frac{|-Ag - Bf + C|}{\\sqrt{A^2 + B^2}} = \\sqrt{g^2 + f^2 - c}$."}</li>
                </ul>
              </li>
              <li>{"Solve the System: Solve the linear/quadratic system for $(g, f, c)$."}</li>
              <li>{"Check Validity: Confirm $g^2 + f^2 - c > 0$ for real geometric circles."}</li>
            </ol>
          </ProcedureBox>
        </section>

        <Divider />

        <section id="circ-ex-p1" className="sec">
          <h2 className="sec-title">7. Eight Comprehensive Worked Examples</h2>
          <Dev1EightExamples examples={CIRCLES_P1_EXAMPLES} />
        </section>

        <Divider />

        <section id="quiz-circ-p1" className="sec">
          <h2 className="sec-title">8. Interactive Mastery Quiz · Circle Fundamentals</h2>
          <GuideMcqSection
            id="quiz-circ-p1"
            badge="Section 1 Mastery"
            title="Circle Analytic Geometry &amp; Loci (15 Questions)"
            scoreId="scorecircles-1"
            section="circles-1"
            questions={CIRCLES_P1_QUIZ}
          />
        </section>

        <Divider />

        <section id="circ-life1" className="sec">
          <h2 className="sec-title">9. Real-World Engineering Applications</h2>
          <RealLifeUse title="GPS Multilateration, Radar Systems & Pipe Hydraulics">
            <p>
              {"Global Positioning System (GPS) Trilateration: GPS satellites transmit time-stamped signals. By measuring the signal time-of-flight, the receiver computes its radial distance from each satellite:"}
            </p>
            <p>
              {"$$(x - x_i)^2 + (y - y_i)^2 + (z - z_i)^2 = (c \\cdot \\Delta t_i)^2$$"}
            </p>
            <p>
              {"In 2D positioning or planar radar tracking, the intersection of three circles provides an exact, unique position fix. Subtracting pairs of circle equations yields linear radical axes that immediately solve for coordinates without solving nonlinear quadratics."}
            </p>
          </RealLifeUse>
        </section>
      </main>
    </StudyGuideShell>
  );
}
