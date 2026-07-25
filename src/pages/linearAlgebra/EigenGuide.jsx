import { Link } from "react-router-dom";
import StudyGuideShell from "../StudyGuideShell";
import "../PartialDerivativesGuide.css";
import { LaMcqSection } from "./LaMcq";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample } from "./LaBlocks";

function Divider() {
  return <hr className="divider" />;
}

function EigenGuide({ part = 1 }) {
  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Eigenvalues & Eigenvectors (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Eigen · Part 2</div></div>
          <a className="sb-link" href="#la-e-diag">Diagonalization</a>
          <a className="sb-link" href="#la-e-proc2">Method</a>
          <a className="sb-link" href="#la-e-ex-p2">Examples</a>
          <a className="sb-link" href="#quiz-la-e-diag">Quiz</a>
          <a className="sb-link" href="#la-e-apps">Applications</a>
          <a className="sb-link" href="#quiz-la-e-apps">Quiz</a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Linear Algebra · Part 2 of 2</div>
            <h1 className="ch-title">Eigenvalues &amp; Eigenvectors</h1>
            <p className="ch-sub">Diagonalization and applications — theory plus calculations</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <section className="section" id="la-e-diag">
            <div className="sec-badge">Section 4.3</div>
            <h2 className="sec-title">Diagonalization — deep theory</h2>
            <p>
              {"Diagonalization is the payoff of the eigenstory: in an eigenbasis the matrix becomes a list of independent stretch factors on the diagonal. Powers, exponentials, and many dynamical systems collapse to scalar arithmetic once $A=PDP^{-1}$."}
            </p>
            <TheoryBox title="A = PDP⁻¹">
              <p>
                {"$A$ is diagonalizable if there exist invertible $P$ and diagonal $D$ with $A=PDP^{-1}$. Equivalently, $\\mathbb{R}^n$ has a basis of eigenvectors of $A$. Columns of $P$ are those independent eigenvectors; diagonal entries of $D$ are the matching eigenvalues in the same order. Then $AP=PD$, which is exactly $A$ times each column of $P$ equals $\\lambda$ times that column."}
              </p>
              <p>
                {"Once diagonalized, $A^k=P D^k P^{-1}$ with $D^k=\\mathrm{diag}(\\lambda_1^k,\\ldots,\\lambda_n^k)$. The matrix exponential $e^{At}=P e^{Dt} P^{-1}$ is the continuous-time analogue used for $\\dot x=Ax$."}
              </p>
            </TheoryBox>
            <TheoremBox title="Enough eigenvectors">
              <p>
                {"$n$ distinct eigenvalues in $\\mathbb{R}^n$ automatically give $n$ independent eigenvectors, hence diagonalizability. For a repeated eigenvalue you need geometric multiplicity equal to algebraic multiplicity to fill an eigenbasis. If geo. mult. is strictly smaller, $A$ is defective and not diagonalizable over that field (Jordan form is the next tool)."}
              </p>
            </TheoremBox>
            <TheoryBox title="Symmetric bonus">
              <p>
                {"Real symmetric matrices are always orthogonally diagonalizable: $A=Q\\Lambda Q^T$ with $Q^{-1}=Q^T$. Eigenvalues are real, and eigenvectors for distinct eigenvalues are automatically orthogonal. This is the spectral theorem that underlies PCA and quadratic forms."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="la-e-proc2">
            <div className="sec-badge">Procedure</div>
            <h2 className="sec-title">How to diagonalize a matrix</h2>
            <ProcedureBox
              title="How to diagonalize A (when possible)"
              steps={[
                "Compute the characteristic polynomial $p(\\lambda)=\\det(A-\\lambda I)$ and find all eigenvalues.",
                "For each eigenvalue $\\lambda$, solve $(A-\\lambda I)v=0$ and find a basis of the eigenspace.",
                "Check dimensions: if you obtain fewer than $n$ independent eigenvectors in total, stop — $A$ is not diagonalizable.",
                "Form $P$ with those eigenvectors as columns, and $D=\\mathrm{diag}(\\lambda_1,\\ldots,\\lambda_n)$ in matching order.",
                "Optional but recommended: compute $P^{-1}$ and verify $A=PDP^{-1}$ on a couple of entries, or check $AP=PD$.",
                "To compute powers: replace $A^k$ by $P D^k P^{-1}$.",
                "For real symmetric $A$, orthonormalize eigenvectors within each eigenspace so that $P$ can be taken orthogonal ($P^{-1}=P^T$).",
              ]}
            />
          </section>

          <section className="section" id="la-e-ex-p2">
            <div className="sec-badge">Large examples</div>
            <h2 className="sec-title">Six detailed worked examples</h2>

            <WorkedExample
              number={1}
              title="Diagonalize a 2×2 triangular matrix"
              setup={"$A=\\begin{pmatrix}2&1\\\\0&3\\end{pmatrix}$."}
              steps={[
                "Triangular ⇒ eigenvalues are diagonal entries $\\lambda=2$ and $\\lambda=3$.",
                "For $\\lambda=2$: $A-2I=\\begin{pmatrix}0&1\\\\0&1\\end{pmatrix}$. Equation $v_2=0$. Take $v_1=(1,0)$.",
                "For $\\lambda=3$: $A-3I=\\begin{pmatrix}-1&1\\\\0&0\\end{pmatrix}$. Equation $-v_1+v_2=0$. Take $v_2=(1,1)$.",
                "Two independent eigenvectors ⇒ diagonalizable.",
                "Set $P=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$, $D=\\mathrm{diag}(2,3)$.",
                "Check $AP=PD$: both sides equal $\\begin{pmatrix}2&3\\\\0&3\\end{pmatrix}$.",
              ]}
              result={"$A=PDP^{-1}$ with $P=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$, $D=\\mathrm{diag}(2,3)$."}
              check={"$\\det P=1\\neq 0$, so $P$ is invertible."}
            />
            <WorkedExample
              number={2}
              title="Compute A⁵ via diagonalization"
              setup={"Same $A$ as Example 1. Find $A^5$ using $P,D$."}
              steps={[
                "$A^5=P D^5 P^{-1}$.",
                "$D^5=\\mathrm{diag}(2^5,3^5)=\\mathrm{diag}(32,243)$.",
                "From Example 1, $P=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$, so $P^{-1}=\\begin{pmatrix}1&-1\\\\0&1\\end{pmatrix}$.",
                "First $D^5 P^{-1}=\\begin{pmatrix}32&-32\\\\0&243\\end{pmatrix}$.",
                "Then $A^5=P(D^5 P^{-1})=\\begin{pmatrix}32&211\\\\0&243\\end{pmatrix}$.",
                "Direct multiplication of $A$ five times would be painful; diagonalization scales.",
              ]}
              result={"$A^5=\\begin{pmatrix}32&211\\\\0&243\\end{pmatrix}$."}
              check={"Trace of $A^5$ should be $32+243=275=2^5+3^5$."}
            />
            <WorkedExample
              number={3}
              title="Not every matrix diagonalizes over R"
              setup={"Rotation by $90^\\circ$: $R=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$."}
              steps={[
                "$R-\\lambda I=\\begin{pmatrix}-\\lambda&-1\\\\1&-\\lambda\\end{pmatrix}$.",
                "$\\det=\\lambda^2+1=0\\Rightarrow\\lambda=\\pm i$.",
                "No real eigenvalues ⇒ no real eigenvectors ⇒ not diagonalizable over $\\mathbb{R}$.",
                "Over $\\mathbb{C}$ it does diagonalize, with complex conjugate eigenpairs.",
                "Geometrically every nonzero vector is rotated, never merely scaled, so no real eigenline.",
                "Invertibility is irrelevant here: $\\det R=1\\neq 0$, yet real diagonalization fails.",
              ]}
              result={"$R$ is not diagonalizable over $\\mathbb{R}$."}
              check={"$\\lambda^2+1$ has no real root."}
            />
            <WorkedExample
              number={4}
              title="Symmetric ⇒ orthogonal diagonalization"
              setup={"$S=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$."}
              steps={[
                "$\\det(S-\\lambda I)=(2-\\lambda)^2-1=\\lambda^2-4\\lambda+3=(\\lambda-1)(\\lambda-3)$.",
                "Eigenvalues $\\lambda=1$ and $\\lambda=3$ (real, as promised for symmetric matrices).",
                "For $\\lambda=1$: $(S-I)=\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}\\Rightarrow v_1+v_2=0$. Unit vector $u_1=\\frac{1}{\\sqrt{2}}(1,-1)$.",
                "For $\\lambda=3$: $(S-3I)=\\begin{pmatrix}-1&1\\\\1&-1\\end{pmatrix}\\Rightarrow -v_1+v_2=0$. Unit $u_2=\\frac{1}{\\sqrt{2}}(1,1)$.",
                "These are orthonormal; $Q=[u_1\\ u_2]$ is orthogonal and $S=Q\\Lambda Q^T$ with $\\Lambda=\\mathrm{diag}(1,3)$.",
                "Dot product $u_1\\cdot u_2=0$ illustrates orthogonality of distinct eigenspaces.",
              ]}
              result={"$S$ is orthogonally diagonalizable with $\\lambda=1,3$."}
              check={"$u_1\\cdot u_2=0$ and $\\|u_i\\|=1$."}
            />
            <WorkedExample
              number={5}
              title="Defective matrix (not diagonalizable)"
              setup={"$N=\\begin{pmatrix}2&1\\\\0&2\\end{pmatrix}$. Show it fails to diagonalize."}
              steps={[
                "Characteristic polynomial $(\\lambda-2)^2$; algebraic multiplicity of $2$ is $2$.",
                "$N-2I=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$; solutions satisfy $v_2=0$.",
                "Eigenspace is $\\mathrm{Span}\\{(1,0)\\}$ — geometric multiplicity $1<2$.",
                "Only one independent eigenvector ⇒ cannot build invertible $P$ of eigenvectors.",
                "Hence $N$ is not diagonalizable (Jordan block structure).",
                "Contrast with Example 1, where the off-diagonal $1$ sat with unequal diagonal entries and two eigenlines appeared.",
              ]}
              result={"$N$ is defective: not diagonalizable."}
              check={"Any supposed eigenbasis would need two independent vectors for $\\lambda=2$, but $\\dim\\mathrm{Nul}(N-2I)=1$."}
            />
            <WorkedExample
              number={6}
              title="Change of basis interpretation"
              setup={"Using $P,D$ from Example 1, interpret $A=PDP^{-1}$ on a vector $x$."}
              steps={[
                "Write $x=P c$, so $c=P^{-1}x$ are coordinates of $x$ in the eigenbasis (columns of $P$).",
                "Then $Ax=P D c$: in eigen-coordinates, $A$ simply multiplies each coordinate $c_i$ by $\\lambda_i$.",
                "Finally $P$ maps those scaled coordinates back to the standard basis.",
                "For $x=(1,0)^T$ (already an eigenvector): $c=(1,0)$, $Dc=(2,0)$, $PDc=(2,0)=Ax$.",
                "For $x=(1,1)^T$: $c=(0,1)$, $Dc=(0,3)$, $PDc=(3,3)=3x$.",
                "Diagonalization is exactly “change to eigenbasis, stretch, change back.”",
              ]}
              result={"$A$ acts as independent scalings in the eigenbasis of $P$."}
              check={"$A(1,1)^T=(3,3)^T=3(1,1)^T$."}
            />
          </section>

          <LaMcqSection
            id="quiz-la-e-diag"
            badge="Quiz 4.3"
            title="Diagonalization"
            scoreId="score-la-e-diag"
            section="la-e-diag"
            questions={[
              {
                prompt: "In $A=PDP^{-1}$, the columns of $P$ are:",
                options: ["Rows of $A$", "Eigenvectors of $A$", "Only the zero vector"],
                answer: "B",
                explanation: "Independent eigenvectors form $P$.",
              },
              {
                prompt: "If $A$ has $n$ distinct eigenvalues, then $A$ is:",
                options: ["Never diagonalizable", "Diagonalizable", "Singular"],
                answer: "B",
                explanation: "Distinct eigenvalues give independent eigenvectors.",
              },
              {
                prompt: "$A^k$ for diagonalizable $A=PDP^{-1}$ equals:",
                options: ["$P D^k P^{-1}$", "$P^k D P^{-1}$", "$D^k$ only"],
                answer: "A",
                explanation: "Powers become easy on the diagonal factor.",
              },
            ]}
          />

          <Divider />

          <section className="section" id="la-e-apps">
            <div className="sec-badge">Section 4.4</div>
            <h2 className="sec-title">Why eigenvalues matter — deep theory</h2>
            <TheoryBox title="Applications map">
              <p>
                {"Stability of $\\dot x=Ax$ is governed by real parts of eigenvalues: positive ⇒ growth, negative ⇒ decay, zero ⇒ borderline cases needing more care. Discrete powers $A^k x_0$ grow when some $|\\lambda|>1$. PCA finds principal directions as eigenvectors of a covariance / Gram matrix. Vibration modes, PageRank’s dominant eigenvector, and the definiteness of quadratic forms $x^T Ax$ are all eigenproblems."}
              </p>
              <p>
                {"Real symmetric matrices are especially friendly: real eigenvalues and an orthonormal eigenbasis. Indefinite, positive definite, or negative definite quadratic forms are classified by the signs of those eigenvalues."}
              </p>
            </TheoryBox>
            <TheoremBox title="Quick stability and PCA facts">
              <p>
                {"For $\\dot x=Ax$ with diagonalizable $A$, each eigen-component evolves like $e^{\\lambda t}$. For PCA, the leading eigenvector of the covariance matrix points along maximal variance; projecting onto the top $k$ eigenvectors gives the best rank-$k$ approximation in a precise least-squares sense (Eckart–Young for SVD, closely related)."}
              </p>
            </TheoremBox>
          </section>

          <LaMcqSection
            id="quiz-la-e-apps"
            badge="Quiz 4.4"
            title="Applications"
            scoreId="score-la-e-apps"
            section="la-e-apps"
            questions={[
              {
                prompt: "For $\\dot x=Ax$, solutions grow when eigenvalues have:",
                options: ["Negative real part", "Positive real part", "Zero imaginary part only"],
                answer: "B",
                explanation: "Positive real parts drive exponential growth.",
              },
              {
                prompt: "Real symmetric matrices have:",
                options: ["Only complex eigenvalues", "Real eigenvalues", "No eigenvectors"],
                answer: "B",
                explanation: "Spectral theorem: real eigenvalues and orthogonal diagonalization.",
              },
              {
                prompt: "PCA uses eigenvectors of:",
                options: ["A random sparse matrix", "A covariance / Gram matrix", "Only $I$"],
                answer: "B",
                explanation: "Principal directions are eigenvectors of the covariance matrix.",
              },
            ]}
          />

          <Divider />
          <section className="section" id="summary">
            <div className="sec-badge">Reference</div>
            <h2 className="sec-title">Module complete</h2>
            <p>
              {"Diagonalization turns matrix powers and linear ODEs into scalar problems; applications from stability to PCA all rest on eigenpairs."}
            </p>
            <p>
              Drill in the{" "}
              <Link to="/practice" style={{ color: "var(--gold)", fontWeight: 600 }}>
                Practice Arena
              </Link>{" "}
              or return via the gold bar to the course hub.
            </p>
          </section>
        </main>
      </StudyGuideShell>
    );
  }

  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Eigenvalues & Eigenvectors (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Eigen · Part 1</div></div>
        <a className="sb-link" href="#la-e-intro">Theory</a>
        <a className="sb-link" href="#la-e-proc1">Method</a>
        <a className="sb-link" href="#la-e-ex-p1">Examples</a>
        <a className="sb-link" href="#quiz-la-e-intro">Quiz</a>
        <a className="sb-link" href="#la-e-char">Characteristic poly</a>
        <a className="sb-link" href="#quiz-la-e-char">Quiz</a>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Linear Algebra · Part 1 of 2</div>
          <h1 className="ch-title">Eigenvalues &amp; Eigenvectors</h1>
          <p className="ch-sub">Special directions of a linear map — theory and calculations</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <section className="section" id="la-e-intro">
          <div className="sec-badge">Section 4.1</div>
          <h2 className="sec-title">Definition — deep theory</h2>
          <p>
            {"Most vectors are moved in complicated ways by a linear map. Eigenvectors are the exception: they keep their direction (or reverse it) and are only stretched. Finding them reduces a matrix to its simplest directional behavior."}
          </p>
          <TheoryBox title="Av = λv">
            <p>
              {"A nonzero vector $v$ is an eigenvector of $A$ with eigenvalue $\\lambda$ when $Av=\\lambda v$. Rearrangement gives $(A-\\lambda I)v=0$ with $v\\neq 0$, so $A-\\lambda I$ is singular and $\\det(A-\\lambda I)=0$. The set of all eigenvectors for a fixed $\\lambda$, together with $0$, is the eigenspace $\\mathrm{Nul}(A-\\lambda I)$ — always a subspace."}
            </p>
            <p>
              {"Eigenvalues may be real or complex; over $\\mathbb{R}$ some matrices have no eigenpairs at all (e.g. a $90^\\circ$ rotation). Scaling $v$ by a nonzero constant preserves the eigen-relation: eigenvectors are directions, not unique vectors."}
            </p>
          </TheoryBox>
          <TheoremBox title="Invariant lines">
            <p>
              {"If $Av=\\lambda v$, the line $\\mathrm{Span}\\{v\\}$ is invariant under $A$: every vector on that line is mapped to another on the same line. For $\\lambda>0$ the map stretches; for $\\lambda<0$ it also reverses orientation on that line; for $\\lambda=0$ the whole line collapses to the origin (nullspace direction)."}
            </p>
          </TheoremBox>
          <TheoryBox title="Trace and determinant previews">
            <p>
              {"For any square matrix, the sum of eigenvalues (with algebraic multiplicity) equals $\\mathrm{tr}(A)$, and the product equals $\\det A$. These identities are excellent sanity checks after you solve the characteristic equation."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="la-e-proc1">
          <div className="sec-badge">Procedure</div>
          <h2 className="sec-title">How to find eigenvalues and eigenvectors</h2>
          <ProcedureBox
            title="How to compute eigenpairs of a small matrix"
            steps={[
              "Form $A-\\lambda I$ with $\\lambda$ as an unknown on the diagonal.",
              "Compute $p(\\lambda)=\\det(A-\\lambda I)$ (the characteristic polynomial).",
              "Solve $p(\\lambda)=0$ for eigenvalues (factor or use the quadratic formula in the $2\\times 2$ case).",
              "For each eigenvalue $\\lambda$, row-reduce $A-\\lambda I$ and solve $(A-\\lambda I)v=0$.",
              "Write the general nullspace vector; pick one or more independent concrete eigenvectors.",
              "Verify by multiplying: check $Av\\stackrel{?}{=}\\lambda v$ numerically.",
              "Cross-check: $\\sum\\lambda_i=\\mathrm{tr}(A)$ and $\\prod\\lambda_i=\\det A$.",
            ]}
          />
        </section>

        <section className="section" id="la-e-ex-p1">
          <div className="sec-badge">Large examples</div>
          <h2 className="sec-title">Six detailed worked examples</h2>

          <WorkedExample
            number={1}
            title="Verify an eigenpair"
            setup={"$A=\\begin{pmatrix}3&0\\\\0&1\\end{pmatrix}$, $v=(1,0)$. Claim $\\lambda=3$."}
            steps={[
              "Compute $Av=(3,0)$.",
              "Compute $3v=(3,0)$.",
              "They match, so $v$ is an eigenvector for $\\lambda=3$.",
              "Similarly $e_2=(0,1)$ satisfies $Ae_2=(0,1)=1\\cdot e_2$.",
              "Diagonal matrices always have the standard basis as eigenvectors, with diagonal entries as eigenvalues.",
              "Eigenspace for $\\lambda=3$ is $\\mathrm{Span}\\{e_1\\}$; for $\\lambda=1$ it is $\\mathrm{Span}\\{e_2\\}$.",
            ]}
            result={"$v=(1,0)$ is an eigenvector with $\\lambda=3$; also $e_2$ has $\\lambda=1$."}
            check={"$A$ times any $(c,0)$ equals $3(c,0)$."}
          />
          <WorkedExample
            number={2}
            title="Find eigenvalues of a 2×2"
            setup={"$A=\\begin{pmatrix}4&1\\\\2&3\\end{pmatrix}$."}
            steps={[
              "Form $A-\\lambda I=\\begin{pmatrix}4-\\lambda&1\\\\2&3-\\lambda\\end{pmatrix}$.",
              "Determinant: $(4-\\lambda)(3-\\lambda)-2=\\lambda^2-7\\lambda+12-2=\\lambda^2-7\\lambda+10$.",
              "Factor: $(\\lambda-5)(\\lambda-2)=0$.",
              "Eigenvalues $\\lambda=5$ and $\\lambda=2$.",
              "Check trace: $4+3=7=5+2$.",
              "Check det: $12-2=10=5\\cdot 2$.",
            ]}
            result={"$\\lambda\\in\\{2,5\\}$."}
            check={"Trace and determinant identities both hold."}
          />
          <WorkedExample
            number={3}
            title="Find an eigenvector for λ=2"
            setup={"Same $A$ as Example 2. Find $v$ for $\\lambda=2$."}
            steps={[
              "$A-2I=\\begin{pmatrix}2&1\\\\2&1\\end{pmatrix}$.",
              "Rows are dependent; the only independent equation is $2x+y=0$.",
              "So $y=-2x$. Free variable $x=t$.",
              "Take $t=1$: eigenvector $v=(1,-2)$.",
              "Verify: $Av=(4-2,\\,2-6)=(2,-4)=2v$.",
              "Any nonzero multiple of $v$ is also an eigenvector for $\\lambda=2$.",
            ]}
            result={"$v=(1,-2)$ (or any nonzero multiple) for $\\lambda=2$."}
            check={"$A(1,-2)^T=(2,-4)^T=2(1,-2)^T$."}
          />
          <WorkedExample
            number={4}
            title="Eigenvector for λ=5 and basis check"
            setup={"Continue with $A$ from Example 2; find a vector for $\\lambda=5$."}
            steps={[
              "$A-5I=\\begin{pmatrix}-1&1\\\\2&-2\\end{pmatrix}$.",
              "Equation $-x+y=0\\Rightarrow y=x$.",
              "Take $w=(1,1)$.",
              "Verify: $Aw=(4+1,\\,2+3)=(5,5)=5w$.",
              "Together $v=(1,-2)$ and $w=(1,1)$ are independent (matrix with those columns has $\\det=3\\neq 0$).",
              "So they form an eigenbasis of $\\mathbb{R}^2$ — $A$ will be diagonalizable.",
            ]}
            result={"$w=(1,1)$ for $\\lambda=5$; $\\{v,w\\}$ is an eigenbasis."}
            check={"$\\det\\begin{pmatrix}1&1\\\\-2&1\\end{pmatrix}=3\\neq 0$."}
          />
          <WorkedExample
            number={5}
            title="Eigenvalues of a projection"
            setup={"$P=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$ (projection onto the $x$-axis). Find eigenpairs."}
            steps={[
              "$P-\\lambda I=\\begin{pmatrix}1-\\lambda&0\\\\0&-\\lambda\\end{pmatrix}$; $\\det=-\\lambda(1-\\lambda)$." ,
              "Eigenvalues $\\lambda=0$ and $\\lambda=1$.",
              "For $\\lambda=1$: $(P-I)=\\begin{pmatrix}0&0\\\\0&-1\\end{pmatrix}\\Rightarrow$ second coordinate $0$. Eigenvectors $(x,0)$ with $x\\neq 0$.",
              "For $\\lambda=0$: $Pv=0\\Rightarrow$ first coordinate $0$. Eigenvectors $(0,y)$ with $y\\neq 0$.",
              "Interpretation: vectors on the axis stay put ($\\lambda=1$); vertical vectors collapse to $0$ ($\\lambda=0$).",
              "Trace $1=1+0$ and $\\det 0=1\\cdot 0$ check out.",
            ]}
            result={"$\\lambda=1$ along $e_1$; $\\lambda=0$ along $e_2$."}
            check={"$P(3,0)=(3,0)$ and $P(0,4)=(0,0)$."}
          />
          <WorkedExample
            number={6}
            title="Complex eigenvalues warning"
            setup={"$R=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$. Show there is no real eigenpair."}
            steps={[
              "$\\det(R-\\lambda I)=\\lambda^2+1$.",
              "Roots $\\lambda=\\pm i$ are not real.",
              "Suppose $Rv=\\lambda v$ for real $v\\neq 0$ and real $\\lambda$. Then $R$ would scale $v$, but $R$ rotates by $90^\\circ$.",
              "A $90^\\circ$ rotation never preserves a real line through the origin.",
              "Therefore no real eigenvectors exist, even though $R$ is invertible.",
              "Over $\\mathbb{C}$ the story continues; over $\\mathbb{R}$ you need a different normal form (rotation-scaling blocks).",
            ]}
            result={"No real eigenvalues or eigenvectors for $R$."}
            check={"$\\lambda^2+1=0$ has discriminant $-4<0$."}
          />
        </section>

        <LaMcqSection
          id="quiz-la-e-intro"
          badge="Quiz 4.1"
          title="Eigen basics"
          scoreId="score-la-e-intro"
          section="la-e-intro"
          questions={[
            {
              prompt: "An eigenvector must be:",
              options: ["The zero vector", "Nonzero", "A unit matrix"],
              answer: "B",
              explanation: "By definition eigenvectors are nonzero.",
            },
            {
              prompt: "If $Av=3v$ for $v\\neq 0$, then $3$ is:",
              options: ["A singular value only", "An eigenvalue", "The determinant"],
              answer: "B",
              explanation: "That is the definition of eigenvalue $3$.",
            },
            {
              prompt: "$Av=\\lambda v$ rearranges to:",
              options: ["$(A-\\lambda I)v=0$", "$(A+\\lambda I)v=I$", "$A^{-1}v=\\lambda$"],
              answer: "A",
              explanation: "Bring terms to one side: $Av-\\lambda v=0$.",
            },
          ]}
        />

        <Divider />

        <section className="section" id="la-e-char">
          <div className="sec-badge">Section 4.2</div>
          <h2 className="sec-title">Characteristic polynomial — deep theory</h2>
          <TheoryBox title="p(λ) = det(A − λI)">
            <p>
              {"The characteristic polynomial $p(\\lambda)=\\det(A-\\lambda I)$ is a degree-$n$ monic polynomial (up to sign conventions on $(\\lambda I-A)$ vs $(A-\\lambda I)$ — be consistent with your course). Its roots are the eigenvalues. For each root $\\lambda$, the eigenspace is $\\mathrm{Nul}(A-\\lambda I)$."}
            </p>
            <p>
              {"Algebraic multiplicity is the root’s multiplicity in $p$. Geometric multiplicity is $\\dim\\mathrm{Nul}(A-\\lambda I)$, always at least $1$ for an eigenvalue and at most the algebraic multiplicity. The gap between them is exactly what obstructs diagonalization."}
            </p>
          </TheoryBox>
          <TheoremBox title="Multiplicities and Cayley–Hamilton">
            <p>
              {"Cayley–Hamilton says $p(A)=0$ as a matrix identity — every matrix satisfies its own characteristic equation. Practically, for $2\\times 2$ work you mainly need: factor $p$, read algebraic multiplicities, then compute geometric multiplicities by nullspaces. Trace and determinant recover the elementary symmetric data of the eigenvalues."}
            </p>
          </TheoremBox>
        </section>

        <LaMcqSection
          id="quiz-la-e-char"
          badge="Quiz 4.2"
          title="Characteristic polynomial"
          scoreId="score-la-e-char"
          section="la-e-char"
          questions={[
            {
              prompt: "Eigenvalues are roots of:",
              options: ["$\\det A$", "$\\det(A-\\lambda I)$", "Trace only"],
              answer: "B",
              explanation: "Characteristic equation $\\det(A-\\lambda I)=0$.",
            },
            {
              prompt: "Geometric multiplicity is:",
              options: ["Number of rows of $A$", "Dimension of the eigenspace", "Always equal to $n$"],
              answer: "B",
              explanation: "Geo. mult. $=\\dim\\{v:Av=\\lambda v\\}$.",
            },
            {
              prompt: "Trace of a $2\\times 2$ matrix equals:",
              options: ["Product of eigenvalues", "Sum of eigenvalues", "Determinant"],
              answer: "B",
              explanation: "Trace = sum of eigenvalues (with multiplicity).",
            },
          ]}
        />

        <Divider />
        <section className="section" id="summary1">
          <div className="sec-badge">Reference</div>
          <h2 className="sec-title">Continue</h2>
          <p>
            {"Eigenpairs capture invariant directions; the characteristic polynomial finds the stretch factors. Part 2 assembles them into diagonalization and applications."}
          </p>
          <p>
            Use the gold button: <strong>Next: Part 2 — Diagonalization</strong>.
          </p>
        </section>
      </main>
    </StudyGuideShell>
  );
}

export default EigenGuide;
