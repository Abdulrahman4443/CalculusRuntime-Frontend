/** Study-guide quiz banks (5 MCQs each, varied answers) for Calculus AG. */

export const DIFF_RULES_QUIZ = [
  {
    prompt: "Derivative of $x^5$ is:",
    options: ["$5x^4$", "$x^4$", "$5x$", "$5x^5$"],
    answer: "A",
    explanation: "Power rule $n x^{n-1}$.",
  },
  {
    prompt: "Product rule $(uv)'$ equals:",
    options: ["$u'+v'$", "$u'v+uv'$", "$uv$", "$u'v'$"],
    answer: "B",
    explanation: "Sum of each factor's derivative times the other.",
  },
  {
    prompt: "Chain rule for $f(g(x))$ is:",
    options: ["$f'(g'(x))$", "$f'(x)g'(x)$", "$f'(g(x))g'(x)$", "$f(g'(x))$"],
    answer: "C",
    explanation: "Outer at inner, times inner derivative.",
  },
  {
    prompt: "$d/dx\\,\\cos x$ equals:",
    options: ["$\\sec x$", "$-\\cos x$", "$\\sin x$", "$-\\sin x$"],
    answer: "D",
    explanation: "Standard trig derivative.",
  },
  {
    prompt: "$d/dx\\,\\ln x$ ($x>0$) equals:",
    options: ["$1/x$", "$x$", "$\\ln x$", "$e^x$"],
    answer: "A",
    explanation: "Logarithmic derivative.",
  }
];

export const DIFF_APPS_QUIZ = [
  {
    prompt: "In related rates, plug numerical values:",
    options: ["After differentiating", "Before differentiating", "Only at $t=0$", "Never"],
    answer: "A",
    explanation: "Keep variables symbolic until after $d/dt$.",
  },
  {
    prompt: "On a closed interval, absolute extrema occur at:",
    options: ["Only where $f''=0$", "Critical points or endpoints", "Only inflection points", "Only $f'=0$"],
    answer: "B",
    explanation: "Extreme Value Theorem candidates.",
  },
  {
    prompt: "L'Hôpital requires the form:",
    options: ["$0\\cdot\\infty$ only", "Always finite", "$0/0$ or $\\infty/\\infty$", "Any form"],
    answer: "C",
    explanation: "Indeterminate quotients.",
  },
  {
    prompt: "If $A=\\pi r^2$, then $dA/dt=$:",
    options: ["$\\pi r^2\\,dr/dt$", "$2r$", "$2\\pi r$", "$2\\pi r\\,dr/dt$"],
    answer: "D",
    explanation: "Chain rule in $t$.",
  },
  {
    prompt: "$f'(c)=0$ and $f''(c)<0$ suggests:",
    options: ["Local max", "No conclusion", "Inflection", "Local min"],
    answer: "A",
    explanation: "Second derivative test.",
  }
];

export const DIFF_ADV_QUIZ = [
  {
    prompt: "MVT guarantees a point where $f'$ equals:",
    options: ["The secant slope", "$f''$", "$0$", "$f(a)$"],
    answer: "A",
    explanation: "Average rate of change.",
  },
  {
    prompt: "Implicit differentiation is needed when:",
    options: ["$y$ is isolated easily", "$y$ is defined by an unsolved equation", "$x$ is constant", "$f$ is linear"],
    answer: "B",
    explanation: "Differentiate both sides.",
  },
  {
    prompt: "Parametric $dy/dx$ equals:",
    options: ["$t$", "$dx/dy$", "$(dy/dt)/(dx/dt)$", "$(dx/dt)/(dy/dt)$"],
    answer: "C",
    explanation: "Quotient of time rates.",
  },
  {
    prompt: "On $x^2+y^2=25$, $dy/dx=$:",
    options: ["$-y/x$", "$x/y$", "$2x$", "$-x/y$"],
    answer: "D",
    explanation: "Implicit.",
  },
  {
    prompt: "Rolle's theorem needs:",
    options: ["$f(a)=f(b)$", "$f$ discontinuous", "$f'(a)=0$ given", "$f''>0$"],
    answer: "A",
    explanation: "Special MVT case.",
  }
];

export const INT_FUND_QUIZ = [
  {
    prompt: "$\\int 3x^2\\,dx$ equals:",
    options: ["$x^3+C$", "$6x+C$", "$3x^3+C$", "$x^2+C$"],
    answer: "A",
    explanation: "Antiderivative.",
  },
  {
    prompt: "$d/dx\\int_0^x f(t)\\,dt$ equals:",
    options: ["$f'(x)$", "$f(x)$", "$F(x)$", "$0$"],
    answer: "B",
    explanation: "FTC.",
  },
  {
    prompt: "$\\int_0^2 3x^2\\,dx$ equals:",
    options: ["$0$", "$24$", "$8$", "$4$"],
    answer: "C",
    explanation: "$[x^3]_0^2$.",
  },
  {
    prompt: "Indefinite integrals include:",
    options: ["No constant", "Only $0$", "A single number", "$+C$"],
    answer: "D",
    explanation: "Family of antiderivatives.",
  },
  {
    prompt: "$\\int \\cos x\\,dx$ equals:",
    options: ["$\\sin x+C$", "$\\cos x+C$", "$-\\sin x+C$", "$-\\cos x+C$"],
    answer: "A",
    explanation: "Standard.",
  }
];

