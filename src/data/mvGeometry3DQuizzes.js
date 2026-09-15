/** Study-guide quiz banks for the Multivariable "3D Analytical Geometry & Quadric Surfaces" guide — 8 MCQs per section. */

export const MV_GEO_DIRCOS_QUIZ = [
  {
    prompt: "For the vector $\\mathbf{v}=(3,4,12)$, the direction cosine $n$ (with the $z$-axis) is:",
    options: ["$12/13$", "$12/19$", "$3/13$"],
    answer: "A",
    explanation: "$|\\mathbf{v}|=\\sqrt{9+16+144}=13$, so $n=z/|\\mathbf{v}|=12/13$.",
  },
  {
    prompt: "Which identity must every set of direction cosines $(l,m,n)$ satisfy?",
    options: ["$l+m+n=1$", "$l^2+m^2+n^2=1$", "$l^2+m^2+n^2=0$"],
    answer: "B",
    explanation: "Direction cosines are the components of a unit vector, so their squares sum to 1.",
  },
  {
    prompt: "Direction ratios of the line joining $(1,2,3)$ to $(4,6,3)$ are:",
    options: ["$(3,4,0)$", "$(5,8,6)$", "$(4,6,3)$"],
    answer: "A",
    explanation: "Subtract coordinates: $(4-1,\\,6-2,\\,3-3)=(3,4,0)$.",
  },
  {
    prompt: "Is $(l,m,n)=\\left(\\tfrac{1}{3},\\tfrac{2}{3},\\tfrac{2}{3}\\right)$ a valid set of direction cosines?",
    options: [
      "Yes — $l^2+m^2+n^2=1$",
      "No — the values must be integers",
      "No — $l^2+m^2+n^2\\neq 1$",
    ],
    answer: "A",
    explanation: "$\\tfrac19+\\tfrac49+\\tfrac49=\\tfrac99=1$, so it satisfies the required identity.",
  },
  {
    prompt: "A vector points along the positive $z$-axis. Its direction angle $\\gamma$ (with the $z$-axis) is:",
    options: ["$0^\\circ$", "$90^\\circ$", "$180^\\circ$"],
    answer: "A",
    explanation: "The vector is parallel to the axis it's measured against, so the angle between them is $0^\\circ$ and $\\cos\\gamma=1$.",
  },
  {
    prompt: "A vector has direction ratios $(2,-2,1)$. Its direction cosines are:",
    options: [
      "$\\left(\\tfrac23,-\\tfrac23,\\tfrac13\\right)$",
      "$(2,-2,1)$",
      "$\\left(\\tfrac12,-\\tfrac12,\\tfrac14\\right)$",
    ],
    answer: "A",
    explanation: "$|\\mathbf{v}|=\\sqrt{4+4+1}=3$; divide each ratio by 3.",
  },
  {
    prompt: "If a vector's direction cosines are $l=-1,\\,m=0,\\,n=0$, the vector points:",
    options: [
      "Along the negative $x$-axis",
      "Along the positive $x$-axis",
      "Along the negative $y$-axis",
    ],
    answer: "A",
    explanation: "$l=-1$ means the unit vector is $(-1,0,0)$, i.e. the negative $x$-direction.",
  },
  {
    prompt: "If $l=0,\\,m=0,\\,n=1$, the vector is parallel to:",
    options: ["The $z$-axis", "The $x$-axis", "The plane $z=0$"],
    answer: "A",
    explanation: "$(0,0,1)$ is the unit vector along the $z$-axis.",
  },
];

