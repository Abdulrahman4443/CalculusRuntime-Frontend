// src/data/formulaData.js
// Comprehensive mathematical formulas catalog for CalcVoyager

const formulaData = {
  // ═══════════════════════════════════════════════════════════════════════════
  // 1. Calculus and Analytical Geometry
  // ═══════════════════════════════════════════════════════════════════════════
  "limits-continuity": {
    title: "Limits & Continuity",
    category: "Calculus & Geometry",
    color: "#0284c7",
    formulas: [
      {
        name: "Epsilon-Delta Definition",
        formula: "∀ε > 0, ∃δ > 0 such that 0 < |x - a| < δ ⟹ |f(x) - L| < ε",
        note: "Rigorous definition of lim_(x→a) f(x) = L",
      },
      {
        name: "Squeeze (Sandwich) Theorem",
        formula: "If g(x) ≤ f(x) ≤ h(x) near a and lim g(x) = lim h(x) = L ⟹ lim f(x) = L",
        note: "Essential for bounding oscillatory functions like x² sin(1/x)",
      },
      {
        name: "Continuity Conditions at a Point",
        formula: "1) f(c) is defined; 2) lim_(x→c) f(x) exists; 3) lim_(x→c) f(x) = f(c)",
        note: "All three conditions must hold simultaneously",
      },
      {
        name: "Intermediate Value Theorem (IVT)",
        formula: "If f continuous on [a, b] and u between f(a) & f(b), ∃c ∈ (a, b) with f(c) = u",
        note: "Guarantees existence of roots when f(a) and f(b) have opposite signs",
      },
      {
        name: "L'Hôpital's Rule",
        formula: "lim_(x→a) [f(x)/g(x)] = lim_(x→a) [f'(x)/g'(x)]  (for 0/0 or ±∞/±∞)",
        note: "Differentiate numerator and denominator separately until determinate",
      },
      {
        name: "Special Trigonometric Limits",
        formula: "lim_(x→0) [sin(x)/x] = 1  and  lim_(x→0) [(1 - cos(x))/x] = 0",
        note: "Used to derive derivatives of trigonometric functions",
      },
    ],
  },

  differentiation: {
    title: "Differentiation Rules",
    category: "Calculus & Geometry",
    color: "#0284c7",
    formulas: [
      {
        name: "Derivative Definition",
        formula: "f'(x) = lim_(h→0) [f(x+h) - f(x)] / h = df/dx",
        note: "Slope of the tangent line at x",
      },
      {
        name: "Power, Product & Quotient Rules",
        formula: "(xⁿ)' = n xⁿ⁻¹ · (uv)' = u'v + uv' · (u/v)' = (u'v - uv') / v²",
        note: "Foundation for all polynomial and algebraic derivatives",
      },
      {
        name: "Chain Rule",
        formula: "d/dx [f(g(x))] = f'(g(x)) · g'(x)",
        note: "Derivative of composite functions: outer derivative times inner derivative",
      },
      {
        name: "Exponential & Logarithmic Rules",
        formula: "d/dx [eˣ] = eˣ · d/dx [aˣ] = aˣ ln(a) · d/dx [ln(x)] = 1/x · d/dx [log_a(x)] = 1/(x ln a)",
        note: "ln(x) requires x > 0",
      },
      {
        name: "Trigonometric Derivatives",
        formula: "(sin x)' = cos x · (cos x)' = -sin x · (tan x)' = sec² x · (sec x)' = sec x tan x",
        note: "Cofunction derivatives always carry a negative sign",
      },
      {
        name: "Inverse Trigonometric Derivatives",
        formula: "d/dx [arcsin x] = 1/√(1-x²) · d/dx [arctan x] = 1/(1+x²)",
        note: "Critical for solving integration of rational forms",
      },
      {
        name: "Mean Value Theorem (MVT)",
        formula: "f'(c) = [f(b) - f(a)] / (b - a)  for some c ∈ (a, b)",
        note: "Requires continuity on [a, b] and differentiability on (a, b)",
      },
      {
        name: "Linearization (Tangent Line Approx)",
        formula: "L(x) = f(a) + f'(a)(x - a)",
        note: "First-order Taylor polynomial approximation near x = a",
      },
    ],
  },

  integration: {
    title: "Integration Techniques",
    category: "Calculus & Geometry",
    color: "#0284c7",
    formulas: [
      {
        name: "Fundamental Theorem of Calculus (Part 1 & 2)",
        formula: "d/dx [∫_a^x f(t) dt] = f(x)  and  ∫_a^b f(x) dx = F(b) - F(a)  where F' = f",
        note: "Connects derivatives directly to definite area accumulation",
      },
      {
        name: "u-Substitution (Reverse Chain Rule)",
        formula: "∫ f(g(x)) g'(x) dx = ∫ f(u) du  where u = g(x), du = g'(x) dx",
        note: "Transform integrand into simpler standard integral form",
      },
      {
        name: "Integration by Parts",
        formula: "∫ u dv = u v - ∫ v du  (LIATE order for u: Log, Inv Trig, Alg, Trig, Exp)",
        note: "Used for products of algebraic and transcendental functions",
      },
      {
        name: "Trigonometric Substitution",
        formula: "√(a² - x²) ⟹ x = a sin θ · √(a² + x²) ⟹ x = a tan θ · √(x² - a²) ⟹ x = a sec θ",
        note: "Converts radical expressions into trigonometric identities",
      },
      {
        name: "Partial Fraction Decomposition",
        formula: "P(x)/[(x-r₁)(x-r₂)] = A/(x-r₁) + B/(x-r₂)",
        note: "For rational functions with degree of numerator < denominator",
      },
      {
        name: "Improper Integrals",
        formula: "∫_a^∞ f(x) dx = lim_(b→∞) ∫_a^b f(x) dx",
        note: "Converges if limit is finite; diverges if limit is ±∞ or does not exist",
      },
      {
        name: "Area & Arc Length",
        formula: "Area = ∫_a^b |f(x) - g(x)| dx · Arc Length L = ∫_a^b √(1 + [f'(x)]²) dx",
        note: "Area between curves and curve arc length in Cartesian coordinates",
      },
    ],
  },

  "sequences-series": {
    title: "Sequences & Series",
    category: "Calculus & Geometry",
    color: "#0284c7",
    formulas: [
      {
        name: "Geometric Series Sum",
        formula: "Σ_{n=0}^∞ a rⁿ = a / (1 - r)  for |r| < 1  (diverges for |r| ≥ 1)",
        note: "First term divided by (1 - common ratio)",
      },
      {
        name: "nth-Term Divergence Test",
        formula: "If lim_(n→∞) a_n ≠ 0 (or DNE) ⟹ Σ a_n diverges",
        note: "If lim a_n = 0, the test is INCONCLUSIVE (e.g., harmonic series)",
      },
      {
        name: "p-Series Test",
        formula: "Σ_{n=1}^∞ 1/nᵖ converges if p > 1, diverges if p ≤ 1",
        note: "p = 1 is the divergent Harmonic Series Σ 1/n",
      },
      {
        name: "Integral Test",
        formula: "If f is positive, continuous & decreasing: Σ a_n & ∫_1^∞ f(x) dx both conv/div",
        note: "Use improper integral to determine infinite series behavior",
      },
      {
        name: "Ratio & Root Tests",
        formula: "L = lim |a_{n+1}/a_n| or L = lim |a_n|^(1/n): L < 1 (conv), L > 1 (div), L = 1 (inconcl)",
        note: "Ratio test is ideal for factorials n! and power terms cⁿ",
      },
      {
        name: "Alternating Series Test & Error Bound",
        formula: "If b_n > 0, b_{n+1} ≤ b_n, lim b_n = 0 ⟹ Σ (-1)ⁿ b_n converges; |R_n| ≤ b_{n+1}",
        note: "Truncation error is bounded by the magnitude of the first omitted term",
      },
      {
        name: "Power Series & Radius of Convergence",
        formula: "Σ c_n (x - a)ⁿ converges for |x - a| < R, where R = 1 / lim |c_{n+1}/c_n|",
        note: "Check endpoints x = a ± R individually for full interval of convergence",
      },
    ],
  },

  "conic-sections": {
    title: "Conic Sections & Geometry",
    category: "Calculus & Geometry",
    color: "#0284c7",
    formulas: [
      {
        name: "Standard Parabola",
        formula: "(y - k)² = 4p(x - h)  [horizontal]  or  (x - h)² = 4p(y - k)  [vertical]",
        note: "Focus at (h+p, k) or (h, k+p); Directrix: x = h-p or y = k-p",
      },
      {
        name: "Standard Ellipse",
        formula: "(x - h)² / a² + (y - k)² / b² = 1  with c² = a² - b² (a > b)",
        note: "Foci at (h ± c, k); Eccentricity e = c/a < 1",
      },
      {
        name: "Standard Hyperbola",
        formula: "(x - h)² / a² - (y - k)² / b² = 1  with c² = a² + b²",
        note: "Foci at (h ± c, k); Asymptotes: y - k = ±(b/a)(x - h); Eccentricity e = c/a > 1",
      },
      {
        name: "General Conic Discriminant",
        formula: "Ax² + Bxy + Cy² + Dx + Ey + F = 0 ⟹ Discriminant Δ = B² - 4AC",
        note: "Δ < 0: Ellipse/Circle; Δ = 0: Parabola; Δ > 0: Hyperbola",
      },
      {
        name: "Point-to-Line Distance",
        formula: "d = |Ax₀ + By₀ + C| / √(A² + B²)",
        note: "Perpendicular distance from point (x₀, y₀) to line Ax + By + C = 0",
      },
    ],
  },

  "taylor-series": {
    title: "Taylor & Maclaurin Series",
    category: "Calculus & Geometry",
    color: "#0284c7",
    formulas: [
      {
        name: "Taylor Polynomial Expansion",
        formula: "P_n(x) = Σ_{k=0}^n [f⁽ᵏ⁾(a) / k!] (x - a)ᵏ",
        note: "Local polynomial approximation of degree n centered at x = a",
      },
      {
        name: "Maclaurin Series (Centered at 0)",
        formula: "f(x) = Σ_{k=0}^∞ [f⁽ᵏ⁾(0) / k!] xᵏ",
        note: "Special case of Taylor series with center a = 0",
      },
      {
        name: "Lagrange Error Remainder",
        formula: "R_n(x) = [f⁽ⁿ⁺¹⁾(c) / (n+1)!] (x - a)ⁿ⁺¹  for some c between a and x",
        note: "Gives strict upper bound on polynomial approximation error",
      },
      {
        name: "Catalog: eˣ, sin(x), cos(x)",
        formula: "eˣ = Σ xⁿ/n! · sin x = Σ (-1)ⁿ x²ⁿ⁺¹/(2n+1)! · cos x = Σ (-1)ⁿ x²ⁿ/(2n)!",
        note: "All three series converge for all x ∈ (-∞, ∞)",
      },
      {
        name: "Catalog: 1/(1-x) & ln(1+x)",
        formula: "1/(1-x) = Σ xⁿ (|x| < 1) · ln(1+x) = Σ (-1)ⁿ⁺¹ xⁿ/n (-1 < x ≤ 1)",
        note: "Geometric series generator and its term-by-term integral",
      },
    ],
  },

  "lines-geometry": {
    title: "2D Lines & Systems of Lines",
    category: "Calculus & Geometry",
    color: "#0284c7",
    formulas: [
      {
        name: "Section Formula (Internal & External)",
        formula: "Internal: P = ((k₁x₂ + k₂x₁)/(k₁ + k₂), (k₁y₂ + k₂y₁)/(k₁ + k₂)) · External: Q = ((k₁x₂ - k₂x₁)/(k₁ - k₂), (k₁y₂ - k₂y₁)/(k₁ - k₂))",
        note: "Divides line segment joining (x₁, y₁) and (x₂, y₂) in ratio k₁ : k₂",
      },
      {
        name: "Triangle Centers",
        formula: "Centroid G = ((Σxᵢ)/3, (Σyᵢ)/3) · Incenter I = ((ax₁ + bx₂ + cx₃)/(a+b+c), (ay₁ + by₂ + cy₃)/(a+b+c))",
        note: "Euler Line: Centroid G divides segment HO (Orthocenter to Circumcenter) in ratio 2 : 1",
      },
      {
        name: "Six Standard Forms of a Line",
        formula: "Slope-Int: y = mx + c · Pt-Slope: y - y₁ = m(x - x₁) · 2-Pt: (y - y₁)/(y₂ - y₁) = (x - x₁)/(x₂ - x₁) · Int: x/a + y/b = 1 · Normal: x cos α + y sin α = p · Parametric: (x - x₁)/cos θ = (y - y₁)/sin θ = r",
        note: "Complete representation across Cartesian, intercept, normal and distance forms",
      },
      {
        name: "Perpendicular Distance & Parallel Separation",
        formula: "d(pt, line) = |Ax₀ + By₀ + C| / √(A² + B²) · d(parallel lines) = |C₁ - C₂| / √(A² + B²)",
        note: "Both parallel lines must be written with identical coefficients A and B",
      },
      {
        name: "Angle Between Two Lines",
        formula: "tan θ = |(m₂ - m₁) / (1 + m₁m₂)| · Parallel iff m₁ = m₂ · Perpendicular iff m₁m₂ = -1 (A₁A₂ + B₁B₂ = 0)",
        note: "Computes the acute angle between intersecting lines",
      },
      {
        name: "Condition of Concurrency of Three Lines",
        formula: "det [ [A₁, B₁, C₁], [A₂, B₂, C₂], [A₃, B₃, C₃] ] = 0",
        note: "Three lines intersect at a unique common point if and only if the coefficient determinant is zero",
      },
      {
        name: "Homogeneous Pair of Straight Lines",
        formula: "ax² + 2hxy + by² = 0 · Angle: tan θ = [2√(h² - ab)] / (a + b) · Perpendicular: a + b = 0 · Coincident: h² = ab",
        note: "Represents two lines passing through the origin (0, 0)",
      },
      {
        name: "General Second-Degree Pair of Lines",
        formula: "ax² + 2hxy + by² + 2gx + 2fy + c = 0 represents lines iff Δ = abc + 2fgh - af² - bg² - ch² = 0",
        note: "Intersection point is found by simultaneous solution of ∂F/∂x = 0 and ∂F/∂y = 0",
      },
      {
        name: "Joint Equation of Angle Bisectors",
        formula: "(x² - y²) / (a - b) = xy / h  or  h(x² - y²) = (a - b)xy",
        note: "The pair of angle bisectors is always mutually perpendicular (coefficients of x² and y² sum to zero)",
      },
    ],
  },

  "circles-tangents": {
    title: "Circles & Conic Tangents/Normals",
    category: "Calculus & Geometry",
    color: "#0284c7",
    formulas: [
      {
        name: "Standard & General Circle Equations",
        formula: "Standard: (x - h)² + (y - k)² = r² · General: x² + y² + 2gx + 2fy + c = 0, Center (-g, -f), r = √(g² + f² - c)",
        note: "Real circle requires g² + f² - c > 0; Point circle if = 0; Imaginary circle if < 0",
      },
      {
        name: "Circle Through 3 Points & Diameter Form",
        formula: "Diameter Form: (x - x₁)(x - x₂) + (y - y₁)(y - y₂) = 0",
        note: "Subtends a 90° angle at every point on the circumference",
      },
      {
        name: "Parametric Form of Circle",
        formula: "x = h + r cos θ,  y = k + r sin θ  (0 ≤ θ < 2π)",
        note: "Trigonometric representation with center (h, k) and radius r",
      },
      {
        name: "Tangent at a Point via T = 0 Substitution Rule",
        formula: "x² → xx₁,  y² → yy₁,  xy → (xy₁ + x₁y)/2,  x → (x + x₁)/2,  y → (y + y₁)/2",
        note: "Universal tangent rule for any second-degree conic at point (x₁, y₁) lying on the curve",
      },
      {
        name: "Conditions of Tangency (y = mx + c)",
        formula: "Circle: c² = r²(1 + m²) · Parabola (y² = 4ax): c = a/m · Ellipse: c² = a²m² + b² · Hyperbola: c² = a²m² - b²",
        note: "Determines the exact c value for a line of slope m to touch each standard conic",
      },
      {
        name: "Length of Tangent from External Point",
        formula: "L = √(x₁² + y₁² + 2gx₁ + 2fy₁ + c) = √S₁",
        note: "Valid for points outside the circle (S₁ > 0)",
      },
      {
        name: "Director Circles (Perpendicular Tangents Locus)",
        formula: "Circle: x² + y² = 2r² · Ellipse: x² + y² = a² + b² · Hyperbola: x² + y² = a² - b² · Parabola: Directrix x = -a",
        note: "Locus of intersection points of mutually perpendicular tangents",
      },
      {
        name: "Chord of Contact of Tangents",
        formula: "T = 0 ⟹ xx₁ + yy₁ + g(x + x₁) + f(y + y₁) + c = 0",
        note: "Line connecting the two points of tangency from an external point (x₁, y₁)",
      },
    ],
  },

  "advanced-calculus": {
    title: "Advanced Single-Variable Calculus",
    category: "Calculus & Geometry",
    color: "#0284c7",
    formulas: [
      {
        name: "Formal Epsilon-Delta Limit Definition",
        formula: "∀ε > 0, ∃δ > 0 such that 0 < |x - c| < δ ⟹ |f(x) - L| < ε",
        note: "Rigorous foundation for single-variable limits and analysis proofs",
      },
      {
        name: "Classification of Discontinuities",
        formula: "Removable (lim exists ≠ f(c)) · Jump (lim_left ≠ lim_right finite) · Infinite (lim = ±∞) · Essential/Oscillating (no limit)",
        note: "Four canonical types of mathematical discontinuity",
      },
      {
        name: "IVT, EVT & Rolle's Theorem",
        formula: "IVT: f(c) = u for continuous f on [a,b] · Rolle's: f'(c) = 0 if f(a) = f(b) · Cauchy MVT: f'(c)/g'(c) = [f(b)-f(a)]/[g(b)-g(a)]",
        note: "Cornerstone existence theorems of real analysis",
      },
      {
        name: "Logarithmic & Parametric Differentiation",
        formula: "Log: y = f(x)ᵍ⁽ˣ⁾ ⟹ y' = y [g'(x) ln f(x) + g(x) f'(x)/f(x)] · Parametric: dy/dx = y'(t)/x'(t) · d²y/dx² = [d/dt(dy/dx)] / x'(t)",
        note: "Logarithmic differentiation handles variable towers; parametric chain rule avoids x-elimination",
      },
      {
        name: "Hyperbolic Functions & Derivatives",
        formula: "cosh² x - sinh² x = 1 · d/dx[sinh x] = cosh x · d/dx[cosh x] = sinh x · d/dx[tanh x] = sech² x · d/dx[arcsinh x] = 1/√(1 + x²)",
        note: "Hyperbolic cosine derivative carries positive sign (unlike circular cosine)",
      },
      {
        name: "Extended L'Hôpital's Rule (All Indeterminate Forms)",
        formula: "0/0,  ∞/∞,  0 · ∞,  ∞ - ∞,  1^∞,  0⁰,  ∞⁰",
        note: "Exponentials 1^∞, 0⁰, ∞⁰ are converted to 0/0 or ∞/∞ via natural logarithm transform ln L",
      },
      {
        name: "Curvature & Radius of Curvature",
        formula: "Explicit: κ(x) = |y''| / (1 + (y')²)^(3/2) · Parametric: κ(t) = |x'y'' - y'x''| / (x'² + y'²)^(3/2) · Radius ρ = 1/κ",
        note: "Evolute center: α = x - y'(1 + (y')²)/y'', β = y + (1 + (y')²)/y''",
      },
      {
        name: "Arc Length & Surface of Revolution",
        formula: "Arc Length: s = ∫ₐᵇ √(1 + (f'(x))²) dx · Surface Area (x-axis): S = 2π ∫ₐᵇ y √(1 + (y')²) dx",
        note: "Differential arc element ds = √(dx² + dy²)",
      },
      {
        name: "Physical Applications of Integration",
        formula: "Work: W = ∫ F(x) dx · Centroid: x̄ = (1/A)∫ x f(x) dx, ȳ = (1/2A)∫ [f(x)]² dx · Hydrostatic: F = ∫ ρ g h(y) w(y) dy",
        note: "Applied single-variable mechanics, centroids of laminas, and fluid pressure forces",
      },
    ],
  },

  "differential-equations": {
    title: "Ordinary Differential Equations (ODEs)",
    category: "Calculus & Geometry",
    color: "#0284c7",
    formulas: [
      {
        name: "Separable Differential Equations",
        formula: "dy/dx = g(x) h(y) ⟹ ∫ [1/h(y)] dy = ∫ g(x) dx + C",
        note: "Separates dependent and independent variables directly into two single integrals",
      },
      {
        name: "Homogeneous First-Order ODEs",
        formula: "dy/dx = F(y/x) ⟹ substitute y = vx,  dy/dx = v + x (dv/dx) ⟹ dv / [F(v) - v] = dx / x",
        note: "Converts degree-homogeneous first-order ODEs into separable form in variable v",
      },
      {
        name: "First-Order Linear ODEs (Integrating Factor)",
        formula: "dy/dx + P(x)y = Q(x) ⟹ Integrating Factor I(x) = e^(∫ P(x) dx) ⟹ y(x) = [1/I(x)] [∫ I(x) Q(x) dx + C]",
        note: "Multiplies through by I(x) to condense LHS into exact derivative d/dx[I(x) y]",
      },
      {
        name: "Exact Differential Equations",
        formula: "M(x, y) dx + N(x, y) dy = 0 is exact iff ∂M/∂y = ∂N/∂x ⟹ Potential function Ψ(x, y) = C",
        note: "Integrate M with respect to x, then determine g(y) by matching ∂Ψ/∂y = N",
      },
      {
        name: "Bernoulli Equation Transformation",
        formula: "dy/dx + P(x)y = Q(x)yⁿ ⟹ divide by yⁿ, substitute u = y^(1-n) ⟹ du/dx + (1-n)P(x)u = (1-n)Q(x)",
        note: "Converts non-linear power equations into standard first-order linear ODEs in u",
      },
      {
        name: "2nd-Order Linear Homogeneous ODEs",
        formula: "ay'' + by' + cy = 0 · Char: ar² + br + c = 0 ⟹ Distinct: y = c₁e^(r₁x) + c₂e^(r₂x) · Repeated: y = (c₁ + c₂x)e^(rx) · Complex (α ± iβ): y = e^(αx)[c₁ cos(βx) + c₂ sin(βx)]",
        note: "Classification according to discriminant b² - 4ac",
      },
      {
        name: "Method of Undetermined Coefficients",
        formula: "y(x) = y_c(x) + y_p(x) · Polynomial: A_n xⁿ + ... · Exponential: A e^(kx) · Sinusoidal: A cos(ωx) + B sin(ωx)",
        note: "Multiply trial form by xˢ if forcing term duplicates a complementary homogeneous solution",
      },
      {
        name: "Variation of Parameters & Wronskian",
        formula: "W(y₁, y₂) = y₁y₂' - y₁'y₂ · y_p = -y₁ ∫ [y₂ g(x) / W] dx + y₂ ∫ [y₁ g(x) / W] dx",
        note: "Universal particular solution method for any forcing term g(x), including tan x, sec x, 1/x",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 2. Multivariable Calculus
  // ═══════════════════════════════════════════════════════════════════════════
  "partial-derivatives": {
    title: "Partial Derivatives & Gradients",
    category: "Multivariable Calculus",
    color: "#0d9488",
    formulas: [
      {
        name: "Partial Derivatives (x & y)",
        formula: "∂f/∂x = lim_(h→0) [f(x+h,y) - f(x,y)]/h · ∂f/∂y = lim_(h→0) [f(x,y+h) - f(x,y)]/h",
        note: "Differentiate with respect to one variable while holding the other constant",
      },
      {
        name: "Clairaut's Theorem (Mixed Partials)",
        formula: "∂²f / (∂x ∂y) = ∂²f / (∂y ∂x)",
        note: "Holds whenever second partial derivatives are continuous on an open set",
      },
      {
        name: "Multivariable Chain Rule",
        formula: "dz/dt = (∂z/∂x)(dx/dt) + (∂z/∂y)(dy/dt)  for z = f(x(t), y(t))",
        note: "Sum of partial contributions along each path coordinate",
      },
      {
        name: "Gradient Vector (∇f)",
        formula: "∇f = ⟨∂f/∂x, ∂f/∂y, ∂f/∂z⟩ = f_x î + f_y ĵ + f_z k̂",
        note: "Points in direction of maximum rate of increase; magnitude is max rate",
      },
      {
        name: "Directional Derivative",
        formula: "D_u f(x,y) = ∇f(x,y) · û = |∇f| cos θ  where |û| = 1",
        note: "Rate of change of f in the direction of unit vector û",
      },
      {
        name: "Tangent Plane to Surface z = f(x,y)",
        formula: "z - z₀ = f_x(x₀,y₀)(x - x₀) + f_y(x₀,y₀)(y - y₀)",
        note: "Normal vector to surface is n = ⟨f_x, f_y, -1⟩",
      },
    ],
  },

  extrema: {
    title: "Extreme Values & Hessians",
    category: "Multivariable Calculus",
    color: "#0d9488",
    formulas: [
      {
        name: "Critical Points Condition",
        formula: "∇f(x₀, y₀) = ⟨0, 0⟩  (or ∇f does not exist)",
        note: "Simultaneously solve f_x = 0 and f_y = 0",
      },
      {
        name: "Second Derivative Test (Hessian Determinant)",
        formula: "D = f_xx f_yy - (f_xy)² = det [[f_xx, f_xy], [f_yx, f_yy]]",
        note: "Evaluated at critical point (x₀, y₀)",
      },
      {
        name: "Classification Rules",
        formula: "D > 0 & f_xx > 0 ⟹ Local Min · D > 0 & f_xx < 0 ⟹ Local Max · D < 0 ⟹ Saddle Point",
        note: "If D = 0, the test is inconclusive",
      },
      {
        name: "Global Extrema on Closed Sets",
        formula: "1) Find critical pts in interior; 2) Find extrema on boundary; 3) Compare f values",
        note: "Extreme Value Theorem guarantees absolute max and min exist on compact sets",
      },
    ],
  },

  "lagrange-multipliers": {
    title: "Lagrange Multipliers",
    category: "Multivariable Calculus",
    color: "#0d9488",
    formulas: [
      {
        name: "Single Constraint Optimization",
        formula: "∇f(x,y,z) = λ ∇g(x,y,z)  subject to  g(x,y,z) = k",
        note: "At constrained extrema, level surfaces of f and g are tangent",
      },
      {
        name: "Lagrangian System",
        formula: "f_x = λ g_x,  f_y = λ g_y,  f_z = λ g_z,  g(x,y,z) = k",
        note: "System of n+1 equations in n+1 unknowns (coordinates + multiplier λ)",
      },
      {
        name: "Two Constraints Optimization",
        formula: "∇f = λ ∇g + μ ∇h  subject to  g = k₁ and h = k₂",
        note: "Extremizes f along curve formed by intersection of two constraint surfaces",
      },
    ],
  },

  "multiple-integrals": {
    title: "Multiple Integrals",
    category: "Multivariable Calculus",
    color: "#0d9488",
    formulas: [
      {
        name: "Fubini's Theorem (Iterated Integrals)",
        formula: "∬_R f(x,y) dA = ∫_a^b ∫_c^d f(x,y) dy dx = ∫_c^d ∫_a^b f(x,y) dx dy",
        note: "Integration order can be swapped for continuous functions on rectangular domains",
      },
      {
        name: "Double Integrals in Polar Coordinates",
        formula: "∬_R f(x,y) dA = ∫_α^β ∫_a^b f(r cos θ, r sin θ) r dr dθ  (dA = r dr dθ)",
        note: "Do not forget the Jacobian area scaling factor r",
      },
      {
        name: "Cylindrical Coordinates",
        formula: "∭_E f(x,y,z) dV = ∭ f(r cos θ, r sin θ, z) r dz dr dθ  (dV = r dz dr dθ)",
        note: "Ideal for regions with rotational symmetry around the z-axis",
      },
      {
        name: "Spherical Coordinates",
        formula: "∭ f(x,y,z) dV = ∭ f(ρ,θ,φ) ρ² sin φ dρ dφ dθ  (dV = ρ² sin φ dρ dφ dθ)",
        note: "x = ρ sin φ cos θ, y = ρ sin φ sin θ, z = ρ cos φ; φ is angle from +z axis",
      },
      {
        name: "General Jacobian Transformation",
        formula: "∬_R f(x,y) dx dy = ∬_G f(x(u,v), y(u,v)) |∂(x,y)/∂(u,v)| du dv",
        note: "Jacobian J = (∂x/∂u)(∂y/∂v) - (∂x/∂v)(∂y/∂u)",
      },
    ],
  },

  "vector-calculus": {
    title: "Vector Fields & Integrals",
    category: "Multivariable Calculus",
    color: "#0d9488",
    formulas: [
      {
        name: "Scalar Line Integral",
        formula: "∫_C f(x,y,z) ds = ∫_a^b f(r(t)) |r'(t)| dt  where ds = |r'(t)| dt",
        note: "Computes wire mass, average height, or curve area",
      },
      {
        name: "Vector Line Integral (Work)",
        formula: "W = ∫_C F · dr = ∫_a^b F(r(t)) · r'(t) dt = ∫_C (P dx + Q dy + R dz)",
        note: "Work done by vector field F along parametrized path r(t)",
      },
      {
        name: "Fundamental Theorem of Line Integrals",
        formula: "∫_C ∇f · dr = f(r(b)) - f(r(a))",
        note: "Path independent: depends only on starting and ending points",
      },
      {
        name: "Conservative Field Test (in ℝ² & ℝ³)",
        formula: "In ℝ²: ∂Q/∂x = ∂P/∂y · In ℝ³: curl F = ∇ × F = 0",
        note: "Guarantees existence of scalar potential f such that F = ∇f on simply connected domains",
      },
    ],
  },

  "divergence-curl": {
    title: "Vector Operators (Div & Curl)",
    category: "Multivariable Calculus",
    color: "#0d9488",
    formulas: [
      {
        name: "Divergence (Flux Density)",
        formula: "div F = ∇ · F = ∂P/∂x + ∂Q/∂y + ∂R/∂z",
        note: "Scalar field measuring local expansion (>0 source) or compression (<0 sink)",
      },
      {
        name: "Curl (Vorticity Vector)",
        formula: "curl F = ∇ × F = ⟨∂R/∂y - ∂Q/∂z, ∂P/∂z - ∂R/∂x, ∂Q/∂x - ∂P/∂y⟩",
        note: "Vector field measuring axis and intensity of local fluid rotation",
      },
      {
        name: "Key Identity: div(curl F) = 0",
        formula: "∇ · (∇ × F) = 0",
        note: "The divergence of any curl field is identically zero (no magnetic monopoles)",
      },
      {
        name: "Key Identity: curl(grad f) = 0",
        formula: "∇ × (∇f) = 0",
        note: "Conservative gradient fields are always irrotational",
      },
      {
        name: "Laplacian Operator (Δ = ∇²)",
        formula: "∇²f = ∇ · ∇f = ∂²f/∂x² + ∂²f/∂y² + ∂²f/∂z²",
        note: "Governs Laplace equation (∇²f = 0), heat equation, and wave equation",
      },
    ],
  },

  "stokes-theorem": {
    title: "Stokes' & Divergence Theorems",
    category: "Multivariable Calculus",
    color: "#0d9488",
    formulas: [
      {
        name: "Green's Theorem in the Plane",
        formula: "∮_C (P dx + Q dy) = ∬_D (∂Q/∂x - ∂P/∂y) dA",
        note: "C is positively oriented (counterclockwise), piecewise smooth boundary of D",
      },
      {
        name: "Area via Green's Theorem",
        formula: "Area(D) = ∮_C x dy = -∮_C y dx = ½ ∮_C (x dy - y dx)",
        note: "Calculates enclosed domain area using boundary contour integral",
      },
      {
        name: "Stokes' Theorem",
        formula: "∮_C F · dr = ∬_S (∇ × F) · dS = ∬_S (∇ × F) · n̂ dS",
        note: "Circulation of F around boundary C equals flux of curl F through surface S",
      },
      {
        name: "Divergence Theorem (Gauss' Theorem)",
        formula: "∬_S F · dS = ∭_E (∇ · F) dV",
        note: "Outward flux through closed surface S equals volume integral of divergence over solid E",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3. Linear Algebra
  // ═══════════════════════════════════════════════════════════════════════════
  "la-equations": {
    title: "Linear Equations & Systems",
    category: "Linear Algebra",
    color: "#2563eb",
    formulas: [
      {
        name: "General Linear System",
        formula: "a₁₁x₁ + a₁₂x₂ + ... + a₁ₙxₙ = b₁  ⟹  Ax = b",
        note: "A is m×n coefficient matrix, x is unknown vector, b is RHS vector",
      },
      {
        name: "Row Operations & RREF",
        formula: "1) Swap rows; 2) Scale row by k ≠ 0; 3) Add multiple of row to another",
        note: "Preserves solution set while reducing matrix to Reduced Row Echelon Form",
      },
      {
        name: "Rouché-Capelli Consistency Theorem",
        formula: "Consistent iff rank(A) = rank([A | b])",
        note: "Unique solution if rank = n; infinitely many if rank < n (n - rank free variables)",
      },
      {
        name: "Homogeneous System Ax = 0",
        formula: "Always has trivial solution x = 0; non-trivial solutions exist iff rank(A) < n",
        note: "For square A, rank(A) < n is equivalent to det(A) = 0; the solution space is Null(A)",
      },
    ],
  },

  "la-subspaces": {
    title: "Fundamental Subspaces & Rank-Nullity",
    category: "Linear Algebra",
    color: "#2563eb",
    formulas: [
      {
        name: "Rank-Nullity Theorem",
        formula: "rank(A) + nullity(A) = n  for A ∈ ℝ^(m×n)",
        note: "nullity(A) = dim Null(A) = n - rank(A)",
      },
      {
        name: "Dimensions of the Four Fundamental Subspaces",
        formula: "dim Col(A) = r · dim Row(A) = r · dim Null(A) = n-r · dim Null(Aᵀ) = m-r",
        note: "Here A is m×n and r = rank(A)",
      },
      {
        name: "Orthogonal Complement Pairs",
        formula: "Row(A)⊥ = Null(A)  ·  Col(A)⊥ = Null(Aᵀ)",
        note: "Null-space vectors are orthogonal to rows; left-null vectors are orthogonal to columns",
      },
      {
        name: "Column-Space Consistency Test",
        formula: "Ax = b is consistent ⇔ b ∈ Col(A) ⇔ rank(A) = rank([A | b])",
        note: "Equivalently, b must be orthogonal to every vector in Null(Aᵀ)",
      },
      {
        name: "General Solution of a Consistent System",
        formula: "x = x_p + v,  where v ∈ Null(A)",
        note: "If nullity(A)=k, the solution family has k independent free directions",
      },
      {
        name: "Injectivity / Independent Columns Test",
        formula: "Null(A) = {0} ⇔ nullity(A)=0 ⇔ rank(A)=n",
        note: "Equivalent to independent columns and a one-to-one linear map",
      },
      {
        name: "Subspace Test",
        formula: "0 ∈ W;  u,v ∈ W ⇒ u+v ∈ W;  c∈ℝ,u∈W ⇒ cu∈W",
        note: "A nonempty subset W is a subspace exactly when it is closed under linear combinations",
      },
      {
        name: "LU Factorization",
        formula: "A = LU  (or PA = LU with pivoting); solve Ly=b then Ux=y",
        note: "Factor once, then reuse the triangular solves for multiple right-hand sides",
      },
    ],
  },

  "la-vectors": {
    title: "Vectors, Span & Basis",
    category: "Linear Algebra",
    color: "#2563eb",
    formulas: [
      {
        name: "Linear Combination & Span",
        formula: "span{v₁, v₂, ..., v_k} = {c₁v₁ + c₂v₂ + ... + c_k v_k : c_i ∈ ℝ}",
        note: "Subspace containing all possible linear combinations of the vectors",
      },
      {
        name: "Linear Independence Test",
        formula: "c₁v₁ + c₂v₂ + ... + c_k v_k = 0 ⟹ c₁ = c₂ = ... = c_k = 0",
        note: "Vectors are linearly independent iff no vector is in the span of the others",
      },
      {
        name: "Basis & Dimension",
        formula: "Basis B = linearly independent set that spans subspace V; dim(V) = |B|",
        note: "Every basis of V has the exact same number of elements",
      },
      {
        name: "Dot Product & Norm",
        formula: "u · v = Σ u_i v_i = ||u|| ||v|| cos θ;  ||v|| = √(v · v)",
        note: "Vectors u, v are orthogonal iff u · v = 0",
      },
    ],
  },

  "la-matrices": {
    title: "Matrices, Inverses & Determinants",
    category: "Linear Algebra",
    color: "#2563eb",
    formulas: [
      {
        name: "Matrix Multiplication",
        formula: "(AB)_{ij} = Σ_{k=1}^n A_{ik} B_{kj}  (requires cols(A) = rows(B))",
        note: "In general AB ≠ BA (non-commutative); (AB)ᵀ = BᵀAᵀ",
      },
      {
        name: "2×2 Determinant & Inverse",
        formula: "det [[a, b], [c, d]] = ad - bc · A⁻¹ = [1/(ad - bc)] [[d, -b], [-c, a]]",
        note: "A is invertible (non-singular) if and only if det(A) ≠ 0",
      },
      {
        name: "Properties of Determinants",
        formula: "det(AB) = det(A)det(B) · det(Aᵀ) = det(A) · det(A⁻¹) = 1/det(A) · det(kA) = kⁿ det(A)",
        note: "Row swap flips determinant sign; scaling a row scales determinant by k",
      },
      {
        name: "Cramer's Rule",
        formula: "x_i = det(A_i(b)) / det(A)",
        note: "A_i(b) is matrix A with column i replaced by vector b",
      },
    ],
  },

  "la-transformations": {
    title: "Linear Transformations",
    category: "Linear Algebra",
    color: "#2563eb",
    formulas: [
      {
        name: "Linearity Axioms",
        formula: "T(u + v) = T(u) + T(v)  and  T(c u) = c T(u)  for all vectors u,v and scalar c",
        note: "Every linear transformation T: ℝⁿ → ℝᵐ can be represented by an m×n matrix",
      },
      {
        name: "Standard Matrix of T",
        formula: "A = [ T(e₁)  T(e₂)  ...  T(eₙ) ]",
        note: "Constructed by evaluating T on standard basis vectors e_i",
      },
      {
        name: "Kernel (Null Space) & Image (Range)",
        formula: "ker(T) = {x : T(x) = 0} · im(T) = {T(x) : x ∈ Domain}",
        note: "T is injective (one-to-one) iff ker(T) = {0}",
      },
      {
        name: "Rank-Nullity Theorem",
        formula: "dim(ker T) + dim(im T) = dim(Domain) = n",
        note: "Nullity(A) + Rank(A) = Number of columns (n)",
      },
    ],
  },

  "la-orthogonality": {
    title: "Orthogonality & Least Squares",
    category: "Linear Algebra",
    color: "#2563eb",
    formulas: [
      {
        name: "Orthogonal Projection onto Subspace W",
        formula: "proj_W(y) = (y·u₁/u₁·u₁) u₁ + ... + (y·u_k/u_k·u_k) u_k",
        note: "For an orthogonal basis {u₁, ..., u_k} of subspace W",
      },
      {
        name: "Gram-Schmidt Orthonormalization",
        formula: "v₁ = x₁;  v_k = x_k - Σ_{j=1}^{k-1} [(x_k · v_j)/(v_j · v_j)] v_j;  e_k = v_k / |v_k|",
        note: "Transforms any basis into an orthonormal basis",
      },
      {
        name: "QR Decomposition",
        formula: "A = QR  where Q has orthonormal columns (QᵀQ = I) and R is upper triangular",
        note: "Numerically stable foundation for least squares and eigenvalue algorithms",
      },
      {
        name: "Normal Equations for Least Squares",
        formula: "AᵀA x̂ = Aᵀb  ⟹  x̂ = (AᵀA)⁻¹ Aᵀb",
        note: "Minimizes Euclidean residual error ||Ax - b||² when Ax = b has no exact solution",
      },
    ],
  },

  "la-eigen": {
    title: "Eigenvalues & Diagonalization",
    category: "Linear Algebra",
    color: "#2563eb",
    formulas: [
      {
        name: "Eigen-Equation",
        formula: "A v = λ v  with v ≠ 0  ⟹  (A - λ I) v = 0",
        note: "λ is eigenvalue; v is non-zero eigenvector in the null space of (A - λI)",
      },
      {
        name: "Characteristic Polynomial",
        formula: "p(λ) = det(A - λ I) = 0",
        note: "Roots of the n-th degree characteristic polynomial give the eigenvalues",
      },
      {
        name: "Matrix Diagonalization",
        formula: "A = P D P⁻¹  ⟹  Aᵏ = P Dᵏ P⁻¹",
        note: "P columns are linearly independent eigenvectors; D is diagonal matrix of eigenvalues",
      },
      {
        name: "Spectral Theorem for Symmetric Matrices",
        formula: "If A = Aᵀ ⟹ A is orthogonally diagonalizable: A = Q D Qᵀ  (Qᵀ = Q⁻¹)",
        note: "All eigenvalues of real symmetric matrices are real; eigenvectors can be chosen orthonormal",
      },
      {
        name: "Trace and Determinant Invariants",
        formula: "tr(A) = Σ λ_i = Σ A_{ii}  and  det(A) = Π λ_i",
        note: "Sum of eigenvalues equals trace; product of eigenvalues equals determinant",
      },
    ],
  },

  "la-svd": {
    title: "Singular Value Decomposition (SVD)",
    category: "Linear Algebra",
    color: "#2563eb",
    formulas: [
      {
        name: "Full SVD Factorization",
        formula: "A = U Σ Vᵀ  for any m×n matrix A",
        note: "U is m×m orthogonal, V is n×n orthogonal, Σ is m×n diagonal with singular values σ₁ ≥ σ₂ ≥ ... ≥ 0",
      },
      {
        name: "Singular Values Definition",
        formula: "σ_i = √(λ_i(AᵀA))",
        note: "Square roots of the non-negative eigenvalues of the symmetric matrix AᵀA",
      },
      {
        name: "Moore-Penrose Pseudoinverse",
        formula: "A⁺ = V Σ⁺ Uᵀ",
        note: "Provides minimum-norm least-squares solution x = A⁺ b for any linear system",
      },
      {
        name: "Low-Rank Matrix Approximation (Eckart-Young)",
        formula: "A_k = Σ_{i=1}^k σ_i u_i v_iᵀ",
        note: "Optimal rank-k approximation under Frobenius and spectral norms (PCA, compression)",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 4. Probability and Statistics
  // ═══════════════════════════════════════════════════════════════════════════
  "prob-basics": {
    title: "Probability Foundations & Bayes",
    category: "Probability & Stats",
    color: "#7c3aed",
    formulas: [
      {
        name: "Kolmogorov Probability Axioms",
        formula: "1) P(A) ≥ 0;  2) P(Ω) = 1;  3) P(∪ A_i) = Σ P(A_i) for disjoint events",
        note: "Axiomatic basis of mathematical probability theory",
      },
      {
        name: "Addition Rule & Complement",
        formula: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) · P(Aᶜ) = 1 - P(A)",
        note: "If A and B are mutually exclusive, P(A ∩ B) = 0",
      },
      {
        name: "Conditional Probability & Multiplication Rule",
        formula: "P(A | B) = P(A ∩ B) / P(B)  ⟹  P(A ∩ B) = P(B) P(A | B)",
        note: "Requires P(B) > 0",
      },
      {
        name: "Statistical Independence Test",
        formula: "A and B independent ⟺ P(A ∩ B) = P(A) P(B) ⟺ P(A | B) = P(A)",
        note: "Occurrence of event B provides zero information regarding event A",
      },
      {
        name: "Law of Total Probability",
        formula: "P(B) = Σ_{i=1}^n P(B | A_i) P(A_i)  for partition {A_1, ..., A_n}",
        note: "Denominator in Bayes' formula",
      },
      {
        name: "Bayes' Theorem",
        formula: "P(A_k | B) = [P(B | A_k) P(A_k)] / [Σ_{i=1}^n P(B | A_i) P(A_i)]",
        note: "Updates prior probability P(A) to posterior probability P(A|B) based on evidence B",
      },
    ],
  },

  "prob-random-vars": {
    title: "Random Variables & Expectations",
    category: "Probability & Stats",
    color: "#7c3aed",
    formulas: [
      {
        name: "Expected Value (Discrete & Continuous)",
        formula: "E[X] = μ = Σ x P(X = x)  [discrete]  or  ∫_{-∞}^∞ x f(x) dx  [continuous]",
        note: "Probability-weighted long-run average of random variable X",
      },
      {
        name: "Variance and Standard Deviation",
        formula: "Var(X) = σ² = E[(X - μ)²] = E[X²] - (E[X])² · σ = √(Var(X))",
        note: "Properties: Var(aX + b) = a² Var(X)",
      },
      {
        name: "Cumulative Distribution Function (CDF)",
        formula: "F(x) = P(X ≤ x) = ∫_{-∞}^x f(t) dt  ⟹  P(a < X ≤ b) = F(b) - F(a)",
        note: "f(x) = F'(x) for continuous random variables",
      },
      {
        name: "Linearity of Expectation",
        formula: "E[aX + bY + c] = a E[X] + b E[Y] + c",
        note: "Always holds, regardless of whether X and Y are independent",
      },
      {
        name: "Covariance & Correlation",
        formula: "Cov(X, Y) = E[(X - μ_X)(Y - μ_Y)] = E[XY] - E[X]E[Y] · ρ = Cov(X,Y) / (σ_X σ_Y)",
        note: "Measures linear association (-1 ≤ ρ ≤ 1). If independent ⟹ Cov(X,Y) = 0 and Var(X + Y) = Var(X) + Var(Y)",
      },
      {
        name: "Moment Generating Function (MGF)",
        formula: "M_X(t) = E[e^{tX}] · E[X^k] = M_X^{(k)}(0) = d^k M_X(t)/dt^k |_{t=0}",
        note: "Generates all raw moments via derivatives; for independent sum M_{X+Y}(t) = M_X(t) M_Y(t)",
      },
      {
        name: "Joint, Marginal & Conditional Densities",
        formula: "f_X(x) = ∫_{-∞}^∞ f(x,y) dy · f(y|x) = f(x,y)/f_X(x) · P((X,Y) ∈ R) = ∬_R f(x,y) dx dy",
        note: "Independence holds if and only if f(x,y) = f_X(x) f_Y(y) across the entire joint support",
      },
      {
        name: "Variance of Linear Combinations",
        formula: "Var(aX + bY) = a² Var(X) + b² Var(Y) + 2ab Cov(X, Y)",
        note: "Crucial for portfolio variance and sampling error of linear contrasts",
      },
    ],
  },

  "prob-distributions": {
    title: "Probability Distributions & Sampling Distributions",
    category: "Probability & Stats",
    color: "#7c3aed",
    formulas: [
      {
        name: "Binomial Distribution B(n, p)",
        formula: "P(X = k) = (n choose k) pᵏ (1-p)ⁿ⁻ᵏ · E[X] = np · Var(X) = np(1-p) · M_X(t) = (1 - p + pe^t)ⁿ",
        note: "Counts successes in n independent Bernoulli trials; converges to Poisson for small p, large n",
      },
      {
        name: "Poisson Distribution Pois(λ)",
        formula: "P(X = k) = (λᵏ e⁻λ) / k! · E[X] = λ · Var(X) = λ · M_X(t) = exp(λ(e^t - 1))",
        note: "Models count of rare events in continuous interval; equidispersed (mean = variance)",
      },
      {
        name: "Normal (Gaussian) Distribution N(μ, σ²)",
        formula: "f(x) = [1 / (σ√(2π))] exp(-½ [(x - μ)/σ]²) · Z = (X - μ)/σ ~ N(0, 1) · M_X(t) = exp(μt + ½σ²t²)",
        note: "Empirical rule: 68% in ±1σ, 95% in ±2σ, 99.7% in ±3σ; stable under linear combinations",
      },
      {
        name: "Exponential Distribution Exp(λ)",
        formula: "f(x) = λ e⁻λx (x ≥ 0) · F(x) = 1 - e⁻λx · E[X] = 1/λ · Var(X) = 1/λ² · M_X(t) = λ/(λ - t)",
        note: "Continuous waiting time; uniquely memoryless: P(X > s + t | X > s) = P(X > t)",
      },
      {
        name: "Student's t-Distribution",
        formula: "t = (x̄ - μ) / (s / √n) ~ t_{n-1} · Var(t) = ν / (ν - 2) for ν > 2",
        note: "Heavier tails than standard normal; accounts for extra uncertainty of estimating σ by s; approaches N(0,1) as n → ∞",
      },
      {
        name: "Chi-Square Distribution (χ²)",
        formula: "V = (n - 1)s² / σ² ~ χ²_{n-1} · E[V] = ν · Var(V) = 2ν",
        note: "Sum of ν squared independent standard normal variates; basis of variance testing and goodness-of-fit",
      },
      {
        name: "Fisher-Snedecor F-Distribution",
        formula: "F = (s₁² / σ₁²) / (s₂² / σ₂²) ~ F_{ν₁, ν₂}",
        note: "Ratio of two independent scaled chi-square variates; foundation of ANOVA and regression significance",
      },
    ],
  },

  "prob-descriptive": {
    title: "Descriptive Statistics & Point Estimation",
    category: "Probability & Stats",
    color: "#7c3aed",
    formulas: [
      {
        name: "Sample Mean & Trimmed Mean",
        formula: "x̄ = (1/n) Σ_{i=1}^n x_i · E[x̄] = μ [Unbiased]",
        note: "Arithmetic center; sensitive to extreme outlier values",
      },
      {
        name: "Sample Variance & Bessel's Correction",
        formula: "s² = [1 / (n - 1)] Σ_{i=1}^n (x_i - x̄)² · E[s²] = σ² [Unbiased] · s = √(s²)",
        note: "Bessel's correction (n - 1) compensates for sample mean estimation, eliminating negative bias",
      },
      {
        name: "Maximum Likelihood Estimation (MLE)",
        formula: "L(θ) = ∏ f(x_i; θ) ⟹ ℓ(θ) = ln L(θ) ⟹ dℓ(θ)/dθ = 0 [Score Equation]",
        note: "Asymptotically unbiased, efficient, and normally distributed: θ̂_MLE ~ N(θ, 1/I(θ))",
      },
      {
        name: "Method of Moments (MoM)",
        formula: "Sample Moment m_k = (1/n) Σ x_i^k = Theoretical Moment E[X^k; θ]",
        note: "Equates sample empirical moments to theoretical moments to solve for unknown parameters",
      },
      {
        name: "Estimator Bias & Mean Squared Error (MSE)",
        formula: "Bias(θ̂) = E[θ̂] - θ · MSE(θ̂) = E[(θ̂ - θ)²] = Var(θ̂) + [Bias(θ̂)]²",
        note: "Quantifies the fundamental bias-variance trade-off in point estimation",
      },
      {
        name: "Standard Score & Outlier Fences",
        formula: "z = (x - x̄) / s · IQR = Q₃ - Q₁ · Outliers: x < Q₁ - 1.5(IQR) or x > Q₃ + 1.5(IQR)",
        note: "Measures relative position; boxplot whiskers span to most extreme non-outlier data points",
      },
    ],
  },

  "prob-hypothesis": {
    title: "Hypothesis Testing & ANOVA",
    category: "Probability & Stats",
    color: "#7c3aed",
    formulas: [
      {
        name: "Central Limit Theorem (CLT)",
        formula: "For sample mean x̄ with n ≥ 30: x̄ ~ N(μ, σ²/n) ⟹ Z = (x̄ - μ) / (σ/√n)",
        note: "Sampling distribution of mean approaches normal regardless of population shape",
      },
      {
        name: "One-Sample & Two-Sample Tests",
        formula: "1-sample: t = (x̄ - μ₀)/(s/√n) · 2-sample pooled: t = (x̄₁ - x̄₂)/[s_p √(1/n₁ + 1/n₂)]",
        note: "Pooled variance s_p² = [(n₁-1)s₁² + (n₂-1)s₂²] / (n₁ + n₂ - 2) with df = n₁ + n₂ - 2",
      },
      {
        name: "Paired Differences t-Test",
        formula: "d_i = x_{1i} - x_{2i} ⟹ t = (d̄ - μ_{d0}) / (s_d / √n) with df = n - 1",
        note: "Controls for subject-to-subject heterogeneity in before-and-after repeated measures",
      },
      {
        name: "Type I & Type II Errors & Power",
        formula: "α = P(Reject H₀ | H₀ true) · β = P(Fail to reject H₀ | H₀ false) · Power = 1 - β",
        note: "Power increases with larger sample size n, larger effect size |μ - μ₀|, and larger α",
      },
      {
        name: "One-Way ANOVA F-Test",
        formula: "SST = SSB + SSW · F = MSB / MSW = [SSB / (k - 1)] / [SSW / (N - k)] ~ F_{k-1, N-k}",
        note: "Omnibus test for H₀: μ₁ = ... = μ_k without inflating family-wise Type I error rate",
      },
      {
        name: "Chi-Square Tests (Goodness-of-Fit & Independence)",
        formula: "χ² = Σ [(O_i - E_i)² / E_i] (df = k-1-p) · Contingency Table: E_{ij} = (R_i · C_j) / N (df = (r-1)(c-1))",
        note: "Requires all expected counts E ≥ 5; measures divergence between observed and expected frequencies",
      },
    ],
  },

  "prob-regression": {
    title: "Linear Regression & OLS Inference",
    category: "Probability & Stats",
    color: "#7c3aed",
    formulas: [
      {
        name: "Pearson Correlation Coefficient (r)",
        formula: "r = [Σ (x_i - x̄)(y_i - ȳ)] / [√(Σ(x_i - x̄)²) √(Σ(y_i - ȳ)²)] = SS_{xy} / √(SS_{xx} SS_{yy})",
        note: "-1 ≤ r ≤ 1; measures strength and direction of linear relationship between variables",
      },
      {
        name: "Ordinary Least Squares (OLS) Normal Equations",
        formula: "b₁ = SS_{xy} / SS_{xx} = r (s_y / s_x) · b₀ = ȳ - b₁ x̄",
        note: "Derived by minimizing Σ (y_i - b₀ - b₁ x_i)²; regression line always passes through (x̄, ȳ)",
      },
      {
        name: "Standard Error of Slope & t-Test",
        formula: "SE(b₁) = s_e / √SS_{xx} · t = (b₁ - 0) / SE(b₁) ~ t_{n-2} · s_e = √(SSE / (n - 2))",
        note: "Tests null hypothesis H₀: β₁ = 0 (no linear relationship) against two-tailed alternative",
      },
      {
        name: "Regression ANOVA & Determination (R²)",
        formula: "SST = SSR + SSE · R² = SSR / SST = 1 - (SSE / SST) = r² · F = MSR / MSE ~ F_{1, n-2}",
        note: "In simple linear regression, F = t² identically; R² gives fraction of total y variation explained by x",
      },
      {
        name: "Confidence Interval vs. Prediction Interval",
        formula: "Mean: ŷ₀ ± t_{α/2} s_e √(1/n + (x₀-x̄)²/SS_{xx}) · Indiv: ŷ₀ ± t_{α/2} s_e √(1 + 1/n + (x₀-x̄)²/SS_{xx})",
        note: "Prediction interval for an individual is always wider due to added individual variance σ²",
      },
    ],
  },
};

export default formulaData;