export const INT_TECH_QUIZ = [
  {
    prompt: "$\\int 2x\\cos(x^2)\\,dx$ equals:",
    options: ["$\\sin(x^2)+C$", "$\\cos(x^2)+C$", "$2\\sin(x^2)+C$", "$x\\sin(x^2)+C$"],
    answer: "A",
    explanation: "Substitution.",
  },
  {
    prompt: "Integration by parts starts from:",
    options: ["$u=v$", "$\\int u\\,dv=uv-\\int v\\,du$", "$\\int uv=u'v'$", "$\\int u\\,dv=u'v$"],
    answer: "B",
    explanation: "Undo product rule.",
  },
  {
    prompt: "$\\int_1^\\infty x^{-2}\\,dx$ converges to:",
    options: ["$2$", "$0$", "$1$", "$\\infty$"],
    answer: "C",
    explanation: "Improper integral.",
  },
  {
    prompt: "$\\int \\ln x\\,dx$ equals:",
    options: ["$x\\ln x+C$", "$\\ln x+C$", "$1/x+C$", "$x\\ln x-x+C$"],
    answer: "D",
    explanation: "Parts.",
  },
  {
    prompt: "Partial fractions need numerator degree:",
    options: ["Less than denominator", "Equal always", "Zero", "Greater than denominator"],
    answer: "A",
    explanation: "Else divide first.",
  }
];

export const LIMITS_P1_QUIZ = [
  {
    prompt: "For a multivariable limit to exist, path limits must:",
    options: ["All agree", "Equal $f(a,b)$", "Agree on axes only", "Be infinite"],
    answer: "A",
    explanation: "Path-independence required.",
  },
  {
    prompt: "For $f=xy/(x^2+y^2)$, lim as $(x,y)\\to(0,0)$:",
    options: ["$1$", "DNE", "$1/2$", "$0$"],
    answer: "B",
    explanation: "Paths disagree.",
  },
  {
    prompt: "If $|f|\\le g$ and $\\lim g=0$, then $\\lim f=$:",
    options: ["DNE", "$1$", "$0$", "$\\infty$"],
    answer: "C",
    explanation: "Squeeze.",
  },
  {
    prompt: "Along $y=x^2$, $\\lim x^2 y/(x^4+y^2)=$:",
    options: ["$0$", "DNE along path", "$1$", "$1/2$"],
    answer: "D",
    explanation: "Substitute.",
  },
  {
    prompt: "Polar: $r\\cos\\theta\\sin\\theta$ as $r\\to 0$:",
    options: ["Limit $0$", "Limit $1/2$", "Limit $1$", "Fails"],
    answer: "A",
    explanation: "Bound by $r/2$.",
  }
];

export const LIMITS_P2_QUIZ = [
  {
    prompt: "$f$ continuous at $(a,b)$ requires:",
    options: ["Defined, limit exists, equal", "Only defined", "Limit may differ from $f$", "Differentiable"],
    answer: "A",
    explanation: "Three-part definition.",
  },
  {
    prompt: "Is $(x^2-y^2)/(x^2+y^2)$ continuous at origin?",
    options: ["Yes if $f(0,0)=0$", "No, limit DNE", "Yes rational", "Yes everywhere"],
    answer: "B",
    explanation: "Limit DNE.",
  },
  {
    prompt: "Removable discontinuity means:",
    options: ["Vertical asymptote", "Oscillation only", "Limit exists, value wrong/missing", "Jump"],
    answer: "C",
    explanation: "Classification.",
  },
  {
    prompt: "IVT needs $f$ continuous on $[a,b]$ and:",
    options: ["$f(a)=0$", "Odd $f$", "$f'=0$", "Opposite signs at ends"],
    answer: "D",
    explanation: "Root existence.",
  },
  {
    prompt: "Polynomials are continuous:",
    options: ["Everywhere", "Only at $0$", "On integers only", "Nowhere"],
    answer: "A",
    explanation: "Standard.",
  }
];

