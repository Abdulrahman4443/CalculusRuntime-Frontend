import StudyGuideShell from "../StudyGuideShell";
import "../PartialDerivativesGuide.css";
import { LaMcqSection } from "./LaMcq";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample } from "./LaBlocks";

function Divider() {
  return <hr className="divider" />;
}

function VectorsGuide({ part = 1 }) {
  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Vectors & Vector Spaces (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Vectors · Part 2</div></div>
          <a className="sb-link" href="#la-v-span">Span theory</a>
          <a className="sb-link" href="#la-v-proc2">Method</a>
          <a className="sb-link" href="#la-v-ex-p2">Examples</a>
          <a className="sb-link" href="#quiz-la-v-span">Quiz</a>
          <a className="sb-link" href="#la-v-indep">Independence</a>
          <a className="sb-link" href="#quiz-la-v-indep">Quiz</a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Linear Algebra · Part 2 of 2</div>
            <h1 className="ch-title">Vectors &amp; Vector Spaces</h1>
            <p className="ch-sub">Span, basis, independence — full methods and large examples</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <section className="section" id="la-v-span">
            <div className="sec-badge">Section 1.3</div>
            <h2 className="sec-title">Span and basis — deep theory</h2>
            <p>
              {"Once you can add and scale vectors, the next question is: what subspace can a given list of vectors generate? That is the span. A basis is a minimal spanning list: enough vectors to reach every point of the space, but with no redundancy."}
            </p>
            <TheoryBox title="Span as a subspace">
              <p>
                {"$\\mathrm{Span}\\{v_1,\\ldots,v_k\\}=\\{c_1 v_1+\\cdots+c_k v_k:c_i\\in\\mathbb{R}\\}$. It always contains $0$, and if $u,w$ are in the span then so are $u+w$ and $cu$. So every span is a subspace of $\\mathbb{R}^n$."}
              </p>
              <p>
                {"Geometrically: one nonzero vector spans a line through the origin; two independent vectors span a plane through the origin; $n$ independent vectors span all of $\\mathbb{R}^n$."}
              </p>
            </TheoryBox>
            <TheoremBox title="Basis, coordinates, dimension">
              <p>
                {"A basis of $V$ is a linearly independent spanning set. Every vector of $V$ then has unique coordinates relative to that basis. Any two bases of $V$ have the same length; that length is $\\dim V$. For $\\mathbb{R}^n$, $\\dim=n$ and the standard basis is $e_1,\\ldots,e_n$."}
              </p>
            </TheoremBox>
          </section>

          <section className="section" id="la-v-proc2">
            <div className="sec-badge">Procedure</div>
            <h2 className="sec-title">How to work with span and bases</h2>
            <ProcedureBox
              title="Checklist: span, independence, and building a basis"
              steps={[
                { text: "Write the vectors as columns of a matrix $A$ (or as rows — be consistent).", why: "Start from the given data and name the events or quantities." },
                { text: "Row-reduce $A$ to see pivots: pivot columns = independent spanning directions from the original list.", why: "Carry out the linear-algebra operation justified by the current matrix form." },
                { text: "Non-pivot columns are linear combinations of pivot columns (dependence relations).", why: "State the exact condition or formula you will test." },
                { text: "The span’s dimension equals the number of pivots ($\\mathrm{rank}(A)$).", why: "Combine the previous lines into the numerical or logical conclusion." },
                { text: "To test if $b$ lies in the span, solve $Ax=b$; consistent means yes.", why: "Use the descriptive-stat or random-variable formula that fits this setup." },
                { text: "To extend an independent set to a basis of $\\mathbb{R}^n$, keep adding vectors outside the current span until you have $n$ independent vectors (equivalently, until the matrix is invertible).", why: "Carry out the linear-algebra operation justified by the current matrix form." },
                { text: "To find coordinates of $x$ in a basis $B=\\{v_1,\\ldots,v_n\\}$, solve $c_1 v_1+\\cdots+c_n v_n=x$.", why: "Combine the previous lines into the numerical or logical conclusion." }
              ]}
            />
          </section>

          <section className="section" id="la-v-ex-p2">
            <div className="sec-badge">Large examples</div>
            <h2 className="sec-title">Six detailed worked examples</h2>

            <WorkedExample
              number={1}
              title="Describe the span of two vectors in R³"
              setup={"Let $v_1=(1,0,1)$, $v_2=(0,1,1)$. Describe $\\mathrm{Span}\\{v_1,v_2\\}$."}
              steps={[
                { text: "A general combination is $c_1 v_1+c_2 v_2=(c_1,\\,c_2,\\,c_1+c_2)$.", why: "Translate the problem into symbols and known facts." },
                { text: "If $(x,y,z)$ is in the span, then $x=c_1$, $y=c_2$, and $z=c_1+c_2=x+y$.", why: "This calculation follows from the previous step and the problem data." },
                { text: "So every vector in the span satisfies the plane equation $z=x+y$.", why: "Combine the previous lines into the numerical or logical conclusion." },
                { text: "Conversely, any $(x,y,x+y)$ equals $x v_1+y v_2$, so it is in the span.", why: "Combine the previous lines into the numerical or logical conclusion." },
                { text: "The two vectors are independent (neither is a scalar multiple of the other), so $\\dim=2$.", why: "State the exact condition or formula you will test." }
              ]}
              result={"The span is the plane $z=x+y$ through the origin in $\\mathbb{R}^3$."}
              check={"$(1,1,2)=1\\cdot v_1+1\\cdot v_2$ lies on the plane; $(1,0,0)$ does not."}
            />
            <WorkedExample
              number={2}
              title="Decide if a vector is in a span"
              setup={"Is $b=(2,3,5)$ in $\\mathrm{Span}\\{v_1,v_2\\}$ from Example 1?"}
              steps={[
                { text: "Solve $c_1(1,0,1)+c_2(0,1,1)=(2,3,5)$.", why: "Translate the problem into symbols and known facts." },
                { text: "From the first two coordinates: $c_1=2$, $c_2=3$.", why: "This calculation follows from the previous step and the problem data." },
                { text: "Check the third: $c_1+c_2=5$, and the target third component is $5$. Match!", why: "This calculation follows from the previous step and the problem data." },
                { text: "So $b=2v_1+3v_2$ is in the span.", why: "Combine the previous lines into the numerical or logical conclusion." },
                { text: "If the third component had been $4$, we would get $5\\neq 4$ and $b$ would be outside the plane.", why: "Combine the previous lines into the numerical or logical conclusion." }
              ]}
              result={"Yes — $b=2v_1+3v_2$."}
              check={"Recompute $2(1,0,1)+3(0,1,1)=(2,3,5)$."}
            />
            <WorkedExample
              number={3}
              title="Coordinates in a nonstandard basis"
              setup={"Basis $B=\\{(1,1),(1,-1)\\}$ of $\\mathbb{R}^2$. Find $[x]_B$ for $x=(4,2)$."}
              steps={[
                { text: "Solve $c_1(1,1)+c_2(1,-1)=(4,2)$.", why: "Translate the problem into symbols and known facts." },
                { text: "Equations: $c_1+c_2=4$ and $c_1-c_2=2$.", why: "This calculation follows from the previous step and the problem data." },
                { text: "Add them: $2c_1=6\\Rightarrow c_1=3$.", why: "Carry out the linear-algebra operation justified by the current matrix form." },
                { text: "Subtract: $2c_2=2\\Rightarrow c_2=1$.", why: "Carry out the linear-algebra operation justified by the current matrix form." },
                { text: "Therefore $[x]_B=(3,1)$.", why: "Combine the previous lines into the numerical or logical conclusion." },
                { text: "Interpretation: $x$ is three of the first basis vector plus one of the second.", why: "Combine the previous lines into the numerical or logical conclusion." }
              ]}
              result={"$[x]_B=(3,1)$."}
              check={"$3(1,1)+1(1,-1)=(4,2)=x$."}
            />
            <WorkedExample
              number={4}
              title="Remove redundancy from a spanning set"
              setup={"$S=\\{(1,2),(2,4),(0,1)\\}$ in $\\mathbb{R}^2$. Find a basis for $\\mathrm{Span}(S)$."}
              steps={[
                { text: "Notice $(2,4)=2(1,2)$, so the second vector is redundant.", why: "Combine the previous lines into the numerical or logical conclusion." },
                { text: "Form matrix with columns $(1,2)$, $(2,4)$, $(0,1)$ and row-reduce.", why: "Carry out the linear-algebra operation justified by the current matrix form." },
                { text: "After elimination you get pivots in columns 1 and 3 (column 2 has no new pivot).", why: "This calculation follows from the previous step and the problem data." },
                { text: "So an independent spanning subset is $\\{(1,2),(0,1)\\}$.", why: "Combine the previous lines into the numerical or logical conclusion." },
                { text: "These two are clearly independent and span $\\mathbb{R}^2$ (determinant of the matrix with those columns is $1$).", why: "State the exact condition or formula you will test." }
              ]}
              result={"A basis extracted from $S$ is $\\{(1,2),(0,1)\\}$."}
              check={"$(2,4)$ is recovered as $2(1,2)+0(0,1)$."}
            />
            <WorkedExample
              number={5}
              title="Extend to a basis of R³"
              setup={"Start with $v_1=(1,1,0)$, $v_2=(0,1,1)$. Extend to a basis of $\\mathbb{R}^3$."}
              steps={[
                { text: "Check independence: if $c_1 v_1+c_2 v_2=0$, then $(c_1,\\,c_1+c_2,\\,c_2)=0\\Rightarrow c_1=c_2=0$. Independent.", why: "Carry out the linear-algebra operation justified by the current matrix form." },
                { text: "Current span is a plane (dimension $2$). Need one more vector outside it.", why: "State the exact condition or formula you will test." },
                { text: "Try $v_3=(1,0,0)$. Is it in the span? Solve $c_1 v_1+c_2 v_2=(1,0,0)$.", why: "This calculation follows from the previous step and the problem data." },
                { text: "From third coord $c_2=0$; from first $c_1=1$; from second $c_1+c_2=1\\neq 0$. Contradiction — so $v_3$ is outside the span.", why: "Combine the previous lines into the numerical or logical conclusion." },
                { text: "Matrix with columns $v_1,v_2,v_3$ has nonzero determinant, hence a basis.", why: "Combine the previous lines into the numerical or logical conclusion." }
              ]}
              result={"$\\{v_1,v_2,v_3\\}$ is a basis of $\\mathbb{R}^3$."}
              check={"$\\det[v_1\\,v_2\\,v_3]\\neq 0$ confirms independence and spanning."}
            />
            <WorkedExample
              number={6}
              title="Dimension count from pivots"
              setup={"Columns of $A=\\begin{pmatrix}1&2&3&1\\\\0&0&1&4\\\\0&0&0&0\\end{pmatrix}$. What is $\\dim\\mathrm{Col}(A)$?"}
              steps={[
                { text: "$A$ is already in echelon form.", why: "Translate the problem into symbols and known facts." },
                { text: "Pivots appear in columns 1 and 3 (two pivots).", why: "This calculation follows from the previous step and the problem data." },
                { text: "Therefore $\\mathrm{rank}(A)=2=\\dim\\mathrm{Col}(A)=\\dim\\mathrm{Span}\\{\\text{columns}\\}$.", why: "Combine the previous lines into the numerical or logical conclusion." },
                { text: "A basis for the column space is the original pivot columns: column 1 and column 3.", why: "This calculation follows from the previous step and the problem data." },
                { text: "Column 2 and 4 are combinations of those pivot columns.", why: "State the exact condition or formula you will test." }
              ]}
              result={"Dimension of the span of the columns is $2$."}
              check={"Rank–nullity: $n=4$, rank $2$, so nullity $2$ as well."}
            />
          </section>

          <LaMcqSection
            id="quiz-la-v-span"
            badge="Quiz 1.3"
            title="Span & Basis"
            scoreId="score-la-v-span"
            section="la-v-span"
            questions={[
              {
                prompt: "What is the span of a single nonzero vector $v$ in $\\mathbb{R}^2$?",
                options: ["All of $\\mathbb{R}^2$", "The line through the origin in the direction of $v$", "Only the zero vector"],
                answer: "B",
                explanation: "Scalar multiples of $v$ fill the line through $0$ and $v$.",
              },
              {
                prompt: "Every basis of $\\mathbb{R}^3$ contains how many vectors?",
                options: ["2", "3", "Any number $\\ge 3$"],
                answer: "B",
                explanation: "Dimension is unique: $\\dim\\mathbb{R}^3=3$.",
              },
              {
                prompt: "A spanning set that is not a basis must be:",
                options: ["Linearly independent", "Linearly dependent", "Empty"],
                answer: "B",
                explanation: "If it spans but is not a basis, it has redundant (dependent) vectors.",
              },
            ]}
          />

          <Divider />

          <section className="section" id="la-v-indep">
            <div className="sec-badge">Section 1.4</div>
            <h2 className="sec-title">Linear independence — deep theory</h2>
            <TheoryBox title="Definition and meaning">
              <p>
                {"Vectors are independent when the only way to combine them to get $0$ is with all coefficients zero. Dependence means a nontrivial relation $c_1 v_1+\\cdots+c_k v_k=0$ exists — so at least one vector is a combination of the others and can be deleted without shrinking the span."}
              </p>
            </TheoryBox>
            <TheoremBox title="Tests you will use constantly">
              <p>
                {"(1) Any set containing $0$ is dependent. (2) In $\\mathbb{R}^n$, more than $n$ vectors are dependent. (3) $n$ vectors in $\\mathbb{R}^n$ are a basis iff the matrix they form is invertible. (4) Row-reduction pivots identify a maximal independent subset."}
              </p>
            </TheoremBox>
          </section>

          <LaMcqSection
            id="quiz-la-v-indep"
            badge="Quiz 1.4"
            title="Independence"
            scoreId="score-la-v-indep"
            section="la-v-indep"
            questions={[
              {
                prompt: "The set $\\{0, v\\}$ is always:",
                options: ["Independent", "Dependent", "A basis of $\\mathbb{R}^n$"],
                answer: "B",
                explanation: "Any set containing the zero vector is linearly dependent.",
              },
              {
                prompt: "Four vectors in $\\mathbb{R}^3$ are:",
                options: ["Always independent", "Always dependent", "Independent iff orthogonal"],
                answer: "B",
                explanation: "You cannot have more than $\\dim V$ independent vectors in $V$.",
              },
              {
                prompt: "Columns of an invertible $n\\times n$ matrix are:",
                options: ["Dependent", "A basis of $\\mathbb{R}^n$", "Orthogonal only"],
                answer: "B",
                explanation: "Invertibility means the columns form a basis of $\\mathbb{R}^n$.",
              },
            ]}
          />

          <Divider />
          <section className="section" id="summary">
            <div className="sec-badge">Reference</div>
            <h2 className="sec-title">Part 2 complete</h2>
            <p>
              {"You can now describe spans, extract bases, and test independence with row reduction. Continue with the gold button to Matrices and Determinants."}
            </p>
          </section>
        </main>
      </StudyGuideShell>
    );
  }

  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Vectors & Vector Spaces (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Vectors · Part 1</div></div>
        <a className="sb-link" href="#la-v-intro">Theory</a>
        <a className="sb-link" href="#la-v-proc1">Method</a>
        <a className="sb-link" href="#la-v-ex-p1">Examples</a>
        <a className="sb-link" href="#quiz-la-v-intro">Quiz</a>
        <a className="sb-link" href="#la-v-ops">Dot product</a>
        <a className="sb-link" href="#quiz-la-v-ops">Quiz</a>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Linear Algebra · Part 1 of 2</div>
          <h1 className="ch-title">Vectors &amp; Vector Spaces</h1>
          <p className="ch-sub">Correct topic · Deep theory · Large step-by-step examples</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <div className="opening-note-box">
          <p className="opening-note">
            {"This module is the standard first block of Linear Algebra: vectors in $\\mathbb{R}^n$, length, addition, scalars, and the dot product. Part 2 continues with span, basis, and independence — the language used in every later chapter (matrices, systems, eigenvalues)."}
          </p>
        </div>

        <section className="section" id="la-v-intro">
          <div className="sec-badge">Section 1.1</div>
          <h2 className="sec-title">Vectors in Rⁿ — deep theory</h2>
          <TheoryBox title="What a vector is">
            <p>
              {"A vector $v=(v_1,\\ldots,v_n)$ in $\\mathbb{R}^n$ is an ordered list of $n$ real numbers. You may picture it as a point, or as an arrow from the origin to that point (or any parallel arrow with the same length and direction). Components completely determine the vector: equality means every component matches."}
            </p>
            <p>
              {"The zero vector $0=(0,\\ldots,0)$ is the unique vector of length zero and the identity for addition. The Euclidean length $\\|v\\|=\\sqrt{v_1^2+\\cdots+v_n^2}$ measures magnitude. For $v\\neq 0$, the unit vector $v/\\|v\\|$ points the same way with length $1$."}
            </p>
          </TheoryBox>
          <TheoremBox title="Why $\\mathbb{R}^n$ is a vector space">
            <p>
              {"Addition and scalar multiplication are defined componentwise. They satisfy: commutative and associative addition; distributive laws $c(u+v)=cu+cv$ and $(c+d)v=cv+dv$; and $1\\cdot v=v$. These axioms are what later let us talk about subspaces, bases, and linear maps."}
            </p>
          </TheoremBox>
        </section>

        <section className="section" id="la-v-proc1">
          <div className="sec-badge">Procedure</div>
          <h2 className="sec-title">How to compute with vectors</h2>
          <ProcedureBox
            title="Everyday calculation checklist"
            steps={[
                { text: "Write vectors as rows or columns — stay consistent within a problem.", why: "Start from the given data and name the events or quantities." },
                { text: "To add: add matching components. To scale: multiply every component by the scalar.", why: "This calculation follows from the previous step and the problem data." },
                { text: "Length: square components, add, take square root. Never forget the square root.", why: "State the exact condition or formula you will test." },
                { text: "Unit vector: divide $v$ by $\\|v\\|$ (only if $v\\neq 0$).", why: "This calculation follows from the previous step and the problem data." },
                { text: "Dot product: multiply matching components, then add those products.", why: "This calculation follows from the previous step and the problem data." },
                { text: "Angle: use $\\cos\\theta=(u\\cdot v)/(\\|u\\|\\|v\\|)$. Orthogonal means dot product $0$.", why: "Use the descriptive-stat or random-variable formula that fits this setup." },
                { text: "Projection of $b$ onto $a$: $\\mathrm{proj}_a b=\\dfrac{a\\cdot b}{a\\cdot a}a$ (for $a\\neq 0$).", why: "This calculation follows from the previous step and the problem data." },
                { text: "Always sanity-check with a quick substitution or length/orthogonality test.", why: "Combine the previous lines into the numerical or logical conclusion." }
              ]}
          />
        </section>

        <section className="section" id="la-v-ex-p1">
          <div className="sec-badge">Large examples</div>
          <h2 className="sec-title">Six detailed worked examples</h2>

          <WorkedExample
            number={1}
            title="Length, unit vector, and scaling"
            setup={"Let $v=(6,-8)$. Find $\\|v\\|$, the unit vector $\\hat v$, and $-\\tfrac12 v$."}
            steps={[
                { text: "Squares: $6^2=36$, $(-8)^2=64$, sum $100$.", why: "Translate the problem into symbols and known facts." },
                { text: "$\\|v\\|=\\sqrt{100}=10$.", why: "This calculation follows from the previous step and the problem data." },
                { text: "Unit vector $\\hat v=v/10=(0.6,-0.8)$.", why: "This calculation follows from the previous step and the problem data." },
                { text: "Scaling: $-\\tfrac12 v=(-3,4)$.", why: "This calculation follows from the previous step and the problem data." },
                { text: "Length of the scaled vector: $\\|-\\tfrac12 v\\|=\\tfrac12\\|v\\|=5$ (absolute value of the scalar).", why: "Combine the previous lines into the numerical or logical conclusion." }
              ]}
            result={"$\\|v\\|=10$, $\\hat v=(0.6,-0.8)$, $-\\tfrac12 v=(-3,4)$."}
            check={"$0.6^2+(-0.8)^2=0.36+0.64=1$."}
          />
          <WorkedExample
            number={2}
            title="Parallelogram addition in R²"
            setup={"$u=(2,1)$, $w=(-1,3)$. Compute $u+w$, $u-w$, and interpret."}
            steps={[
                { text: "$u+w=(2-1,\\,1+3)=(1,4)$.", why: "Translate the problem into symbols and known facts." },
                { text: "$u-w=(2-(-1),\\,1-3)=(3,-2)$.", why: "This calculation follows from the previous step and the problem data." },
                { text: "Geometrically $u+w$ is the diagonal of the parallelogram spanned by $u$ and $w$.", why: "This calculation follows from the previous step and the problem data." },
                { text: "$u-w$ goes from the tip of $w$ to the tip of $u$ if both start at the origin.", why: "This calculation follows from the previous step and the problem data." },
                { text: "Triangle inequality: $\\|u+w\\|=\\sqrt{17}\\approx 4.12$ while $\\|u\\|+\\|w\\|=\\sqrt{5}+\\sqrt{10}\\approx 5.4>4.12$.", why: "Combine the previous lines into the numerical or logical conclusion." }
              ]}
            result={"$u+w=(1,4)$, $u-w=(3,-2)$."}
            check={"$(u+w)+w=(1,4)+(-1,3)=(0,7)=u+2w$ (associativity smoke test)."}
          />
          <WorkedExample
            number={3}
            title="Dot product and angle (exact)"
            setup={"Find the angle between $a=(1,2,2)$ and $b=(2,1,-2)$."}
            steps={[
                { text: "Dot product: $a\\cdot b=1\\cdot 2+2\\cdot 1+2\\cdot(-2)=2+2-4=0$.", why: "Translate the problem into symbols and known facts." },
                { text: "Already the vectors are orthogonal — angle is $\\pi/2$.", why: "State the exact condition or formula you will test." },
                { text: "For completeness: $\\|a\\|=3$, $\\|b\\|=3$, so $\\cos\\theta=0/(9)=0$.", why: "Combine the previous lines into the numerical or logical conclusion." },
                { text: "Thus $\\theta=90^\\circ$.", why: "This calculation follows from the previous step and the problem data." },
                { text: "Orthogonal vectors are extremely useful bases and in projections (error perpendicular to the line).", why: "State the exact condition or formula you will test." }
              ]}
            result={"$a\\perp b$; angle $=90^\\circ$."}
            check={"Recompute $2+2-4=0$."}
          />
          <WorkedExample
            number={4}
            title="Non-right angle with cosine"
            setup={"$p=(1,0)$, $q=(1,1)$. Find $\\theta$ between them."}
            steps={[
                { text: "$p\\cdot q=1$.", why: "Translate the problem into symbols and known facts." },
                { text: "$\\|p\\|=1$, $\\|q\\|=\\sqrt{2}$.", why: "This calculation follows from the previous step and the problem data." },
                { text: "$\\cos\\theta=1/\\sqrt{2}$.", why: "This calculation follows from the previous step and the problem data." },
                { text: "$\\theta=\\pi/4$ radians $=45^\\circ$.", why: "This calculation follows from the previous step and the problem data." },
                { text: "Sketch: $q$ is the diagonal of the unit square; the angle with the $x$-axis is indeed $45^\\circ$.", why: "Combine the previous lines into the numerical or logical conclusion." }
              ]}
            result={"$\\theta=45^\\circ$."}
            check={"$\\|p\\|\\|q\\|\\cos\\theta=\\sqrt{2}\\cdot(1/\\sqrt{2})=1=p\\cdot q$."}
          />
          <WorkedExample
            number={5}
            title="Orthogonal projection — full pipeline"
            setup={"Project $b=(3,4)$ onto the line spanned by $a=(1,1)$."}
            steps={[
                { text: "Formula: $\\mathrm{proj}_a b=\\dfrac{a\\cdot b}{a\\cdot a}a$.", why: "Translate the problem into symbols and known facts." },
                { text: "$a\\cdot b=3+4=7$, $a\\cdot a=1+1=2$.", why: "This calculation follows from the previous step and the problem data." },
                { text: "Scalar factor $7/2$.", why: "This calculation follows from the previous step and the problem data." },
                { text: "Projection vector $\\mathrm{proj}_a b=\\tfrac72(1,1)=(\\tfrac72,\\tfrac72)$.", why: "This calculation follows from the previous step and the problem data." },
                { text: "Error / perpendicular component: $b-\\mathrm{proj}= (3-3.5,\\,4-3.5)=(-0.5,0.5)$.", why: "This calculation follows from the previous step and the problem data." },
                { text: "Check orthogonality: $(\\tfrac72,\\tfrac72)\\cdot(-1/2,1/2)= -7/4+7/4=0$.", why: "Combine the previous lines into the numerical or logical conclusion." }
              ]}
            result={"Projection $(\\tfrac72,\\tfrac72)$; remainder $(-\\tfrac12,\\tfrac12)$."}
            check={"Projection + remainder recovers $b$."}
          />
          <WorkedExample
            number={6}
            title="Worked combination problem"
            setup={"Given $u=(1,-1,2)$, $v=(0,3,1)$, compute $\\|2u-v\\|$ and decide if $2u-v$ is longer than $u$."}
            steps={[
                { text: "First form $2u=(2,-2,4)$.", why: "Translate the problem into symbols and known facts." },
                { text: "Then $2u-v=(2,-2-3,\\,4-1)=(2,-5,3)$.", why: "This calculation follows from the previous step and the problem data." },
                { text: "Length: $\\sqrt{4+25+9}=\\sqrt{38}$.", why: "This calculation follows from the previous step and the problem data." },
                { text: "$\\|u\\|=\\sqrt{1+1+4}=\\sqrt{6}$.", why: "This calculation follows from the previous step and the problem data." },
                { text: "Compare $\\sqrt{38}>\\sqrt{6}$, so $2u-v$ is longer than $u$.", why: "State the exact condition or formula you will test." },
                { text: "Optional: $\\sqrt{38}\\approx 6.16$, $\\sqrt{6}\\approx 2.45$.", why: "Combine the previous lines into the numerical or logical conclusion." }
              ]}
            result={"$\\|2u-v\\|=\\sqrt{38}$."}
            check={"Expand ||2u-v||^2=(2u-v)·(2u-v) if you prefer an algebraic verification."}
          />
        </section>

        <LaMcqSection
          id="quiz-la-v-intro"
          badge="Quiz 1.1"
          title="Vector basics"
          scoreId="score-la-v-intro"
          section="la-v-intro"
          questions={[
            {
              prompt: "The vector $(1,-2,3)$ lives in which space?",
              options: ["$\\mathbb{R}^2$", "$\\mathbb{R}^3$", "$\\mathbb{R}^1$"],
              answer: "B",
              explanation: "Three components means a vector in $\\mathbb{R}^3$.",
            },
            {
              prompt: "What is $\\|(3,4)\\|$?",
              options: ["5", "7", "12"],
              answer: "A",
              explanation: "$\\sqrt{3^2+4^2}=\\sqrt{25}=5$.",
            },
            {
              prompt: "The zero vector is the additive identity because:",
              options: ["It has length 1", "$v+0=v$ for every $v$", "It is orthogonal to itself only"],
              answer: "B",
              explanation: "Vector addition uses $0$ as the identity element.",
            },
          ]}
        />

        <Divider />

        <section className="section" id="la-v-ops">
          <div className="sec-badge">Section 1.2</div>
          <h2 className="sec-title">Dot product — more detail</h2>
          <TheoryBox title="Algebraic and geometric views">
            <p>
              {"Algebra: $u\\cdot v=\\sum_i u_i v_i$. Geometry: $u\\cdot v=\\|u\\|\\|v\\|\\cos\\theta$. These agree for the Euclidean structure on $\\mathbb{R}^n$. The Cauchy–Schwarz inequality $|u\\cdot v|\\le\\|u\\|\\|v\\|$ follows immediately."}
            </p>
          </TheoryBox>
        </section>

        <LaMcqSection
          id="quiz-la-v-ops"
          badge="Quiz 1.2"
          title="Operations"
          scoreId="score-la-v-ops"
          section="la-v-ops"
          questions={[
            {
              prompt: "$(1,2)+(3,-1)$ equals:",
              options: ["$(4,1)$", "$(2,3)$", "$(3,2)$"],
              answer: "A",
              explanation: "Add componentwise: $(1+3,\\,2-1)=(4,1)$.",
            },
            {
              prompt: "$(1,0)\\cdot(0,1)$ equals:",
              options: ["1", "0", "$\\sqrt{2}$"],
              answer: "B",
              explanation: "Standard basis vectors are orthogonal.",
            },
            {
              prompt: "Scaling $v$ by $-2$:",
              options: ["Keeps direction, doubles length", "Reverses direction and doubles length", "Projects onto the $x$-axis"],
              answer: "B",
              explanation: "Negative scalars reverse direction; magnitude multiplies by $|c|$.",
            },
          ]}
        />

        <Divider />
        <section className="section" id="summary1">
          <div className="sec-badge">Reference</div>
          <h2 className="sec-title">Continue</h2>
          <p>
            Use the gold button below for <strong>Next: Part 2 — Span and basis</strong>.
          </p>
        </section>
      </main>
    </StudyGuideShell>
  );
}

export default VectorsGuide;
