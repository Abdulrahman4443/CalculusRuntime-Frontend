import StudyGuideShell from "../courses/StudyGuideShell";
import { GuideMcqSection } from "../../components/GuideMcq";
import {
  MV_GEO_DIRCOS_QUIZ,
  MV_GEO_ANGLE3D_QUIZ,
  MV_GEO_PLANE_QUIZ,
  MV_GEO_PTPLANE_QUIZ,
  MV_GEO_LINE3D_QUIZ,
  MV_GEO_SKEW_QUIZ,
  MV_GEO_QUADRIC_QUIZ,
} from "../../data/mvGeometry3DQuizzes";
import "./PartialDerivativesGuide.css";
import { RealLifeUse } from "../calculus/CalcBlocks";

function Divider() {
  return <hr className="divider" />;
}

function OpeningNote() {
  return (
    <div className="opening-note-box">
      <p className="opening-note">
        <strong>Operational Blueprint:</strong>{" "}
        {"This guide lays the 3D geometric foundation that the rest of vector calculus quietly assumes: how to describe direction in space, how to write down planes and lines precisely, how to measure the gap between a point and a plane, when two lines miss each other entirely, and how to recognize the six standard curved surfaces (quadrics) that show up as domains and level sets throughout multivariable calculus."}
      </p>
    </div>
  );
}

function SectionGeo1() {
  return (
    <section className="section" id="s-geo1">
      <div className="sec-badge">{"Section"}</div>
      <h2 className="sec-title">{"Direction Angles, Direction Cosines & Direction Ratios"}</h2>
      <p>
        {"Every nonzero vector in 3D space points in some direction. To describe that direction precisely (and compare it with other vectors), we measure the angles it makes with the three coordinate axes."}
      </p>
      <div className="box def">
        <div className="box-lbl">{"Definition — Direction Angles & Direction Cosines"}</div>
        {"For a nonzero vector $\\mathbf{v}=(a,b,c)$, the "}
        <strong>{"direction angles"}</strong>
        {" $\\alpha,\\beta,\\gamma$ are the angles $\\mathbf{v}$ makes with the positive $x$, $y$, and $z$ axes. The "}
        <strong>{"direction cosines"}</strong>
        {" are $l=\\cos\\alpha,\\;m=\\cos\\beta,\\;n=\\cos\\gamma$, computed directly as:"}
        <div className="fml">
          {"$$l=\\dfrac{a}{|\\mathbf{v}|},\\qquad m=\\dfrac{b}{|\\mathbf{v}|},\\qquad n=\\dfrac{c}{|\\mathbf{v}|}$$"}
        </div>
        {"Because $(l,m,n)$ is just $\\mathbf{v}$ rescaled to unit length, they always satisfy the identity "}
        <div className="fml">{"$$l^2+m^2+n^2=1$$"}</div>
      </div>
      <h3 className="subsec">{"Direction Ratios — The Un-normalized Version"}</h3>
      <p>
        {"Any triple proportional to $(a,b,c)$ is called a set of "}
        <strong>{"direction ratios"}</strong>
        {" for the same direction — they don't need to satisfy any length condition, and infinitely many triples describe one direction. Direction cosines are the one normalized (unit-length) choice among all possible direction ratios."}
      </p>
      <div className="box exm">
        <div className="box-lbl">{"Example"}</div>
        <div className="exm-title">{"Direction cosines of $\\mathbf{v}=(3,4,12)$"}</div>
        <div className="sol">
          <div className="sol-lbl">{"Solution"}</div>
          <p>{"$|\\mathbf{v}|=\\sqrt{9+16+144}=\\sqrt{169}=13$."}</p>
          <div className="fml">{"$$(l,m,n)=\\left(\\tfrac{3}{13},\\tfrac{4}{13},\\tfrac{12}{13}\\right)$$"}</div>
          <p>{"Check: $\\left(\\tfrac{3}{13}\\right)^2+\\left(\\tfrac{4}{13}\\right)^2+\\left(\\tfrac{12}{13}\\right)^2=\\tfrac{9+16+144}{169}=1$ ✓"}</p>
        </div>
      </div>
      <RealLifeUse>
        Flight-control and robotics software constantly convert a raw heading vector into direction cosines — it's the standard way to say "point this way" independent of how fast or far you're moving.
      </RealLifeUse>
      <GuideMcqSection id="mcqGeoDirCos" badge="Practice" title="Direction Angles, Cosines & Ratios — Quiz" scoreId="scoreGeoDirCos" section="geo-dircos" questions={MV_GEO_DIRCOS_QUIZ} />
    </section>
  );
}

