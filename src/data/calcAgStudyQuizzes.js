/** Study-guide quiz banks (≥10 MCQs each) for Calculus AG certificate track. */

export const DIFF_RULES_QUIZ = [
  { prompt: "Derivative of $x^5$ is:", options: ["$5x^4$", "$x^4$", "$5x^5$", "$5x$"], answer: "A", explanation: "Power rule $n x^{n-1}$." },
  { prompt: "Product rule $(uv)'$ equals:", options: ["$u'v'$", "$u'v+uv'$", "$u'+v'$", "$uv$"], answer: "B", explanation: "Sum of each factor's derivative times the other." },
  { prompt: "Chain rule for $f(g(x))$ is:", options: ["$f'(x)g'(x)$", "$f'(g(x))g'(x)$", "$f(g'(x))$", "$f'(g'(x))$"], answer: "B", explanation: "Outer at inner, times inner derivative." },
  { prompt: "$d/dx\\,\\cos x$ equals:", options: ["$\\sin x$", "$-\\sin x$", "$-\\cos x$", "$\\sec x$"], answer: "B", explanation: "Standard trig derivative." },
  { prompt: "$d/dx\\,\\ln x$ ($x>0$) equals:", options: ["$x$", "$1/x$", "$\\ln x$", "$e^x$"], answer: "B", explanation: "Logarithmic derivative." },
  { prompt: "Quotient rule numerator is:", options: ["$u'v-uv'$", "$u'v+uv'$", "$uv'-u'v$", "$u'v'$"], answer: "A", explanation: "Low d-high minus high d-low." },
  { prompt: "$d/dx\\,e^{2x}$ equals:", options: ["$e^{2x}$", "$2e^{2x}$", "$2x e^{2x}$", "$e^x$"], answer: "B", explanation: "Chain rule on exponential." },
  { prompt: "If $f$ is differentiable at $a$, then $f$ is:", options: ["Discontinuous at $a$", "Continuous at $a$", "Constant", "Linear"], answer: "B", explanation: "Differentiability => continuity." },
  { prompt: "$d/dx\\,\\sqrt{x}$ equals:", options: ["$2\\sqrt{x}$", "$1/(2\\sqrt{x})$", "$\\sqrt{x}/2$", "$1/x$"], answer: "B", explanation: "$x^{1/2}$ power rule." },
  { prompt: "Hard: $d/dx\\,[x^2\\sin x]$ equals:", options: ["$2x\\cos x$", "$2x\\sin x+x^2\\cos x$", "$x^2\\cos x$", "$2x\\sin x$"], answer: "B", explanation: "Full product rule." },
];

export const DIFF_APPS_QUIZ = [
  { prompt: "In related rates, plug numerical values:", options: ["Before differentiating", "After differentiating", "Never", "Only at $t=0$"], answer: "B", explanation: "Keep variables symbolic until after $d/dt$." },
  { prompt: "On a closed interval, absolute extrema occur at:", options: ["Only $f'=0$", "Critical points or endpoints", "Only inflection points", "Only where $f''=0$"], answer: "B", explanation: "Extreme Value Theorem candidates." },
  { prompt: "L'Hôpital requires the form:", options: ["Any form", "$0/0$ or $\\infty/\\infty$", "Always finite", "$0\\cdot\\infty$ only"], answer: "B", explanation: "Indeterminate quotients." },
  { prompt: "If $A=\\pi r^2$, then $dA/dt=$:", options: ["$2\\pi r$", "$2\\pi r\\,dr/dt$", "$\\pi r^2\\,dr/dt$", "$2r$"], answer: "B", explanation: "Chain rule in $t$." },
  { prompt: "$f'(c)=0$ and $f''(c)<0$ suggests:", options: ["Local min", "Local max", "Inflection", "No conclusion"], answer: "B", explanation: "Second derivative test." },
  { prompt: "Related rates need a:", options: ["Time-dependent linking equation", "Only a graph", "Probability model", "Matrix"], answer: "A", explanation: "Differentiate the constraint." },
  { prompt: "Hard: $\\lim_{x\\to 0}(\\sin x-x)/x^3=$:", options: ["$0$", "$-1/6$", "$1/6$", "$\\infty$"], answer: "B", explanation: "L'Hôpital / Taylor." },
  { prompt: "Linearization of $f$ at $a$ is:", options: ["$f(a)+f'(a)(x-a)$", "$f'(a)x$", "$f(a)x$", "$f''(a)$"], answer: "A", explanation: "Tangent line." },
  { prompt: "A critical point can occur where $f'$:", options: ["Equals 0 or DNE", "Equals 1 only", "Equals $f$", "Is infinite always"], answer: "A", explanation: "Definition." },
  { prompt: "Hard: expanding circle $dr/dt=2$, $r=10$: $dA/dt=$:", options: ["$20\\pi$", "$40\\pi$", "$100\\pi$", "$2\\pi$"], answer: "B", explanation: "$2\\pi r\\,dr/dt=40\\pi$." },
];

