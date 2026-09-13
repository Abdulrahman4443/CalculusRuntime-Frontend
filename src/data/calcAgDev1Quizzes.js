/**
 * Comprehensive Study-Guide Quizzes for Developer 1 (Calc & Geometry)
 * Curriculum alignment:
 *   - Module A: F.Sc Part 2 (Ch. 4) + Math-101 Calculus & Analytic Geometry (Sem 1)
 *   - Module B: F.Sc Part 2 (Ch. 6) + Math-101 (Sem 1)
 *   - Module C: F.Sc Part 2 (Ch. 1-3) + Math-101 Calculus I
 *   - Module D: F.Sc Part 2 (Ch. 3) + Math-201 Differential Equations
 * 15 rigorous MCQs per section with detailed step-by-step explanations.
 */

// ═══════════════════════════════════════════════════════════════════════════
// MODULE A — 2D Analytical Geometry: Lines & Systems of Lines
// ═══════════════════════════════════════════════════════════════════════════

export const LINES_P1_QUIZ = [
  {
    prompt: "A point $P$ divides the line segment joining $A(1, -2)$ and $B(4, 7)$ internally in the ratio $2 : 1$. What are the coordinates of $P$?",
    options: ["$(2, 1)$", "$(3, 4)$", "$(3, 3)$", "$(5, 4)$"],
    answer: "B",
    explanation: "By the section formula: $x = \\frac{k_1 x_2 + k_2 x_1}{k_1 + k_2} = \\frac{2(4) + 1(1)}{2 + 1} = \\frac{9}{3} = 3$ and $y = \\frac{2(7) + 1(-2)}{2 + 1} = \\frac{12}{3} = 4$. Thus $P = (3, 4)$."
  },
  {
    prompt: "What is the centroid of a triangle with vertices $A(2, 4)$, $B(4, -2)$, and $C(6, 7)$?",
    options: ["$(4, 3)$", "$(3, 4)$", "$(4, 2)$", "$(6, 3)$"],
    answer: "A",
    explanation: "Centroid $G = \\left(\\frac{x_1 + x_2 + x_3}{3}, \\frac{y_1 + y_2 + y_3}{3}\\right) = \\left(\\frac{2 + 4 + 6}{3}, \\frac{4 - 2 + 7}{3}\\right) = \\left(\\frac{12}{3}, \\frac{9}{3}\\right) = (4, 3)$."
  },
  {
    prompt: "The perpendicular distance from the point $(2, -3)$ to the line $3x - 4y + 7 = 0$ is:",
    options: ["$3$", "$4$", "$5$", "$6$"],
    answer: "C",
    explanation: "Distance $d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}} = \\frac{|3(2) - 4(-3) + 7|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|6 + 12 + 7|}{5} = \\frac{25}{5} = 5$."
  },
  {
    prompt: "What is the distance between the parallel lines $5x + 12y - 10 = 0$ and $5x + 12y + 16 = 0$?",
    options: ["$1$", "$2$", "$3$", "$\\frac{26}{13}$"],
    answer: "B",
    explanation: "Formula for parallel lines: $d = \\frac{|C_1 - C_2|}{\\sqrt{A^2 + B^2}} = \\frac{|-10 - 16|}{\\sqrt{5^2 + 12^2}} = \\frac{26}{13} = 2$."
  },
  {
    prompt: "The equation of a line with $x$-intercept $a = 3$ and $y$-intercept $b = -4$ is:",
    options: ["$4x - 3y = 12$", "$3x - 4y = 12$", "$4x + 3y = 12$", "$3x + 4y = -12$"],
    answer: "A",
    explanation: "Using intercept form $\\frac{x}{a} + \\frac{y}{b} = 1$: $\\frac{x}{3} + \\frac{y}{-4} = 1 \\implies \\frac{4x - 3y}{12} = 1 \\implies 4x - 3y = 12$."
  },
  {
    prompt: "What is the normal form of the line $x + \\sqrt{3}y - 8 = 0$?",
    options: [
      "$x\\cos 30^\\circ + y\\sin 30^\\circ = 4$",
      "$x\\cos 60^\\circ + y\\sin 60^\\circ = 4$",
      "$x\\cos 45^\\circ + y\\sin 45^\\circ = 4$",
      "$x\\cos 60^\\circ + y\\sin 60^\\circ = 8$"
    ],
    answer: "B",
    explanation: "Divide through by $\\sqrt{A^2 + B^2} = \\sqrt{1 + 3} = 2$: $\\frac{1}{2}x + \\frac{\\sqrt{3}}{2}y = 4$. Since $\\cos 60^\\circ = 1/2$ and $\\sin 60^\\circ = \\sqrt{3}/2$, this is $x\\cos 60^\\circ + y\\sin 60^\\circ = 4$."
  },
  {
    prompt: "Find the acute angle $\\theta$ between the lines $y = 2x + 1$ and $y = 3x - 4$.",
    options: ["$\\approx 8.13^\\circ$", "$\\approx 45^\\circ$", "$\\approx 30^\\circ$", "$\\approx 60^\\circ$"],
    answer: "A",
    explanation: "Using $\\tan\\theta = \\left|\\frac{m_2 - m_1}{1 + m_1 m_2}\\right| = \\left|\\frac{3 - 2}{1 + (3)(2)}\\right| = \\frac{1}{7}$. Thus $\\theta = \\arctan(1/7) \\approx 8.13^\\circ$."
  },
  {
    prompt: "Under what condition are three lines $A_1x + B_1y + C_1 = 0$, $A_2x + B_2y + C_2 = 0$, and $A_3x + B_3y + C_3 = 0$ concurrent?",
    options: [
      "$\\det\\begin{pmatrix} A_1 & B_1 & C_1 \\\\ A_2 & B_2 & C_2 \\\\ A_3 & B_3 & C_3 \\end{pmatrix} = 0$",
      "$A_1 A_2 A_3 + B_1 B_2 B_3 = 0$",
      "The slopes are all equal",
      "The perpendicular distances to the origin are equal"
    ],
    answer: "A",
    explanation: "Three straight lines are concurrent (pass through a common single point) if and only if the $3 \\times 3$ determinant of their coefficients is zero."
  },
  {
    prompt: "If the lines $2x - 3y + k = 0$, $3x - 4y - 13 = 0$, and $8x - 11y - 33 = 0$ are concurrent, what is the value of $k$?",
    options: ["$-5$", "$7$", "$-7$", "$5$"],
    answer: "C",
    explanation: "Solve $3x - 4y = 13$ and $8x - 11y = 33$: $8(13 + 4y)/3 - 11y = 33 \\implies 104 + 32y - 33y = 99 \\implies -y = -5 \\implies y = 5$, then $3x = 13 + 20 = 33 \\implies x = 11$. Plug $(11, 5)$ into $2x - 3y + k = 0$: $2(11) - 3(5) + k = 0 \\implies 22 - 15 + k = 0 \\implies k = -7$."
  },
  {
    prompt: "In any triangle, what is the geometric relationship between the Orthocenter ($H$), Centroid ($G$), and Circumcenter ($O$)?",
    options: [
      "$G$ divides $HO$ in the ratio $2 : 1$ (Euler line)",
      "$H$ divides $GO$ in the ratio $1 : 2$",
      "They always coincide for every triangle",
      "$O$ is always the midpoint of $HG$"
    ],
    answer: "A",
    explanation: "By Euler's theorem, $H, G, O$ are collinear (on the Euler Line), and the centroid $G$ divides the segment $HO$ internally in the ratio $2 : 1$."
  },
  {
    prompt: "The symmetric (parametric) form of a straight line through $(x_1, y_1)$ making inclination angle $\\theta$ with the $x$-axis is:",
    options: [
      "$\\frac{x - x_1}{\\cos\\theta} = \\frac{y - y_1}{\\sin\\theta} = r$",
      "$\\frac{x - x_1}{\\sin\\theta} = \\frac{y - y_1}{\\cos\\theta} = r$",
      "$(x - x_1)\\cos\\theta + (y - y_1)\\sin\\theta = 0$",
      "$y - y_1 = r(x - x_1)$"
    ],
    answer: "A",
    explanation: "In symmetric/distance form, any point at directed distance $r$ from $(x_1, y_1)$ satisfies $x = x_1 + r\\cos\\theta$ and $y = y_1 + r\\sin\\theta$, so $\\frac{x - x_1}{\\cos\\theta} = \\frac{y - y_1}{\\sin\\theta} = r$."
  },
  {
    prompt: "Two lines $L_1: A_1 x + B_1 y + C_1 = 0$ and $L_2: A_2 x + B_2 y + C_2 = 0$ are perpendicular if and only if:",
    options: [
      "$A_1 A_2 + B_1 B_2 = 0$",
      "$A_1 B_2 - A_2 B_1 = 0$",
      "$A_1 / A_2 = B_1 / B_2$",
      "$A_1 B_1 + A_2 B_2 = 0$"
    ],
    answer: "A",
    explanation: "The slopes are $m_1 = -A_1/B_1$ and $m_2 = -A_2/B_2$. For perpendicularity, $m_1 m_2 = -1 \\implies \\frac{A_1 A_2}{B_1 B_2} = -1 \\implies A_1 A_2 + B_1 B_2 = 0$."
  },
  {
    prompt: "The coordinates of the incenter of a triangle with vertices $A(x_1, y_1)$, $B(x_2, y_2)$, $C(x_3, y_3)$ and opposite side lengths $a, b, c$ are given by:",
    options: [
      "$\\left(\\frac{ax_1 + bx_2 + cx_3}{a + b + c}, \\frac{ay_1 + by_2 + cy_3}{a + b + c}\\right)$",
      "$\\left(\\frac{x_1 + x_2 + x_3}{a + b + c}, \\frac{y_1 + y_2 + y_3}{a + b + c}\\right)$",
      "$\\left(\\frac{a+b+c}{3}, \\frac{x_1+x_2+x_3}{3}\\right)$",
      "$\\left(\\frac{bx_1 + cx_2 + ay_3}{a + b + c}, \\frac{by_1 + cy_2 + ay_3}{a + b + c}\\right)$"
    ],
    answer: "A",
    explanation: "The incenter coordinates are the weighted average of the vertex coordinates weighted by the lengths of the opposite sides: $\\left(\\frac{ax_1 + bx_2 + cx_3}{a + b + c}, \\frac{ay_1 + by_2 + cy_3}{a + b + c}\\right)$."
  },
  {
    prompt: "Find the perpendicular distance from the origin to the line $12x - 5y + 39 = 0$.",
    options: ["$3$", "$13$", "$39$", "$2.5$"],
    answer: "A",
    explanation: "$d = \\frac{|C|}{\\sqrt{A^2 + B^2}} = \\frac{|39|}{\\sqrt{12^2 + (-5)^2}} = \\frac{39}{\\sqrt{144 + 25}} = \\frac{39}{13} = 3$."
  },
  {
    prompt: "If $P(x, y)$ divides the segment between $A(2, 3)$ and $B(6, 7)$ externally in the ratio $3 : 1$, what is $P$?",
    options: ["$(8, 9)$", "$(4, 5)$", "$(10, 11)$", "$(7, 8)$"],
    answer: "A",
    explanation: "External division ratio $3 : 1$ uses $k_2 = -1$: $x = \\frac{3(6) - 1(2)}{3 - 1} = \\frac{18 - 2}{2} = 8$, and $y = \\frac{3(7) - 1(3)}{3 - 1} = \\frac{21 - 3}{2} = 9$. Thus $P = (8, 9)$."
  }
];