function SectionGeo2() {
  return (
    <section className="section" id="s-geo2">
      <div className="sec-badge">{"Section"}</div>
      <h2 className="sec-title">{"Angle Between Two Lines in 3D"}</h2>
      <p>
        {"Once two lines are described by direction vectors, the angle between them is found the same way as the angle between any two vectors — via the dot product."}
      </p>
      <div className="box thm">
        <div className="box-lbl">{"Formula — Angle Between Two Lines"}</div>
        {"For direction ratios $(a_1,b_1,c_1)$ and $(a_2,b_2,c_2)$:"}
        <div className="fml">
          {"$$\\cos\\theta=\\dfrac{a_1a_2+b_1b_2+c_1c_2}{|\\mathbf{v}_1|\\,|\\mathbf{v}_2|}$$"}
        </div>
        {"The lines are "}
        <strong>{"perpendicular"}</strong>
        {" exactly when the numerator is $0$, and "}
        <strong>{"parallel"}</strong>
        {" exactly when $(a_1,b_1,c_1)$ is a scalar multiple of $(a_2,b_2,c_2)$."}
      </div>
      <div className="box exm">
        <div className="box-lbl">{"Example"}</div>
        <div className="exm-title">{"Angle between lines with ratios $(1,2,2)$ and $(2,1,2)$"}</div>
        <div className="sol">
          <div className="sol-lbl">{"Solution"}</div>
          <p>{"Dot product: $1(2)+2(1)+2(2)=2+2+4=8$."}</p>
          <p>{"Magnitudes: $|(1,2,2)|=\\sqrt{1+4+4}=3$ and $|(2,1,2)|=\\sqrt{4+1+4}=3$."}</p>
          <div className="fml">{"$$\\cos\\theta=\\dfrac{8}{3\\cdot3}=\\dfrac{8}{9}\\;\\Rightarrow\\;\\theta=\\cos^{-1}\\left(\\tfrac89\\right)\\approx 27.3^\\circ$$"}</div>
        </div>
      </div>
      <GuideMcqSection id="mcqGeoAngle3D" badge="Practice" title="Angle Between Two Lines — Quiz" scoreId="scoreGeoAngle3D" section="geo-angle3d" questions={MV_GEO_ANGLE3D_QUIZ} />
    </section>
  );
}

function SectionGeo3() {
  return (
    <section className="section" id="s-geo3">
      <div className="sec-badge">{"Section"}</div>
      <h2 className="sec-title">{"Equations of Planes — Point-Normal & Vector Form"}</h2>
      <p>
        {"A plane in 3D is completely determined by one point on it and one vector perpendicular (normal) to it — the normal pins down the tilt, and the point pins down the location."}
      </p>
      <div className="box def">
        <div className="box-lbl">{"Definition — Point-Normal Form"}</div>
        {"Given a point $(x_0,y_0,z_0)$ on the plane and a normal vector $(A,B,C)$:"}
        <div className="fml">{"$$A(x-x_0)+B(y-y_0)+C(z-z_0)=0$$"}</div>
        {"Equivalently, in vector form with $\\mathbf{n}=(A,B,C)$, $\\mathbf{r}_0$ the known point, and $\\mathbf{r}=(x,y,z)$ any point on the plane:"}
        <div className="fml">{"$$\\mathbf{n}\\cdot(\\mathbf{r}-\\mathbf{r}_0)=0$$"}</div>
        {"Expanding either form gives the familiar $Ax+By+Cz+D=0$, where $D=-(Ax_0+By_0+Cz_0)$."}
      </div>
      <div className="box exm">
        <div className="box-lbl">{"Example"}</div>
        <div className="exm-title">{"Plane through $(1,2,3)$ with normal $(1,1,1)$"}</div>
        <div className="sol">
          <div className="sol-lbl">{"Solution"}</div>
          <p>{"$1(x-1)+1(y-2)+1(z-3)=0$"}</p>
          <div className="fml">{"$$x+y+z-6=0 \\quad\\Longleftrightarrow\\quad x+y+z=6$$"}</div>
        </div>
      </div>
      <h3 className="subsec">{"Finding a Normal from Three Points"}</h3>
      <p>
        {"If instead you're given three points on the plane, form two vectors between them and take their cross product — the result is automatically perpendicular to both, and therefore normal to the plane."}
      </p>
      <RealLifeUse>
        CAD software and 3D game engines store every flat surface as a point-normal pair — it's the cheapest way to test which side of a wall or floor an object is on.
      </RealLifeUse>
      <GuideMcqSection id="mcqGeoPlane" badge="Practice" title="Equations of Planes — Quiz" scoreId="scoreGeoPlane" section="geo-plane" questions={MV_GEO_PLANE_QUIZ} />
    </section>
  );
}