export const DIFF_ADV_QUIZ = [
  { prompt: "MVT guarantees a point where $f'$ equals:", options: ["$0$", "The secant slope", "$f''$", "$f(a)$"], answer: "B", explanation: "Average rate of change." },
  { prompt: "Implicit differentiation is needed when:", options: ["$y$ is isolated easily", "$y$ is defined by an unsolved equation", "$f$ is linear", "$x$ is constant"], answer: "B", explanation: "Differentiate both sides." },
  { prompt: "Parametric $dy/dx$ equals:", options: ["$(dx/dt)/(dy/dt)$", "$(dy/dt)/(dx/dt)$", "$dx/dy$", "$t$"], answer: "B", explanation: "Quotient of time rates." },
  { prompt: "On $x^2+y^2=25$, $dy/dx=$:", options: ["$-x/y$", "$x/y$", "$-y/x$", "$2x$"], answer: "A", explanation: "Implicit." },
  { prompt: "Rolle's theorem needs:", options: ["$f(a)=f(b)$", "$f'(a)=0$ given", "$f$ discontinuous", "$f''>0$"], answer: "A", explanation: "Special MVT case." },
  { prompt: "Hard: at $(3,4)$ on the circle, $dy/dx=$:", options: ["$-3/4$", "$3/4$", "$-4/3$", "$4/3$"], answer: "A", explanation: "$-x/y$." },
  { prompt: "$x=t^2$, $y=t^3$: $dy/dx$ at $t=1$ is:", options: ["$3/2$", "$2/3$", "$3$", "$1$"], answer: "A", explanation: "$3t/2$." },
  { prompt: "$|x|$ at $0$ is:", options: ["Differentiable", "Continuous but not differentiable", "Discontinuous", "Smooth"], answer: "B", explanation: "Corner." },
  { prompt: "If $f'=0$ on an interval, $f$ is:", options: ["Constant", "Linear", "Zero", "Quadratic"], answer: "A", explanation: "MVT corollary." },
  { prompt: "Hard: $d^2y/dx^2$ parametric formula divides by:", options: ["$dx/dt$", "$dy/dt$", "$t$", "$d^2x/dt^2$"], answer: "A", explanation: "Differentiate $dy/dx$ then divide by $dx/dt$." },
];

