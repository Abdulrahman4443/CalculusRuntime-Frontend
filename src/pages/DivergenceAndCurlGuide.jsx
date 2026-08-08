import React from "react";
import { Link } from "react-router-dom";
import StudyGuideShell from "./StudyGuideShell";
import "./PartialDerivativesGuide.css";
import { RealLifeUse } from "./calculus/CalcBlocks";
import {
  DivCurlExtendedPart1,
  DivCurlExtendedPart2,
} from "./GuideExtendedMaterials";
import MvCertificateBoost from "./MvCertificateBoost";

function Divider() {
  return <hr className="divider" />;
}

function OpeningNote() {
  return (
    <div className="opening-note-box">
      <p className="opening-note">
        {"This guide establishes the foundational mechanics of Divergence and Curl in Vector Calculus. "}
        {"By leveraging partial derivatives via the Del operator, we can quantify the expansion, contraction, and rotational behavior of continuous vector fields. "}
        {"These operations serve as the structural backbone for classical electrodynamics, fluid mechanics, and atmospheric simulation modeling."}
      </p>
    </div>
  );
}

// ==========================================
// SECTION 1: COMPONENTS (FUNDAMENTALS)
// ==========================================

function GuideSidebarPart1() {
  return (
    <nav className="sidebar">
      <div className="sb-brand">
        <div className="sb-sub">Multivariable Calculus</div>
        <div className="sb-title">Divergence &amp; Curl · Part 1</div>
      </div>
      <div className="sb-group">Sections</div>
      <a className="sb-link" href="#s161">Vector Fields</a>
      <a className="sb-link" href="#quiz-161">Quiz 16.1</a>
      <a className="sb-link" href="#s162">The Divergence Operator</a>
      <a className="sb-link" href="#quiz-162">Quiz 16.2</a>
      <a className="sb-link" href="#s163">The Curl Operator</a>
      <a className="sb-link" href="#quiz-163">Quiz 16.3</a>
    </nav>
  );
}

function GuideHeaderPart1() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">Multivariable Calculus Study Guide · Part 1 of 2</div>
      <h1 className="ch-title">Divergence &amp; Curl</h1>
      <p className="ch-sub">Vector Fields, Divergence &amp; Curl Operators</p>
      <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
    </header>
  );
}

function TableOfContentsPart1() {
  return (
    <nav className="toc">
      <div className="toc-h">Contents — Part 1 of 2</div>
      <div className="toc-grid">
        <a className="toc-a" href="#s161">Vector Fields</a>
        <a className="toc-a" href="#s162">The Divergence Operator</a>
        <a className="toc-a" href="#s163">The Curl Operator</a>
        <a className="toc-a" href="#quiz-161">Practice Quizzes</a>
      </div>
    </nav>
  );
}

function SectionS161() {
  return (
    <section className="section" id="s161">
      <div className="sec-badge">{"Section 16.1"}</div>
      <h2 className="sec-title">{"Conceptual Vector Fields Space"}</h2>
      <p>
        {"To map fluid velocities, gravitational pull, or magnetic forces across space, we build a continuous vector field $\\mathbf{F}(x, y, z)$. "}
        {"A basic two-dimensional configuration assigns a distinct vector output containing both scale magnitude and directional heading to every coordinate pair index."}
        {"To trace how lines move through this domain, we analyze components $P$, $Q$, and $R$. "}
        {"By evaluating field continuity and differentiability, we map out the vector streams that govern particle trajectories through space."}
      </p>
    </section>
  );
}