function SectionGeo4() {
  return (
    <section className="section" id="s-geo4">
      <div className="sec-badge">{"Section"}</div>
      <h2 className="sec-title">{"Point-to-Plane Distance"}</h2>
      <p>
        {"The perpendicular (shortest) distance from a point to a plane has a direct formula — plug the point into the plane's equation and rescale by the normal's length."}
      </p>
      <div className="box thm">
        <div className="box-lbl">{"Formula — Distance from a Point to a Plane"}</div>
        {"For plane $Ax+By+Cz+D=0$ and point $(x_1,y_1,z_1)$:"}
        <div className="fml">{"$$d=\\dfrac{|Ax_1+By_1+Cz_1+D|}{\\sqrt{A^2+B^2+C^2}}$$"}</div>
        {"The absolute value is essential — plugging in a point converts the equation's left side into a signed value that's positive on one side of the plane and negative on the other."}
      </div>
      <div className="box exm">
        <div className="box-lbl">{"Example"}</div>
        <div className="exm-title">{"Distance from $(1,1,1)$ to the plane $x+y+z-6=0$"}</div>
        <div className="sol">
          <div className="sol-lbl">{"Solution"}</div>
          <div className="fml">{"$$d=\\dfrac{|1+1+1-6|}{\\sqrt{1^2+1^2+1^2}}=\\dfrac{3}{\\sqrt3}=\\sqrt3$$"}</div>
        </div>
      </div>
      <div className="box exm">
        <div className="box-lbl">{"Example"}</div>
        <div className="exm-title">{"Distance between the parallel planes $x+y+z=1$ and $x+y+z=4$"}</div>
        <div className="sol">
          <div className="sol-lbl">{"Solution"}</div>
          <p>{"Pick any point on the first plane, e.g. $(1,0,0)$, and measure its distance to the second, rewritten as $x+y+z-4=0$:"}</p>
          <div className="fml">{"$$d=\\dfrac{|1+0+0-4|}{\\sqrt3}=\\dfrac{3}{\\sqrt3}=\\sqrt3$$"}</div>
        </div>
      </div>
      <GuideMcqSection id="mcqGeoPtPlane" badge="Practice" title="Point-to-Plane Distance — Quiz" scoreId="scoreGeoPtPlane" section="geo-ptplane" questions={MV_GEO_PTPLANE_QUIZ} />
    </section>
  );
}