export const INT_FUND_QUIZ = [
  { prompt: "$\\int 3x^2\\,dx$ equals:", options: ["$x^3+C$", "$6x+C$", "$3x^3+C$", "$x^2+C$"], answer: "A", explanation: "Antiderivative." },
  { prompt: "$d/dx\\int_0^x f(t)\\,dt$ equals:", options: ["$f(x)$", "$F(x)$", "$f'(x)$", "$0$"], answer: "A", explanation: "FTC." },
  { prompt: "$\\int_0^2 3x^2\\,dx$ equals:", options: ["$8$", "$24$", "$4$", "$0$"], answer: "A", explanation: "$[x^3]_0^2$." },
  { prompt: "Indefinite integrals include:", options: ["$+C$", "No constant", "A single number", "Only $0$"], answer: "A", explanation: "Family of antiderivatives." },
  { prompt: "$\\int \\cos x\\,dx$ equals:", options: ["$\\sin x+C$", "$-\\sin x+C$", "$\\cos x+C$", "$-\\cos x+C$"], answer: "A", explanation: "Standard." },
  { prompt: "$\\int (1/x)\\,dx$ equals:", options: ["$\\ln|x|+C$", "$1/x^2+C$", "$x+C$", "$e^x+C$"], answer: "A", explanation: "Log rule." },
  { prompt: "Area under $y=\\sqrt{x}$ from $0$ to $4$ is:", options: ["$16/3$", "$8$", "$4$", "$2$"], answer: "A", explanation: "Power reverse." },
  { prompt: "$\\int_{-1}^{1} x\\,dx$ equals:", options: ["$0$", "$1$", "$2$", "$-1$"], answer: "A", explanation: "Odd function." },
  { prompt: "Hard: $d/dx\\int_1^{x^2}\\sin(t^2)\\,dt=$:", options: ["$2x\\sin(x^4)$", "$\\sin(x^2)$", "$\\sin(x^4)$", "$2x$"], answer: "A", explanation: "FTC + chain." },
  { prompt: "Hard: net signed area can be zero when:", options: ["Equal areas cancel above/below", "f>0 always", "Limits are infinite", "f is constant"], answer: "A", explanation: "Positive and negative cancel." },
];

export const INT_TECH_QUIZ = [
  { prompt: "$\\int 2x\\cos(x^2)\\,dx$ equals:", options: ["$\\sin(x^2)+C$", "$2\\sin(x^2)+C$", "$\\cos(x^2)+C$", "$x\\sin(x^2)+C$"], answer: "A", explanation: "Substitution." },
  { prompt: "Integration by parts starts from:", options: ["$\\int u\\,dv=uv-\\int v\\,du$", "$\\int u\\,dv=u'v$", "$\\int uv=u'v'$", "$u=v$"], answer: "A", explanation: "Undo product rule." },
  { prompt: "$\\int_1^\\infty x^{-2}\\,dx$ converges to:", options: ["$1$", "$\\infty$", "$0$", "$2$"], answer: "A", explanation: "Improper integral." },
  { prompt: "$\\int \\ln x\\,dx$ equals:", options: ["$x\\ln x-x+C$", "$1/x+C$", "$x\\ln x+C$", "$\\ln x+C$"], answer: "A", explanation: "Parts." },
  { prompt: "Partial fractions need numerator degree:", options: ["Less than denominator", "Greater than denominator", "Equal always", "Zero"], answer: "A", explanation: "Else divide first." },
  { prompt: "Substitution undoes:", options: ["Chain rule", "Product rule", "Quotient rule", "MVT"], answer: "A", explanation: "u-sub." },
  { prompt: "$p$-integral $\\int_1^\\infty x^{-p}\\,dx$ converges when:", options: ["$p>1$", "$p<1$", "$p=1$", "$p=0$"], answer: "A", explanation: "Standard test." },
  { prompt: "Hard: $\\int x e^x\\,dx=$:", options: ["$e^x(x-1)+C$", "$xe^x+C$", "$e^x+C$", "$x^2 e^x+C$"], answer: "A", explanation: "Parts." },
  { prompt: "Hard: $\\int_0^1 x^{-1/2}\\,dx=$:", options: ["$2$", "$\\infty$", "$1$", "$0$"], answer: "A", explanation: "Convergent improper." },
  { prompt: "LIATE helps choose:", options: ["$u$ in parts", "$dv$ only", "Limits", "Series"], answer: "A", explanation: "Heuristic." },
];