export const MV_GEO_ANGLE3D_QUIZ = [
  {
    prompt: "Lines with direction ratios $(1,1,1)$ and $(1,-1,0)$ meet at an angle $\\theta$ with:",
    options: ["$\\cos\\theta=0$ ($\\theta=90^\\circ$)", "$\\cos\\theta=1$", "$\\cos\\theta=1/\\sqrt6$"],
    answer: "A",
    explanation: "Dot product $=1(1)+1(-1)+1(0)=0$, so the lines are perpendicular.",
  },
  {
    prompt: "Direction ratios $(2,0,0)$ and $(0,3,0)$ describe two lines that are:",
    options: ["Perpendicular", "Parallel", "Skew"],
    answer: "A",
    explanation: "Their dot product is $0$, and both lie along coordinate axes, so they're perpendicular (and here they also intersect at the origin).",
  },
  {
    prompt: "For direction ratios $(1,2,2)$ and $(2,1,2)$, $\\cos\\theta$ equals:",
    options: ["$8/9$", "$5/9$", "$1$"],
    answer: "A",
    explanation: "Dot product $=2+2+4=8$; both vectors have magnitude 3, so $\\cos\\theta=8/(3\\cdot3)=8/9$.",
  },
  {
    prompt: "Lines with direction ratios $(2,4,6)$ and $(1,2,3)$ are:",
    options: ["Parallel ($\\theta=0^\\circ$)", "Perpendicular", "At $60^\\circ$"],
    answer: "A",
    explanation: "$(2,4,6)=2(1,2,3)$ — one is a scalar multiple of the other, so the directions coincide.",
  },
  {
    prompt: "Two lines with direction ratios $(a_1,b_1,c_1)$ and $(a_2,b_2,c_2)$ are perpendicular exactly when:",
    options: [
      "$a_1a_2+b_1b_2+c_1c_2=0$",
      "$a_1/a_2=b_1/b_2=c_1/c_2$",
      "$a_1a_2+b_1b_2+c_1c_2=1$",
    ],
    answer: "A",
    explanation: "Perpendicularity means the dot product of the direction vectors is zero.",
  },
  {
    prompt: "The angle between lines with direction ratios $(1,0,0)$ and $(1,1,0)$ is:",
    options: ["$45^\\circ$", "$90^\\circ$", "$30^\\circ$"],
    answer: "A",
    explanation: "$\\cos\\theta=\\dfrac{1}{1\\cdot\\sqrt2}=\\dfrac{1}{\\sqrt2}\\Rightarrow\\theta=45^\\circ$.",
  },
  {
    prompt: "If two lines are given directly by their direction cosines $(l_1,m_1,n_1)$ and $(l_2,m_2,n_2)$, the angle between them satisfies:",
    options: [
      "$\\cos\\theta=l_1l_2+m_1m_2+n_1n_2$",
      "$\\cos\\theta=\\dfrac{l_1l_2+m_1m_2+n_1n_2}{\\sqrt{l_1^2+m_1^2+n_1^2}}$",
      "$\\cos\\theta=l_1+l_2+m_1+m_2$",
    ],
    answer: "A",
    explanation: "Direction cosines already come from unit vectors, so no magnitude division is needed — the dot product alone gives $\\cos\\theta$.",
  },
  {
    prompt: "The angle a line makes with itself is:",
    options: ["$0^\\circ$, since $\\cos\\theta=1$", "$90^\\circ$", "Undefined"],
    answer: "A",
    explanation: "A vector dotted with itself over its own magnitude squared gives $\\cos\\theta=1$.",
  },
];