export const LINES_P2_QUIZ = [
  {
    prompt: "The homogeneous second-degree equation $ax^2 + 2hxy + by^2 = 0$ represents two lines passing through the origin. These lines are perpendicular if and only if:",
    options: ["$a + b = 0$", "$h^2 - ab = 0$", "$a = b$", "$h = 0$"],
    answer: "A",
    explanation: "If the slopes are $m_1, m_2$, then $m_1 + m_2 = -2h/b$ and $m_1 m_2 = a/b$. Perpendicularity requires $m_1 m_2 = -1 \\implies a/b = -1 \\implies a + b = 0$ (sum of coefficients of $x^2$ and $y^2$ is zero)."
  },
  {
    prompt: "The angle $\\theta$ between the two lines given by $ax^2 + 2hxy + by^2 = 0$ is given by:",
    options: [
      "$\\tan\\theta = \\frac{2\\sqrt{h^2 - ab}}{a + b}$",
      "$\\tan\\theta = \\frac{\\sqrt{h^2 - ab}}{a + b}$",
      "$\\tan\\theta = \\frac{2\\sqrt{h^2 + ab}}{a - b}$",
      "$\\cos\\theta = \\frac{a + b}{2h}$"
    ],
    answer: "A",
    explanation: "Using $\\tan\\theta = \\frac{|m_1 - m_2|}{1 + m_1 m_2} = \\frac{\\sqrt{(m_1 + m_2)^2 - 4m_1 m_2}}{1 + m_1 m_2} = \\frac{\\sqrt{4h^2/b^2 - 4a/b}}{1 + a/b} = \\frac{2\\sqrt{h^2 - ab}}{a + b}$."
  },
  {
    prompt: "The two lines represented by $ax^2 + 2hxy + by^2 = 0$ are real and coincident (parallel) when:",
    options: ["$h^2 - ab = 0$", "$h^2 - ab < 0$", "$a + b = 0$", "$h = 0$"],
    answer: "A",
    explanation: "The slopes are real and equal if the discriminant under the square root is zero, i.e., $h^2 - ab = 0$."
  },
  {
    prompt: "What is the angle between the lines given by $x^2 - 5xy + 4y^2 = 0$?",
    options: [
      "$\\arctan(3/5)$",
      "$\\arctan(4/3)$",
      "$\\arctan(1)$",
      "$\\arctan(2)$"
    ],
    answer: "A",
    explanation: "Here $a = 1$, $2h = -5 \\implies h = -5/2$, $b = 4$. Then $h^2 - ab = 25/4 - 4 = 9/4$. $\\tan\\theta = \\frac{2\\sqrt{9/4}}{1 + 4} = \\frac{2(3/2)}{5} = \\frac{3}{5}$. So $\\theta = \\arctan(3/5)$."
  },
  {
    prompt: "The general second-degree equation $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$ represents a pair of straight lines if and only if $\\Delta = 0$, where $\\Delta$ equals:",
    options: [
      "$abc + 2fgh - af^2 - bg^2 - ch^2$",
      "$abc - 2fgh + af^2 + bg^2 + ch^2$",
      "$a^2 + b^2 + c^2 - 2fgh$",
      "$\\det\\begin{pmatrix} a & h & g \\\\ h & b & f \\\\ g & f & c \\end{pmatrix} = 0$"
    ],
    answer: "A",
    explanation: "Both A and the $3 \\times 3$ determinant represent the same condition: $\\Delta = \\det\\begin{pmatrix} a & h & g \\\\ h & b & f \\\\ g & f & c \\end{pmatrix} = abc + 2fgh - af^2 - bg^2 - ch^2 = 0$."
  },
  {
    prompt: "What are the individual equations of the lines given by $2x^2 + 7xy + 3y^2 = 0$?",
    options: [
      "$2x + y = 0$ and $x + 3y = 0$",
      "$2x + 3y = 0$ and $x + y = 0$",
      "$2x - y = 0$ and $x - 3y = 0$",
      "$x + 2y = 0$ and $3x + y = 0$"
    ],
    answer: "A",
    explanation: "Factor as a quadratic in $x$ or $y$: $2x^2 + 6xy + xy + 3y^2 = 2x(x + 3y) + y(x + 3y) = (2x + y)(x + 3y) = 0$. The lines are $2x + y = 0$ and $x + 3y = 0$."
  },
  {
    prompt: "The equation of the pair of angle bisectors of the lines $ax^2 + 2hxy + by^2 = 0$ is:",
    options: [
      "$\\frac{x^2 - y^2}{a - b} = \\frac{xy}{h}$",
      "$\\frac{x^2 + y^2}{a + b} = \\frac{xy}{h}$",
      "$\\frac{x^2 - y^2}{h} = \\frac{xy}{a - b}$",
      "$(a - b)(x^2 - y^2) + hxy = 0$"
    ],
    answer: "A",
    explanation: "The classical formula for the joint equation of angle bisectors of $ax^2 + 2hxy + by^2 = 0$ is $\\frac{x^2 - y^2}{a - b} = \\frac{xy}{h}$, or $h(x^2 - y^2) = (a - b)xy$."
  },
  {
    prompt: "For what value of $k$ does the equation $2x^2 + 5xy + 2y^2 + 3x + 3y + k = 0$ represent a pair of straight lines?",
    options: ["$1$", "$2$", "$-1$", "$0$"],
    answer: "A",
    explanation: "Coefficients: $a = 2, h = 5/2, b = 2, g = 3/2, f = 3/2, c = k$. Set $\\Delta = 0$: $abc + 2fgh - af^2 - bg^2 - ch^2 = (2)(2)(k) + 2(3/2)(3/2)(5/2) - 2(9/4) - 2(9/4) - k(25/4) = 4k + 45/4 - 9/2 - 9/2 - 25k/4 = -9k/4 + 45/4 - 36/4 = -9k/4 + 9/4 = 0 \\implies k = 1$."
  },
  {
    prompt: "The point of intersection of the lines represented by $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$ (when $\\Delta = 0$) is found by solving:",
    options: [
      "$\\frac{\\partial F}{\\partial x} = 0$ and $\\frac{\\partial F}{\\partial y} = 0$",
      "$F(x, y) = 0$ and $x + y = 0$",
      "$\\frac{\\partial F}{\\partial x} + \\frac{\\partial F}{\\partial y} = 1$",
      "Setting $x = 0$ and $y = 0$"
    ],
    answer: "A",
    explanation: "Differentiating partially with respect to $x$ and $y$ gives $ax + hy + g = 0$ and $hx + by + f = 0$. Solving this linear system gives the exact point of intersection: $\\left(\\frac{hf - bg}{ab - h^2}, \\frac{gh - af}{ab - h^2}\\right)$."
  },
  {
    prompt: "If the angle between the pair of lines $x^2 + 2kxy - y^2 = 0$ is $\\theta$, what is $\\theta$?",
    options: ["$90^\\circ$", "$45^\\circ$", "$60^\\circ$", "Depends on $k$"],
    answer: "A",
    explanation: "Notice $a = 1$ and $b = -1$, so $a + b = 1 + (-1) = 0$. Since $a + b = 0$, the lines are mutually perpendicular regardless of the value of $k$, so $\\theta = 90^\\circ$."
  },
  {
    prompt: "The product of the perpendicular distances from the origin to the lines $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$ is:",
    options: [
      "$\\frac{|c|}{\\sqrt{(a - b)^2 + 4h^2}}$",
      "$\\frac{c}{a + b}$",
      "$\\frac{c}{\\sqrt{a^2 + b^2}}$",
      "$\\frac{|c|}{h^2 - ab}$"
    ],
    answer: "A",
    explanation: "If the lines are $l_1 x + m_1 y + n_1 = 0$ and $l_2 x + m_2 y + n_2 = 0$, the product of distances from $(0,0)$ is $\\frac{|n_1 n_2|}{\\sqrt{(l_1^2 + m_1^2)(l_2^2 + m_2^2)}} = \\frac{|c|}{\\sqrt{(a - b)^2 + 4h^2}}$."
  },
  {
    prompt: "If $h^2 - ab < 0$, the equation $ax^2 + 2hxy + by^2 = 0$ represents:",
    options: [
      "An imaginary pair of lines with a real intersection at $(0,0)$ (a single point)",
      "Two distinct real lines",
      "A circle",
      "A parabola"
    ],
    answer: "A",
    explanation: "When $h^2 - ab < 0$, the slopes are complex conjugates, meaning the locus consists of two imaginary lines intersecting at the unique real point $(0, 0)$."
  },
  {
    prompt: "The lines $3x^2 - 8xy - 3y^2 = 0$ are:",
    options: [
      "Perpendicular",
      "Coincident",
      "Parallel and non-coincident",
      "Imaginary"
    ],
    answer: "A",
    explanation: "Here $a = 3, b = -3$. The sum $a + b = 3 + (-3) = 0$. Therefore, the lines are perpendicular."
  },
  {
    prompt: "The distance between the parallel pair of straight lines represented by $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$ (with $h^2 = ab$) is:",
    options: [
      "$2\\sqrt{\\frac{g^2 - ac}{a(a + b)}}$",
      "$\\frac{|g - f|}{\\sqrt{a + b}}$",
      "$\\frac{2c}{\\sqrt{a^2 + b^2}}$",
      "$\\sqrt{\\frac{g^2 + f^2}{ab}}$"
    ],
    answer: "A",
    explanation: "For parallel lines ($h^2 = ab$), the constant distance between them is given by $d = 2\\sqrt{\\frac{g^2 - ac}{a(a + b)}} = 2\\sqrt{\\frac{f^2 - bc}{b(a + b)}}$."
  },
  {
    prompt: "The condition that one of the lines given by $ax^2 + 2hxy + by^2 = 0$ is perpendicular to one of the lines given by $a'x^2 + 2h'xy + b'y^2 = 0$ is:",
    options: [
      "$(aa' - bb')^2 + 4(ah' + hb')(ha' + bh') = 0$",
      "$ab' + a'b = 0$",
      "$h = h'$ and $a = a'$",
      "$(a + b)(a' + b') = 0$"
    ],
    answer: "A",
    explanation: "This follows from substituting $m = -1/m'$ into the characteristic quadratic equations and taking the resultant."
  }
];