function SectionGeo5() {
  return (
    <section className="section" id="s-geo5">
      <div className="sec-badge">{"Section"}</div>
      <h2 className="sec-title">{"Lines in 3D — Vector, Parametric & Symmetric Forms"}</h2>
      <p>
        {"A line in 3D is fixed by one point on it and one direction vector. That single idea can be written three equivalent ways, each useful in different situations."}
      </p>
      <div className="box def">
        <div className="box-lbl">{"Definition — Three Forms of a 3D Line"}</div>
        {"Through point $(x_0,y_0,z_0)$ with direction $(a,b,c)$:"}
        <div className="fml">{"$$\\textbf{Vector: }\\;\\mathbf{r}(t)=\\mathbf{r}_0+t\\mathbf{v}$$"}</div>
        <div className="fml">{"$$\\textbf{Parametric: }\\;x=x_0+at,\\quad y=y_0+bt,\\quad z=z_0+ct$$"}</div>
        <div className="fml">{"$$\\textbf{Symmetric: }\\;\\dfrac{x-x_0}{a}=\\dfrac{y-y_0}{b}=\\dfrac{z-z_0}{c}\\quad(a,b,c\\neq 0)$$"}</div>
        {"Symmetric form is just parametric form with $t$ eliminated by solving each equation for $t$ and setting the results equal."}
      </div>
      <div className="box exm">
        <div className="box-lbl">{"Example"}</div>
        <div className="exm-title">{"Line through $(1,0,-1)$ with direction $(2,3,-1)$"}</div>
        <div className="sol">
          <div className="sol-lbl">{"Solution"}</div>
          <div className="fml">{"$$x=1+2t,\\qquad y=3t,\\qquad z=-1-t$$"}</div>
          <p>{"Symmetric form: $\\dfrac{x-1}{2}=\\dfrac{y}{3}=\\dfrac{z+1}{-1}$."}</p>
        </div>
      </div>
      <h3 className="subsec">{"When One Direction Component Is Zero"}</h3>
      <p>
        {"If, say, $b=0$, the symmetric form can't divide by it. Instead write $y=y_0$ as its own fixed equation, and keep the symmetric relation only between the remaining two coordinates: $\\dfrac{x-x_0}{a}=\\dfrac{z-z_0}{c}$, together with $y=y_0$."}
      </p>
      <GuideMcqSection id="mcqGeoLine3D" badge="Practice" title="Lines in 3D — Quiz" scoreId="scoreGeoLine3D" section="geo-line3d" questions={MV_GEO_LINE3D_QUIZ} />
    </section>
  );
}

function SectionGeo6() {
  return (
    <section className="section" id="s-geo6">
      <div className="sec-badge">{"Section"}</div>
      <h2 className="sec-title">{"Skew Lines & Shortest Distance Between Them"}</h2>
      <p>
        {"In a flat 2D plane, two lines either run parallel forever or eventually cross — there's no third option. 3D space removes that restriction: two lines can point in different directions and still never meet, simply by passing each other at different heights."}
      </p>
      <div className="box def">
        <div className="box-lbl">{"Definition — Skew Lines"}</div>
        {"Two lines are "}
        <strong>{"skew"}</strong>
        {" if they are not parallel and do not intersect — equivalently, no single plane contains both of them."}
      </div>
      <div className="box thm">
        <div className="box-lbl">{"Formula — Shortest Distance Between Two Skew Lines"}</div>
        {"Line 1 through $\\mathbf{r}_1$ with direction $\\mathbf{v}_1$; line 2 through $\\mathbf{r}_2$ with direction $\\mathbf{v}_2$:"}
        <div className="fml">{"$$d=\\dfrac{\\big|(\\mathbf{r}_2-\\mathbf{r}_1)\\cdot(\\mathbf{v}_1\\times\\mathbf{v}_2)\\big|}{|\\mathbf{v}_1\\times\\mathbf{v}_2|}$$"}</div>
        {"The connecting segment of this minimum length is always perpendicular to "}
        <em>{"both"}</em>
        {" lines at once — which is exactly what $\\mathbf{v}_1\\times\\mathbf{v}_2$ (perpendicular to both directions) is built to detect."}
      </div>
      <div className="box exm">
        <div className="box-lbl">{"Example"}</div>
        <div className="exm-title">{"Distance between two skew lines"}</div>
        <p>{"Line 1: through $(0,0,0)$, direction $(1,0,0)$. Line 2: through $(0,1,0)$, direction $(0,0,1)$."}</p>
        <div className="sol">
          <div className="sol-lbl">{"Solution"}</div>
          <p>{"$\\mathbf{v}_1\\times\\mathbf{v}_2=(1,0,0)\\times(0,0,1)=(0\\cdot1-0\\cdot0,\\;0\\cdot0-1\\cdot1,\\;1\\cdot0-0\\cdot0)=(0,-1,0)$."}</p>
          <p>{"$\\mathbf{r}_2-\\mathbf{r}_1=(0,1,0)-(0,0,0)=(0,1,0)$, so the dot product is $(0)(0)+(1)(-1)+(0)(0)=-1$."}</p>
          <div className="fml">{"$$d=\\dfrac{|-1|}{|(0,-1,0)|}=\\dfrac{1}{1}=1$$"}</div>
        </div>
      </div>
      <RealLifeUse>
        Collision-detection engines and robotic-arm path planners check exactly this formula: do two moving parts' straight-line paths get closer than some safe clearance distance, even without ever technically crossing?
      </RealLifeUse>
      <GuideMcqSection id="mcqGeoSkew" badge="Practice" title="Skew Lines — Quiz" scoreId="scoreGeoSkew" section="geo-skew" questions={MV_GEO_SKEW_QUIZ} />
    </section>
  );
}