export const MV_GEO_PLANE_QUIZ = [
  {
    prompt: "The point-normal equation of the plane through $(1,2,3)$ with normal $(1,1,1)$ is:",
    options: ["$x+y+z=6$", "$x+y+z=0$", "$x-y+z=2$"],
    answer: "A",
    explanation: "$1(x-1)+1(y-2)+1(z-3)=0\\Rightarrow x+y+z-6=0$.",
  },
  {
    prompt: "The normal vector to the plane $2x-3y+z=5$ is:",
    options: ["$(2,-3,1)$", "$(2,-3,5)$", "$(-2,3,-1)$ only"],
    answer: "A",
    explanation: "In $Ax+By+Cz=D$, the coefficients $(A,B,C)$ are exactly the components of a normal vector.",
  },
  {
    prompt: "The plane through the origin with normal $(1,0,0)$ is:",
    options: ["$x=0$ (the $yz$-plane)", "$y=0$", "$x+y+z=0$"],
    answer: "A",
    explanation: "$1(x-0)+0(y-0)+0(z-0)=0\\Rightarrow x=0$.",
  },
  {
    prompt: "Starting from the vector form $\\mathbf{n}\\cdot(\\mathbf{r}-\\mathbf{r}_0)=0$, the constant $D$ in $\\mathbf{n}\\cdot\\mathbf{r}=D$ equals:",
    options: ["$\\mathbf{n}\\cdot\\mathbf{r}_0$", "$|\\mathbf{r}_0|$", "$0$ always"],
    answer: "A",
    explanation: "Expanding gives $\\mathbf{n}\\cdot\\mathbf{r}=\\mathbf{n}\\cdot\\mathbf{r}_0$, so the right-hand side is the fixed value $\\mathbf{n}\\cdot\\mathbf{r}_0$.",
  },
  {
    prompt: "Two planes are parallel exactly when:",
    options: [
      "Their normal vectors are scalar multiples of each other",
      "They share exactly one point",
      "Their normals are perpendicular",
    ],
    answer: "A",
    explanation: "Parallel planes tilt the same way in space, so their normals point in the same (or opposite) direction.",
  },
  {
    prompt: "The plane through $(0,0,0)$, $(1,0,0)$ and $(0,1,0)$ has equation:",
    options: ["$z=0$", "$x=0$", "$x+y+z=0$"],
    answer: "A",
    explanation: "The normal is $(1,0,0)\\times(0,1,0)=(0,0,1)$, giving $0(x)+0(y)+1(z)=0\\Rightarrow z=0$.",
  },
  {
    prompt: "The equations $3x+3y+3z=9$ and $x+y+z=3$ represent:",
    options: [
      "The same plane",
      "Two parallel but distinct planes",
      "Two perpendicular planes",
    ],
    answer: "A",
    explanation: "Dividing the first equation by 3 gives the second exactly — same plane, normals are scalar multiples.",
  },
  {
    prompt: "In the vector form $\\mathbf{n}\\cdot(\\mathbf{r}-\\mathbf{r}_0)=0$, what does $\\mathbf{r}_0$ represent?",
    options: [
      "One known point that lies on the plane",
      "The plane's normal vector",
      "The origin, always",
    ],
    answer: "A",
    explanation: "$\\mathbf{r}_0$ is the position vector of a fixed point already known to be on the plane.",
  },
];

export const MV_GEO_PTPLANE_QUIZ = [
  {
    prompt: "The distance from $(1,1,1)$ to the plane $x+y+z-6=0$ is:",
    options: ["$\\sqrt3$", "$3$", "$6/\\sqrt3$"],
    answer: "A",
    explanation: "$d=\\dfrac{|1+1+1-6|}{\\sqrt{1^2+1^2+1^2}}=\\dfrac{3}{\\sqrt3}=\\sqrt3$.",
  },
  {
    prompt: "The distance from the origin to the plane $2x+2y+z-6=0$ is:",
    options: ["$2$", "$6$", "$6/3$ only in special cases"],
    answer: "A",
    explanation: "$d=\\dfrac{|0+0+0-6|}{\\sqrt{4+4+1}}=\\dfrac{6}{3}=2$.",
  },
  {
    prompt: "The point $(2,2,2)$ and the plane $x+y+z-6=0$: the distance between them is:",
    options: ["$0$, since the point lies on the plane", "$\\sqrt3$", "$2$"],
    answer: "A",
    explanation: "$2+2+2-6=0$, so the numerator vanishes — the point is on the plane.",
  },
  {
    prompt: "The distance from the origin to a general plane $Ax+By+Cz+D=0$ is:",
    options: [
      "$|D|/\\sqrt{A^2+B^2+C^2}$",
      "$|D|$",
      "$D/\\sqrt{A^2+B^2+C^2}$ (no absolute value needed)",
    ],
    answer: "A",
    explanation: "Plug $(0,0,0)$ into the point-to-plane distance formula — only the $D$ term survives, and distance must be nonnegative.",
  },
  {
    prompt: "The distance between the parallel planes $x+y+z=1$ and $x+y+z=4$ is:",
    options: ["$\\sqrt3$", "$3$", "$3/\\sqrt2$"],
    answer: "A",
    explanation: "Rewrite as $x+y+z-4=0$ and measure from any point on the first plane, e.g. $(1,0,0)$: $d=\\dfrac{|1-4|}{\\sqrt3}=\\dfrac{3}{\\sqrt3}=\\sqrt3$.",
  },
  {
    prompt: "If the normal $(A,B,C)$ used in the distance formula is not a unit vector, do you still divide by $\\sqrt{A^2+B^2+C^2}$?",
    options: [
      "Yes — always, regardless of the normal's length",
      "No — only if $(A,B,C)$ happens to be a unit vector",
      "No — the formula only works for unit normals",
    ],
    answer: "A",
    explanation: "The denominator is exactly what rescales the raw plug-in value into a true perpendicular distance.",
  },
  {
    prompt: "The distance from $(3,0,0)$ to the plane $x=5$ is:",
    options: ["$2$", "$5$", "$3$"],
    answer: "A",
    explanation: "Write the plane as $x-5=0$: $d=\\dfrac{|3-5|}{\\sqrt{1}}=2$.",
  },
  {
    prompt: "Why does the point-to-plane distance formula use an absolute value in the numerator?",
    options: [
      "Because the raw plug-in value can be negative, but distance can't be",
      "Because $A,B,C$ can be negative",
      "It's purely a stylistic convention with no mathematical reason",
    ],
    answer: "A",
    explanation: "Plugging a point on one side of the plane gives a negative signed value; the absolute value converts it to an actual (nonnegative) distance.",
  },
];

