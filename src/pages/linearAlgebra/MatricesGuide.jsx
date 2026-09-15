import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { LaMcqSection } from "./LaMcq";
import {
  LA_M_INTRO_QUIZ,
  LA_M_OPS_QUIZ,
  LA_M_DET_QUIZ,
  LA_M_INV_QUIZ,
  LA_M_RANK_QUIZ,
} from "../../data/laVectorsMatricesQuizzes";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample, PracticalTheory, RealLifeUse } from "./LaBlocks";

import LaCertificateBoost from "./LaCertificateBoost";

function Divider() {
  return <hr className="divider" />;
}

function OpeningNote() {
  return (
    <div className="opening-note-box">
      <p className="opening-note">
        <strong>Operational Blueprint:</strong>{" "}
        {"This study guide formalizes matrix algebra and determinant theory in linear algebra. Matrices structure rectangular arrays of numbers representing linear systems, geometric transformations, and multidimensional datasets. We define matrix addition, scalar multiplication, matrix-matrix multiplication as linear combination of columns ($AB$), and transpose properties ($(AB)^T = B^T A^T$). The determinant ($\\det A$) quantifies oriented volume scaling factors in $\\mathbb{R}^n$, where non-zero determinants characterize full rank and invertibility ($A^{-1}$). We develop cofactor expansions, Gauss-Jordan inversion algorithms, and elementary row operation determinants. These matrix computations provide the mathematical core for computer graphics shaders, digital signal filters, and structural network analyses."}
      </p>
    </div>
  );
}

