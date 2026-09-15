/**
 * Developer 1: Calc & Geometry - Extensive Worked Examples
 * 8+ Lengthy, rigorous certificate-ready examples per section:
 *   - Module A: Lines Part 1 & Part 2
 *   - Module B: Circles Part 1 & Part 2
 *   - Module C: Advanced Calculus Part 1 & Part 2
 *   - Module D: ODEs Part 1 & Part 2
 */
import { CertificateExample, RealLifeUse } from "../pages/calculus/CalcBlocks";

export function lengthySteps(cores) {
  return (cores || []).map((c) => (typeof c === "string" ? { text: c } : c));
}

export function Dev1EightExamples({ items, examples }) {
  const list = items || examples || [];
  return (
    <>
      {list.map((ex) => (
        <CertificateExample
          key={ex.number}
          number={ex.number}
          tier={ex.tier}
          title={ex.title}
          setup={ex.setup}
          steps={lengthySteps(ex.steps)}
          result={ex.result}
          check={ex.check}
          mistake={ex.mistake}
        />
      ))}
      {list[0]?.life ? <RealLifeUse>{list[0].life}</RealLifeUse> : null}
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MODULE A — Part 1: 2D Lines & Triangle Centers
// ═══════════════════════════════════════════════════════════════════════════

export const LINES_P1_EXAMPLES = [
  {
    number: 1,
    tier: "Foundational",
    title: "Internal and External Section Formula",
    setup: "Determine the coordinates of point $P$ that divides the segment connecting $A(-2, 3)$ and $B(6, -5)$ in the ratio $3 : 1$ internally, and point $Q$ dividing the same segment in ratio $3 : 1$ externally.",
    steps: [
      { text: "Identify the endpoints $A(x_1, y_1) = (-2, 3)$ and $B(x_2, y_2) = (6, -5)$, with ratio parameters $k_1 = 3$ and $k_2 = 1$.", why: "Parameter extraction." },
      { text: "Apply the internal section formula: $x_P = \\frac{k_1 x_2 + k_2 x_1}{k_1 + k_2} = \\frac{3(6) + 1(-2)}{3 + 1} = \\frac{18 - 2}{4} = \\frac{16}{4} = 4$.", why: "Weighted average of x-coordinates." },
      { text: "Compute the internal y-coordinate: $y_P = \\frac{k_1 y_2 + k_2 y_1}{k_1 + k_2} = \\frac{3(-5) + 1(3)}{3 + 1} = \\frac{-15 + 3}{4} = \\frac{-12}{4} = -3$.", why: "Weighted average of y-coordinates." },
      { text: "Thus internal point $P = (4, -3)$.", why: "State internal division result." },
      { text: "For external division, replace $k_2$ with $-k_2$ (or $-1$): $x_Q = \\frac{k_1 x_2 - k_2 x_1}{k_1 - k_2} = \\frac{3(6) - 1(-2)}{3 - 1} = \\frac{18 + 2}{2} = \\frac{20}{2} = 10$.", why: "External division formula." },
      { text: "Compute external y-coordinate: $y_Q = \\frac{3(-5) - 1(3)}{3 - 1} = \\frac{-15 - 3}{2} = \\frac{-18}{2} = -9$.", why: "Directed exterior ratio." },
      { text: "Hence external point $Q = (10, -9)$.", why: "State external division result." },
      { text: "Notice that $P$ and $Q$ divide segment $AB$ harmonically with ratio $\\lambda = 3$.", why: "Harmonic conjugate property." },
    ],
    result: "$P = (4, -3)$ (internal), $Q = (10, -9)$ (external).",
    check: "Distance $AP = \\sqrt{(4 - (-2))^2 + (-3 - 3)^2} = \\sqrt{36 + 36} = 6\\sqrt{2}$; distance $PB = \\sqrt{(6 - 4)^2 + (-5 - (-3))^2} = \\sqrt{4 + 4} = 2\\sqrt{2}$. Ratio $AP / PB = 6\\sqrt{2} / (2\\sqrt{2}) = 3 / 1$.",
    mistake: "Mixing up which coordinates multiply $k_1$ and $k_2$; remember $k_1$ multiplies the far coordinate $x_2$.",
    life: "Robotic arm path interpolation and CAD spline segment division rely on vector convex combinations directly generalized from the section formula."
  },
  {
    number: 2,
    tier: "Intermediate",
    title: "Centroid and Incenter of a Triangle",
    setup: "Calculate the exact coordinates of the centroid $G$ and incenter $I$ of the triangle with vertices $A(0, 0)$, $B(6, 0)$, and $C(0, 8)$.",
    steps: [
      { text: "Compute the centroid $G = \\left(\\frac{x_1 + x_2 + x_3}{3}, \\frac{y_1 + y_2 + y_3}{3}\\right) = \\left(\\frac{0 + 6 + 0}{3}, \\frac{0 + 0 + 8}{3}\\right) = \\left(2, \\frac{8}{3}\\right)$.", why: "Mean of triangle vertices." },
      { text: "To find the incenter, compute the lengths of the three sides opposite to vertices $A, B, C$.", why: "Incenter requires side weights." },
      { text: "Side $a = BC = \\sqrt{(0 - 6)^2 + (8 - 0)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.", why: "Hypotenuse length." },
      { text: "Side $b = AC = \\sqrt{(0 - 0)^2 + (8 - 0)^2} = 8$.", why: "Vertical leg length." },
      { text: "Side $c = AB = \\sqrt{(6 - 0)^2 + (0 - 0)^2} = 6$.", why: "Horizontal leg length." },
      { text: "Perimeter $P = a + b + c = 10 + 8 + 6 = 24$.", why: "Total perimeter." },
      { text: "Apply incenter formula: $x_I = \\frac{a x_1 + b x_2 + c x_3}{a + b + c} = \\frac{10(0) + 8(6) + 6(0)}{24} = \\frac{48}{24} = 2$.", why: "Weighted x-coordinate." },
      { text: "Apply incenter formula: $y_I = \\frac{a y_1 + b y_2 + c y_3}{a + b + c} = \\frac{10(0) + 8(0) + 6(8)}{24} = \\frac{48}{24} = 2$.", why: "Weighted y-coordinate." },
    ],
    result: "Centroid $G = (2, 8/3)$, Incenter $I = (2, 2)$.",
    check: "For a right triangle with legs $b = 8$ and $c = 6$ along axes, inradius $r = \\frac{b + c - a}{2} = \\frac{8 + 6 - 10}{2} = 2$, which precisely matches the coordinates $(r, r) = (2, 2)$.",
    mistake: "Associating side $a$ with vertex $A$ in the numerator; side $a$ is opposite to vertex $A$, but in the incenter formula, $a$ multiplies $A(x_1, y_1)$."
  },
  {
    number: 3,
    tier: "Advanced",
    title: "Circumcenter, Orthocenter and the Euler Line",
    setup: "For the triangle $A(0, 0)$, $B(6, 0)$, $C(0, 8)$, find the Circumcenter $O$, the Orthocenter $H$, and confirm Euler's theorem that $G$ divides $HO$ in the ratio $2 : 1$.",
    steps: [
      { text: "Notice $\\triangle ABC$ is a right triangle at vertex $A(0, 0)$.", why: "Geometric identification." },
      { text: "For any right triangle, the orthocenter $H$ is the vertex containing the right angle: $H = (0, 0)$.", why: "Altitudes coincide with legs." },
      { text: "The circumcenter $O$ is the midpoint of the hypotenuse $BC$: $O = \\left(\\frac{6 + 0}{2}, \\frac{0 + 8}{2}\\right) = (3, 4)$.", why: "Thales theorem on right triangles." },
      { text: "Recall centroid $G = (2, 8/3)$ from Example 2.", why: "Retrieve centroid coordinates." },
      { text: "Compute the vector $\\vec{HO} = O - H = (3 - 0, 4 - 0) = (3, 4)$.", why: "Euler segment vector." },
      { text: "Compute the internal point dividing $HO$ in ratio $2 : 1$: $x = \\frac{2(3) + 1(0)}{2 + 1} = \\frac{6}{3} = 2$.", why: "Euler line division check." },
      { text: "Compute the y-coordinate: $y = \\frac{2(4) + 1(0)}{2 + 1} = \\frac{8}{3}$.", why: "Euler line y-coordinate." },
      { text: "The point obtained is exactly $(2, 8/3) = G$, confirming Euler's theorem analytically.", why: "Verification of collinearity." },
    ],
    result: "Orthocenter $H = (0, 0)$, Circumcenter $O = (3, 4)$, and $G = (2, 8/3)$ lies on $HO$ with $HG : GO = 2 : 1$.",
    check: "Slopes: $m_{HG} = (8/3 - 0)/(2 - 0) = 4/3$; $m_{GO} = (4 - 8/3)/(3 - 2) = (4/3)/1 = 4/3$. Slopes match perfectly.",
    mistake: "Computing altitudes using heavy algebra for a right triangle where altitudes are simply the coordinate axes."
  },
  {
    number: 4,
    tier: "Comprehensive",
    title: "Six Standard Forms of a Straight Line",
    setup: "Given the line passing through $P(2, 3)$ with slope $m = 3/4$, express its equation in all six standard forms.",
    steps: [
      { text: "Form 1 (Point-Slope Form): $y - y_1 = m(x - x_1) \\implies y - 3 = \\frac{3}{4}(x - 2)$.", why: "Direct substitution of point and slope." },
      { text: "Form 2 (Slope-Intercept Form): $y = \\frac{3}{4}x - \\frac{6}{4} + 3 = \\frac{3}{4}x + \\frac{3}{2}$. Here $m = 3/4$ and $y$-intercept $c = 3/2$.", why: "Solve for y." },
      { text: "Form 3 (General Form): Clear fractions: $4y = 3x + 6 \\implies 3x - 4y + 6 = 0$.", why: "Ax + By + C = 0." },
      { text: "Form 4 (Intercept Form): $3x - 4y = -6 \\implies \\frac{x}{-2} + \\frac{y}{3/2} = 1$. Intercepts are $a = -2$ and $b = 3/2$.", why: "Divide by RHS constant." },
      { text: "Form 5 (Normal Form): Rearrange so RHS is positive: $-3x + 4y = 6$. Divide by $\\sqrt{(-3)^2 + 4^2} = 5$: $-\\frac{3}{5}x + \\frac{4}{5}y = \\frac{6}{5}$. Normal angle $\\alpha = \\pi - \\arcsin(4/5)$, $p = 6/5$.", why: "x cos alpha + y sin alpha = p." },
      { text: "Form 6 (Symmetric / Parametric Form): Since $m = \\tan\\theta = 3/4$, $\\cos\\theta = 4/5$ and $\\sin\\theta = 3/5$: $\\frac{x - 2}{4/5} = \\frac{y - 3}{3/5} = r$, or $x = 2 + \\frac{4}{5}r, y = 3 + \\frac{3}{5}r$.", why: "Distance parameter r." },
    ],
    result: "General: $3x - 4y + 6 = 0$; Intercept: $x/(-2) + y/(3/2) = 1$; Normal: $-\\frac{3}{5}x + \\frac{4}{5}y = \\frac{6}{5}$.",
    check: "Substitute $(2, 3)$: $3(2) - 4(3) + 6 = 6 - 12 + 6 = 0$. In intercept form: $2/(-2) + 3/(3/2) = -1 + 2 = 1$.",
    mistake: "Leaving $p$ negative in normal form; by definition, perpendicular distance $p \\ge 0$."
  },
  {
    number: 5,
    tier: "Intermediate",
    title: "Perpendicular Distance from a Point to a Line",
    setup: "Calculate the exact perpendicular distance from the point $M(-3, 5)$ to the line $5x - 12y + 14 = 0$, and find the coordinates of the foot of the perpendicular.",
    steps: [
      { text: "Identify $A = 5$, $B = -12$, $C = 14$, and point $(x_1, y_1) = (-3, 5)$.", why: "Parameter identification." },
      { text: "Apply perpendicular distance formula: $d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}}$.", why: "Standard geometric formula." },
      { text: "Evaluate the numerator: $|5(-3) - 12(5) + 14| = |-15 - 60 + 14| = |-61| = 61$.", why: "Absolute value of line expression." },
      { text: "Evaluate the denominator: $\\sqrt{5^2 + (-12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$.", why: "Euclidean norm of normal vector." },
      { text: "Therefore, perpendicular distance $d = \\frac{61}{13} \\approx 4.692$.", why: "Compute distance." },
      { text: "To find the foot of the perpendicular $(h, k)$, use $\\frac{h - x_1}{A} = \\frac{k - y_1}{B} = -\\frac{Ax_1 + By_1 + C}{A^2 + B^2}$.", why: "Foot of perpendicular formula." },
      { text: "Substitute values: $\\frac{h - (-3)}{5} = \\frac{k - 5}{-12} = -\\frac{-61}{169} = \\frac{61}{169}$.", why: "Solve for h and k." },
      { text: "Hence $h = -3 + \\frac{305}{169} = -\\frac{202}{169}$ and $k = 5 - \\frac{732}{169} = \\frac{113}{169}$.", why: "Exact foot coordinates." },
    ],
    result: "$d = 61/13$, Foot of perpendicular = $(-202/169, 113/169)$.",
    check: "$5(-202/169) - 12(113/169) + 14 = \\frac{-1010 - 1356 + 2366}{169} = \\frac{0}{169} = 0$. The foot lies on the line.",
    mistake: "Forgetting the minus sign in the foot of perpendicular formula: $\\frac{h - x_1}{A} = -\\frac{Ax_1 + By_1 + C}{A^2 + B^2}$."
  },
  {
    number: 6,
    tier: "Intermediate",
    title: "Distance Between Parallel Lines and Equidistant Line",
    setup: "Determine the distance between the parallel lines $L_1: 3x - 4y + 9 = 0$ and $L_2: 6x - 8y - 7 = 0$, and find the equation of the line midway between them.",
    steps: [
      { text: "Rewrite $L_2$ so that its coefficients of $x$ and $y$ match $L_1$: divide $L_2$ by $2$: $3x - 4y - 3.5 = 0$.", why: "Normalize coefficients to match A and B." },
      { text: "Now $A = 3$, $B = -4$, $C_1 = 9$, and $C_2 = -7/2$.", why: "Identify normalized constants." },
      { text: "Apply parallel distance formula: $d = \\frac{|C_1 - C_2|}{\\sqrt{A^2 + B^2}}$.", why: "Distance between parallel hyperplanes." },
      { text: "$d = \\frac{|9 - (-7/2)|}{\\sqrt{3^2 + (-4)^2}} = \\frac{9 + 3.5}{5} = \\frac{12.5}{5} = 2.5 = \\frac{5}{2}$.", why: "Evaluate quotient." },
      { text: "The midway line is parallel and has constant $C_{mid} = \\frac{C_1 + C_2}{2}$.", why: "Arithmetic mean of constants." },
      { text: "$C_{mid} = \\frac{9 + (-3.5)}{2} = \\frac{5.5}{2} = 2.75 = \\frac{11}{4}$.", why: "Compute midway constant." },
      { text: "Midway line equation: $3x - 4y + \\frac{11}{4} = 0 \\implies 12x - 16y + 11 = 0$.", why: "Clear fractions." },
    ],
    result: "Distance $d = 5/2 = 2.5$; Midway line: $12x - 16y + 11 = 0$.",
    check: "Distance from $(0, 9/4)$ on $L_1$ to midway line: $|12(0) - 16(9/4) + 11| / 20 = |-36 + 11| / 20 = 25/20 = 1.25 = d/2$.",
    mistake: "Computing $|C_1 - C_2|$ before scaling both equations so that $A_1 = A_2$ and $B_1 = B_2$."
  },
  {
    number: 7,
    tier: "Advanced",
    title: "Angle Between Two Lines and Angle Bisectors",
    setup: "Find the acute angle between $L_1: 2x - y + 3 = 0$ and $L_2: x - 3y + 2 = 0$, and find the equations of both the acute and obtuse angle bisectors.",
    steps: [
      { text: "Compute slopes: $m_1 = -2/(-1) = 2$ and $m_2 = -1/(-3) = 1/3$.", why: "Extract line slopes." },
      { text: "Apply tangent formula: $\\tan\\theta = \\left|\\frac{m_1 - m_2}{1 + m_1 m_2}\\right| = \\left|\\frac{2 - 1/3}{1 + 2(1/3)}\\right| = \\frac{5/3}{5/3} = 1$.", why: "Angle formula." },
      { text: "Since $\\tan\\theta = 1$, the acute angle is $\\theta = \\arctan(1) = 45^\\circ$ (or $\\pi/4$ radians).", why: "Evaluate angle." },
      { text: "The angle bisectors are the locus of points equidistant from both lines: $\\frac{2x - y + 3}{\\sqrt{2^2 + (-1)^2}} = \\pm \\frac{x - 3y + 2}{\\sqrt{1^2 + (-3)^2}}$.", why: "Equidistant locus definition." },
      { text: "Simplify denominators: $\\sqrt{5}$ and $\\sqrt{10} = \\sqrt{2}\\sqrt{5}$: $\\sqrt{2}(2x - y + 3) = \\pm (x - 3y + 2)$.", why: "Cross-multiply common root." },
      { text: "Bisector 1 (+ sign): $(2\\sqrt{2} - 1)x + (3 - \\sqrt{2})y + (3\\sqrt{2} - 2) = 0$.", why: "First bisector." },
      { text: "Bisector 2 (- sign): $(2\\sqrt{2} + 1)x - (3 + \\sqrt{2})y + (3\\sqrt{2} + 2) = 0$.", why: "Second bisector." },
      { text: "Check $a_1 a_2 + b_1 b_2 = 2(1) + (-1)(-3) = 5 > 0$. Since $a_1 a_2 + b_1 b_2 > 0$, the '+' sign gives the obtuse bisector, and the '-' sign gives the acute bisector.", why: "Standard obtuse/acute bisector sign rule." },
    ],
    result: "Angle $\\theta = 45^\\circ$; Acute bisector: $(2\\sqrt{2} + 1)x - (3 + \\sqrt{2})y + (3\\sqrt{2} + 2) = 0$.",
    check: "The two bisectors must be perpendicular: $m_{B1} m_{B2} = -1$. Dot product of normals: $(2\\sqrt{2}-1)(2\\sqrt{2}+1) + (3-\\sqrt{2})(-(3+\\sqrt{2})) = (8 - 1) - (9 - 2) = 7 - 7 = 0$.",
    mistake: "Assuming the positive root always corresponds to the acute angle bisector."
  },
  {
    number: 8,
    tier: "Mastery",
    title: "Condition of Concurrency of Three Lines",
    setup: "Determine the exact value of parameter $k$ for which the three lines $L_1: x + 2y - 5 = 0$, $L_2: 3x - y - 1 = 0$, and $L_3: 2x + ky - 8 = 0$ are concurrent, and find their common point of intersection.",
    steps: [
      { text: "Write the concurrency condition: the determinant of the coefficient matrix must vanish: $\\det\\begin{pmatrix} 1 & 2 & -5 \\\\ 3 & -1 & -1 \\\\ 2 & k & -8 \\end{pmatrix} = 0$.", why: "3x3 determinant condition." },
      { text: "Expand along Row 1: $1[(-1)(-8) - (-1)(k)] - 2[3(-8) - (-1)(2)] + (-5)[3(k) - (-1)(2)] = 0$.", why: "Cofactor expansion." },
      { text: "Evaluate each term: $1[8 + k] - 2[-24 + 2] - 5[3k + 2] = 0$.", why: "Simplify minors." },
      { text: "$8 + k - 2(-22) - 15k - 10 = 0 \\implies 8 + k + 44 - 15k - 10 = 0$.", why: "Expand products." },
      { text: "Combine like terms: $-14k + 42 = 0 \\implies 14k = 42 \\implies k = 3$.", why: "Linear equation in k." },
      { text: "Solve $L_1$ and $L_2$ simultaneously to find intersection: from $L_2$, $y = 3x - 1$.", why: "Simultaneous substitution." },
      { text: "Substitute into $L_1$: $x + 2(3x - 1) - 5 = 0 \\implies 7x - 7 = 0 \\implies x = 1$, then $y = 3(1) - 1 = 2$.", why: "Find common point." },
      { text: "Verify in $L_3$ with $k = 3$: $2(1) + 3(2) - 8 = 2 + 6 - 8 = 0$. Verified.", why: "Point check on L3." },
    ],
    result: "$k = 3$, common point of concurrency is $(1, 2)$.",
    check: "Rank of the augmented matrix $\\begin{pmatrix} 1 & 2 & 5 \\\\ 3 & -1 & 1 \\\\ 2 & 3 & 8 \\end{pmatrix}$ is $2$, which is $< 3$, confirming a unique common solution.",
    mistake: "Miscalculating signs during determinant expansion (e.g. forgetting the negative sign on the second cofactor term)."
  }
];

// ═══════════════════════════════════════════════════════════════════════════
// MODULE A — Part 2: Pairs of Straight Lines
// ═══════════════════════════════════════════════════════════════════════════

export const LINES_P2_EXAMPLES = [
  {
    number: 1,
    tier: "Foundational",
    title: "Factoring a Homogeneous Pair of Straight Lines",
    setup: "Separate the homogeneous equation $6x^2 + 7xy - 3y^2 = 0$ into two individual lines through the origin and determine the slope of each line.",
    steps: [
      { text: "The equation $6x^2 + 7xy - 3y^2 = 0$ is homogeneous of degree 2, representing two straight lines through $(0, 0)$.", why: "Homogeneous theorem." },
      { text: "Divide through by $x^2$ (for $x \\neq 0$) and set $m = y/x$: $6 + 7m - 3m^2 = 0 \\implies 3m^2 - 7m - 6 = 0$.", why: "Auxiliary slope equation." },
      { text: "Factor the quadratic in $m$: $(3m + 2)(m - 3) = 0$.", why: "Quadratic factoring." },
      { text: "The roots are $m_1 = 3$ and $m_2 = -2/3$.", why: "Solve for individual slopes." },
      { text: "The lines are $y = m_1 x \\implies y = 3x \\implies 3x - y = 0$, and $y = m_2 x \\implies y = -\\frac{2}{3}x \\implies 2x + 3y = 0$.", why: "Write line equations." },
      { text: "Notice the product: $(3x - y)(2x + 3y) = 6x^2 + 9xy - 2xy - 3y^2 = 6x^2 + 7xy - 3y^2 = 0$.", why: "Direct product verification." },
    ],
    result: "Lines are $3x - y = 0$ and $2x + 3y = 0$ with slopes $m_1 = 3$ and $m_2 = -2/3$.",
    check: "Product of slopes $m_1 m_2 = 3(-2/3) = -2 = a/b = 6/(-3) = -2$. Sum of slopes $m_1 + m_2 = 3 - 2/3 = 7/3 = -2h/b = -7/(-3) = 7/3$. Matches Vieta's formulas.",
    mistake: "Dividing by $y^2$ instead of $x^2$ and confusing the inverse slopes $1/m$ with $m$."
  },
  {
    number: 2,
    tier: "Intermediate",
    title: "Angle Between Pair of Lines Through Origin",
    setup: "Calculate the acute angle between the pair of straight lines given by $2x^2 + 7xy + 3y^2 = 0$.",
    steps: [
      { text: "Identify coefficients from $ax^2 + 2hxy + by^2 = 0$: $a = 2$, $2h = 7 \\implies h = 7/2$, $b = 3$.", why: "Extract coefficients." },
      { text: "Compute $h^2 - ab = (7/2)^2 - (2)(3) = \\frac{49}{4} - 6 = \\frac{49 - 24}{4} = \\frac{25}{4}$.", why: "Discriminant term." },
      { text: "Since $h^2 - ab = 25/4 > 0$, the lines are real and distinct.", why: "Reality condition check." },
      { text: "Apply angle formula: $\\tan\\theta = \\frac{2\\sqrt{h^2 - ab}}{a + b}$.", why: "Standard joint angle formula." },
      { text: "Substitute values: $\\tan\\theta = \\frac{2\\sqrt{25/4}}{2 + 3} = \\frac{2(5/2)}{5} = \\frac{5}{5} = 1$.", why: "Evaluate tangent quotient." },
      { text: "Therefore $\\theta = \\arctan(1) = 45^\\circ = \\frac{\\pi}{4}$ radians.", why: "Invert tangent function." },
    ],
    result: "Acute angle $\\theta = 45^\\circ$ ($\\pi/4$ rad).",
    check: "Factoring: $(2x + y)(x + 3y) = 0 \\implies m_1 = -2, m_2 = -1/3$. $\\tan\\theta = |(-2 - (-1/3)) / (1 + (-2)(-1/3))| = |-5/3 / (5/3)| = 1$.",
    mistake: "Forgetting the factor of $2$ in front of $\\sqrt{h^2 - ab}$ in the numerator."
  },
  {
    number: 3,
    tier: "Intermediate",
    title: "Conditions for Perpendicular and Coincident Lines",
    setup: "Given the equation $(k - 1)x^2 + 4xy + (2k + 3)y^2 = 0$, find the value of $k$ such that the lines are (a) mutually perpendicular, and (b) coincident.",
    steps: [
      { text: "Identify $a = k - 1$, $2h = 4 \\implies h = 2$, $b = 2k + 3$.", why: "Parameter identification." },
      { text: "Part (a): Two lines $ax^2 + 2hxy + by^2 = 0$ are perpendicular if and only if $a + b = 0$.", why: "Orthogonality condition." },
      { text: "Set $(k - 1) + (2k + 3) = 0 \\implies 3k + 2 = 0 \\implies k = -2/3$.", why: "Solve for k in (a)." },
      { text: "Part (b): The lines are coincident (parallel) if and only if $h^2 - ab = 0$.", why: "Coincidence condition." },
      { text: "Set $2^2 - (k - 1)(2k + 3) = 0 \\implies 4 - (2k^2 + k - 3) = 0$.", why: "Expand discriminant." },
      { text: "$4 - 2k^2 - k + 3 = 0 \\implies 2k^2 + k - 7 = 0$.", why: "Standard quadratic in k." },
      { text: "Solve via quadratic formula: $k = \\frac{-1 \\pm \\sqrt{1 - 4(2)(-7)}}{4} = \\frac{-1 \\pm \\sqrt{1 + 56}}{4} = \\frac{-1 \\pm \\sqrt{57}}{4}$.", why: "Roots of coincidence condition." },
    ],
    result: "(a) Perpendicular when $k = -2/3$; (b) Coincident when $k = \\frac{-1 \\pm \\sqrt{57}}{4}$.",
    check: "For $k = -2/3$, $a = -5/3, b = 5/3 \\implies a + b = 0$. Sum of coefficients is zero.",
    mistake: "Confusing the condition of coincidence ($h^2 = ab$) with the condition of perpendicularity ($a + b = 0$)."
  },
  {
    number: 4,
    tier: "Advanced",
    title: "General Second-Degree Pair of Lines Condition (Delta = 0)",
    setup: "Prove that $2x^2 + xy - y^2 + x + 4y - 3 = 0$ represents a pair of straight lines by evaluating $\\Delta$, and find their individual equations.",
    steps: [
      { text: "Identify coefficients from $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$: $a = 2, 2h = 1 \\implies h = 1/2, b = -1, 2g = 1 \\implies g = 1/2, 2f = 4 \\implies f = 2, c = -3$.", why: "Extract all 6 parameters." },
      { text: "Compute $\\Delta = abc + 2fgh - af^2 - bg^2 - ch^2$.", why: "General determinant condition." },
      { text: "$abc = (2)(-1)(-3) = 6$.", why: "First term." },
      { text: "$2fgh = 2(2)(1/2)(1/2) = 1$.", why: "Second term." },
      { text: "$-af^2 = -(2)(2^2) = -8$.", why: "Third term." },
      { text: "$-bg^2 = -(-1)(1/2)^2 = +1/4$.", why: "Fourth term." },
      { text: "$-ch^2 = -(-3)(1/2)^2 = +3/4$.", why: "Fifth term." },
      { text: "Sum: $\\Delta = 6 + 1 - 8 + 1/4 + 3/4 = -1 + 1 = 0$. Since $\\Delta = 0$, the equation indeed represents a pair of straight lines.", why: "Sum verifies Delta = 0." },
      { text: "To factor, treat as a quadratic in $x$: $2x^2 + (y + 1)x - (y^2 - 4y + 3) = 0$.", why: "Solve quadratic in x." },
      { text: "Discriminant: $D_x = (y+1)^2 - 4(2)(-(y^2 - 4y + 3)) = y^2 + 2y + 1 + 8y^2 - 32y + 24 = 9y^2 - 30y + 25 = (3y - 5)^2$.", why: "Perfect square discriminant." },
      { text: "Thus $x = \\frac{-(y + 1) \\pm (3y - 5)}{4}$.", why: "Roots for x." },
      { text: "Branch 1: $x = \\frac{-y - 1 + 3y - 5}{4} = \\frac{2y - 6}{4} = \\frac{y - 3}{2} \\implies 2x - y + 3 = 0$.", why: "First line equation." },
      { text: "Branch 2: $x = \\frac{-y - 1 - 3y + 5}{4} = \\frac{-4y + 4}{4} = -y + 1 \\implies x + y - 1 = 0$.", why: "Second line equation." },
    ],
    result: "$\\Delta = 0$ (verified pair of lines); Equations: $2x - y + 3 = 0$ and $x + y - 1 = 0$.",
    check: "Product: $(2x - y + 3)(x + y - 1) = 2x^2 + 2xy - 2x - xy - y^2 + y + 3x + 3y - 3 = 2x^2 + xy - y^2 + x + 4y - 3 = 0$.",
    mistake: "Missing the factor of $2$ when identifying $g, f, h$ from $2gx, 2fy, 2hxy$."
  },
  {
    number: 5,
    tier: "Advanced",
    title: "Point of Intersection via Partial Derivatives",
    setup: "Find the point of intersection of the pair of straight lines given by $2x^2 + xy - y^2 + x + 4y - 3 = 0$ using partial differentiation.",
    steps: [
      { text: "Let $F(x, y) = 2x^2 + xy - y^2 + x + 4y - 3$.", why: "Define bivariate polynomial." },
      { text: "The point of intersection $(x_0, y_0)$ is the singular point where both partial derivatives vanish simultaneously.", why: "Singular point property." },
      { text: "Compute $\\frac{\\partial F}{\\partial x} = 4x + y + 1 = 0$.", why: "First partial derivative." },
      { text: "Compute $\\frac{\\partial F}{\\partial y} = x - 2y + 4 = 0$.", why: "Second partial derivative." },
      { text: "Solve this $2 \\times 2$ linear system: from the second equation, $x = 2y - 4$.", why: "Substitution step." },
      { text: "Substitute into first equation: $4(2y - 4) + y + 1 = 0 \\implies 8y - 16 + y + 1 = 0 \\implies 9y - 15 = 0 \\implies y = 15/9 = 5/3$.", why: "Solve for y." },
      { text: "Compute $x = 2(5/3) - 4 = 10/3 - 12/3 = -2/3$.", why: "Solve for x." },
      { text: "Thus the intersection point is $(-2/3, 5/3)$.", why: "State coordinates." },
    ],
    result: "Point of intersection = $(-2/3, 5/3)$.",
    check: "Substitute $(-2/3, 5/3)$ into individual lines from Example 4: Line 1: $2(-2/3) - 5/3 + 3 = -4/3 - 5/3 + 3 = -9/3 + 3 = 0$. Line 2: $-2/3 + 5/3 - 1 = 3/3 - 1 = 0$. Both lines pass through this point.",
    mistake: "Solving the full non-linear quadratic when partial derivatives instantly reduce the problem to two linear equations."
  },
  {
    number: 6,
    tier: "Mastery",
    title: "Joint Equation of Angle Bisectors",
    setup: "Find the joint equation of the angle bisectors of the pair of lines $x^2 - 4xy + y^2 = 0$.",
    steps: [
      { text: "Identify coefficients: $a = 1, 2h = -4 \\implies h = -2, b = 1$.", why: "Extract coefficients." },
      { text: "Use the standard bisector equation: $\\frac{x^2 - y^2}{a - b} = \\frac{xy}{h}$.", why: "Bisector theorem." },
      { text: "Calculate $a - b = 1 - 1 = 0$.", why: "Difference of coefficients." },
      { text: "Since $a - b = 0$, the equation becomes $h(x^2 - y^2) = (a - b)xy \\implies -2(x^2 - y^2) = 0(xy)$.", why: "Cross-multiply." },
      { text: "Simplify: $x^2 - y^2 = 0 \\implies (x - y)(x + y) = 0$.", why: "Factored bisectors." },
      { text: "The bisectors are $y = x$ and $y = -x$.", why: "Individual bisector lines." },
      { text: "Notice these bisectors are mutually perpendicular ($1 \\times (-1) = -1$), as guaranteed by the bisector theorem.", why: "Perpendicularity check." },
    ],
    result: "Joint bisector equation: $x^2 - y^2 = 0$ ($y = \\pm x$).",
    check: "Original lines: $m^2 - 4m + 1 = 0 \\implies m = 2 \\pm \\sqrt{3}$. Notice $2 + \\sqrt{3} = \\tan(75^\\circ)$ and $2 - \\sqrt{3} = \\tan(15^\\circ)$. The bisectors are at $(75^\\circ + 15^\\circ)/2 = 45^\\circ$ ($y = x$) and $45^\\circ + 90^\\circ = 135^\\circ$ ($y = -x$). Perfect match.",
    mistake: "Dividing by zero when $a = b$; always use the cross-multiplied form $h(x^2 - y^2) = (a - b)xy$."
  },
  {
    number: 7,
    tier: "Mastery",
    title: "Homogenization Method for Chords Subtending Right Angles",
    setup: "Find the condition under which the chord $lx + my = 1$ subtends a right angle at the origin when intersecting the circle $x^2 + y^2 = a^2$.",
    steps: [
      { text: "The lines connecting the origin to the intersection points of the line and curve are found by homogenizing the curve equation using $lx + my = 1$.", why: "Homogenization principle." },
      { text: "Write the circle equation: $x^2 + y^2 - a^2(1)^2 = 0$.", why: "Make every term degree 2." },
      { text: "Substitute $1 = lx + my$: $x^2 + y^2 - a^2(lx + my)^2 = 0$.", why: "Homogenize constant term." },
      { text: "Expand: $x^2 + y^2 - a^2(l^2 x^2 + 2lm xy + m^2 y^2) = 0$.", why: "Expand binomial." },
      { text: "Group into standard form $Ax^2 + 2Hxy + By^2 = 0$: $(1 - a^2 l^2)x^2 - 2a^2 lm xy + (1 - a^2 m^2)y^2 = 0$.", why: "Homogeneous form." },
      { text: "These lines subtend a right angle at $(0,0)$ if and only if $A + B = 0$.", why: "Perpendicularity condition." },
      { text: "Set $(1 - a^2 l^2) + (1 - a^2 m^2) = 0 \\implies 2 - a^2(l^2 + m^2) = 0$.", why: "Sum of coefficients." },
      { text: "Hence $a^2(l^2 + m^2) = 2$, or $l^2 + m^2 = \\frac{2}{a^2}$.", why: "Final geometric condition." },
    ],
    result: "$a^2(l^2 + m^2) = 2$.",
    check: "Perpendicular distance from origin to line is $p = \\frac{1}{\\sqrt{l^2 + m^2}} = \\frac{a}{\\sqrt{2}}$. In a circle of radius $a$, a chord subtending $90^\\circ$ has length $a\\sqrt{2}$ and distance from center $a\\cos(45^\\circ) = a/\\sqrt{2}$. Exactly matches.",
    mistake: "Homogenizing linear terms with $lx+my$ to power 1 instead of power 2 for constant terms."
  },
  {
    number: 8,
    tier: "Mastery",
    title: "Distance Between Parallel Lines in a General Second-Degree Equation",
    setup: "Show that $4x^2 + 12xy + 9y^2 - 6x - 9y + 2 = 0$ represents two parallel lines, and calculate the exact distance between them.",
    steps: [
      { text: "Identify coefficients: $a = 4, 2h = 12 \\implies h = 6, b = 9, 2g = -6 \\implies g = -3, 2f = -9 \\implies f = -9/2, c = 2$.", why: "Parameter extraction." },
      { text: "Check parallelism: $h^2 - ab = 6^2 - (4)(9) = 36 - 36 = 0$. This confirms the two lines are parallel.", why: "Zero discriminant condition." },
      { text: "Notice the second-degree terms form a perfect square: $4x^2 + 12xy + 9y^2 = (2x + 3y)^2$.", why: "Algebraic simplification." },
      { text: "Rewrite the full equation: $(2x + 3y)^2 - 3(2x + 3y) + 2 = 0$.", why: "Substitute u = 2x + 3y." },
      { text: "Let $u = 2x + 3y$: $u^2 - 3u + 2 = 0 \\implies (u - 1)(u - 2) = 0$.", why: "Factor quadratic in u." },
      { text: "The individual lines are $L_1: 2x + 3y - 1 = 0$ and $L_2: 2x + 3y - 2 = 0$.", why: "Separate parallel equations." },
      { text: "Apply parallel distance formula: $d = \\frac{|C_1 - C_2|}{\\sqrt{A^2 + B^2}} = \\frac{|-1 - (-2)|}{\\sqrt{2^2 + 3^2}} = \\frac{1}{\\sqrt{13}} = \\frac{\\sqrt{13}}{13}$.", why: "Distance formula." },
    ],
    result: "$d = \\frac{1}{\\sqrt{13}} = \\frac{\\sqrt{13}}{13}$.",
    check: "Using formula $d = 2\\sqrt{\\frac{g^2 - ac}{a(a + b)}} = 2\\sqrt{\\frac{(-3)^2 - 4(2)}{4(4 + 9)}} = 2\\sqrt{\\frac{9 - 8}{4(13)}} = 2 \\cdot \\frac{1}{2\\sqrt{13}} = \\frac{1}{\\sqrt{13}}$. Perfect agreement.",
    mistake: "Forgetting that both equations must share the same $A$ and $B$ before subtracting constants."
  }
];

// ═══════════════════════════════════════════════════════════════════════════
// MODULE B — Part 1: Standard & General Circle Equations
// ═══════════════════════════════════════════════════════════════════════════

export const CIRCLES_P1_EXAMPLES = [
  {
    number: 1,
    tier: "Foundational",
    title: "Center and Radius from General Circle Equation",
    setup: "Determine the center and radius of the circle given by $2x^2 + 2y^2 - 8x + 12y - 24 = 0$, and rewrite it in standard center-radius form.",
    steps: [
      { text: "Divide the entire equation by $2$ so the coefficients of $x^2$ and $y^2$ are unity: $x^2 + y^2 - 4x + 6y - 12 = 0$.", why: "Normalize general form." },
      { text: "Compare with general form $x^2 + y^2 + 2gx + 2fy + c = 0$: $2g = -4 \\implies g = -2$, $2f = 6 \\implies f = 3$, and $c = -12$.", why: "Read parameters g, f, c." },
      { text: "Center of the circle is $(-g, -f) = (2, -3)$.", why: "Center formula." },
      { text: "Radius $r = \\sqrt{g^2 + f^2 - c} = \\sqrt{(-2)^2 + 3^2 - (-12)} = \\sqrt{4 + 9 + 12} = \\sqrt{25} = 5$.", why: "Radius formula." },
      { text: "Standard form: $(x - h)^2 + (y - k)^2 = r^2 \\implies (x - 2)^2 + (y + 3)^2 = 25$.", why: "Write center-radius form." },
    ],
    result: "Center = $(2, -3)$, Radius $r = 5$; Standard form: $(x - 2)^2 + (y + 3)^2 = 25$.",
    check: "Expand: $x^2 - 4x + 4 + y^2 + 6y + 9 = 25 \\implies x^2 + y^2 - 4x + 6y - 12 = 0$. Matches exactly.",
    mistake: "Reading $g$ and $f$ directly without first dividing by the leading coefficient $2$."
  },
  {
    number: 2,
    tier: "Intermediate",
    title: "Circle Passing Through Three Non-Collinear Points",
    setup: "Find the equation of the circle passing through $P_1(1, 1)$, $P_2(2, -1)$, and $P_3(3, 2)$.",
    steps: [
      { text: "Let the general equation be $x^2 + y^2 + 2gx + 2fy + c = 0$.", why: "Assume general form." },
      { text: "Substitute $P_1(1, 1)$: $1 + 1 + 2g + 2f + c = 0 \\implies 2g + 2f + c = -2$. (Eq 1)", why: "Condition for point 1." },
      { text: "Substitute $P_2(2, -1)$: $4 + 1 + 4g - 2f + c = 0 \\implies 4g - 2f + c = -5$. (Eq 2)", why: "Condition for point 2." },
      { text: "Substitute $P_3(3, 2)$: $9 + 4 + 6g + 4f + c = 0 \\implies 6g + 4f + c = -13$. (Eq 3)", why: "Condition for point 3." },
      { text: "Subtract Eq 1 from Eq 2: $(4g - 2g) + (-2f - 2f) = -5 - (-2) \\implies 2g - 4f = -3$. (Eq 4)", why: "Eliminate c." },
      { text: "Subtract Eq 1 from Eq 3: $(6g - 2g) + (4f - 2f) = -13 - (-2) \\implies 4g + 2f = -11$. (Eq 5)", why: "Eliminate c." },
      { text: "Multiply Eq 5 by $2$ and add to Eq 4: $(2g - 4f) + (8g + 4f) = -3 + (-22) \\implies 10g = -25 \\implies g = -5/2$.", why: "Solve for g." },
      { text: "From Eq 5: $4(-5/2) + 2f = -11 \\implies -10 + 2f = -11 \\implies 2f = -1 \\implies f = -1/2$.", why: "Solve for f." },
      { text: "From Eq 1: $2(-5/2) + 2(-1/2) + c = -2 \\implies -5 - 1 + c = -2 \\implies c = 4$.", why: "Solve for c." },
      { text: "Substitute $g, f, c$: $x^2 + y^2 - 5x - y + 4 = 0$.", why: "Assemble circle equation." },
    ],
    result: "$x^2 + y^2 - 5x - y + 4 = 0$ (Center $(5/2, 1/2)$, radius $\\sqrt{25/4 + 1/4 - 4} = \\sqrt{10}/2$).",
    check: "Test $P_3(3, 2)$: $3^2 + 2^2 - 5(3) - 2 + 4 = 9 + 4 - 15 - 2 + 4 = 0$. All 3 points satisfy the equation.",
    mistake: "Sign errors when subtracting negative right-hand sides during linear elimination."
  },
  {
    number: 3,
    tier: "Intermediate",
    title: "Circle in Diameter Form",
    setup: "Find the equation of the circle having the segment joining $A(-3, 2)$ and $B(5, 8)$ as a diameter.",
    steps: [
      { text: "Let $P(x, y)$ be any point on the circle. The angle subtended by diameter $AB$ at $P$ is $90^\\circ$.", why: "Thales theorem." },
      { text: "The product of slopes of $PA$ and $PB$ must be $-1$: $\\frac{y - 2}{x - (-3)} \\cdot \\frac{y - 8}{x - 5} = -1$.", why: "Orthogonality of chords." },
      { text: "Cross-multiply: $(x + 3)(x - 5) + (y - 2)(y - 8) = 0$.", why: "Diameter form." },
      { text: "Expand: $(x^2 - 2x - 15) + (y^2 - 10y + 16) = 0$.", why: "Multiply polynomials." },
      { text: "Combine like terms: $x^2 + y^2 - 2x - 10y + 1 = 0$.", why: "Standard general equation." },
    ],
    result: "$x^2 + y^2 - 2x - 10y + 1 = 0$.",
    check: "Center is midpoint $M = ((-3 + 5)/2, (2 + 8)/2) = (1, 5)$. Radius $r = \\frac{1}{2}\\sqrt{(5 - (-3))^2 + (8 - 2)^2} = \\frac{1}{2}\\sqrt{64 + 36} = 5$. Equation $(x - 1)^2 + (y - 5)^2 = 25 \\implies x^2 + y^2 - 2x - 10y + 1 = 0$.",
    mistake: "Writing $(x - x_1)^2 + (y - y_1)^2 = 0$ instead of the product form $(x - x_1)(x - x_2) + (y - y_1)(y - y_2) = 0$."
  },
  {
    number: 4,
    tier: "Foundational",
    title: "Parametric Representation of a Circle",
    setup: "Convert the circle $x^2 + y^2 - 6x + 4y - 12 = 0$ to parametric equations and evaluate the Cartesian point at $\\theta = 2\\pi/3$.",
    steps: [
      { text: "Complete the squares: $(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4 = 25$.", why: "Center-radius form." },
      { text: "Thus center $(h, k) = (3, -2)$ and radius $r = 5$.", why: "Read center and radius." },
      { text: "The parametric equations are $x = h + r\\cos\\theta$ and $y = k + r\\sin\\theta$.", why: "Parametric definition." },
      { text: "Substitute parameters: $x = 3 + 5\\cos\\theta$, $y = -2 + 5\\sin\\theta$, where $\\theta \\in [0, 2\\pi)$.", why: "Parametric formulas." },
      { text: "Evaluate at $\\theta = 2\\pi/3$ ($120^\\circ$): $\\cos(2\\pi/3) = -1/2$ and $\\sin(2\\pi/3) = \\sqrt{3}/2$.", why: "Trig evaluation." },
      { text: "$x = 3 + 5(-1/2) = 3 - 2.5 = 1/2 = 0.5$.", why: "x-coordinate." },
      { text: "$y = -2 + 5(\\sqrt{3}/2) = -2 + \\frac{5\\sqrt{3}}{2} \\approx 2.33$.", why: "y-coordinate." },
    ],
    result: "$x = 3 + 5\\cos\\theta, y = -2 + 5\\sin\\theta$; at $\\theta = 2\\pi/3$, point is $(1/2, -2 + 5\\sqrt{3}/2)$.",
    check: "$(1/2 - 3)^2 + (-2 + 5\\sqrt{3}/2 + 2)^2 = (-5/2)^2 + (5\\sqrt{3}/2)^2 = 25/4 + 75/4 = 100/4 = 25 = r^2$. Point lies on circle.",
    mistake: "Using degree angles directly in trigonometric calculators set to radians."
  },
  {
    number: 5,
    tier: "Intermediate",
    title: "Position of a Point and Length of Intercepts",
    setup: "Determine the position of points $P(2, 3)$, $Q(5, 2)$, and $R(1, -1)$ with respect to the circle $x^2 + y^2 - 4x - 2y - 4 = 0$, and find the lengths of the $x$- and $y$-intercepts.",
    steps: [
      { text: "Define the power function $S_1 = x_1^2 + y_1^2 - 4x_1 - 2y_1 - 4$.", why: "Power of a point." },
      { text: "For $P(2, 3)$: $S_1 = 4 + 9 - 4(2) - 2(3) - 4 = 13 - 8 - 6 - 4 = -5 < 0$. Point $P$ lies INSIDE the circle.", why: "S1 < 0 implies interior." },
      { text: "For $Q(5, 2)$: $S_1 = 25 + 4 - 4(5) - 2(2) - 4 = 29 - 20 - 4 - 4 = +1 > 0$. Point $Q$ lies OUTSIDE the circle.", why: "S1 > 0 implies exterior." },
      { text: "For $R(1, -1)$: $S_1 = 1 + 1 - 4(1) - 2(-1) - 4 = 2 - 4 + 2 - 4 = -4 < 0$. Point $R$ lies INSIDE the circle.", why: "S1 < 0 implies interior." },
      { text: "Coefficients: $g = -2, f = -1, c = -4$.", why: "Parameters for intercept lengths." },
      { text: "Length of $x$-intercept: $2\\sqrt{g^2 - c} = 2\\sqrt{(-2)^2 - (-4)} = 2\\sqrt{4 + 4} = 2\\sqrt{8} = 4\\sqrt{2}$.", why: "x-intercept formula." },
      { text: "Length of $y$-intercept: $2\\sqrt{f^2 - c} = 2\\sqrt{(-1)^2 - (-4)} = 2\\sqrt{1 + 4} = 2\\sqrt{5}$.", why: "y-intercept formula." },
    ],
    result: "$P$ is inside, $Q$ is outside; $x$-intercept length $= 4\\sqrt{2}$, $y$-intercept length $= 2\\sqrt{5}$.",
    check: "Center is $(2, 1)$, radius $r = \\sqrt{4 + 1 - (-4)} = 3$. Distance to $P$: $\\sqrt{(2-2)^2 + (3-1)^2} = 2 < 3$ (inside). Distance to $Q$: $\\sqrt{(5-2)^2 + (2-1)^2} = \\sqrt{9 + 1} = \\sqrt{10} \\approx 3.16 > 3$ (outside).",
    mistake: "Confusing $g^2 - c$ with $g^2 + f^2 - c$ when computing intercept lengths."
  },
  {
    number: 6,
    tier: "Advanced",
    title: "Circles Touching Coordinate Axes",
    setup: "Find the equations of all circles passing through $(2, 1)$ that touch both the positive $x$-axis and positive $y$-axis.",
    steps: [
      { text: "A circle touching both positive axes has center $(r, r)$ and radius $r$.", why: "Geometric symmetry." },
      { text: "Its equation is $(x - r)^2 + (y - r)^2 = r^2$.", why: "Standard form." },
      { text: "Substitute the given point $(2, 1)$: $(2 - r)^2 + (1 - r)^2 = r^2$.", why: "Point incident on circle." },
      { text: "Expand: $(4 - 4r + r^2) + (1 - 2r + r^2) = r^2$.", why: "Expand binomials." },
      { text: "Simplify to standard quadratic: $r^2 - 6r + 5 = 0$.", why: "Quadratic in r." },
      { text: "Factor: $(r - 1)(r - 5) = 0 \\implies r_1 = 1$ and $r_2 = 5$.", why: "Two distinct circles exist." },
      { text: "Circle 1 ($r = 1$): $(x - 1)^2 + (y - 1)^2 = 1 \\implies x^2 + y^2 - 2x - 2y + 1 = 0$.", why: "First solution." },
      { text: "Circle 2 ($r = 5$): $(x - 5)^2 + (y - 5)^2 = 25 \\implies x^2 + y^2 - 10x - 10y + 25 = 0$.", why: "Second solution." },
    ],
    result: "$x^2 + y^2 - 2x - 2y + 1 = 0$ and $x^2 + y^2 - 10x - 10y + 25 = 0$.",
    check: "Substitute $(2, 1)$ into Circle 1: $(2-1)^2 + (1-1)^2 = 1 + 0 = 1$. Substitute into Circle 2: $(2-5)^2 + (1-5)^2 = 9 + 16 = 25$. Both hold.",
    mistake: "Assuming there is only a single circle touching both axes through a given point."
  },
  {
    number: 7,
    tier: "Advanced",
    title: "Concentric Circles and Intercepted Chord Length",
    setup: "Find the equation of the circle concentric with $x^2 + y^2 - 8x + 6y - 11 = 0$ that intercepts a chord of length $8$ on the line $3x - 4y + 11 = 0$.",
    steps: [
      { text: "Concentric circles share the identical center. Original circle: $2g = -8 \\implies g = -4, 2f = 6 \\implies f = 3$. Center is $(4, -3)$.", why: "Extract center." },
      { text: "The new circle has equation $(x - 4)^2 + (y + 3)^2 = R^2$.", why: "Form of concentric circle." },
      { text: "Compute the perpendicular distance $p$ from center $(4, -3)$ to the secant line $3x - 4y + 11 = 0$: $p = \\frac{|3(4) - 4(-3) + 11|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|12 + 12 + 11|}{5} = \\frac{35}{5} = 7$.", why: "Perpendicular distance to chord." },
      { text: "The perpendicular from center bisects the chord. Half-chord length is $L/2 = 8/2 = 4$.", why: "Right triangle geometry." },
      { text: "By Pythagorean theorem: $R^2 = p^2 + (L/2)^2 = 7^2 + 4^2 = 49 + 16 = 65$.", why: "Solve for new radius squared." },
      { text: "Thus the required circle is $(x - 4)^2 + (y + 3)^2 = 65$, or $x^2 + y^2 - 8x + 6y - 40 = 0$.", why: "Expand equation." },
    ],
    result: "$x^2 + y^2 - 8x + 6y - 40 = 0$ (Radius $R = \\sqrt{65}$).",
    check: "Chord length $2\\sqrt{R^2 - p^2} = 2\\sqrt{65 - 49} = 2\\sqrt{16} = 2(4) = 8$. Exactly 8.",
    mistake: "Using the full chord length $8$ instead of the half-chord $4$ in the right triangle."
  },
  {
    number: 8,
    tier: "Mastery",
    title: "Circle of Apollonius",
    setup: "Find the locus of a point $P(x, y)$ such that its distance from $A(-1, 0)$ is twice its distance from $B(2, 0)$.",
    steps: [
      { text: "Given condition: $PA = 2PB \\implies PA^2 = 4PB^2$.", why: "Square distance condition." },
      { text: "Compute $PA^2 = (x - (-1))^2 + (y - 0)^2 = (x + 1)^2 + y^2 = x^2 + 2x + 1 + y^2$.", why: "Distance to A squared." },
      { text: "Compute $PB^2 = (x - 2)^2 + (y - 0)^2 = x^2 - 4x + 4 + y^2$.", why: "Distance to B squared." },
      { text: "Set equation: $x^2 + 2x + 1 + y^2 = 4(x^2 - 4x + 4 + y^2)$.", why: "Equate squared lengths." },
      { text: "Expand: $x^2 + y^2 + 2x + 1 = 4x^2 + 4y^2 - 16x + 16$.", why: "Expand RHS." },
      { text: "Rearrange all terms to RHS: $3x^2 + 3y^2 - 18x + 15 = 0$.", why: "Group terms." },
      { text: "Divide through by $3$: $x^2 + y^2 - 6x + 5 = 0$.", why: "Simplify." },
      { text: "Complete the square: $(x - 3)^2 + y^2 = 9 - 5 = 4 = 2^2$.", why: "Center-radius form." },
    ],
    result: "The locus is the Circle of Apollonius: $(x - 3)^2 + y^2 = 4$ (Center $(3, 0)$, radius $2$).",
    check: "Test point $(1, 0)$ on circle: $PA = 1 - (-1) = 2$; $PB = 2 - 1 = 1$. Ratio $PA/PB = 2/1 = 2$. Test point $(5, 0)$ on circle: $PA = 5 - (-1) = 6$; $PB = 5 - 2 = 3$. Ratio $PA/PB = 6/3 = 2$.",
    mistake: "Forgetting to square the ratio $2$ to $4$ when equating squared distances."
  }
];

// ═══════════════════════════════════════════════════════════════════════════
// MODULE B — Part 2: Tangents, Normals & Conic Tangency Conditions
// ═══════════════════════════════════════════════════════════════════════════

export const CIRCLES_P2_EXAMPLES = [
  {
    number: 1,
    tier: "Foundational",
    title: "Tangent and Normal at a Point via T = 0 Rule",
    setup: "Find the equation of the tangent and normal to the circle $x^2 + y^2 - 4x + 6y - 12 = 0$ at the point $P(5, 1)$ on the circle.",
    steps: [
      { text: "Verify point $P(5, 1)$ is on the circle: $5^2 + 1^2 - 4(5) + 6(1) - 12 = 25 + 1 - 20 + 6 - 12 = 0$. Point lies on circle.", why: "Incident verification." },
      { text: "Apply the $T = 0$ substitution rule: replace $x^2 \\to xx_1$, $y^2 \\to yy_1$, $x \\to \\frac{x + x_1}{2}$, $y \\to \\frac{y + y_1}{2}$.", why: "T = 0 theorem." },
      { text: "Substitute $x_1 = 5, y_1 = 1$: $5x + 1y - 4\\left(\\frac{x + 5}{2}\\right) + 6\\left(\\frac{y + 1}{2}\\right) - 12 = 0$.", why: "Apply substitutions." },
      { text: "Simplify: $5x + y - 2(x + 5) + 3(y + 1) - 12 = 0$.", why: "Multiply through." },
      { text: "$5x + y - 2x - 10 + 3y + 3 - 12 = 0 \\implies 3x + 4y - 19 = 0$.", why: "Tangent equation." },
      { text: "To find the normal, notice the center is $(-g, -f) = (2, -3)$.", why: "Normal passes through center." },
      { text: "Slope of normal through $(2, -3)$ and $(5, 1)$: $m_N = \\frac{1 - (-3)}{5 - 2} = \\frac{4}{3}$.", why: "Normal slope." },
      { text: "Equation of normal: $y - 1 = \\frac{4}{3}(x - 5) \\implies 3(y - 1) = 4(x - 5) \\implies 4x - 3y - 17 = 0$.", why: "Normal equation." },
    ],
    result: "Tangent: $3x + 4y - 19 = 0$; Normal: $4x - 3y - 17 = 0$.",
    check: "Tangent slope $m_T = -3/4$. Product $m_T m_N = (-3/4)(4/3) = -1$. Lines are mutually perpendicular and both contain $(5, 1)$.",
    mistake: "Using $T = 0$ for external points to get the tangent (for an external point, $T = 0$ gives the chord of contact, not the tangent)."
  },
  {
    number: 2,
    tier: "Intermediate",
    title: "Condition of Tangency for a Straight Line to a Circle",
    setup: "Find the values of $c$ for which the line $y = 2x + c$ is tangent to the circle $x^2 + y^2 = 20$, and find the corresponding points of contact.",
    steps: [
      { text: "Here slope $m = 2$, and circle radius $r = \\sqrt{20}$.", why: "Parameter identification." },
      { text: "Condition of tangency for $x^2 + y^2 = r^2$ is $c^2 = r^2(1 + m^2)$.", why: "Tangency condition theorem." },
      { text: "Substitute values: $c^2 = 20(1 + 2^2) = 20(1 + 4) = 20(5) = 100$.", why: "Compute c squared." },
      { text: "Thus $c = \\pm 10$. The two parallel tangent lines are $y = 2x + 10$ and $y = 2x - 10$.", why: "Two tangent lines." },
      { text: "Point of contact formula: $(x_0, y_0) = \\left(-\\frac{r^2 m}{c}, \\frac{r^2}{c}\\right)$.", why: "Point of contact coordinates." },
      { text: "For $c = 10$: $x_0 = -\\frac{20(2)}{10} = -4$, $y_0 = \\frac{20}{10} = 2$. Point is $(-4, 2)$.", why: "First contact point." },
      { text: "For $c = -10$: $x_0 = -\\frac{20(2)}{-10} = 4$, $y_0 = \\frac{20}{-10} = -2$. Point is $(4, -2)$.", why: "Second contact point." },
    ],
    result: "$c = \\pm 10$; Tangents: $y = 2x \\pm 10$; Points of contact: $(-4, 2)$ and $(4, -2)$.",
    check: "Perpendicular distance from $(0, 0)$ to $2x - y + 10 = 0$ is $\\frac{|10|}{\\sqrt{4 + 1}} = \\frac{10}{\\sqrt{5}} = 2\\sqrt{5} = \\sqrt{20} = r$. Matches radius.",
    mistake: "Writing $c = r(1 + m^2)$ instead of $c = \\pm r\\sqrt{1 + m^2}$."
  },
  {
    number: 3,
    tier: "Intermediate",
    title: "Parabola Tangency Condition and Contact Point",
    setup: "For the parabola $y^2 = 12x$, determine the equation of the tangent having slope $m = 3/2$, its point of contact, and the equation of the directrix.",
    steps: [
      { text: "Compare $y^2 = 12x$ with $y^2 = 4ax$: $4a = 12 \\implies a = 3$.", why: "Parameter a." },
      { text: "Directrix is $x = -a \\implies x = -3$.", why: "Parabola directrix." },
      { text: "Condition of tangency for $y = mx + c$ to $y^2 = 4ax$ is $c = a/m$.", why: "Parabola tangency formula." },
      { text: "Substitute $a = 3$ and $m = 3/2$: $c = \\frac{3}{3/2} = 3 \\cdot \\frac{2}{3} = 2$.", why: "Compute c." },
      { text: "The tangent line is $y = \\frac{3}{2}x + 2 \\implies 3x - 2y + 4 = 0$.", why: "Tangent equation." },
      { text: "Point of contact formula: $(x_0, y_0) = \\left(\\frac{a}{m^2}, \\frac{2a}{m}\\right)$.", why: "Parabola contact point." },
      { text: "Evaluate $x_0 = \\frac{3}{(3/2)^2} = \\frac{3}{9/4} = \\frac{12}{9} = \\frac{4}{3}$.", why: "Contact x-coordinate." },
      { text: "Evaluate $y_0 = \\frac{2(3)}{3/2} = \\frac{6}{3/2} = 4$.", why: "Contact y-coordinate." },
    ],
    result: "Tangent: $3x - 2y + 4 = 0$; Point of contact: $(4/3, 4)$; Directrix: $x = -3$.",
    check: "Substitute $(4/3, 4)$ into parabola: $y^2 = 4^2 = 16$. $12x = 12(4/3) = 16$. The point lies exactly on the curve.",
    mistake: "Using $c = am$ instead of $c = a/m$ for the parabola."
  },
  {
    number: 4,
    tier: "Advanced",
    title: "Ellipse Tangency Condition and Director Circle",
    setup: "Find the equations of the tangents to the ellipse $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$ that are parallel to $y = x$, and state the equation of its director circle.",
    steps: [
      { text: "Identify parameters: $a^2 = 16$, $b^2 = 9$, and desired slope $m = 1$.", why: "Parameter extraction." },
      { text: "Condition of tangency for an ellipse is $c = \\pm\\sqrt{a^2 m^2 + b^2}$.", why: "Ellipse tangency formula." },
      { text: "Substitute values: $c = \\pm\\sqrt{16(1)^2 + 9} = \\pm\\sqrt{16 + 9} = \\pm\\sqrt{25} = \\pm 5$.", why: "Compute intercept c." },
      { text: "The two parallel tangent lines are $y = x + 5$ and $y = x - 5$.", why: "Write tangent equations." },
      { text: "The director circle is the locus of intersection points of mutually perpendicular tangents.", why: "Director circle definition." },
      { text: "For an ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, the director circle is $x^2 + y^2 = a^2 + b^2$.", why: "Director circle theorem." },
      { text: "Substitute $a^2 = 16, b^2 = 9$: $x^2 + y^2 = 16 + 9 = 25$.", why: "Compute director circle." },
    ],
    result: "Tangents: $y = x \\pm 5$; Director circle: $x^2 + y^2 = 25$ (radius $5$).",
    check: "If tangents have slopes $m = 1$ and $m = -1$ (perpendicular), their intercepts are $\\pm 5$. The intersection lies on the circle of radius $\\sqrt{a^2 + b^2} = 5$.",
    mistake: "Negating $b^2$ in the ellipse tangency condition (that is for hyperbolas)."
  },
  {
    number: 5,
    tier: "Advanced",
    title: "Hyperbola Tangency and Asymptote Bounds",
    setup: "For the hyperbola $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$, determine for which slopes $m$ real tangents exist, and find the tangents with slope $m = 2$.",
    steps: [
      { text: "Identify $a^2 = 9 \\implies a = 3$, $b^2 = 16 \\implies b = 4$.", why: "Parameters a and b." },
      { text: "The condition of tangency for a hyperbola is $c^2 = a^2 m^2 - b^2$.", why: "Hyperbola tangency formula." },
      { text: "For real tangents to exist, we must have $a^2 m^2 - b^2 > 0 \\implies m^2 > b^2/a^2 \\implies |m| > b/a = 4/3$.", why: "Asymptote slope constraint." },
      { text: "The slopes must be steeper than the asymptotes $y = \\pm(4/3)x$. Since $m = 2 > 4/3$, real tangents exist.", why: "Validate given slope." },
      { text: "Calculate $c = \\pm\\sqrt{9(2)^2 - 16} = \\pm\\sqrt{36 - 16} = \\pm\\sqrt{20} = \\pm 2\\sqrt{5}$.", why: "Compute c." },
      { text: "The tangent lines are $y = 2x \\pm 2\\sqrt{5}$.", why: "Write tangent lines." },
      { text: "The director circle of the hyperbola is $x^2 + y^2 = a^2 - b^2$.", why: "Hyperbola director circle." },
      { text: "Here $a^2 - b^2 = 9 - 16 = -7 < 0$. Since $a < b$, no real perpendicular tangents exist (the director circle is imaginary).", why: "Director circle existence." },
    ],
    result: "Real tangents exist for $|m| > 4/3$; for $m = 2$: $y = 2x \\pm 2\\sqrt{5}$; Director circle is imaginary ($a < b$).",
    check: "If $m = 4/3$, $c = \\sqrt{9(16/9) - 16} = 0$, giving the asymptote $y = \\frac{4}{3}x$ directly.",
    mistake: "Attempting to draw tangents with slope shallower than the asymptotes ($|m| < b/a$), which is geometrically impossible."
  },
  {
    number: 6,
    tier: "Intermediate",
    title: "Length of Tangent and Area of Tangent Triangle",
    setup: "From the external point $P(6, 8)$, two tangents are drawn to the circle $x^2 + y^2 = 25$. Calculate the length of the tangents and the area of the quadrilateral formed by the tangents and the radii to the contact points.",
    steps: [
      { text: "Circle equation $S = x^2 + y^2 - 25 = 0$, radius $r = 5$, center $O(0, 0)$.", why: "Circle data." },
      { text: "Length of tangent from $P(x_1, y_1)$ is $L = \\sqrt{S_1} = \\sqrt{x_1^2 + y_1^2 - r^2}$.", why: "Tangent length theorem." },
      { text: "$L = \\sqrt{6^2 + 8^2 - 25} = \\sqrt{36 + 64 - 25} = \\sqrt{100 - 25} = \\sqrt{75} = 5\\sqrt{3} \\approx 8.66$.", why: "Compute L." },
      { text: "Let the points of contact be $T_1$ and $T_2$. $\\triangle OPT_1$ is a right triangle at $T_1$ with legs $r = 5$ and $L = 5\\sqrt{3}$.", why: "Radius-tangent orthogonality." },
      { text: "Area of $\\triangle OPT_1 = \\frac{1}{2} r L = \\frac{1}{2}(5)(5\\sqrt{3}) = \\frac{25\\sqrt{3}}{2}$.", why: "Triangle area." },
      { text: "Total quadrilateral $O T_1 P T_2$ consists of two congruent right triangles: $\\text{Area} = 2 \\times \\frac{25\\sqrt{3}}{2} = 25\\sqrt{3} \\approx 43.30$.", why: "Quadrilateral area." },
    ],
    result: "Tangent length $L = 5\\sqrt{3}$; Quadrilateral area $= 25\\sqrt{3}$.",
    check: "Hypotenuse $OP = \\sqrt{6^2 + 8^2} = 10$. In $\\triangle OPT_1$, $r^2 + L^2 = 5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = OP^2$. Pythagorean theorem holds.",
    mistake: "Computing the area of the chord triangle instead of the tangent-radius quadrilateral."
  },
  {
    number: 7,
    tier: "Comprehensive",
    title: "Chord of Contact of Tangents",
    setup: "From the point $P(4, 3)$, tangents are drawn to the circle $x^2 + y^2 = 9$. Find the equation of the chord of contact and the length of the chord.",
    steps: [
      { text: "The chord of contact connecting the two points of tangency from external point $(x_1, y_1)$ is given by $T = 0$.", why: "Chord of contact theorem." },
      { text: "For $x^2 + y^2 = r^2$, $T = 0 \\implies x x_1 + y y_1 = r^2$.", why: "T = 0 form." },
      { text: "Substitute $(x_1, y_1) = (4, 3)$ and $r^2 = 9$: $4x + 3y = 9$.", why: "Chord of contact line." },
      { text: "To find the length of the chord, compute perpendicular distance $d$ from center $(0,0)$ to the chord: $d = \\frac{|9|}{\\sqrt{4^2 + 3^2}} = \\frac{9}{5} = 1.8$.", why: "Distance to chord." },
      { text: "Radius of circle is $r = 3$.", why: "Circle radius." },
      { text: "Chord length is $2\\sqrt{r^2 - d^2} = 2\\sqrt{3^2 - (9/5)^2} = 2\\sqrt{9 - 81/25} = 2\\sqrt{\\frac{225 - 81}{25}} = 2\\sqrt{\\frac{144}{25}} = 2\\left(\\frac{12}{5}\\right) = \\frac{24}{5} = 4.8$.", why: "Chord length formula." },
    ],
    result: "Chord of contact: $4x + 3y = 9$; Length $= 24/5 = 4.8$.",
    check: "Using formula $\\text{Length} = \\frac{2r\\sqrt{x_1^2+y_1^2-r^2}}{\\sqrt{x_1^2+y_1^2}} = \\frac{2(3)\\sqrt{25 - 9}}{\\sqrt{25}} = \\frac{6(4)}{5} = \\frac{24}{5}$. Matches exactly.",
    mistake: "Confusing the chord of contact ($T = 0$) with the polar of a point or the tangent itself."
  },
  {
    number: 8,
    tier: "Mastery",
    title: "Common Tangents to Two Non-Intersecting Circles",
    setup: "Determine the equations of the direct common tangents to the circles $C_1: x^2 + y^2 = 4$ and $C_2: (x - 6)^2 + y^2 = 16$.",
    steps: [
      { text: "Circle 1: center $O_1(0, 0)$, radius $r_1 = 2$. Circle 2: center $O_2(6, 0)$, radius $r_2 = 4$.", why: "Circle centers and radii." },
      { text: "Distance between centers $d = 6$. Since $d = 6 = r_1 + r_2 = 2 + 4$, the circles touch externally at $(2, 0)$! Wait, $r_1 + r_2 = 6$, so they touch externally.", why: "Centers distance." },
      { text: "The direct common tangents intersect at the external center of similitude $S_e$, dividing $O_1 O_2$ externally in ratio $r_1 : r_2 = 2 : 4 = 1 : 2$.", why: "Center of similitude." },
      { text: "$S_e = \\left(\\frac{r_1 x_2 - r_2 x_1}{r_1 - r_2}, 0\\right) = \\left(\\frac{1(6) - 2(0)}{1 - 2}, 0\\right) = (-6, 0)$.", why: "Compute Se." },
      { text: "Any line through $(-6, 0)$ has equation $y = m(x + 6) \\implies mx - y + 6m = 0$.", why: "Line through similitude center." },
      { text: "Condition of tangency to $C_1$: distance from $(0, 0)$ is $r_1 = 2$: $\\frac{|6m|}{\\sqrt{m^2 + 1}} = 2 \\implies 36m^2 = 4(m^2 + 1) = 4m^2 + 4$.", why: "Tangency condition." },
      { text: "$32m^2 = 4 \\implies m^2 = 4/32 = 1/8 \\implies m = \\pm \\frac{1}{2\\sqrt{2}} = \\pm \\frac{\\sqrt{2}}{4}$.", why: "Solve for slope m." },
      { text: "The direct common tangents are $y = \\pm \\frac{\\sqrt{2}}{4}(x + 6) \\implies \\sqrt{2}x \\mp 4y + 6\\sqrt{2} = 0$.", why: "Write direct tangent lines." },
      { text: "In addition, the transverse common tangent is the vertical line at the contact point: $x = 2$.", why: "Transverse common tangent." },
    ],
    result: "Direct common tangents: $\\sqrt{2}x \\pm 4y + 6\\sqrt{2} = 0$; Transverse tangent: $x = 2$.",
    check: "Distance from $O_2(6, 0)$ to $\\sqrt{2}x - 4y + 6\\sqrt{2} = 0$: $\\frac{|6\\sqrt{2} + 6\\sqrt{2}|}{\\sqrt{2 + 16}} = \\frac{12\\sqrt{2}}{\\sqrt{18}} = \\frac{12\\sqrt{2}}{3\\sqrt{2}} = 4 = r_2$. Matches $r_2$.",
    mistake: "Using internal division instead of external division for the direct common tangents."
  }
];

// ═══════════════════════════════════════════════════════════════════════════
// MODULE C — Part 1: Rigorous Limits, Discontinuities & Theorems
// ═══════════════════════════════════════════════════════════════════════════

export const ADVCALC_P1_EXAMPLES = [
  {
    number: 1,
    tier: "Foundational",
    title: "Formal Epsilon-Delta Limit Proof (Linear Function)",
    setup: "Prove rigorously using the formal $\\varepsilon$-$\\delta$ definition that $\\lim_{x \\to 2} (3x + 4) = 10$.",
    steps: [
      { text: "State the formal definition: $\\forall \\varepsilon > 0$, we must find $\\delta > 0$ such that $0 < |x - 2| < \\delta \\implies |(3x + 4) - 10| < \\varepsilon$.", why: "Definition statement." },
      { text: "Analyze the target inequality: $|(3x + 4) - 10| = |3x - 6| = 3|x - 2|$.", why: "Factor out constant." },
      { text: "We desire $3|x - 2| < \\varepsilon$, which is equivalent to $|x - 2| < \\frac{\\varepsilon}{3}$.", why: "Isolate |x - c|." },
      { text: "Choose $\\delta = \\frac{\\varepsilon}{3}$. Notice $\\delta > 0$ since $\\varepsilon > 0$.", why: "Delta selection." },
      { text: "Write the formal verification: Assume $0 < |x - 2| < \\delta = \\frac{\\varepsilon}{3}$.", why: "Hypothesis." },
      { text: "Then $|f(x) - L| = |(3x + 4) - 10| = 3|x - 2| < 3\\left(\\frac{\\varepsilon}{3}\\right) = \\varepsilon$.", why: "Direct deduction." },
      { text: "Thus $|(3x + 4) - 10| < \\varepsilon$ whenever $0 < |x - 2| < \\delta$, completing the rigorous proof.", why: "Conclusion." },
    ],
    result: "Proven: $\\delta = \\varepsilon / 3$ guarantees $|(3x + 4) - 10| < \\varepsilon$.",
    check: "If $\\varepsilon = 0.03$, $\\delta = 0.01$. For $x = 2.008$, $f(x) = 3(2.008) + 4 = 10.024$, error is $0.024 < 0.03$.",
    mistake: "Attempting to choose $\\delta$ that depends on $x$; $\\delta$ can only depend on $\\varepsilon$ and the fixed point $c$."
  },
  {
    number: 2,
    tier: "Advanced",
    title: "Formal Epsilon-Delta Proof (Quadratic Function)",
    setup: "Prove rigorously using the $\\varepsilon$-$\\delta$ definition that $\\lim_{x \\to 3} x^2 = 9$.",
    steps: [
      { text: "Target: Given $\\varepsilon > 0$, find $\\delta > 0$ such that $0 < |x - 3| < \\delta \\implies |x^2 - 9| < \\varepsilon$.", why: "State objective." },
      { text: "Factor the target: $|x^2 - 9| = |x - 3||x + 3|$.", why: "Isolate |x - 3|." },
      { text: "To bound the factor $|x + 3|$, assume an initial restriction $\\delta \\le 1$.", why: "Neighborhood bounding technique." },
      { text: "If $|x - 3| < 1$, then $-1 < x - 3 < 1 \\implies 2 < x < 4$.", why: "Interval for x." },
      { text: "Add $3$ to all parts: $5 < x + 3 < 7 \\implies |x + 3| < 7$.", why: "Bound on |x + 3|." },
      { text: "Then $|x^2 - 9| = |x - 3||x + 3| < 7|x - 3|$. We need $7|x - 3| < \\varepsilon \\implies |x - 3| < \\varepsilon / 7$.", why: "Bound target." },
      { text: "Choose $\\delta = \\min\\left(1, \\frac{\\varepsilon}{7}\\right)$.", why: "Standard minimum choice." },
      { text: "Verification: If $0 < |x - 3| < \\delta$, then $|x - 3| < 1$ (ensuring $|x + 3| < 7$) and $|x - 3| < \\varepsilon/7$. Therefore $|x^2 - 9| = |x - 3||x + 3| < 7(\\varepsilon/7) = \\varepsilon$.", why: "Formal closure." },
    ],
    result: "Proven: $\\delta = \\min(1, \\varepsilon / 7)$.",
    check: "If $\\varepsilon = 0.07$, $\\delta = 0.01$. At $x = 3.01$, $x^2 = 9.0601$, $|9.0601 - 9| = 0.0601 < 0.07$.",
    mistake: "Choosing $\\delta = \\varepsilon / |x + 3|$; $\\delta$ cannot be a function of the variable $x$."
  },
  {
    number: 3,
    tier: "Advanced",
    title: "Formal Epsilon-Delta Proof (Rational Function)",
    setup: "Prove rigorously that $\\lim_{x \\to 2} \\frac{1}{x} = \\frac{1}{2}$ using the $\\varepsilon$-$\\delta$ definition.",
    steps: [
      { text: "Target: Given $\\varepsilon > 0$, find $\\delta > 0$ such that $0 < |x - 2| < \\delta \\implies \\left|\\frac{1}{x} - \\frac{1}{2}\\right| < \\varepsilon$.", why: "State formal target." },
      { text: "Algebraic simplification: $\\left|\\frac{1}{x} - \\frac{1}{2}\\right| = \\left|\\frac{2 - x}{2x}\\right| = \\frac{|x - 2|}{2|x|}$.", why: "Common denominator." },
      { text: "We need a lower bound on $|x|$ away from zero. Impose initial constraint $\\delta \\le 1$.", why: "Avoid vertical asymptote." },
      { text: "If $|x - 2| < 1$, then $1 < x < 3 \\implies |x| > 1 \\implies \\frac{1}{|x|} < 1$.", why: "Lower bound on denominator." },
      { text: "Then $\\frac{|x - 2|}{2|x|} < \\frac{|x - 2|}{2(1)} = \\frac{|x - 2|}{2}$.", why: "Upper bound expression." },
      { text: "To guarantee $\\frac{|x - 2|}{2} < \\varepsilon$, we require $|x - 2| < 2\\varepsilon$.", why: "Solve for |x - 2|." },
      { text: "Choose $\\delta = \\min(1, 2\\varepsilon)$.", why: "Dual minimum bound." },
      { text: "Verification: For $0 < |x - 2| < \\delta$, both $|x| > 1$ and $|x - 2| < 2\\varepsilon$ hold, so $\\left|\\frac{1}{x} - \\frac{1}{2}\\right| < \\frac{2\\varepsilon}{2} = \\varepsilon$.", why: "Complete proof." },
    ],
    result: "Proven: $\\delta = \\min(1, 2\\varepsilon)$.",
    check: "If $\\varepsilon = 0.1$, $\\delta = \\min(1, 0.2) = 0.2$. At $x = 1.9$, $1/1.9 \\approx 0.5263$, error is $0.0263 < 0.1$.",
    mistake: "Failing to bound $x$ away from $0$, which risks division by zero."
  },
  {
    number: 4,
    tier: "Intermediate",
    title: "Classification of Discontinuities Across a Piecewise Function",
    setup: "Classify all points of discontinuity of the function $f(x)$ defined by:\n$$f(x) = \\begin{cases} \\frac{x^2 - 4}{x - 2} & x < 2 \\\\ 5 & x = 2 \\\\ x + 2 & 2 < x < 4 \\\\ \\frac{1}{x - 4} & x > 4 \\end{cases}$$",
    steps: [
      { text: "Examine $x = 2$: Left-hand limit: $\\lim_{x \\to 2^-} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2^-} (x + 2) = 4$.", why: "Left limit at 2." },
      { text: "Right-hand limit: $\\lim_{x \\to 2^+} (x + 2) = 4$.", why: "Right limit at 2." },
      { text: "Both limits exist and equal $4$, so $\\lim_{x \\to 2} f(x) = 4$. However, $f(2) = 5 \\neq 4$.", why: "Limit exists but differs from f(2)." },
      { text: "Therefore, $x = 2$ is a REMOVABLE discontinuity (can be fixed by redefining $f(2) = 4$).", why: "Classification at x = 2." },
      { text: "Examine $x = 4$: Left-hand limit: $\\lim_{x \\to 4^-} (x + 2) = 6$.", why: "Left limit at 4." },
      { text: "Right-hand limit: $\\lim_{x \\to 4^+} \\frac{1}{x - 4} = +\\infty$.", why: "Right limit at 4." },
      { text: "Since the right-hand limit is unbounded, $x = 4$ is an INFINITE (essential) discontinuity.", why: "Classification at x = 4." },
    ],
    result: "$x = 2$: Removable discontinuity; $x = 4$: Infinite discontinuity.",
    check: "At $x = 2$, hole exists at $(2, 4)$ while dot is at $(2, 5)$. At $x = 4$, vertical asymptote $x = 4$ exists from the right.",
    mistake: "Calling $x = 2$ a jump discontinuity; a jump requires left and right limits to be finite and distinct."
  },
  {
    number: 5,
    tier: "Intermediate",
    title: "Root Existence and Bisection via Intermediate Value Theorem",
    setup: "Prove using the Intermediate Value Theorem that the equation $x^5 - 3x - 1 = 0$ has at least one real root in the interval $[1, 2]$, and narrow the root to a subinterval of width $0.25$.",
    steps: [
      { text: "Let $f(x) = x^5 - 3x - 1$. Polynomials are continuous on all of $\\mathbb{R}$, hence $f$ is continuous on $[1, 2]$.", why: "Verify continuity hypothesis." },
      { text: "Evaluate at left endpoint: $f(1) = 1^5 - 3(1) - 1 = 1 - 3 - 1 = -3 < 0$.", why: "Sign at x = 1." },
      { text: "Evaluate at right endpoint: $f(2) = 2^5 - 3(2) - 1 = 32 - 6 - 1 = 25 > 0$.", why: "Sign at x = 2." },
      { text: "Since $f(1) < 0 < f(2)$, by the IVT there exists $c \\in (1, 2)$ such that $f(c) = 0$.", why: "IVT conclusion." },
      { text: "Bisection step 1: midpoint $m_1 = 1.5$. Evaluate $f(1.5) = (1.5)^5 - 3(1.5) - 1 = 7.59375 - 4.5 - 1 = +2.09375 > 0$. Root is in $[1, 1.5]$.", why: "Narrow to [1, 1.5]." },
      { text: "Bisection step 2: midpoint $m_2 = 1.25$. Evaluate $f(1.25) = (1.25)^5 - 3(1.25) - 1 = 3.05176 - 3.75 - 1 = -1.69824 < 0$.", why: "Evaluate at 1.25." },
      { text: "Since $f(1.25) < 0$ and $f(1.5) > 0$, the root is guaranteed to lie in $[1.25, 1.5]$, which has width $0.25$.", why: "Final narrowed interval." },
    ],
    result: "Root exists in $[1, 2]$ by IVT; narrowed to $[1.25, 1.5]$.",
    check: "Numerical solver gives root $x \\approx 1.3888$, which lies cleanly inside $[1.25, 1.5]$.",
    mistake: "Applying IVT without explicitly verifying that $f(x)$ is continuous on the closed interval."
  },
  {
    number: 6,
    tier: "Advanced",
    title: "Verification and Application of Rolle's and Mean Value Theorems",
    setup: "For $f(x) = x^3 - 4x$ on $[-2, 2]$, verify all hypotheses of Rolle's Theorem and find all values of $c$ that satisfy $f'(c) = 0$.",
    steps: [
      { text: "Hypothesis 1: $f(x) = x^3 - 4x$ is a polynomial, hence continuous on the closed interval $[-2, 2]$.", why: "Continuity check." },
      { text: "Hypothesis 2: $f(x)$ is differentiable on the open interval $(-2, 2)$ with $f'(x) = 3x^2 - 4$.", why: "Differentiability check." },
      { text: "Hypothesis 3: $f(-2) = (-2)^3 - 4(-2) = -8 + 8 = 0$; $f(2) = 2^3 - 4(2) = 8 - 8 = 0$. Thus $f(-2) = f(2)$.", why: "Endpoint equality." },
      { text: "All hypotheses are satisfied. By Rolle's Theorem, $\\exists c \\in (-2, 2)$ such that $f'(c) = 0$.", why: "Rolle's theorem applies." },
      { text: "Solve $f'(c) = 0 \\implies 3c^2 - 4 = 0 \\implies c^2 = 4/3$.", why: "Solve derivative equation." },
      { text: "Thus $c = \\pm \\frac{2}{\\sqrt{3}} = \\pm \\frac{2\\sqrt{3}}{3} \\approx \\pm 1.155$.", why: "Evaluate roots." },
      { text: "Both values lie strictly inside $(-2, 2)$: $-2 < -1.155 < 2$ and $-2 < 1.155 < 2$.", why: "Verify interior condition." },
    ],
    result: "$c = \\pm 2/\\sqrt{3} = \\pm 2\\sqrt{3}/3 \\in (-2, 2)$ (two critical points).",
    check: "Tangents at $x = \\pm 2/\\sqrt{3}$ are horizontal ($m = 0$), matching the secant line through $(-2, 0)$ and $(2, 0)$.",
    mistake: "Including boundary endpoints as solutions; the theorem strictly requires $c \\in (a, b)$, open interval."
  },
  {
    number: 7,
    tier: "Comprehensive",
    title: "Logarithmic Differentiation of Variable Exponent Functions",
    setup: "Differentiate $y = (\\ln x)^{\\sin x}$ for $x > 1$ using logarithmic differentiation.",
    steps: [
      { text: "Take the natural logarithm of both sides: $\\ln y = \\ln\\left((\\ln x)^{\\sin x}\\right) = \\sin x \\cdot \\ln(\\ln x)$.", why: "Log rule ln(u^v) = v ln u." },
      { text: "Differentiate both sides with respect to $x$: $\\frac{d}{dx}[\\ln y] = \\frac{1}{y} \\frac{dy}{dx}$.", why: "Implicit differentiation LHS." },
      { text: "Apply product rule to RHS: $\\frac{d}{dx}[\\sin x] \\cdot \\ln(\\ln x) + \\sin x \\cdot \\frac{d}{dx}[\\ln(\\ln x)]$.", why: "Product rule." },
      { text: "Compute derivatives: $\\frac{d}{dx}[\\sin x] = \\cos x$.", why: "Trig derivative." },
      { text: "By chain rule: $\\frac{d}{dx}[\\ln(\\ln x)] = \\frac{1}{\\ln x} \\cdot \\frac{d}{dx}[\\ln x] = \\frac{1}{\\ln x} \\cdot \\frac{1}{x} = \\frac{1}{x\\ln x}$.", why: "Chain rule." },
      { text: "Combine: $\\frac{1}{y}\\frac{dy}{dx} = \\cos x \\ln(\\ln x) + \\frac{\\sin x}{x\\ln x}$.", why: "Assemble RHS." },
      { text: "Multiply both sides by $y = (\\ln x)^{\\sin x}$: $\\frac{dy}{dx} = (\\ln x)^{\\sin x} \\left[ \\cos x \\ln(\\ln x) + \\frac{\\sin x}{x\\ln x} \\right]$.", why: "Solve for dy/dx." },
    ],
    result: "$\\frac{dy}{dx} = (\\ln x)^{\\sin x} \\left[ \\cos x \\ln(\\ln x) + \\frac{\\sin x}{x\\ln x} \\right]$.",
    check: "At $x = e$, $\\ln e = 1$, $\\ln(\\ln e) = \\ln 1 = 0$, so $\\frac{dy}{dx} = (1)^{\\sin e} \\left[0 + \\frac{\\sin e}{e(1)}\\right] = \\frac{\\sin e}{e}$. Matches direct limit.",
    mistake: "Treating $y = u(x)^{v(x)}$ as a power rule $v u^{v-1}$ or exponential $u^v \\ln u$; variable bases with variable exponents require logarithmic differentiation."
  },
  {
    number: 8,
    tier: "Mastery",
    title: "First and Second Parametric Derivatives",
    setup: "For the cycloid defined by $x(t) = a(t - \\sin t)$ and $y(t) = a(1 - \\cos t)$, calculate $\\frac{dy}{dx}$ and $\\frac{d^2y}{dx^2}$ in terms of $t$, and evaluate at $t = \\pi/2$.",
    steps: [
      { text: "Compute first derivatives with respect to $t$: $x'(t) = a(1 - \\cos t)$ and $y'(t) = a\\sin t$.", why: "Parametric derivatives." },
      { text: "Compute $\\frac{dy}{dx} = \\frac{y'(t)}{x'(t)} = \\frac{a\\sin t}{a(1 - \\cos t)} = \\frac{\\sin t}{1 - \\cos t}$.", why: "First derivative formula." },
      { text: "Use half-angle identities: $\\sin t = 2\\sin(t/2)\\cos(t/2)$ and $1 - \\cos t = 2\\sin^2(t/2)$. Thus $\\frac{dy}{dx} = \\cot(t/2)$.", why: "Trig simplification." },
      { text: "Apply parametric second derivative formula: $\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{x'(t)}$.", why: "Second derivative chain rule." },
      { text: "Differentiate $\\frac{dy}{dx} = \\cot(t/2)$ with respect to $t$: $\\frac{d}{dt}[\\cot(t/2)] = -\\csc^2(t/2) \\cdot \\frac{1}{2} = -\\frac{1}{2}\\csc^2(t/2)$.", why: "Derivative of cotangent." },
      { text: "Divide by $x'(t) = a(1 - \\cos t) = 2a\\sin^2(t/2)$: $\\frac{d^2y}{dx^2} = \\frac{-\\frac{1}{2}\\csc^2(t/2)}{2a\\sin^2(t/2)} = -\\frac{1}{4a\\sin^4(t/2)} = -\\frac{1}{4a}\\csc^4(t/2)$.", why: "Complete second derivative." },
      { text: "Evaluate at $t = \\pi/2$: $t/2 = \\pi/4$. $\\cot(\\pi/4) = 1 \\implies \\frac{dy}{dx} = 1$.", why: "First derivative at pi/2." },
      { text: "$\\sin(\\pi/4) = \\frac{\\sqrt{2}}{2} \\implies \\sin^4(\\pi/4) = (1/2)^2 = 1/4$. Thus $\\frac{d^2y}{dx^2} = -\\frac{1}{4a(1/4)} = -\\frac{1}{a}$.", why: "Second derivative at pi/2." },
    ],
    result: "$\\frac{dy}{dx} = \\cot(t/2)$ (equals $1$ at $\\pi/2$); $\\frac{d^2y}{dx^2} = -\\frac{1}{4a}\\csc^4(t/2)$ (equals $-1/a$ at $\\pi/2$).",
    check: "Since $\\frac{d^2y}{dx^2} = -1/a < 0$, the cycloid is concave downward at $t = \\pi/2$, which is physically correct (inverted arches).",
    mistake: "Computing $\\frac{d^2y}{dx^2}$ as $\\frac{y''(t)}{x''(t)}$; this is a catastrophic error that ignores the chain rule."
  }
];

// ═══════════════════════════════════════════════════════════════════════════
// MODULE C — Part 2: Hyperbolics, Extended L'Hopital, Curvature & Physics
// ═══════════════════════════════════════════════════════════════════════════

export const ADVCALC_P2_EXAMPLES = [
  {
    number: 1,
    tier: "Foundational",
    title: "Hyperbolic Function Derivatives and Identities",
    setup: "Differentiate $f(x) = x\\operatorname{arcsinh}(2x) - \\frac{1}{2}\\sqrt{1 + 4x^2}$ and verify that $f'(x) = \\operatorname{arcsinh}(2x)$.",
    steps: [
      { text: "Recall the derivative $\\frac{d}{dx}[\\operatorname{arcsinh}(u)] = \\frac{u'}{\\sqrt{1 + u^2}}$. For $u = 2x$, $\\frac{d}{dx}[\\operatorname{arcsinh}(2x)] = \\frac{2}{\\sqrt{1 + 4x^2}}$.", why: "Inverse hyperbolic derivative." },
      { text: "Apply product rule to the first term $x\\operatorname{arcsinh}(2x)$: $(1)\\operatorname{arcsinh}(2x) + x\\left(\\frac{2}{\\sqrt{1 + 4x^2}}\\right) = \\operatorname{arcsinh}(2x) + \\frac{2x}{\\sqrt{1 + 4x^2}}$.", why: "Product rule." },
      { text: "Differentiate the second term $-\\frac{1}{2}(1 + 4x^2)^{1/2}$: $-\\frac{1}{2} \\cdot \\frac{1}{2}(1 + 4x^2)^{-1/2} \\cdot (8x) = -\\frac{2x}{\\sqrt{1 + 4x^2}}$.", why: "Chain rule on radical." },
      { text: "Combine both terms: $f'(x) = \\operatorname{arcsinh}(2x) + \\frac{2x}{\\sqrt{1 + 4x^2}} - \\frac{2x}{\\sqrt{1 + 4x^2}}$.", why: "Add derivatives." },
      { text: "The algebraic terms cancel exactly: $f'(x) = \\operatorname{arcsinh}(2x)$.", why: "Exact cancellation." },
    ],
    result: "$f'(x) = \\operatorname{arcsinh}(2x)$ (verified).",
    check: "Hence $\\int \\operatorname{arcsinh}(2x)\\,dx = x\\operatorname{arcsinh}(2x) - \\frac{1}{2}\\sqrt{1 + 4x^2} + C$, providing integration by parts formula.",
    mistake: "Confusing $\\frac{d}{dx}[\\sinh x] = \\cosh x$ (positive) with trigonometric $\\frac{d}{dx}[\\cos x] = -\\sin x$ (negative)."
  },
  {
    number: 2,
    tier: "Intermediate",
    title: "Extended L'Hopital's Rule for Exponential Indeterminate Form 0^0",
    setup: "Evaluate the indeterminate limit $\\lim_{x \\to 0^+} (\\sin x)^x$.",
    steps: [
      { text: "Identify the indeterminate form: as $x \\to 0^+$, $\\sin x \\to 0$ and $x \\to 0$, giving the form $0^0$.", why: "Form identification." },
      { text: "Let $L = \\lim_{x \\to 0^+} (\\sin x)^x$. Take the natural logarithm: $\\ln L = \\lim_{x \\to 0^+} \\ln\\left((\\sin x)^x\\right) = \\lim_{x \\to 0^+} x \\ln(\\sin x)$.", why: "Logarithmic transform." },
      { text: "This has form $0 \\cdot (-\\infty)$. Convert to quotient form $\\frac{\\infty}{\\infty}$: $\\ln L = \\lim_{x \\to 0^+} \\frac{\\ln(\\sin x)}{1/x}$.", why: "Prepare for L'Hopital." },
      { text: "Apply L'Hopital's Rule: differentiate numerator and denominator with respect to $x$.", why: "L'Hopital rule." },
      { text: "Numerator derivative: $\\frac{\\cos x}{\\sin x} = \\cot x$. Denominator derivative: $-1/x^2$.", why: "Compute derivatives." },
      { text: "$\\ln L = \\lim_{x \\to 0^+} \\frac{\\cot x}{-1/x^2} = \\lim_{x \\to 0^+} \\frac{-x^2}{\\tan x} = \\lim_{x \\to 0^+} (-x) \\cdot \\frac{x}{\\sin x} \\cdot \\cos x$.", why: "Rewrite with trig limits." },
      { text: "Evaluate limit: $(0) \\cdot (1) \\cdot (1) = 0$.", why: "Limit evaluation." },
      { text: "Since $\\ln L = 0$, we have $L = e^0 = 1$.", why: "Exponentiate." },
    ],
    result: "$\\lim_{x \\to 0^+} (\\sin x)^x = 1$.",
    check: "Numerical test: at $x = 0.01$, $(\\sin 0.01)^{0.01} \\approx (0.0099998)^{0.01} \\approx 0.9549$; at $x = 0.0001$, $(\\sin 0.0001)^{0.0001} \\approx 0.99908 \\to 1$.",
    mistake: "Forgetting to exponentiate at the end, concluding the answer is $0$ instead of $e^0 = 1$."
  },
  {
    number: 3,
    tier: "Intermediate",
    title: "Extended L'Hopital for Indeterminate Form 1^infinity",
    setup: "Evaluate the limit $\\lim_{x \\to 0} (1 + 3x)^{1/x}$.",
    steps: [
      { text: "Identify form: as $x \\to 0$, $1 + 3x \\to 1$ and $1/x \\to \\infty$, yielding indeterminate form $1^\\infty$.", why: "Form 1^inf." },
      { text: "Let $y = (1 + 3x)^{1/x} \\implies \\ln y = \\frac{\\ln(1 + 3x)}{x}$.", why: "Log transform." },
      { text: "The limit $\\lim_{x \\to 0} \\frac{\\ln(1 + 3x)}{x}$ has form $0/0$.", why: "Form 0/0." },
      { text: "Apply L'Hopital's Rule: differentiate numerator $\\frac{3}{1 + 3x}$ and denominator $1$.", why: "Differentiate." },
      { text: "$\\lim_{x \\to 0} \\frac{3/(1 + 3x)}{1} = \\frac{3}{1 + 0} = 3$.", why: "Evaluate limit of log." },
      { text: "Thus $\\ln y \\to 3 \\implies y \\to e^3$.", why: "Invert logarithm." },
    ],
    result: "$\\lim_{x \\to 0} (1 + 3x)^{1/x} = e^3$.",
    check: "Standard compound interest limit formula $\\lim_{u \\to 0} (1 + ku)^{1/u} = e^k$. For $k = 3$, result is $e^3$.",
    mistake: "Assuming $1^\\infty = 1$; indeterminate powers require rigorous logarithmic analysis."
  },
  {
    number: 4,
    tier: "Advanced",
    title: "Arc Length of a Catenary Cable",
    setup: "Calculate the exact arc length of the hanging cable (catenary) $y = a\\cosh(x/a)$ from $x = -a$ to $x = a$.",
    steps: [
      { text: "Arc length formula: $L = \\int_{-a}^a \\sqrt{1 + [y'(x)]^2}\\,dx$.", why: "Arc length definition." },
      { text: "Compute derivative: $y'(x) = a\\sinh(x/a) \\cdot (1/a) = \\sinh(x/a)$.", why: "Hyperbolic derivative." },
      { text: "Substitute into radical: $\\sqrt{1 + [y'(x)]^2} = \\sqrt{1 + \\sinh^2(x/a)}$.", why: "Algebraic substitution." },
      { text: "Apply fundamental identity $\\cosh^2 u - \\sinh^2 u = 1 \\implies 1 + \\sinh^2 u = \\cosh^2 u$.", why: "Hyperbolic identity." },
      { text: "Since $\\cosh u > 0$ everywhere, $\\sqrt{\\cosh^2(x/a)} = \\cosh(x/a)$.", why: "Simplify radical." },
      { text: "The integral simplifies to $L = \\int_{-a}^a \\cosh(x/a)\\,dx$.", why: "Simplified integral." },
      { text: "Since $\\cosh$ is even: $L = 2\\int_0^a \\cosh(x/a)\\,dx = 2\\left[a\\sinh(x/a)\\right]_0^a = 2a(\\sinh(1) - \\sinh(0))$.", why: "Integrate." },
      { text: "Since $\\sinh(0) = 0$, $L = 2a\\sinh(1) = 2a\\left(\\frac{e - e^{-1}}{2}\\right) = a(e - 1/e)$.", why: "Final evaluation." },
    ],
    result: "$L = 2a\\sinh(1) = a(e - e^{-1})$.",
    check: "Numerical value: for $a = 10$, $L = 10(2.7183 - 0.3679) = 23.50$, greater than straight-line distance $2a = 20$.",
    mistake: "Using $\\sqrt{1 - \\sinh^2 u}$ by confusing hyperbolic with circular trigonometric identities."
  },
  {
    number: 5,
    tier: "Advanced",
    title: "Curvature, Radius and Center of Curvature",
    setup: "Find the curvature $\\kappa(x)$, radius of curvature $\\rho$, and the center of curvature $(\\alpha, \\beta)$ for the parabola $y = \\frac{1}{2}x^2$ at the point $(2, 2)$.",
    steps: [
      { text: "Compute derivatives: $y' = x$ and $y'' = 1$.", why: "First and second derivatives." },
      { text: "At $x = 2$: $y'(2) = 2$ and $y''(2) = 1$.", why: "Evaluate at point." },
      { text: "Curvature formula: $\\kappa(x) = \\frac{|y''|}{(1 + (y')^2)^{3/2}}$.", why: "Curvature definition." },
      { text: "Substitute values: $\\kappa(2) = \\frac{1}{(1 + 2^2)^{3/2}} = \\frac{1}{(1 + 4)^{3/2}} = \\frac{1}{5^{3/2}} = \\frac{1}{5\\sqrt{5}} = \\frac{\\sqrt{5}}{25}$.", why: "Evaluate curvature." },
      { text: "Radius of curvature $\\rho = \\frac{1}{\\kappa} = 5\\sqrt{5} \\approx 11.18$.", why: "Radius is inverse curvature." },
      { text: "Center of curvature coordinates $(\\alpha, \\beta)$ are given by: $\\alpha = x - \\frac{y'[1 + (y')^2]}{y''}$ and $\\beta = y + \\frac{1 + (y')^2}{y''}$.", why: "Evolute formulas." },
      { text: "Compute $\\alpha = 2 - \\frac{2[1 + 4]}{1} = 2 - 10 = -8$.", why: "Center x-coordinate." },
      { text: "Compute $\\beta = 2 + \\frac{1 + 4}{1} = 2 + 5 = 7$.", why: "Center y-coordinate." },
    ],
    result: "Curvature $\\kappa = \\frac{1}{5\\sqrt{5}}$, Radius $\\rho = 5\\sqrt{5}$, Center of curvature $= (-8, 7)$.",
    check: "Distance from $(2, 2)$ to center $(-8, 7)$: $\\sqrt{(2 - (-8))^2 + (2 - 7)^2} = \\sqrt{10^2 + (-5)^2} = \\sqrt{100 + 25} = \\sqrt{125} = 5\\sqrt{5} = \\rho$. Verified.",
    mistake: "Omitting the absolute value in curvature, or mixing up the signs in the evolute formulas for $\\alpha$ and $\\beta$."
  },
  {
    number: 6,
    tier: "Comprehensive",
    title: "Surface Area of Revolution",
    setup: "Find the surface area generated by revolving the curve $y = \\sqrt{4 - x^2}$ from $x = -1$ to $x = 1$ about the $x$-axis (a zone of a sphere).",
    steps: [
      { text: "Surface area formula for rotation about the $x$-axis: $S = 2\\pi \\int_{-1}^1 y\\sqrt{1 + (y')^2}\\,dx$.", why: "Surface of revolution definition." },
      { text: "Compute derivative: $y = (4 - x^2)^{1/2} \\implies y' = \\frac{1}{2}(4 - x^2)^{-1/2}(-2x) = -\\frac{x}{\\sqrt{4 - x^2}}$.", why: "Chain rule derivative." },
      { text: "Compute $1 + (y')^2 = 1 + \\frac{x^2}{4 - x^2} = \\frac{4 - x^2 + x^2}{4 - x^2} = \\frac{4}{4 - x^2}$.", why: "Simplify 1 + (y')^2." },
      { text: "Then $\\sqrt{1 + (y')^2} = \\frac{2}{\\sqrt{4 - x^2}}$.", why: "Take square root." },
      { text: "Substitute into integrand: $y\\sqrt{1 + (y')^2} = \\sqrt{4 - x^2} \\cdot \\frac{2}{\\sqrt{4 - x^2}} = 2$.", why: "Surprising constant cancellation!" },
      { text: "Integrate: $S = 2\\pi \\int_{-1}^1 2\\,dx = 4\\pi [x]_{-1}^1 = 4\\pi(1 - (-1)) = 8\\pi$.", why: "Evaluate simple integral." },
    ],
    result: "Surface Area $S = 8\\pi$.",
    check: "By Archimedes' Hat-Box Theorem, the surface area of a spherical zone of radius $R = 2$ and height $h = 1 - (-1) = 2$ is $2\\pi R h = 2\\pi(2)(2) = 8\\pi$. Matches exactly.",
    mistake: "Leaving $y$ uncancelled and attempting complex trigonometric substitution."
  },
  {
    number: 7,
    tier: "Mastery",
    title: "Physical Application: Centroid of a Parabolic Lamina",
    setup: "Find the center of mass $(\\bar{x}, \\bar{y})$ of a uniform planar lamina bounded by the parabola $y = 4 - x^2$ and the $x$-axis ($y = 0$).",
    steps: [
      { text: "Find intersection with $y = 0$: $4 - x^2 = 0 \\implies x = \\pm 2$.", why: "Integration limits [-2, 2]." },
      { text: "Compute total area $A = \\int_{-2}^2 (4 - x^2)\\,dx = 2\\int_0^2 (4 - x^2)\\,dx = 2\\left[4x - \\frac{x^3}{3}\\right]_0^2 = 2\\left(8 - \\frac{8}{3}\\right) = 2\\left(\\frac{16}{3}\\right) = \\frac{32}{3}$.", why: "Total mass/area." },
      { text: "By symmetry across the $y$-axis, $\\bar{x} = 0$.", why: "Symmetry principle." },
      { text: "Compute moment about $x$-axis: $M_x = \\frac{1}{2}\\int_{-2}^2 [f(x)]^2\\,dx = \\frac{1}{2}\\int_{-2}^2 (4 - x^2)^2\\,dx = \\int_0^2 (16 - 8x^2 + x^4)\\,dx$.", why: "Moment about x-axis." },
      { text: "$M_x = \\left[16x - \\frac{8}{3}x^3 + \\frac{x^5}{5}\\right]_0^2 = 16(2) - \\frac{8}{3}(8) + \\frac{32}{5} = 32 - \\frac{64}{3} + \\frac{32}{5}$.", why: "Evaluate polynomial." },
      { text: "Common denominator $15$: $M_x = \\frac{480 - 320 + 96}{15} = \\frac{256}{15}$.", why: "Fraction arithmetic." },
      { text: "Compute $\\bar{y} = \\frac{M_x}{A} = \\frac{256/15}{32/3} = \\frac{256}{15} \\cdot \\frac{3}{32} = \\frac{8}{5} = 1.6$.", why: "Divide moment by area." },
    ],
    result: "Centroid $(\\bar{x}, \\bar{y}) = (0, 8/5) = (0, 1.6)$.",
    check: "The height is $4$. For a parabolic cap, the centroid is at $2/5$ of the height from the base: $\\frac{2}{5}(4) = \\frac{8}{5} = 1.6$. Exactly confirmed.",
    mistake: "Omitting the factor of $1/2$ in the formula for $M_x = \\frac{1}{2}\\int y^2\\,dx$."
  },
  {
    number: 8,
    tier: "Mastery",
    title: "Physical Application: Hydrostatic Force on a Submerged Plate",
    setup: "A vertical triangular dam plate has base width $b = 6$ m at the water surface and vertex at depth $d = 4$ m below the surface. Calculate the total hydrostatic force on the plate (density $\\rho = 1000$ kg/m$^3$, $g = 9.8$ m/s$^2$).",
    steps: [
      { text: "Set coordinate $y$ as depth below the surface, from $y = 0$ (surface) to $y = 4$ (vertex).", why: "Depth coordinate definition." },
      { text: "At depth $y$, the plate width $w(y)$ decreases linearly from $6$ to $0$. By similar triangles: $\\frac{w(y)}{6} = \\frac{4 - y}{4} \\implies w(y) = \\frac{3}{2}(4 - y) = 6 - \\frac{3}{2}y$.", why: "Width function w(y)." },
      { text: "Area of a horizontal strip at depth $y$ is $dA = w(y)\\,dy = \\frac{3}{2}(4 - y)\\,dy$.", why: "Strip area element." },
      { text: "Hydrostatic pressure at depth $y$ is $P(y) = \\rho g y$.", why: "Hydrostatic pressure law." },
      { text: "Force on strip: $dF = P(y)dA = \\rho g y \\cdot \\frac{3}{2}(4 - y)\\,dy = \\frac{3}{2}\\rho g (4y - y^2)\\,dy$.", why: "Force element." },
      { text: "Total Force $F = \\int_0^4 \\frac{3}{2}\\rho g (4y - y^2)\\,dy = \\frac{3}{2}\\rho g \\left[2y^2 - \\frac{y^3}{3}\\right]_0^4$.", why: "Integrate over depth." },
      { text: "Evaluate brackets: $2(16) - \\frac{64}{3} = 32 - \\frac{64}{3} = \\frac{32}{3}$.", why: "Evaluate limits." },
      { text: "$F = \\frac{3}{2}\\rho g \\left(\\frac{32}{3}\\right) = 16\\rho g = 16(1000)(9.8) = 156,800$ N $= 156.8$ kN.", why: "Final numerical value." },
    ],
    result: "$F = 16\\rho g = 156,800$ N ($156.8$ kN).",
    check: "By centroid principle, $F = \\rho g \\bar{y} A$. Total area $A = \\frac{1}{2}(6)(4) = 12$ m$^2$. Centroid of inverted triangle is at depth $\\bar{y} = \\frac{1}{3}(4) = \\frac{4}{3}$ m. $F = \\rho g (4/3)(12) = 16\\rho g = 156.8$ kN. Perfect match.",
    mistake: "Measuring $w(y)$ proportional to $y$ instead of $(4 - y)$ when the base is at the surface."
  }
];

// ═══════════════════════════════════════════════════════════════════════════
// MODULE D — Part 1: First-Order Separable, Homogeneous & Linear ODEs
// ═══════════════════════════════════════════════════════════════════════════

export const ODES_P1_EXAMPLES = [
  {
    number: 1,
    tier: "Foundational",
    title: "Order, Degree, Linearity and Verification of Solutions",
    setup: "Determine the order, degree, and linearity of the ODE $x^2 y'' + x y' + (x^2 - 4)y = 0$ (Bessel's Equation of order 2), and verify that $y = c_1 x^2$ is NOT a general solution.",
    steps: [
      { text: "Order: The highest derivative appearing is $y'' = \\frac{d^2y}{dx^2}$, so the order is 2.", why: "Highest derivative." },
      { text: "Degree: The power of the highest derivative $y''$ is 1, so the degree is 1.", why: "Degree definition." },
      { text: "Linearity: The dependent variable $y$ and its derivatives $y', y''$ appear linearly with coefficients depending only on $x$. Hence, it is LINEAR.", why: "Linear ODE definition." },
      { text: "To test candidate $y = x^2$: $y' = 2x$ and $y'' = 2$.", why: "Candidate derivatives." },
      { text: "Substitute into LHS: $x^2(2) + x(2x) + (x^2 - 4)(x^2) = 2x^2 + 2x^2 + x^4 - 4x^2 = x^4$.", why: "Substitute into equation." },
      { text: "Since $x^4 \\neq 0$, $y = x^2$ does not satisfy the ODE.", why: "Verification fails." },
    ],
    result: "Order 2, Degree 1, Linear; candidate $y = x^2$ fails (yields $x^4 \\neq 0$).",
    check: "Bessel solutions require Bessel functions $J_2(x)$ and $Y_2(x)$ rather than finite polynomials.",
    mistake: "Thinking non-linear coefficients like $x^2$ make the ODE non-linear; linearity applies only to $y$ and its derivatives."
  },
  {
    number: 2,
    tier: "Foundational",
    title: "Separable Differential Equation with Initial Condition",
    setup: "Solve the initial value problem $\\frac{dy}{dx} = \\frac{2x(y^2 + 1)}{y}$ with initial condition $y(0) = 1$.",
    steps: [
      { text: "Separate the variables: divide by $y^2 + 1$ and multiply by $y$ and $dx$: $\\frac{y}{y^2 + 1}\\,dy = 2x\\,dx$.", why: "Separate variables." },
      { text: "Integrate both sides: $\\int \\frac{y}{y^2 + 1}\\,dy = \\int 2x\\,dx$.", why: "Integrate." },
      { text: "For LHS, substitute $u = y^2 + 1, du = 2y\\,dy$: $\\frac{1}{2}\\ln(y^2 + 1) = x^2 + C$.", why: "Logarithmic integration." },
      { text: "Multiply by $2$: $\\ln(y^2 + 1) = 2x^2 + 2C = 2x^2 + C_1$.", why: "Multiply constant." },
      { text: "Apply initial condition $y(0) = 1$: $\\ln(1^2 + 1) = 2(0)^2 + C_1 \\implies \\ln(2) = C_1$.", why: "Evaluate constant." },
      { text: "Substitute $C_1$: $\\ln(y^2 + 1) = 2x^2 + \\ln 2$.", why: "Substitute C1." },
      { text: "Exponentiate: $y^2 + 1 = e^{2x^2 + \\ln 2} = 2e^{2x^2}$.", why: "Exponentiate." },
      { text: "Solve for $y$: $y^2 = 2e^{2x^2} - 1 \\implies y = \\sqrt{2e^{2x^2} - 1}$ (positive root since $y(0) = 1 > 0$).", why: "Explicit solution." },
    ],
    result: "$y = \\sqrt{2e^{2x^2} - 1}$.",
    check: "Differentiate: $y' = \\frac{4x e^{2x^2}}{2\\sqrt{2e^{2x^2}-1}} = \\frac{2x(y^2+1)}{y}$. Matches the ODE identically.",
    mistake: "Omitting the factor of $1/2$ when integrating $\\frac{y}{y^2 + 1}\\,dy$."
  },
  {
    number: 3,
    tier: "Intermediate",
    title: "Newton's Law of Cooling with Parameter Estimation",
    setup: "A metal bar at $100^\\circ$C is placed in a room held at constant temperature $T_m = 20^\\circ$C. After 10 minutes, the bar cools to $60^\\circ$C. Find its temperature after 20 minutes, and the time required to cool to $25^\\circ$C.",
    steps: [
      { text: "Newton's Law of Cooling: $\\frac{dT}{dt} = -k(T - 20)$.", why: "Governing ODE." },
      { text: "Separate variables: $\\frac{dT}{T - 20} = -k\\,dt \\implies \\ln|T - 20| = -kt + C \\implies T(t) = 20 + C_0 e^{-kt}$.", why: "General solution." },
      { text: "Apply $T(0) = 100$: $100 = 20 + C_0 \\implies C_0 = 80$. Thus $T(t) = 20 + 80e^{-kt}$.", why: "Initial condition." },
      { text: "Apply $T(10) = 60$: $60 = 20 + 80e^{-10k} \\implies 40 = 80e^{-10k} \\implies e^{-10k} = 1/2$.", why: "Parameter equation." },
      { text: "Solve for $k$: $-10k = \\ln(1/2) = -\\ln 2 \\implies k = \\frac{\\ln 2}{10} \\approx 0.0693$ min$^{-1}$.", why: "Cooling constant." },
      { text: "Temperature at $t = 20$: $T(20) = 20 + 80(e^{-10k})^2 = 20 + 80(1/2)^2 = 20 + 80(1/4) = 20 + 20 = 40^\\circ$C.", why: "Temperature at 20 min." },
      { text: "Find $t$ when $T = 25$: $25 = 20 + 80e^{-kt} \\implies 5 = 80e^{-kt} \\implies e^{-kt} = 5/80 = 1/16$.", why: "Target temperature." },
      { text: "$e^{-kt} = (1/2)^4 \\implies -kt = -4\\ln 2 \\implies t = \\frac{4\\ln 2}{k} = 4(10) = 40$ minutes.", why: "Solve for time." },
    ],
    result: "$T(20) = 40^\\circ$C; time to reach $25^\\circ$C is $t = 40$ minutes.",
    check: "Every 10 minutes, the temperature difference $(T - 20)$ halves: $80 \\to 40$ (at 10 min) $\\to 20$ (at 20 min) $\\to 10$ (at 30 min) $\\to 5$ (at 40 min). $20 + 5 = 25^\\circ$C. Exactly 40 min.",
    mistake: "Assuming temperature decreases linearly (e.g. thinking it drops $40^\\circ$ every 10 minutes)."
  },
  {
    number: 4,
    tier: "Intermediate",
    title: "Homogeneous First-Order Differential Equation",
    setup: "Solve the homogeneous differential equation $(x^2 + y^2)dx - 2xy\\,dy = 0$.",
    steps: [
      { text: "Rewrite in derivative form: $\\frac{dy}{dx} = \\frac{x^2 + y^2}{2xy} = \\frac{1 + (y/x)^2}{2(y/x)}$. Both numerator and denominator are homogeneous of degree 2.", why: "Check homogeneity." },
      { text: "Substitute $y = vx \\implies \\frac{dy}{dx} = v + x\\frac{dv}{dx}$.", why: "Substitution y = vx." },
      { text: "Equate: $v + x\\frac{dv}{dx} = \\frac{1 + v^2}{2v}$.", why: "Substitute v." },
      { text: "Subtract $v$: $x\\frac{dv}{dx} = \\frac{1 + v^2}{2v} - v = \\frac{1 + v^2 - 2v^2}{2v} = \\frac{1 - v^2}{2v}$.", why: "Isolate x dv/dx." },
      { text: "Separate variables: $\\frac{2v}{1 - v^2}\\,dv = \\frac{dx}{x}$.", why: "Separate v and x." },
      { text: "Integrate: $-\\ln|1 - v^2| = \\ln|x| + C_1 \\implies \\ln|1 - v^2| + \\ln|x| = -C_1$.", why: "Integrate." },
      { text: "Combine logs: $\\ln|x(1 - v^2)| = C_2 \\implies x(1 - v^2) = C$.", why: "Combine logarithms." },
      { text: "Substitute back $v = y/x$: $x\\left(1 - \\frac{y^2}{x^2}\\right) = C \\implies x - \\frac{y^2}{x} = C \\implies x^2 - y^2 = Cx$.", why: "Return to x and y." },
    ],
    result: "$x^2 - y^2 = Cx$ (a family of orthogonal circles through the origin).",
    check: "Differentiate $x^2 - y^2 = Cx$: $2x - 2yy' = C$. Multiply by $x$: $2x^2 - 2xy y' = Cx = x^2 - y^2 \\implies 2xy y' = x^2 + y^2 \\implies y' = \\frac{x^2+y^2}{2xy}$. Matches.",
    mistake: "Forgetting the minus sign when integrating $\\int \\frac{2v}{1 - v^2}\\,dv = -\\ln|1 - v^2|$."
  },
  {
    number: 5,
    tier: "Intermediate",
    title: "First-Order Linear ODE with Integrating Factor",
    setup: "Find the general solution of the first-order linear ODE $x\\frac{dy}{dx} + 3y = \\frac{\\sin x}{x^2}$ for $x > 0$.",
    steps: [
      { text: "Put in standard form $\\frac{dy}{dx} + P(x)y = Q(x)$ by dividing by $x$: $\\frac{dy}{dx} + \\frac{3}{x}y = \\frac{\\sin x}{x^3}$.", why: "Standard linear form." },
      { text: "Identify $P(x) = \\frac{3}{x}$ and $Q(x) = \\frac{\\sin x}{x^3}$.", why: "Identify P and Q." },
      { text: "Compute the integrating factor: $I(x) = e^{\\int P(x)\\,dx} = e^{\\int (3/x)\\,dx} = e^{3\\ln x} = e^{\\ln(x^3)} = x^3$.", why: "Integrating factor." },
      { text: "Multiply the standard equation by $I(x) = x^3$: $x^3 \\frac{dy}{dx} + 3x^2 y = \\sin x$.", why: "Multiply by I(x)." },
      { text: "Recognize the product rule on LHS: $\\frac{d}{dx}[x^3 y] = \\sin x$.", why: "Exact derivative." },
      { text: "Integrate both sides: $x^3 y = \\int \\sin x\\,dx = -\\cos x + C$.", why: "Integrate." },
      { text: "Divide by $x^3$: $y = -\\frac{\\cos x}{x^3} + \\frac{C}{x^3} = \\frac{C - \\cos x}{x^3}$.", why: "Solve for y." },
    ],
    result: "$y = \\frac{C - \\cos x}{x^3}$.",
    check: "$y' = \\frac{x^3(\\sin x) - 3x^2(C - \\cos x)}{x^6} = \\frac{\\sin x}{x^3} - \\frac{3(C - \\cos x)}{x^4} = \\frac{\\sin x}{x^3} - \\frac{3}{x}y \\implies y' + \\frac{3}{x}y = \\frac{\\sin x}{x^3}$.",
    mistake: "Computing the integrating factor before dividing through by the leading coefficient $x$."
  },
  {
    number: 6,
    tier: "Advanced",
    title: "First-Order Linear IVP with Discontinuous / Exponential Forcing",
    setup: "Solve the initial value problem $\\frac{dy}{dx} - 2y = 4e^{2x}$ with $y(0) = 5$.",
    steps: [
      { text: "Standard form: $\\frac{dy}{dx} - 2y = 4e^{2x}$. Here $P(x) = -2$ and $Q(x) = 4e^{2x}$.", why: "Identify coefficients." },
      { text: "Integrating factor: $I(x) = e^{\\int (-2)\\,dx} = e^{-2x}$.", why: "Compute I(x)." },
      { text: "Multiply ODE by $e^{-2x}$: $e^{-2x}\\frac{dy}{dx} - 2e^{-2x}y = 4e^{2x}e^{-2x} = 4$.", why: "Multiply through." },
      { text: "LHS is $\\frac{d}{dx}[e^{-2x}y] = 4$.", why: "Product rule condensation." },
      { text: "Integrate: $e^{-2x}y = \\int 4\\,dx = 4x + C$.", why: "Integrate RHS." },
      { text: "Multiply by $e^{2x}$: $y(x) = (4x + C)e^{2x}$.", why: "General solution." },
      { text: "Apply initial condition $y(0) = 5$: $5 = (0 + C)e^0 = C \\implies C = 5$.", why: "Evaluate constant." },
      { text: "Final particular solution: $y(x) = (4x + 5)e^{2x}$.", why: "Assemble solution." },
    ],
    result: "$y(x) = (4x + 5)e^{2x}$.",
    check: "$y' = 4e^{2x} + 2(4x + 5)e^{2x} = (8x + 14)e^{2x}$. $y' - 2y = (8x + 14)e^{2x} - 2(4x + 5)e^{2x} = (8x + 14 - 8x - 10)e^{2x} = 4e^{2x}$. Verified.",
    mistake: "Integrating $4e^{2x}$ directly without multiplying by the integrating factor $e^{-2x}$."
  },
  {
    number: 7,
    tier: "Advanced",
    title: "Orthogonal Trajectories to a Family of Curves",
    setup: "Find the orthogonal trajectories to the family of hyperbolas $x^2 - y^2 = c$.",
    steps: [
      { text: "Differentiate $x^2 - y^2 = c$ implicitly with respect to $x$: $2x - 2y \\frac{dy}{dx} = 0$.", why: "Implicit differentiation." },
      { text: "Solve for the slope of the given family: $\\frac{dy}{dx} = \\frac{x}{y}$.", why: "Slope of given curves." },
      { text: "For orthogonal trajectories, the tangent must be perpendicular: replace $\\frac{dy}{dx}$ with $-\\frac{dx}{dy}$ (or $-\\frac{1}{dy/dx}$): $-\\frac{dx}{dy} = \\frac{x}{y} \\implies \\frac{dy}{dx} = -\\frac{y}{x}$.", why: "Orthogonal condition." },
      { text: "Separate variables: $\\frac{1}{y}\\,dy = -\\frac{1}{x}\\,dx$.", why: "Separate." },
      { text: "Integrate: $\\ln|y| = -\\ln|x| + C_1 = \\ln\\left(\\frac{1}{|x|}\\right) + C_1$.", why: "Integrate." },
      { text: "Exponentiate: $|y| = \\frac{K}{|x|} \\implies xy = K$.", why: "Explicit algebraic form." },
      { text: "The orthogonal trajectories are the family of rectangular hyperbolas $xy = K$ whose asymptotes are the coordinate axes.", why: "Geometric interpretation." },
    ],
    result: "$xy = K$ (rectangular hyperbolas rotated by $45^\\circ$).",
    check: "Product of slopes: for $x^2 - y^2 = c$, $m_1 = x/y$. For $xy = K$, $y + x y' = 0 \\implies m_2 = -y/x$. Then $m_1 m_2 = (x/y)(-y/x) = -1$. Perfectly perpendicular everywhere.",
    mistake: "Leaving the parameter $c$ in the differential equation; the parameter must be eliminated before inverting the slope."
  },
  {
    number: 8,
    tier: "Mastery",
    title: "RL Electric Circuit Analysis via Linear First-Order ODE",
    setup: "An RL circuit has inductance $L = 2$ H, resistance $R = 10$ $\\Omega$, and an applied constant voltage $E(t) = 100$ V. If the initial current is $i(0) = 0$, find $i(t)$ and the steady-state current.",
    steps: [
      { text: "Kirchhoff's Voltage Law: $L\\frac{di}{dt} + Ri = E(t) \\implies 2\\frac{di}{dt} + 10i = 100$.", why: "Physical governing equation." },
      { text: "Standard linear form: $\\frac{di}{dt} + 5i = 50$.", why: "Divide by L = 2." },
      { text: "Integrating factor: $I(t) = e^{\\int 5\\,dt} = e^{5t}$.", why: "Integrating factor." },
      { text: "Multiply through: $e^{5t}\\frac{di}{dt} + 5e^{5t}i = 50e^{5t} \\implies \\frac{d}{dt}[e^{5t}i] = 50e^{5t}$.", why: "Product rule condensation." },
      { text: "Integrate: $e^{5t}i = \\int 50e^{5t}\\,dt = 10e^{5t} + C$.", why: "Integrate RHS." },
      { text: "Divide by $e^{5t}$: $i(t) = 10 + C e^{-5t}$.", why: "General solution." },
      { text: "Apply initial condition $i(0) = 0$: $0 = 10 + C \\implies C = -10$.", why: "Evaluate constant." },
      { text: "Particular solution: $i(t) = 10(1 - e^{-5t})$ Amperes.", why: "Current as function of time." },
      { text: "Steady-state current: as $t \\to \\infty$, $e^{-5t} \\to 0$, so $i_{ss} = 10$ A (Ohm's Law: $E/R = 100/10 = 10$ A).", why: "Steady-state limit." },
    ],
    result: "$i(t) = 10(1 - e^{-5t})$ A; steady-state current $i_{ss} = 10$ A.",
    check: "Time constant $\\tau = L/R = 2/10 = 0.2$ s. The exponential factor is $e^{-t/\\tau} = e^{-t/0.2} = e^{-5t}$. Perfectly matches circuit theory.",
    mistake: "Confusing the transient response $C e^{-5t}$ with the steady-state response $10$."
  }
];

// ═══════════════════════════════════════════════════════════════════════════
// MODULE D — Part 2: Exact, Bernoulli & Second-Order ODEs
// ═══════════════════════════════════════════════════════════════════════════

export const ODES_P2_EXAMPLES = [
  {
    number: 1,
    tier: "Foundational",
    title: "Exact Differential Equation and Potential Function",
    setup: "Test for exactness and solve $(3x^2 + 2xy + y^3)dx + (x^2 + 3xy^2 + 2y)dy = 0$.",
    steps: [
      { text: "Identify $M(x, y) = 3x^2 + 2xy + y^3$ and $N(x, y) = x^2 + 3xy^2 + 2y$.", why: "Identify M and N." },
      { text: "Compute $\\frac{\\partial M}{\\partial y} = 2x + 3y^2$.", why: "Partial derivative My." },
      { text: "Compute $\\frac{\\partial N}{\\partial x} = 2x + 3y^2$.", why: "Partial derivative Nx." },
      { text: "Since $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} = 2x + 3y^2$, the differential equation is EXACT.", why: "Exactness test passes." },
      { text: "There exists a potential function $\\Psi(x, y)$ such that $\\frac{\\partial \\Psi}{\\partial x} = M$ and $\\frac{\\partial \\Psi}{\\partial y} = N$.", why: "Potential function existence." },
      { text: "Integrate $M$ with respect to $x$: $\\Psi(x, y) = \\int (3x^2 + 2xy + y^3)\\,dx = x^3 + x^2 y + x y^3 + g(y)$.", why: "Integrate with respect to x." },
      { text: "Differentiate $\\Psi$ with respect to $y$: $\\frac{\\partial \\Psi}{\\partial y} = x^2 + 3x y^2 + g'(y)$.", why: "Differentiate w.r.t y." },
      { text: "Equate to $N$: $x^2 + 3x y^2 + g'(y) = x^2 + 3x y^2 + 2y \\implies g'(y) = 2y$.", why: "Determine g'(y)." },
      { text: "Integrate $g'(y)$: $g(y) = y^2$.", why: "Evaluate g(y)." },
      { text: "Set $\\Psi(x, y) = C$: $x^3 + x^2 y + x y^3 + y^2 = C$.", why: "Assemble implicit solution." },
    ],
    result: "$x^3 + x^2 y + x y^3 + y^2 = C$.",
    check: "Take total differential: $d[x^3 + x^2 y + x y^3 + y^2] = (3x^2 + 2xy + y^3)dx + (x^2 + 3xy^2 + 2y)dy = 0$. Exactly matches the ODE.",
    mistake: "Adding a constant of integration $C$ inside $g(y)$ and then writing another constant on the RHS."
  },
  {
    number: 2,
    tier: "Advanced",
    title: "Integrating Factor for Non-Exact ODEs",
    setup: "Solve $(2xy)dx + (y^2 - 3x^2)dy = 0$ by finding an integrating factor.",
    steps: [
      { text: "$M = 2xy \\implies \\frac{\\partial M}{\\partial y} = 2x$. $N = y^2 - 3x^2 \\implies \\frac{\\partial N}{\\partial x} = -6x$.", why: "Partial derivatives." },
      { text: "$\\frac{\\partial M}{\\partial y} \\neq \\frac{\\partial N}{\\partial x}$ ($2x \\neq -6x$), so the equation is not exact.", why: "Test fails." },
      { text: "Test $\\frac{\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}}{M} = \\frac{-6x - 2x}{2xy} = \\frac{-8x}{2xy} = -\\frac{4}{y}$, which depends ONLY on $y$!", why: "Condition for mu(y)." },
      { text: "Integrating factor $\\mu(y) = e^{\\int -(-4/y)\\,dy} = e^{\\int (-4/y)\\,dy} = e^{-4\\ln y} = y^{-4}$.", why: "Integrating factor formula." },
      { text: "Multiply ODE by $y^{-4}$: $\\left(2x y^{-3}\\right)dx + \\left(y^{-2} - 3x^2 y^{-4}\\right)dy = 0$.", why: "Multiply by integrating factor." },
      { text: "Check new exactness: $\\frac{\\partial}{\\partial y}[2x y^{-3}] = -6x y^{-4}$. $\\frac{\\partial}{\\partial x}[y^{-2} - 3x^2 y^{-4}] = -6x y^{-4}$. Exact!", why: "Exactness verified." },
      { text: "Integrate $M_{new}$ with respect to $x$: $\\Psi = \\int 2x y^{-3}\\,dx = x^2 y^{-3} + g(y)$.", why: "Potential function." },
      { text: "$\\frac{\\partial \\Psi}{\\partial y} = -3x^2 y^{-4} + g'(y) = y^{-2} - 3x^2 y^{-4} \\implies g'(y) = y^{-2} \\implies g(y) = -y^{-1}$.", why: "Solve for g(y)." },
      { text: "General solution: $\\frac{x^2}{y^3} - \\frac{1}{y} = C \\implies x^2 - y^2 = C y^3$.", why: "Clear fractions." },
    ],
    result: "$x^2 - y^2 = C y^3$.",
    check: "Differentiate $x^2 - y^2 = C y^3$: $2x dx - 2y dy = 3C y^2 dy$. Substitute $C = (x^2 - y^2)/y^3$: $2x dx - 2y dy = 3\\frac{x^2-y^2}{y}dy \\implies 2xy dx - 2y^2 dy = (3x^2 - 3y^2)dy \\implies 2xy dx + (y^2 - 3x^2)dy = 0$.",
    mistake: "Mixing up the signs in the formula for integrating factor $\\mu(y) = \\exp\\left(\\int \\frac{N_x - M_y}{M}dy\\right)$."
  },
  {
    number: 3,
    tier: "Advanced",
    title: "Bernoulli Differential Equation",
    setup: "Solve the Bernoulli differential equation $\\frac{dy}{dx} + \\frac{1}{x}y = x y^2$ for $x > 0$.",
    steps: [
      { text: "Identify standard Bernoulli form: $\\frac{dy}{dx} + P(x)y = Q(x)y^n$ with $n = 2$, $P(x) = 1/x$, and $Q(x) = x$.", why: "Identify Bernoulli n = 2." },
      { text: "Divide entire equation by $y^2$: $y^{-2}\\frac{dy}{dx} + \\frac{1}{x}y^{-1} = x$.", why: "Clear non-linear power." },
      { text: "Substitute $u = y^{1 - n} = y^{1 - 2} = y^{-1}$.", why: "Substitution u = y^(1-n)." },
      { text: "Differentiate $u$ with respect to $x$: $\\frac{du}{dx} = -y^{-2}\\frac{dy}{dx} \\implies y^{-2}\\frac{dy}{dx} = -\\frac{du}{dx}$.", why: "Chain rule for u." },
      { text: "Substitute into the equation: $-\\frac{du}{dx} + \\frac{1}{x}u = x \\implies \\frac{du}{dx} - \\frac{1}{x}u = -x$.", why: "Standard linear ODE in u." },
      { text: "Integrating factor for $u$: $I(x) = e^{\\int (-1/x)\\,dx} = e^{-\\ln x} = 1/x$.", why: "Integrating factor." },
      { text: "Multiply by $1/x$: $\\frac{1}{x}\\frac{du}{dx} - \\frac{1}{x^2}u = -1 \\implies \\frac{d}{dx}\\left[\\frac{u}{x}\\right] = -1$.", why: "Product rule." },
      { text: "Integrate: $\\frac{u}{x} = -x + C \\implies u = -x^2 + Cx$.", why: "Solve for u." },
      { text: "Substitute back $u = 1/y$: $\\frac{1}{y} = Cx - x^2 \\implies y = \\frac{1}{Cx - x^2}$.", why: "Return to original variable y." },
    ],
    result: "$y = \\frac{1}{Cx - x^2}$.",
    check: "$y' = -\\frac{C - 2x}{(Cx - x^2)^2}$. $y' + \\frac{y}{x} = \\frac{-C + 2x}{(Cx - x^2)^2} + \\frac{1}{x(Cx - x^2)} = \\frac{-C + 2x + C - x}{(Cx - x^2)^2} = \\frac{x}{(Cx - x^2)^2} = x y^2$. Verified.",
    mistake: "Forgetting the negative sign when replacing $y^{-2}y'$ with $-\\frac{du}{dx}$."
  },
  {
    number: 4,
    tier: "Foundational",
    title: "Second-Order Linear Homogeneous ODE: Real Distinct Roots",
    setup: "Solve the initial value problem $y'' - 7y' + 10y = 0$ with $y(0) = 2$ and $y'(0) = 7$.",
    steps: [
      { text: "Write the characteristic equation: $r^2 - 7r + 10 = 0$.", why: "Characteristic equation." },
      { text: "Factor: $(r - 2)(r - 5) = 0$.", why: "Factor quadratic." },
      { text: "The roots are real and distinct: $r_1 = 2$ and $r_2 = 5$.", why: "Roots classification." },
      { text: "The general solution is $y(x) = c_1 e^{2x} + c_2 e^{5x}$.", why: "Basis functions." },
      { text: "Compute the derivative: $y'(x) = 2c_1 e^{2x} + 5c_2 e^{5x}$.", why: "Derivative for IVP." },
      { text: "Apply $y(0) = 2$: $c_1 + c_2 = 2$.", why: "First initial condition." },
      { text: "Apply $y'(0) = 7$: $2c_1 + 5c_2 = 7$.", why: "Second initial condition." },
      { text: "Solve system: multiply first equation by $2$: $2c_1 + 2c_2 = 4$. Subtract from second: $3c_2 = 3 \\implies c_2 = 1$. Then $c_1 = 2 - 1 = 1$.", why: "Solve constants." },
      { text: "Substitute constants: $y(x) = e^{2x} + e^{5x}$.", why: "Particular solution." },
    ],
    result: "$y(x) = e^{2x} + e^{5x}$.",
    check: "$y(0) = 1 + 1 = 2$. $y' = 2e^{2x} + 5e^{5x} \\implies y'(0) = 2 + 5 = 7$. $y'' = 4e^{2x} + 25e^{5x}$. $y'' - 7y' + 10y = (4 - 14 + 10)e^{2x} + (25 - 35 + 10)e^{5x} = 0$.",
    mistake: "Writing $y = c_1 e^{2x} + c_2 x e^{5x}$ (the extra $x$ applies only for repeated roots)."
  },
  {
    number: 5,
    tier: "Foundational",
    title: "Second-Order Linear Homogeneous ODE: Repeated Roots",
    setup: "Find the general solution of $y'' - 6y' + 9y = 0$, and the particular solution satisfying $y(0) = 3, y'(0) = 11$.",
    steps: [
      { text: "Characteristic equation: $r^2 - 6r + 9 = 0 \\implies (r - 3)^2 = 0$.", why: "Characteristic equation." },
      { text: "The root is repeated: $r = 3$ with multiplicity 2.", why: "Repeated root." },
      { text: "By reduction of order, the second independent solution is $x e^{3x}$. General solution: $y(x) = (c_1 + c_2 x)e^{3x}$.", why: "General solution form." },
      { text: "Compute derivative: $y'(x) = c_2 e^{3x} + 3(c_1 + c_2 x)e^{3x} = (3c_1 + c_2 + 3c_2 x)e^{3x}$.", why: "Product rule derivative." },
      { text: "Apply $y(0) = 3$: $c_1 e^0 = 3 \\implies c_1 = 3$.", why: "Initial position." },
      { text: "Apply $y'(0) = 11$: $3c_1 + c_2 = 11 \\implies 3(3) + c_2 = 11 \\implies c_2 = 2$.", why: "Initial velocity." },
      { text: "Assemble solution: $y(x) = (3 + 2x)e^{3x}$.", why: "Final formula." },
    ],
    result: "$y(x) = (3 + 2x)e^{3x}$.",
    check: "$y(0) = 3$. $y'(x) = 2e^{3x} + 3(3 + 2x)e^{3x} = (11 + 6x)e^{3x} \\implies y'(0) = 11$. $y'' = 6e^{3x} + 3(11 + 6x)e^{3x} = (39 + 18x)e^{3x}$. $y'' - 6y' + 9y = (39 + 18x - 66 - 36x + 27 + 18x)e^{3x} = 0$.",
    mistake: "Omitting the $x$ factor on the second solution, which would result in linearly dependent functions."
  },
  {
    number: 6,
    tier: "Intermediate",
    title: "Second-Order Homogeneous ODE: Complex Conjugate Roots",
    setup: "Solve the harmonic oscillator initial value problem $y'' + 4y' + 13y = 0$ with $y(0) = 2$ and $y'(0) = -1$.",
    steps: [
      { text: "Characteristic equation: $r^2 + 4r + 13 = 0$.", why: "Characteristic equation." },
      { text: "Apply quadratic formula: $r = \\frac{-4 \\pm \\sqrt{16 - 52}}{2} = \\frac{-4 \\pm \\sqrt{-36}}{2} = \\frac{-4 \\pm 6i}{2} = -2 \\pm 3i$.", why: "Solve for complex roots." },
      { text: "Identify real part $\\alpha = -2$ and imaginary part $\\beta = 3$.", why: "Parameters alpha and beta." },
      { text: "General solution: $y(x) = e^{\\alpha x}(c_1 \\cos(\\beta x) + c_2 \\sin(\\beta x)) = e^{-2x}(c_1 \\cos 3x + c_2 \\sin 3x)$.", why: "Underdamped solution." },
      { text: "Apply $y(0) = 2$: $e^0(c_1(1) + c_2(0)) = 2 \\implies c_1 = 2$.", why: "Initial condition 1." },
      { text: "Compute derivative: $y' = -2e^{-2x}(c_1 \\cos 3x + c_2 \\sin 3x) + e^{-2x}(-3c_1 \\sin 3x + 3c_2 \\cos 3x)$.", why: "Derivative." },
      { text: "At $x = 0$: $y'(0) = -2c_1 + 3c_2 = -1$.", why: "Initial condition 2." },
      { text: "Substitute $c_1 = 2$: $-2(2) + 3c_2 = -1 \\implies -4 + 3c_2 = -1 \\implies 3c_2 = 3 \\implies c_2 = 1$.", why: "Solve for c2." },
      { text: "Substitute constants: $y(x) = e^{-2x}(2\\cos 3x + \\sin 3x)$.", why: "Final solution." },
    ],
    result: "$y(x) = e^{-2x}(2\\cos 3x + \\sin 3x)$.",
    check: "$y(0) = 2(1) = 2$. $y'(0) = -2(2) + 3(1) = -1$. Oscillations decay exponentially with envelope $e^{-2x}$.",
    mistake: "Placing the decay factor inside the cosine or sine arguments."
  },
  {
    number: 7,
    tier: "Advanced",
    title: "Method of Undetermined Coefficients",
    setup: "Find the general solution of the non-homogeneous equation $y'' - 5y' + 6y = 2e^{x} + 12x$.",
    steps: [
      { text: "Step 1: Solve the homogeneous equation $y'' - 5y' + 6y = 0$.", why: "Complementary solution." },
      { text: "Characteristic equation: $r^2 - 5r + 6 = 0 \\implies (r - 2)(r - 3) = 0 \\implies r = 2, 3$.", why: "Homogeneous roots." },
      { text: "Complementary solution: $y_c(x) = c_1 e^{2x} + c_2 e^{3x}$.", why: "Write yc." },
      { text: "Step 2: Choose trial form for $y_p$. RHS is $g(x) = 2e^x + 12x$. Neither $e^x$ nor polynomial terms appear in $y_c$.", why: "Check for duplication." },
      { text: "Trial form: $y_p = A e^x + Bx + C$.", why: "Undetermined trial." },
      { text: "Compute derivatives: $y_p' = A e^x + B$ and $y_p'' = A e^x$.", why: "Differentiate yp." },
      { text: "Substitute into ODE: $(A e^x) - 5(A e^x + B) + 6(A e^x + Bx + C) = 2e^x + 12x$.", why: "Substitute into LHS." },
      { text: "Group terms: $(A - 5A + 6A)e^x + (6B)x + (-5B + 6C) = 2e^x + 12x$.", why: "Collect like terms." },
      { text: "Equate coefficients: $2A = 2 \\implies A = 1$.", why: "Exponential term." },
      { text: "$6B = 12 \\implies B = 2$.", why: "Linear term." },
      { text: "$-5B + 6C = 0 \\implies -5(2) + 6C = 0 \\implies 6C = 10 \\implies C = 5/3$.", why: "Constant term." },
      { text: "Particular solution: $y_p = e^x + 2x + 5/3$.", why: "Write yp." },
      { text: "General solution: $y = y_c + y_p = c_1 e^{2x} + c_2 e^{3x} + e^x + 2x + 5/3$.", why: "Superposition." },
    ],
    result: "$y(x) = c_1 e^{2x} + c_2 e^{3x} + e^x + 2x + 5/3$.",
    check: "$y_p'' - 5y_p' + 6y_p = e^x - 5(e^x + 2) + 6(e^x + 2x + 5/3) = (1 - 5 + 6)e^x + 12x - 10 + 10 = 2e^x + 12x$. Matches RHS.",
    mistake: "Leaving out the constant $C$ in the polynomial trial form $Bx + C$ when the forcing term is $12x$."
  },
  {
    number: 8,
    tier: "Mastery",
    title: "Method of Variation of Parameters with Wronskian",
    setup: "Solve the non-homogeneous ODE $y'' + y = \\tan x$ on $(-\\pi/2, \\pi/2)$ using Variation of Parameters.",
    steps: [
      { text: "Step 1: Homogeneous equation $y'' + y = 0 \\implies r^2 + 1 = 0 \\implies r = \\pm i$.", why: "Homogeneous solution." },
      { text: "Fundamental solutions: $y_1 = \\cos x$ and $y_2 = \\sin x$. Complementary solution: $y_c = c_1 \\cos x + c_2 \\sin x$.", why: "Fundamental set." },
      { text: "Step 2: Compute the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 = (\\cos x)(\\cos x) - (-\\sin x)(\\sin x) = \\cos^2 x + \\sin^2 x = 1$.", why: "Wronskian calculation." },
      { text: "Notice $W = 1 \\neq 0$, confirming linear independence.", why: "Wronskian check." },
      { text: "Step 3: Apply Variation of Parameters formulas: $u_1'(x) = -\\frac{y_2 g(x)}{W}$ and $u_2'(x) = \\frac{y_1 g(x)}{W}$, where $g(x) = \\tan x$.", why: "Parameter formulas." },
      { text: "$u_1'(x) = -\\frac{(\\sin x)(\\tan x)}{1} = -\\frac{\\sin^2 x}{\\cos x} = -\\frac{1 - \\cos^2 x}{\\cos x} = -\\sec x + \\cos x$.", why: "Trig identity for u1'." },
      { text: "Integrate $u_1$: $u_1(x) = -\\ln|\\sec x + \\tan x| + \\sin x$.", why: "Integrate u1." },
      { text: "$u_2'(x) = \\frac{(\\cos x)(\\tan x)}{1} = \\sin x$.", why: "Form for u2'." },
      { text: "Integrate $u_2$: $u_2(x) = -\\cos x$.", why: "Integrate u2." },
      { text: "Step 4: Form particular solution $y_p = u_1 y_1 + u_2 y_2$: $y_p = \\left(-\\ln|\\sec x + \\tan x| + \\sin x\\right)\\cos x + (-\\cos x)\\sin x$.", why: "Assemble yp." },
      { text: "Notice $(\\sin x\\cos x) - (\\cos x\\sin x) = 0$ cancels! $y_p = -\\cos x \\ln|\\sec x + \\tan x|$.", why: "Simplification." },
      { text: "Step 5: General solution: $y(x) = c_1 \\cos x + c_2 \\sin x - \\cos x \\ln|\\sec x + \\tan x|$.", why: "Superposition." },
    ],
    result: "$y(x) = c_1 \\cos x + c_2 \\sin x - \\cos x \\ln|\\sec x + \\tan x|$.",
    check: "Differentiate $y_p$: $y_p' = \\sin x \\ln|\\sec x + \\tan x| - \\cos x(\\sec x) = \\sin x \\ln|\\sec x + \\tan x| - 1$. $y_p'' = \\cos x \\ln|\\sec x + \\tan x| + \\sin x \\sec x = \\cos x \\ln|\\sec x + \\tan x| + \\tan x$. Then $y_p'' + y_p = \\tan x$. Verified.",
    mistake: "Attempting to use Undetermined Coefficients on $\\tan x$; Undetermined Coefficients works ONLY for polynomials, exponentials, sines, and cosines."
  }
];