export const LIMITS_P1_QUIZ = [
  { prompt: "For a multivariable limit to exist, path limits must:", options: ["All agree", "Agree on axes only", "Equal $f(a,b)$", "Be infinite"], answer: "A", explanation: "Path-independence required." },
  { prompt: "For $f=xy/(x^2+y^2)$, lim as $(x,y)\\to(0,0)$:", options: ["$0$", "$1$", "$1/2$", "DNE"], answer: "D", explanation: "Paths disagree." },
  { prompt: "If $|f|\\le g$ and $\\lim g=0$, then $\\lim f=$:", options: ["$1$", "$0$", "DNE", "$\\infty$"], answer: "B", explanation: "Squeeze." },
  { prompt: "Along $y=x^2$, $\\lim x^2 y/(x^4+y^2)=$:", options: ["$0$", "$1$", "$1/2$", "DNE along path"], answer: "C", explanation: "Substitute." },
  { prompt: "Polar: $r\\cos\\theta\\sin\\theta$ as $r\\to 0$:", options: ["Fails", "Limit $0$", "Limit $1/2$", "Limit $1$"], answer: "B", explanation: "Bound by $r/2$." },
  { prompt: "$\\lim_{x\\to 2}(x^2-4)/(x-2)=$:", options: ["$4$", "$0$", "DNE", "$2$"], answer: "A", explanation: "Factor." },
  { prompt: "$\\lim_{x\\to\\infty}(3x^2)/(2x^2)=$:", options: ["$3/2$", "$0$", "$\\infty$", "$1$"], answer: "A", explanation: "Leading terms." },
  { prompt: "$\\lim_{x\\to 0}\\sin x/x=$:", options: ["$1$", "$0$", "$\\infty$", "DNE"], answer: "A", explanation: "Standard." },
  { prompt: "Hard: $\\lim_{x\\to 0}(\\sin x-x)/x^3=$:", options: ["$-1/6$", "$0$", "$1/6$", "$\\infty$"], answer: "A", explanation: "L'Hôpital/Taylor." },
  { prompt: "Hard: $\\lim_{(x,y)\\to(0,0)}(x^2-y^2)/(x^2+y^2)$:", options: ["DNE", "$0$", "$1$", "$-1$"], answer: "A", explanation: "Axes disagree." },
];

export const LIMITS_P2_QUIZ = [
  { prompt: "$f$ continuous at $(a,b)$ requires:", options: ["Only defined", "Limit may differ from $f$", "Defined, limit exists, equal", "Differentiable"], answer: "C", explanation: "Three-part definition." },
  { prompt: "Is $(x^2-y^2)/(x^2+y^2)$ continuous at origin?", options: ["Yes rational", "No, limit DNE", "Yes if $f(0,0)=0$", "Yes everywhere"], answer: "B", explanation: "Limit DNE." },
  { prompt: "Removable discontinuity means:", options: ["Jump", "Limit exists, value wrong/missing", "Vertical asymptote", "Oscillation only"], answer: "B", explanation: "Classification." },
  { prompt: "IVT needs $f$ continuous on $[a,b]$ and:", options: ["Opposite signs at ends", "$f'=0$", "Odd $f$", "$f(a)=0$"], answer: "A", explanation: "Root existence." },
  { prompt: "Polynomials are continuous:", options: ["Everywhere", "Only at $0$", "Nowhere", "On integers only"], answer: "A", explanation: "Standard." },
  { prompt: "Jump: left and right limits:", options: ["Agree", "Exist but disagree", "Both fail", "Equal $f(a)$"], answer: "B", explanation: "Jump." },
  { prompt: "Composition: $f$ continuous at $b$, $\\lim g=b$ =>", options: ["$\\lim f\\circ g=f(b)$", "Always DNE", "$f'(b)$", "$g(b)$"], answer: "A", explanation: "Preservation." },
  { prompt: "Hard: $\\varepsilon$-$\\delta$ for $\\lim(3x+1)=7$ uses $\\delta=$:", options: ["$\\varepsilon/3$", "$\\varepsilon$", "$3\\varepsilon$", "$1$"], answer: "A", explanation: "Factor $3$." },
  { prompt: "Hard: EVT says continuous $f$ on $[a,b]$ attains:", options: ["Abs max and min", "Only a root", "$f'=0$", "Inflection"], answer: "A", explanation: "Extreme Value Theorem." },
  { prompt: "Hard: redefine $f(1)=2$ for $(x^2-1)/(x-1)$ to:", options: ["Remove discontinuity", "Create a jump", "Make discontinuous", "Change the limit"], answer: "A", explanation: "Removable repair." },
];

