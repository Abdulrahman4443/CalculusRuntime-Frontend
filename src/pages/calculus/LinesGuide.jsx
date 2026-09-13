import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { TheoryBox, PracticalTheory, RealLifeUse, ProcedureBox } from "./CalcBlocks";
import {
  Dev1EightExamples,
  LINES_P1_EXAMPLES,
  LINES_P2_EXAMPLES,
} from "../../data/calcAgDev1Examples";
import { LINES_P1_QUIZ, LINES_P2_QUIZ } from "../../data/calcAgDev1Quizzes";

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

export default function LinesGuide({ part = 1 }) {
  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="System of Lines & Pairs of Lines (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Lines · Part 2</div></div>
          <a className="sb-link" href="#lines-homo">Homogeneous Lines (ax² + 2hxy + by² = 0)</a>
          <a className="sb-link" href="#lines-general">General 2nd-Degree Lines (Δ = 0)</a>
          <a className="sb-link" href="#lines-bisectors">Angle Bisectors &amp; Distance</a>
          <a className="sb-link" href="#lines-proc2">Methodology</a>
          <a className="sb-link" href="#lines-ex-p2">Lengthy Examples (8)</a>
          <a className="sb-link" href="#quiz-lines-p2">Interactive Quiz · 15 Qs</a>
          <a className="sb-link" href="#lines-life2">Real-World Engineering</a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Module A: 2D Analytical Geometry · Part 2 of 2</div>
            <h1 className="ch-title">Pair of Straight Lines &amp; Second-Degree Systems</h1>
            <p className="ch-sub">Homogeneous equations, angle formula, orthogonality conditions, and general quadratic factorization</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <CurriculumBadge code="F.Sc Part 2 (Ch. 4) + Math-101 Calculus & Analytic Geometry (Sem 1)" />

          <div className="opening-note-box">
            <p className="opening-note">
              <strong>Operational Blueprint:</strong>{" "}
              {"This study guide formalizes higher-order planar line systems governed by second-degree equations in two variables. We analyze the homogeneous equation $ax^2 + 2hxy + by^2 = 0$, deriving the acute angle $\\tan\\theta = \\frac{2\\sqrt{h^2 - ab}}{a + b}$, the perpendicularity criterion $a + b = 0$, and the coincidence criterion $h^2 = ab$. We extend to the general second-degree equation $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$, applying the determinant condition $\\Delta = abc + 2fgh - af^2 - bg^2 - ch^2 = 0$, singular point intersection formulas, and joint angle bisectors $h(x^2 - y^2) = (a - b)xy$. These concepts are critical in computer vision line clustering, architectural truss intersections, and structural stress axes."}
            </p>
          </div>
          <Divider />

          {/* Section 2.1 */}
          <section className="section" id="lines-homo">
            <div className="sec-badge">Section 2.1</div>
            <h2 className="sec-title">Homogeneous Second-Degree Equation</h2>
            <TheoryBox title="Lines Passing Through the Origin">
              <p>
                {"The equation $ax^2 + 2hxy + by^2 = 0$ represents two straight lines passing through the origin $(0, 0)$. Dividing by $x^2$ and substituting $m = y/x$ yields the auxiliary quadratic $bm^2 + 2hm + a = 0$. The roots $m_1, m_2$ represent the slopes of the two individual lines $y = m_1 x$ and $y = m_2 x$."}
              </p>
              <p>
                {"By Vieta's formulas, $m_1 + m_2 = -\\frac{2h}{b}$ and $m_1 m_2 = \\frac{a}{b}$. The angle $\\theta$ between the lines satisfies:"}
              </p>
              <p>
                {"$$\\tan\\theta = \\left|\\frac{m_1 - m_2}{1 + m_1 m_2}\\right| = \\frac{2\\sqrt{h^2 - ab}}{a + b}$$"}
              </p>
              <p>
                {"• **Perpendicularity Condition:** $m_1 m_2 = -1 \\implies a/b = -1 \\implies a + b = 0$ (the sum of coefficients of $x^2$ and $y^2$ is zero).\n• **Coincidence (Parallel) Condition:** $m_1 = m_2 \\implies h^2 - ab = 0$.\n• **Imaginary Lines:** If $h^2 - ab < 0$, the lines are imaginary intersecting at the single real point $(0, 0)$."}
              </p>
            </TheoryBox>
            <PracticalTheory title="Rapid Slope Decomposition">
              <p>
                {"To separate $ax^2 + 2hxy + by^2 = 0$ into individual lines without finding roots, treat it as a quadratic in $x$ or $y$ and complete the square, or factor by grouping: $(m_1 x - y)(m_2 x - y) = 0$."}
              </p>
            </PracticalTheory>
          </section>

          {/* Section 2.2 */}
          <section className="section" id="lines-general">
            <div className="sec-badge">Section 2.2</div>
            <h2 className="sec-title">General Second-Degree Equation of a Pair of Lines</h2>
            <TheoryBox title="The Conic Condition Delta = 0">
              <p>
                {"The general quadratic equation $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$ represents a pair of straight lines if and only if the coefficient matrix determinant vanishes:"}
              </p>
              <p>
                {"$$\\Delta = \\det\\begin{pmatrix} a & h & g \\\\ h & b & f \\\\ g & f & c \\end{pmatrix} = abc + 2fgh - af^2 - bg^2 - ch^2 = 0$$"}
              </p>
              <p>
                {"When $\\Delta = 0$, the point of intersection $(x_0, y_0)$ is the unique point where both first partial derivatives vanish simultaneously:"}
              </p>
              <p>
                {"$$\\frac{\\partial F}{\\partial x} = 2(ax + hy + g) = 0, \\quad \\frac{\\partial F}{\\partial y} = 2(hx + by + f) = 0$$"}
              </p>
              <p>
                {"Solving this $2 \\times 2$ system yields $(x_0, y_0) = \\left(\\frac{hf - bg}{ab - h^2}, \\frac{gh - af}{ab - h^2}\\right)$."}
              </p>
            </TheoryBox>
            <PracticalTheory title="Parallel Pair of Lines Distance">
              <p>
                {"If $h^2 = ab$ and $\\Delta = 0$, the two lines are parallel. The constant perpendicular distance between them is given by:"}
              </p>
              <p>
                {"$$d = 2\\sqrt{\\frac{g^2 - ac}{a(a + b)}} = 2\\sqrt{\\frac{f^2 - bc}{b(a + b)}}$$"}
              </p>
            </PracticalTheory>
          </section>

          {/* Section 2.3 */}
          <section className="section" id="lines-bisectors">
            <div className="sec-badge">Section 2.3</div>
            <h2 className="sec-title">Joint Equation of Angle Bisectors</h2>
            <TheoryBox title="Orthogonal Bisector Theorem">
              <p>
                {"The joint equation of the pair of lines bisecting the angles between $ax^2 + 2hxy + by^2 = 0$ is:"}
              </p>
              <p>
                {"$$\\frac{x^2 - y^2}{a - b} = \\frac{xy}{h} \\iff h(x^2 - y^2) - (a - b)xy = 0$$"}
              </p>
              <p>
                {"Notice the sum of the coefficients of $x^2$ and $y^2$ in the bisector equation is $h + (-h) = 0$, proving that the two angle bisectors are always perpendicular to each other regardless of the original lines."}
              </p>
            </TheoryBox>
          </section>

          {/* Procedure Box */}
          <section className="section" id="lines-proc2">
            <ProcedureBox
              title="Pair of Lines Analysis Protocol"
              steps={[
                "Identify coefficients a, h, b, g, f, c from the given second-degree polynomial.",
                "Compute Delta = abc + 2fgh - af² - bg² - ch². If Delta != 0, it is a non-degenerate conic (not a pair of lines).",
                "Evaluate h² - ab: if > 0, distinct intersecting lines; if = 0, parallel lines; if < 0, imaginary lines.",
                "Calculate angle theta via tan(theta) = 2*sqrt(h² - ab)/(a + b). Check if a + b = 0 (perpendicular).",
                "Differentiate partially: solve dF/dx = 0 and dF/dy = 0 to locate the intersection point.",
                "Construct angle bisectors using h(x² - y²) = (a - b)xy."
              ]}
            />
          </section>

          {/* Examples */}
          <section className="section" id="lines-ex-p2">
            <div className="sec-badge">Lengthy Certificate Examples</div>
            <h2 className="sec-title">Worked Examples (Part 2) — 8 Step-by-Step Solutions</h2>
            <Dev1EightExamples items={LINES_P2_EXAMPLES} />
          </section>

          {/* Quiz */}
          <GuideMcqSection
            id="quiz-lines-p2"
            badge="Quiz"
            title="Pairs of Lines & Second-Degree Systems (15 Questions)"
            scoreId="scorelines-2"
            section="lines-2"
            questions={LINES_P2_QUIZ}
          />

          <Divider />
          <section className="section" id="lines-life2">
            <div className="sec-badge">Engineering Integration</div>
            <h2 className="sec-title">Homogeneous Line Systems in Practice</h2>
            <RealLifeUse>
              Computer vision algorithms (such as Hough transforms and camera calibration) detect vanishing points by projecting parallel 3D lines onto perspective planes where they form homogeneous line bundles. In robotics and structural engineering, principal stress trajectories at beam junctions align exactly with the orthogonal angle bisectors of shear slip-lines.
            </RealLifeUse>
          </section>
        </main>
      </StudyGuideShell>
    );
  }

  // Part 1
  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="2D Analytical Geometry: The Straight Line (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Lines · Part 1</div></div>
        <a className="sb-link" href="#lines-coords">Coordinates &amp; Division</a>
        <a className="sb-link" href="#lines-centers">Triangle Centers &amp; Euler Line</a>
        <a className="sb-link" href="#lines-forms">Six Standard Forms</a>
        <a className="sb-link" href="#lines-dist">Distances &amp; Angles</a>
        <a className="sb-link" href="#lines-concur">Concurrency (3×3 Det)</a>
        <a className="sb-link" href="#lines-proc1">Methodology</a>
        <a className="sb-link" href="#lines-ex-p1">Lengthy Examples (8)</a>
        <a className="sb-link" href="#quiz-lines-p1">Interactive Quiz · 15 Qs</a>
        <a className="sb-link" href="#lines-life1">Real-World Engineering</a>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Module A: 2D Analytical Geometry · Part 1 of 2</div>
          <h1 className="ch-title">The Straight Line &amp; Coordinate Geometry</h1>
          <p className="ch-sub">Section formulas, triangle centers, standard forms, perpendicular distance, angles, and concurrency</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <CurriculumBadge code="F.Sc Part 2 (Ch. 4) + Math-101 Calculus & Analytic Geometry (Sem 1)" />

        <div className="opening-note-box">
          <p className="opening-note">
            <strong>Operational Blueprint:</strong>{" "}
            {"This module establishes the core foundations of 2D analytical geometry aligned with F.Sc Part 2 (Chapter 4) and University Calculus & Analytic Geometry. We develop internal and external point division via the section ratio formula, analyze triangle centers (Centroid, Incenter, Circumcenter, Orthocenter), and prove Euler's collinearity theorem ($HG : GO = 2 : 1$). We rigorously derive all six standard representations of straight lines (slope-intercept, point-slope, two-point, intercept, normal, parametric), perpendicular distance formulas, and the 3x3 determinant condition of concurrency. These principles form the computational backbone for computer graphics rasterization, ray tracing, and structural truss modeling."}
          </p>
        </div>
        <Divider />

        {/* Section 1.1 */}
        <section className="section" id="lines-coords">
          <div className="sec-badge">Section 1.1</div>
          <h2 className="sec-title">Coordinate Systems &amp; Ratio Division</h2>
          <TheoryBox title="The Section Formula (Internal & External)">
            <p>
              {"Let $A(x_1, y_1)$ and $B(x_2, y_2)$ be two distinct points in the Cartesian plane. A point $P(x, y)$ dividing the directed line segment $AB$ in the ratio $k_1 : k_2$ satisfies:"}
            </p>
            <p>
              {"$$\\text{Internal Division: } P = \\left( \\frac{k_1 x_2 + k_2 x_1}{k_1 + k_2}, \\frac{k_1 y_2 + k_2 y_1}{k_1 + k_2} \\right)$$"}
            </p>
            <p>
              {"$$\\text{External Division: } Q = \\left( \\frac{k_1 x_2 - k_2 x_1}{k_1 - k_2}, \\frac{k_1 y_2 - k_2 y_1}{k_1 - k_2} \\right) \\quad (k_1 \\neq k_2)$$"}
            </p>
            <p>
              {"When $k_1 = k_2 = 1$, the internal division formula reduces to the midpoint $M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$."}
            </p>
          </TheoryBox>
          <PracticalTheory title="Harmonic Conjugates">
            <p>
              {"The points $P$ (internal) and $Q$ (external) divide the segment $AB$ harmonically with the same ratio $\\lambda = k_1/k_2$. The cross ratio $(A, B; P, Q) = -1$."}
            </p>
          </PracticalTheory>
        </section>

        {/* Section 1.2 */}
        <section className="section" id="lines-centers">
          <div className="sec-badge">Section 1.2</div>
          <h2 className="sec-title">Triangle Centers &amp; The Euler Line</h2>
          <TheoryBox title="Centroid, Incenter, Circumcenter, Orthocenter">
            <p>
              {"For any triangle with vertices $A(x_1, y_1)$, $B(x_2, y_2)$, $C(x_3, y_3)$ and opposite side lengths $a, b, c$:\n" +
               "1. **Centroid ($G$):** Concurrency of medians. $G = \\left(\\frac{x_1 + x_2 + x_3}{3}, \\frac{y_1 + y_2 + y_3}{3}\\right)$.\n" +
               "2. **Incenter ($I$):** Concurrency of internal angle bisectors. $I = \\left(\\frac{a x_1 + b x_2 + c x_3}{a + b + c}, \\frac{a y_1 + b y_2 + c y_3}{a + b + c}\\right)$.\n" +
               "3. **Circumcenter ($O$):** Concurrency of perpendicular bisectors. Center of the circumcircle.\n" +
               "4. **Orthocenter ($H$):** Concurrency of the three altitudes."}
            </p>
            <p>
              {"**Euler's Theorem:** In any non-equilateral triangle, the Orthocenter ($H$), Centroid ($G$), and Circumcenter ($O$) are collinear (lying on the Euler Line), and the Centroid divides $HO$ internally in the ratio $2 : 1$ ($HG : GO = 2 : 1$)." }
            </p>
          </TheoryBox>
        </section>

        {/* Section 1.3 */}
        <section className="section" id="lines-forms">
          <div className="sec-badge">Section 1.3</div>
          <h2 className="sec-title">Six Standard Forms of a Straight Line</h2>
          <TheoryBox title="Complete Line Catalog">
            <p>
              {"1. **Slope-Intercept Form:** $y = mx + c$, where $m = \\tan\\theta$ is the slope and $c$ is the $y$-intercept.\n" +
               "2. **Point-Slope Form:** $y - y_1 = m(x - x_1)$, for a line through $(x_1, y_1)$ with slope $m$.\n" +
               "3. **Two-Point Form:** $\\frac{y - y_1}{y_2 - y_1} = \\frac{x - x_1}{x_2 - x_1}$, passing through $(x_1, y_1)$ and $(x_2, y_2)$.\n" +
               "4. **Intercept Form:** $\\frac{x}{a} + \\frac{y}{b} = 1$, where $a$ and $b$ are the $x$- and $y$-intercepts.\n" +
               "5. **Normal Form:** $x\\cos\\alpha + y\\sin\\alpha = p$, where $p \\ge 0$ is the perpendicular distance from origin and $\\alpha$ is the normal inclination.\n" +
               "6. **Symmetric (Distance) Form:** $\\frac{x - x_1}{\\cos\\theta} = \\frac{y - y_1}{\\sin\\theta} = r$, expressing any point at directed distance $r$ from $(x_1, y_1)$."}
            </p>
          </TheoryBox>
        </section>

        {/* Section 1.4 */}
        <section className="section" id="lines-dist">
          <div className="sec-badge">Section 1.4</div>
          <h2 className="sec-title">Perpendicular Distance &amp; Angles</h2>
          <TheoryBox title="Metric Formulas in 2D Geometry">
            <p>
              {"• **Point-to-Line Distance:** The perpendicular distance from $P(x_0, y_0)$ to line $Ax + By + C = 0$ is:\n" +
               "$$d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}$$\n" +
               "• **Distance Between Parallel Lines:** For $A x + B y + C_1 = 0$ and $A x + B y + C_2 = 0$:\n" +
               "$$d = \\frac{|C_1 - C_2|}{\\sqrt{A^2 + B^2}}$$\n" +
               "• **Angle Between Two Lines:** For lines with slopes $m_1$ and $m_2$:\n" +
               "$$\\tan\\theta = \\left|\\frac{m_2 - m_1}{1 + m_1 m_2}\\right|$$"}
            </p>
          </TheoryBox>
        </section>

        {/* Section 1.5 */}
        <section className="section" id="lines-concur">
          <div className="sec-badge">Section 1.5</div>
          <h2 className="sec-title">Condition of Concurrency of Three Lines</h2>
          <TheoryBox title="The 3x3 Determinant Theorem">
            <p>
              {"Three lines $L_1: A_1 x + B_1 y + C_1 = 0$, $L_2: A_2 x + B_2 y + C_2 = 0$, and $L_3: A_3 x + B_3 y + C_3 = 0$ intersect at a single common point if and only if:"}
            </p>
            <p>
              {"$$\\det\\begin{pmatrix} A_1 & B_1 & C_1 \\\\ A_2 & B_2 & C_2 \\\\ A_3 & B_3 & C_3 \\end{pmatrix} = A_1(B_2 C_3 - B_3 C_2) - B_1(A_2 C_3 - A_3 C_2) + C_1(A_2 B_3 - A_3 B_2) = 0$$"}
            </p>
          </TheoryBox>
        </section>

        {/* Procedure Box */}
        <section className="section" id="lines-proc1">
          <ProcedureBox
            title="General Line Problem Solving Workflow"
            steps={[
              "Identify known geometric elements: vertices, slopes, intercepts, or normal angle.",
              "Select the standard form that matches the given parameters (e.g. intercept form for cut-off lengths).",
              "To find intersection points, solve the 2x2 linear system using elimination or Cramer's Rule.",
              "For perpendicular distance, ensure the line is in general form Ax + By + C = 0 before computing sqrt(A² + B²).",
              "For concurrency, set up the 3x3 determinant of coefficients and solve for the unknown parameter.",
              "Verify triangle centers using Euler's collinearity ratio HG : GO = 2 : 1."
            ]}
          />
        </section>

        {/* Examples */}
        <section className="section" id="lines-ex-p1">
          <div className="sec-badge">Lengthy Certificate Examples</div>
          <h2 className="sec-title">Worked Examples (Part 1) — 8 Step-by-Step Solutions</h2>
          <Dev1EightExamples items={LINES_P1_EXAMPLES} />
        </section>

        {/* Quiz */}
        <GuideMcqSection
          id="quiz-lines-p1"
          badge="Quiz"
          title="2D Analytical Geometry & Standard Lines (15 Questions)"
          scoreId="scorelines-1"
          section="lines-1"
          questions={LINES_P1_QUIZ}
        />

        <Divider />
        <section className="section" id="lines-life1">
          <div className="sec-badge">Engineering Integration</div>
          <h2 className="sec-title">Analytical Geometry in Engineering &amp; Computing</h2>
          <RealLifeUse>
            Ray tracing renderers compute line-object intersections using the parametric symmetric line form. CAD tools calculate barycentric coordinates (generalizations of the section formula) to deform 3D meshes. Civil engineers design highway transition spirals and railway alignments using perpendicular offset distances and angle bisectors.
          </RealLifeUse>
        </section>
      </main>
    </StudyGuideShell>
  );
}