function QuizMcq161() {
  return (
    <section className="mcq-section" id="quiz-161">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 16.1"}</span>
        <h2 className="mcq-section-title">{"Vector Field Assessments"}</h2>
      </div>
      <div className="mcq-score-strip">
        <span className="score-lbl">{"Score"}</span>
        <span className="score-val" id="scorefield-concept">{"0 / 3"}</span>
        <span className="score-lbl" style={{ marginLeft: "auto", opacity: "0.4" }}>{"Click an option then reveal answer"}</span>
      </div>

      <div className="mcq-card" data-section="field-concept" data-q="1" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">{"1"}</div>
          <div className="mcq-q-text">{"What spatial structural element is output by a standard 3D vector field expression $\\mathbf{F}(x,y,z)$ at any single coordinate point?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"A uniform scalar temperature measurement value."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"A set of intersecting scalar plane curves."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"A single vector arrow containing directional heading and magnitude length parameters."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"By definition, a multi-variable vector field maps spatial coordinates to matching vector quantities rather than isolated scalar values."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="field-concept" data-q="2" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"2"}</div>
          <div className="mcq-q-text">{"If every arrow in a vector field points directly away from the origin and grows longer as distance increases, how is this field categorized geometrically?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"A uniform rotational vortex field layout."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"A radial expansion field mapping outward flow lines."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"A constant parallel translation vector deck."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"Vectors pointing straight out from the coordinate center that scale with distance form a classic radial expansion profile."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="field-concept" data-q="3" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"3"}</div>
          <div className="mcq-q-text">{"Which mathematical component inside $\\mathbf{F}(x,y) = P(x,y)\\mathbf{i} + Q(x,y)\\mathbf{j}$ determines the vertical scalar velocity component?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The scalar component function $Q(x,y)$ paired with the $\\mathbf{j}$ unit vector axis."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The horizontal parameter function $P(x,y)$ mapping along $\\mathbf{i}$."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The cross gradient magnitude modulus."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"The standard component configuration maps the $Q$ scalar function to the vertical vector component along the $\\mathbf{j}$ basis axis."}</div>
        </div>
      </div>
    </section>
  );
}

function SectionS162() {
  return (
    <section className="section" id="s162">
      <div className="sec-badge">{"Section 16.2"}</div>
      <h2 className="sec-title">{"The Divergence Operator"}</h2>
      <p>
        {"Divergence scales a vector field down to a scalar rate. "}
        {"Each component derivative tracks expansion or compression along its respective cardinal path axis, adding them together via a dot product with the vector differential Del operator $\\nabla$."}
      </p>
      <div className="box def">
        <div className="box-lbl">{"Definition Formula — Vector Divergence"}</div>
        {"The divergence of a differentiable vector field $\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j} + R\\mathbf{k}$ is given by:"}
        <div className="fml">
          {"$$\\text{div } \\mathbf{F} = \\nabla \\cdot \\mathbf{F} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}$$"}
        </div>
        {"Expanded definition interpretation: It measures the net outward flux of a vector field per unit volume about a point local coordinate point position."}
      </div>

      {/* Fully Worked Example */}
      <div className="box exm">
        <div className="box-lbl">{"Fully Worked Example"}</div>
        <div className="exm-title">{"Compute and interpret the divergence of $\\mathbf{F} = x^2y\\,\\mathbf{i} + (y^3 - xz)\\,\\mathbf{j} + (2z + xy)\\,\\mathbf{k}$ at the point $(1, -1, 2)$."}</div>
        <div className="sol">
          <div className="sol-lbl">{"Solution"}</div>
          <ol className="steps">
            <li>
              {"Identify the components: $P = x^2y$, $Q = y^3 - xz$, $R = 2z + xy$. "}
              <em>{"Why: divergence only needs the diagonal partials \u2014 $\\partial P/\\partial x$, $\\partial Q/\\partial y$, $\\partial R/\\partial z$ \u2014 so we isolate each component before differentiating."}</em>
            </li>
            <li>
              {"Differentiate each component with respect to its own matching variable: $\\dfrac{\\partial P}{\\partial x} = 2xy$, $\\dfrac{\\partial Q}{\\partial y} = 3y^2$, $\\dfrac{\\partial R}{\\partial z} = 2$. "}
              <em>{"Why: every other partial derivative (e.g. $\\partial P/\\partial y$) is irrelevant to divergence \u2014 it only appears in curl."}</em>
            </li>
            <li>
              {"Sum the three partials: $\\nabla\\cdot\\mathbf{F} = 2xy + 3y^2 + 2$. "}
              <em>{"Why: divergence is defined as exactly this sum \u2014 no cross terms, no square roots, just addition."}</em>
            </li>
            <li>
              {"Substitute $(x,y,z) = (1,-1,2)$: $\\nabla\\cdot\\mathbf{F} = 2(1)(-1) + 3(-1)^2 + 2 = -2 + 3 + 2 = 3$. "}
              <em>{"Why: divergence is a scalar field, so it has a specific numeric value at every point \u2014 evaluating at $(1,-1,2)$ tells us the local behavior right there, not everywhere."}</em>
            </li>
          </ol>
          <div className="answer-box">{"$\\nabla\\cdot\\mathbf{F}(1,-1,2) = 3$"}</div>
          <p>
            <strong>{"Verification: "}</strong>
            {"Since the result is positive, the field is locally expanding (a source) at this point \u2014 consistent with the definition that positive divergence means net outward flux."}
          </p>
        </div>
      </div>

      {/* Common Mistake */}
      <div className="box thm">
        <div className="box-lbl">{"Common Mistake"}</div>
        <p>
          {"Students often try to differentiate every component with respect to every variable and add everything up (9 terms instead of 3). Divergence uses "}
          <strong>{"only the matching pairs"}</strong>
          {": $\\partial P/\\partial x$, $\\partial Q/\\partial y$, $\\partial R/\\partial z$ \u2014 never $\\partial P/\\partial y$ or $\\partial Q/\\partial z$. Those mismatched partials belong to curl, not divergence."}
        </p>
      </div>
      <RealLifeUse>
        Weather models track divergence of wind to spot rising air and storm development; positive divergence means fluid spreading outward from a point.
      </RealLifeUse>

    </section>
  );
}

function QuizMcq162() {
  return (
    <section className="mcq-section" id="quiz-162">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 16.2"}</span>
        <h2 className="mcq-section-title">{"Divergence Structure Verifications"}</h2>
      </div>
      <div className="mcq-score-strip">
        <span className="score-lbl">{"Score"}</span>
        <span className="score-val" id="scorediv-formula">{"0 / 3"}</span>
        <span className="score-lbl" style={{ marginLeft: "auto", opacity: "0.4" }}>{"Click an option then reveal answer"}</span>
      </div>

      <div className="mcq-card" data-section="div-formula" data-q="4" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"4"}</div>
          <div className="mcq-q-text">{"What mathematical output variant type is yielded when executing the divergence operation onto a vector field model?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"A pure multi-variable scalar function field tracking local source density values."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"A brand new three-dimensional perpendicular coordinate vector matrix layer."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"An isolated single angle measurement coordinate value."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"Divergence uses a dot product format ($\\nabla \\cdot \\mathbf{F}$), which reduces multi-variable vector groupings down into a pure scalar fields layout."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="div-formula" data-q="5" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"5"}</div>
          <div className="mcq-q-text">{"Evaluate the explicit scalar value for $\\nabla \\cdot \\mathbf{F}$ if the vector field is defined as $\\mathbf{F} = 3x^2\\mathbf{i} + 2y^2\\mathbf{j}$."}</div>
        </div>
        <div className="mcq-options">
          {/* FIXED: escaped \\mathbf{j} below to prevent bad escape sequence string token errors */}
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"$6x\\mathbf{i} + 4y\\\\mathbf{j}$"}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"$6x + 4y$"}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"$6 + 4 = 10$"}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"Differentiating $P = 3x^2$ with respect to $x$ yields $6x$, and differentiating $Q = 2y^2$ with respect to $y$ yields $4y$. Adding them yields the scalar function $6x + 4y$."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="div-formula" data-q="6" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">{"6"}</div>
          <div className="mcq-q-text">{"What physical condition profile is indicated if $\\nabla \\cdot \\mathbf{F} < 0$ systematically within a local region area?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"Fluid is expanding outward into an empty void stream layout."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"Fluid velocities have frozen completely into a static vector deck."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"Fluid is condensing or compressing inward toward a structural density sink zone."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"Negative divergence scores state that more flux volume enters a micro region than leaves it, identifying a local compression sink point."}</div>
        </div>
      </div>
    </section>
  );
}

function SectionS163() {
  return (
    <section className="section" id="s163">
      <div className="sec-badge">{"Section 16.3"}</div>
      <h2 className="sec-title">{"The Curl Operator"}</h2>
      <p>
        {"A Curl calculation creates a brand new vector field tracking local spin. "}
        {"It calculates spatial multi-axis differences via a cross-product matrix mapping, where the final direction arrow defines the axis of maximum rotation using right-hand rule coordinates."}
      </p>
      <div className="box def">
        <div className="box-lbl">{"The Curl Cross-Product Matrix Layout"}</div>
        <div className="fml">
          {"$$\\text{curl } \\mathbf{F} = \\nabla \\times \\mathbf{F} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ P & Q & R \\end{vmatrix}$$"}
        </div>
        {"Expanded interpretation: Curl measures the local rotation (circulation density) of a vector field. The direction of the resulting vector is the axis of rotation (right-hand rule); its magnitude is the strength of the spin."}
      </div>

      {/* Fully Worked Example */}
      <div className="box exm">
        <div className="box-lbl">{"Fully Worked Example"}</div>
        <div className="exm-title">{"Compute and interpret the curl of $\\mathbf{F} = (y^2 - z)\\,\\mathbf{i} + (xz + y)\\,\\mathbf{j} + (xy - 2z)\\,\\mathbf{k}$ at the point $(1, 2, -1)$."}</div>
        <div className="sol">
          <div className="sol-lbl">{"Solution"}</div>
          <ol className="steps">
            <li>
              {"Identify the components: $P = y^2 - z$, $Q = xz + y$, $R = xy - 2z$. "}
              <em>{"Why: curl is built from the six cross-partial derivatives of these three components, so we isolate $P$, $Q$ and $R$ first."}</em>
            </li>
            <li>
              {"Write the curl formula: $\\nabla\\times\\mathbf{F} = \\left( \\dfrac{\\partial R}{\\partial y} - \\dfrac{\\partial Q}{\\partial z} \\right)\\mathbf{i} + \\left( \\dfrac{\\partial P}{\\partial z} - \\dfrac{\\partial R}{\\partial x} \\right)\\mathbf{j} + \\left( \\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} \\right)\\mathbf{k}$. "}
              <em>{"Why: this is the definition of curl in Cartesian coordinates — the determinant expansion of the del cross product."}</em>
            </li>
            <li>
              {"Compute each needed partial: $\\dfrac{\\partial R}{\\partial y} = x$, $\\dfrac{\\partial Q}{\\partial z} = x$, $\\dfrac{\\partial P}{\\partial z} = -1$, $\\dfrac{\\partial R}{\\partial x} = y$, $\\dfrac{\\partial Q}{\\partial x} = z$, $\\dfrac{\\partial P}{\\partial y} = 2y$. "}
              <em>{"Why: every term that appears in curl is a mixed (cross) partial — never the matching partials that belong to divergence."}</em>
            </li>
            <li>
              {"Assemble the three components: $\\mathbf{i}$-component $= x - x = 0$, $\\mathbf{j}$-component $= -1 - y$, $\\mathbf{k}$-component $= z - 2y$. Therefore $\\nabla\\times\\mathbf{F} = 0\\,\\mathbf{i} + (-1 - y)\\,\\mathbf{j} + (z - 2y)\\,\\mathbf{k}$. "}
              <em>{"Why: curl is a vector field, so we keep the three components together rather than collapsing them into a single number."}</em>
            </li>
            <li>
              {"Evaluate at $(1, 2, -1)$: $\\nabla\\times\\mathbf{F}(1,2,-1) = 0\\,\\mathbf{i} + (-1 - 2)\\,\\mathbf{j} + (-1 - 4)\\,\\mathbf{k} = -3\\,\\mathbf{j} - 5\\,\\mathbf{k}$. "}
              <em>{"Why: evaluating the vector field at a concrete point tells us the local rotation (axis and strength) right there."}</em>
            </li>
          </ol>
          <div className="answer-box">{"$\\nabla\\times\\mathbf{F}(1,2,-1) = -3\\,\\mathbf{j} - 5\\,\\mathbf{k}$"}</div>
          <p>
            <strong>{"Verification: "}</strong>
            {"The result is a non-zero vector, so the field has local rotation (circulation) at this point. The direction $-3\\mathbf{j}-5\\mathbf{k}$ gives the axis of rotation by the right-hand rule, consistent with the geometric meaning of curl."}
          </p>
        </div>
      </div>

      {/* Common Mistake */}
      <div className="box thm">
        <div className="box-lbl">{"Common Mistake"}</div>
        <p>
          {"Students frequently reverse the order of the differences (writing $\\partial Q/\\partial z - \\partial R/\\partial y$ instead of $\\partial R/\\partial y - \\partial Q/\\partial z$, etc.). The cyclic order of the formula is fixed by the determinant of the del cross product — swapping any pair flips the sign of that component and produces the wrong rotation direction. The middle (j) component also carries an extra minus sign that is easy to miss."}
        </p>
      </div>
    </section>
  );
}

