/**
 * Practice Arena Question Bank for Developer 1 (Calc & Geometry)
 * 10 Easy + 10 Medium + 10 Hard per topic (120 questions total):
 *   - 2D Lines & Systems of Lines
 *   - Circles & Conic Tangents
 *   - Advanced Single-Variable Calculus
 *   - Ordinary Differential Equations (ODEs)
 */

export const CALC_AG_NEW_TOPICS_PRACTICE_BANK = [
  // ═══════════════════════════════════════════════════════════════════════════
  // 1. 2D Lines & Systems of Lines (50000 – 50029)
  // ═══════════════════════════════════════════════════════════════════════════
  // Easy (50000 – 50009)
  {
    id: 50000,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Easy",
    question: "Find the midpoint of the line segment joining (2, 4) and (6, 10).",
    options: ["(4, 7)", "(3, 5)", "(4, 6)", "(8, 14)"],
    correctAnswer: 0,
    explanation: "Midpoint = ((2+6)/2, (4+10)/2) = (4, 7)."
  },
  {
    id: 50001,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Easy",
    question: "What is the slope of the line passing through (1, 2) and (3, 8)?",
    options: ["3", "2", "6", "1/3"],
    correctAnswer: 0,
    explanation: "m = (8 - 2)/(3 - 1) = 6/2 = 3."
  },
  {
    id: 50002,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Easy",
    question: "The perpendicular distance from the origin (0, 0) to 3x + 4y - 15 = 0 is:",
    options: ["3", "5", "15", "4"],
    correctAnswer: 0,
    explanation: "d = |-15| / sqrt(3² + 4²) = 15 / 5 = 3."
  },
  {
    id: 50003,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Easy",
    question: "What are the x- and y-intercepts of the line 2x + 5y = 10?",
    options: ["x = 5, y = 2", "x = 2, y = 5", "x = 10, y = 10", "x = -5, y = -2"],
    correctAnswer: 0,
    explanation: "When y = 0, x = 5. When x = 0, y = 2."
  },
  {
    id: 50004,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Easy",
    question: "Two lines with slopes m₁ and m₂ are perpendicular if and only if:",
    options: ["m₁ · m₂ = -1", "m₁ = m₂", "m₁ + m₂ = 0", "m₁ · m₂ = 1"],
    correctAnswer: 0,
    explanation: "The product of perpendicular slopes in Euclidean geometry is -1."
  },
  {
    id: 50005,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Easy",
    question: "Find the slope of a line perpendicular to 4x - 2y + 7 = 0.",
    options: ["-1/2", "2", "1/2", "-2"],
    correctAnswer: 0,
    explanation: "Line slope m = 4/2 = 2. Perpendicular slope = -1/2."
  },
  {
    id: 50006,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Easy",
    question: "What is the centroid of a triangle with vertices (1, 1), (4, 5), and (7, 6)?",
    options: ["(4, 4)", "(3, 3)", "(5, 5)", "(4, 3)"],
    correctAnswer: 0,
    explanation: "Centroid = ((1+4+7)/3, (1+5+6)/3) = (12/3, 12/3) = (4, 4)."
  },
  {
    id: 50007,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Easy",
    question: "The distance between parallel lines 3x - 4y + 5 = 0 and 3x - 4y - 15 = 0 is:",
    options: ["4", "2", "3", "5"],
    correctAnswer: 0,
    explanation: "d = |5 - (-15)| / sqrt(3² + 4²) = 20 / 5 = 4."
  },
  {
    id: 50008,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Easy",
    question: "Point P divides segment (1, 3) to (7, 9) in ratio 1:1. P is:",
    options: ["(4, 6)", "(3, 5)", "(5, 7)", "(2, 4)"],
    correctAnswer: 0,
    explanation: "Ratio 1:1 is the midpoint: ((1+7)/2, (3+9)/2) = (4, 6)."
  },
  {
    id: 50009,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Easy",
    question: "What is the slope of the line x = 5?",
    options: ["Undefined (infinite)", "0", "5", "1"],
    correctAnswer: 0,
    explanation: "A vertical line has delta x = 0, so slope is undefined."
  },

  // Medium (50010 – 50019)
  {
    id: 50010,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Medium",
    question: "Find the acute angle between lines y = 3x + 1 and y = x - 4.",
    options: ["arctan(1/2) ≈ 26.57°", "45°", "60°", "30°"],
    correctAnswer: 0,
    explanation: "tan(theta) = |(3 - 1)/(1 + 3(1))| = 2 / 4 = 1/2. theta = arctan(1/2)."
  },
  {
    id: 50011,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Medium",
    question: "The lines represented by ax² + 2hxy + by² = 0 are perpendicular if:",
    options: ["a + b = 0", "h² = ab", "a = b", "h = 0"],
    correctAnswer: 0,
    explanation: "Perpendicularity condition is sum of coefficients of x² and y² equals zero: a + b = 0."
  },
  {
    id: 50012,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Medium",
    question: "What is the angle between the pair of lines x² - 7xy + 12y² = 0?",
    options: ["arctan(1/13)", "arctan(2/13)", "arctan(1/5)", "45°"],
    correctAnswer: 0,
    explanation: "a=1, 2h=-7 => h=-7/2, b=12. h²-ab = 49/4 - 12 = 1/4. tan(theta) = 2*sqrt(1/4)/(1+12) = 1/13."
  },
  {
    id: 50013,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Medium",
    question: "Under what condition are the lines ax² + 2hxy + by² = 0 coincident (parallel)?",
    options: ["h² - ab = 0", "a + b = 0", "h = 0", "a = b"],
    correctAnswer: 0,
    explanation: "Coincident lines have zero discriminant: h² - ab = 0."
  },
  {
    id: 50014,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Medium",
    question: "Find the value of k if lines x + y = 3, 2x - y = 0, and 3x + ky = 7 are concurrent.",
    options: ["k = 2", "k = 1", "k = 3", "k = -1"],
    correctAnswer: 0,
    explanation: "Solving first two gives x = 1, y = 2. Plug into third: 3(1) + k(2) = 7 => 2k = 4 => k = 2."
  },
  {
    id: 50015,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Medium",
    question: "The joint equation of the angle bisectors of ax² + 2hxy + by² = 0 is:",
    options: ["(x² - y²)/(a - b) = xy / h", "(x² + y²)/(a + b) = xy / h", "h(x² + y²) = (a + b)xy", "xy = (a - b)(x² - y²)"],
    correctAnswer: 0,
    explanation: "Standard bisector theorem: (x² - y²)/(a - b) = xy / h."
  },
  {
    id: 50016,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Medium",
    question: "Point P divides the line joining (1, -2) and (4, 7) externally in ratio 2:1. Coordinates of P are:",
    options: ["(7, 16)", "(5, 12)", "(3, 4)", "(6, 14)"],
    correctAnswer: 0,
    explanation: "x = (2(4) - 1(1))/(2 - 1) = 7; y = (2(7) - 1(-2))/(2 - 1) = 16."
  },
  {
    id: 50017,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Medium",
    question: "Normal form of line x + y - 4 = 0 with positive p is:",
    options: ["x cos(45°) + y sin(45°) = 2√2", "x cos(45°) + y sin(45°) = 4", "x cos(30°) + y sin(30°) = 2", "x + y = 4"],
    correctAnswer: 0,
    explanation: "Divide by sqrt(1+1) = sqrt(2): x/√2 + y/√2 = 4/√2 = 2√2."
  },
  {
    id: 50018,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Medium",
    question: "For what value of m are lines 3x - my + 2 = 0 and 2x + 3y - 5 = 0 perpendicular?",
    options: ["m = 2", "m = -2", "m = 3", "m = -3"],
    correctAnswer: 0,
    explanation: "A₁A₂ + B₁B₂ = 3(2) + (-m)(3) = 6 - 3m = 0 => m = 2."
  },
  {
    id: 50019,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Medium",
    question: "In Euler's theorem for any triangle, the centroid G divides the segment between Orthocenter H and Circumcenter O in ratio:",
    options: ["2 : 1", "1 : 2", "1 : 1", "3 : 1"],
    correctAnswer: 0,
    explanation: "Centroid G divides HO internally in ratio 2:1 (HG:GO = 2:1)."
  },

  // Hard (50020 – 50029)
  {
    id: 50020,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Hard",
    question: "General equation 2x² + 5xy + 2y² + 3x + 3y + c = 0 represents a pair of lines if c equals:",
    options: ["1", "2", "-1", "0"],
    correctAnswer: 0,
    explanation: "Set Delta = abc + 2fgh - af² - bg² - ch² = 0. Solving with a=2, h=5/2, b=2, g=3/2, f=3/2 yields c = 1."
  },
  {
    id: 50021,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Hard",
    question: "The point of intersection of the lines 2x² + 5xy + 2y² + 3x + 3y + 1 = 0 is:",
    options: ["(-1/3, -1/3)", "(1/3, 1/3)", "(-1, -1)", "(0, 0)"],
    correctAnswer: 0,
    explanation: "Solve partial derivatives dF/dx = 4x + 5y + 3 = 0 and dF/dy = 5x + 4y + 3 = 0. Subtracting gives x = y, so 9x + 3 = 0 => x = -1/3, y = -1/3."
  },
  {
    id: 50022,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Hard",
    question: "Distance between parallel pair of lines 4x² + 12xy + 9y² - 6x - 9y + 2 = 0 is:",
    options: ["1/√13", "2/√13", "3/13", "1/13"],
    correctAnswer: 0,
    explanation: "(2x + 3y)² - 3(2x + 3y) + 2 = 0 => lines are 2x + 3y - 1 = 0 and 2x + 3y - 2 = 0. d = | -1 - (-2) | / sqrt(4 + 9) = 1/√13."
  },
  {
    id: 50023,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Hard",
    question: "Product of perpendicular distances from (0,0) to lines ax² + 2hxy + by² + 2gx + 2fy + c = 0 is:",
    options: ["|c| / √((a - b)² + 4h²)", "|c| / (a + b)", "|c| / √(a² + b²)", "c / (h² - ab)"],
    correctAnswer: 0,
    explanation: "Standard product distance formula from origin to general second-degree pair of lines."
  },
  {
    id: 50024,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Hard",
    question: "The condition that lines joining the origin to intersections of curve x² + y² = a² and line lx + my = 1 are perpendicular is:",
    options: ["a²(l² + m²) = 2", "a(l + m) = 1", "l² + m² = a²", "l² - m² = 1/a²"],
    correctAnswer: 0,
    explanation: "Homogenize: x² + y² = a²(lx + my)². Perpendicularity sum of coefficients: (1 - a²l²) + (1 - a²m²) = 0 => a²(l² + m²) = 2."
  },
  {
    id: 50025,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Hard",
    question: "If lines x² + 2kxy - y² = 0 are rotated by any angle, the angle between them:",
    options: ["Remains 90°", "Changes with k", "Becomes 45°", "Depends on rotation angle"],
    correctAnswer: 0,
    explanation: "Since a + b = 1 + (-1) = 0, the lines are perpendicular (90°). Rigid rotation preserves angles."
  },
  {
    id: 50026,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Hard",
    question: "If a line passes through (2, 2) and cuts off intercepts on the axes whose sum is 9, the equation of the line can be:",
    options: ["x/3 + y/6 = 1 or x/6 + y/3 = 1", "x/4 + y/5 = 1", "x/2 + y/7 = 1", "x/1 + y/8 = 1"],
    correctAnswer: 0,
    explanation: "x/a + y/b = 1 with a + b = 9 and 2/a + 2/b = 1 => 2(a+b)/(ab) = 1 => 18/ab = 1 => ab = 18. Roots of z² - 9z + 18 = 0 are 3 and 6."
  },
  {
    id: 50027,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Hard",
    question: "Find the orthocenter of the triangle formed by lines x = 0, y = 0, and 3x + 4y = 12.",
    options: ["(0, 0)", "(1, 1)", "(4/3, 1)", "(2, 3/2)"],
    correctAnswer: 0,
    explanation: "The coordinate axes form a right angle at (0, 0). In any right triangle, the orthocenter is the right-angle vertex."
  },
  {
    id: 50028,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Hard",
    question: "If the area of triangle with vertices (k, 0), (4, 0), and (0, 2) is 4, then k equals:",
    options: ["0 or 8", "4 or -4", "2 or 6", "1 or 7"],
    correctAnswer: 0,
    explanation: "Area = (1/2)|k(0-2) + 4(2-0) + 0(0-0)| = (1/2)|-2k + 8| = |4 - k| = 4 => 4 - k = ±4 => k = 0 or 8."
  },
  {
    id: 50029,
    topic: "2D Lines & Systems of Lines",
    difficulty: "Hard",
    question: "The circumcenter of a right triangle with hypotenuse endpoints (0, 0) and (6, 8) is:",
    options: ["(3, 4)", "(2, 3)", "(4, 3)", "(0, 0)"],
    correctAnswer: 0,
    explanation: "By Thales' theorem, the circumcenter of a right triangle is the midpoint of the hypotenuse: ((0+6)/2, (0+8)/2) = (3, 4)."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 2. Circles & Conic Tangents (50030 – 50059)
  // ═══════════════════════════════════════════════════════════════════════════
  // Easy (50030 – 50039)
  {
    id: 50030,
    topic: "Circles & Conic Tangents",
    difficulty: "Easy",
    question: "What is the center and radius of the circle (x - 3)² + (y + 4)² = 49?",
    options: ["Center (3, -4), radius 7", "Center (-3, 4), radius 7", "Center (3, -4), radius 49", "Center (-3, 4), radius 49"],
    correctAnswer: 0,
    explanation: "(x - h)² + (y - k)² = r² => (h, k) = (3, -4), r = sqrt(49) = 7."
  },
  {
    id: 50031,
    topic: "Circles & Conic Tangents",
    difficulty: "Easy",
    question: "Find the center of the circle x² + y² - 8x + 10y - 12 = 0.",
    options: ["(4, -5)", "(-4, 5)", "(8, -10)", "(-8, 10)"],
    correctAnswer: 0,
    explanation: "2g = -8 => g = -4; 2f = 10 => f = 5. Center is (-g, -f) = (4, -5)."
  },
  {
    id: 50032,
    topic: "Circles & Conic Tangents",
    difficulty: "Easy",
    question: "What is the radius of the circle x² + y² - 6x - 8y = 0?",
    options: ["5", "25", "10", "√7"],
    correctAnswer: 0,
    explanation: "g = -3, f = -4, c = 0. r = sqrt((-3)² + (-4)² - 0) = sqrt(9 + 16) = 5."
  },
  {
    id: 50033,
    topic: "Circles & Conic Tangents",
    difficulty: "Easy",
    question: "Equation of tangent to x² + y² = 25 at (3, 4) is:",
    options: ["3x + 4y = 25", "4x + 3y = 25", "3x - 4y = 25", "3x + 4y = 5"],
    correctAnswer: 0,
    explanation: "T = 0 rule: replace x² by xx₁ and y² by yy₁ => 3x + 4y = 25."
  },
  {
    id: 50034,
    topic: "Circles & Conic Tangents",
    difficulty: "Easy",
    question: "What is the slope of the normal to circle x² + y² = 25 at (3, 4)?",
    options: ["4/3", "-3/4", "3/4", "-4/3"],
    correctAnswer: 0,
    explanation: "Tangent slope is -3/4. Normal is perpendicular: m_N = 4/3."
  },
  {
    id: 50035,
    topic: "Circles & Conic Tangents",
    difficulty: "Easy",
    question: "Condition of tangency for y = mx + c to circle x² + y² = r² is:",
    options: ["c² = r²(1 + m²)", "c = r(1 + m)", "c² = r²(1 - m²)", "c = r/m"],
    correctAnswer: 0,
    explanation: "Perpendicular distance |c| / sqrt(1 + m²) = r => c² = r²(1 + m²)."
  },
  {
    id: 50036,
    topic: "Circles & Conic Tangents",
    difficulty: "Easy",
    question: "Length of tangent from (5, 0) to x² + y² = 9 is:",
    options: ["4", "3", "5", "16"],
    correctAnswer: 0,
    explanation: "L = sqrt(x₁² + y₁² - r²) = sqrt(25 + 0 - 9) = sqrt(16) = 4."
  },
  {
    id: 50037,
    topic: "Circles & Conic Tangents",
    difficulty: "Easy",
    question: "Parametric equations of x² + y² = 16 are:",
    options: ["x = 4 cos θ, y = 4 sin θ", "x = 16 cos θ, y = 16 sin θ", "x = 4 sec θ, y = 4 tan θ", "x = 2 cos θ, y = 2 sin θ"],
    correctAnswer: 0,
    explanation: "Radius r = 4, so x = 4 cos θ, y = 4 sin θ."
  },
  {
    id: 50038,
    topic: "Circles & Conic Tangents",
    difficulty: "Easy",
    question: "A line touching a circle at exactly one point is called a:",
    options: ["Tangent", "Secant", "Chord", "Diameter"],
    correctAnswer: 0,
    explanation: "A tangent line intersects a circle at precisely one point."
  },
  {
    id: 50039,
    topic: "Circles & Conic Tangents",
    difficulty: "Easy",
    question: "Condition for line y = mx + c to touch parabola y² = 4ax is:",
    options: ["c = a / m", "c = am", "c² = a²m² + 1", "c = a m²"],
    correctAnswer: 0,
    explanation: "Standard condition of tangency for y² = 4ax is c = a / m."
  },

  // Medium (50040 – 50049)
  {
    id: 50040,
    topic: "Circles & Conic Tangents",
    difficulty: "Medium",
    question: "Condition of tangency for y = mx + c to ellipse x²/a² + y²/b² = 1 is:",
    options: ["c² = a²m² + b²", "c² = a²m² - b²", "c = am + b", "c² = a² + b²m²"],
    correctAnswer: 0,
    explanation: "Standard tangency condition for ellipse is c² = a²m² + b²."
  },
  {
    id: 50041,
    topic: "Circles & Conic Tangents",
    difficulty: "Medium",
    question: "Condition of tangency for y = mx + c to hyperbola x²/a² - y²/b² = 1 is:",
    options: ["c² = a²m² - b²", "c² = a²m² + b²", "c² = b²m² - a²", "c = a/m - b"],
    correctAnswer: 0,
    explanation: "Standard tangency condition for hyperbola is c² = a²m² - b²."
  },
  {
    id: 50042,
    topic: "Circles & Conic Tangents",
    difficulty: "Medium",
    question: "Equation of the director circle of ellipse x²/16 + y²/9 = 1 is:",
    options: ["x² + y² = 25", "x² + y² = 7", "x² + y² = 16", "x² + y² = 9"],
    correctAnswer: 0,
    explanation: "Director circle formula: x² + y² = a² + b² = 16 + 9 = 25."
  },
  {
    id: 50043,
    topic: "Circles & Conic Tangents",
    difficulty: "Medium",
    question: "Equation of the director circle of circle x² + y² = r² is:",
    options: ["x² + y² = 2r²", "x² + y² = 4r²", "x² + y² = r²", "x² + y² = √2 r"],
    correctAnswer: 0,
    explanation: "Locus of perpendicular tangents to a circle is a concentric circle of radius r√2: x² + y² = 2r²."
  },
  {
    id: 50044,
    topic: "Circles & Conic Tangents",
    difficulty: "Medium",
    question: "For parabola y² = 4ax, the locus of intersection of perpendicular tangents is:",
    options: ["Directrix x = -a", "Line x = a", "y-axis x = 0", "Latus rectum"],
    correctAnswer: 0,
    explanation: "Perpendicular tangents to a parabola always intersect on its directrix x = -a."
  },
  {
    id: 50045,
    topic: "Circles & Conic Tangents",
    difficulty: "Medium",
    question: "Equation of chord of contact from (x₁, y₁) to x² + y² = r² is:",
    options: ["xx₁ + yy₁ = r² (T = 0)", "xx₁ - yy₁ = r²", "x/x₁ + y/y₁ = 1", "(x - x₁)² + (y - y₁)² = r²"],
    correctAnswer: 0,
    explanation: "The chord of contact equation is algebraically identical to the tangent formula: T = 0."
  },
  {
    id: 50046,
    topic: "Circles & Conic Tangents",
    difficulty: "Medium",
    question: "Find the radius of the circle passing through (0,0), (6,0), and (0,8).",
    options: ["5", "10", "7", "25"],
    correctAnswer: 0,
    explanation: "The hypotenuse from (6,0) to (0,8) is a diameter of length sqrt(36+64) = 10. Radius = 5."
  },
  {
    id: 50047,
    topic: "Circles & Conic Tangents",
    difficulty: "Medium",
    question: "If a circle touches the x-axis, its coefficients satisfy:",
    options: ["g² = c", "f² = c", "g² + f² = c", "c = 0"],
    correctAnswer: 0,
    explanation: "x-intercept is 2*sqrt(g² - c) = 0 => g² = c."
  },
  {
    id: 50048,
    topic: "Circles & Conic Tangents",
    difficulty: "Medium",
    question: "Find tangent lines to x² + y² = 9 parallel to 3x + 4y = 0.",
    options: ["3x + 4y = ±15", "3x + 4y = ±9", "3x + 4y = ±5", "3x + 4y = ±25"],
    correctAnswer: 0,
    explanation: "Slope m = -3/4. c = ±r*sqrt(1 + m²) = ±3*sqrt(1 + 9/16) = ±3(5/4) = ±15/4. y = -3/4 x ± 15/4 => 3x + 4y = ±15."
  },
  {
    id: 50049,
    topic: "Circles & Conic Tangents",
    difficulty: "Medium",
    question: "The normal to any circle at any point always passes through:",
    options: ["Center of the circle", "Origin (0,0)", "Focus", "Directrix"],
    correctAnswer: 0,
    explanation: "The normal is perpendicular to the tangent and contains the radius, which emanates from the center."
  },

  // Hard (50050 – 50059)
  {
    id: 50050,
    topic: "Circles & Conic Tangents",
    difficulty: "Hard",
    question: "Director circle of hyperbola x²/9 - y²/16 = 1 is:",
    options: ["Imaginary (no real perpendicular tangents)", "x² + y² = 25", "x² + y² = 7", "x² + y² = 16"],
    correctAnswer: 0,
    explanation: "Director circle is x² + y² = a² - b² = 9 - 16 = -7 < 0. Radius is imaginary because a < b."
  },
  {
    id: 50051,
    topic: "Circles & Conic Tangents",
    difficulty: "Hard",
    question: "Point of contact of tangent y = mx + a/m with parabola y² = 4ax is:",
    options: ["(a/m², 2a/m)", "(a/m, 2a)", "(m²/a, 2m/a)", "(a m², 2a m)"],
    correctAnswer: 0,
    explanation: "Standard point of contact formula for parabola in slope form."
  },
  {
    id: 50052,
    topic: "Circles & Conic Tangents",
    difficulty: "Hard",
    question: "Find the equation of circle concentric with x² + y² - 4x + 6y - 1 = 0 and passing through (1, -1).",
    options: ["x² + y² - 4x + 6y + 8 = 0", "x² + y² - 4x + 6y - 8 = 0", "x² + y² - 4x + 6y + 4 = 0", "x² + y² - 2x + 3y + 5 = 0"],
    correctAnswer: 0,
    explanation: "Form x² + y² - 4x + 6y + k = 0. Plug in (1, -1): 1 + 1 - 4 - 6 + k = 0 => k = 8."
  },
  {
    id: 50053,
    topic: "Circles & Conic Tangents",
    difficulty: "Hard",
    question: "Length of the chord of contact from (4, 3) to circle x² + y² = 9 is:",
    options: ["4.8", "5.0", "3.6", "6.0"],
    correctAnswer: 0,
    explanation: "d to 4x + 3y = 9 is 9/5 = 1.8. Half chord = sqrt(9 - 1.8²) = sqrt(5.76) = 2.4. Full chord = 4.8."
  },
  {
    id: 50054,
    topic: "Circles & Conic Tangents",
    difficulty: "Hard",
    question: "Angle between tangents drawn from (0, 2r) to circle x² + y² = r² is:",
    options: ["60°", "90°", "45°", "30°"],
    correctAnswer: 0,
    explanation: "sin(theta/2) = r / (2r) = 1/2 => theta/2 = 30° => theta = 60°."
  },
  {
    id: 50055,
    topic: "Circles & Conic Tangents",
    difficulty: "Hard",
    question: "If circle x² + y² = r² and line x + y = k touch, then k equals:",
    options: ["±r√2", "±r/2", "±2r", "±r"],
    correctAnswer: 0,
    explanation: "Distance from (0,0) is |k|/√2 = r => k = ±r√2."
  },
  {
    id: 50056,
    topic: "Circles & Conic Tangents",
    difficulty: "Hard",
    question: "Equation of tangent to ellipse 4x² + 9y² = 36 at (3 cos θ, 2 sin θ) is:",
    options: ["(x cos θ)/3 + (y sin θ)/2 = 1", "(x sin θ)/3 + (y cos θ)/2 = 1", "3x cos θ + 2y sin θ = 1", "4x cos θ + 9y sin θ = 36"],
    correctAnswer: 0,
    explanation: "Standard form x²/9 + y²/4 = 1. T = 0 gives (x · 3cos θ)/9 + (y · 2sin θ)/4 = 1 => (x cos θ)/3 + (y sin θ)/2 = 1."
  },
  {
    id: 50057,
    topic: "Circles & Conic Tangents",
    difficulty: "Hard",
    question: "Number of real tangents from (1, 1) to circle x² + y² = 4 is:",
    options: ["0 (point is inside circle)", "1", "2", "Infinitely many"],
    correctAnswer: 0,
    explanation: "S₁ = 1² + 1² - 4 = -2 < 0. Point lies strictly inside circle, so 0 real tangents exist."
  },
  {
    id: 50058,
    topic: "Circles & Conic Tangents",
    difficulty: "Hard",
    question: "Locus of point P such that tangents from P to x² + y² = a² and x² + y² = b² are equal in length is:",
    options: ["Empty set (concentric circles have no real radical axis)", "A line", "A circle", "A parabola"],
    correctAnswer: 0,
    explanation: "Concentric circles share the center; their radical axis is the line at infinity."
  },
  {
    id: 50059,
    topic: "Circles & Conic Tangents",
    difficulty: "Hard",
    question: "Area of quadrilateral formed by tangents from (0, 10) to x² + y² = 25 and contact radii is:",
    options: ["25√3", "50", "25", "50√3"],
    correctAnswer: 0,
    explanation: "r = 5, L = sqrt(100 - 25) = 5√3. Area = 2 * (1/2 * r * L) = r * L = 5 * 5√3 = 25√3."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3. Advanced Single-Variable Calculus (50060 – 50089)
  // ═══════════════════════════════════════════════════════════════════════════
  // Easy (50060 – 50069)
  {
    id: 50060,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Easy",
    question: "What is the derivative of sinh(x)?",
    options: ["cosh(x)", "-cosh(x)", "sech(x)", "sinh(x)"],
    correctAnswer: 0,
    explanation: "d/dx[sinh(x)] = cosh(x)."
  },
  {
    id: 50061,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Easy",
    question: "What is the derivative of cosh(x)?",
    options: ["sinh(x)", "-sinh(x)", "tanh(x)", "sech(x)"],
    correctAnswer: 0,
    explanation: "d/dx[cosh(x)] = sinh(x) (positive, unlike circular cosine!)."
  },
  {
    id: 50062,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Easy",
    question: "Fundamental identity relating cosh(x) and sinh(x) is:",
    options: ["cosh²(x) - sinh²(x) = 1", "cosh²(x) + sinh²(x) = 1", "sinh²(x) - cosh²(x) = 1", "tanh²(x) + sech²(x) = 1"],
    correctAnswer: 0,
    explanation: "Standard hyperbolic identity is cosh²(x) - sinh²(x) = 1."
  },
  {
    id: 50063,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Easy",
    question: "Evaluate lim(x→0) sinh(x)/x.",
    options: ["1", "0", "undefined", "e"],
    correctAnswer: 0,
    explanation: "By L'Hopital or series: cosh(0)/1 = 1/1 = 1."
  },
  {
    id: 50064,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Easy",
    question: "Curvature of a straight line is always:",
    options: ["0", "1", "Infinite", "Equal to its slope"],
    correctAnswer: 0,
    explanation: "A straight line has zero bending: kappa = 0."
  },
  {
    id: 50065,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Easy",
    question: "Curvature of a circle with radius R is:",
    options: ["1 / R", "R", "1 / R²", "2πR"],
    correctAnswer: 0,
    explanation: "Curvature is the reciprocal of the radius of curvature: kappa = 1 / R."
  },
  {
    id: 50066,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Easy",
    question: "If f(x) is continuous on [a, b] and f(a) < 0 < f(b), which theorem guarantees a root in (a, b)?",
    options: ["Intermediate Value Theorem (IVT)", "Rolle's Theorem", "Mean Value Theorem", "Extreme Value Theorem"],
    correctAnswer: 0,
    explanation: "IVT guarantees every intermediate value, including zero (Bolzano's theorem)."
  },
  {
    id: 50067,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Easy",
    question: "Arc length element ds for curve y = f(x) is:",
    options: ["√(1 + (dy/dx)²) dx", "√(1 - (dy/dx)²) dx", "(1 + dy/dx) dx", "√(x² + y²) dx"],
    correctAnswer: 0,
    explanation: "ds = sqrt(dx² + dy²) = sqrt(1 + (dy/dx)²) dx."
  },
  {
    id: 50068,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Easy",
    question: "What type of discontinuity does f(x) = (x² - 9)/(x - 3) have at x = 3?",
    options: ["Removable", "Jump", "Infinite", "Oscillating"],
    correctAnswer: 0,
    explanation: "Limit exists (equals 6), but f(3) is undefined => Removable."
  },
  {
    id: 50069,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Easy",
    question: "Derivative of tanh(x) is:",
    options: ["sech²(x)", "csch²(x)", "-sech²(x)", "cosh²(x)"],
    correctAnswer: 0,
    explanation: "d/dx[tanh(x)] = sech²(x)."
  },

  // Medium (50070 – 50079)
  {
    id: 50070,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Medium",
    question: "For y = x^x (x > 0), dy/dx equals:",
    options: ["x^x (1 + ln x)", "x · x^(x-1)", "x^x ln x", "x^x / x"],
    correctAnswer: 0,
    explanation: "ln y = x ln x => y'/y = ln x + 1 => y' = x^x(1 + ln x)."
  },
  {
    id: 50071,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Medium",
    question: "Evaluate lim(x→0⁺) x^x.",
    options: ["1", "0", "e", "undefined"],
    correctAnswer: 0,
    explanation: "ln L = lim x ln x = lim (ln x)/(1/x) = lim (-x) = 0 => L = e^0 = 1."
  },
  {
    id: 50072,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Medium",
    question: "Curvature kappa(x) of curve y = f(x) is given by:",
    options: ["|y''| / (1 + (y')²)^(3/2)", "|y''| / (1 + (y')²)", "y'' / (1 + y')", "|y'| / (1 + (y'')²)"],
    correctAnswer: 0,
    explanation: "Standard curvature formula for explicit function y = f(x)."
  },
  {
    id: 50073,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Medium",
    question: "Curvature of parabola y = x² at the origin (0, 0) is:",
    options: ["2", "1", "0", "4"],
    correctAnswer: 0,
    explanation: "y' = 2x => y'(0) = 0. y'' = 2. kappa = 2 / (1 + 0)^(3/2) = 2."
  },
  {
    id: 50074,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Medium",
    question: "For parametric curve x(t) = cos t, y(t) = sin t, dy/dx is:",
    options: ["-cot t", "-tan t", "tan t", "cot t"],
    correctAnswer: 0,
    explanation: "dy/dx = (dy/dt) / (dx/dt) = cos t / (-sin t) = -cot t."
  },
  {
    id: 50075,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Medium",
    question: "Surface area of revolution about x-axis for y = f(x) >= 0 is:",
    options: ["2π ∫ y √(1 + (y')²) dx", "π ∫ y² dx", "2π ∫ x √(1 + (y')²) dx", "∫ 2π y dx"],
    correctAnswer: 0,
    explanation: "Strip area = 2π y ds = 2π y sqrt(1 + (y')²) dx."
  },
  {
    id: 50076,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Medium",
    question: "In delta-epsilon proof of lim(x→2) (5x - 3) = 7, an optimal delta is:",
    options: ["epsilon / 5", "5 epsilon", "epsilon / 2", "epsilon"],
    correctAnswer: 0,
    explanation: "|(5x - 3) - 7| = 5|x - 2| < epsilon => |x - 2| < epsilon / 5."
  },
  {
    id: 50077,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Medium",
    question: "Evaluate lim(x→∞) (1 + 2/x)^x.",
    options: ["e²", "e", "1", "∞"],
    correctAnswer: 0,
    explanation: "Standard limit formula lim(x→∞) (1 + a/x)^x = e^a => e²."
  },
  {
    id: 50078,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Medium",
    question: "Work done by variable force F(x) = 3x² from x = 0 to x = 2 is:",
    options: ["8", "12", "6", "24"],
    correctAnswer: 0,
    explanation: "W = ∫₀² 3x² dx = [x³]₀² = 8."
  },
  {
    id: 50079,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Medium",
    question: "If f(x) is continuous on [a, b] and differentiable on (a, b), the MVT guarantees c such that:",
    options: ["f'(c) = (f(b) - f(a)) / (b - a)", "f'(c) = 0", "f(c) = 0", "f''(c) = 0"],
    correctAnswer: 0,
    explanation: "Mean Value Theorem guarantees tangent slope equals average secant slope."
  },

  // Hard (50080 – 50089)
  {
    id: 50080,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Hard",
    question: "Second parametric derivative d²y/dx² is computed as:",
    options: ["(d/dt [dy/dx]) / (dx/dt)", "(d²y/dt²) / (d²x/dt²)", "y''(t) / x''(t)", "(x'y'' - y'x'') / (y')²"],
    correctAnswer: 0,
    explanation: "Chain rule on dy/dx: d²y/dx² = (d/dt [dy/dx]) / (dx/dt)."
  },
  {
    id: 50081,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Hard",
    question: "Arc length of catenary y = a cosh(x/a) from x = 0 to x = a is:",
    options: ["a sinh(1)", "a cosh(1)", "2a sinh(1)", "a (e - 1)"],
    correctAnswer: 0,
    explanation: "sqrt(1 + sinh²(x/a)) = cosh(x/a). Integral from 0 to a is [a sinh(x/a)]₀ᵃ = a sinh(1)."
  },
  {
    id: 50082,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Hard",
    question: "Evaluate indeterminate limit lim(x→0) (1/x - 1/sin x).",
    options: ["0", "1", "1/2", "-1/2"],
    correctAnswer: 0,
    explanation: "Common denom: (sin x - x)/(x sin x). L'Hopital twice yields (cos x - 1)/(sin x + x cos x) => -sin x / (2 cos x - x sin x) => 0 / 2 = 0."
  },
  {
    id: 50083,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Hard",
    question: "Center of curvature (alpha, beta) for curve y = f(x) has beta coordinate:",
    options: ["y + (1 + (y')²) / y''", "y - (1 + (y')²) / y''", "y + y' / y''", "y + 1 / y''"],
    correctAnswer: 0,
    explanation: "Standard evolute formula: beta = y + (1 + (y')²) / y''."
  },
  {
    id: 50084,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Hard",
    question: "x-coordinate of centroid of region under y = 4 - x² over [0, 2] is:",
    options: ["3/4 = 0.75", "1", "2/3", "4/5"],
    correctAnswer: 0,
    explanation: "Area = 16/3. M_y = ∫₀² x(4 - x²)dx = [2x² - x⁴/4]₀² = 8 - 4 = 4. x_bar = 4 / (16/3) = 12/16 = 3/4."
  },
  {
    id: 50085,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Hard",
    question: "Integral ∫ sech²(3x) dx equals:",
    options: ["(1/3) tanh(3x) + C", "3 tanh(3x) + C", "-1/3 tanh(3x) + C", "tanh(3x) + C"],
    correctAnswer: 0,
    explanation: "Antiderivative of sech²(u) is tanh(u); divide by 3 for chain rule factor."
  },
  {
    id: 50086,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Hard",
    question: "Type of discontinuity of f(x) = sin(1/x) at x = 0 is:",
    options: ["Essential / Oscillating", "Removable", "Jump", "Infinite"],
    correctAnswer: 0,
    explanation: "f oscillates infinitely between -1 and +1 as x -> 0, without approaching any limit."
  },
  {
    id: 50087,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Hard",
    question: "For astroid x = a cos³ t, y = a sin³ t, dy/dx equals:",
    options: ["-tan t", "cot t", "-cot t", "tan t"],
    correctAnswer: 0,
    explanation: "dy/dt = 3a sin² t cos t; dx/dt = -3a cos² t sin t. Ratio = -sin t / cos t = -tan t."
  },
  {
    id: 50088,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Hard",
    question: "Radius of curvature of cycloid x = a(t - sin t), y = a(1 - cos t) at t = pi is:",
    options: ["4a", "2a", "a", "8a"],
    correctAnswer: 0,
    explanation: "rho(t) = 4a sin(t/2). At t = pi, rho = 4a sin(pi/2) = 4a."
  },
  {
    id: 50089,
    topic: "Advanced Single-Variable Calculus",
    difficulty: "Hard",
    question: "Evaluate lim(x→∞) x^(1/x).",
    options: ["1", "0", "e", "∞"],
    correctAnswer: 0,
    explanation: "ln L = lim (ln x)/x = lim (1/x)/1 = 0 => L = e^0 = 1."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 4. Ordinary Differential Equations (ODEs) (50090 – 50119)
  // ═══════════════════════════════════════════════════════════════════════════
  // Easy (50090 – 50099)
  {
    id: 50090,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Easy",
    question: "What is the order of the differential equation d³y/dx³ + 4(dy/dx)² + y = 0?",
    options: ["3", "2", "1", "6"],
    correctAnswer: 0,
    explanation: "The order is determined by the highest derivative present, which is 3."
  },
  {
    id: 50091,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Easy",
    question: "Solve the separable ODE dy/dx = 3x².",
    options: ["y = x³ + C", "y = 6x + C", "y = x³", "y = 3x³ + C"],
    correctAnswer: 0,
    explanation: "Integrate both sides: y = ∫ 3x² dx = x³ + C."
  },
  {
    id: 50092,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Easy",
    question: "What is the general solution to dy/dx = y?",
    options: ["y = C e^x", "y = x + C", "y = e^x + C", "y = ln(x) + C"],
    correctAnswer: 0,
    explanation: "dy/y = dx => ln|y| = x + C => y = C e^x."
  },
  {
    id: 50093,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Easy",
    question: "Integrating factor for dy/dx + 2y = 4 is:",
    options: ["e^(2x)", "e^(-2x)", "2x", "e^x"],
    correctAnswer: 0,
    explanation: "I(x) = exp(∫ 2 dx) = e^(2x)."
  },
  {
    id: 50094,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Easy",
    question: "Characteristic equation for y'' - 9y = 0 is:",
    options: ["r² - 9 = 0", "r² + 9 = 0", "r - 9 = 0", "r² - 3 = 0"],
    correctAnswer: 0,
    explanation: "Substitute y = e^(rx) => r² - 9 = 0."
  },
  {
    id: 50095,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Easy",
    question: "General solution of y'' - 9y = 0 is:",
    options: ["y = c₁ e^(3x) + c₂ e^(-3x)", "y = (c₁ + c₂x)e^(3x)", "y = c₁ cos(3x) + c₂ sin(3x)", "y = c₁ e^(9x)"],
    correctAnswer: 0,
    explanation: "Roots are r = ±3, yielding independent exponentials e^(3x) and e^(-3x)."
  },
  {
    id: 50096,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Easy",
    question: "General solution of y'' + 9y = 0 is:",
    options: ["y = c₁ cos(3x) + c₂ sin(3x)", "y = c₁ e^(3x) + c₂ e^(-3x)", "y = (c₁ + c₂x)e^(3x)", "y = c₁ cos(9x)"],
    correctAnswer: 0,
    explanation: "Roots are r = ±3i, yielding harmonic oscillations cos(3x) and sin(3x)."
  },
  {
    id: 50097,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Easy",
    question: "Solve dy/dx = 0 with y(1) = 5.",
    options: ["y = 5", "y = 5x", "y = x + 4", "y = 0"],
    correctAnswer: 0,
    explanation: "dy/dx = 0 => y = C. Initial condition y(1) = 5 => C = 5 => y = 5."
  },
  {
    id: 50098,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Easy",
    question: "Which of the following differential equations is non-linear?",
    options: ["dy/dx + y² = 0", "dy/dx + 2y = sin x", "d²y/dx² + 4y = 0", "x dy/dx + y = e^x"],
    correctAnswer: 0,
    explanation: "The term y² is non-linear in the dependent variable y."
  },
  {
    id: 50099,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Easy",
    question: "What is the degree of (d²y/dx²)³ + dy/dx + y = 0?",
    options: ["3", "2", "1", "6"],
    correctAnswer: 0,
    explanation: "Degree is the exponent of the highest-order derivative term: power 3."
  },

  // Medium (50100 – 50109)
  {
    id: 50100,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Medium",
    question: "Solve dy/dx + (1/x)y = 2 for x > 0.",
    options: ["y = x + C/x", "y = x² + C", "y = 2x + C/x", "y = x + C"],
    correctAnswer: 0,
    explanation: "I(x) = e^(ln x) = x. d/dx[xy] = 2x => xy = x² + C => y = x + C/x."
  },
  {
    id: 50101,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Medium",
    question: "Test exactness: (2xy)dx + (x² - 1)dy = 0. Is it exact?",
    options: ["Yes, since ∂M/∂y = ∂N/∂x = 2x", "No, because ∂M/∂y ≠ ∂N/∂x", "Only when x = 0", "Only when y = 1"],
    correctAnswer: 0,
    explanation: "∂M/∂y = 2x and ∂N/∂x = 2x. Since they are identical, the ODE is exact."
  },
  {
    id: 50102,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Medium",
    question: "Solution to exact ODE (2xy)dx + (x² - 1)dy = 0 is:",
    options: ["x²y - y = C", "x²y + y = C", "2x²y = C", "x² + y² = C"],
    correctAnswer: 0,
    explanation: "Psi = ∫ 2xy dx = x²y + g(y). dPsi/dy = x² + g'(y) = x² - 1 => g'(y) = -1 => g(y) = -y. Psi = x²y - y = C."
  },
  {
    id: 50103,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Medium",
    question: "Substitution used to solve homogeneous equation dy/dx = F(y/x) is:",
    options: ["y = vx", "y = v + x", "y = v / x", "v = xy"],
    correctAnswer: 0,
    explanation: "Setting y = vx produces dy/dx = v + x dv/dx, separating into variables v and x."
  },
  {
    id: 50104,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Medium",
    question: "General solution of y'' - 4y' + 4y = 0 (repeated root) is:",
    options: ["y = (c₁ + c₂x)e^(2x)", "y = c₁ e^(2x) + c₂ e^(-2x)", "y = c₁ e^(2x)", "y = c₁ cos(2x) + c₂ sin(2x)"],
    correctAnswer: 0,
    explanation: "(r - 2)² = 0 has repeated root r = 2, yielding basis e^(2x) and x e^(2x)."
  },
  {
    id: 50105,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Medium",
    question: "For Bernoulli ODE dy/dx + P(x)y = Q(x)y³, substitution to linearize is:",
    options: ["u = y^(-2)", "u = y²", "u = y^(-3)", "u = ln y"],
    correctAnswer: 0,
    explanation: "u = y^(1 - n) = y^(1 - 3) = y^(-2)."
  },
  {
    id: 50106,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Medium",
    question: "Wronskian W of y₁ = cos x and y₂ = sin x is:",
    options: ["1", "0", "-1", "cos(2x)"],
    correctAnswer: 0,
    explanation: "W = y₁y₂' - y₁'y₂ = (cos x)(cos x) - (-sin x)(sin x) = cos²x + sin²x = 1."
  },
  {
    id: 50107,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Medium",
    question: "A particular solution trial form for y'' + y = 3e^(2x) using undetermined coefficients is:",
    options: ["y_p = A e^(2x)", "y_p = A x e^(2x)", "y_p = A cos(2x)", "y_p = A e^x"],
    correctAnswer: 0,
    explanation: "Characteristic roots are ±i. Since 2 is not a root, trial form is simply A e^(2x)."
  },
  {
    id: 50108,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Medium",
    question: "Solve dy/dx = 2xy with y(0) = 3.",
    options: ["y = 3 e^(x²)", "y = 3 e^(2x)", "y = x² + 3", "y = 3 e^x"],
    correctAnswer: 0,
    explanation: "dy/y = 2x dx => ln y = x² + C => y = C e^(x²). y(0) = 3 => C = 3 => y = 3 e^(x²)."
  },
  {
    id: 50109,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Medium",
    question: "In population dynamics, solution to dP/dt = kP with P(0) = P₀ is:",
    options: ["P(t) = P₀ e^(kt)", "P(t) = P₀ + kt", "P(t) = P₀ ln(kt)", "P(t) = P₀ k^t"],
    correctAnswer: 0,
    explanation: "Standard exponential growth law: P(t) = P₀ e^(kt)."
  },

  // Hard (50110 – 50119)
  {
    id: 50110,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Hard",
    question: "For non-homogeneous ODE y'' + 4y = 8 cos(2x), trial form for y_p must be:",
    options: ["y_p = x(A cos 2x + B sin 2x)", "y_p = A cos 2x + B sin 2x", "y_p = A x² cos 2x", "y_p = A e^(2x)"],
    correctAnswer: 0,
    explanation: "Complementary roots are ±2i. Forcing frequency matches natural frequency (resonance), requiring factor of x."
  },
  {
    id: 50111,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Hard",
    question: "Method of Variation of Parameters gives particular solution y_p formula:",
    options: ["-y₁ ∫ (y₂ g / W) dx + y₂ ∫ (y₁ g / W) dx", "y₁ ∫ y₂ g dx + y₂ ∫ y₁ g dx", "(y₁y₂ / W) ∫ g dx", "-y₁y₂ ∫ (g / W) dx"],
    correctAnswer: 0,
    explanation: "Standard Variation of Parameters formulas for 2nd-order linear non-homogeneous ODEs."
  },
  {
    id: 50112,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Hard",
    question: "Solve Bernoulli equation dy/dx + y = x y².",
    options: ["y = 1 / (x + 1 + C e^x)", "y = 1 / (x - 1 + C e^x)", "y = x + C e^x", "y = (x + 1)e^x"],
    correctAnswer: 0,
    explanation: "u = 1/y => du/dx - u = -x. I = e^(-x). u e^(-x) = ∫ -x e^(-x) dx = x e^(-x) + e^(-x) + C => u = x + 1 + C e^x => y = 1/(x + 1 + C e^x)."
  },
  {
    id: 50113,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Hard",
    question: "Solution of initial value problem y'' + 2y' + 2y = 0 with y(0) = 1, y'(0) = 0 is:",
    options: ["y = e^(-x)(cos x + sin x)", "y = e^(-x) cos x", "y = e^x(cos x - sin x)", "y = e^(-2x)(cos x + sin x)"],
    correctAnswer: 0,
    explanation: "r = -1 ± i. y = e^(-x)(c₁ cos x + c₂ sin x). y(0)=1 => c₁ = 1. y'(0) = -c₁ + c₂ = 0 => c₂ = 1."
  },
  {
    id: 50114,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Hard",
    question: "Orthogonal trajectories to the family of parabolas y = c x² satisfy:",
    options: ["dy/dx = -x / (2y) => x² + 2y² = K", "dy/dx = 2y / x", "dy/dx = -2y / x", "y = K x"],
    correctAnswer: 0,
    explanation: "y' = 2cx = 2y/x. Orthogonal slope is -x/(2y). Separating 2y dy = -x dx integrates to ellipses x² + 2y² = K."
  },
  {
    id: 50115,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Hard",
    question: "If Wronskian W(y₁, y₂) = 0 for all x in an interval, the two solutions are:",
    options: ["Linearly dependent", "Linearly independent", "Equal to zero everywhere", "Orthogonal"],
    correctAnswer: 0,
    explanation: "For solutions of a linear homogeneous ODE, vanishing Wronskian implies linear dependence."
  },
  {
    id: 50116,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Hard",
    question: "Integrating factor for (y)dx + (2x - y e^y)dy = 0 (which is not exact) is:",
    options: ["y", "1/y", "x", "e^y"],
    correctAnswer: 0,
    explanation: "(M_y - N_x)/N = (1 - 2)/N not just y. But (N_x - M_y)/M = (2 - 1)/y = 1/y. mu(y) = exp(∫ 1/y dy) = y."
  },
  {
    id: 50117,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Hard",
    question: "Convert 2nd-order ODE y'' + 3y' + 2y = 0 to a first-order system x' = A x with x = [y, y']ᵀ. Matrix A is:",
    options: ["[ [0, 1], [-2, -3] ]", "[ [1, 0], [-3, -2] ]", "[ [0, -2], [1, -3] ]", "[ [2, 3], [0, 1] ]"],
    correctAnswer: 0,
    explanation: "x₁' = x₂ and x₂' = -2x₁ - 3x₂. Matrix rows are [0, 1] and [-2, -3]."
  },
  {
    id: 50118,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Hard",
    question: "RL circuit ODE L di/dt + R i = V₀ with i(0) = 0 has transient term:",
    options: ["-(V₀/R) e^(-(R/L)t)", "(V₀/R) e^(-(L/R)t)", "V₀ e^(-Rt)", "None"],
    correctAnswer: 0,
    explanation: "i(t) = (V₀/R)(1 - e^(-(R/L)t)). The transient decaying part is -(V₀/R)e^(-(R/L)t)."
  },
  {
    id: 50119,
    topic: "Ordinary Differential Equations (ODEs)",
    difficulty: "Hard",
    question: "In mechanical vibration m y'' + c y' + k y = 0, critical damping occurs when c equals:",
    options: ["2√(mk)", "√(mk)", "4mk", "k / (2m)"],
    correctAnswer: 0,
    explanation: "Discriminant c² - 4mk = 0 => c = 2*sqrt(mk)."
  }
];