export const SERIES_P1_QUIZ = [
  { prompt: "A sequence is:", options: ["an ordered list of numbers", "a continuous function", "a random set", "a matrix"], answer: "A", explanation: "Definition of sequence." },
  { prompt: "If $\\lim a_n=L$, then eventually $a_n$ is:", options: ["equal to $L$ always", "arbitrarily close to $L$", "increasing", "integer"], answer: "B", explanation: "Epsilon definition of sequence limit." },
  { prompt: "Geometric series $\\sum ar^n$ ($n\\ge 0$) converges when:", options: ["$|r|<1$", "$|r|>1$", "$r=1$", "$a=0$ only"], answer: "A", explanation: "Standard geometric criterion." },
  { prompt: "When $|r|<1$, $\\sum_{n=0}^{\\infty} ar^n$ equals:", options: ["$a/(1-r)$", "$a/(1+r)$", "$ar$", "$\\infty$"], answer: "A", explanation: "Closed form." },
  { prompt: "If $a_n\\not\\to 0$, then $\\sum a_n$:", options: ["converges", "diverges", "is geometric", "telescopes"], answer: "B", explanation: "Term (nth-term) test." },
  { prompt: "Harmonic series $\\sum 1/n$:", options: ["converges", "diverges", "equals $e$", "equals $0$"], answer: "B", explanation: "Classic divergent series." },
  { prompt: "$p$-series $\\sum 1/n^p$ converges iff:", options: ["$p>1$", "$p\\le 1$", "$p=0$", "$p<0$"], answer: "A", explanation: "$p$-test." },
  { prompt: "Partial sum $s_N$ means:", options: ["$a_1+\\cdots+a_N$", "$a_N$", "$a_1 a_N$", "$N!$"], answer: "A", explanation: "Definition." },
  { prompt: "Telescoping series typically arise from:", options: ["partial fractions that cancel", "derivatives only", "matrices", "probability"], answer: "A", explanation: "Cancellation in $s_N$." },
  { prompt: "Hard: $\\sum_{n=0}^{\\infty}(1/3)^n$ equals:", options: ["$3/2$", "$1/3$", "$3$", "$\\infty$"], answer: "A", explanation: "$1/(1-1/3)=3/2$." },
];

export const SERIES_P2_QUIZ = [
  { prompt: "Ratio test with $L=\\lim|a_{n+1}/a_n|<1$ implies:", options: ["absolute convergence", "divergence", "inconclusive", "conditional only"], answer: "A", explanation: "Ratio test." },
  { prompt: "If the ratio limit is $L=1$, the test is:", options: ["decisive always", "inconclusive", "divergence", "AST"], answer: "B", explanation: "Borderline case." },
  { prompt: "Alternating series test needs $|b_n|$ eventually:", options: ["decreasing to $0$", "increasing", "constant", "greater than $1$"], answer: "A", explanation: "Leibniz criterion." },
  { prompt: "Absolute convergence means $\\sum|a_n|$:", options: ["converges", "diverges", "oscillates", "equals $1$"], answer: "A", explanation: "Definition." },
  { prompt: "Conditional convergence example:", options: ["alternating harmonic", "$\\sum 1/n^2$", "geometric $|r|<1$", "$\\sum n$"], answer: "A", explanation: "Converges, but not absolutely." },
  { prompt: "Root test uses:", options: ["$\\limsup|a_n|^{1/n}$", "$a_n+a_{n+1}$", "$\\int a_n$", "$n!$"], answer: "A", explanation: "Root test." },
  { prompt: "Power series $\\sum c_n(x-a)^n$ has a:", options: ["radius of convergence", "only finite sum", "unique endpoint", "matrix rank"], answer: "A", explanation: "Disk/interval of convergence." },
  { prompt: "Inside the radius, termwise differentiation is:", options: ["valid", "never allowed", "only at endpoints", "only for geometric"], answer: "A", explanation: "Power series theorem." },
  { prompt: "Hard: radius of $\\sum x^n/n!$ is:", options: ["$\\infty$", "$1$", "$0$", "$e$"], answer: "A", explanation: "Exponential series." },
  { prompt: "Hard: $\\sum (-1)^n/\\sqrt{n}$ is:", options: ["conditionally convergent", "absolutely convergent", "divergent", "geometric"], answer: "A", explanation: "AST yes; $p=1/2$ fails absolute." },
];