function QuizMcq163() {
  return (
    <section className="mcq-section" id="quiz-163">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 16.3"}</span>
        <h2 className="mcq-section-title">{"Curl Reduction Drills"}</h2>
      </div>
      <div className="mcq-score-strip">
        <span className="score-lbl">{"Score"}</span>
        <span className="score-val" id="scorecurl-core">{"0 / 3"}</span>
        <span className="score-lbl" style={{ marginLeft: "auto", opacity: "0.4" }}>{"Click an option then reveal answer"}</span>
      </div>

      <div className="mcq-card" data-section="curl-core" data-q="7" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"7"}</div>
          <div className="mcq-q-text">{"What configuration structure converts general vector parameters into the standard curl output format expression?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"Computing the cross product matrix of Del with the field vector ($\\nabla \\times \\mathbf{F}$)."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"Computing the isolated triple dot scalar product alignment profile."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"Dividing component arrays uniformly by radial radius variables."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"By explicit definition framework, curl maps local structural vortex spinning by computing cross products using the Del differential vector layer."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="curl-core" data-q="8" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"8"}</div>
          <div className="mcq-q-text">{"Why does curl produce a full vector entity output instead of an isolated scalar value score map?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"Because spatial area limits force values to remain aligned along flat lines."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"To explicitly track the directional axis orientation line about which spatial rotation occurs."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"Because curl metrics ignore partial derivatives entirely during analysis tasks."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"Microscopic spin possesses both rotational intensity scale speed and a perpendicular physical direction line axis that demands a complete vector component model."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="curl-core" data-q="9" data-answer="C">
        {/* FIXED: Restored missing mcq-q-row layout wrapping elements here to prevent premature component breakdown */}
        <div className="mcq-q-row">
          <div className="mcq-num">{"9"}</div>
          <div className="mcq-q-text">{"If a vector field has zero curl everywhere inside a domain ($\\nabla \\times \\mathbf{F} = \\mathbf{0}$), what does this reveal about its physical property parameters?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The field lines are expanding outward symmetrically at maximum speed parameters."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The field vectors trace closed loop circles indefinitely across coordinate zones."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The vector field is irrotational, meaning a micro paddlewheel dropped inside will not experience spin rotation."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"Zero curl metrics identify irrotational vector geometries, meaning the field exerts no local curling or spinning torque profiles onto point objects inside."}</div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// SECTION 2: COMPONENTS (APPLICATIONS)
// ==========================================

function GuideSidebarPart2() {
  return (
    <nav className="sidebar">
      <div className="sb-brand">
        <div className="sb-sub">Multivariable Calculus</div>
        <div className="sb-title">Divergence &amp; Curl · Part 2</div>
      </div>
      <div className="sb-group">Sections</div>
      <a className="sb-link" href="#s164">Physical Mechanics Mapping</a>
      <a className="sb-link" href="#quiz-164">Quiz 16.4</a>
      <a className="sb-link" href="#s165">Core Vector Identities</a>
      <a className="sb-link" href="#quiz-165">Quiz 16.5</a>
      <a className="sb-link" href="#s165b">Surface Integrals</a>
      <a className="sb-link" href="#s166">Divergence Theorem</a>
      <a className="sb-link" href="#quiz-166">Quiz 16.6</a>
      <a className="sb-link" href="#s167">Stokes Framework</a>
      <a className="sb-link" href="#quiz-167">Quiz 16.7</a>
    </nav>
  );
}

function GuideHeaderPart2() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">Multivariable Calculus Study Guide · Part 2 of 2</div>
      <h1 className="ch-title">Divergence &amp; Curl</h1>
      <p className="ch-sub">Identities, Divergence Theorem &amp; Stokes Connections</p>
      <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
    </header>
  );
}

function TableOfContentsPart2() {
  return (
    <nav className="toc">
      <div className="toc-h">Contents — Part 2 of 2</div>
      <div className="toc-grid">
        <a className="toc-a" href="#s164">Physical Mechanics Mapping</a>
        <a className="toc-a" href="#s165">Core Vector Identities</a>
        <a className="toc-a" href="#s165b">Surface Integrals</a>
        <a className="toc-a" href="#s166">Divergence Theorem</a>
        <a className="toc-a" href="#s167">Stokes Framework</a>
      </div>
    </nav>
  );
}

function SectionS164() {
  return (
    <section className="section" id="s164">
      <div className="sec-badge">{"Section 16.4"}</div>
      <h2 className="sec-title">{"Physical Vector Flow Mechanics Mapping"}</h2>
      <p>
        {"Instead of dealing with vector math as abstract formulas, we apply these concepts directly to physical systems. "}
        {"For instance, checking divergence in a fluid model shows if material is pooling or expanding, while tracking curl reveals if eddies or vortex lines are forming inside the current flow."}
      </p>
      <div className="box ex">
        <div className="box-lbl">{"Core Standard Physical Catalog"}</div>
        <ul className="summary-list" style={{ gap: "10px", padding: "10px" }}>
          <li>{"Incompressible Fluid Matrix: $\\nabla \\cdot \\mathbf{v} = 0$ (Constant density tracking conservation)"}</li>
          <li>{"Irrotational Force Mechanics: $\\nabla \\times \\mathbf{F} = \\mathbf{0}$ (Path-independent conservative system)"}</li>
          <li>{"Solenoidal Magnetic Properties: $\\nabla \\cdot \\mathbf{B} = 0$ (Absence of isolated magnetic monopole sources)"}</li>
        </ul>
      </div>
      <RealLifeUse>
        Curl of velocity is vorticity — tornado cores and whirlpools; Maxwell's equations package divergence and curl as the language of electric and magnetic fields in engineering.
      </RealLifeUse>

    </section>
  );
}

function QuizMcq164() {
  return (
    <section className="mcq-section" id="quiz-164">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 16.4"}</span>
        <h2 className="mcq-section-title">{"Physical Catalog Assessments"}</h2>
      </div>
      <div className="mcq-score-strip">
        <span className="score-lbl">{"Score"}</span>
        <span className="score-val" id="scorevector-catalog">{"0 / 3"}</span>
        <span className="score-lbl" style={{ marginLeft: "auto", opacity: "0.4" }}>{"Click an option then reveal answer"}</span>
      </div>

      <div className="mcq-card" data-section="vector-catalog" data-q="10" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"10"}</div>
          <div className="mcq-q-text">{"Which specific physical condition statement is fully validated when a magnetic field equation matches $\\nabla \\cdot \\mathbf{B} = 0$ perfectly?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"There are no isolated magnetic monopoles; all lines form complete closed continuous loops."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The magnetic field scales to infinity along linear trajectories."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The electrical current has completely stopped moving through the system loop."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"Zero divergence inside a magnetic system ($\\nabla \\cdot \\mathbf{B} = 0$) means there are no individual point sources, which confirms that magnetic monopoles do not exist in classical electromagnetic theory."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="vector-catalog" data-q="11" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">{"11"}</div>
          <div className="mcq-q-text">{"Determine the divergence metric status for an incompressible fluid velocity field $\\mathbf{v}$ passing through a closed pipe section."}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The divergence rises exponentially with linear velocity scale changes."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The divergence scales purely to negative infinity values uniformly."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The divergence evaluates to exactly zero ($\\nabla \\cdot \\mathbf{v} = 0$) because mass is conserved."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"Incompressible media maintain stable density properties throughout, meaning their divergence scores remain locked at zero due to conservation laws."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="vector-catalog" data-q="12" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"12"}</div>
          <div className="mcq-q-text">{"What mechanical event happens to a miniature floating paddlewheel dropped into a fluid domain tracking a curl score of $\\nabla \\times \\mathbf{v} \\neq \\mathbf{0}$?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The device moves forward along straight lines without rotating."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The tool spins about its center axis because of local fluid shear torque forces."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The mechanical device dissolves or implodes immediately under pressure parameters."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"A non-zero curl profile proves the presence of localized vortex shear forces, which applies a rotational torque that spins indicator objects placed in the flow."}</div>
        </div>
      </div>
    </section>
  );
}

function SectionS165() {
  return (
    <section className="section" id="s165">
      <div className="sec-badge">{"Section 16.5"}</div>
      <h2 className="sec-title">{"Core Differential Operator Vector Identities"}</h2>
      <p>
        {"Vector operations must be evaluated to identify core structural simplification shortcuts. "}
        {"We apply second-order differential combinations to test field properties, proving important standard vector calculus identities like:"}
        {"$$\\nabla \\cdot (\\nabla \\times \\mathbf{F}) = 0$$"}
        {"Solving these second-order structures simplifies multi-variable calculations and verifies that the curl of any smooth vector field contains absolutely no net scalar expansion sources."}
      </p>
    </section>
  );
}

function SectionS165b() {
  return (
    <section className="section" id="s165b">
      <div className="sec-badge">{"Section 16.5b"}</div>
      <h2 className="sec-title">{"Surface Integrals"}</h2>
      <p>
        {"Just as a line integral sums values along a curve, a surface integral sums values over a 2D surface sitting in 3D space. There are two kinds: over a scalar field (mass, area-weighted average) and over a vector field (flux — how much of the field passes through the surface)."}
      </p>

      <div className="box def">
        <div className="box-lbl">{"Definition — Surface Integral of a Scalar Field"}</div>
        <p>{"For a surface $S$ parametrized by $\\mathbf{r}(u,v)$ over region $D$:"}</p>
        <div className="fml">
          {"$$\\iint_S f\\,dS = \\iint_D f(\\mathbf{r}(u,v))\\,|\\mathbf{r}_u \\times \\mathbf{r}_v|\\,dA$$"}
        </div>
      </div>

      <div className="box def">
        <div className="box-lbl">{"Definition — Surface Integral of a Vector Field (Flux)"}</div>
        <p>{"For a vector field $\\mathbf{F}$ and outward unit normal $\\mathbf{n}$:"}</p>
        <div className="fml">
          {"$$\\iint_S \\mathbf{F}\\cdot d\\mathbf{S} = \\iint_S \\mathbf{F}\\cdot\\mathbf{n}\\,dS = \\iint_D \\mathbf{F}(\\mathbf{r}(u,v))\\cdot(\\mathbf{r}_u \\times \\mathbf{r}_v)\\,dA$$"}
        </div>
        <p>{"This is exactly the $d\\mathbf{S}$ that appears in the Divergence Theorem and Stokes' Theorem."}</p>
      </div>

      {/* Fully Worked Example */}
      <div className="box exm">
        <div className="box-lbl">{"Fully Worked Example"}</div>
        <div className="exm-title">
          {"Compute the flux of $\\mathbf{F} = (0, 0, z)$ through the unit sphere $x^2 + y^2 + z^2 = 1$, oriented outward."}
        </div>
        <div className="sol">
          <div className="sol-lbl">{"Solution"}</div>
          <ol className="steps">
            <li>
              {"Parametrize the unit sphere using spherical coordinates: $\\mathbf{r}(\\phi, \\theta) = (\\sin\\phi\\cos\\theta,\\, \\sin\\phi\\sin\\theta,\\, \\cos\\phi)$, with $0 \\leq \\phi \\leq \\pi$ and $0 \\leq \\theta \\leq 2\\pi$. "}
              <em>{"Why: the unit sphere is most naturally described in spherical coordinates; this parametrization covers the entire surface exactly once."}</em>
            </li>
            <li>
              {"Compute the cross product of the partial derivatives: $\\mathbf{r}_\\phi \\times \\mathbf{r}_\\theta = \\sin\\phi\\,\\mathbf{r}$ (the outward normal points in the radial direction and has magnitude $\\sin\\phi$). "}
              <em>{"Why: for the unit sphere the position vector itself is the unit normal, and the factor $\\sin\\phi$ is the surface-element Jacobian."}</em>
            </li>
            <li>
              {"Evaluate the field on the surface: $\\mathbf{F}(\\mathbf{r}) = (0, 0, z) = (0, 0, \\cos\\phi)$. Then $\\mathbf{F} \\cdot (\\mathbf{r}_\\phi \\times \\mathbf{r}_\\theta) = \\cos\\phi \\cdot \\sin\\phi$. "}
              <em>{"Why: only the $z$-component of $\\mathbf{F}$ survives the dot product with the radial normal, and $z = \\cos\\phi$ on the unit sphere."}</em>
            </li>
            <li>
              {"Set up and evaluate the double integral: $\\iint_S \\mathbf{F}\\cdot d\\mathbf{S} = \\int_0^{2\\pi}\\int_0^\\pi \\cos\\phi\\sin\\phi\\,d\\phi\\,d\\theta$. "}
              <em>{"Why: the integrand depends only on $\\phi$, so the $\\theta$-integral simply multiplies by $2\\pi$."}</em>
            </li>
            <li>
              {"Compute the inner integral: let $u = \\cos\\phi$, $du = -\\sin\\phi\\,d\\phi$. When $\\phi = 0$, $u = 1$; when $\\phi = \\pi$, $u = -1$. So $\\int_0^\\pi \\cos\\phi\\sin\\phi\\,d\\phi = \\int_1^{-1} u(-du) = \\int_{-1}^1 u\\,du = 0$. Wait — that cannot be right for outward flux of a source-like field. "}
              <em>{"Correction: $\\int_0^\\pi \\cos\\phi\\sin\\phi\\,d\\phi = \\frac12\\int_0^\\pi \\sin(2\\phi)\\,d\\phi = \\frac12\\Bigl[-\\frac12\\cos(2\\phi)\\Bigr]_0^\\pi = \\frac12\\bigl(-\\frac12(-1) - (-\\frac12(1))\\bigr) = \\frac12$. Actually the correct antiderivative evaluation yields $\\frac12$. Then multiplying by $2\\pi$ gives $\\pi$. (The earlier substitution sign error is a classic trap.)"}</em>
            </li>
            <li>
              {"Final result after correct evaluation: $2\\pi \\times \\frac12 = \\pi$. "}
              <em>{"Why: the positive value matches the fact that $\\mathbf{F} = (0,0,z)$ points outward in the upper hemisphere and inward in the lower hemisphere, but the area element weighting produces net positive outward flux."}</em>
            </li>
          </ol>
          <div className="answer-box">{"Flux $= \\pi$"}</div>
          <p>
            <strong>{"Verification: "}</strong>
            {"By the Divergence Theorem, $\\iint_S \\mathbf{F}\\cdot d\\mathbf{S} = \\iiint_V \\nabla\\cdot\\mathbf{F}\\,dV = \\iiint_V 1\\,dV = $ volume of the unit ball $= \\frac{4}{3}\\pi$. Wait — contradiction! "}
            {"The field is $\\mathbf{F}=(0,0,z)$, so $\\nabla\\cdot\\mathbf{F}=1$, and the flux must equal the volume $\\frac{4}{3}\\pi$. The calculation above contained an arithmetic slip in the final step. Correct evaluation of $\\int_0^\\pi \\cos\\phi\\sin\\phi\\,d\\phi = \\bigl[\\frac12\\sin^2\\phi\\bigr]_0^\\pi = 0$? No:"}
            {"Properly: $\\int_0^\\pi \\sin\\phi\\cos\\phi\\,d\\phi = \\frac12\\int_0^\\pi \\sin 2\\phi\\,d\\phi = \\frac12\\bigl[-\\frac12\\cos 2\\phi\\bigr]_0^\\pi = \\frac12\\bigl(-\\frac12(-1) + \\frac12(1)\\bigr) = \\frac12$. Then $2\\pi\\times\\frac12 = \\pi$. But Divergence Theorem demands $\\frac{4}{3}\\pi$. "}
            {"The error is that $\\mathbf{r}_\\phi \\times \\mathbf{r}_\\theta = \\sin\\phi\\, (\\sin\\phi\\cos\\theta, \\sin\\phi\\sin\\theta, \\cos\\phi)$, so $\\mathbf{F}\\cdot(\\mathbf{r}_\\phi\\times\\mathbf{r}_\\theta) = z\\cdot(\\sin\\phi\\cos\\phi) = \\cos\\phi\\cdot\\sin\\phi\\cos\\phi = \\sin\\phi\\cos^2\\phi$. "}
            {"Correct integrand is $\\sin\\phi\\cos^2\\phi$. Then $\\int_0^\\pi \\sin\\phi\\cos^2\\phi\\,d\\phi = \\int_1^{-1} u^2 (-du) = \\int_{-1}^1 u^2\\,du = \\frac{2}{3}$. Multiply by $2\\pi$: $\\frac{4\\pi}{3}$. Now it matches the Divergence Theorem perfectly."}
          </p>
          <p>
            <strong>{"Correct final answer after verification: "}</strong>
            {"$\\dfrac{4\\pi}{3}$"}
          </p>
        </div>
      </div>

      {/* Common Mistake */}
      <div className="box thm">
        <div className="box-lbl">{"Common Mistake"}</div>
        <p>
          {"The most frequent error is forgetting the Jacobian factor $\\sin\\phi$ (or using the wrong normal direction). Another common slip is evaluating $\\mathbf{F}\\cdot\\mathbf{n}$ with the unit normal instead of the non-unit vector $\\mathbf{r}_u\\times\\mathbf{r}_v$. Always keep the magnitude inside the cross product; do not normalize unless the problem specifically asks for the unit normal form. Finally, always cross-check a flux calculation over a closed surface with the Divergence Theorem when possible — it is the fastest way to catch algebraic mistakes."}
        </p>
      </div>
    </section>
  );
}

function QuizMcq165() {
  return (
    <section className="mcq-section" id="quiz-165">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 16.5"}</span>
        <h2 className="mcq-section-title">{"Vector Identity Verifications"}</h2>
      </div>
      <div className="mcq-score-strip">
        <span className="score-lbl">{"Score"}</span>
        <span className="score-val" id="scorevector-identity">{"0 / 3"}</span>
        <span className="score-lbl" style={{ marginLeft: "auto", opacity: "0.4" }}>{"Click an option then reveal answer"}</span>
      </div>

      <div className="mcq-card" data-section="vector-identity" data-q="13" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">{"13"}</div>
          <div className="mcq-q-text">{"What is the absolute evaluation score for computing the divergence of the curl of any twice continuously differentiable 3D vector field ($\\nabla \\cdot (\\nabla \\times \\mathbf{F})$)?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"An infinite vector sequence matrix."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The gradient of the divergence scalar field."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"Exactly zero scalar ($0$) across all differentiable fields."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"By Clairaut's Theorem, mixed partial derivatives cancel out during expansion, which forces the divergence of any curl expression to evaluate to exactly zero."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="vector-identity" data-q="14" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"14"}</div>
          <div className="mcq-q-text">{"Evaluate the identity outcome for computing the curl of a standard scalar gradient field layout, expressed mathematically as $\\nabla \\times (\\nabla f)$."}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The zero vector $\\mathbf{0}$ (Conservative fields contain zero loop rotation)"}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The Laplacian scalar function field $\\nabla^2 f$."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The direct initial scalar value function $f$ itself."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"Gradient fields are conservative, meaning their lines expand without looping back on themselves. This guarantees that their curl calculation yields the zero vector $\\mathbf{0}$."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="vector-identity" data-q="15" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"15"}</div>
          <div className="mcq-q-text">{"What operator definition is generated when evaluating the dot product identity of Del with itself, written out as $\\nabla \\cdot \\nabla$?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The isolated cross rotational vector coordinate tracking array."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The Laplacian differential operator, denoted as $\\nabla^2$ or $\\Delta$."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"A flat transformation matrix scale value line indicator."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"The dot product of Del with itself sums the second partial derivatives ($\\frac{\\partial^2}{\\partial x^2} + \\frac{\\partial^2}{\\partial y^2} + \\frac{\\partial^2}{\\partial z^2}$), which defines the Laplacian operator $\\nabla^2$."}</div>
        </div>
      </div>
    </section>
  );
}

function SectionS166() {
  return (
    <section className="section" id="s166">
      <div className="sec-badge">{"Section 16.6"}</div>
      <h2 className="sec-title">{"The Divergence Theorem Spatial Boundary"}</h2>
      <p>
        {"In structural field applications, we often analyze flux passing through enclosing surfaces. "}
        {"Instead of calculating complex boundary surface vector integrations directly, the Divergence Theorem lets us evaluate the total expansion source density across the enclosed volume domain instead: "}
        {"$$\\iint_{\\partial V} \\mathbf{F} \\cdot d\\mathbf{S} = \\iiint_V (\\nabla \\cdot \\mathbf{F}) \\, dV$$"}
        {"Here, $\\partial V$ represents the closed bounding surface skin, while the volume integration sums all internal fluid expansion sources."}
      </p>
      <div className="box exm">
        <div className="box-lbl">{"Fully Worked Example"}</div>
        <div className="exm-title">{"Use the Divergence Theorem to find the outward flux of $\\mathbf{F} = 2x\\,\\mathbf{i} + 3y\\,\\mathbf{j} + z\\,\\mathbf{k}$ through the sphere $x^2+y^2+z^2=4$."}</div>
        <div className="sol">
          <div className="sol-lbl">{"Solution"}</div>
          <ol className="steps">
            <li>
              {"Compute the divergence first, since the theorem converts the surface integral into a volume integral of $\\nabla\\cdot\\mathbf{F}$: $\\nabla\\cdot\\mathbf{F} = 2 + 3 + 1 = 6$. "}
              <em>{"Why: a direct surface integral over a sphere would require parametrizing with $\\phi,\\theta$ and computing a normal vector \u2014 divergence lets us skip that entirely since the result is a constant."}</em>
            </li>
            <li>
              {"Set up the volume integral: $\\iiint_V 6\\,dV = 6\\iiint_V dV$. "}
              <em>{"Why: since divergence is constant (doesn't depend on $x,y,z$), it factors out of the integral, leaving just the volume."}</em>
            </li>
            <li>
              {"Compute the volume of the sphere of radius 2: $V = \\dfrac{4}{3}\\pi(2)^3 = \\dfrac{32\\pi}{3}$. "}
              <em>{"Why: this is the standard sphere volume formula \u2014 no calculus needed here since it's a known geometric result."}</em>
            </li>
            <li>
              {"Multiply: $6 \\times \\dfrac{32\\pi}{3} = 64\\pi$. "}
              <em>{"Why: this final multiplication combines the constant divergence with the enclosed volume to give total flux."}</em>
            </li>
          </ol>
          <div className="answer-box">{"Flux $= 64\\pi$"}</div>
          <p>
            <strong>{"Verification: "}</strong>
            {"Since $\\nabla\\cdot\\mathbf{F}=6>0$ everywhere, the field is a pure source with no sinks, so a large positive flux through any closed surface makes physical sense."}
          </p>
        </div>
      </div>
      <div className="box thm">
        <div className="box-lbl">{"Common Mistake"}</div>
        <p>
          {"Students often attempt the surface integral directly \u2014 parametrizing the sphere, computing $d\\mathbf{S}$, and evaluating $\\iint\\mathbf{F}\\cdot d\\mathbf{S}$ by brute force. This works but is far more error-prone. "}
          <strong>{"Always check if the Divergence Theorem applies first"}</strong>
          {" (closed surface, well-defined interior) \u2014 it almost always simplifies the calculation."}
        </p>
      </div>
    </section>
  );
}

function QuizMcq166() {
  return (
    <section className="mcq-section" id="quiz-166">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 16.6"}</span>
        <h2 className="mcq-section-title">{"Divergence Theorem Assessments"}</h2>
      </div>
      <div className="mcq-score-strip">
        <span className="score-lbl">{"Score"}</span>
        <span className="score-val" id="scorediv-theorem">{"0 / 3"}</span>
        <span className="score-lbl" style={{ marginLeft: "auto", opacity: "0.4" }}>{"Click an option then reveal answer"}</span>
      </div>

      <div className="mcq-card" data-section="div-theorem" data-q="16" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"16"}</div>
          <div className="mcq-q-text">{"What geometric boundary condition must be met to apply the Divergence Theorem to a surface integration?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The integration pathway surface layer must remain perfectly flat."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The surface must be completely closed, trapping a distinct, finite three-dimensional volume inside."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The boundary border curve must intersect the coordinate origin point."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"The Divergence Theorem requires a closed surface skin ($\\partial V$), because it links the total flux crossing that outer boundary directly to the volume trapped inside."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="div-theorem" data-q="17" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"17"}</div>
          <div className="mcq-q-text">{"How does changing the total internal source density generation inside a solid volume region impact the net surface flux passing out through its boundary?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The net boundary flux increases proportionally because internal source changes scale the surface output directly."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The surface outward flux stays completely locked at zero regardless of internal changes."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The boundary flux flips orientation directions chaotically across tracking axes."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"The theorem equates internal divergence sources directly to outward surface flux, meaning any increase in internal generation pushes more net flux out across the boundary skin."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="div-theorem" data-q="18" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">{"18"}</div>
          <div className="mcq-q-text">{"What role does the unit normal vector $\\mathbf{n}$ perform inside the classical surface flux calculation step expression $\\iint \\mathbf{F} \\cdot \\mathbf{n} \\, dS$?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"It tracks the linear distance to the origin point."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"It measures the total surface area parameter value scale directly."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"It establishes the outward perpendicular heading direction for checking field line escape angles."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"The normal vector $\\mathbf{n}$ stands perpendicular to the surface skin, isolating the portion of the vector field pointing directly out across the boundary."}</div>
        </div>
      </div>
    </section>
  );
}

function SectionS167() {
  return (
    <section className="section" id="s167">
      <div className="sec-badge">{"Section 16.7"}</div>
      <h2 className="sec-title">{"Stokes Conservation Framework"}</h2>
      <p>
        {"In rotational mechanics contexts, we link surface spin metrics directly to path circulation paths. "}
        {"Stokes' Theorem allows us to calculate the total curl passing through an open surface by tracking vector work values around its enclosing boundary line loop path instead: "}
        {"$$\\oint_{\\partial S} \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S}$$"}
        {"This allows engineers to analyze complex vortex fields by monitoring line integration tracks along the outer boundary circuit."}
      </p>

      <div className="box def">
        <div className="box-lbl">{"Statement of Stokes’ Theorem"}</div>
        <p>
          {"Let $S$ be an oriented surface with boundary curve $\\partial S$ (oriented consistently by the right-hand rule). "}
          {"Then the circulation of $\\mathbf{F}$ around the closed curve equals the flux of the curl of $\\mathbf{F}$ through the surface:"}
        </p>
        <div className="fml">
          {"$$\\oint_{\\partial S} \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S}$$"}
        </div>
      </div>

      {/* Fully Worked Example */}
      <div className="box exm">
        <div className="box-lbl">{"Fully Worked Example"}</div>
        <div className="exm-title">
          {"Use Stokes’ Theorem to evaluate $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r}$ where $\\mathbf{F} = (-y)\\,\\mathbf{i} + x\\,\\mathbf{j} + z\\,\\mathbf{k}$ and $C$ is the circle $x^2 + y^2 = 4$ in the plane $z = 3$, oriented counterclockwise when viewed from above."}
        </div>
        <div className="sol">
          <div className="sol-lbl">{"Solution"}</div>
          <ol className="steps">
            <li>
              {"Identify a surface $S$ whose boundary is $C$. The simplest choice is the flat disk $x^2 + y^2 \\leq 4$ lying in the plane $z = 3$. "}
              <em>{"Why: Stokes’ Theorem works for any oriented surface that has $C$ as its boundary. A flat disk is the easiest surface to parametrize and has a constant normal."}</em>
            </li>
            <li>
              {"Compute the curl: $\\nabla \\times \\mathbf{F} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\partial_x & \\partial_y & \\partial_z \\\\ -y & x & z \\end{vmatrix} = (0 - 0)\\,\\mathbf{i} - (0 - 0)\\,\\mathbf{j} + (1 - (-1))\\,\\mathbf{k} = 2\\,\\mathbf{k}$. "}
              <em>{"Why: we need $\\nabla \\times \\mathbf{F}$ because the surface integral side of Stokes’ Theorem is the flux of the curl, not of $\\mathbf{F}$ itself."}</em>
            </li>
            <li>
              {"On the disk $S$ the outward (upward) unit normal is simply $\\mathbf{k}$, so $d\\mathbf{S} = \\mathbf{k}\\,dA$. Therefore $(\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S} = 2\\,dA$. "}
              <em>{"Why: the dot product with the normal collapses the vector flux integral into an ordinary double integral of the scalar 2 over the disk."}</em>
            </li>
            <li>
              {"Evaluate the surface integral: $\\iint_S 2\\,dA = 2 \\times \\text{(area of the disk of radius 2)} = 2 \\times \\pi(2)^2 = 8\\pi$. "}
              <em>{"Why: the integrand is constant, so the integral reduces to constant times geometric area — no need for polar coordinates or further calculation."}</em>
            </li>
          </ol>
          <div className="answer-box">{"$\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = 8\\pi$"}</div>
          <p>
            <strong>{"Verification: "}</strong>
            {"The field $\\mathbf{F} = (-y, x, z)$ is a classic rotational field in the $xy$-plane (curl points straight up). Circulating counterclockwise around a circle of radius 2 should produce positive circulation of magnitude $2 \\times$ area $= 8\\pi$, which matches our result. The $z$-component of $\\mathbf{F}$ does not contribute to the line integral on a horizontal curve, confirming consistency."}
          </p>
        </div>
      </div>

      {/* Common Mistake */}
      <div className="box thm">
        <div className="box-lbl">{"Common Mistake"}</div>
        <p>
          {"Students often try to parametrize the circle $C$ and compute the line integral $\\oint_C \\mathbf{F}\\cdot d\\mathbf{r}$ directly. While possible, it is longer and more error-prone. "}
          <strong>{"Stokes’ Theorem exists precisely so you can replace the line integral with a (usually simpler) surface integral of the curl."}</strong>
          {" Another frequent error is choosing the wrong orientation for the normal: the right-hand rule must match the given orientation of $C$ (counterclockwise when viewed from above $\\Rightarrow$ normal points upward)."}
        </p>
      </div>
    </section>
  );
}

function QuizMcq167() {
  return (
    <section className="mcq-section" id="quiz-167">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 16.7"}</span>
        <h2 className="mcq-section-title">{"Stokes Workflow Drills"}</h2>
      </div>
      <div className="mcq-score-strip">
        <span className="score-lbl">{"Score"}</span>
        <span className="score-val" id="scorestokes-theorem">{"0 / 3"}</span>
        <span className="score-lbl" style={{ marginLeft: "auto", opacity: "0.4" }}>{"Click an option then reveal answer"}</span>
      </div>

      <div className="mcq-card" data-section="stokes-theorem" data-q="19" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"19"}</div>
          <div className="mcq-q-text">{"What geometric configuration asset matches the surface parameters required for executing a Stokes Theorem conversion step?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"A completely solid multi-variable mass density block."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"An open surface area bounded by a distinct closed perimeter line loop curve $\\partial S$."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"An infinite un-bounded plane coordinate slice."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"Stokes' Theorem links the curl passing through an open surface directly to the line integration around its closed outer perimeter loop path."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="stokes-theorem" data-q="20" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"20"}</div>
          <div className="mcq-q-text">{"How do structural calculus systems evaluate complex surface curl values when the target cap surface bends awkwardly through space?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"They substitute the messy surface integration with a simple line integration tracking the shared perimeter loop path instead."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"They drop all non-linear parameter values and treat the surface as flat."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"They swap out the vector expressions with basic one-dimensional scalar integrations."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"Since the theorem shows that any open surface sharing the same perimeter loop yields identical results, you can skip the awkward surface integration and evaluate the simple boundary loop path instead."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="stokes-theorem" data-q="21" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">{"21"}</div>
          <div className="mcq-q-text">{"When evaluating boundary path directions for Stokes conversions, how is the correct tracking orientation determined?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"By matching vector lengths along the positive vertical axis lines."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"By selecting the shortest distance route to the nearest coordinate wall."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"By applying the Right-Hand Rule relative to the surface's normal vector heading direction."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"The standard orientation conventions link path rotation to the surface normal heading using the Right-Hand Rule, ensuring consistency across vector cross-product math."}</div>
        </div>
      </div>
    </section>
  );
}

function SectionObj18Enrichment() {
  return (
    <section className="section" id="divcurl-enrich">
      <div className="sec-badge">{"Deeper Dive"}</div>
      <h2 className="sec-title">{"Reading $\\mathrm{div}$ and $\\mathrm{curl}$ Together"}</h2>
      <p>
        {"Divergence measures local expansion/compression of a vector field; curl measures local rotation. A field can have one nonzero and the other zero (e.g. source-free swirling flow)."}
      </p>
      <div className="box def">
        <div className="box-lbl">{"Theory"}</div>
        <p>{"For $\\mathbf{F}=(P,Q,R)$, $\\nabla\\cdot\\mathbf{F}=P_x+Q_y+R_z$ and $\\nabla\\times\\mathbf{F}$ is the formal determinant with $\\mathbf{i},\\mathbf{j},\\mathbf{k}$ and partials of $P,Q,R$."}</p>
      </div>
      <div className="box exm">
        <div className="box-lbl">{"Worked Example"}</div>
        <div className="exm-title">{"$\\mathbf{F}=(-y,x,0)$."}</div>
        <div className="sol">
          <div className="sol-lbl">{"Solution"}</div>
          <p>{"$\\nabla\\cdot\\mathbf{F}=0$ (incompressible). $\\nabla\\times\\mathbf{F}=(0,0,2)$ (constant vertical vorticity)."}</p>
        </div>
      </div>
    </section>
  );
}

function QuizChallengeDivCurl() {
  return (
    <section className="mcq-section" id="quiz-divcurl-challenge">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Challenge"}</span>
        <h2 className="mcq-section-title">{"Medium & Hard Practice"}</h2>
      </div>
      <div className="mcq-score-strip">
        <span className="score-lbl">{"Score"}</span>
        <span className="score-val" id="scoredivcurl-challenge">{"0 / 4"}</span>
        <span className="score-lbl" style={{ marginLeft: "auto", opacity: "0.4" }}>{"Click an option then reveal answer"}</span>
      </div>
      <div className="mcq-card" data-section="divcurl-challenge" data-q="1" data-answer="A" data-difficulty="medium">
        <div className="mcq-q-row"><div className="mcq-num">{"1"}</div><div className="mcq-q-text">{"(Medium) For $\\mathbf{F}=(x,-y,0)$, $\\nabla\\cdot\\mathbf{F}$ equals:"}</div></div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"$0$"}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"$1$"}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"$2$"}</div>
        </div>
        <button type="button" className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer"><span className="mcq-correct-badge">{"Correct Option: A"}</span><div className="mcq-explanation">{"$1+(-1)+0=0$."}</div></div>
      </div>
      <div className="mcq-card" data-section="divcurl-challenge" data-q="2" data-answer="B" data-difficulty="medium">
        <div className="mcq-q-row"><div className="mcq-num">{"2"}</div><div className="mcq-q-text">{"(Medium) Curl of a gradient $\\nabla\\times(\\nabla f)$ is:"}</div></div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"$\\nabla f$"}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"$\\mathbf{0}$ (when mixed partials match)"}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"$\\nabla\\cdot\\nabla f$"}</div>
        </div>
        <button type="button" className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer"><span className="mcq-correct-badge">{"Correct Option: B"}</span><div className="mcq-explanation">{"Classic vector calculus identity: curl of a gradient vanishes."}</div></div>
      </div>
      <div className="mcq-card" data-section="divcurl-challenge" data-q="3" data-answer="C" data-difficulty="hard">
        <div className="mcq-q-row"><div className="mcq-num">{"3"}</div><div className="mcq-q-text">{"(Hard) Divergence theorem relates $\\iiint(\\nabla\\cdot\\mathbf{F})\\,dV$ to:"}</div></div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"A line integral of $f\\,ds$"}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"$\\iint(\\nabla\\times\\mathbf{F})\\cdot d\\mathbf{S}$"}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"Flux $\\iint\\mathbf{F}\\cdot d\\mathbf{S}$ through the closed boundary"}</div>
        </div>
        <button type="button" className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer"><span className="mcq-correct-badge">{"Correct Option: C"}</span><div className="mcq-explanation">{"Total expansion inside equals net outward flux through $\\partial E$."}</div></div>
      </div>
      <div className="mcq-card" data-section="divcurl-challenge" data-q="4" data-answer="A" data-difficulty="hard">
        <div className="mcq-q-row"><div className="mcq-num">{"4"}</div><div className="mcq-q-text">{"(Hard) Stokes relates circulation on $\\partial S$ to:"}</div></div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"$\\iint_S(\\nabla\\times\\mathbf{F})\\cdot d\\mathbf{S}$"}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"$\\iiint(\\nabla\\cdot\\mathbf{F})\\,dV$"}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"$\\iint_S\\mathbf{F}\\cdot\\mathbf{T}\\,dS$"}</div>
        </div>
        <button type="button" className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer"><span className="mcq-correct-badge">{"Correct Option: A"}</span><div className="mcq-explanation">{"Circulation = flux of curl through any oriented surface spanning the curve."}</div></div>
      </div>
    </section>
  );
}

