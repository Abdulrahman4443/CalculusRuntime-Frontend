import StudyGuideShell from "../courses/StudyGuideShell";
import { GuideMcqSection } from "../../components/GuideMcq";
import {
  MV_INTEGRALS_P1_QUIZ,
  MV_INTEGRALS_P2_QUIZ,
} from "../../data/mvIntegralsStokesQuizzes";
import "./PartialDerivativesGuide.css";
import { RealLifeUse } from "../calculus/CalcBlocks";
import {
  IntegralsExtendedPart1,
  IntegralsExtendedPart2,
} from "../courses/GuideExtendedMaterials";
import MvCertificateBoost from "./MvCertificateBoost";

function Divider() {
  return <hr className="divider" />;
}

function OpeningNote() {
  return (
    <div className="opening-note-box">
      <p className="opening-note">
        <strong>Operational Blueprint:</strong>{" "}
        {"This study guide formalizes multiple integration across two- and three-dimensional spatial domains in multivariable calculus. Double and triple integrals compute volumes under bivariate surfaces, total mass across variable density distributions, and centers of gravity via iterated integrals. Fubini's Theorem establishes conditions allowing the interchange of integration order across Type I and Type II planar regions. The curriculum expands into curvilinear coordinate transformations—polar ($r\\,dr\\,d\\theta$), cylindrical ($r\\,dr\\,d\\theta\\,dz$), and spherical ($\\rho^2 \\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$) systems—employing Jacobian determinants to simplify complex geometric domains. These multidimensional integration methods form the mathematical bedrock for fluid mechanics, celestial gravitation, and structural engineering simulations."}
      </p>
    </div>
  );
}

function GuideSidebarPart1() {
  return (
    <nav className="sidebar">
      <div className="sb-brand">
        <div className="sb-title">{"Multiple Integrals · Part 1"}</div>
      </div>
      <a className="sb-link" href="#mi-1">{"Double Integrals"}</a>
      <a className="sb-link" href="#mi-2">{"Fubini's Theorem"}</a>
      <a className="sb-link" href="#mi-3">{"Changing Order"}</a>
      <a className="sb-link" href="#mi-extrema">{"Global Extrema"}</a>
      <a className="sb-link" href="#mi-quiz1">{"Practice Quiz"}</a>
    </nav>
  );
}

function GuideSidebarPart2() {
  return (
    <nav className="sidebar">
      <div className="sb-brand">
        <div className="sb-title">{"Multiple Integrals · Part 2"}</div>
      </div>
      <a className="sb-link" href="#mi-4">{"Triple Integrals"}</a>
      <a className="sb-link" href="#mi-5">{"Polar Coordinates"}</a>
      <a className="sb-link" href="#mi-6">{"Cylindrical Coordinates"}</a>
      <a className="sb-link" href="#mi-7">{"Spherical Coordinates"}</a>
      <a className="sb-link" href="#mi-flux">{"Parametric Flux"}</a>
      <a className="sb-link" href="#mi-quiz2">{"Practice Quiz"}</a>
    </nav>
  );
}

function GuideHeaderPart1() {
  return (
    <div className="ch-hdr">
      <p className="ch-eye">{"MULTIVARIABLE CALCULUS STUDY GUIDE · PART 1 OF 2"}</p>
      <h1 className="ch-title">{"Multiple Integrals"}</h1>
      <p className="ch-sub">{"Double Integrals, Fubini's Theorem & Changing Order of Integration"}</p>
      <p className="ch-orn">{"✦ \u00a0 ✦ \u00a0 ✦"}</p>
    </div>
  );
}

function GuideHeaderPart2() {
  return (
    <div className="ch-hdr">
      <p className="ch-eye">{"MULTIVARIABLE CALCULUS STUDY GUIDE · PART 2 OF 2"}</p>
      <h1 className="ch-title">{"Triple Integrals & Coordinate Systems"}</h1>
      <p className="ch-sub">{"Triple Integrals, Polar, Cylindrical & Spherical Coordinates"}</p>
      <p className="ch-orn">{"✦ \u00a0 ✦ \u00a0 ✦"}</p>
    </div>
  );
}

function TableOfContentsPart1() {
  return (
    <div className="toc">
      <p className="toc-h">{"CONTENTS — PART 1 OF 2"}</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
        <a className="toc-a" href="#mi-1">{"Double Integrals"}</a>
        <a className="toc-a" href="#mi-2">{"Fubini's Theorem"}</a>
        <a className="toc-a" href="#mi-3">{"Changing Order of Integration"}</a>
        <a className="toc-a" href="#mi-extrema">{"Global Extrema"}</a>
        <a className="toc-a" href="#mi-quiz1">{"Practice Quiz"}</a>
      </div>
    </div>
  );
}

function TableOfContentsPart2() {
  return (
    <div className="toc">
      <p className="toc-h">{"CONTENTS — PART 2 OF 2"}</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
        <a className="toc-a" href="#mi-4">{"Triple Integrals"}</a>
        <a className="toc-a" href="#mi-5">{"Polar Coordinates"}</a>
        <a className="toc-a" href="#mi-6">{"Cylindrical Coordinates"}</a>
        <a className="toc-a" href="#mi-7">{"Spherical Coordinates"}</a>
        <a className="toc-a" href="#mi-flux">{"Parametric Surface Flux"}</a>
        <a className="toc-a" href="#mi-quiz2">{"Practice Quiz"}</a>
      </div>
    </div>
  );
}