// ═══════════════════════════════════════════════════════════════════════════
// MODULE B — Circle & Conic Tangents/Normals
// ═══════════════════════════════════════════════════════════════════════════

export const CIRCLES_P1_QUIZ = [
  {
    prompt: "What are the center and radius of the circle $x^2 + y^2 - 6x + 8y - 11 = 0$?",
    options: [
      "Center $(3, -4)$, radius $6$",
      "Center $(-3, 4)$, radius $6$",
      "Center $(3, -4)$, radius $36$",
      "Center $(-6, 8)$, radius $\\sqrt{11}$"
    ],
    answer: "A",
    explanation: "General form: $2g = -6 \\implies g = -3$, $2f = 8 \\implies f = 4$, $c = -11$. Center $(-g, -f) = (3, -4)$. Radius $r = \\sqrt{g^2 + f^2 - c} = \\sqrt{(-3)^2 + 4^2 - (-11)} = \\sqrt{9 + 16 + 11} = \\sqrt{36} = 6$."
  },
  {
    prompt: "The parametric equations of the circle $(x - 2)^2 + (y + 5)^2 = 16$ are:",
    options: [
      "$x = 2 + 4\\cos\\theta, y = -5 + 4\\sin\\theta$",
      "$x = -2 + 4\\cos\\theta, y = 5 + 4\\sin\\theta$",
      "$x = 2 + 16\\cos\\theta, y = -5 + 16\\sin\\theta$",
      "$x = 4\\cos\\theta, y = 4\\sin\\theta$"
    ],
    answer: "A",
    explanation: "For $(x - h)^2 + (y - k)^2 = r^2$, the parametric form is $x = h + r\\cos\\theta$ and $y = k + r\\sin\\theta$. Here $h = 2, k = -5, r = 4$."
  },
  {
    prompt: "How many non-collinear points uniquely determine a circle in the Cartesian plane?",
    options: ["$3$", "$2$", "$4$", "$1$"],
    answer: "A",
    explanation: "Any three non-collinear points $A, B, C$ uniquely determine a circle (the circumcircle of $\\triangle ABC$), because the perpendicular bisectors of the chords meet at a unique circumcenter."
  },
  {
    prompt: "What is the position of the point $(4, 5)$ relative to the circle $x^2 + y^2 - 4x - 6y + 4 = 0$?",
    options: [
      "Inside the circle",
      "Outside the circle",
      "On the circle",
      "At the center"
    ],
    answer: "A",
    explanation: "Evaluate $S_1 = 4^2 + 5^2 - 4(4) - 6(5) + 4 = 16 + 25 - 16 - 30 + 4 = -1 < 0$. Since $S_1 < 0$, the point lies inside the circle."
  },
  {
    prompt: "The equation of the circle having $(x_1, y_1)$ and $(x_2, y_2)$ as endpoints of a diameter is:",
    options: [
      "$(x - x_1)(x - x_2) + (y - y_1)(y - y_2) = 0$",
      "$(x - x_1)^2 + (y - y_2)^2 = 0$",
      "$(x + x_1)(x + x_2) + (y + y_1)(y + y_2) = 0$",
      "$\\frac{x - x_1}{x_2 - x_1} + \\frac{y - y_1}{y_2 - y_1} = 1$"
    ],
    answer: "A",
    explanation: "If $P(x, y)$ is on the circle, the angle subtended by the diameter is $90^\\circ$. The product of slopes is $-1$: $\\frac{y - y_1}{x - x_1} \\cdot \\frac{y - y_2}{x - x_2} = -1 \\implies (x - x_1)(x - x_2) + (y - y_1)(y - y_2) = 0$."
  },
  {
    prompt: "What is the equation of the circle passing through the points $(0, 0)$, $(4, 0)$, and $(0, 6)$?",
    options: [
      "$x^2 + y^2 - 4x - 6y = 0$",
      "$x^2 + y^2 + 4x + 6y = 0$",
      "$x^2 + y^2 - 2x - 3y = 0$",
      "$x^2 + y^2 - 8x - 12y = 0$"
    ],
    answer: "A",
    explanation: "Since $\\triangle(4,0)(0,0)(0,6)$ is a right triangle at the origin, the hypotenuse from $(4,0)$ to $(0,6)$ is a diameter. By diameter form: $(x - 4)(x - 0) + (y - 0)(y - 6) = 0 \\implies x^2 + y^2 - 4x - 6y = 0$."
  },
  {
    prompt: "For a real circle, the condition on the coefficients of $x^2 + y^2 + 2gx + 2fy + c = 0$ is:",
    options: [
      "$g^2 + f^2 - c > 0$",
      "$g^2 + f^2 - c < 0$",
      "$g^2 + f^2 + c = 0$",
      "$g = f = c$"
    ],
    answer: "A",
    explanation: "The radius is $r = \\sqrt{g^2 + f^2 - c}$. For a real circle of non-zero radius, the term under the square root must be strictly positive ($g^2 + f^2 - c > 0$)."
  },
  {
    prompt: "What is the center of the circle $3x^2 + 3y^2 - 12x + 18y - 1 = 0$?",
    options: [
      "$(2, -3)$",
      "$(-2, 3)$",
      "$(4, -6)$",
      "$(6, -9)$"
    ],
    answer: "A",
    explanation: "Divide through by $3$ to put into standard general form: $x^2 + y^2 - 4x + 6y - 1/3 = 0$. Here $2g = -4 \\implies g = -2$, and $2f = 6 \\implies f = 3$. The center is $(-g, -f) = (2, -3)$."
  },
  {
    prompt: "What is the radius of the circle given by $x^2 + y^2 + 6x - 8y + 25 = 0$?",
    options: ["$0$ (point circle)", "$5$", "$\\sqrt{50}$", "$25$"],
    answer: "A",
    explanation: "$g = 3, f = -4, c = 25$. Radius $r = \\sqrt{g^2 + f^2 - c} = \\sqrt{3^2 + (-4)^2 - 25} = \\sqrt{9 + 16 - 25} = \\sqrt{0} = 0$. This is a degenerate point circle located at $(-3, 4)$."
  },
  {
    prompt: "The intercept cut off by the circle $x^2 + y^2 + 2gx + 2fy + c = 0$ on the $x$-axis has length:",
    options: [
      "$2\\sqrt{g^2 - c}$",
      "$2\\sqrt{f^2 - c}$",
      "$\\sqrt{g^2 - c}$",
      "$2\\sqrt{g^2 + f^2}$"
    ],
    answer: "A",
    explanation: "Set $y = 0$: $x^2 + 2gx + c = 0$. The roots $x_1, x_2$ satisfy $|x_1 - x_2| = \\sqrt{(x_1 + x_2)^2 - 4x_1 x_2} = \\sqrt{4g^2 - 4c} = 2\\sqrt{g^2 - c}$."
  },
  {
    prompt: "If a circle touches the $x$-axis, which condition holds?",
    options: ["$g^2 = c$", "$f^2 = c$", "$g^2 + f^2 = c$", "$c = 0$"],
    answer: "A",
    explanation: "Touching the $x$-axis means the $x$-intercept is zero: $2\\sqrt{g^2 - c} = 0 \\implies g^2 = c$."
  },
  {
    prompt: "If a circle touches the $y$-axis, which condition holds?",
    options: ["$f^2 = c$", "$g^2 = c$", "$c = 0$", "$f = 0$"],
    answer: "A",
    explanation: "Touching the $y$-axis means the $y$-intercept is zero: $2\\sqrt{f^2 - c} = 0 \\implies f^2 = c$."
  },
  {
    prompt: "The locus of points $(x, y)$ whose distance from $(1, 2)$ is twice their distance from $(4, 5)$ is:",
    options: [
      "A circle (Circle of Apollonius)",
      "A straight line",
      "A parabola",
      "An ellipse"
    ],
    answer: "A",
    explanation: "The locus of points with a constant ratio $k \\neq 1$ of distances to two fixed points is always a circle, known as the Circle of Apollonius."
  },
  {
    prompt: "Find the equation of the circle concentric with $x^2 + y^2 - 4x + 6y - 1 = 0$ and passing through $(1, -1)$.",
    options: [
      "$x^2 + y^2 - 4x + 6y + 8 = 0$",
      "$x^2 + y^2 - 4x + 6y + 4 = 0$",
      "$x^2 + y^2 - 4x + 6y - 8 = 0$",
      "$x^2 + y^2 - 2x + 3y + 5 = 0$"
    ],
    answer: "A",
    explanation: "Concentric means identical $g$ and $f$: $x^2 + y^2 - 4x + 6y + k = 0$. Substitute $(1, -1)$: $1^2 + (-1)^2 - 4(1) + 6(-1) + k = 0 \\implies 1 + 1 - 4 - 6 + k = 0 \\implies -8 + k = 0 \\implies k = 8$. Thus $x^2 + y^2 - 4x + 6y + 8 = 0$."
  },
  {
    prompt: "What is the parametric angle $\\theta$ for the point $(-r, 0)$ on the circle $x^2 + y^2 = r^2$?",
    options: ["$\\pi$ ($180^\\circ$)", "$0$", "$\\pi/2$", "$3\\pi/2$"],
    answer: "A",
    explanation: "$x = r\\cos\\theta = -r \\implies \\cos\\theta = -1$, and $y = r\\sin\\theta = 0 \\implies \\sin\\theta = 0$. Hence $\\theta = \\pi$."
  }
];