export const MV_GEO_LINE3D_QUIZ = [
  {
    prompt: "The parametric equations of the line through $(1,0,-1)$ with direction $(2,3,-1)$ are:",
    options: [
      "$x=1+2t,\\;y=3t,\\;z=-1-t$",
      "$x=2+t,\\;y=3+t,\\;z=-1+t$",
      "$x=1+3t,\\;y=2t,\\;z=-1-t$",
    ],
    answer: "A",
    explanation: "Each coordinate is $\\text{start}+t\\cdot\\text{direction component}$: $x=1+2t,\\,y=0+3t,\\,z=-1+(-1)t$.",
  },
  {
    prompt: "The symmetric form $\\dfrac{x-x_0}{a}=\\dfrac{y-y_0}{b}=\\dfrac{z-z_0}{c}$ requires:",
    options: [
      "None of $a,b,c$ is zero",
      "$a=b=c$",
      "The line passes through the origin",
    ],
    answer: "A",
    explanation: "Dividing by $a$, $b$, or $c$ is only valid when each of them is nonzero.",
  },
  {
    prompt: "If a line has direction ratios $(a,0,c)$ with $b=0$, how is this handled?",
    options: [
      "Write $y=y_0$ separately, and $\\dfrac{x-x_0}{a}=\\dfrac{z-z_0}{c}$ for the rest",
      "The line cannot be written in any closed form",
      "Set $b=1$ instead of $0$ to avoid division issues",
    ],
    answer: "A",
    explanation: "A zero component means that coordinate never changes, so it's pinned to a constant while the other two follow the usual ratio.",
  },
  {
    prompt: "In $\\mathbf{r}(t)=\\mathbf{r}_0+t\\mathbf{v}$, the point corresponding to $t=0$ is:",
    options: ["$\\mathbf{r}_0$ always", "The origin always", "Undefined without more information"],
    answer: "A",
    explanation: "Plugging $t=0$ removes the $t\\mathbf{v}$ term entirely, leaving just $\\mathbf{r}_0$.",
  },
  {
    prompt: "Two lines have direction vectors that are scalar multiples of each other. The lines are:",
    options: [
      "Parallel (possibly the same line)",
      "Necessarily identical",
      "Necessarily skew",
    ],
    answer: "A",
    explanation: "Proportional direction vectors mean the lines point the same way, but they could still be offset from each other.",
  },
  {
    prompt: "The direction ratios of the line through $(1,1,1)$ and $(2,3,4)$ are:",
    options: ["$(1,2,3)$", "$(3,4,5)$", "$(2,3,4)$"],
    answer: "A",
    explanation: "Subtract coordinates: $(2-1,\\,3-1,\\,4-1)=(1,2,3)$.",
  },
  {
    prompt: "Is the point $(3,5,7)$ on the line $x=1+2t,\\,y=1+4t,\\,z=1+6t$?",
    options: [
      "Yes — $t=1$ satisfies all three coordinates",
      "No — no single $t$ works for all three",
      "Cannot be determined",
    ],
    answer: "A",
    explanation: "From $x$: $3=1+2t\\Rightarrow t=1$. Check: $y=1+4(1)=5$ ✓, $z=1+6(1)=7$ ✓.",
  },
  {
    prompt: "As $t$ ranges over all real numbers, $\\mathbf{r}(t)=\\mathbf{r}_0+t\\mathbf{v}$ traces out:",
    options: [
      "A straight line through $\\mathbf{r}_0$ in the direction of $\\mathbf{v}$",
      "A plane containing $\\mathbf{r}_0$",
      "A circle centered at $\\mathbf{r}_0$",
    ],
    answer: "A",
    explanation: "This is exactly the vector (parametric) definition of a 3D line.",
  },
];