export const CONICS_P1_QUIZ = [
  { prompt: "Distance formula in the plane is:", options: ["$\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$", "$|x_2-x_1|$", "$x_2 y_2$", "$m$"], answer: "A", explanation: "Pythagorean distance." },
  { prompt: "Circle center $(h,k)$ radius $r$:", options: ["$(x-h)^2+(y-k)^2=r^2$", "$x^2+y^2=r$", "$y=mx+c$", "$r=x+y$"], answer: "A", explanation: "Standard form." },
  { prompt: "$x^2+y^2=49$ has radius:", options: ["$7$", "$49$", "$14$", "$1$"], answer: "A", explanation: "$\\sqrt{49}=7$." },
  { prompt: "Parabola $y^2=4ax$ has focus:", options: ["$(a,0)$", "$(0,a)$", "$(2a,0)$", "$(0,0)$"], answer: "A", explanation: "Standard focus." },
  { prompt: "Eccentricity of a circle is:", options: ["$0$", "$1$", "$\\infty$", "$1/2$"], answer: "A", explanation: "$e=0$." },
  { prompt: "Parabola eccentricity is:", options: ["$1$", "$0$", "$2$", "$e>1$"], answer: "A", explanation: "$e=1$." },
  { prompt: "Ellipse satisfies:", options: ["$0<e<1$", "$e>1$", "$e=0$ only", "$e=\\infty$"], answer: "A", explanation: "Definition." },
  { prompt: "Hyperbola satisfies:", options: ["$e>1$", "$e<1$", "$e=0$", "$e=1$"], answer: "A", explanation: "Definition." },
  { prompt: "Focus–directrix: $PF$ equals:", options: ["$e\\cdot$(distance to directrix)", "center only", "slope", "$2a$ always"], answer: "A", explanation: "Unifying conic definition." },
  { prompt: "Hard: complete the square for $x^2+y^2-6x=0$; center is:", options: ["$(3,0)$", "$(0,3)$", "$(6,0)$", "$(-3,0)$"], answer: "A", explanation: "$(x-3)^2+y^2=9$." },
];

export const CONICS_P2_QUIZ = [
  { prompt: "For ellipse $x^2/a^2+y^2/b^2=1$ ($a>b$), $c$ equals:", options: ["$\\sqrt{a^2-b^2}$", "$a+b$", "$ab$", "$e$"], answer: "A", explanation: "Linear eccentricity." },
  { prompt: "Eccentricity of that ellipse is:", options: ["$c/a$", "$a/c$", "$b/a$", "$c/b$"], answer: "A", explanation: "$e=c/a$." },
  { prompt: "Asymptotes of $x^2/a^2-y^2/b^2=1$:", options: ["$y=\\pm(b/a)x$", "$y=\\pm(a/b)x$", "$x=0$", "$y=0$ only"], answer: "A", explanation: "Standard asymptotes." },
  { prompt: "Discriminant $B^2-4AC<0$ (nondegenerate) means:", options: ["ellipse type", "hyperbola", "parabola", "line"], answer: "A", explanation: "Classification invariant." },
  { prompt: "$B^2-4AC=0$ indicates:", options: ["parabola type", "ellipse", "hyperbola", "point only"], answer: "A", explanation: "Classification." },
  { prompt: "$B^2-4AC>0$ indicates:", options: ["hyperbola type", "ellipse", "circle", "empty"], answer: "A", explanation: "Classification." },
  { prompt: "Parabola reflection property sends axis-parallel rays:", options: ["through the focus", "through the center", "to infinity only", "to the directrix"], answer: "A", explanation: "Optical property." },
  { prompt: "Ellipse string property: sum of distances to foci is:", options: ["$2a$", "$2c$", "$e$", "$b$"], answer: "A", explanation: "Constant $2a$." },
  { prompt: "Hard: foci of $x^2/25+y^2/9=1$ are:", options: ["$(\\pm 4,0)$", "$(\\pm 5,0)$", "$(0,\\pm 4)$", "$(\\pm 3,0)$"], answer: "A", explanation: "$c=\\sqrt{25-9}=4$." },
  { prompt: "Hard: Kepler orbits under inverse-square gravity are:", options: ["conics with focus at the sun", "lines only", "circles only", "random curves"], answer: "A", explanation: "Newtonian celestial mechanics." },
];