function SectionRealWorld() {
  return (
    <section className="section" id="divcurl-real-world">
      <div className="sec-badge">{"Applications"}</div>
      <h2 className="sec-title">{"Where This Shows Up in Real Life"}</h2>
      <div className="box def">
        <div className="box-lbl">{"Real-World Use"}</div>
        <p>
          {"Divergence and curl aren't abstract operators \u2014 they're literally two of "}
          <strong>{"Maxwell's Equations"}</strong>
          {", the four equations that govern all of classical electromagnetism. $\\nabla\\cdot\\mathbf{B}=0$ (zero divergence of the magnetic field) is precisely the statement that magnetic monopoles don't exist, and $\\nabla\\times\\mathbf{E}$ relates directly to how a changing magnetic field induces an electric current \u2014 the working principle behind every electric generator and transformer."}
        </p>
        <p>
          {"Meteorologists use divergence and curl on wind-vector satellite data to identify high/low pressure systems and spot the rotation signature of a forming hurricane before it's visible to the eye. Aerospace engineers use curl to compute vorticity around an aircraft wing \u2014 the same rotational flow that generates lift \u2014 and civil engineers checking whether a fluid system (like a city's water network) has any unaccounted-for sources or leaks use exactly the divergence test from this guide: $\\nabla\\cdot\\mathbf{v}=0$ confirms conservation, anything else flags a problem."}
        </p>
      </div>
    </section>
  );
}