export const MV_GEO_SKEW_QUIZ = [
  {
    prompt: "Two lines in 3D are called skew when:",
    options: [
      "They are not parallel and do not intersect",
      "They are perpendicular",
      "They lie in the same plane",
    ],
    answer: "A",
    explanation: "Skew lines don't share a common plane — unlike in 2D, two non-parallel lines in 3D can simply miss each other.",
  },
  {
    prompt: "If $\\mathbf{v}_1\\times\\mathbf{v}_2=\\mathbf{0}$ for two lines, they cannot be skew because:",
    options: [
      "A zero cross product means the direction vectors are parallel",
      "It means the lines intersect at the origin",
      "It means the lines are perpendicular",
    ],
    answer: "A",
    explanation: "The cross product vanishes only when the two directions are parallel (or one is zero) — so the lines are parallel, not skew.",
  },
  {
    prompt: "Line 1 passes through $(0,0,0)$ with $\\mathbf{v}_1=(1,0,0)$; line 2 passes through $(0,1,0)$ with $\\mathbf{v}_2=(0,0,1)$. The shortest distance between them is:",
    options: ["$1$", "$0$", "$\\sqrt2$"],
    answer: "A",
    explanation: "$\\mathbf{v}_1\\times\\mathbf{v}_2=(0,-1,0)$; with $\\mathbf{r}_2-\\mathbf{r}_1=(0,1,0)$, the dot product is $-1$ and $|\\mathbf{v}_1\\times\\mathbf{v}_2|=1$, so $d=|-1|/1=1$.",
  },
  {
    prompt: "If the shortest-distance formula for two non-parallel lines returns $0$, this means:",
    options: [
      "The lines actually intersect",
      "The lines are skew by definition",
      "The formula was applied incorrectly",
    ],
    answer: "A",
    explanation: "Zero distance between non-parallel lines means they share a point — they're not skew at all.",
  },
  {
    prompt: "The shortest connecting segment between two skew lines is:",
    options: [
      "Perpendicular to both lines simultaneously",
      "Parallel to one of the two lines",
      "Always vertical (parallel to the $z$-axis)",
    ],
    answer: "A",
    explanation: "The minimum-distance segment is the unique segment perpendicular to both direction vectors at once.",
  },
  {
    prompt: "Why can't skew lines exist in a 2D plane?",
    options: [
      "Any two non-parallel lines in a plane are forced to intersect",
      "2D lines are always parallel",
      "Skew lines require at least 4 dimensions",
    ],
    answer: "A",
    explanation: "In a plane, two lines either share a common direction (parallel) or must cross somewhere — there's no room to \"miss\" each other as in 3D.",
  },
  {
    prompt: "In $d=\\dfrac{|(\\mathbf{r}_2-\\mathbf{r}_1)\\cdot(\\mathbf{v}_1\\times\\mathbf{v}_2)|}{|\\mathbf{v}_1\\times\\mathbf{v}_2|}$, the vector $\\mathbf{r}_2-\\mathbf{r}_1$ represents:",
    options: [
      "A vector connecting a known point on line 1 to a known point on line 2",
      "The shortest-distance vector itself",
      "The sum of both direction vectors",
    ],
    answer: "A",
    explanation: "It's simply the displacement between one reference point on each line — any pair of points on the respective lines works.",
  },
  {
    prompt: "If you swap which line is \"line 1\" and which is \"line 2\" in the shortest-distance formula, the computed distance:",
    options: [
      "Stays exactly the same",
      "Flips sign",
      "Doubles",
    ],
    answer: "A",
    explanation: "The absolute value in the numerator erases any sign change from swapping the order, so the distance is unaffected.",
  },
];

