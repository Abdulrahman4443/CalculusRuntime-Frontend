export const MV_VECTOR_P1_QUIZ = [
  {
    prompt: "If $\\mathbf{r}(t) = \\langle 3\\cos t, 3\\sin t, 4t \\rangle$, what is the speed $|\\mathbf{r}'(t)|$?",
    options: ["$5$", "$3$", "$4$"],
    answer: "A",
    explanation: "Velocity is $\\langle -3\\sin t, 3\\cos t, 4 \\rangle$. Speed is $\\sqrt{9\\sin^2 t + 9\\cos^2 t + 16} = \\sqrt{9+16} = 5$.",
  },
  {
    prompt: "The unit tangent vector $\\mathbf{T}(t)$ is defined as:",
    options: ["$\\mathbf{r}'(t) / |\\mathbf{r}'(t)|$", "$\\mathbf{r}''(t)$", "$\\mathbf{r}(t) \\times \\mathbf{r}'(t)$"],
    answer: "A",
    explanation: "The unit tangent vector isolates the direction of motion by dividing the velocity vector by its magnitude (speed).",
  },
  {
    prompt: "What does the curvature $\\kappa$ measure?",
    options: ["How quickly the curve changes direction", "The speed of the particle", "The twist out of the 2D plane"],
    answer: "A",
    explanation: "Curvature measures the rate of change of the unit tangent vector with respect to arc length.",
  },
  {
    prompt: "If a particle moves with constant speed, its velocity and acceleration vectors are:",
    options: ["Always perpendicular (orthogonal)", "Always parallel", "Always zero"],
    answer: "A",
    explanation: "If $\\mathbf{r}'(t) \\cdot \\mathbf{r}'(t) = c^2$, differentiating both sides gives $2\\mathbf{r}'(t) \\cdot \\mathbf{r}''(t) = 0$.",
  },
  {
    prompt: "The binormal vector $\\mathbf{B}(t)$ is computed as:",
    options: ["$\\mathbf{T}(t) \\times \\mathbf{N}(t)$", "$\\mathbf{N}(t) \\times \\mathbf{T}(t)$", "$\\mathbf{r}'(t) \\times \\mathbf{r}''(t)$"],
    answer: "A",
    explanation: "The TNB frame forms a right-handed orthogonal system where $\\mathbf{B} = \\mathbf{T} \\times \\mathbf{N}$.",
  },
  {
    prompt: "Torsion $\\tau$ measures:",
    options: ["How sharply a curve twists out of the osculating plane", "The radius of the osculating circle", "The magnitude of acceleration"],
    answer: "A",
    explanation: "Torsion quantifies the deviation of a space curve from being strictly planar. A flat 2D curve has $\\tau = 0$.",
  },
  {
    prompt: "Evaluate the line integral of $f(x,y)=1$ along a curve $C$. The result represents:",
    options: ["The arc length of $C$", "The area under $C$", "The work done along $C$"],
    answer: "A",
    explanation: "$\\int_C 1 \\, ds$ sums up the tiny arc length segments $ds$, yielding the total length of the curve.",
  },
  {
    prompt: "The work done by a vector field $\\mathbf{F}$ along a curve is given by:",
    options: ["$\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$", "$\\int_C \\mathbf{F} \\times d\\mathbf{r}$", "$\\int_C |\\mathbf{F}| \\, ds$"],
    answer: "A",
    explanation: "Work is the line integral of the tangential component of the force: $\\mathbf{F} \\cdot d\\mathbf{r} = \\mathbf{F} \\cdot \\mathbf{T} \\, ds$.",
  }
];

export const MV_VECTOR_P2_QUIZ = [
  {
    prompt: "A vector field $\\mathbf{F}$ is conservative if:",
    options: ["$\\mathbf{F} = \\nabla f$ for some scalar function $f$", "$\\nabla \\cdot \\mathbf{F} = 0$", "It has constant magnitude"],
    answer: "A",
    explanation: "Conservative fields are gradient fields. The scalar function $f$ is called the potential function.",
  },
  {
    prompt: "For a conservative field $\\mathbf{F} = \\nabla f$, the line integral $\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$ from A to B is:",
    options: ["$f(B) - f(A)$", "$f(A) - f(B)$", "Always $0$"],
    answer: "A",
    explanation: "By the Fundamental Theorem for Line Integrals, the integral only depends on the endpoints.",
  },
  {
    prompt: "In 2D, the cross-partial test for a conservative field $\\mathbf{F} = \\langle M, N \\rangle$ requires:",
    options: ["$\\partial M/\\partial y = \\partial N/\\partial x$", "$\\partial M/\\partial x = \\partial N/\\partial y$", "$M_x + N_y = 0$"],
    answer: "A",
    explanation: "Since $M = f_x$ and $N = f_y$, Clairaut's theorem implies $f_{xy} = f_{yx}$, meaning $M_y = N_x$.",
  },
  {
    prompt: "Green's Theorem equates a line integral around a closed boundary to:",
    options: ["A double integral over the enclosed region", "A surface integral over a sphere", "A triple integral of volume"],
    answer: "A",
    explanation: "$\\oint_C M\\,dx + N\\,dy = \\iint_R (N_x - M_y)\\,dA$.",
  },
  {
    prompt: "Green's Theorem requires the boundary curve $C$ to be oriented:",
    options: ["Counterclockwise (positive orientation)", "Clockwise", "Inward"],
    answer: "A",
    explanation: "The region $R$ must remain on your left as you traverse the boundary, which means counterclockwise for the outer boundary.",
  },
  {
    prompt: "The expression $\\partial N/\\partial x - \\partial M/\\partial y$ in Green's Theorem represents:",
    options: ["The 2D curl (local spin)", "The divergence (expansion)", "The gradient magnitude"],
    answer: "A",
    explanation: "It measures the microscopic rotation of the vector field at a point in the plane.",
  },
  {
    prompt: "The surface area of a parametric surface $\\mathbf{r}(u,v)$ over domain $D$ is:",
    options: ["$\\iint_D |\\mathbf{r}_u \\times \\mathbf{r}_v| \\, dA$", "$\\iint_D (\\mathbf{r}_u \\cdot \\mathbf{r}_v) \\, dA$", "$\\iint_D |\\mathbf{r}_u| |\\mathbf{r}_v| \\, dA$"],
    answer: "A",
    explanation: "The magnitude of the cross product gives the area of the differential parallelogram patch on the surface.",
  },
  {
    prompt: "If a surface is given by $z = g(x,y)$, the surface area element $dS$ simplifies to:",
    options: ["$\\sqrt{1 + g_x^2 + g_y^2} \\, dA$", "$\\sqrt{g_x^2 + g_y^2} \\, dA$", "$(1 + g_x + g_y) \\, dA$"],
    answer: "A",
    explanation: "This is the 'tilt correction factor' accounting for the steepness of the surface relative to the xy-plane.",
  }
];