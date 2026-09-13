import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { LaMcqSection } from "./LaMcq";
import {
  LA_S_INTRO_QUIZ,
  LA_S_GAUSS_QUIZ,
  LA_S_LU_QUIZ,
  LA_S_RANK_QUIZ,
  LA_S_SUBSPACES_QUIZ,
  LA_S_GEO_QUIZ,
} from "../../data/laSystemsEigenQuizzes";
import {
  TheoryBox,
  TheoremBox,
  ProcedureBox,
  WorkedExample,
  PracticalTheory,
  RealLifeUse,
} from "./LaBlocks";

import LaCertificateBoost from "./LaCertificateBoost";

function Divider() {
  return <hr className="divider" />;
}

function OpeningNote() {
  return (
    <div className="opening-note-box">
      <p className="opening-note">
        <strong>Operational Blueprint:</strong>{" "}
        {
          "This study guide formalizes the theory and computational methods for solving systems of linear equations ($A\\mathbf{x} = \\mathbf{b}$) in linear algebra. Linear systems model interconnected constraints across engineering, physics, and economics. We apply Gaussian elimination and Gauss-Jordan reduction to transform augmented matrices into row echelon (REF) and reduced row echelon form (RREF). System solutions are classified into three distinct categories: unique solution (full rank), infinitely many solutions (presence of free variables), or no solution (inconsistent row $[0 \\dots 0 \\mid c]$). Mastering pivot analysis, vector parametric representations, and Cramer's rule establishes indispensable foundations for network flow simulations, circuit analysis, and optimization algorithms."
        }
      </p>
    </div>
  );
}