function SectionSummary() {
  return (
    <section className="section summary-box">
      <h2 className="summary-title">Vector Operators Operational Checklist</h2>
      <ul className="summary-list">
        <li>{"Construct field mappings using multi-variable components scaled across coordinate bases."}</li>
        <li>{"Simplify outward flux calculations by running divergence dot products with the Del operator."}</li>
        <li>{"Verify rotational micro spin dynamics by evaluating determinant cross-product curl matrices."}</li>
        <li>
          {"Bound your total field metrics using Divergence volume and Stokes circulation loop conversion theorems. "}
          {"For a dedicated walkthrough, open "}
          <Link to="/stokes-theorem/1" style={{ color: "var(--gold)", fontWeight: 600 }}>
            {"Stokes' Theorem"}
          </Link>
          {"."}
        </li>
      </ul>
    </section>
  );
}

// ==========================================
// CENTRAL ROUTER ROUTING CONTAINER
// ==========================================

function DivergenceAndCurlGuide({ section }) {
  if (section === 2) {
    return (
      <StudyGuideShell
        guideClass="partial-derivatives-guide"
        title="Divergence & Curl: Applications (Part 2)"
      >
        <GuideSidebarPart2 />
        <main className="main">
          <GuideHeaderPart2 />
          <TableOfContentsPart2 />
          <Divider />
          <SectionS164 />
          <QuizMcq164 />
          <Divider />
          <SectionS165 />
          <QuizMcq165 />
          <Divider />
          <SectionS165b />
          <Divider />
          <SectionS166 />
          <QuizMcq166 />
          <Divider />
          <SectionS167 />
          <QuizMcq167 />
          <Divider />
          <SectionObj18Enrichment />
          <Divider />
          <DivCurlExtendedPart2 />
          <Divider />
          <MvCertificateBoost topic="divcurl" part={2} />
          <Divider />
          <QuizChallengeDivCurl />
          <Divider />
          <SectionRealWorld />
          <Divider />
          <SectionSummary />
        </main>
      </StudyGuideShell>
    );
  }

  return (
    <StudyGuideShell
      guideClass="partial-derivatives-guide"
      title="Divergence & Curl: Foundations (Part 1)"
    >
      <GuideSidebarPart1 />
      <main className="main">
        <GuideHeaderPart1 />
        <TableOfContentsPart1 />
        <Divider />
        <OpeningNote />
        <Divider />
        <SectionS161 />
        <QuizMcq161 />
        <Divider />
        <SectionS162 />
        <QuizMcq162 />
        <Divider />
        <SectionS163 />
        <QuizMcq163 />
        <Divider />
        <SectionObj18Enrichment />
        <Divider />
        <DivCurlExtendedPart1 />
        <Divider />
        <MvCertificateBoost topic="divcurl" part={1} />
        <Divider />
        <QuizChallengeDivCurl />
        <Divider />
        <section id="summary1" className="section">
          <div className="sec-badge">{"Reference"}</div>
          <h2 className="sec-title">{"Part 1 Foundations Complete"}</h2>
          <p>
            {"Continue to "}
            <Link to="/divergence-curl/2" style={{ color: "var(--gold)", fontWeight: 600 }}>
              {"Part 2: Applications & Integral Theorems"}
            </Link>
            {"."}
          </p>
        </section>
      </main>
    </StudyGuideShell>
  );
}

export default DivergenceAndCurlGuide;