export const SERIES_P1_QUIZ = [
  {
    prompt: "A sequence is:",
    options: ["an ordered list of numbers", "a matrix", "a random set", "a continuous function"],
    answer: "A",
    explanation: "Definition of sequence.",
  },
  {
    prompt: "If $\\lim a_n=L$, then eventually $a_n$ is:",
    options: ["increasing", "arbitrarily close to $L$", "equal to $L$ always", "integer"],
    answer: "B",
    explanation: "Epsilon definition of sequence limit.",
  },
  {
    prompt: "Geometric series $\\sum ar^n$ ($n\\ge 0$) converges when:",
    options: ["$|r|>1$", "$a=0$ only", "$|r|<1$", "$r=1$"],
    answer: "C",
    explanation: "Standard geometric criterion.",
  },
  {
    prompt: "When $|r|<1$, $\\sum_{n=0}^{\\infty} ar^n$ equals:",
    options: ["$\\infty$", "$ar$", "$a/(1+r)$", "$a/(1-r)$"],
    answer: "D",
    explanation: "Closed form.",
  },
  {
    prompt: "If $a_n\\not\\to 0$, then $\\sum a_n$:",
    options: ["diverges", "telescopes", "converges", "is geometric"],
    answer: "A",
    explanation: "Term (nth-term) test.",
  }
];

export const SERIES_P2_QUIZ = [
  {
    prompt: "Ratio test with $L=\\lim|a_{n+1}/a_n|<1$ implies:",
    options: ["absolute convergence", "divergence", "inconclusive", "conditional only"],
    answer: "A",
    explanation: "Ratio test.",
  },
  {
    prompt: "If the ratio limit is $L=1$, the test is:",
    options: ["AST", "inconclusive", "divergence", "decisive always"],
    answer: "B",
    explanation: "Borderline case.",
  },
  {
    prompt: "Alternating series test needs $|b_n|$ eventually:",
    options: ["increasing", "constant", "decreasing to $0$", "greater than $1$"],
    answer: "C",
    explanation: "Leibniz criterion.",
  },
  {
    prompt: "Absolute convergence means $\\sum|a_n|$:",
    options: ["oscillates", "diverges", "equals $1$", "converges"],
    answer: "D",
    explanation: "Definition.",
  },
  {
    prompt: "Conditional convergence example:",
    options: ["alternating harmonic", "$\\sum 1/n^2$", "$\\sum n$", "geometric $|r|<1$"],
    answer: "A",
    explanation: "Converges, but not absolutely.",
  }
];

export const CONICS_P1_QUIZ = [
  {
    prompt: "Distance formula in the plane is:",
    options: ["$\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$", "$x_2 y_2$", "$m$", "$|x_2-x_1|$"],
    answer: "A",
    explanation: "Pythagorean distance.",
  },
  {
    prompt: "Circle center $(h,k)$ radius $r$:",
    options: ["$y=mx+c$", "$(x-h)^2+(y-k)^2=r^2$", "$r=x+y$", "$x^2+y^2=r$"],
    answer: "B",
    explanation: "Standard form.",
  },
  {
    prompt: "$x^2+y^2=49$ has radius:",
    options: ["$14$", "$1$", "$7$", "$49$"],
    answer: "C",
    explanation: "$\\sqrt{49}=7$.",
  },
  {
    prompt: "Parabola $y^2=4ax$ has focus:",
    options: ["$(2a,0)$", "$(0,a)$", "$(0,0)$", "$(a,0)$"],
    answer: "D",
    explanation: "Standard focus.",
  },
  {
    prompt: "Eccentricity of a circle is:",
    options: ["$0$", "$1/2$", "$1$", "$\\infty$"],
    answer: "A",
    explanation: "$e=0$.",
  }
];

export const CONICS_P2_QUIZ = [
  {
    prompt: "For ellipse $x^2/a^2+y^2/b^2=1$ ($a>b$), $c$ equals:",
    options: ["$\\sqrt{a^2-b^2}$", "$ab$", "$e$", "$a+b$"],
    answer: "A",
    explanation: "Linear eccentricity.",
  },
  {
    prompt: "Eccentricity of that ellipse is:",
    options: ["$c/b$", "$c/a$", "$a/c$", "$b/a$"],
    answer: "B",
    explanation: "$e=c/a$.",
  },
  {
    prompt: "Asymptotes of $x^2/a^2-y^2/b^2=1$:",
    options: ["$y=\\pm(a/b)x$", "$y=0$ only", "$y=\\pm(b/a)x$", "$x=0$"],
    answer: "C",
    explanation: "Standard asymptotes.",
  },
  {
    prompt: "Discriminant $B^2-4AC<0$ (nondegenerate) means:",
    options: ["parabola", "line", "hyperbola", "ellipse type"],
    answer: "D",
    explanation: "Classification invariant.",
  },
  {
    prompt: "$B^2-4AC=0$ indicates:",
    options: ["parabola type", "ellipse", "point only", "hyperbola"],
    answer: "A",
    explanation: "Classification.",
  }
];