function SectionGeo7() {
  return (
    <section className="section" id="s-geo7">
      <div className="sec-badge">{"Section"}</div>
      <h2 className="sec-title">{"Quadric Surface Classification — The Six Standard Forms"}</h2>
      <p>
        {"A quadric surface is the 3D analogue of a conic section — the graph of a second-degree equation in $x,y,z$. Every quadric reduces, after centering and rotating axes, to one of six standard shapes. Recognizing the pattern of signs and the position of the constant tells you immediately which shape you're looking at."}
      </p>
      <div className="box def">
        <div className="box-lbl">{"The Six Standard Quadric Surfaces"}</div>
        <div className="sum-grid">
          <div className="sum-card">
            <div className="sc-lbl">{"Ellipsoid"}</div>
            <p>{"$\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}+\\dfrac{z^2}{c^2}=1$"}</p>
          </div>
          <div className="sum-card">
            <div className="sc-lbl">{"Elliptic Paraboloid"}</div>
            <p>{"$z=\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}$"}</p>
          </div>
          <div className="sum-card">
            <div className="sc-lbl">{"Hyperbolic Paraboloid (Saddle)"}</div>
            <p>{"$z=\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}$"}</p>
          </div>
          <div className="sum-card">
            <div className="sc-lbl">{"Hyperboloid of One Sheet"}</div>
            <p>{"$\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}-\\dfrac{z^2}{c^2}=1$"}</p>
          </div>
          <div className="sum-card">
            <div className="sc-lbl">{"Hyperboloid of Two Sheets"}</div>
            <p>{"$\\dfrac{z^2}{c^2}-\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}=1$"}</p>
          </div>
          <div className="sum-card">
            <div className="sc-lbl">{"Elliptic Cone"}</div>
            <p>{"$\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}-\\dfrac{z^2}{c^2}=0$"}</p>
          </div>
        </div>
      </div>
      <h3 className="subsec">{"How to Read the Sign Pattern"}</h3>
      <ul className="steps">
        <li><span>{"All three squared terms positive, equals $1$ → ellipsoid (a sphere is the special case $a=b=c$)."}</span></li>
        <li><span>{"One variable isolated ($z=\\dots$), same sign on both squared terms → elliptic paraboloid (a bowl)."}</span></li>
        <li><span>{"One variable isolated, opposite signs on the squared terms → hyperbolic paraboloid (a saddle)."}</span></li>
        <li><span>{"Two positive, one negative squared term, equals $1$ → hyperboloid of one sheet (a connected \"waist\" surface)."}</span></li>
        <li><span>{"One positive, two negative squared terms, equals $1$ → hyperboloid of two sheets (splits into two separate pieces)."}</span></li>
        <li><span>{"Same sign pattern as a hyperboloid, but equals $0$ instead of $1$ → elliptic cone."}</span></li>
      </ul>
      <div className="box exm">
        <div className="box-lbl">{"Example"}</div>
        <div className="exm-title">{"Classify $x^2+y^2-z^2=1$ and $x^2+y^2=z^2$"}</div>
        <div className="sol">
          <div className="sol-lbl">{"Solution"}</div>
          <p>{"$x^2+y^2-z^2=1$: two positive terms, one negative, equals $1$ → "}<strong>{"hyperboloid of one sheet"}</strong>{"."}</p>
          <p>{"$x^2+y^2=z^2$, i.e. $x^2+y^2-z^2=0$: same sign pattern, but equals $0$ → "}<strong>{"elliptic cone"}</strong>{"."}</p>
        </div>
      </div>
      <RealLifeUse>
        Nuclear cooling towers are built as hyperboloids of one sheet (the curved waist is structurally strong with minimal material); satellite dishes and telescope mirrors use elliptic paraboloids because every ray parallel to the axis reflects through a single focus point.
      </RealLifeUse>
      <GuideMcqSection id="mcqGeoQuadric" badge="Practice" title="Quadric Surface Classification — Quiz" scoreId="scoreGeoQuadric" section="geo-quadric" questions={MV_GEO_QUADRIC_QUIZ} />
    </section>
  );
}