export const CIRCLES_P2_QUIZ = [
  {
    prompt: "The equation of the tangent to the circle $x^2 + y^2 = 25$ at the point $(3, 4)$ is:",
    options: ["$3x + 4y = 25$", "$4x + 3y = 25$", "$3x - 4y = 25$", "$3x + 4y = 5$"],
    answer: "A",
    explanation: "Using the $T = 0$ substitution rule: replace $x^2 \\to xx_1$ and $y^2 \\to yy_1$. For point $(3, 4)$: $x(3) + y(4) = 25 \\implies 3x + 4y = 25$."
  },
  {
    prompt: "Under what condition is the line $y = mx + c$ tangent to the circle $x^2 + y^2 = r^2$?",
    options: [
      "$c^2 = r^2(1 + m^2)$",
      "$c = r(1 + m)$",
      "$c^2 = r^2(1 - m^2)$",
      "$c^2 = r^2 m^2$"
    ],
    answer: "A",
    explanation: "The perpendicular distance from center $(0,0)$ to $mx - y + c = 0$ must equal the radius $r$: $\\frac{|c|}{\\sqrt{1 + m^2}} = r \\implies c^2 = r^2(1 + m^2)$."
  },
  {
    prompt: "For the parabola $y^2 = 4ax$, what is the condition for $y = mx + c$ to be a tangent line?",
    options: ["$c = a/m$", "$c = am$", "$c = a/m^2$", "$c^2 = 4am$"],
    answer: "A",
    explanation: "Substitute $y = mx + c$ into $y^2 = 4ax$: $(mx+c)^2 = 4ax \\implies m^2 x^2 + 2(mc - 2a)x + c^2 = 0$. Setting discriminant $\\Delta = 0$ gives $4(mc - 2a)^2 - 4m^2 c^2 = 0 \\implies -16amc + 16a^2 = 0 \\implies c = a/m$."
  },
  {
    prompt: "For the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, the condition of tangency for $y = mx + c$ is:",
    options: [
      "$c^2 = a^2 m^2 + b^2$",
      "$c^2 = a^2 m^2 - b^2$",
      "$c^2 = a^2 + b^2 m^2$",
      "$c = am + b$"
    ],
    answer: "A",
    explanation: "Standard condition of tangency for an ellipse: $c = \\pm\\sqrt{a^2 m^2 + b^2}$, so $c^2 = a^2 m^2 + b^2$."
  },
  {
    prompt: "For the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, the condition of tangency for $y = mx + c$ is:",
    options: [
      "$c^2 = a^2 m^2 - b^2$",
      "$c^2 = a^2 m^2 + b^2$",
      "$c^2 = b^2 m^2 - a^2$",
      "$c = a/m - b$"
    ],
    answer: "A",
    explanation: "For the hyperbola, the sign of $b^2$ is negated: $c^2 = a^2 m^2 - b^2$ (requiring $|m| > b/a$ for real tangents)."
  },
  {
    prompt: "What is the length of the tangent drawn from the external point $(5, 7)$ to the circle $x^2 + y^2 - 4x - 6y + 4 = 0$?",
    options: ["$\\sqrt{16} = 4$", "$\\sqrt{12}$", "$5$", "$\\sqrt{20}$"],
    answer: "A",
    explanation: "Length of tangent $L = \\sqrt{S_1} = \\sqrt{x_1^2 + y_1^2 + 2gx_1 + 2fy_1 + c} = \\sqrt{5^2 + 7^2 - 4(5) - 6(7) + 4} = \\sqrt{25 + 49 - 20 - 42 + 4} = \\sqrt{16} = 4$."
  },
  {
    prompt: "What is the equation of the director circle of the circle $x^2 + y^2 = r^2$?",
    options: [
      "$x^2 + y^2 = 2r^2$",
      "$x^2 + y^2 = 4r^2$",
      "$x^2 + y^2 = r^2/2$",
      "$x^2 + y^2 = \\sqrt{2}r$"
    ],
    answer: "A",
    explanation: "The director circle is the locus of intersection points of mutually perpendicular tangents. For a circle of radius $r$, the tangents meet at distance $\\sqrt{r^2 + r^2} = r\\sqrt{2}$ from the center, so $x^2 + y^2 = 2r^2$."
  },
  {
    prompt: "What is the director circle of the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$?",
    options: [
      "$x^2 + y^2 = a^2 + b^2$",
      "$x^2 + y^2 = a^2 - b^2$",
      "$x^2 + y^2 = 2(a^2 + b^2)$",
      "$x^2 + y^2 = ab$"
    ],
    answer: "A",
    explanation: "The locus of perpendicular tangents to an ellipse is the director circle $x^2 + y^2 = a^2 + b^2$."
  },
  {
    prompt: "What is the director circle (or locus of perpendicular tangents) for the parabola $y^2 = 4ax$?",
    options: [
      "The directrix $x = -a$",
      "The line $x = a$",
      "The circle $x^2 + y^2 = a^2$",
      "The $y$-axis $x = 0$"
    ],
    answer: "A",
    explanation: "A famous property of parabolas: perpendicular tangents always intersect on the directrix $x = -a$ (which can be considered a degenerate director circle with infinite radius)."
  },
  {
    prompt: "What is the equation of the chord of contact of tangents drawn from an external point $(x_1, y_1)$ to the circle $x^2 + y^2 = r^2$?",
    options: ["$xx_1 + yy_1 = r^2$ ($T = 0$)", "$xx_1 - yy_1 = r^2$", "$x/x_1 + y/y_1 = 1$", "$(x - x_1)^2 + (y - y_1)^2 = r^2$"],
    answer: "A",
    explanation: "The chord of contact connecting the two points of tangency has the identical algebraic form as the tangent line: $T = 0$, i.e. $xx_1 + yy_1 = r^2$."
  },
  {
    prompt: "The normal to a circle at any point always passes through:",
    options: [
      "The center of the circle",
      "The origin $(0, 0)$",
      "The focus",
      "The director circle"
    ],
    answer: "A",
    explanation: "The normal is perpendicular to the tangent at the point of contact. For any circle, the radius is perpendicular to the tangent, so the normal line along the radius always passes through the center."
  },
  {
    prompt: "What is the equation of the normal to $x^2 + y^2 = 25$ at $(3, 4)$?",
    options: ["$4x - 3y = 0$", "$3x + 4y = 25$", "$3x - 4y = 0$", "$4x + 3y = 0$"],
    answer: "A",
    explanation: "The tangent is $3x + 4y = 25$ with slope $m = -3/4$. The normal line has perpendicular slope $m_N = 4/3$ and passes through center $(0,0)$: $y = \\frac{4}{3}x \\implies 4x - 3y = 0$."
  },
  {
    prompt: "How many real tangents can be drawn to a circle from a point $(x_1, y_1)$ lying inside the circle ($S_1 < 0$)?",
    options: ["$0$", "$1$", "$2$", "Infinitely many"],
    answer: "A",
    explanation: "From any point strictly inside a circle, no real tangent can be drawn (both tangent slopes are complex numbers)."
  },
  {
    prompt: "The slope of the tangent to the parabola $y^2 = 8x$ at $(2, 4)$ is:",
    options: ["$1$", "$2$", "$1/2$", "$4$"],
    answer: "A",
    explanation: "Differentiate implicitly: $2y \\frac{dy}{dx} = 8 \\implies \\frac{dy}{dx} = \\frac{4}{y}$. At $(2, 4)$, $m = \\frac{4}{4} = 1$."
  },
  {
    prompt: "What is the director circle of the hyperbola $\\frac{x^2}{25} - \\frac{y^2}{9} = 1$?",
    options: [
      "$x^2 + y^2 = 16$",
      "$x^2 + y^2 = 34$",
      "$x^2 + y^2 = 25$",
      "$x^2 + y^2 = 9$"
    ],
    answer: "A",
    explanation: "For a hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, the director circle is $x^2 + y^2 = a^2 - b^2$. Here $a^2 = 25, b^2 = 9$, so $x^2 + y^2 = 25 - 9 = 16$."
  }
];

// ═══════════════════════════════════════════════════════════════════════════
// MODULE C — Advanced Single-Variable Calculus & Applied Analysis
// ═══════════════════════════════════════════════════════════════════════════