function SectionMI1() {
  return (
    <section className="section" id="mi-1">
      <div className="sec-badge">{"Section"}</div>
      <h2 className="sec-title">{"Double Integrals over Rectangles"}</h2>
      <p>
        {"A double integral extends single-variable integration to functions of two variables. Over a rectangle $R = [a,b] \\times [c,d]$, we integrate $f(x,y)$ over both variables."}
      </p>
      <div className="box def">
        <div className="box-lbl">{"Definition \u2014 Double Integral"}</div>
        <p>
          {"The double integral of $f$ over rectangle $R$ is:"}
        </p>
        <div className="fml">
          {"$$\\iint_R f(x,y)\\,dA = \\lim_{m,n\\to\\infty} \\sum_{i=1}^{m}\\sum_{j=1}^{n} f(x_{ij}^*, y_{ij}^*)\\,\\Delta A$$"}
        </div>
        <p>
          {"where $\\Delta A = \\Delta x\\,\\Delta y$ is the area of each small rectangle."}
        </p>
      </div>

      <RealLifeUse>
        {"Double integrals compute mass from density on a plate, average rainfall over a region, and totals in image processing — volume under $z=f(x,y)$ is the geometric picture."}
      </RealLifeUse>
      <h3 className="subsec">{"Geometric Interpretation"}</h3>
      <p>
        {"If $f(x,y) \\geq 0$, the double integral $\\iint_R f(x,y)\\,dA$ represents the volume of the solid that lies above the rectangle $R$ and below the surface $z = f(x,y)$."}
      </p>

      <div className="box exm">
        <div className="box-lbl">{"Example"}</div>
        <div className="exm-title">
          {"Estimate $\\iint_R (x+2y)\\,dA$ over $R=[0,2]\\times[0,1]$"}
        </div>
        <div className="sol">
          <div className="sol-lbl">{"Solution"}</div>
          <p>{"Using midpoints: $\\Delta x = 1$, $\\Delta y = 0.5$."}</p>
          <p>{"Sample points: $(0.5, 0.25)$, $(0.5, 0.75)$, $(1.5, 0.25)$, $(1.5, 0.75)$."}</p>
          <p>{"$f(0.5,0.25)=1$, $f(0.5,0.75)=2$, $f(1.5,0.25)=2$, $f(1.5,0.75)=3$."}</p>
          <div className="fml">{"$$\\iint_R f\\,dA \\approx (1+2+2+3)\\times 0.5 = 4$$"}</div>
        </div>
      </div>
    </section>
  );
}