function SectionSummary1() {
  return (
    <section className="section" id="summary1">
      <div className="sec-badge">{"Reference"}</div>
      <h2 className="sec-title">{"Part 1 Key Formulas"}</h2>
      <p>{"Continue to "}<a href="/3d-geometry/2" style={{color:"var(--gold)",fontWeight:600}}>{"Part 2"}</a>{" for Lines in 3D, Skew Lines, and Quadric Surface Classification."}</p>
    </section>
  );
}

function SectionSummary2() {
  return (
    <section className="section" id="summary">
      <div className="sec-badge">{"Summary"}</div>
      <h2 className="sec-title">{"Key Formulas at a Glance"}</h2>
      <div className="sum-grid">
        <div className="sum-card">
          <div className="sc-lbl">{"Direction cosines"}</div>
          <p>{"$(l,m,n)=\\left(\\tfrac{a}{|\\mathbf{v}|},\\tfrac{b}{|\\mathbf{v}|},\\tfrac{c}{|\\mathbf{v}|}\\right)$, $\\;l^2+m^2+n^2=1$"}</p>
        </div>
        <div className="sum-card">
          <div className="sc-lbl">{"Angle between lines"}</div>
          <p>{"$\\cos\\theta=\\dfrac{a_1a_2+b_1b_2+c_1c_2}{|\\mathbf{v}_1||\\mathbf{v}_2|}$"}</p>
        </div>
        <div className="sum-card">
          <div className="sc-lbl">{"Plane, point-normal form"}</div>
          <p>{"$A(x-x_0)+B(y-y_0)+C(z-z_0)=0$"}</p>
        </div>
        <div className="sum-card">
          <div className="sc-lbl">{"Point-to-plane distance"}</div>
          <p>{"$d=\\dfrac{|Ax_1+By_1+Cz_1+D|}{\\sqrt{A^2+B^2+C^2}}$"}</p>
        </div>
        <div className="sum-card">
          <div className="sc-lbl">{"Line, symmetric form"}</div>
          <p>{"$\\dfrac{x-x_0}{a}=\\dfrac{y-y_0}{b}=\\dfrac{z-z_0}{c}$"}</p>
        </div>
        <div className="sum-card">
          <div className="sc-lbl">{"Shortest distance, skew lines"}</div>
          <p>{"$d=\\dfrac{|(\\mathbf{r}_2-\\mathbf{r}_1)\\cdot(\\mathbf{v}_1\\times\\mathbf{v}_2)|}{|\\mathbf{v}_1\\times\\mathbf{v}_2|}$"}</p>
        </div>
      </div>
      <div className="note">
        <strong>{"The unifying thread here is direction and distance in 3D."}</strong>
        {" Direction cosines describe orientation; the point-normal form pins a plane down using one direction (the normal); the distance formulas measure how far a point or a line strays from a target; and the six quadrics are simply the catalog of curved shapes you get once equations stop being linear. Every later vector-calculus topic — tangent planes, surface integrals, flux — leans on exactly this vocabulary."}
      </div>
    </section>
  );
}

function GuideFooter() {
  return (
    <footer className="pg-foot">
      {"\n      3D Analytical Geometry & Quadric Surfaces · Rendered with MathJax 3\n    "}
    </footer>
  );
}

function GuideSidebarPart1() {
  return (
    <nav className="sidebar">
      <div className="sb-brand">
        <div className="sb-sub">Multivariable Calculus</div>
        <div className="sb-title">3D Analytical Geometry · Part 1</div>
      </div>
      <div className="sb-group">Sections</div>
      <a className="sb-link" href="#s-geo1">Direction Cosines & Ratios</a>
      <a className="sb-link" href="#s-geo2">Angle Between Lines</a>
      <a className="sb-link" href="#s-geo3">Equations of Planes</a>
      <a className="sb-link" href="#s-geo4">Point-to-Plane Distance</a>
      <div className="sb-group">Reference</div>
      <a className="sb-link" href="#summary1"><span className="sn">—</span>Key Formulas</a>
    </nav>
  );
}