export const ADVCALC_P1_QUIZ = [
  {
    prompt: "In the formal $\\varepsilon$-$\\delta$ proof that $\\lim_{x \\to 3} (4x - 5) = 7$, which $\\delta$ guarantees $|f(x) - 7| < \\varepsilon$?",
    options: ["$\\delta = \\varepsilon / 4$", "$\\delta = 4\\varepsilon$", "$\\delta = \\varepsilon / 2$", "$\\delta = \\varepsilon$"],
    answer: "A",
    explanation: "$|f(x) - 7| = |(4x - 5) - 7| = |4x - 12| = 4|x - 3|$. To have $4|x - 3| < \\varepsilon$, we require $|x - 3| < \\varepsilon / 4$. Thus choosing $\\delta = \\varepsilon / 4$ completes the proof."
  },
  {
    prompt: "What type of discontinuity does $f(x) = \\frac{x^2 - 16}{x - 4}$ have at $x = 4$?",
    options: ["Removable discontinuity", "Jump discontinuity", "Infinite discontinuity", "Oscillating discontinuity"],
    answer: "A",
    explanation: "The two-sided limit $\\lim_{x \\to 4} \\frac{(x-4)(x+4)}{x-4} = 8$ exists, but $f(4)$ is undefined. Because the limit exists, the hole can be 'removed' by defining $f(4) = 8$."
  },
  {
    prompt: "What type of discontinuity does $f(x) = \\sin(1/x)$ have at $x = 0$?",
    options: ["Essential / Oscillating discontinuity", "Removable discontinuity", "Jump discontinuity", "Infinite discontinuity"],
    answer: "A",
    explanation: "As $x \\to 0$, $1/x \\to \\pm\\infty$ and $\\sin(1/x)$ oscillates infinitely often between $-1$ and $+1$ without approaching any single value. This is an essential oscillating discontinuity."
  },
  {
    prompt: "What are the three hypotheses of Rolle's Theorem on $[a, b]$?",
    options: [
      "Continuous on $[a, b]$, differentiable on $(a, b)$, and $f(a) = f(b)$",
      "Continuous on $(a, b)$ and $f(a) = 0$",
      "Differentiable on $[a, b]$ and $f'(a) = f'(b)$",
      "Continuous on $[a, b]$ and $f(a) \\cdot f(b) < 0$"
    ],
    answer: "A",
    explanation: "Rolle's Theorem requires $f$ continuous on $[a, b]$, differentiable on $(a, b)$, and $f(a) = f(b)$. Under these three conditions, $\\exists c \\in (a, b)$ such that $f'(c) = 0$."
  },
  {
    prompt: "If $y = x^x$ for $x > 0$, what is $\\frac{dy}{dx}$ via logarithmic differentiation?",
    options: ["$x^x (1 + \\ln x)$", "$x \\cdot x^{x-1}$", "$x^x \\ln x$", "$x^x / x$"],
    answer: "A",
    explanation: "Take $\\ln$: $\\ln y = x \\ln x$. Differentiate with respect to $x$: $\\frac{1}{y}\\frac{dy}{dx} = (1)\\ln x + x(1/x) = \\ln x + 1$. Multiply by $y$: $\\frac{dy}{dx} = x^x(1 + \\ln x)$."
  },
  {
    prompt: "A curve is defined parametrically by $x = t^3 - 3t$ and $y = 3t^2$. What is $\\frac{dy}{dx}$ at $t = 2$?",
    options: ["$4/3$", "$2$", "$3/4$", "$12/9$"],
    answer: "A",
    explanation: "$\\frac{dx}{dt} = 3t^2 - 3$ and $\\frac{dy}{dt} = 6t$. Then $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{6t}{3t^2 - 3} = \\frac{2t}{t^2 - 1}$. At $t = 2$: $\\frac{2(2)}{2^2 - 1} = \\frac{4}{3}$."
  },
  {
    prompt: "For parametric functions, the second derivative $\\frac{d^2y}{dx^2}$ is given by:",
    options: [
      "$\\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}}$",
      "$\\frac{y''(t)}{x''(t)}$",
      "$\\frac{x'(t)y''(t) - y'(t)x''(t)}{[y'(t)]^2}$",
      "$\\frac{d^2y/dt^2}{d^2x/dt^2}$"
    ],
    answer: "A",
    explanation: "Chain rule on the first derivative: $\\frac{d^2y}{dx^2} = \\frac{d}{dx}\\left(\\frac{dy}{dx}\\right) = \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}}$."
  },
  {
    prompt: "The Intermediate Value Theorem (IVT) states that if $f$ is continuous on $[a, b]$ and $u$ is strictly between $f(a)$ and $f(b)$, then:",
    options: [
      "$\\exists c \\in (a, b)$ such that $f(c) = u$",
      "$f'(c) = 0$ for some $c$",
      "$f$ must attain a global maximum at $u$",
      "$f$ must be monotonic"
    ],
    answer: "A",
    explanation: "The IVT guarantees that a continuous function achieves every intermediate value between $f(a)$ and $f(b)$ at least once on $(a, b)$."
  },
  {
    prompt: "The Extreme Value Theorem (EVT) requires the domain of $f$ to be:",
    options: [
      "A closed and bounded interval $[a, b]$",
      "An open interval $(a, b)$",
      "The entire real line $\\mathbb{R}$",
      "Any set where $f'(x) \\neq 0$"
    ],
    answer: "A",
    explanation: "By the EVT (Weierstrass Theorem), a continuous function on a closed and bounded (compact) set $[a, b]$ is guaranteed to attain both a global maximum and minimum."
  },
  {
    prompt: "If $y = (\\sin x)^{\\cos x}$, what is $\\frac{dy}{dx}$?",
    options: [
      "$(\\sin x)^{\\cos x} [\\cos x \\cot x - \\sin x \\ln(\\sin x)]$",
      "$(\\cos x)(\\sin x)^{\\cos x - 1}$",
      "$(\\sin x)^{\\cos x} \\ln(\\sin x)$",
      "$(\\sin x)^{\\cos x} [\\sin x - \\cos x]$"
    ],
    answer: "A",
    explanation: "$\\ln y = \\cos x \\ln(\\sin x) \\implies \\frac{y'}{y} = -\\sin x \\ln(\\sin x) + \\cos x \\frac{\\cos x}{\\sin x} = \\cos x \\cot x - \\sin x \\ln(\\sin x)$."
  },
  {
    prompt: "What is $\\lim_{x \\to 0^+} x^x$?",
    options: ["$1$", "$0$", "$e$", "$\\infty$"],
    answer: "A",
    explanation: "Indeterminate form $0^0$. Let $L = \\lim x^x \\implies \\ln L = \\lim_{x \\to 0^+} x\\ln x = \\lim_{x \\to 0^+} \\frac{\\ln x}{1/x} \\overset{H}{=} \\lim \\frac{1/x}{-1/x^2} = \\lim(-x) = 0$. Since $\\ln L = 0$, $L = e^0 = 1$."
  },
  {
    prompt: "Which of the following functions has a jump discontinuity at $x = 0$?",
    options: [
      "$f(x) = \\frac{|x|}{x}$ for $x \\neq 0$",
      "$f(x) = 1/x^2$",
      "$f(x) = x^2$",
      "$f(x) = \\frac{x}{x}$"
    ],
    answer: "A",
    explanation: "For $x > 0$, $|x|/x = 1$; for $x < 0$, $|x|/x = -1$. The left-hand limit is $-1$ and the right-hand limit is $+1$. Since both one-sided limits exist but differ, it is a jump discontinuity."
  },
  {
    prompt: "Evaluate $\\frac{d}{dx} [\\ln(x^2 + 1)]^3$.",
    options: [
      "$\\frac{6x[\\ln(x^2 + 1)]^2}{x^2 + 1}$",
      "$\\frac{3[\\ln(x^2 + 1)]^2}{x^2 + 1}$",
      "$3[\\ln(x^2 + 1)]^2$",
      "$\\frac{2x}{x^2 + 1}$"
    ],
    answer: "A",
    explanation: "By chain rule: $3[\\ln(x^2 + 1)]^2 \\cdot \\frac{d}{dx}[\\ln(x^2 + 1)] = 3[\\ln(x^2 + 1)]^2 \\cdot \\frac{2x}{x^2 + 1} = \\frac{6x[\\ln(x^2 + 1)]^2}{x^2 + 1}$."
  },
  {
    prompt: "For a function $f(x) = x^3 - 3x$ on $[0, \\sqrt{3}]$, does Rolle's Theorem apply?",
    options: [
      "Yes, and $c = 1$",
      "No, because $f(0) \\neq f(\\sqrt{3})$",
      "Yes, and $c = 0$",
      "No, because $f$ is not differentiable"
    ],
    answer: "A",
    explanation: "$f(0) = 0$ and $f(\\sqrt{3}) = 3\\sqrt{3} - 3\\sqrt{3} = 0$, and polynomials are smooth everywhere. $f'(x) = 3x^2 - 3 = 0 \\implies x^2 = 1 \\implies c = 1 \\in (0, \\sqrt{3})$."
  },
  {
    prompt: "Cauchy's Mean Value Theorem generalizes standard MVT by asserting that for continuous $f, g$ on $[a, b]$ and differentiable on $(a, b)$ with $g'(x) \\neq 0$:",
    options: [
      "$\\frac{f'(c)}{g'(c)} = \\frac{f(b) - f(a)}{g(b) - g(a)}$ for some $c \\in (a, b)$",
      "$f'(c)g'(c) = 1$",
      "$f(c)g(c) = f(a)g(b)$",
      "$\\frac{f(b) - f(a)}{b - a} = g'(c)$"
    ],
    answer: "A",
    explanation: "Cauchy's MVT (the foundation for proving L'Hopital's rule) states that $\\frac{f'(c)}{g'(c)} = \\frac{f(b) - f(a)}{g(b) - g(a)}$ for some $c \\in (a, b)$."
  }
];