export const MV_GEO_QUADRIC_QUIZ = [
  {
    prompt: "The surface $x^2+y^2+z^2=1$ is a special case of which quadric?",
    options: ["Ellipsoid (a sphere is an ellipsoid with $a=b=c$)", "Elliptic paraboloid", "Elliptic cone"],
    answer: "A",
    explanation: "Comparing to $x^2/a^2+y^2/b^2+z^2/c^2=1$ with $a=b=c=1$ gives exactly the unit sphere.",
  },
  {
    prompt: "The surface $z=x^2+y^2$ is a(n):",
    options: ["Elliptic (circular) paraboloid", "Hyperbolic paraboloid", "Hyperboloid of one sheet"],
    answer: "A",
    explanation: "Horizontal traces ($z=c>0$) are circles that grow with $c$ — the classic \"bowl\" shape.",
  },
  {
    prompt: "The surface $z=x^2-y^2$ is a(n):",
    options: ["Hyperbolic paraboloid (saddle)", "Elliptic paraboloid", "Ellipsoid"],
    answer: "A",
    explanation: "Traces in $x$ are upward parabolas, traces in $y$ are downward parabolas — the surface curves up one way and down the other, forming a saddle.",
  },
  {
    prompt: "The surface $x^2+y^2-z^2=1$ is a(n):",
    options: ["Hyperboloid of one sheet", "Hyperboloid of two sheets", "Elliptic cone"],
    answer: "A",
    explanation: "One negative term on the left with $=1$ on the right (positive constant) gives a single connected \"waist\" surface — one sheet.",
  },
  {
    prompt: "The surface $z^2-x^2-y^2=1$ is a(n):",
    options: ["Hyperboloid of two sheets", "Hyperboloid of one sheet", "Elliptic paraboloid"],
    answer: "A",
    explanation: "Only one positive squared term equals $1$; the surface splits into two separate pieces (e.g. $z\\ge1$ and $z\\le-1$) — two sheets.",
  },
  {
    prompt: "The surface $x^2+y^2=z^2$ is a(n):",
    options: ["Elliptic cone", "Hyperboloid of one sheet", "Ellipsoid"],
    answer: "A",
    explanation: "Setting the sum-of-squares equal to $0$ on the right (after moving $z^2$ over) is the hallmark of a cone through the origin.",
  },
  {
    prompt: "How does a hyperboloid of one sheet differ from a hyperboloid of two sheets, geometrically?",
    options: [
      "One sheet is a single connected surface; two sheets is split into two disconnected pieces",
      "One sheet has no curvature; two sheets is flat",
      "They are actually the same surface under a different name",
    ],
    answer: "A",
    explanation: "The sign pattern in the equation determines whether the surface stays in one connected piece or breaks into two separated pieces.",
  },
  {
    prompt: "Cross-sections of an ellipsoid taken parallel to any coordinate plane are always:",
    options: ["Ellipses (circles in the special case of a sphere)", "Parabolas", "Straight lines"],
    answer: "A",
    explanation: "Fixing one variable in $x^2/a^2+y^2/b^2+z^2/c^2=1$ leaves a two-variable equation of the same ellipse-family form.",
  },
];