function GuideSidebarPart2() {
  return (
    <nav className="sidebar">
      <div className="sb-brand">
        <div className="sb-sub">Multivariable Calculus</div>
        <div className="sb-title">3D Analytical Geometry · Part 2</div>
      </div>
      <div className="sb-group">Sections</div>
      <a className="sb-link" href="#s-geo5">Lines in 3D</a>
      <a className="sb-link" href="#s-geo6">Skew Lines & Shortest Distance</a>
      <a className="sb-link" href="#s-geo7">Quadric Surfaces</a>
      <div className="sb-group">Reference</div>
      <a className="sb-link" href="#summary"><span className="sn">—</span>Key Formulas</a>
    </nav>
  );
}

function GuideHeaderPart1() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">Multivariable Calculus Study Guide · Part 1 of 2</div>
      <h1 className="ch-title">3D Analytical Geometry & Quadric Surfaces</h1>
      <p className="ch-sub">Direction Cosines, Angle Between Lines, Planes & Point-to-Plane Distance</p>
      <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
    </header>
  );
}

function GuideHeaderPart2() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">Multivariable Calculus Study Guide · Part 2 of 2</div>
      <h1 className="ch-title">3D Analytical Geometry & Quadric Surfaces</h1>
      <p className="ch-sub">Lines in 3D, Skew Lines & the Six Standard Quadric Surfaces</p>
      <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
    </header>
  );
}

function TableOfContentsPart1() {
  return (
    <nav className="toc">
      <div className="toc-h">Contents — Part 1 of 2</div>
      <div className="toc-grid">
        <a className="toc-a" href="#s-geo1">Direction Angles, Cosines & Ratios</a>
        <a className="toc-a" href="#s-geo2">Angle Between Two Lines</a>
        <a className="toc-a" href="#s-geo3">Equations of Planes</a>
        <a className="toc-a" href="#s-geo4">Point-to-Plane Distance</a>
        <a className="toc-a" href="#summary1"><span className="tn">—</span>Key Formulas</a>
      </div>
    </nav>
  );
}

function TableOfContentsPart2() {
  return (
    <nav className="toc">
      <div className="toc-h">Contents — Part 2 of 2</div>
      <div className="toc-grid">
        <a className="toc-a" href="#s-geo5">Lines in 3D</a>
        <a className="toc-a" href="#s-geo6">Skew Lines & Shortest Distance</a>
        <a className="toc-a" href="#s-geo7">Quadric Surface Classification</a>
        <a className="toc-a" href="#summary"><span className="tn">—</span>Key Formulas</a>
      </div>
    </nav>
  );
}

function Geometry3DContent({ part = 1 }) {
  if (part === 1) {
    return (
      <>
        <GuideSidebarPart1 />
        <main className="main">
          <GuideHeaderPart1 />
          <TableOfContentsPart1 />
          <OpeningNote />
          <Divider />
          <SectionGeo1 />
          <Divider />
          <SectionGeo2 />
          <Divider />
          <SectionGeo3 />
          <Divider />
          <SectionGeo4 />
          <Divider />
          <SectionSummary1 />
          <GuideFooter />
        </main>
      </>
    );
  }

  return (
    <>
      <GuideSidebarPart2 />
      <main className="main">
        <GuideHeaderPart2 />
        <TableOfContentsPart2 />
        <Divider />
        <SectionGeo5 />
        <Divider />
        <SectionGeo6 />
        <Divider />
        <SectionGeo7 />
        <Divider />
        <SectionSummary2 />
        <GuideFooter />
      </main>
    </>
  );
}

function Geometry3DGuide({ part = 1 }) {
  return (
    <StudyGuideShell
      guideClass="partial-derivatives-guide"
      title={`3D Analytical Geometry & Quadric Surfaces — Part ${part}`}
    >
      <Geometry3DContent part={part} />
    </StudyGuideShell>
  );
}

export default Geometry3DGuide;
