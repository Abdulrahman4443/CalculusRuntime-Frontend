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
        formula: "Always has trivial solution x = 0; non-trivial solutions exist iff det(A) = 0",
        note: "Solution space forms the null space Null(A)",
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
        formula: "u · v = Σ u_i v_i = |u||v| cos θ · |v| = √(v · v)",
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
        name: "Covariance & Independence",
        formula: "Cov(X, Y) = E[(X - μ_X)(Y - μ_Y)] = E[XY] - E[X]E[Y]",
        note: "If X, Y independent ⟹ Cov(X, Y) = 0 and Var(X + Y) = Var(X) + Var(Y)",
      },
    ],
  },

  "prob-distributions": {
    title: "Probability Distributions",
    category: "Probability & Stats",
    color: "#7c3aed",
    formulas: [
      {
        name: "Binomial Distribution B(n, p)",
        formula: "P(X = k) = (n choose k) pᵏ (1-p)ⁿ⁻ᵏ · E[X] = np · Var(X) = np(1-p)",
        note: "Number of successes k in n independent Bernoulli trials with probability p",
      },
      {
        name: "Poisson Distribution Pois(λ)",
        formula: "P(X = k) = (λᵏ e⁻λ) / k! · E[X] = λ · Var(X) = λ",
        note: "Counts rare events occurring at constant average rate λ in continuous interval",
      },
      {
        name: "Normal (Gaussian) Distribution N(μ, σ²)",
        formula: "f(x) = [1 / (σ√(2π))] exp(-½ [(x - μ)/σ]²) · Z = (X - μ) / σ ~ N(0, 1)",
        note: "Empirical 68-95-99.7 rule for standard deviations around mean",
      },
      {
        name: "Exponential Distribution Exp(λ)",
        formula: "f(x) = λ e⁻λx (x ≥ 0) · F(x) = 1 - e⁻λx · E[X] = 1/λ · Var(X) = 1/λ²",
        note: "Models waiting time between Poisson events; exhibits memoryless property",
      },
      {
        name: "Uniform Distribution U(a, b)",
        formula: "f(x) = 1/(b - a)  for a ≤ x ≤ b · E[X] = (a + b)/2 · Var(X) = (b - a)²/12",
        note: "Constant probability density over interval [a, b]",
      },
    ],
  },

  "prob-descriptive": {
    title: "Descriptive Statistics",
    category: "Probability & Stats",
    color: "#7c3aed",
    formulas: [
      {
        name: "Sample Mean & Trimmed Mean",
        formula: "x̄ = (1/n) Σ_{i=1}^n x_i",
        note: "Arithmetic center; sensitive to extreme outlier values",
      },
      {
        name: "Sample Variance & Standard Deviation",
        formula: "s² = [1 / (n - 1)] Σ_{i=1}^n (x_i - x̄)² · s = √(s²)",
        note: "Bessel's correction (n - 1) in denominator provides unbiased estimator of σ²",
      },
      {
        name: "Standard Score (Z-Score)",
        formula: "z = (x - x̄) / s  or  z = (x - μ) / σ",
        note: "Measures number of standard deviations a data point lies from the mean",
      },
      {
        name: "Interquartile Range (IQR) & Outlier Fences",
        formula: "IQR = Q₃ - Q₁ · Outliers: x < Q₁ - 1.5(IQR)  or  x > Q₃ + 1.5(IQR)",
        note: "Robust measures of dispersion resisting extreme observations",
      },
    ],
  },

  "prob-hypothesis": {
    title: "Hypothesis Testing & Inference",
    category: "Probability & Stats",
    color: "#7c3aed",
    formulas: [
      {
        name: "Central Limit Theorem (CLT)",
        formula: "For sample mean x̄ with n ≥ 30: x̄ ~ N(μ, σ²/n)  ⟹  Z = (x̄ - μ) / (σ/√n)",
        note: "Sampling distribution of mean approaches normal regardless of population shape",
      },
      {
        name: "Confidence Interval for Mean",
        formula: "x̄ ± z_{α/2} (σ / √n)  [known σ]  or  x̄ ± t_{α/2, n-1} (s / √n)  [unknown σ]",
        note: "For 95% confidence, z_{0.025} ≈ 1.96",
      },
      {
        name: "One-Sample Z-Test & T-Test",
        formula: "z = (x̄ - μ₀) / (σ / √n)  or  t = (x̄ - μ₀) / (s / √n) with df = n - 1",
        note: "Tests null hypothesis H₀: μ = μ₀ against two-tailed or one-tailed alternative",
      },
      {
        name: "Type I & Type II Errors",
        formula: "α = P(Reject H₀ | H₀ true) [Type I] · β = P(Fail to reject H₀ | H₀ false) [Type II]",
        note: "Statistical Power = 1 - β (probability of correctly rejecting false H₀)",
      },
      {
        name: "Chi-Square Goodness-of-Fit",
        formula: "χ² = Σ [(O_i - E_i)² / E_i]  with df = k - 1 - p",
        note: "O_i observed counts, E_i expected counts under null hypothesis",
      },
    ],
  },

  "prob-regression": {
    title: "Linear Regression & Correlation",
    category: "Probability & Stats",
    color: "#7c3aed",
    formulas: [
      {
        name: "Pearson Correlation Coefficient (r)",
        formula: "r = [Σ (x_i - x̄)(y_i - ȳ)] / [√(Σ(x_i - x̄)²) √(Σ(y_i - ȳ)²)] = Cov(X,Y)/(s_x s_y)",
        note: "-1 ≤ r ≤ 1; measures strength and direction of linear relationship",
      },
      {
        name: "Ordinary Least Squares Regression Line",
        formula: "ŷ = b₀ + b₁ x  where b₁ = r (s_y / s_x)  and  b₀ = ȳ - b₁ x̄",
        note: "Minimizes sum of squared vertical residuals Σ (y_i - ŷ_i)²",
      },
      {
        name: "Coefficient of Determination (R²)",
        formula: "R² = (r)² = 1 - [SS_res / SS_tot] = [SS_reg / SS_tot]",
        note: "Proportion of total variation in y explained by the linear regression on x",
      },
      {
        name: "Residuals & Standard Error of Estimate",
        formula: "e_i = y_i - ŷ_i · s_e = √[Σ e_i² / (n - 2)]",
        note: "Residuals must exhibit zero mean, constant variance, and no systematic curve pattern",
      },
    ],
  },
};

export default formulaData;