export const ADVCALC_P2_QUIZ = [
  {
    prompt: "What is the derivative of $\\sinh(3x)$?",
    options: ["$3\\cosh(3x)$", "$\\cosh(3x)$", "$-3\\cosh(3x)$", "$3\\sinh(3x)$"],
    answer: "A",
    explanation: "Standard hyperbolic derivative: $\\frac{d}{dx}[\\sinh(u)] = \\cosh(u) \\frac{du}{dx}$. Here $u = 3x$, so $3\\cosh(3x)$."
  },
  {
    prompt: "Which fundamental identity connects $\\cosh x$ and $\\sinh x$?",
    options: [
      "$\\cosh^2 x - \\sinh^2 x = 1$",
      "$\\cosh^2 x + \\sinh^2 x = 1$",
      "$\\sinh^2 x - \\cosh^2 x = 1$",
      "$\\cosh x + \\sinh x = 1$"
    ],
    answer: "A",
    explanation: "From definitions $\\cosh x = \\frac{e^x + e^{-x}}{2}$ and $\\sinh x = \\frac{e^x - e^{-x}}{2}$, squaring and subtracting yields $\\cosh^2 x - \\sinh^2 x = 1$."
  },
  {
    prompt: "Evaluate $\\lim_{x \\to 0} \\frac{\\cosh x - 1}{x^2}$.",
    options: ["$1/2$", "$0$", "$1$", "$\\infty$"],
    answer: "A",
    explanation: "Form $0/0$. Apply L'Hopital: $\\lim_{x \\to 0} \\frac{\\sinh x}{2x} = \\frac{1}{2}\\lim_{x \\to 0}\\frac{\\sinh x}{x} = \\frac{1}{2}(1) = 1/2$."
  },
  {
    prompt: "What is the curvature $\\kappa$ of a straight line $y = mx + c$?",
    options: ["$0$", "$m$", "$\\infty$", "$1$"],
    answer: "A",
    explanation: "Curvature $\\kappa(x) = \\frac{|y''|}{(1 + (y')^2)^{3/2}}$. For a line, $y' = m$ and $y'' = 0$, so $\\kappa = 0$. A straight line has zero bending."
  },
  {
    prompt: "What is the curvature $\\kappa$ of a circle of radius $R$?",
    options: ["$1/R$", "$R$", "$1/R^2$", "$2\\pi R$"],
    answer: "A",
    explanation: "Curvature of a circle is constant and inversely proportional to its radius: $\\kappa = 1/R$. The radius of curvature is $\\rho = 1/\\kappa = R$."
  },
  {
    prompt: "The arc length of a smooth curve $y = f(x)$ from $x = a$ to $x = b$ is given by:",
    options: [
      "$\\int_a^b \\sqrt{1 + [f'(x)]^2}\\,dx$",
      "$\\int_a^b [1 + f'(x)]\\,dx$",
      "$\\int_a^b \\sqrt{1 + [f(x)]^2}\\,dx$",
      "$\\int_a^b \\sqrt{x^2 + y^2}\\,dx$"
    ],
    answer: "A",
    explanation: "By the Pythagorean arc element $ds = \\sqrt{dx^2 + dy^2} = \\sqrt{1 + (dy/dx)^2}\\,dx$, arc length $L = \\int_a^b \\sqrt{1 + [f'(x)]^2}\\,dx$."
  },
  {
    prompt: "What is the surface area generated by rotating $y = f(x) \\ge 0$ about the $x$-axis from $a$ to $b$?",
    options: [
      "$2\\pi \\int_a^b y \\sqrt{1 + (y')^2}\\,dx$",
      "$\\pi \\int_a^b y^2\\,dx$",
      "$2\\pi \\int_a^b x \\sqrt{1 + (y')^2}\\,dx$",
      "$\\int_a^b 2\\pi y\\,dx$"
    ],
    answer: "A",
    explanation: "The surface element is a frustum strip of circumference $2\\pi y$ and slant width $ds = \\sqrt{1 + (y')^2}\\,dx$, yielding $S = 2\\pi \\int_a^b y\\sqrt{1 + (y')^2}\\,dx$."
  },
  {
    prompt: "What is the curvature of the parabola $y = x^2$ at the vertex $(0, 0)$?",
    options: ["$2$", "$1$", "$4$", "$1/2$"],
    answer: "A",
    explanation: "$y' = 2x \\implies y'(0) = 0$. $y'' = 2$. $\\kappa(0) = \\frac{|y''|}{(1 + (y')^2)^{3/2}} = \\frac{2}{(1 + 0)^{3/2}} = 2$."
  },
  {
    prompt: "For a spring following Hooke's Law $F(x) = kx$, how much work is done in stretching it from $x = 0$ to $x = L$?",
    options: ["$\\frac{1}{2}k L^2$", "$k L$", "$k L^2$", "$\\frac{1}{3}k L^3$"],
    answer: "A",
    explanation: "Work $W = \\int_0^L F(x)\\,dx = \\int_0^L kx\\,dx = \\left[\\frac{1}{2}kx^2\\right]_0^L = \\frac{1}{2}kL^2$."
  },
  {
    prompt: "The $x$-coordinate of the centroid of a planar lamina of uniform density bounded by $y = f(x) \\ge 0$ above $[a, b]$ is:",
    options: [
      "$\\bar{x} = \\frac{1}{A} \\int_a^b x f(x)\\,dx$",
      "$\\bar{x} = \\frac{1}{2A} \\int_a^b [f(x)]^2\\,dx$",
      "$\\bar{x} = \\frac{a + b}{2}$",
      "$\\bar{x} = \\int_a^b x^2 f(x)\\,dx$"
    ],
    answer: "A",
    explanation: "Moment with respect to the $y$-axis is $M_y = \\int_a^b x f(x)\\,dx$. Dividing by total area $A = \\int_a^b f(x)\\,dx$ gives $\\bar{x} = M_y / A$."
  },
  {
    prompt: "The $y$-coordinate of the centroid $\\bar{y}$ of the lamina above is:",
    options: [
      "$\\bar{y} = \\frac{1}{2A} \\int_a^b [f(x)]^2\\,dx$",
      "$\\bar{y} = \\frac{1}{A} \\int_a^b y\\,dx$",
      "$\\bar{y} = \\frac{1}{A} \\int_a^b x f(x)\\,dx$",
      "$\\bar{y} = \\frac{1}{3A} \\int_a^b [f(x)]^3\\,dx$"
    ],
    answer: "A",
    explanation: "For a vertical strip of height $f(x)$, the centroid is at $y = f(x)/2$. The moment about the $x$-axis is $M_x = \\int_a^b \\frac{f(x)}{2} \\cdot f(x)\\,dx = \\frac{1}{2}\\int_a^b [f(x)]^2\\,dx$. Thus $\\bar{y} = M_x / A$."
  },
  {
    prompt: "Hydrostatic force exerted on a submerged vertical plate is calculated using:",
    options: [
      "$F = \\int \\rho g h(y) w(y)\\,dy$",
      "$F = \\rho g \\times \\text{Area}^2$",
      "$F = \\int \\frac{1}{2}\\rho v^2\\,dy$",
      "$F = \\rho g \\int [h(y)]^2\\,dy$"
    ],
    answer: "A",
    explanation: "Pressure at depth $h(y)$ is $P(y) = \\rho g h(y)$. Force on horizontal strip of width $w(y)$ and height $dy$ is $dF = P(y)dA = \\rho g h(y) w(y) dy$. Integrating gives $F = \\int \\rho g h(y) w(y)\\,dy$."
  },
  {
    prompt: "What is $\\int \\operatorname{sech}^2 x\\,dx$?",
    options: ["$\\tanh x + C$", "$-\\operatorname{csch} x + C$", "$\\cosh x + C$", "$\\ln(\\cosh x) + C$"],
    answer: "A",
    explanation: "Since $\\frac{d}{dx}[\\tanh x] = \\operatorname{sech}^2 x$, the antiderivative is $\\tanh x + C$."
  },
  {
    prompt: "Evaluate the indeterminate limit $\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x$.",
    options: ["$e$", "$1$", "$\\infty$", "$0$"],
    answer: "A",
    explanation: "Form $1^\\infty$. Taking natural log: $\\ln L = \\lim_{x \\to \\infty} x \\ln(1 + 1/x) = \\lim_{u \\to 0} \\frac{\\ln(1 + u)}{u} = 1$. Therefore $L = e^1 = e$."
  },
  {
    prompt: "For the parametric curve $x = r\\cos t, y = r\\sin t$, the curvature $\\kappa(t) = \\frac{|x'y'' - y'x''|}{(x'^2 + y'^2)^{3/2}}$ equals:",
    options: ["$1/r$", "$r$", "$r^2$", "$0$"],
    answer: "A",
    explanation: "$x' = -r\\sin t, x'' = -r\\cos t$, $y' = r\\cos t, y'' = -r\\sin t$. Numerator: $|(-r\\sin t)(-r\\sin t) - (r\\cos t)(-r\\cos t)| = r^2(\\sin^2 t + \\cos^2 t) = r^2$. Denominator: $(r^2\\sin^2 t + r^2\\cos^2 t)^{3/2} = (r^2)^{3/2} = r^3$. $\\kappa = r^2 / r^3 = 1/r$."
  }
];

// ═══════════════════════════════════════════════════════════════════════════
// MODULE D — Ordinary Differential Equations (ODEs)
// ═══════════════════════════════════════════════════════════════════════════