function MatricesGuide({ part = 1 }) {
  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Matrices & Determinants (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Matrices · Part 2</div></div>
          <a className="sb-link" href="#la-m-det">Determinants</a>
          <a className="sb-link" href="#la-m-proc2">Method</a>
          <a className="sb-link" href="#la-m-ex-p2">Examples</a>
          <a className="sb-link" href="#quiz-la-m-det">Quiz</a>
          <a className="sb-link" href="#la-m-inv">Inverses</a>
          <a className="sb-link" href="#quiz-la-m-inv">Quiz</a>
          <a className="sb-link" href="#la-m-rank">Rank</a>
          <a className="sb-link" href="#la-m-proc-rank">Method</a>
          <a className="sb-link" href="#la-m-ex-rank">Examples</a>
          <a className="sb-link" href="#quiz-la-m-rank">Quiz</a>
          <a className="sb-link" href="#la-cert-matrices-p2">Eight examples</a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Linear Algebra · Part 2 of 2</div>
            <h1 className="ch-title">Matrices &amp; Determinants</h1>
            <p className="ch-sub">Determinants, rank, invertibility, and inverse algorithms</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <OpeningNote />
          <Divider />

          <section className="section" id="la-m-det">
            <div className="sec-badge">Section 2.3</div>
            <h2 className="sec-title">Determinants — deep theory</h2>
            <p>
              {"The determinant is a single number that packages several stories about a square matrix at once: volume scaling, orientation, invertibility, and the product of eigenvalues. Learning how to compute it is useful; understanding what it measures is what makes the algebra geometric."}
            </p>
            <TheoryBox title="2×2 formula and multilinearity">
              <p>
                {"For $A=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$, $\\det A=ad-bc$. This is the signed area of the parallelogram spanned by the columns $(a,c)$ and $(b,d)$. Determinants are multilinear in the columns: scaling one column by $k$ scales $\\det$ by $k$; adding a multiple of one column to another does not change $\\det$. They are alternating: swapping two columns flips the sign; a repeated column forces $\\det=0$."}
              </p>
              <p>
                {"The same rules apply to rows. That is why elementary row operations have predictable effects on $\\det$: a row swap multiplies by $-1$; scaling a row by $k$ multiplies by $k$; adding a multiple of one row to another leaves $\\det$ unchanged. Those facts turn Gaussian elimination into a practical determinant algorithm."}
              </p>
            </TheoryBox>
            <PracticalTheory title="Matrix arithmetic without size traps">
              <p>
                {"Always write the size chain before multiplying. Think of $Ax$ as weighting columns, $AB$ as composition ($B$ first), and $\\det$ as oriented volume — so row swaps flip sign and dependent columns force $\\det=0$. Prefer triangular form or a zero-heavy row for hand determinants."}
              </p>
            </PracticalTheory>
            <TheoremBox title="Product, transpose, and invertibility">
              <p>
                {"$\\det(AB)=(\\det A)(\\det B)$, $\\det(A^T)=\\det A$, and $A$ is invertible if and only if $\\det A\\neq 0$. Geometrically $|\\det A|$ is the volume scaling factor of the map $x\\mapsto Ax$; the sign of $\\det A$ records orientation (preserving vs reversing). For triangular matrices, $\\det$ is simply the product of the diagonal entries — a fact you will use constantly after row reduction."}
              </p>
            </TheoremBox>
            <RealLifeUse>{"Image filters and neural-network layers are matrix multiplies; graphics engines compose model/view/projection matrices; economists use input–output matrices; cryptography and coding theory rely on invertible maps over finite fields."}</RealLifeUse>
            <TheoryBox title="Cofactor expansion">
              <p>
                {"Along any row or column, $\\det A=\\sum_j a_{ij}C_{ij}$ where $C_{ij}=(-1)^{i+j}\\det A_{ij}$ and $A_{ij}$ deletes row $i$ and column $j$. Choose a row or column with many zeros to minimize work. For $3\\times 3$ this recovers the familiar expansion; for larger $n$, prefer elimination unless the matrix is sparse."}
              </p>
            </TheoryBox>
            <PracticalTheory title="Hand-calculation habits">
              <p>
                {"Name the objects (vectors, matrix size, unknowns) before computing. Prefer a method you can check: a second expansion, a substitution back into $Ax=b$, or a quick rank/$\\det$ sanity test."}
              </p>
            </PracticalTheory>
            <RealLifeUse>{"The same checklist shows up in engineering solvers, spreadsheet models, and any pipeline that turns measurements into a linear map — clear setup prevents silent size and dependence bugs."}</RealLifeUse>
          </section>

          <section className="section" id="la-m-proc2">
            <div className="sec-badge">Procedure</div>
            <h2 className="sec-title">How to compute determinants and decide invertibility</h2>
            <ProcedureBox
              title="How to evaluate det(A) and use it"
              steps={[
                { text: "If $A$ is $2\\times 2$, use $ad-bc$ immediately.", why: "Compute det with a formula or elimination while tracking signs and scales." },
                { text: "If $A$ is triangular (upper or lower), multiply the diagonal entries." },
                { text: "Otherwise, row-reduce toward triangular form, tracking sign flips from row swaps and scale factors from row multiplications. Adding a multiple of one row to another does not change $\\det$.", why: "Row-reduce and read pivots, free variables, and consistency from the echelon form." },
                { text: "Alternatively, expand along a row/column with many zeros using cofactors.", why: "Compute det with a formula or elimination while tracking signs and scales." },
                { text: "Read off invertibility: $\\det A\\neq 0$ iff $A$ is invertible iff columns (and rows) are linearly independent.", why: "Compute det with a formula or elimination while tracking signs and scales." },
                { text: "Use $\\det(AB)=(\\det A)(\\det B)$ to relate products; never replace this by a sum rule.", why: "Compute det with a formula or elimination while tracking signs and scales." },
                { text: "As a sanity check for $n\\times n$: $\\det A$ equals the product of eigenvalues (counted with multiplicity).", why: "Use (A−λI)v=0 for each eigenvalue and read the nullspace." }
              ]}
            />
          </section>

          <section className="section" id="la-m-ex-p2">
            <div className="sec-badge">Large examples</div>
            <h2 className="sec-title">Six detailed worked examples</h2>

            <WorkedExample
              number={1}
              title="Compute a 2×2 determinant"
              setup={"$A=\\begin{pmatrix}2&5\\\\1&3\\end{pmatrix}$. Decide invertibility."}
              steps={[
                { text: "Apply the formula: $\\det A=ad-bc=2\\cdot 3-5\\cdot 1$.", why: "Compute det with a formula or elimination while tracking signs and scales." },
                { text: "Compute $6-5=1$.", why: "Carry out the computation justified by the setup." },
                { text: "Since $\\det A=1\\neq 0$, $A$ is invertible.", why: "Compute det with a formula or elimination while tracking signs and scales." },
                { text: "Geometrically, the parallelogram spanned by columns $(2,1)$ and $(5,3)$ has area $1$.", why: "Use independence and spanning (via rank/pivots) to decide bases and membership." },
                { text: "The inverse will exist and (by the $2\\times 2$ formula) have integer entries after dividing by $1$.", why: "Invertibility matches nonzero det and a full set of pivots." },
                { text: "Quick cross-check: $\\det(A^T)=\\det\\begin{pmatrix}2&1\\\\5&3\\end{pmatrix}=6-5=1$ matches.", why: "Compute det with a formula or elimination while tracking signs and scales." }
              ]}
              result={"$\\det A=1$, so $A$ is invertible."}
              check={"$A\\begin{pmatrix}3&-5\\\\-1&2\\end{pmatrix}=I$ confirms the inverse exists."}
            />
            <WorkedExample
              number={2}
              title="3×3 triangular determinant"
              setup={"$B=\\begin{pmatrix}1&2&0\\\\0&3&4\\\\0&0&5\\end{pmatrix}$ (upper triangular)."}
              steps={[
                { text: "For any triangular matrix, $\\det$ equals the product of diagonal entries.", why: "Compute det with a formula or elimination while tracking signs and scales." },
                { text: "Here $\\det B=1\\cdot 3\\cdot 5=15$.", why: "Compute det with a formula or elimination while tracking signs and scales." },
                { text: "Cofactor expansion along the first column also works: only $b_{11}=1$ is nonzero in a way that contributes after zeros below.", why: "Compute det with a formula or elimination while tracking signs and scales." },
                { text: "Expanding along column 1: $\\det B=1\\cdot(-1)^{1+1}\\det\\begin{pmatrix}3&4\\\\0&5\\end{pmatrix}=15$.", why: "Compute det with a formula or elimination while tracking signs and scales." },
                { text: "The same answer from two methods is a strong check.", why: "Confirm with a second method or by substituting back." },
                { text: "Since $\\det\\neq 0$, $B$ is invertible; eigenvalues on the diagonal are $1,3,5$ and their product is $15$.", why: "Use (A−λI)v=0 for each eigenvalue and read the nullspace." }
              ]}
              result={"$\\det B=15$."}
              check={"Product of eigenvalues $1\\cdot 3\\cdot 5=15$ matches $\\det B$."}
            />
            <WorkedExample
              number={3}
              title="Effect of a row swap"
              setup={"Start from a matrix $A$ with $\\det A=4$. Swap two rows to get $A'$."}
              steps={[
                { text: "The alternating property says each transposition of two rows multiplies $\\det$ by $-1$.", why: "Compute det with a formula or elimination while tracking signs and scales." },
                { text: "Therefore $\\det A'=-4$.", why: "Compute det with a formula or elimination while tracking signs and scales." },
                { text: "If you swap those two rows again, you return to $A$ and restore $\\det=4$.", why: "Compute det with a formula or elimination while tracking signs and scales." },
                { text: "Two distinct swaps (four rows involved, or the same pair twice) accumulate $(-1)$ once per swap." },
                { text: "In elimination, count every row interchange so you do not lose the sign of $\\det$.", why: "Row-reduce and read pivots, free variables, and consistency from the echelon form." },
                { text: "Scaling is separate: if you also multiply a row by $2$, multiply $\\det$ by $2$ as well.", why: "Compute det with a formula or elimination while tracking signs and scales." }
              ]}
              result={"One row swap flips the sign: $\\det A'=-4$."}
              check={"For $I_2$, $\\det=1$; after swapping rows, $\\det\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}=-1$."}
            />
            <WorkedExample
              number={4}
              title="det(AB) vs det(A)+det(B)"
              setup={"$A=I_2$, $B=-I_2$. Compare product and sum rules."}
              steps={[
                { text: "$\\det A=\\det I=1$.", why: "Compute det with a formula or elimination while tracking signs and scales." },
                { text: "$\\det B=\\det(-I)=(-1)^2\\det I=1$ in dimension $2$.", why: "Compute det with a formula or elimination while tracking signs and scales." },
                { text: "Product: $AB=-I$, so $\\det(AB)=1$.", why: "Compute det with a formula or elimination while tracking signs and scales." },
                { text: "Also $(\\det A)(\\det B)=1\\cdot 1=1$, matching the product rule.", why: "Compute det with a formula or elimination while tracking signs and scales." },
                { text: "Sum: $\\det A+\\det B=2$, which is not equal to $\\det(AB)$.", why: "Compute det with a formula or elimination while tracking signs and scales." },
                { text: "Moral: determinants multiply under matrix products; there is no useful sum rule for $\\det(A+B)$ in general.", why: "Compute det with a formula or elimination while tracking signs and scales." }
              ]}
              result={"Always use $\\det(AB)=(\\det A)(\\det B)$; never a sum rule."}
              check={"In $1\\times 1$, $\\det([2][3])=6=2\\cdot 3$, while $2+3=5\\neq 6$."}
            />
            <WorkedExample
              number={5}
              title="Determinant via elimination"
              setup={"Compute $\\det C$ for $C=\\begin{pmatrix}1&2&1\\\\2&3&1\\\\0&1&2\\end{pmatrix}$."}
              steps={[
                { text: "Start with $C$. No swap needed; pivot $1$ in position $(1,1)$.", why: "Row-reduce and read pivots, free variables, and consistency from the echelon form." },
                { text: "R2 ← R2−2 R1: new row 2 is $(0,\\,-1,\\,-1)$. Matrix becomes $\\begin{pmatrix}1&2&1\\\\0&-1&-1\\\\0&1&2\\end{pmatrix}$." },
                { text: "R3 ← R3+R2: new row 3 is $(0,\\,0,\\,1)$. Now upper triangular $\\begin{pmatrix}1&2&1\\\\0&-1&-1\\\\0&0&1\\end{pmatrix}$." },
                { text: "No row swaps and no row scalings were used that change $\\det$ beyond the triangular product.", why: "Compute det with a formula or elimination while tracking signs and scales." },
                { text: "$\\det C=1\\cdot(-1)\\cdot 1=-1$.", why: "Compute det with a formula or elimination while tracking signs and scales." },
                { text: "Since $\\det\\neq 0$, $C$ is invertible.", why: "Compute det with a formula or elimination while tracking signs and scales." }
              ]}
              result={"$\\det C=-1$."}
              check={"Cofactor along row 3: $c_{32}C_{32}+c_{33}C_{33}=1\\cdot(-1)^{3+2}\\det\\begin{pmatrix}1&1\\\\2&1\\end{pmatrix}+2\\cdot(-1)^{3+3}\\det\\begin{pmatrix}1&2\\\\2&3\\end{pmatrix}=1+2(-1)=-1$."}
            />
            <WorkedExample
              number={6}
              title="Singular matrix from dependent columns"
              setup={"$D=\\begin{pmatrix}1&2&3\\\\2&4&6\\\\0&1&1\\end{pmatrix}$. Predict $\\det D$ without expanding fully."}
              steps={[
                { text: "Column 2 looks related to column 1: $(2,4,1)$ vs $(1,2,0)$ — not exactly a multiple because of the third entry." },
                { text: "Notice column 3 = column 1 + column 2: $(1,2,0)+(2,4,1)=(3,6,1)$. Yes." },
                { text: "Dependent columns ⇒ $\\det D=0$ immediately.", why: "Compute det with a formula or elimination while tracking signs and scales." },
                { text: "Row reduction would produce a zero row and confirm singularity.", why: "Invertibility matches nonzero det and a full set of pivots." },
                { text: "The linear map $x\\mapsto Dx$ collapses volume to zero (image is at most 2-dimensional).", why: "Use independence and spanning (via rank/pivots) to decide bases and membership." },
                { text: "Hence $D$ is not invertible; $Dx=b$ fails for some $b$.", why: "Invertibility matches nonzero det and a full set of pivots." }
              ]}
              result={"$\\det D=0$; $D$ is singular."}
              check={"$D\\begin{pmatrix}1\\\\1\\\\-1\\end{pmatrix}=0$ shows a nontrivial null vector."}
            />
          </section>

          <LaMcqSection
            id="quiz-la-m-det"
            badge="Quiz 2.3"
            title="Determinants"
            scoreId="score-la-m-det"
            section="la-m-det"
            questions={LA_M_DET_QUIZ}
          />

          <Divider />

          <section className="section" id="la-m-inv">
            <div className="sec-badge">Section 2.4</div>
            <h2 className="sec-title">Inverses — deep theory</h2>
            <TheoryBox title="Definition and 2×2 formula">
              <p>
                {"$A^{-1}$ is the unique matrix (when it exists) satisfying $AA^{-1}=A^{-1}A=I$. For $2\\times 2$, $A^{-1}=\\frac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$ whenever $ad-bc\\neq 0$. The adjugate pattern — swap diagonals, negate off-diagonals — is easy to memorize and worth checking by multiplication every time you use it."}
              </p>
              <p>
                {"Invertibility is equivalent to: $\\det A\\neq 0$; full rank; trivial nullspace; columns form a basis of $\\mathbb{R}^n$; $Ax=b$ has a unique solution for every $b$. Any one of these fails if and only if all of them fail."}
              </p>
            </TheoryBox>
            <TheoremBox title="Gauss–Jordan and algebra of inverses">
              <p>
                {"Row-reduce the augmented block $[A\\mid I]$ to $[I\\mid A^{-1}]$ when $A$ is invertible. If a zero row appears on the left before you finish, stop — no inverse. Algebraically, $(AB)^{-1}=B^{-1}A^{-1}$, $(A^T)^{-1}=(A^{-1})^T$, and $(A^{-1})^{-1}=A$. Solving $Ax=b$ becomes $x=A^{-1}b$ once $A^{-1}$ is known, though for a single $b$ elimination on $[A\\mid b]$ is usually cheaper."}
              </p>
            </TheoremBox>
            <TheoryBox title="When not to invert">
              <p>
                {"Numerically and conceptually, forming $A^{-1}$ just to solve one system is often wasteful. Prefer elimination or factorization. Use the inverse when you need the same $A^{-1}$ for many right-hand sides, or when the inverse itself is the object of interest (e.g. change-of-basis matrices)."}
              </p>
            </TheoryBox>
          </section>

          <LaMcqSection
            id="quiz-la-m-inv"
            badge="Quiz 2.4"
            title="Inverses"
            scoreId="score-la-m-inv"
            section="la-m-inv"
            questions={LA_M_INV_QUIZ}
          />

          <Divider />

          <section className="section" id="la-m-rank">
            <div className="sec-badge">Section 2.5</div>
            <h2 className="sec-title">Rank — what it tells you about a matrix</h2>
            <p>
              {"Rank is one whole number attached to a matrix. It counts how many rows (or columns) carry real information — rows that are not just copies, multiples, or sums of the other rows. That one number answers several questions at once: can the matrix be inverted, does the system $Ax=b$ have one solution, many solutions, or none, and how much information the matrix throws away. You get the answers by comparing the rank with the number of rows and the number of columns."}
            </p>
            <TheoryBox title="What rank means">
              <p>
                {"To find the rank, use row operations (the same steps you use to solve a system) until the matrix is in staircase form. Then count the rows that still have a leading non-zero number. Those leading entries are called pivots, and the number of pivots is the rank. If you count the independent columns instead, you get the same number — the count of independent rows always equals the count of independent columns. It also doesn't matter which row steps you choose; every correct reduction gives the same rank."}
              </p>
              <p>
                {"For a matrix with $m$ rows and $n$ columns, the rank is somewhere between $0$ and the smaller of $m$ and $n$. Only the all-zeros matrix has rank $0$. If the rank is as large as it can be, we say the matrix has full rank. If it is smaller, the matrix is rank deficient, and the gap tells you how many rows or columns are wasted (repeats of the others)."}
              </p>
            </TheoryBox>
            <TheoremBox title="What the rank tells you">
              <p>
                {"Write $r$ for the rank, $m$ for the number of rows, $n$ for the number of columns."}
              </p>
              <p>
                {"If $r=n$: every column carries new information, so $Ax=b$ has at most one solution. If $r=m$: every row carries new information, so $Ax=b$ has at least one solution for every $b$. If $r$ is smaller than $n$: some columns repeat information, so whenever a solution exists there are infinitely many."}
              </p>
              <p>
                {"For a square matrix ($m=n$) these all say the same thing: $r=n$. That is exactly the case where $\\det A\\neq 0$ and the inverse $A^{-1}$ exists."}
              </p>
            </TheoremBox>
            <TheoryBox title="Rank plus the lost directions">
              <p>
                {"There is a simple adding-up rule: $(\\text{rank}) + (\\text{number of independent solutions of } Ax=0) = n$, the number of columns. The non-zero solutions of $Ax=0$ are the input directions the matrix flattens to zero. So if the rank is $r$, there are $n-r$ of them. When you solve a system that does have solutions, $n-r$ is also the number of free variables — the values you get to pick yourself."}
              </p>
              <p>
                {"Whether $Ax=b$ has any solution at all is also a rank question. Put $b$ beside $A$ as an extra column and take the rank of that wider block. If it equals the rank of $A$, a solution exists. If adding $b$ pushes the rank up by one, that extra step is really an impossible equation like $0=5$, so there is no solution."}
              </p>
            </TheoryBox>
            <PracticalTheory title="How to use it in practice">
              <p>
                {"Row-reduce and count the pivots — that is $r$. Then compare: $r$ against $n$ (columns) tells you about uniqueness; $r$ against $m$ (rows) tells you whether a solution always exists; and $n-r$ is the number of free variables. For a square matrix, the determinant is a quick shortcut: $\\det\\neq 0$ means full rank, $\\det=0$ means the rank is smaller (though the determinant alone won't say how much smaller)."}
              </p>
            </PracticalTheory>
            <TheoremBox title="Rank vs. determinant">
              <p>
                {"The determinant only works for square matrices and only gives a yes/no answer: $\\det A\\neq 0$ means full rank ($r=n$), and $\\det A=0$ means not full rank ($r<n$). Rank still works when the determinant can't be used — for non-square matrices, or when you want to know how far a square matrix is from full rank. Two handy facts: the rank of a product $AB$ is never larger than the rank of $A$ or of $B$; and multiplying by an invertible matrix (on either side) does not change the rank."}
              </p>
            </TheoremBox>
            <RealLifeUse>{"Rank measures repeated information. If a large table of data has a much smaller rank than its size, it can be stored in far less space — that idea is behind image compression and PCA. In statistics, two inputs that move together (like a height in centimetres and the same height in inches) drop the rank and make a model impossible to pin down. In engineering, checking that certain matrices have full rank is how you confirm a system can be fully controlled, or that a structure won't fold into a loose mechanism."}</RealLifeUse>
          </section>

          <section className="section" id="la-m-proc-rank">
            <div className="sec-badge">Procedure</div>
            <h2 className="sec-title">How to find the rank and read what it means</h2>
            <ProcedureBox
              title="How to find rank(A) and read what it means"
              steps={[
                { text: "Use row operations to bring $A$ into staircase (row echelon) form. These steps never change the rank.", why: "Row reduction is the standard way to bring pivots and free variables into view." },
                { text: "Count the pivots — the leading non-zero entry in each non-zero row. That count is the rank $r$.", why: "Rank is the number of pivots, which is also the number of independent rows or columns." },
                { text: "Compare $r$ with the number of columns $n$. If $r=n$, the columns are independent and $Ax=0$ has only the all-zero solution. If $r<n$, there are $n-r$ free variables.", why: "Comparing rank with the column count tells you whether solutions are unique." },
                { text: "Compare $r$ with the number of rows $m$. If $r=m$, the rows are independent and $Ax=b$ has a solution for every $b$.", why: "Comparing rank with the row count tells you whether a solution always exists." },
                { text: "If $A$ is square: $r=n$ means $\\det A\\neq 0$ and $A^{-1}$ exists; $r<n$ means $\\det A=0$ and $A$ has no inverse.", why: "For a square matrix, full rank, non-zero determinant, and invertibility are the same thing." },
                { text: "Check your work: the number of independent solutions of $Ax=0$ should come out to exactly $n-r$.", why: "This is the adding-up rule: rank plus the number of zeroed-out directions equals $n$." },
              ]}
            />
          </section>

          <section className="section" id="la-m-ex-rank">
            <div className="sec-badge">Large examples</div>
            <h2 className="sec-title">Two detailed worked examples</h2>

            <WorkedExample
              number={1}
              title="Find the rank of a 3×4 matrix and read off what it means"
              setup={"$A=\\begin{pmatrix}1&2&1&3\\\\2&4&0&4\\\\1&2&2&5\\end{pmatrix}$. Find $\\mathrm{rank}(A)$, then say how $Ax=b$ behaves."}
              steps={[
                { text: "Subtract $2\\times$ row 1 from row 2: it becomes $(0,0,-2,-2)$. Subtract row 1 from row 3: it becomes $(0,0,1,2)$.", why: "Clear the first column below the top-left entry." },
                { text: "Add $\\tfrac12\\times$ row 2 to row 3: it becomes $(0,0,0,1)$. The staircase form is $\\begin{pmatrix}1&2&1&3\\\\0&0&-2&-2\\\\0&0&0&1\\end{pmatrix}$.", why: "Finish the reduction so every pivot is visible." },
                { text: "There are three pivots (in columns 1, 3, and 4), so $\\mathrm{rank}(A)=3$.", why: "Rank is the number of pivots." },
                { text: "The matrix has 3 rows and the rank is 3, so all rows carry new information. That means $Ax=b$ has a solution for every $b$.", why: "Rank equal to the row count means a solution always exists." },
                { text: "The matrix has 4 columns and the rank is 3, so $4-3=1$ column is free (here column 2 is just $2\\times$ column 1). So every solvable system has one free choice and infinitely many solutions.", why: "Rank below the column count leaves free variables." },
                { text: "Check: the number of independent solutions of $Ax=0$ should be $4-3=1$, which matches the one free variable.", why: "The adding-up rule: rank plus zeroed-out directions equals the column count." },
              ]}
              result={"$\\mathrm{rank}(A)=3$. All rows carry new information, so $Ax=b$ always has solutions — infinitely many, with one free choice each time."}
              check={"Column 2 equals $2\\times$ column 1, so at most 3 columns are independent; columns 1, 3, and 4 are, so the rank is exactly 3."}
            />
            <WorkedExample
              number={2}
              title="A square matrix that is not full rank: rank, determinant, and Ax = 0"
              setup={"$B=\\begin{pmatrix}2&1&3\\\\4&2&6\\\\1&0&1\\end{pmatrix}$. Find $\\mathrm{rank}(B)$, then $\\det B$ and the solutions of $Bx=0$."}
              steps={[
                { text: "Subtract $2\\times$ row 1 from row 2: it becomes $(0,0,0)$. So row 2 was just twice row 1 — no new information.", why: "A row that turns into all zeros was a repeat of the others." },
                { text: "Subtract $\\tfrac12\\times$ row 1 from row 3: it becomes $(0,-\\tfrac12,-\\tfrac12)$. The staircase form is $\\begin{pmatrix}2&1&3\\\\0&-\\tfrac12&-\\tfrac12\\\\0&0&0\\end{pmatrix}$.", why: "Reduce until the pivots are visible." },
                { text: "There are two pivots (columns 1 and 2), so $\\mathrm{rank}(B)=2$, which is less than 3.", why: "Rank is the number of pivots." },
                { text: "$B$ is 3×3 but its rank is only 2, so it is not full rank. That means $\\det B=0$ and $B$ has no inverse.", why: "For a square matrix, rank below its size means zero determinant and no inverse." },
                { text: "Solve $Bx=0$. From row 2: $-\\tfrac12 y-\\tfrac12 z=0$, so $y=-z$. From row 1: $2x+y+3z=0$, so $x=-z$.", why: "Back-substitute in the reduced system." },
                { text: "So $Bx=0$ is solved by every multiple of $(-1,-1,1)$. There is exactly $3-2=1$ independent solution, matching the rank.", why: "The number of independent solutions of $Ax=0$ is $n-r$." },
              ]}
              result={"$\\mathrm{rank}(B)=2$, so $\\det B=0$, and $Bx=0$ is solved by every multiple of $(-1,-1,1)$."}
              check={"$B(-1,-1,1)^T=(-2-1+3,\\,-4-2+6,\\,-1+0+1)^T=(0,0,0)^T$."}
            />
          </section>

          <LaMcqSection
            id="quiz-la-m-rank"
            badge="Quiz 2.5"
            title="Rank"
            scoreId="score-la-m-rank"
            section="la-m-rank"
            questions={LA_M_RANK_QUIZ}
          />

          <Divider />
          <LaCertificateBoost topic="matrices" part={2} />

          <section className="section" id="summary">
            <div className="sec-badge">Reference</div>
            <h2 className="sec-title">Part 2 complete</h2>
            <p>
              {"Determinants measure volume scaling and detect singularity; inverses undo linear maps when $\\det\\neq 0$. Gauss–Jordan on $[A\\mid I]$ builds $A^{-1}$ systematically. Rank puts a number on all of it — $r=n$ is the full-rank / invertible / $\\det\\neq 0$ case, and $n-r$ is the dimension of the nullspace."}
            </p>
            <p>
              Continue with the gold bar: <strong>Next: Systems of Linear Equations</strong>.
            </p>
            <p>
              {"Want to practice these operations interactively? Try the "}
              <a href="/linear-algebra/matrix-sandbox"><strong>Matrix Sandbox</strong></a>
              {" — enter your own matrix and step through RREF, determinant, inverse, and transpose."}
            </p>
          </section>
        </main>
      </StudyGuideShell>
    );
  }

  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Matrices & Determinants (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Matrices · Part 1</div></div>
        <a className="sb-link" href="#la-m-intro">Theory</a>
        <a className="sb-link" href="#la-m-types">Types</a>
        <a className="sb-link" href="#la-m-proc1">Method</a>
        <a className="sb-link" href="#la-m-ex-p1">Examples</a>
        <a className="sb-link" href="#quiz-la-m-intro">Quiz</a>
        <a className="sb-link" href="#la-m-ops">Operations</a>
        <a className="sb-link" href="#quiz-la-m-ops">Quiz</a>
        <a className="sb-link" href="#la-cert-matrices-p1">Eight examples</a>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Linear Algebra · Part 1 of 2</div>
          <h1 className="ch-title">Matrices &amp; Determinants</h1>
          <p className="ch-sub">Matrix algebra as linear maps — theory and calculations</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <OpeningNote />
        <Divider />

        <section className="section" id="la-m-intro">
          <div className="sec-badge">Section 2.1</div>
          <h2 className="sec-title">What is a matrix? — deep theory</h2>
          <p>
            {"A matrix is not just a table of numbers — it is the coordinate description of a linear transformation. Once you see $A$ as the map $x\\mapsto Ax$, addition, multiplication, and transpose stop feeling arbitrary and start feeling inevitable."}
          </p>
          <TheoryBox title="Linear maps and columns">
            <p>
              {"An $m\\times n$ matrix $A$ encodes the linear map $\\mathbb{R}^n\\to\\mathbb{R}^m$, $x\\mapsto Ax$. Column $j$ is exactly $A e_j$, the image of the $j$-th standard basis vector. Therefore $Ax$ is always a linear combination of the columns of $A$, with weights given by the entries of $x$. The range of the map is the column space; the set of inputs sent to $0$ is the nullspace."}
            </p>
            <p>
              {"Size convention: $m$ rows, $n$ columns. So a $3\\times 2$ matrix takes vectors in $\\mathbb{R}^2$ and produces vectors in $\\mathbb{R}^3$. Mixing up domain and codomain is the most common early mistake — always ask: “how many inputs does each column need?”"}
            </p>
          </TheoryBox>
          <TheoremBox title="Identity, zero, and linearity">
            <p>
              {"The identity $I_n$ has $1$s on the diagonal and $0$s elsewhere; $AI=IA=A$ whenever the products make sense. The zero matrix $O$ sends every vector to $0$. Linearity means $A(u+v)=Au+Av$ and $A(cu)=c(Au)$ — matrix–vector multiplication is built so these hold automatically from the distributive law for arithmetic."}
            </p>
          </TheoremBox>
          <TheoryBox title="Block intuition">
            <p>
              {"You can partition matrices into blocks (submatrices) and multiply blockwise when shapes agree, exactly as if the blocks were scalar entries. This viewpoint is invaluable for structured matrices (block diagonal, block triangular) and for organizing large calculations without losing the linear-map story."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="la-m-types">
          <div className="sec-badge">Types</div>
          <h2 className="sec-title">Types of matrices — with an example of each</h2>
          <p>
            {"A matrix gets its name from two things: its shape, and any pattern in its numbers. The name is worth knowing because each type comes with a shortcut — a diagonal matrix is trivial to multiply, a triangular matrix has an easy determinant, an orthogonal matrix has its inverse for free. (Two matrices count as equal only when they have the same size and every matching entry agrees.)"}
          </p>

          <TheoryBox title="Named by shape">
            <p>
              <strong>Row matrix</strong>{" (row vector) — just one row, size $1\\times n$. Example: $\\begin{pmatrix}2&5&-1\\end{pmatrix}$."}
            </p>
            <p>
              <strong>Column matrix</strong>{" (column vector) — just one column, size $m\\times 1$. Example: $\\begin{pmatrix}3\\\\0\\\\-4\\end{pmatrix}$."}
            </p>
            <p>
              <strong>Square matrix</strong>{" — same number of rows and columns, size $n\\times n$. Example: $\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$. Only square matrices have a determinant or an inverse."}
            </p>
            <p>
              <strong>Rectangular matrix</strong>{" — the row and column counts differ ($m\\neq n$). Example: $\\begin{pmatrix}1&0&2\\\\4&1&5\\end{pmatrix}$ has 2 rows and 3 columns."}
            </p>
          </TheoryBox>

          <TheoryBox title="The everyday special ones (square)">
            <p>
              <strong>Zero (null) matrix</strong>{", written $O$ — every entry is $0$, e.g. $\\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}$. It behaves like the number $0$: $A+O=A$."}
            </p>
            <p>
              <strong>Diagonal matrix</strong>{" — the only non-zero entries sit on the main diagonal (top-left to bottom-right). Example: $\\begin{pmatrix}5&0\\\\0&-2\\end{pmatrix}$. Multiplying and inverting these is as easy as handling one number at a time."}
            </p>
            <p>
              <strong>Scalar matrix</strong>{" — a diagonal matrix with the same number repeated down the diagonal. Example: $\\begin{pmatrix}3&0\\\\0&3\\end{pmatrix}$. Multiplying by it just scales every vector by that number."}
            </p>
            <p>
              <strong>Identity (unit) matrix</strong>{", written $I_n$ — a scalar matrix made of $1$s: $\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}$. It does nothing: $AI=IA=A$."}
            </p>
          </TheoryBox>

          <TheoryBox title="Triangular matrices (square)">
            <p>
              <strong>Upper triangular</strong>{" — every entry below the diagonal is $0$. Example: $\\begin{pmatrix}1&2&3\\\\0&4&5\\\\0&0&6\\end{pmatrix}$."}
            </p>
            <p>
              <strong>Lower triangular</strong>{" — every entry above the diagonal is $0$. Example: $\\begin{pmatrix}1&0&0\\\\2&3&0\\\\4&5&6\\end{pmatrix}$."}
            </p>
            <p>
              {"For either kind, the determinant is just the product of the diagonal entries — $1\\cdot 4\\cdot 6=24$ for both examples above."}
            </p>
          </TheoryBox>

          <TheoryBox title="Symmetric and skew-symmetric (square)">
            <p>
              {"The transpose $A^T$ flips a matrix across its main diagonal. Two types are defined by how $A$ compares with $A^T$."}
            </p>
            <p>
              <strong>Symmetric</strong>{" — $A^T=A$, so the entry in row $i$, column $j$ equals the entry in row $j$, column $i$. Example: $\\begin{pmatrix}1&7\\\\7&3\\end{pmatrix}$."}
            </p>
            <p>
              <strong>Skew-symmetric</strong>{" (anti-symmetric) — $A^T=-A$. This forces every diagonal entry to be $0$. Example: $\\begin{pmatrix}0&4\\\\-4&0\\end{pmatrix}$."}
            </p>
          </TheoryBox>

          <TheoryBox title="Named by how they behave (square)">
            <p>
              <strong>Non-singular (invertible)</strong>{" — $\\det A\\neq 0$, so an inverse exists. Example: $\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$ has $\\det=-2$."}
            </p>
            <p>
              <strong>Singular</strong>{" — $\\det A=0$, no inverse. Example: $\\begin{pmatrix}1&2\\\\2&4\\end{pmatrix}$ (row 2 is twice row 1)."}
            </p>
            <p>
              <strong>Orthogonal</strong>{" — $A^T A=I$, so $A^{-1}=A^T$ for free. Its columns are perpendicular unit vectors, and it rotates or reflects without changing any lengths. Example: $\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$ (a $90^\\circ$ rotation)."}
            </p>
            <p>
              <strong>Idempotent</strong>{" — $A^2=A$: squaring it changes nothing. Projection matrices are like this. Example: $\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$."}
            </p>
            <p>
              <strong>Involutory</strong>{" — $A^2=I$: the matrix is its own inverse. Example: $\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$ (it swaps the two coordinates)."}
            </p>
            <p>
              <strong>Nilpotent</strong>{" — some power is the zero matrix ($A^k=O$). Example: $\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$, whose square is $O$."}
            </p>
          </TheoryBox>

          <ProcedureBox
            title="How to name a matrix you are handed"
            steps={[
              { text: "Check the shape first: one row is a row matrix, one column is a column matrix, equal row and column counts make it square, anything else is rectangular.", why: "Shape decides whether a determinant or inverse is even possible." },
              { text: "If it is square, look at the entries off the main diagonal. All zero below the diagonal means upper triangular; all zero above means lower triangular; all zero on both sides means diagonal.", why: "Triangular and diagonal patterns unlock fast determinants and inverses." },
              { text: "For a diagonal matrix, read the diagonal itself: one number repeated is a scalar matrix, and all $1$s is the identity. Every entry zero (any shape) is the zero matrix.", why: "These behave like a single number, so spotting them simplifies expressions." },
              { text: "Compare $A$ with its transpose: $A^T=A$ is symmetric, and $A^T=-A$ is skew-symmetric.", why: "The transpose test is the quickest way to catch these two." },
              { text: "If you know the determinant, $\\det A\\neq 0$ is non-singular (invertible) and $\\det A=0$ is singular.", why: "This is what you check before solving $Ax=b$ by inversion." },
              { text: "For the behaviour-based names, test a product: $A^T A=I$ is orthogonal, $A^2=A$ is idempotent, $A^2=I$ is involutory, and $A^k=O$ for some power $k$ is nilpotent.", why: "These identities are exactly what the names mean." },
            ]}
          />

          <RealLifeUse>{"Diagonal and triangular matrices are the forms that solvers try to reach, because they are cheap to work with. Symmetric matrices turn up as covariance matrices in statistics and stiffness matrices in engineering. Orthogonal matrices are the rotations used in computer graphics and robotics. Idempotent matrices are the projections behind least-squares fitting."}</RealLifeUse>
        </section>

        <section className="section" id="la-m-proc1">
          <div className="sec-badge">Procedure</div>
          <h2 className="sec-title">How to work with matrices as maps</h2>
          <ProcedureBox
            title="How to multiply, apply, and interpret matrices"
            steps={[
                { text: "Identify size: $A$ is $m\\times n$ means domain $\\mathbb{R}^n$, codomain $\\mathbb{R}^m$.", why: "Record matrix shape (domain/codomain) before arithmetic." },
                { text: "To compute $Ax$, either form the row–column dots, or write $x$ as weights on the columns of $A$.", why: "Interpret Ax as a combination of the columns of A." },
                { text: "To add $A+B$, require identical sizes and add entrywise; scalar $cA$ scales every entry.", why: "Record matrix shape (domain/codomain) before arithmetic." },
                { text: "To form $AB$, require inner dimensions equal: $(m\\times k)(k\\times n)$ yields $m\\times n$. Entry $(i,j)$ is row $i$ of $A$ dotted with column $j$ of $B$.", why: "Use independence and spanning (via rank/pivots) to decide bases and membership." },
                { text: "Interpret $AB$ as composition: apply $B$ first, then $A$.", why: "Check sizes, multiply as composition, and reverse order under transpose." },
                { text: "Compute $(AB)^T=B^T A^T$ when you need the transpose of a product.", why: "Check sizes, multiply as composition, and reverse order under transpose." },
                { text: "Never assume $AB=BA$; check sizes and, when both exist, compare explicitly on a small example.", why: "Check sizes, multiply as composition, and reverse order under transpose." },
                { text: "Use $I$ as the do-nothing map and $O$ as the collapse-to-zero map when simplifying expressions." }
              ]}
          />
        </section>

        <section className="section" id="la-m-ex-p1">
          <div className="sec-badge">Large examples</div>
          <h2 className="sec-title">Six detailed worked examples</h2>

          <WorkedExample
            number={1}
            title="Apply a matrix to a vector"
            setup={"$A=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}$, $x=\\begin{pmatrix}3\\\\4\\end{pmatrix}$. Compute $Ax$ two ways."}
            steps={[
                { text: "Row–column method: first entry $1\\cdot 3+2\\cdot 4=11$; second entry $0\\cdot 3+1\\cdot 4=4$.", why: "Interpret Ax as a combination of the columns of A." },
                { text: "So $Ax=\\begin{pmatrix}11\\\\4\\end{pmatrix}$.", why: "Interpret Ax as a combination of the columns of A." },
                { text: "Column method: $Ax=3\\begin{pmatrix}1\\\\0\\end{pmatrix}+4\\begin{pmatrix}2\\\\1\\end{pmatrix}=\\begin{pmatrix}3\\\\0\\end{pmatrix}+\\begin{pmatrix}8\\\\4\\end{pmatrix}$.", why: "Interpret Ax as a combination of the columns of A." },
                { text: "Add: $\\begin{pmatrix}11\\\\4\\end{pmatrix}$ — same result.", why: "Confirm with a second method or by substituting back." },
                { text: "Map interpretation: $A$ shears by adding twice the second coordinate into the first, then keeps the second coordinate.", why: "Use independence and spanning (via rank/pivots) to decide bases and membership." },
                { text: "Domain is $\\mathbb{R}^2$, codomain is $\\mathbb{R}^2$ ($2\\times 2$ matrix).", why: "Record matrix shape (domain/codomain) before arithmetic." }
              ]}
            result={"$Ax=(11,4)^T$."}
            check={"Recompute $3(1,0)+4(2,1)=(11,4)$."}
          />
          <WorkedExample
            number={2}
            title="Matrix addition and scalar multiplication"
            setup={"$A=\\begin{pmatrix}1&0\\\\2&3\\end{pmatrix}$, $B=\\begin{pmatrix}0&1\\\\1&1\\end{pmatrix}$. Form $A+B$ and $2A$."}
            steps={[
                { text: "Sizes match ($2\\times 2$), so addition is allowed.", why: "Record matrix shape (domain/codomain) before arithmetic." },
                { text: "$A+B=\\begin{pmatrix}1+0&0+1\\\\2+1&3+1\\end{pmatrix}=\\begin{pmatrix}1&1\\\\3&4\\end{pmatrix}$." },
                { text: "$2A=\\begin{pmatrix}2&0\\\\4&6\\end{pmatrix}$." },
                { text: "As maps: $(A+B)x=Ax+Bx$ and $(2A)x=2(Ax)$.", why: "Interpret Ax as a combination of the columns of A." },
                { text: "If sizes differed, $A+B$ would be undefined — always check shape first.", why: "Record matrix shape (domain/codomain) before arithmetic." },
                { text: "Note $A+B=B+A$ (addition is commutative), unlike multiplication." }
              ]}
            result={"$A+B=\\begin{pmatrix}1&1\\\\3&4\\end{pmatrix}$, $2A=\\begin{pmatrix}2&0\\\\4&6\\end{pmatrix}$."}
            check={"Entry $(2,1)$ of $A+B$ is $2+1=3$."}
          />
          <WorkedExample
            number={3}
            title="When products exist: sizes"
            setup={"$A$ is $2\\times 3$, $B$ is $3\\times 2$. Discuss $AB$ and $BA$."}
            steps={[
                { text: "For $AB$: inner dimensions $3=3$, so $AB$ exists and is $2\\times 2$.", why: "Use independence and spanning (via rank/pivots) to decide bases and membership." },
                { text: "For $BA$: inner dimensions $2=2$, so $BA$ exists and is $3\\times 3$.", why: "Use independence and spanning (via rank/pivots) to decide bases and membership." },
                { text: "Both products exist, but they live in different spaces of matrices — they cannot be equal." },
                { text: "Composition view: $AB$ maps $\\mathbb{R}^2\\to\\mathbb{R}^2$; $BA$ maps $\\mathbb{R}^3\\to\\mathbb{R}^3$.", why: "Check sizes, multiply as composition, and reverse order under transpose." },
                { text: "If instead $B$ were $2\\times 2$, then $AB$ would be undefined because $3\\neq 2$." },
                { text: "Always write the size chain before multiplying.", why: "Record matrix shape (domain/codomain) before arithmetic." }
              ]}
            result={"$AB$ is $2\\times 2$; $BA$ is $3\\times 3$; products need not commute or even share a size."}
            check={"$(m\\times k)(k\\times n)=(m\\times n)$ is the only size rule you need."}
          />
          <WorkedExample
            number={4}
            title="Explicit 2×2 multiplication and noncommutativity"
            setup={"$A=\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$, $B=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$. Compare $AB$ and $BA$."}
            steps={[
                { text: "Row1·Col1 for $AB$: $1\\cdot 0+2\\cdot 1=2$. Row1·Col2: $1\\cdot 1+2\\cdot 0=1$." },
                { text: "Row2·Col1: $3\\cdot 0+4\\cdot 1=4$. Row2·Col2: $3\\cdot 1+4\\cdot 0=3$." },
                { text: "Thus $AB=\\begin{pmatrix}2&1\\\\4&3\\end{pmatrix}$.", why: "Check sizes, multiply as composition, and reverse order under transpose." },
                { text: "Now $BA$: $B$ swaps rows of $A$, giving $BA=\\begin{pmatrix}3&4\\\\1&2\\end{pmatrix}$.", why: "Check sizes, multiply as composition, and reverse order under transpose." },
                { text: "Clearly $AB\\neq BA$.", why: "Check sizes, multiply as composition, and reverse order under transpose." },
                { text: "Map story: $B$ is a reflection/swap of coordinates; composing with $A$ in different orders yields different maps.", why: "Use independence and spanning (via rank/pivots) to decide bases and membership." }
              ]}
            result={"$AB\\neq BA$ for this pair."}
            check={"Compute $(AB)_{11}=2$ and $(BA)_{11}=3$ — already unequal."}
          />
          <WorkedExample
            number={5}
            title="Transpose of a product"
            setup={"Using $A,B$ from Example 4, verify $(AB)^T=B^T A^T$."}
            steps={[
                { text: "From before, $AB=\\begin{pmatrix}2&1\\\\4&3\\end{pmatrix}$, so $(AB)^T=\\begin{pmatrix}2&4\\\\1&3\\end{pmatrix}$.", why: "Check sizes, multiply as composition, and reverse order under transpose." },
                { text: "$B^T=B$ because $B$ is symmetric (it equals its transpose).", why: "Real symmetric matrices admit an orthonormal eigenbasis." },
                { text: "$A^T=\\begin{pmatrix}1&3\\\\2&4\\end{pmatrix}$." },
                { text: "Compute $B^T A^T=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}\\begin{pmatrix}1&3\\\\2&4\\end{pmatrix}=\\begin{pmatrix}2&4\\\\1&3\\end{pmatrix}$.", why: "Carry out the computation justified by the setup." },
                { text: "Matches $(AB)^T$.", why: "Check sizes, multiply as composition, and reverse order under transpose." },
                { text: "The order reversal is mandatory: $A^T B^T$ would be wrong in general." }
              ]}
            result={"$(AB)^T=B^T A^T=\\begin{pmatrix}2&4\\\\1&3\\end{pmatrix}$."}
            check={"Entry $(1,2)$ on both sides is $4$."}
          />
          <WorkedExample
            number={6}
            title="Matrix–vector as a linear combination of columns"
            setup={"$M=\\begin{pmatrix}1&0&2\\\\-1&3&1\\end{pmatrix}$, $x=(2,-1,4)^T$. Write $Mx$ via columns."}
            steps={[
                { text: "Columns: $c_1=(1,-1)$, $c_2=(0,3)$, $c_3=(2,1)$.", why: "Solve for the coefficients in the linear combination." },
                { text: "$Mx=2c_1+(-1)c_2+4c_3$.", why: "Solve for the coefficients in the linear combination." },
                { text: "$2c_1=(2,-2)$, $-c_2=(0,-3)$, $4c_3=(8,4)$.", why: "Solve for the coefficients in the linear combination." },
                { text: "Sum: $(2+0+8,\\,-2-3+4)=(10,-1)$." },
                { text: "Direct multiply: row1 gives $1\\cdot 2+0\\cdot(-1)+2\\cdot 4=10$; row2 gives $-1\\cdot 2+3\\cdot(-1)+1\\cdot 4=-1$." },
                { text: "Same answer; the column picture is what proves $\\mathrm{range}(M)=\\mathrm{Col}(M)$." }
              ]}
            result={"$Mx=(10,-1)^T$."}
            check={"Both methods agree on each coordinate."}
          />
        </section>

        <LaMcqSection
          id="quiz-la-m-intro"
          badge="Quiz 2.1"
          title="Matrix basics"
          scoreId="score-la-m-intro"
          section="la-m-intro"
          questions={LA_M_INTRO_QUIZ}
        />

        <Divider />

        <section className="section" id="la-m-ops">
          <div className="sec-badge">Section 2.2</div>
          <h2 className="sec-title">Matrix operations — deep theory</h2>
          <TheoryBox title="Product rule of thumb">
            <p>
              {"$(AB)_{ij}$ is row $i$ of $A$ dotted with column $j$ of $B$. Associativity $(AB)C=A(BC)$ always holds when the products are defined — composition of functions is associative. Distributivity over addition also holds. What fails in general is commutativity: $AB$ need not equal $BA$, and one of the two products may not even exist."}
            </p>
            <p>
              {"Transpose reverses order: $(AB)^T=B^T A^T$. Powers $A^k$ are defined for square $A$ by repeated multiplication; $A^0:=I$. These algebraic rules are the everyday toolkit for simplifying matrix expressions before any numbers appear."}
            </p>
          </TheoryBox>
          <TheoremBox title="Composition = multiplication">
            <p>
              {"If $T(x)=Bx$ and $S(y)=Ay$ with compatible sizes, then $(S\\circ T)(x)=A(Bx)=(AB)x$. Matrix multiplication was invented precisely so that composition of linear maps becomes an algebraic product you can compute entrywise."}
            </p>
          </TheoremBox>
        </section>

        <LaMcqSection
          id="quiz-la-m-ops"
          badge="Quiz 2.2"
          title="Operations"
          scoreId="score-la-m-ops"
          section="la-m-ops"
          questions={LA_M_OPS_QUIZ}
        />

        <Divider />
        <LaCertificateBoost topic="matrices" part={1} />

        <section className="section" id="summary1">
          <div className="sec-badge">Reference</div>
          <h2 className="sec-title">Continue</h2>
          <p>
            {"Matrices are linear maps; columns are images of basis vectors; multiplication is composition. Part 2 develops determinants and inverses."}
          </p>
          <p>
            Use the gold button: <strong>Next: Part 2 — Determinants and inverses</strong>.
          </p>
        </section>
      </main>
    </StudyGuideShell>
  );
}

export default MatricesGuide;