function SectionMI2() {
  return (
    <section className="section" id="mi-2">
      <div className="sec-badge">{"Section"}</div>
      <h2 className="sec-title">{"Fubini's Theorem"}</h2>
      <p>
        {"Fubini's Theorem allows us to evaluate double integrals as iterated (repeated) single integrals, which is the practical method used in all calculations."}
      </p>
      <div className="box def">
        <div className="box-lbl">{"Theorem \u2014 Fubini's Theorem"}</div>
        <p>{"If $f$ is continuous on $R = [a,b]\\times[c,d]$, then:"}</p>
        <div className="fml">
          {"$$\\iint_R f(x,y)\\,dA = \\int_a^b\\int_c^d f(x,y)\\,dy\\,dx = \\int_c^d\\int_a^b f(x,y)\\,dx\\,dy$$"}
        </div>
      </div>
      <div className="box exm">
        <div className="box-lbl">{"Example"}</div>
        <div className="exm-title">
          {"Evaluate $\\iint_R (x^2 + 2xy)\\,dA$ where $R = [0,1]\\times[0,2]$"}
        </div>
        <div className="sol">
          <div className="sol-lbl">{"Solution"}</div>
          <p>{"Integrate with respect to $y$ first, then $x$:"}</p>
          <div className="fml">
            {"$$\\int_0^1\\int_0^2 (x^2+2xy)\\,dy\\,dx = \\int_0^1\\left[x^2 y + xy^2\\right]_0^2 dx$$"}
          </div>
          <div className="fml">
            {"$$= \\int_0^1 (2x^2 + 4x)\\,dx = \\left[\\frac{2x^3}{3} + 2x^2\\right]_0^1 = \\frac{2}{3} + 2 = \\frac{8}{3}$$"}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionMI3() {
  return (
    <section className="section" id="mi-3">
      <div className="sec-badge">{"Section"}</div>
      <h2 className="sec-title">{"Changing the Order of Integration"}</h2>
      <p>
        {"Sometimes an integral is impossible or very hard in one order but straightforward in the other. Switching the order requires redrawing the region of integration."}
      </p>
      <div className="box exm">
        <div className="box-lbl">{"Example"}</div>
        <div className="exm-title">
          {"Change the order: $\\int_0^1\\int_x^1 e^{y^2}\\,dy\\,dx$"}
        </div>
        <div className="sol">
          <div className="sol-lbl">{"Solution"}</div>
          <p>{"Original region: $0 \\leq x \\leq 1$, $x \\leq y \\leq 1$."}</p>
          <p>{"Redescribed: $0 \\leq y \\leq 1$, $0 \\leq x \\leq y$."}</p>
          <div className="fml">
            {"$$\\int_0^1\\int_0^y e^{y^2}\\,dx\\,dy = \\int_0^1 y\\,e^{y^2}\\,dy = \\frac{1}{2}(e-1)$$"}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionMIGlobalExtrema() {
  return (
    <section className="section" id="mi-extrema">
      <div className="sec-badge">{"Section"}</div>
      <h2 className="sec-title">{"Global Extrema on Bounded Domains"}</h2>
      <div className="box def">
        <div className="box-lbl">{"Theorem \u2014 Extreme Value Theorem"}</div>
        <p>{"The Extreme Value Theorem for functions of two variables states that if $f(x,y)$ is continuous on a closed and bounded set $D$ in $\\mathbb{R}^2$, then $f$ will absolutely attain both a global maximum and a global minimum on $D$."}</p>
        <p>{"Unlike finding local extrema where we only look at interior critical points and use the Second Derivatives Test, finding global extrema requires us to thoroughly investigate the "}<strong>{"boundary"}</strong>{" of the domain, much like checking the endpoints of an interval $[a,b]$ in single-variable calculus."}</p>
      </div>

      <div className="box thm">
        <div className="box-lbl">{"Steps to Find Global Extrema"}</div>
        <ol className="steps">
          <li><strong>{"Interior:"}</strong>{" Find all critical points of $f$ that lie strictly "}<em>{"inside"}</em>{" the region $D$ (where $f_x = 0$ and $f_y = 0$). Evaluate $f$ at these points."}</li>
          <li><strong>{"Boundary:"}</strong>{" Find the extreme values of $f$ on the boundary of $D$. This usually involves parameterizing the boundary segments to reduce $f(x,y)$ to a single-variable function, or using Lagrange Multipliers."}</li>
          <li><strong>{"Compare:"}</strong>{" The largest value found in steps 1 and 2 is the global maximum. The smallest value is the global minimum."}</li>
        </ol>
      </div>

      <div className="box exm">
        <div className="box-lbl">{"Example"}</div>
        <div className="exm-title">{"Global Extrema on a Rectangular Domain"}</div>
        <p><strong>{"Problem:"}</strong>{" Find the absolute maximum and minimum of $f(x,y) = x^2 - 2xy + 2y$ on the rectangular region $D = \\{(x,y) \\mid 0 \\le x \\le 3, 0 \\le y \\le 2\\}$."}</p>
        <div className="sol">
          <div className="sol-lbl">{"Solution"}</div>
          <p>
            <strong>{"Step 1: Evaluate interior critical points."}</strong><br/>
            {"$f_x = 2x - 2y = 0 \\implies x = y$"}<br/>
            {"$f_y = -2x + 2 = 0 \\implies x = 1$"}<br/>
            {"The only critical point is $(1,1)$, which is inside $D$."}<br/>
            {"$f(1,1) = (1)^2 - 2(1)(1) + 2(1) = 1$."}
          </p>

          <p>
            <strong>{"Step 2: Evaluate the four boundary segments."}</strong><br/>
            <em>{"Boundary 1 (Bottom, $y=0$ for $0 \\le x \\le 3$):"}</em><br/>
            {"$f(x,0) = x^2$. On $[0,3]$, this goes from $0$ to $9$."}<br/>
            <em>{"Boundary 2 (Right, $x=3$ for $0 \\le y \\le 2$):"}</em><br/>
            {"$f(3,y) = 9 - 6y + 2y = 9 - 4y$. On $[0,2]$, this is a decreasing line. Max is $9$, Min is $1$."}<br/>
            <em>{"Boundary 3 (Top, $y=2$ for $0 \\le x \\le 3$):"}</em><br/>
            {"$f(x,2) = x^2 - 4x + 4 = (x-2)^2$. On $[0,3]$, this is a parabola with a critical point at $x=2$. Values: $f(0,2) = 4$, $f(2,2) = 0$, $f(3,2) = 1$."}<br/>
            <em>{"Boundary 4 (Left, $x=0$ for $0 \\le y \\le 2$):"}</em><br/>
            {"$f(0,y) = 2y$. On $[0,2]$, this goes from $0$ to $4$."}
          </p>

          <p>
            <strong>{"Step 3: Compare all values."}</strong><br/>
            {"The values we gathered are: 1 (interior), 0, 9, 4, 1, 0."}<br/>
            <strong>{"Global Maximum:"}</strong> {"$9$ at the point $(3,0)$."}<br/>
            <strong>{"Global Minimum:"}</strong> {"$0$ at the points $(0,0)$ and $(2,2)$."}
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionMI4() {
  return (
    <section className="section" id="mi-4">
      <div className="sec-badge">{"Section"}</div>
      <h2 className="sec-title">{"Triple Integrals"}</h2>
      <p>
        {"Triple integrals extend double integrals to functions of three variables over a 3D region $E$."}
      </p>
      <div className="box def">
        <div className="box-lbl">{"Definition \u2014 Triple Integral"}</div>
        <div className="fml">
          {"$$\\iiint_E f(x,y,z)\\,dV = \\int_a^b\\int_{g_1(x)}^{g_2(x)}\\int_{h_1(x,y)}^{h_2(x,y)} f(x,y,z)\\,dz\\,dy\\,dx$$"}
        </div>
      </div>
      <RealLifeUse>
        {"Triple integrals weigh a 3D ore body from density $\\rho(x,y,z)$, compute center of mass of a machine part, and accumulate charge in a volume — density times volume, added up."}
      </RealLifeUse>
      <div className="box exm">
        <div className="box-lbl">{"Example"}</div>
        <div className="exm-title">
          {"Evaluate $\\iiint_E xyz\\,dV$ where $E=[0,1]\\times[0,2]\\times[0,3]$"}
        </div>
        <div className="sol">
          <div className="sol-lbl">{"Solution"}</div>
          <div className="fml">
            {"$$\\int_0^1\\int_0^2\\int_0^3 xyz\\,dz\\,dy\\,dx = \\int_0^1 x\\,dx\\cdot\\int_0^2 y\\,dy\\cdot\\int_0^3 z\\,dz$$"}
          </div>
          <div className="fml">
            {"$$= \\frac{1}{2}\\cdot 2\\cdot\\frac{9}{2} = \\frac{9}{2}$$"}
          </div>
        </div>
      </div>
      <div className="guide-subsection">
        <h3>{"Triple Integrals in Cartesian Coordinates"}</h3>
        <p>
          {"A triple integral extends the idea of a double integral into three dimensions. It can be used to calculate quantities such as volume, mass, and charge distributed throughout a three-dimensional region."}
        </p>
        <p>
          {"In Cartesian coordinates, the differential volume element is "}<strong>{"dV = dx dy dz"}</strong>{". Thus, a triple integral over a region E can be written as"}
        </p>
        <div className="formula">
          {"∭_E f(x, y, z) dV"}
        </div>
        <p>
          {"For a region described by rectangular bounds, the integral can be evaluated as"}
        </p>
        <div className="formula">
          {"∫_a^b ∫_c^d ∫_e^f f(x, y, z) dz dy dx"}
        </div>
        <h4>{"How to Set Up a Triple Integral"}</h4>
        <ol>
          <li>{"Identify the three-dimensional region of integration."}</li>
          <li>{"Choose the order of integration."}</li>
          <li>{"Determine the limits for the innermost variable."}</li>
          <li>{"Determine the limits for the middle variable."}</li>
          <li>{"Determine the limits for the outermost variable."}</li>
          <li>{"Write the integrand together with the appropriate volume element dV."}</li>
        </ol>
        <h4>{"Worked Example"}</h4>
        <p>
          {"Find the volume of the rectangular box "}<strong>{"0 ≤ x ≤ 2, 0 ≤ y ≤ 3, 0 ≤ z ≤ 4"}</strong>{"."}
        </p>
        <div className="formula">
          {"V = ∫_0^2 ∫_0^3 ∫_0^4 1 dz dy dx"}
        </div>
        <p>{"Evaluate from the inside outward:"}</p>
        <div className="formula">
          {"∫_0^4 1 dz = 4"}
        </div>
        <div className="formula">
          {"∫_0^3 4 dy = 12"}
        </div>
        <div className="formula">
          {"∫_0^2 12 dx = 24"}
        </div>
        <p>
          {"Therefore, the volume of the box is "}<strong>{"24 cubic units"}</strong>{". This agrees with the geometric formula "}<strong>{"2 × 3 × 4 = 24"}</strong>{"."}
        </p>
        <div className="callout">
          <strong>{"Key idea:"}</strong>{" In Cartesian coordinates, the volume element is simply "}<strong>{"dV = dx dy dz"}</strong>{". The main challenge is usually describing the region correctly and choosing appropriate limits of integration."}
        </div>
      </div>
    </section>
  );
}

function SectionMI5() {
  return (
    <section className="section" id="mi-5">
      <div className="sec-badge">{"Section"}</div>
      <h2 className="sec-title">{"Double Integrals in Polar Coordinates"}</h2>
      <p>
        {"When the region or integrand involves $x^2+y^2$, polar coordinates simplify the integral greatly."}
      </p>
      <div className="box def">
        <div className="box-lbl">{"Polar Substitution"}</div>
        <p>{"Let $x = r\\cos\\theta$, $y = r\\sin\\theta$. Then:"}</p>
        <div className="fml">
          {"$$\\iint_R f(x,y)\\,dA = \\int_\\alpha^\\beta\\int_a^b f(r\\cos\\theta, r\\sin\\theta)\\,r\\,dr\\,d\\theta$$"}
        </div>
        <p>{"Note the extra factor of $r$ — this comes from the Jacobian."}</p>
      </div>
      <div className="box exm">
        <div className="box-lbl">{"Example"}</div>
        <div className="exm-title">
          {"Evaluate $\\iint_R \\sqrt{x^2+y^2}\\,dA$ over the disk $x^2+y^2 \\leq 4$"}
        </div>
        <div className="sol">
          <div className="sol-lbl">{"Solution"}</div>
          <p>{"In polar: $\\sqrt{x^2+y^2} = r$, region is $0\\leq r\\leq 2$, $0\\leq\\theta\\leq 2\\pi$."}</p>
          <div className="fml">
            {"$$\\int_0^{2\\pi}\\int_0^2 r\\cdot r\\,dr\\,d\\theta = 2\\pi\\cdot\\frac{8}{3} = \\frac{16\\pi}{3}$$"}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionMI6() {
  return (
    <section className="section" id="mi-6">
      <div className="sec-badge">{"Section"}</div>
      <h2 className="sec-title">{"Cylindrical Coordinates"}</h2>
      <p>
        {"Cylindrical coordinates combine polar coordinates in $xy$ with the $z$-axis: $(r, \\theta, z)$ where $x=r\\cos\\theta$, $y=r\\sin\\theta$, $z=z$."}
      </p>
      <div className="box def">
        <div className="box-lbl">{"Triple Integral in Cylindrical Coordinates"}</div>
        <div className="fml">
          {"$$\\iiint_E f\\,dV = \\int_\\alpha^\\beta\\int_a^b\\int_{u_1}^{u_2} f(r\\cos\\theta,r\\sin\\theta,z)\\,r\\,dz\\,dr\\,d\\theta$$"}
        </div>
      </div>
      <div className="box exm">
        <div className="box-lbl">{"Example"}</div>
        <div className="exm-title">
          {"Find the volume of the cylinder $x^2+y^2 \\leq 4$, $0\\leq z\\leq 3$"}
        </div>
        <div className="sol">
          <div className="sol-lbl">{"Solution"}</div>
          <div className="fml">
            {"$$\\int_0^{2\\pi}\\int_0^2\\int_0^3 r\\,dz\\,dr\\,d\\theta = 2\\pi\\cdot 2\\cdot 3 = 12\\pi$$"}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionMI7() {
  return (
    <section className="section" id="mi-7">
      <div className="sec-badge">{"Section"}</div>
      <h2 className="sec-title">{"Spherical Coordinates"}</h2>
      <p>
        {"Spherical coordinates $(\\rho, \\theta, \\phi)$ describe a point by its distance from the origin, an azimuthal angle in the $xy$-plane, and a polar angle from the positive $z$-axis. They are the natural choice when a region or integrand has symmetry about a single point (e.g. spheres, cones)."}
      </p>
      <div className="box def">
        <div className="box-lbl">{"Spherical Substitution"}</div>
        <p>{"Let $x = \\rho\\sin\\phi\\cos\\theta$, $y = \\rho\\sin\\phi\\sin\\theta$, $z = \\rho\\cos\\phi$, where $\\rho \\geq 0$, $0 \\leq \\phi \\leq \\pi$, $0 \\leq \\theta \\leq 2\\pi$. Then:"}</p>
        <div className="fml">
          {"$$\\iiint_E f\\,dV = \\int\\!\\!\\int\\!\\!\\int f(\\rho\\sin\\phi\\cos\\theta, \\rho\\sin\\phi\\sin\\theta, \\rho\\cos\\phi)\\,\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$$"}
        </div>
        <p>{"The factor $\\rho^2\\sin\\phi$ is the Jacobian of the spherical transformation — larger $\\rho$ or $\\phi$ near the equator sweeps out proportionally more volume per unit change in the angles."}</p>
      </div>
      <div className="box exm">
        <div className="box-lbl">{"Example"}</div>
        <div className="exm-title">
          {"Find the volume of the solid sphere $x^2+y^2+z^2 \\leq 4$"}
        </div>
        <div className="sol">
          <div className="sol-lbl">{"Solution"}</div>
          <p>{"In spherical: $0 \\leq \\rho \\leq 2$, $0 \\leq \\phi \\leq \\pi$, $0 \\leq \\theta \\leq 2\\pi$."}</p>
          <div className="fml">
            {"$$\\int_0^{2\\pi}\\int_0^\\pi\\int_0^2 \\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta = 2\\pi\\cdot 2\\cdot\\frac{8}{3} = \\frac{32\\pi}{3}$$"}
          </div>
          <p>{"This matches the known sphere volume formula $\\frac{4}{3}\\pi r^3$ with $r=2$."}</p>
        </div>
      </div>
      <div className="box thm">
        <div className="box-lbl">{"Cylindrical vs. Spherical — When to Use Which"}</div>
        <ul className="steps">
          <li>{"Use cylindrical when the solid is symmetric about the $z$-axis (e.g. cylinders, paraboloids opening along $z$)."}</li>
          <li>{"Use spherical when the solid is symmetric about the origin (e.g. spheres, cones with vertex at the origin)."}</li>
          <li>{"A cone $z = \\sqrt{x^2+y^2}$ becomes the simple equation $\\phi = \\pi/4$ in spherical — often the deciding factor."}</li>
        </ul>
      </div>
      <div className="guide-subsection">
        <h3>{"Jacobians and Change of Variables"}</h3>
        <p>
          {"A Jacobian describes how a change of variables stretches or compresses area or volume. It is especially useful when changing from Cartesian coordinates to polar, cylindrical, or spherical coordinates."}
        </p>
        <h4>{"The Jacobian Determinant"}</h4>
        <p>{"Suppose x and y are functions of new variables u and v:"}</p>
        <div className="formula">
          {"x = x(u, v),    y = y(u, v)"}
        </div>
        <p>{"The two-dimensional Jacobian determinant is"}</p>
        <div className="formula">
          {"J = ∂(x,y)/∂(u,v) = | ∂x/∂u   ∂x/∂v | | ∂y/∂u   ∂y/∂v |"}
        </div>
        <p>{"Therefore,"}</p>
        <div className="formula">
          {"J = (∂x/∂u)(∂y/∂v) − (∂x/∂v)(∂y/∂u)"}
        </div>
        <h4>{"Change-of-Variables Formula"}</h4>
        <p>
          {"When changing variables in a double integral, the area element changes according to the absolute value of the Jacobian:"}
        </p>
        <div className="formula">
          {"dA = |J| du dv"}
        </div>
        <p>{"Thus,"}</p>
        <div className="formula">
          {"∬_R f(x,y) dA = ∬_S f(x(u,v), y(u,v)) |J| du dv"}
        </div>
        <div className="callout">
          <strong>{"Why the absolute value?"}</strong>{" The Jacobian can be negative when the transformation reverses orientation, but area and volume must remain nonnegative. Therefore, the change-of-variables formula uses "}<strong>{"|J|"}</strong>{"."}
        </div>
        <h4>{"Worked Example — Polar Coordinates"}</h4>
        <p>{"For polar coordinates,"}</p>
        <div className="formula">
          {"x = r cos(θ),    y = r sin(θ)"}
        </div>
        <p>{"The Jacobian is"}</p>
        <div className="formula">
          {"J = ∂(x,y)/∂(r,θ) = | cos(θ)   −r sin(θ) | | sin(θ)    r cos(θ) |"}
        </div>
        <p>{"Computing the determinant gives"}</p>
        <div className="formula">
          {"J = r cos²(θ) + r sin²(θ) = r"}
        </div>
        <p>{"Therefore,"}</p>
        <div className="formula">
          {"dA = r dr dθ"}
        </div>
        <p>
          {"This explains why the factor "}<strong>{"r"}</strong>{" appears in polar coordinate double integrals."}
        </p>
        <h4>{"Jacobian Workflow"}</h4>
        <ol>
          <li>{"Define the transformation between the old and new variables."}</li>
          <li>{"Compute all required partial derivatives."}</li>
          <li>{"Form the Jacobian determinant."}</li>
          <li>{"Take its absolute value when applying the change-of-variables formula."}</li>
          <li>{"Transform the region of integration into the new variables."}</li>
          <li>{"Replace the original area or volume element with the transformed element."}</li>
        </ol>
        <div className="callout">
          <strong>{"Key idea:"}</strong>{" A Jacobian is the scaling factor that accounts for how a coordinate transformation changes area or volume. In polar coordinates, it produces the familiar factor "}<strong>{"r"}</strong>{"; in cylindrical and spherical coordinates, the corresponding volume factors arise from the three-dimensional Jacobian."}
        </div>
      </div>
      <div className="guide-subsection">
        <h3>{"Three-Dimensional Jacobians"}</h3>
        <p>
          {"The same change-of-variables idea extends to triple integrals. When transforming from Cartesian coordinates to another coordinate system, the three-dimensional Jacobian determines how the volume element changes."}
        </p>
        <h4>{"Cylindrical Coordinates"}</h4>
        <p>{"The transformation from Cartesian to cylindrical coordinates is"}</p>
        <div className="formula">
          {"x = r cos(θ),    y = r sin(θ),    z = z"}
        </div>
        <p>{"The corresponding three-dimensional Jacobian is"}</p>
        <div className="formula">
          {"∂(x,y,z)/∂(r,θ,z) = r"}
        </div>
        <p>{"Therefore, the Cartesian volume element becomes"}</p>
        <div className="formula">
          {"dV = r dr dθ dz"}
        </div>
        <h4>{"Spherical Coordinates"}</h4>
        <p>{"In spherical coordinates,"}</p>
        <div className="formula">{"x = ρ sin(φ) cos(θ)"}</div>
        <div className="formula">{"y = ρ sin(φ) sin(θ)"}</div>
        <div className="formula">{"z = ρ cos(φ)"}</div>
        <p>{"The three-dimensional Jacobian for this transformation is"}</p>
        <div className="formula">
          {"∂(x,y,z)/∂(ρ,φ,θ) = ρ² sin(φ)"}
        </div>
        <p>{"Therefore, the volume element becomes"}</p>
        <div className="formula">
          {"dV = ρ² sin(φ) dρ dφ dθ"}
        </div>
        <h4>{"Choosing the Coordinate System"}</h4>
        <ul>
          <li>
            <strong>{"Cartesian:"}</strong>{" Best for boxes and regions bounded by planes such as x = a, y = b, and z = c."}
          </li>
          <li>
            <strong>{"Cylindrical:"}</strong>{" Useful for regions with circular symmetry around the z-axis, such as cylinders and circular paraboloids."}
          </li>
          <li>
            <strong>{"Spherical:"}</strong>{" Useful for regions with spherical symmetry, such as spheres and spherical shells."}
          </li>
        </ul>
        <h4>{"Coordinate Transformation Workflow"}</h4>
        <ol>
          <li>{"Identify the geometric symmetry of the region."}</li>
          <li>{"Choose Cartesian, cylindrical, or spherical coordinates."}</li>
          <li>{"Transform the coordinates and the boundaries of the region."}</li>
          <li>{"Rewrite the integrand using the new variables."}</li>
          <li>{"Replace dV with the appropriate Jacobian factor."}</li>
          <li>{"Evaluate the transformed triple integral."}</li>
        </ol>
        <div className="callout">
          <strong>{"Key idea:"}</strong>{" A coordinate transformation changes not only the variables and the limits of integration, but also the differential volume element. The Jacobian supplies the required scaling factor."}
        </div>
      </div>
    </section>
  );
}

function SectionMIParametricFlux() {
  return (
    <section className="section" id="mi-flux">
      <div className="sec-badge">{"Section"}</div>
      <h2 className="sec-title">{"Parametric Surface Flux"}</h2>
      <div className="box def">
        <div className="box-lbl">{"Flux Over General Parametric Surfaces"}</div>
        <p>{"When calculating the surface integral of a vector field (Flux) $\\iint_S \\mathbf{F} \\cdot d\\mathbf{S}$, if the surface $S$ is given by a general parameterization $\\mathbf{r}(u,v)$ on a domain $D$, the vector differential area element expands to:"}</p>
        <div className="fml">
          {"$$d\\mathbf{S} = (\\mathbf{r}_u \\times \\mathbf{r}_v) \\, du \\, dv$$"}
        </div>
        <p>{"Therefore, the flux integral becomes a standard double integral over $D$:"}</p>
        <div className="fml">
          {"$$\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iint_D \\mathbf{F}(\\mathbf{r}(u,v)) \\cdot (\\mathbf{r}_u \\times \\mathbf{r}_v) \\, dA$$"}
        </div>
        <p><strong>{"Orientation Check:"}</strong>{" The normal vector $\\mathbf{r}_u \\times \\mathbf{r}_v$ determines the orientation. If the problem specifies an \"upward\" or \"outward\" orientation and your cross product points the opposite way, you must multiply the integral by $-1$ (or swap to $\\mathbf{r}_v \\times \\mathbf{r}_u$)."}</p>
      </div>

      <div className="box exm">
        <div className="box-lbl">{"Example"}</div>
        <div className="exm-title">{"Calculating Flux through a Parametric Surface"}</div>
        <p><strong>{"Problem:"}</strong>{" Evaluate the flux of $\\mathbf{F}(x,y,z) = \\langle 0, 0, z \\rangle$ across the portion of the paraboloid $z = 4 - x^2 - y^2$ that lies above the xy-plane, oriented upward."}</p>
        <div className="sol">
          <div className="sol-lbl">{"Solution"}</div>
          <p>
            <strong>{"Step 1: Parameterize the surface."}</strong><br/>
            {"We can use $x$ and $y$ as parameters directly. Let $u=x, v=y$."}<br/>
            {"$\\mathbf{r}(x,y) = \\langle x, y, 4 - x^2 - y^2 \\rangle$."}<br/>
            {"The domain $D$ is where $z \\ge 0$, which is the disk $x^2 + y^2 \\le 4$."}
          </p>

          <p>
            <strong>{"Step 2: Find the normal vector $\\mathbf{r}_x \\times \\mathbf{r}_y$."}</strong><br/>
            {"$\\mathbf{r}_x = \\langle 1, 0, -2x \\rangle$"}<br/>
            {"$\\mathbf{r}_y = \\langle 0, 1, -2y \\rangle$"}<br/>
            {"$\\mathbf{r}_x \\times \\mathbf{r}_y = \\langle 2x, 2y, 1 \\rangle$."}<br/>
            <em>{"Check orientation:"}</em>{" The z-component is positive (1), so this correctly points upward."}
          </p>

          <p>
            <strong>{"Step 3: Setup the dot product."}</strong><br/>
            {"Substitute the parameterization into $\\mathbf{F}$:"}<br/>
            {"$\\mathbf{F}(\\mathbf{r}(x,y)) = \\langle 0, 0, 4 - x^2 - y^2 \\rangle$"}<br/>
            {"$\\mathbf{F} \\cdot (\\mathbf{r}_x \\times \\mathbf{r}_y) = (0)(2x) + (0)(2y) + (4 - x^2 - y^2)(1) = 4 - x^2 - y^2$."}
          </p>

          <p>
            <strong>{"Step 4: Evaluate the double integral over $D$."}</strong><br/>
            {"Because the domain $D$ is the disk $x^2 + y^2 \\le 4$, we switch to polar coordinates ($x^2 + y^2 = r^2$, $dA = r \\, dr \\, d\\theta$):"}<br/>
            {"$$\\iint_D (4 - x^2 - y^2) \\, dA = \\int_0^{2\\pi} \\int_0^2 (4 - r^2) r \\, dr \\, d\\theta$$"}<br/>
            {"Inner integral: $\\int_0^2 (4r - r^3) \\, dr = [2r^2 - \\frac{1}{4}r^4]_0^2 = 4$."}<br/>
            {"Outer integral: $\\int_0^{2\\pi} 4 \\, d\\theta = 8\\pi$."}<br/>
            <strong>{"Total Flux:"}</strong>{" $8\\pi$."}
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionMIEnrichment() {
  return (
    <section className="section" id="mi-enrich">
      <div className="sec-badge">{"Deeper Dive"}</div>
      <h2 className="sec-title">{"Order Changes and Jacobians"}</h2>
      <p>
        {"Redrawing $R$ is mandatory before flipping $dx\\,dy$ order. Coordinate changes (polar, cylindrical) add a Jacobian absolute value and rewrite both integrand and limits."}
      </p>
      <div className="box def">
        <div className="box-lbl">{"Theory"}</div>
        <p>{"Fubini needs the integral of $|f|$ finite (or continuous on a closed bounded rectangle). Polar contributes the factor $r$ because area elements grow with radius."}</p>
      </div>
      <div className="box exm">
        <div className="box-lbl">{"Worked Example"}</div>
        <div className="exm-title">{"Area of unit disk via polar."}</div>
        <div className="sol">
          <div className="sol-lbl">{"Solution"}</div>
          <p>{"$\\int_0^{2\\pi}\\int_0^1 r\\,dr\\,d\\theta = 2\\pi\\cdot\\tfrac{1}{2}=\\pi$."}</p>
        </div>
      </div>
    </section>
  );
}

function SectionRealWorld() {
  return (
    <section className="section" id="mi-real-world">
      <div className="sec-badge">{"Applications"}</div>
      <h2 className="sec-title">{"Where This Shows Up in Real Life"}</h2>
      <div className="box def">
        <div className="box-lbl">{"Real-World Use"}</div>
        <p>
          {"Double and triple integrals are how engineers compute "}
          <strong>{"mass, center of mass, and moments of inertia"}</strong>
          {" for irregularly shaped objects \u2014 a car's crankshaft, an aircraft wing, a bridge girder \u2014 by integrating density over the exact 3D region, exactly the setup we used for volume."}
        </p>
        <p>
          {"In probability and statistics, a joint probability density function over two or more variables is integrated over a region to find the probability of an event \u2014 the same double-integral machinery from this guide, just with a density function instead of $1$. CAD and 3D-printing software use triple integrals in cylindrical and spherical coordinates constantly, since so many manufactured parts (pipes, domes, gears) have exactly that kind of rotational symmetry."}
        </p>
      </div>
    </section>
  );
}

function GuideFooter() {
  return (
    <div className="pg-foot">
      <p>{"End of Multiple Integrals guide."}</p>
    </div>
  );
}

function IntegralsContent({ part }) {
  if (part === 1) {
    return (
      <>
        <GuideSidebarPart1 />
        <main className="main">
          <GuideHeaderPart1 />
          <TableOfContentsPart1 />
          <Divider />
          <OpeningNote />
          <Divider />
          <SectionMI1 />
          <Divider />
          <SectionMI2 />
          <Divider />
          <SectionMI3 />
          <Divider />
          <SectionMIGlobalExtrema />
          <Divider />
          <SectionMIEnrichment />
          <Divider />
          <IntegralsExtendedPart1 />
          <Divider />
          <GuideMcqSection id="mi-quiz1" badge="Practice" title="Multiple Integrals Part 1 Quiz" scoreId="scoreintegrals-p1" section="integrals-p1" questions={MV_INTEGRALS_P1_QUIZ} />
          <MvCertificateBoost topic="integrals" part={1} />
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
        <OpeningNote />
        <Divider />
        <SectionMI4 />
        <Divider />
        <SectionMI5 />
        <Divider />
        <SectionMI6 />
        <Divider />
        <SectionMI7 />
        <Divider />
        <SectionMIParametricFlux />
        <Divider />
        <SectionMIEnrichment />
        <Divider />
        <IntegralsExtendedPart2 />
        <Divider />
        <GuideMcqSection id="mi-quiz2" badge="Practice" title="Multiple Integrals Part 2 Quiz" scoreId="scoreintegrals-p2" section="integrals-p2" questions={MV_INTEGRALS_P2_QUIZ} />
        <MvCertificateBoost topic="integrals" part={2} />
        <Divider />
        <SectionRealWorld />
        <GuideFooter />
      </main>
    </>
  );
}

function MultipleIntegralsGuide({ part }) {
  return (
    <StudyGuideShell guideClass="partial-derivatives-guide">
      <IntegralsContent part={part} />
    </StudyGuideShell>
  );
}

export default MultipleIntegralsGuide;