export const ODES_P1_QUIZ = [
  {
    prompt: "What is the order and degree of the differential equation $\\left(\\frac{d^2y}{dx^2}\\right)^3 + \\left(\\frac{dy}{dx}\\right)^4 + y = 0$?",
    options: [
      "Order 2, Degree 3",
      "Order 3, Degree 2",
      "Order 2, Degree 4",
      "Order 4, Degree 3"
    ],
    answer: "A",
    explanation: "Order is the highest derivative present (here $d^2y/dx^2$, so order $2$). Degree is the power of that highest derivative term after clearing fractions and radicals (here power $3$, so degree $3$)."
  },
  {
    prompt: "Which of the following is a separable differential equation?",
    options: [
      "$\\frac{dy}{dx} = x^2 y$",
      "$\\frac{dy}{dx} = x + y$",
      "$\\frac{dy}{dx} = \\sin(x + y)$",
      "$\\frac{dy}{dx} = x^2 + y^2$"
    ],
    answer: "A",
    explanation: "A separable ODE has the form $\\frac{dy}{dx} = g(x)h(y)$. Here $x^2 y = (x^2)(y)$, which can be separated as $\\frac{1}{y}\\,dy = x^2\\,dx$."
  },
  {
    prompt: "Solve the separable ODE $\\frac{dy}{dx} = \\frac{x}{y}$ with initial condition $y(0) = 3$.",
    options: ["$y^2 - x^2 = 9$", "$y^2 + x^2 = 9$", "$y = 3e^x$", "$y^2 - 2x^2 = 9$"],
    answer: "A",
    explanation: "Separate variables: $y\\,dy = x\\,dx \\implies \\int y\\,dy = \\int x\\,dx \\implies \\frac{y^2}{2} = \\frac{x^2}{2} + C \\implies y^2 - x^2 = 2C$. Using $y(0) = 3$: $3^2 - 0 = 9 \\implies 2C = 9$. Thus $y^2 - x^2 = 9$."
  },
  {
    prompt: "What substitution is used to transform a homogeneous ODE $\\frac{dy}{dx} = F(y/x)$ into a separable ODE?",
    options: ["$y = vx$", "$y = v + x$", "$y = v/x$", "$v = xy$"],
    answer: "A",
    explanation: "Setting $y = vx$ gives $\\frac{dy}{dx} = v + x\\frac{dv}{dx}$. Equating to $F(v)$ yields $x\\frac{dv}{dx} = F(v) - v$, which separates as $\\frac{dv}{F(v) - v} = \\frac{dx}{x}$."
  },
  {
    prompt: "What is the integrating factor $I(x)$ for the first-order linear ODE $\\frac{dy}{dx} + \\frac{2}{x}y = 4x$?",
    options: ["$x^2$", "$2\\ln x$", "$e^{2x}$", "$x$"],
    answer: "A",
    explanation: "$P(x) = 2/x$. Integrating factor $I(x) = e^{\\int P(x)\\,dx} = e^{\\int (2/x)\\,dx} = e^{2\\ln x} = e^{\\ln(x^2)} = x^2$."
  },
  {
    prompt: "Solve $\\frac{dy}{dx} + \\frac{2}{x}y = 4x$ for $x > 0$.",
    options: ["$y = x^2 + \\frac{C}{x^2}$", "$y = 2x^2 + C$", "$y = x^2 + C$", "$y = \\frac{4}{3}x^2 + \\frac{C}{x^2}$"],
    answer: "A",
    explanation: "Multiply by $I(x) = x^2$: $\\frac{d}{dx}[x^2 y] = 4x^3$. Integrate both sides: $x^2 y = \\int 4x^3\\,dx = x^4 + C$. Divide by $x^2$: $y = x^2 + \\frac{C}{x^2}$."
  },
  {
    prompt: "What is the solution to the population growth IVP $\\frac{dP}{dt} = kP$ with $P(0) = P_0$?",
    options: ["$P(t) = P_0 e^{kt}$", "$P(t) = P_0 + kt$", "$P(t) = \\frac{1}{2}kt^2 + P_0$", "$P(t) = P_0 \\ln(kt)$"],
    answer: "A",
    explanation: "$\\frac{1}{P}\\,dP = k\\,dt \\implies \\ln P = kt + C \\implies P(t) = e^C e^{kt} = P_0 e^{kt}$."
  },
  {
    prompt: "A differential equation is linear if:",
    options: [
      "The dependent variable $y$ and its derivatives appear only to the first power and are not multiplied together",
      "The independent variable $x$ appears to the first power only",
      "All coefficients are constants",
      "It can be written as $y = mx + c$"
    ],
    answer: "A",
    explanation: "Linearity requires that $y, y', y'', \\dots$ appear linearly with no non-linear functions (like $\\sin y, e^y, y^2$) and no products like $y y'$."
  },
  {
    prompt: "Which equation is non-linear?",
    options: [
      "$\\frac{dy}{dx} + y^2 = x$",
      "$\\frac{dy}{dx} + 3y = e^x$",
      "$x^2 \\frac{d^2y}{dx^2} + x\\frac{dy}{dx} + y = 0$",
      "$\\frac{dy}{dx} + \\sin(x)y = \\cos x$"
    ],
    answer: "A",
    explanation: "The term $y^2$ is non-linear in the dependent variable $y$, making the entire differential equation non-linear."
  },
  {
    prompt: "What is the integrating factor for $\\frac{dy}{dx} - 3y = 6$?",
    options: ["$e^{-3x}$", "$e^{3x}$", "$-3x$", "$3e^x$"],
    answer: "A",
    explanation: "$P(x) = -3$. Integrating factor $I(x) = e^{\\int (-3)\\,dx} = e^{-3x}$."
  },
  {
    prompt: "Solve the homogeneous ODE $\\frac{dy}{dx} = \\frac{y}{x} + 1$.",
    options: ["$y = x\\ln|x| + Cx$", "$y = x + C$", "$y = \\ln x + C$", "$y = Cx^2$"],
    answer: "A",
    explanation: "Substitute $y = vx \\implies v + x\\frac{dv}{dx} = v + 1 \\implies x\\frac{dv}{dx} = 1 \\implies dv = \\frac{dx}{x}$. Integrating gives $v = \\ln|x| + C$. Since $v = y/x$, $y = x\\ln|x| + Cx$."
  },
  {
    prompt: "According to Newton's Law of Cooling, the rate of change of temperature $T(t)$ in ambient medium $T_m$ is:",
    options: [
      "$\\frac{dT}{dt} = -k(T - T_m)$",
      "$\\frac{dT}{dt} = -k(T + T_m)$",
      "$\\frac{dT}{dt} = k(T - T_m)^2$",
      "$\\frac{dT}{dt} = -k T$"
    ],
    answer: "A",
    explanation: "Newton's cooling law states that rate of heat transfer is directly proportional to the temperature difference: $\\frac{dT}{dt} = -k(T - T_m)$ with $k > 0$."
  },
  {
    prompt: "Solve $dy - (2x + 1)dx = 0$ with $y(0) = 2$.",
    options: ["$y = x^2 + x + 2$", "$y = x^2 + x$", "$y = 2x^2 + x + 2$", "$y = x^2 + 2x + 2$"],
    answer: "A",
    explanation: "$dy = (2x + 1)dx \\implies y = \\int (2x + 1)\\,dx = x^2 + x + C$. At $x = 0, y = 2 \\implies C = 2$. Thus $y = x^2 + x + 2$."
  },
  {
    prompt: "Picard's Existence and Uniqueness Theorem requires $f(x, y)$ and $\\frac{\\partial f}{\\partial y}$ to be:",
    options: [
      "Continuous on a rectangle containing the initial point $(x_0, y_0)$",
      "Analytic everywhere on $\\mathbb{R}^2$",
      "Equal to zero at $(x_0, y_0)$",
      "Linear in $x$ and $y$"
    ],
    answer: "A",
    explanation: "Continuity of $f(x, y)$ guarantees existence of a solution, and continuity of $\\frac{\\partial f}{\\partial y}$ (Lipschitz condition) guarantees that the solution through $(x_0, y_0)$ is unique."
  },
  {
    prompt: "The orthogonal trajectories to the family of parabolas $y = c x^2$ satisfy the differential equation:",
    options: [
      "$\\frac{dy}{dx} = -\\frac{x}{2y}$",
      "$\\frac{dy}{dx} = \\frac{2y}{x}$",
      "$\\frac{dy}{dx} = -\\frac{2y}{x}$",
      "$\\frac{dy}{dx} = \\frac{x}{2y}$"
    ],
    answer: "A",
    explanation: "Differentiate $y = cx^2 \\implies y' = 2cx = 2(y/x^2)x = \\frac{2y}{x}$. For orthogonal trajectories, replace $y'$ by $-1/y'$: $-\\frac{1}{y'} = \\frac{2y}{x} \\implies \\frac{dy}{dx} = -\\frac{x}{2y}$, which integrates to ellipses $x^2 + 2y^2 = K$."
  }
];