function SystemsGuide({ part = 1 }) {
  if (part === 2) {
    return (
      <StudyGuideShell
        guideClass="partial-derivatives-guide"
        title="Systems of Linear Equations (Part 2)"
      >
                <nav className="sidebar">
          <div className="sb-brand">
            <div className="sb-title">Systems · Part 2</div>
          </div>

          <a className="sb-link" href="#la-s-rank">
            Rank
          </a>

          <a className="sb-link" href="#la-s-rank-nullity">
            Rank–Nullity
          </a>

          <a className="sb-link" href="#la-s-subspaces">
            Fundamental Subspaces
          </a>

          <a className="sb-link" href="#la-s-applications">
            Real-Life Uses
          </a>

          <a className="sb-link" href="#quiz-la-s-subspaces">
            Subspaces Quiz
          </a>

          <a className="sb-link" href="#la-s-proc2">
            Method
          </a>

          <a className="sb-link" href="#la-s-ex-p2">
            Examples
          </a>

          <a className="sb-link" href="#quiz-la-s-rank">
            Quiz
          </a>

          <a className="sb-link" href="#la-s-geo">
            Geometry
          </a>

          <a className="sb-link" href="#quiz-la-s-geo">
            Quiz
          </a>

          <a className="sb-link" href="#la-cert-systems-p2">
            Eight examples
          </a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Linear Algebra · Part 2 of 2</div>
            <h1 className="ch-title">Systems of Linear Equations</h1>
            <p className="ch-sub">
              Rank, free variables, nullspace, and solution geometry
            </p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <OpeningNote />
          <Divider />

          <section className="section" id="la-s-rank">
            <div className="sec-badge">Section 3.3</div>
            <h2 className="sec-title">Rank and consistency — deep theory</h2>
            <p>
              {
                "After you can eliminate, the next layer is structural: how many independent equations do you really have, and how many free parameters remain? Rank answers both. It is the single most important integer attached to a matrix for solving $Ax=b$."
              }
            </p>
            <TheoryBox title="Rank as number of pivots">
              <p>
                {
                  "$\\mathrm{rank}(A)$ is the number of pivots after row reduction — equivalently, the dimension of the column space and of the row space. Those two dimensions always agree. Rank does not depend on which sequence of elementary operations you use; every path to RREF produces the same pivot count."
                }
              </p>
              <p>
                {
                  "The system $Ax=b$ is consistent if and only if $\\mathrm{rank}(A)=\\mathrm{rank}([A\\mid b])$. If the augmented matrix gains an extra pivot in the RHS column, you have created a contradictory equation $0=c$ with $c\\neq 0$."
                }
              </p>
            </TheoryBox>
            <PracticalTheory title="Solve, classify, then write the general solution">
              <p>
                {
                  "Form $[A\\mid b]$, reduce, then branch: inconsistent row means no solution; full pivots on a square system means unique; free variables give the infinite family particular solution plus nullspace. For overdetermined data, switch to least squares via the normal equations instead of forcing an exact solve."
                }
              </p>
            </PracticalTheory>
            <TheoremBox title="Free variables and uniqueness">
              <p>
                {
                  "For a consistent system with $n$ unknowns and $r=\\mathrm{rank}(A)$, there are exactly $n-r$ free variables. The solution set is an affine subspace of dimension $n-r$. Unique solution occurs precisely when $r=n$ (for square $A$, that means full rank / invertible). If $r<n$, infinitely many solutions appear as soon as consistency holds."
                }
              </p>
            </TheoremBox>
            <RealLifeUse>
              {
                "Circuit laws and structural force balances are linear systems; recommendation engines solve large sparse least-squares fits; GPS receivers solve multilateration systems; chemical engineers balance reaction networks with stoichiometry matrices."
              }
            </RealLifeUse>
            <TheoryBox title="Nullity and rank–nullity">
              <p>
                {
                  "$\\dim\\mathrm{Nul}(A)=n-r$ (rank–nullity theorem). The nullspace is the solution set of the homogeneous system $Ax=0$. Nonhomogeneous solutions, when they exist, are one particular solution plus every nullspace vector: $x=x_p+v$ with $Av=0$."
                }
              </p>
            </TheoryBox>
            <PracticalTheory title="Hand-calculation habits">
              <p>
                {
                  "Name the objects (vectors, matrix size, unknowns) before computing. Prefer a method you can check: a second expansion, a substitution back into $Ax=b$, or a quick rank/$\\det$ sanity test."
                }
              </p>
            </PracticalTheory>
            <RealLifeUse>
              {
                "The same checklist shows up in engineering solvers, spreadsheet models, and any pipeline that turns measurements into a linear map — clear setup prevents silent size and dependence bugs."
              }
            </RealLifeUse>
          </section>

          <Divider />

          <section className="section" id="la-s-rank-nullity">
            <div className="sec-badge">Module H · Rank–Nullity</div>
            <h2 className="sec-title">Rank–Nullity Theorem — proof and applications</h2>

            <TheoremBox title="Rank–Nullity Theorem">
              <p>
                {
                  "For an $m\\times n$ matrix $A$ with rank $r$, the domain $\\mathbb{R}^n$ splits dimensionally into the directions that survive under $A$ and the directions that are sent to zero. Therefore $\\operatorname{rank}(A)+\\operatorname{nullity}(A)=n$, or equivalently $r+\\dim\\mathrm{Nul}(A)=n$."
                }
              </p>
              <p>
                {
                  "In linear-map language, if $T:V\\to W$ is linear and $V$ is finite-dimensional, then $\\dim(\\ker T)+\\dim(\\operatorname{im}T)=\\dim V$."
                }
              </p>
            </TheoremBox>

            <TheoryBox title="Proof from pivots and free variables">
              <p>
                {
                  "Row-reduce $A$ to RREF. Suppose there are $r$ pivot columns. Those pivot columns correspond to $r$ basic variables, so among the $n$ variables there are exactly $n-r$ free variables."
                }
              </p>
              <p>
                {
                  "When solving $Ax=0$, assign one free variable at a time to $1$ and the others to $0$. This produces one special solution for each free variable. These $n-r$ special solutions are linearly independent and span $\\mathrm{Nul}(A)$, so $\\dim\\mathrm{Nul}(A)=n-r$."
                }
              </p>
              <p>
                {
                  "Because the number of pivot columns is $r=\\operatorname{rank}(A)$, we obtain $\\operatorname{rank}(A)+\\operatorname{nullity}(A)=r+(n-r)=n$. This proves the theorem."
                }
              </p>
            </TheoryBox>

            <ProcedureBox
              title="How to use rank–nullity quickly"
              steps={[
                {
                  text: "Identify the number of columns $n$ of $A$.",
                  why: "Rank–nullity uses the dimension of the domain, which equals the number of columns.",
                },
                {
                  text: "Row-reduce $A$ and count pivots to get $r=\\operatorname{rank}(A)$.",
                  why: "Each pivot contributes one independent output direction.",
                },
                {
                  text: "Compute $\\operatorname{nullity}(A)=n-r$.",
                  why: "Every non-pivot column corresponds to one free parameter in $Ax=0$.",
                },
                {
                  text: "Use nullity $0$ to recognize a trivial nullspace and independent columns.",
                  why: "No free variables means $Ax=0$ has only $x=0$.",
                },
                {
                  text: "For a consistent $Ax=b$, interpret nullity as the dimension of the family of solutions.",
                  why: "All solutions are $x_p+\\mathrm{Nul}(A)$, so the nullspace supplies every free direction.",
                },
              ]}
            />

            <PracticalTheory title="Consequences you should recognize immediately">
              <ul>
                <li>{"If $\\operatorname{rank}(A)=n$, then $\\operatorname{nullity}(A)=0$ and the columns of $A$ are linearly independent."}</li>
                <li>{"If $\\operatorname{rank}(A)<n$, then $Ax=0$ has nontrivial solutions and every consistent $Ax=b$ has infinitely many solutions."}</li>
                <li>{"For $T:\\mathbb{R}^n\\to\\mathbb{R}^m$, $T$ is one-to-one exactly when $\\operatorname{nullity}(T)=0$."}</li>
                <li>{"For an $m\\times n$ matrix, $\\dim\\mathrm{Nul}(A)=n-r$ while $\\dim\\mathrm{Nul}(A^T)=m-r$."}</li>
              </ul>
            </PracticalTheory>

            <RealLifeUse>
              {
                "Rank–nullity is a fast diagnostic in engineering models. In sensor systems, a nonzero nullspace reveals state directions the sensors cannot observe. In actuator models, it exposes input combinations that produce no net output. In circuit and network equations, it counts independent constraints versus internal degrees of freedom, and in data fitting it reveals parameter combinations that cannot be uniquely identified."
              }
            </RealLifeUse>
          </section>

          <Divider />

          <section className="section" id="la-s-subspaces">
            <div className="sec-badge">Module H · Fundamental Subspaces</div>
            <h2 className="sec-title">The Four Fundamental Subspaces</h2>

            <TheoryBox title="One matrix, four important subspaces">
              <p>
                {
                  "Let $A$ be an $m\\times n$ matrix with rank $r$. Associated with $A$ are four fundamental subspaces: the column space $\\mathrm{Col}(A)$, row space $\\mathrm{Row}(A)$, null space $\\mathrm{Nul}(A)$, and left null space $\\mathrm{Nul}(A^T)$. Together they describe the input directions, output directions, and directions that are lost by the linear transformation represented by $A$."
                }
              </p>
            </TheoryBox>

            <TheoryBox title="Column space">
              <p>
                {
                  "$\\mathrm{Col}(A)$ is the span of the columns of $A$. It is a subspace of $\\mathbb{R}^m$ and contains every vector that can be produced in the form $Ax$. Therefore, the system $Ax=b$ is consistent exactly when $b\\in\\mathrm{Col}(A)$."
                }
              </p>
              <p>
                {
                  "To find a basis for $\\mathrm{Col}(A)$, row-reduce $A$ to locate the pivot columns, but take the corresponding columns from the original matrix $A$, not from its RREF."
                }
              </p>
            </TheoryBox>

            <TheoryBox title="Row space">
              <p>
                {
                  "$\\mathrm{Row}(A)$ is the span of the row vectors of $A$ and is a subspace of $\\mathbb{R}^n$. Elementary row operations do not change the row space, so the nonzero rows of an echelon form or RREF of $A$ provide a convenient basis for $\\mathrm{Row}(A)$."
                }
              </p>
            </TheoryBox>

            <TheoryBox title="Null space">
              <p>
                {
                  "$\\mathrm{Nul}(A)$ is the set of all vectors $x\\in\\mathbb{R}^n$ satisfying $Ax=0$. It contains the input directions that the transformation sends to the zero vector. Free variables in the homogeneous system determine a basis for the null space."
                }
              </p>
            </TheoryBox>

            <TheoryBox title="Left null space">
              <p>
                {
                  "$\\mathrm{Nul}(A^T)$ is called the left null space of $A$. It consists of all vectors $y\\in\\mathbb{R}^m$ satisfying $A^T y=0$. Equivalently, these vectors are orthogonal to every column of $A$."
                }
              </p>
              <p>
                {
                  "The left null space is important in consistency, orthogonality, least-squares problems, and the geometry of linear transformations."
                }
              </p>
            </TheoryBox>

            <TheoremBox title="Dimensions of the four fundamental subspaces">
              <p>
                {
                  "If $A$ is an $m\\times n$ matrix with $\\mathrm{rank}(A)=r$, then:"
                }
              </p>

              <ul>
                <li>{"$\\dim\\mathrm{Col}(A)=r$"}</li>
                <li>{"$\\dim\\mathrm{Row}(A)=r$"}</li>
                <li>{"$\\dim\\mathrm{Nul}(A)=n-r$"}</li>
                <li>{"$\\dim\\mathrm{Nul}(A^T)=m-r$"}</li>
              </ul>

              <p>
                {
                  "Thus the column space and row space have the same dimension, while the null space and left null space account for the remaining dimensions in their respective ambient spaces."
                }
              </p>
            </TheoremBox>

            <TheoremBox title="Orthogonal complement relationships">
              <p>
                {
                  "The four subspaces occur in orthogonal pairs: $\\mathrm{Row}(A)^\\perp=\\mathrm{Nul}(A)$ and $\\mathrm{Col}(A)^\\perp=\\mathrm{Nul}(A^T)$. This means every vector in the null space is orthogonal to every row of $A$, while every vector in the left null space is orthogonal to every column of $A$."
                }
              </p>
            </TheoremBox>

            <PracticalTheory title="How to find all four subspaces">
              <p>
                {
                  "Row-reduce $A$ once and use the result efficiently. Pivot columns identify a basis for the column space using the corresponding original columns. Nonzero rows of the echelon form give a basis for the row space. Solve $Ax=0$ to obtain the null space, and solve $A^T y=0$ to obtain the left null space."
                }
              </p>
            </PracticalTheory>

            <RealLifeUse>
              {
                "In engineering, the four fundamental subspaces reveal which inputs produce observable outputs, which inputs have no effect, which output directions are achievable, and which measurement directions are incompatible with the system. These ideas appear in circuit models, control systems, signal processing, estimation, and least-squares analysis."
              }
                        </RealLifeUse>
          </section>

          <Divider />

          <section className="section" id="la-s-applications">
            <div className="sec-badge">Applications</div>
            <h2 className="sec-title">
              Real-Life Use of the Four Fundamental Subspaces
            </h2>

            <RealLifeUse>
              {
                "The four fundamental subspaces are useful for understanding what a real engineering system can produce, which inputs have no observable effect, which constraints contain useful information, and when measurements are incompatible with a mathematical model."
              }
            </RealLifeUse>

            <TheoryBox title="Engineering interpretation">
              <p>
                {
                  "$\\mathrm{Col}(A)$ represents the outputs that a system can actually produce. In control systems, circuits, and signal-processing models, it describes the achievable response space."
                }
              </p>

              <p>
                {
                  "$\\mathrm{Row}(A)$ represents the independent information or constraints contained in the system equations. Dependent rows represent redundant equations or measurements."
                }
              </p>

              <p>
                {
                  "$\\mathrm{Nul}(A)$ represents input directions that produce zero output. In engineering, these may correspond to hidden motions, ineffective actuator combinations, or signals that a measurement system cannot detect."
                }
              </p>

              <p>
                {
                  "$\\mathrm{Nul}(A^T)$ identifies directions orthogonal to all achievable outputs. It is useful for detecting inconsistent measurements and understanding residual error in least-squares estimation."
                }
              </p>
            </TheoryBox>

            <PracticalTheory title="Where these ideas appear">
              <p>
                {
                  "The four fundamental subspaces appear in electrical circuit analysis, control systems, robotics, signal processing, communication systems, sensor estimation, structural analysis, machine learning, and least-squares data fitting."
                }
              </p>
            </PracticalTheory>
          </section>

          <LaMcqSection
            id="quiz-la-s-subspaces"
            badge="Module H Quiz"
            title="Subspaces & Rank–Nullity"
            scoreId="score-la-s-subspaces"
            section="la-s-subspaces"
            questions={LA_S_SUBSPACES_QUIZ}
          />

          <Divider />

          <section className="section" id="la-s-proc2">
            <div className="sec-badge">Procedure</div>
            <h2 className="sec-title">
              How to read rank, free variables, and nullspace
            </h2>
            <ProcedureBox
              title="How to classify Ax=b from RREF"
              steps={[
                {
                  text: "Form $[A\\mid b]$ and row-reduce to RREF (or at least echelon form).",
                  why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
                },
                {
                  text: "Count pivots in the coefficient part: that number is $r=\\mathrm{rank}(A)$.",
                  why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
                },
                {
                  text: "Check consistency: if a row is $[0\\ \\cdots\\ 0\\mid c]$ with $c\\neq 0$, stop — inconsistent ($\\mathrm{rank}([A\\mid b])>r$).",
                  why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
                },
                {
                  text: "Identify free variables: one for each non-pivot column among the $n$ unknowns.",
                  why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
                },
                {
                  text: "Express basic (pivot) variables in terms of free parameters $t_1,\\ldots,t_{n-r}$.",
                  why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
                },
                {
                  text: "Write the general solution as $x=x_p+t_1 v_1+\\cdots+t_{n-r} v_{n-r}$, where the $v_j$ form a basis of $\\mathrm{Nul}(A)$.",
                  why: "Write the general solution as particular plus nullspace directions.",
                },
                {
                  text: "For the homogeneous case $b=0$, take $x_p=0$; the solution set is exactly $\\mathrm{Nul}(A)$.",
                  why: "Write the general solution as particular plus nullspace directions.",
                },
                {
                  text: "Sanity check: $\\dim\\mathrm{Nul}(A)$ should equal $n-r$.",
                  why: "Use independence and spanning (via rank/pivots) to decide bases and membership.",
                },
              ]}
            />
          </section>

          <section className="section" id="la-s-ex-p2">
            <div className="sec-badge">Large examples</div>
            <h2 className="sec-title">Eight detailed worked examples</h2>

            <WorkedExample
              number={1}
              title="Inconsistent system via rank"
              setup={"$x+y=1$, $2x+2y=3$. Show inconsistency with ranks."}
              steps={[
                {
                  text: "Augmented matrix: $\\begin{pmatrix}1&1&1\\\\2&2&3\\end{pmatrix}$.",
                  why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
                },
                {
                  text: "R2 ← R2−2 R1 yields $\\begin{pmatrix}1&1&1\\\\0&0&1\\end{pmatrix}$.",
                },
                { text: "Bottom row says $0=1$ — impossible." },
                {
                  text: "Coefficient matrix has one pivot ⇒ $\\mathrm{rank}(A)=1$.",
                  why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
                },
                {
                  text: "Augmented matrix has two pivots ⇒ $\\mathrm{rank}([A\\mid b])=2$.",
                  why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
                },
                {
                  text: "Since ranks differ, the system is inconsistent.",
                  why: "An impossible row means the system has no solution.",
                },
              ]}
              result={"No solution (inconsistent)."}
              check={
                "The second equation claims twice the left side of the first equals $3$, but twice the right side is $2$."
              }
            />
            <WorkedExample
              number={2}
              title="Infinite solutions (a line)"
              setup={"$x+y=2$, $2x+2y=4$."}
              steps={[
                {
                  text: "Second equation is exactly twice the first — redundant, not contradictory.",
                },
                {
                  text: "Augmented RREF is essentially $\\begin{pmatrix}1&1&2\\\\0&0&0\\end{pmatrix}$.",
                  why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
                },
                {
                  text: "One pivot, $n=2$, so one free variable. Let $y=t$.",
                  why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
                },
                { text: "Then $x=2-t$." },
                {
                  text: "General solution: $(x,y)=(2-t,\\,t)=(2,0)+t(-1,1)$.",
                  why: "Write the general solution as particular plus nullspace directions.",
                },
                {
                  text: "Geometrically this is a line in $\\mathbb{R}^2$: particular point $(2,0)$ plus nullspace direction $(-1,1)$.",
                  why: "Write the general solution as particular plus nullspace directions.",
                },
              ]}
              result={"Solution set: $(2-t,\\,t)$ for all $t\\in\\mathbb{R}$."}
              check={"Plug in: $(2-t)+t=2$ and $2(2-t)+2t=4$."}
            />
            <WorkedExample
              number={3}
              title="Unique 2×2 solve"
              setup={"$x+y=5$, $x-y=1$."}
              steps={[
                { text: "Add the equations: $2x=6\\Rightarrow x=3$." },
                { text: "From $x+y=5$: $y=2$." },
                {
                  text: "Matrix $A=\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}$ has $\\det A=-2\\neq 0$.",
                  why: "Compute det with a formula or elimination while tracking signs and scales.",
                },
                {
                  text: "Full rank $r=2=n$ ⇒ unique solution.",
                  why: "Invertibility matches nonzero det and a full set of pivots.",
                },
                {
                  text: "Rank of augmented matrix is also $2$ (consistent and determined).",
                  why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
                },
                {
                  text: "Geometry: two nonparallel lines in $\\mathbb{R}^2$ meet at one point.",
                  why: "Read the geometric meaning of the algebraic result.",
                },
              ]}
              result={"Unique solution $(3,2)$."}
              check={"$3+2=5$ and $3-2=1$."}
            />
            <WorkedExample
              number={4}
              title="Nullspace basis from free variables"
              setup={
                "$A=\\begin{pmatrix}1&2&3\\\\0&0&0\\end{pmatrix}$. Find a basis for $\\mathrm{Nul}(A)$."
              }
              steps={[
                { text: "Only equation: $x+2y+3z=0$, so $x=-2y-3z$." },
                {
                  text: "Free variables: $y=s$, $z=t$ (columns 2 and 3 have no pivots).",
                  why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
                },
                {
                  text: "Then $x=-2s-3t$, so $\\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}=s\\begin{pmatrix}-2\\\\1\\\\0\\end{pmatrix}+t\\begin{pmatrix}-3\\\\0\\\\1\\end{pmatrix}$.",
                },
                {
                  text: "The two special solutions are independent (neither is a multiple of the other).",
                  why: "Use independence and spanning (via rank/pivots) to decide bases and membership.",
                },
                {
                  text: "Rank $r=1$, $n=3$, so nullity $n-r=2$ — matches the two free variables.",
                  why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
                },
                {
                  text: "Those two vectors form a basis of $\\mathrm{Nul}(A)$.",
                  why: "Use independence and spanning (via rank/pivots) to decide bases and membership.",
                },
              ]}
              result={
                "Basis of $\\mathrm{Nul}(A)$: $(-2,1,0)$ and $(-3,0,1)$; $\\dim=2$."
              }
              check={"$A(-2,1,0)^T=0$ and $A(-3,0,1)^T=0$."}
            />
            <WorkedExample
              number={5}
              title="Particular + nullspace for nonhomogeneous"
              setup={"Solve $x+2y+3z=6$ (one equation)."}
              steps={[
                {
                  text: "Particular solution: try free vars $y=z=0$, then $x=6$. So $x_p=(6,0,0)$.",
                  why: "Write the general solution as particular plus nullspace directions.",
                },
                {
                  text: "Homogeneous: $x+2y+3z=0$ as in Example 4.",
                  why: "Write the general solution as particular plus nullspace directions.",
                },
                {
                  text: "Nullspace basis $v_1=(-2,1,0)$, $v_2=(-3,0,1)$.",
                  why: "Write the general solution as particular plus nullspace directions.",
                },
                {
                  text: "General solution: $x=(6,0,0)+s(-2,1,0)+t(-3,0,1)$.",
                  why: "Write the general solution as particular plus nullspace directions.",
                },
                { text: "Equivalently $(x,y,z)=(6-2s-3t,\\,s,\\,t)$." },
                {
                  text: "This is an affine plane: translate the nullspace plane by $x_p$.",
                  why: "Write the general solution as particular plus nullspace directions.",
                },
              ]}
              result={"$x=(6,0,0)+s(-2,1,0)+t(-3,0,1)$."}
              check={"For $s=t=0$: $6=6$. For $s=1,t=0$: $4+2+0=6$."}
            />
            <WorkedExample
              number={6}
              title="Compare ranks on a 3×3"
              setup={
                "$A=\\begin{pmatrix}1&2&3\\\\2&4&6\\\\1&1&1\\end{pmatrix}$, $b=(6,12,3)^T$. Is $Ax=b$ consistent? Unique?"
              }
              steps={[
                {
                  text: "Row2 = 2·Row1 in $A$, so those rows are dependent.",
                  why: "Use independence and spanning (via rank/pivots) to decide bases and membership.",
                },
                {
                  text: "R2 ← R2−2 R1 on $[A\\mid b]$: RHS becomes $12-12=0$, good so far.",
                  why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
                },
                {
                  text: "R3 ← R3−R1: coefficient row $(0,-1,-2)$ and RHS $3-6=-3$.",
                },
                {
                  text: "Continue: you get two pivots (columns 1 and 2), no inconsistent row.",
                  why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
                },
                {
                  text: "$\\mathrm{rank}(A)=\\mathrm{rank}([A\\mid b])=2<3=n$, so consistent with one free variable.",
                  why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
                },
                {
                  text: "Infinitely many solutions (a line in $\\mathbb{R}^3$), not unique.",
                },
              ]}
              result={
                "Consistent with one free variable; solution set is a line."
              }
              check={
                "$b=3(1,2,1)^T$ lies in $\\mathrm{Col}(A)$ since column 3 is not needed; ranks match."
              }
            />
            <WorkedExample
              number={7}
              title="Find all four fundamental subspaces"
              setup={
                "$A=\\begin{pmatrix}1&2\\\\2&4\\\\3&6\\end{pmatrix}$. Find bases for $\\mathrm{Col}(A)$, $\\mathrm{Row}(A)$, $\\mathrm{Nul}(A)$, and $\\mathrm{Nul}(A^T)$."
              }
              steps={[
                {
                  text: "The second column is twice the first, so there is only one independent column and $\\mathrm{rank}(A)=1$.",
                  why: "Rank determines the dimensions of all four fundamental subspaces.",
                },
                {
                  text: "A basis for $\\mathrm{Col}(A)$ is $\\left\\{\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}\\right\\}$.",
                  why: "Use the original pivot column when forming a basis for the column space.",
                },
                {
                  text: "All rows are multiples of $(1,2)$, so a basis for $\\mathrm{Row}(A)$ is $\\{(1,2)\\}$.",
                  why: "The row space has the same dimension as the column space.",
                },
                {
                  text: "Solve $Ax=0$. The equation $x_1+2x_2=0$ gives $x_1=-2x_2$.",
                  why: "The homogeneous solution set is the null space.",
                },
                {
                  text: "Let $x_2=t$. Then $x=t(-2,1)$, so a basis for $\\mathrm{Nul}(A)$ is $\\{(-2,1)\\}$.",
                },
                {
                  text: "For the left null space solve $A^T y=0$, giving $y_1+2y_2+3y_3=0$.",
                  why: "The left null space is the null space of the transpose.",
                },
                {
                  text: "Let $y_2=s$ and $y_3=t$. Then $y=s(-2,1,0)+t(-3,0,1)$.",
                },
              ]}
              result={
                "$\\mathrm{Col}(A)=\\mathrm{Span}\\{(1,2,3)^T\\}$, $\\mathrm{Row}(A)=\\mathrm{Span}\\{(1,2)\\}$, $\\mathrm{Nul}(A)=\\mathrm{Span}\\{(-2,1)\\}$, and $\\mathrm{Nul}(A^T)=\\mathrm{Span}\\{(-2,1,0),(-3,0,1)\\}$."
              }
              check={
                "The dimensions are $1,1,1,2$. Since $m=3$, $n=2$, and $r=1$, this matches $r,r,n-r,m-r$."
              }
            />

            <WorkedExample
              number={8}
              title="Use the left null space to test consistency"
              setup={
                "Let $A=\\begin{pmatrix}1&2\\\\2&4\\\\3&6\\end{pmatrix}$ and $b=\\begin{pmatrix}1\\\\2\\\\4\\end{pmatrix}$. Determine whether $Ax=b$ is consistent using the left null space."
              }
              steps={[
                {
                  text: "From Example 7, one left-null vector is $y=(-3,0,1)$.",
                  why: "$y\\in\\mathrm{Nul}(A^T)$ means $y^T A=0$.",
                },
                {
                  text: "Compute $y^T b=(-3)(1)+0(2)+1(4)=1$.",
                },
                {
                  text: "Because $y^T b\\neq 0$, $b$ is not orthogonal to the left null space.",
                  why: "Every vector in $\\mathrm{Col}(A)$ must be orthogonal to every vector in $\\mathrm{Nul}(A^T)$.",
                },
                {
                  text: "Therefore $b\\notin\\mathrm{Col}(A)$.",
                  why: "$Ax=b$ is solvable exactly when $b$ belongs to the column space.",
                },
                {
                  text: "Hence the system $Ax=b$ is inconsistent.",
                },
              ]}
              result={"The system has no solution."}
              check={
                "Every vector in $\\mathrm{Col}(A)$ is a multiple of $(1,2,3)^T$, but $(1,2,4)^T$ is not."
              }
            />
          </section>

          <LaMcqSection
            id="quiz-la-s-rank"
            badge="Quiz 3.3"
            title="Rank"
            scoreId="score-la-s-rank"
            section="la-s-rank"
            questions={LA_S_RANK_QUIZ}
          />

          <Divider />

          <section className="section" id="la-s-geo">
            <div className="sec-badge">Section 3.4</div>
            <h2 className="sec-title">Geometry of solutions — deep theory</h2>
            <TheoryBox title="Hyperplanes, lines, and flats">
              <p>
                {
                  "Each nontrivial linear equation $a\\cdot x=\\beta$ describes a hyperplane in $\\mathbb{R}^n$ (a line in $\\mathbb{R}^2$, a plane in $\\mathbb{R}^3$). Solving a system means intersecting these hyperplanes. Empty intersection ⇒ no solution; a single point ⇒ unique solution; a line, plane, or higher flat ⇒ infinitely many solutions."
                }
              </p>
              <p>
                {
                  "Homogeneous systems $Ax=0$ always contain the origin; their solution set $\\mathrm{Nul}(A)$ is a subspace. Nonhomogeneous systems, when consistent, give a parallel translate of that subspace: an affine subspace $x_p+\\mathrm{Nul}(A)$."
                }
              </p>
            </TheoryBox>
            <TheoremBox title="Structure theorem for Ax=b">
              <p>
                {
                  "If $x_p$ solves $Ax=b$ and $v\\in\\mathrm{Nul}(A)$, then $A(x_p+v)=b$. Conversely every solution differs from $x_p$ by some nullspace vector. So once you have one solution and a nullspace basis, you have the complete geometric picture."
                }
              </p>
            </TheoremBox>
          </section>

          <LaMcqSection
            id="quiz-la-s-geo"
            badge="Quiz 3.4"
            title="Geometry"
            scoreId="score-la-s-geo"
            section="la-s-geo"
            questions={LA_S_GEO_QUIZ}
          />

          <Divider />
          <LaCertificateBoost topic="systems" part={2} />

          <section className="section" id="summary">
            <div className="sec-badge">Reference</div>
            <h2 className="sec-title">Part 2 complete</h2>
            <p>
              {
                "Rank counts pivots; free variables = $n-r$; consistency needs matching ranks; solutions are particular plus nullspace."
              }
            </p>
            <p>
              Continue with the gold bar:{" "}
              <strong>Next: Eigenvalues and Eigenvectors</strong>.
            </p>
            <p>
              {"Want to row-reduce your own system? Try the "}
              <a href="/linear-algebra/matrix-sandbox">
                <strong>Matrix Sandbox</strong>
              </a>
              {
                " — enter the augmented matrix and step through Gaussian elimination to RREF."
              }
            </p>
          </section>
        </main>
      </StudyGuideShell>
    );
  }

  return (
    <StudyGuideShell
      guideClass="partial-derivatives-guide"
      title="Systems of Linear Equations (Part 1)"
    >
      <nav className="sidebar">
        <div className="sb-brand">
          <div className="sb-title">Systems · Part 1</div>
        </div>
        <a className="sb-link" href="#la-s-intro">
          Theory
        </a>
        <a className="sb-link" href="#la-s-proc1">
          Method
        </a>
        <a className="sb-link" href="#la-s-ex-p1">
          Examples
        </a>
        <a className="sb-link" href="#quiz-la-s-intro">
          Quiz
        </a>
        <a className="sb-link" href="#la-s-gauss">
          Row reduction
        </a>
        <a className="sb-link" href="#quiz-la-s-gauss">
          Quiz
        </a>
        <a className="sb-link" href="#la-s-lu">
          LU Factorization
        </a>
        <a className="sb-link" href="#quiz-la-s-lu">
          Quiz
        </a>
        <a className="sb-link" href="#la-cert-systems-p1">
          Eight examples
        </a>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Linear Algebra · Part 1 of 2</div>
          <h1 className="ch-title">Systems of Linear Equations</h1>
          <p className="ch-sub">
            Augmented matrices and Gaussian elimination — deep dive
          </p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <section className="section" id="la-s-intro">
          <div className="sec-badge">Section 3.1</div>
          <h2 className="sec-title">Linear systems — deep theory</h2>
          <p>
            {
              "Almost every applied linear algebra problem — networks, fits, discretized PDEs, constraints — becomes a system $Ax=b$. Mastering elimination is less about arithmetic and more about recognizing the three geometric possibilities early."
            }
          </p>
          <TheoryBox title="The three possibilities">
            <p>
              {
                "Over $\\mathbb{R}$, the system $Ax=b$ has either no solution, exactly one solution, or infinitely many solutions. There is no fourth option (e.g. “exactly two solutions”). Which case occurs depends on whether $b$ lies in the column space of $A$ and on whether the columns are independent."
              }
            </p>
            <p>
              {
                "The augmented matrix $[A\\mid b]$ stores every coefficient and the right-hand side in one array so that elementary row operations act on equations uniformly. Each row is one equation; each of the first $n$ columns tracks one unknown."
              }
            </p>
          </TheoryBox>
          <TheoremBox title="Column-space view">
            <p>
              {
                "$Ax=b$ asks: is $b$ a linear combination of the columns of $A$? If yes, the combination weights are a solution $x$. If the columns are independent and span all of $\\mathbb{R}^m$ (square invertible case), every $b$ has a unique $x$. If the columns are dependent, either zero or infinitely many $x$ can produce the same $b$."
              }
            </p>
          </TheoremBox>
          <TheoryBox title="Homogeneous vs nonhomogeneous">
            <p>
              {
                "When $b=0$, the system is homogeneous and always consistent ($x=0$ works). Nontrivial nullspace vectors appear precisely when there is a free variable. Nonhomogeneous systems ($b\\neq 0$) may fail consistency even if the homogeneous sibling has many solutions."
              }
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="la-s-proc1">
          <div className="sec-badge">Procedure</div>
          <h2 className="sec-title">How to solve Ax=b by elimination</h2>
          <ProcedureBox
            title="How to solve a linear system with Gaussian elimination"
            steps={[
              {
                text: "Write the system as an augmented matrix $[A\\mid b]$.",
                why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
              },
              {
                text: "Use elementary row operations to reach echelon (triangular) form: create zeros below each pivot.",
                why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
              },
              {
                text: "If a row $[0\\ \\cdots\\ 0\\mid c]$ with $c\\neq 0$ appears, conclude inconsistency and stop.",
                why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
              },
              {
                text: "Identify pivot columns (basic variables) and non-pivot columns (free variables).",
                why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
              },
              {
                text: "Assign parameters to free variables (e.g. $t,s,\\ldots$).",
                why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
              },
              {
                text: "Back-substitute from the bottom pivot upward to express basic variables in terms of the parameters (or numbers, if none).",
                why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
              },
              {
                text: "Write the solution in vector form; optionally split into particular + nullspace directions.",
                why: "Write the general solution as particular plus nullspace directions.",
              },
              {
                text: "Substitute back into the original equations as a check.",
                why: "Confirm with a second method or by substituting back.",
              },
            ]}
          />
        </section>

        <section className="section" id="la-s-ex-p1">
          <div className="sec-badge">Large examples</div>
          <h2 className="sec-title">Six detailed worked examples</h2>

          <WorkedExample
            number={1}
            title="Write the augmented matrix"
            setup={"$2x-y=0$, $x+3y=5$. Encode as $[A\\mid b]$."}
            steps={[
              { text: "Unknown order: $x$ then $y$." },
              { text: "First equation coefficients: $2,\\,-1$ with RHS $0$." },
              { text: "Second equation: $1,\\,3$ with RHS $5$." },
              {
                text: "Augmented matrix $\\begin{pmatrix}2&-1&0\\\\1&3&5\\end{pmatrix}$.",
                why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
              },
              {
                text: "Each row is one equation; the bar separates coefficients from the constant term.",
              },
              {
                text: "Do not forget the sign of $-y$: the $(1,2)$ entry is $-1$, not $1$.",
                why: "Compute det with a formula or elimination while tracking signs and scales.",
              },
            ]}
            result={
              "$[A\\mid b]=\\begin{pmatrix}2&-1&0\\\\1&3&5\\end{pmatrix}$."
            }
            check={"Row 1 reconstructs $2x-y=0$."}
          />
          <WorkedExample
            number={2}
            title="Eliminate to triangular form"
            setup={"Same system as Example 1. Solve completely."}
            steps={[
              {
                text: "Optional: swap rows so a $1$ leads, or keep order. Scale R1 by $1/2$: $\\begin{pmatrix}1&-1/2&0\\\\1&3&5\\end{pmatrix}$.",
              },
              {
                text: "R2 ← R2−R1: $\\begin{pmatrix}1&-1/2&0\\\\0&7/2&5\\end{pmatrix}$.",
              },
              { text: "From R2: $(7/2)y=5\\Rightarrow y=10/7$." },
              {
                text: "Back-substitute into R1: $x-(1/2)(10/7)=0\\Rightarrow x=5/7$.",
                why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
              },
              { text: "So $(x,y)=(5/7,\\,10/7)$." },
              {
                text: "This is the unique solution because two pivots appear for two unknowns.",
                why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
              },
            ]}
            result={"$x=5/7$, $y=10/7$."}
            check={"$2(5/7)-(10/7)=0$ and $5/7+3(10/7)=35/7=5$."}
          />
          <WorkedExample
            number={3}
            title="Recognize a free variable early"
            setup={"$x+2y+z=1$ (one equation, three unknowns)."}
            steps={[
              {
                text: "Only one independent equation ⇒ at most one pivot.",
                why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
              },
              {
                text: "Choose free variables $y=s$, $z=t$.",
                why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
              },
              {
                text: "Solve for the basic variable: $x=1-2s-t$.",
                why: "Carry out the computation justified by the setup.",
              },
              { text: "Vector form: $(x,y,z)=(1,0,0)+s(-2,1,0)+t(-1,0,1)$." },
              {
                text: "The solution set is a plane (2-parameter flat) in $\\mathbb{R}^3$.",
                why: "Read the geometric meaning of the algebraic result.",
              },
              {
                text: "Homogeneous directions $(-2,1,0)$ and $(-1,0,1)$ span the nullspace of the $1\\times 3$ coefficient row.",
                why: "Write the general solution as particular plus nullspace directions.",
              },
            ]}
            result={"A 2-parameter family: $(1-2s-t,\\,s,\\,t)$."}
            check={"$(1-2s-t)+2s+t=1$ for all $s,t$."}
          />
          <WorkedExample
            number={4}
            title="Back-substitution carefully"
            setup={"After elimination: $x+y+z=6$, $y+2z=3$, $z=1$."}
            steps={[
              { text: "Start at the bottom: $z=1$." },
              { text: "Second equation: $y+2(1)=3\\Rightarrow y=1$." },
              { text: "First: $x+1+1=6\\Rightarrow x=4$." },
              { text: "Solution $(x,y,z)=(4,1,1)$." },
              {
                text: "Three pivots, three unknowns ⇒ unique solution.",
                why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
              },
              {
                text: "This is the payoff of echelon form: each equation introduces one new unknown from the bottom up.",
                why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
              },
            ]}
            result={"$(4,1,1)$."}
            check={"$4+1+1=6$, $1+2=3$, $z=1$."}
          />
          <WorkedExample
            number={5}
            title="3×3 elimination with a swap"
            setup={"Solve $y+z=1$, $x+y=2$, $x+z=2$."}
            steps={[
              {
                text: "Augmented matrix $\\begin{pmatrix}0&1&1&1\\\\1&1&0&2\\\\1&0&1&2\\end{pmatrix}$.",
                why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
              },
              {
                text: "Swap R1 and R2 to get a nonzero pivot in $(1,1)$: $\\begin{pmatrix}1&1&0&2\\\\0&1&1&1\\\\1&0&1&2\\end{pmatrix}$.",
                why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
              },
              {
                text: "R3 ← R3−R1: $\\begin{pmatrix}1&1&0&2\\\\0&1&1&1\\\\0&-1&1&0\\end{pmatrix}$.",
              },
              {
                text: "R3 ← R3+R2: $\\begin{pmatrix}1&1&0&2\\\\0&1&1&1\\\\0&0&2&1\\end{pmatrix}$.",
              },
              {
                text: "Back-substitute: $z=1/2$, then $y+1/2=1\\Rightarrow y=1/2$, then $x+1/2=2\\Rightarrow x=3/2$.",
                why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
              },
              { text: "Unique solution $(3/2,\\,1/2,\\,1/2)$." },
            ]}
            result={"$(x,y,z)=(3/2,\\,1/2,\\,1/2)$."}
            check={"$1/2+1/2=1$, $3/2+1/2=2$, $3/2+1/2=2$."}
          />
          <WorkedExample
            number={6}
            title="Spot inconsistency mid-elimination"
            setup={"$x+y+z=1$, $2x+2y+2z=3$, $x-y=0$."}
            steps={[
              {
                text: "Augmented: $\\begin{pmatrix}1&1&1&1\\\\2&2&2&3\\\\1&-1&0&0\\end{pmatrix}$.",
                why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
              },
              { text: "R2 ← R2−2 R1 produces $(0,0,0,\\,1)$." },
              {
                text: "That row is $0=1$ — inconsistent, regardless of the third equation.",
                why: "An impossible row means the system has no solution.",
              },
              {
                text: "You can stop immediately; further operations cannot repair a contradiction.",
              },
              {
                text: "Geometrically the first two planes are parallel and distinct (same normal, different constants).",
                why: "Use dots and norms for length, angle, and orthogonal projection.",
              },
              {
                text: "Rank story: $\\mathrm{rank}(A)<\\mathrm{rank}([A\\mid b])$.",
                why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
              },
            ]}
            result={"No solution."}
            check={
              "Twice the first LHS equals the second LHS, but $2\\neq 3$ on the RHS."
            }
          />
        </section>

        <LaMcqSection
          id="quiz-la-s-intro"
          badge="Quiz 3.1"
          title="Systems basics"
          scoreId="score-la-s-intro"
          section="la-s-intro"
          questions={LA_S_INTRO_QUIZ}
        />

        <Divider />

        <section className="section" id="la-s-gauss">
          <div className="sec-badge">Section 3.2</div>
          <h2 className="sec-title">Gaussian elimination — deep theory</h2>
          <TheoryBox title="Elementary operations">
            <p>
              {
                "Three legal moves: swap two rows; multiply a row by a nonzero scalar; add a multiple of one row to another. Each is reversible, so the solution set never changes — you only rewrite an equivalent system. Pivots mark basic variables; non-pivot columns mark free variables that become parameters in the general solution."
              }
            </p>
            <p>
              {
                "Forward elimination builds zeros below pivots (echelon form). Optional Gauss–Jordan continues to clear above pivots and scale pivots to $1$ (RREF). For hand work, echelon form plus back-substitution is often enough; RREF is nicest for reading free variables and nullspace bases at a glance."
              }
            </p>
          </TheoryBox>
          <TheoremBox title="What pivots tell you">
            <p>
              {
                "The number of pivots is the rank. A pivot in every column of a square matrix means unique solution for every $b$. A missing pivot means either inconsistency (for some $b$) or free variables (when consistent). Never scale a pivot row by zero, and never “clear” a column that has no pivot — that column stays free."
              }
            </p>
          </TheoremBox>
        </section>

        <LaMcqSection
          id="quiz-la-s-gauss"
          badge="Quiz 3.2"
          title="Row reduction"
          scoreId="score-la-s-gauss"
          section="la-s-gauss"
          questions={LA_S_GAUSS_QUIZ}
        />
        <Divider />

        <section className="section" id="la-s-lu">
          <div className="sec-badge">Section 3.2b</div>
          <h2 className="sec-title">LU Factorization — deep theory</h2>
          <p>
            {
              "Gaussian elimination reduces $A$ to echelon form — but if you keep a record of exactly what you did along the way, you can reuse it. That record is the LU factorization: $A=LU$, splitting elimination into a reusable lower-triangular part and the resulting upper-triangular part."
            }
          </p>
          <TheoryBox title="What L and U store">
            <p>
              {
                "$A=LU$ where $U$ is the upper-triangular matrix elimination produces, and $L$ is lower-triangular with $1$s on its diagonal, storing the multipliers used to zero out each entry below a pivot. If row swaps were required, we track them with a permutation matrix $P$, giving $PA=LU$ instead."
              }
            </p>
            <p>
              {
                "Nothing new is computed here beyond ordinary elimination — LU factorization is simply elimination performed once, with its steps saved for reuse."
              }
            </p>
          </TheoryBox>
          <TheoremBox title="Why factor at all">
            <p>
              {
                "If you must solve $Ax=b$ for many different $b$ with the same $A$, full elimination each time wastes work. With $A=LU$ fixed, each new $b$ only needs two triangular solves: forward-substitute $Ly=b$ for $y$, then back-substitute $Ux=y$ for $x$ — both far cheaper than re-eliminating from scratch."
              }
            </p>
          </TheoremBox>
          <ProcedureBox
            title="How to compute L and U"
            steps={[
              {
                text: "Perform ordinary forward elimination on $A$, creating zeros below each pivot — the result is $U$.",
                why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
              },
              {
                text: "For each elimination step, record the multiplier used (with its sign flipped) in the matching position of $L$.",
                why: "$L$ stores exactly the steps elimination already performed.",
              },
              {
                text: "Keep $1$s on the diagonal of $L$ and $0$s above it — $L$ is lower-triangular by construction.",
                why: "$L$ stores exactly the steps elimination already performed.",
              },
              {
                text: "If a row swap is needed to avoid a zero pivot, track it separately; the factorization becomes $PA=LU$.",
                why: "Row swaps break plain $A=LU$ and require a permutation matrix instead.",
              },
              {
                text: "Check by multiplying $L\\times U$ and confirming it reconstructs $A$ (or $PA$, if swaps occurred).",
                why: "Confirm with a second method or by substituting back.",
              },
              {
                text: "To solve $Ax=b$: forward-substitute $Ly=b$, then back-substitute $Ux=y$.",
                why: "Two cheap triangular solves replace full elimination for every new $b$.",
              },
            ]}
          />
        </section>

        <section className="section" id="la-s-lu-ex">
          <div className="sec-badge">Large examples</div>
          <h2 className="sec-title">Three worked examples</h2>

          <WorkedExample
            number={1}
            title="2×2 factorization"
            setup={"Factor $A=\\begin{pmatrix}4&3\\\\6&3\\end{pmatrix}$."}
            steps={[
              {
                text: "Eliminate below the pivot: multiply R1 by $1.5$ and subtract from R2.",
                why: "Row-reduce and read pivots, free variables, and consistency from the echelon form.",
              },
              {
                text: "R2 becomes $(0,\\,-1.5)$, so $U=\\begin{pmatrix}4&3\\\\0&-1.5\\end{pmatrix}$.",
              },
              {
                text: "The multiplier $1.5$ goes into $L$ below the diagonal: $L=\\begin{pmatrix}1&0\\\\1.5&1\\end{pmatrix}$.",
                why: "$L$ stores exactly the steps elimination already performed.",
              },
              {
                text: "Check: $L\\times U=\\begin{pmatrix}4&3\\\\6&4.5-6\\end{pmatrix}=\\begin{pmatrix}4&3\\\\6&3\\end{pmatrix}=A$.",
                why: "Confirm with a second method or by substituting back.",
              },
            ]}
            result={
              "$L=\\begin{pmatrix}1&0\\\\1.5&1\\end{pmatrix}$, $U=\\begin{pmatrix}4&3\\\\0&-1.5\\end{pmatrix}$."
            }
            check={"$L\\times U=A$ exactly reproduces the original matrix."}
          />
          <WorkedExample
            number={2}
            title="Using LU to solve Ax=b"
            setup={"With the same $A$ above, solve $Ax=b$ for $b=(10,12)^T$."}
            steps={[
              {
                text: "Forward-substitute $Ly=b$: $y_1=10$, then $1.5(10)+y_2=12\\Rightarrow y_2=-3$.",
                why: "Two cheap triangular solves replace full elimination for every new $b$.",
              },
              {
                text: "Back-substitute $Ux=y$: $-1.5x_2=-3\\Rightarrow x_2=2$.",
                why: "Two cheap triangular solves replace full elimination for every new $b$.",
              },
              { text: "Then $4x_1+3(2)=10\\Rightarrow x_1=1$." },
              { text: "Solution: $(x_1,x_2)=(1,2)$." },
            ]}
            result={"$x=(1,2)$."}
            check={"$4(1)+3(2)=10$ and $6(1)+3(2)=12$."}
          />
          <WorkedExample
            number={3}
            title="3×3 factorization"
            setup={
              "Factor $A=\\begin{pmatrix}2&1&1\\\\4&3&3\\\\8&7&9\\end{pmatrix}$."
            }
            steps={[
              {
                text: "R2 ← R2 − 2·R1 gives $(0,1,1)$; multiplier $2$ stored in $L_{21}$.",
                why: "$L$ stores exactly the steps elimination already performed.",
              },
              {
                text: "R3 ← R3 − 4·R1 gives $(0,3,5)$; multiplier $4$ stored in $L_{31}$.",
                why: "$L$ stores exactly the steps elimination already performed.",
              },
              {
                text: "R3 ← R3 − 3·R2 gives $(0,0,2)$; multiplier $3$ stored in $L_{32}$.",
                why: "$L$ stores exactly the steps elimination already performed.",
              },
              {
                text: "$U=\\begin{pmatrix}2&1&1\\\\0&1&1\\\\0&0&2\\end{pmatrix}$, $L=\\begin{pmatrix}1&0&0\\\\2&1&0\\\\4&3&1\\end{pmatrix}$.",
              },
            ]}
            result={
              "$L=\\begin{pmatrix}1&0&0\\\\2&1&0\\\\4&3&1\\end{pmatrix}$, $U=\\begin{pmatrix}2&1&1\\\\0&1&1\\\\0&0&2\\end{pmatrix}$."
            }
            check={"Multiplying $L\\times U$ reconstructs $A$ row by row."}
          />
        </section>

        <LaMcqSection
          id="quiz-la-s-lu"
          badge="Quiz 3.2b"
          title="LU Factorization"
          scoreId="score-la-s-lu"
          section="la-s-lu"
          questions={LA_S_LU_QUIZ}
        />

        <Divider />
        <LaCertificateBoost topic="systems" part={1} />

        <section className="section" id="summary1">
          <div className="sec-badge">Reference</div>
          <h2 className="sec-title">Continue</h2>
          <p>
            {
              "Elimination rewrites $Ax=b$ into an equivalent triangular system; pivots and free variables classify the solution set. Part 2 connects this to rank and geometry."
            }
          </p>
          <p>
            Use the gold button:{" "}
            <strong>Next: Part 2 — Rank and geometry</strong>.
          </p>
        </section>
      </main>
    </StudyGuideShell>
  );
}

export default SystemsGuide;