export const ODES_P2_QUIZ = [
  {
    prompt: "A first-order equation $M(x, y)dx + N(x, y)dy = 0$ is exact if and only if:",
    options: [
      "$\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$",
      "$\\frac{\\partial M}{\\partial x} = \\frac{\\partial N}{\\partial y}$",
      "$M + N = 0$",
      "$\\frac{\\partial M}{\\partial y} + \\frac{\\partial N}{\\partial x} = 0$"
    ],
    answer: "A",
    explanation: "By Clairaut's theorem on equality of mixed partial derivatives ($\\frac{\\partial^2 \\Psi}{\\partial y \\partial x} = \\frac{\\partial^2 \\Psi}{\\partial x \\partial y}$), the exactness test is $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$."
  },
  {
    prompt: "Which equation is exact?",
    options: [
      "$(2xy + 3)dx + (x^2 - 1)dy = 0$",
      "$(2xy)dx + (x^2 + y)dy = 0$",
      "$(y^2)dx + (2x)dy = 0$",
      "$(x + y)dx + (x - y)dy = 0$"
    ],
    answer: "A",
    explanation: "For $(2xy + 3)dx + (x^2 - 1)dy = 0$, $M = 2xy + 3 \\implies \\frac{\\partial M}{\\partial y} = 2x$. $N = x^2 - 1 \\implies \\frac{\\partial N}{\\partial x} = 2x$. Since $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$, it is exact."
  },
  {
    prompt: "What is the general solution to the exact ODE $(2xy + 3)dx + (x^2 - 1)dy = 0$?",
    options: [
      "$x^2 y + 3x - y = C$",
      "$x^2 y - 3x + y = C$",
      "$2x^2 y + 3x = C$",
      "$x^2 + y^2 = C$"
    ],
    answer: "A",
    explanation: "Integrate $M$ with respect to $x$: $\\Psi(x, y) = \\int (2xy + 3)\\,dx = x^2 y + 3x + g(y)$. Then $\\frac{\\partial \\Psi}{\\partial y} = x^2 + g'(y) = N = x^2 - 1 \\implies g'(y) = -1 \\implies g(y) = -y$. Thus $\\Psi(x, y) = x^2 y + 3x - y = C$."
  },
  {
    prompt: "The Bernoulli equation $\\frac{dy}{dx} + P(x)y = Q(x)y^n$ ($n \\neq 0, 1$) is converted into a linear ODE by the substitution:",
    options: ["$u = y^{1 - n}$", "$u = y^n$", "$u = y^{n - 1}$", "$u = \\ln y$"],
    answer: "A",
    explanation: "Divide by $y^n$: $y^{-n}\\frac{dy}{dx} + P(x)y^{1-n} = Q(x)$. Letting $u = y^{1-n}$, $\\frac{du}{dx} = (1-n)y^{-n}\\frac{dy}{dx}$, yielding the linear ODE $\\frac{du}{dx} + (1-n)P(x)u = (1-n)Q(x)$."
  },
  {
    prompt: "For the second-order homogeneous ODE $a y'' + b y' + c y = 0$, the characteristic equation is $a r^2 + b r + c = 0$. If the roots are real and distinct ($r_1 \\neq r_2$), the general solution is:",
    options: [
      "$y = c_1 e^{r_1 x} + c_2 e^{r_2 x}$",
      "$y = (c_1 + c_2 x)e^{r_1 x}$",
      "$y = e^{r_1 x}(c_1 \\cos r_2 x + c_2 \\sin r_2 x)$",
      "$y = c_1 \\cosh r_1 x + c_2 \\sinh r_2 x$"
    ],
    answer: "A",
    explanation: "Distinct real characteristic roots yield independent exponential solutions $e^{r_1 x}$ and $e^{r_2 x}$, forming the basis of the general solution $y = c_1 e^{r_1 x} + c_2 e^{r_2 x}$."
  },
  {
    prompt: "If the characteristic equation has a repeated root $r_1 = r_2 = r$, the general solution is:",
    options: [
      "$y = (c_1 + c_2 x)e^{rx}$",
      "$y = c_1 e^{rx} + c_2 e^{-rx}$",
      "$y = c_1 e^{rx}$",
      "$y = e^{rx}(c_1 \\cos x + c_2 \\sin x)$"
    ],
    answer: "A",
    explanation: "By reduction of order, the second linearly independent solution acquires a polynomial prefactor $x$: $y_2 = x e^{rx}$, giving $y = (c_1 + c_2 x)e^{rx}$."
  },
  {
    prompt: "If the characteristic roots are complex conjugates $r = \\alpha \\pm i\\beta$, the general solution is:",
    options: [
      "$y = e^{\\alpha x}(c_1 \\cos(\\beta x) + c_2 \\sin(\\beta x))$",
      "$y = c_1 e^{\\alpha x} + c_2 e^{\\beta x}$",
      "$y = e^{\\beta x}(c_1 \\cos(\\alpha x) + c_2 \\sin(\\alpha x))$",
      "$y = c_1 \\cos(\\alpha x) + c_2 \\sin(\\beta x)$"
    ],
    answer: "A",
    explanation: "Euler's formula $e^{(\\alpha \\pm i\\beta)x} = e^{\\alpha x}(\\cos \\beta x \\pm i\\sin \\beta x)$ produces the real fundamental set $\\{e^{\\alpha x}\\cos \\beta x, e^{\\alpha x}\\sin \\beta x\\}$."
  },
  {
    prompt: "Find the general solution of $y'' - 5y' + 6y = 0$.",
    options: [
      "$y = c_1 e^{2x} + c_2 e^{3x}$",
      "$y = c_1 e^{-2x} + c_2 e^{-3x}$",
      "$y = (c_1 + c_2 x)e^{2.5x}$",
      "$y = c_1 e^{x} + c_2 e^{6x}$"
    ],
    answer: "A",
    explanation: "Characteristic equation: $r^2 - 5r + 6 = 0 \\implies (r - 2)(r - 3) = 0 \\implies r_1 = 2, r_2 = 3$. General solution: $y = c_1 e^{2x} + c_2 e^{3x}$."
  },
  {
    prompt: "Find the general solution of $y'' + 4y = 0$.",
    options: [
      "$y = c_1 \\cos(2x) + c_2 \\sin(2x)$",
      "$y = c_1 e^{2x} + c_2 e^{-2x}$",
      "$y = (c_1 + c_2 x)e^{2x}$",
      "$y = c_1 \\cos(4x) + c_2 \\sin(4x)$"
    ],
    answer: "A",
    explanation: "$r^2 + 4 = 0 \\implies r = \\pm 2i$. Here $\\alpha = 0, \\beta = 2$. Solution: $y = e^{0x}(c_1 \\cos 2x + c_2 \\sin 2x) = c_1 \\cos(2x) + c_2 \\sin(2x)$."
  },
  {
    prompt: "For the non-homogeneous equation $y'' - 3y' + 2y = 4e^{3x}$, what form of particular solution $y_p$ should be guessed using Undetermined Coefficients?",
    options: ["$y_p = A e^{3x}$", "$y_p = A x e^{3x}$", "$y_p = A x^2 e^{3x}$", "$y_p = A e^{2x}$"],
    answer: "A",
    explanation: "Homogeneous roots are $r = 1, 2$. Since $r = 3$ is not a root of the characteristic equation, no duplication occurs, and the trial form is simply $y_p = A e^{3x}$."
  },
  {
    prompt: "In the equation $y'' - 3y' + 2y = 4e^{2x}$, what trial form for $y_p$ is required?",
    options: ["$y_p = A x e^{2x}$", "$y_p = A e^{2x}$", "$y_p = A x^2 e^{2x}$", "$y_p = (Ax + B)e^{2x}$"],
    answer: "A",
    explanation: "The characteristic roots are $r = 1, 2$. Because $e^{2x}$ is already present in the complementary solution $y_c = c_1 e^x + c_2 e^{2x}$ with multiplicity 1, we must multiply by $x$: $y_p = A x e^{2x}$."
  },
  {
    prompt: "The Wronskian determinant $W(y_1, y_2)$ of two solutions $y_1, y_2$ is defined as:",
    options: [
      "$W = y_1 y_2' - y_1' y_2$",
      "$W = y_1 y_2 + y_1' y_2'$",
      "$W = y_1' y_2 - y_1 y_2'$",
      "$W = y_1 y_2$ / $(y_1' + y_2')$"
    ],
    answer: "A",
    explanation: "$W(y_1, y_2) = \\det\\begin{pmatrix} y_1 & y_2 \\\\ y_1' & y_2' \\end{pmatrix} = y_1 y_2' - y_1' y_2$. Two solutions are linearly independent on an interval if and only if $W \\neq 0$."
  },
  {
    prompt: "In the Method of Variation of Parameters for $y'' + P(x)y' + Q(x)y = g(x)$, the particular solution is given by:",
    options: [
      "$y_p = -y_1 \\int \\frac{y_2 g(x)}{W}\\,dx + y_2 \\int \\frac{y_1 g(x)}{W}\\,dx$",
      "$y_p = y_1 \\int y_2 g(x)\\,dx + y_2 \\int y_1 g(x)\\,dx$",
      "$y_p = \\frac{y_1 y_2}{W} \\int g(x)\\,dx$",
      "$y_p = -y_1 y_2 \\int \\frac{g(x)}{W}\\,dx$"
    ],
    answer: "A",
    explanation: "The classical Variation of Parameters formula replaces constants $c_1, c_2$ with functions $u_1(x), u_2(x)$ where $u_1' = -y_2 g / W$ and $u_2' = y_1 g / W$."
  },
  {
    prompt: "What is the steady-state solution of a damped harmonic oscillator with periodic forcing $m y'' + c y' + k y = F_0 \\cos(\\omega t)$?",
    options: [
      "A sinusoidal response of the same driving frequency $\\omega$, shifted by a phase angle $\\phi$",
      "An exponentially decaying transient term",
      "A linearly growing resonance ramp $t\\cos(\\omega t)$",
      "A constant zero response"
    ],
    answer: "A",
    explanation: "Because damping $c > 0$ causes the complementary transient solution to decay exponentially ($e^{-\\gamma t} \\to 0$), the long-term steady-state motion is solely the particular solution $y_p(t) = A\\cos(\\omega t - \\phi)$ at the driver's frequency."
  },
  {
    prompt: "How does a system of two first-order linear differential equations $\\mathbf{x}' = A\\mathbf{x}$ connect to single-variable second-order ODEs?",
    options: [
      "Any 2nd-order ODE $y'' + p y' + q y = 0$ can be converted to a $2 \\times 2$ first-order system by setting $x_1 = y, x_2 = y'$",
      "They are completely unrelated mathematical domains",
      "Systems can only model first-order algebraic equations",
      "A 2nd-order ODE requires a $4 \\times 4$ matrix"
    ],
    answer: "A",
    explanation: "Setting state variables $x_1 = y$ and $x_2 = y'$ converts $y'' + py' + qy = 0$ directly into $\\begin{pmatrix} x_1' \\\\ x_2' \\end{pmatrix} = \\begin{pmatrix} 0 & 1 \\\\ -q & -p \\end{pmatrix}\\begin{pmatrix} x_1 \\\\ x_2 \\end{pmatrix}$, connecting ODEs to matrix eigenvalues under Linear Algebra."
  }
];
