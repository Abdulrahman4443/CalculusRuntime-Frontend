import { useEffect } from "react";
import { useProgress } from "../../context/ProgressContext";
import BookmarkButton from "../../components/BookmarkButton";
import SectionCompleteBar from "../../components/SectionCompleteBar";
import "../GuidePart.css";
import DifferentiationGuide from "./DifferentiationGuide";
import IntegrationGuide from "./IntegrationGuide";
import SequencesSeriesGuide from "./SequencesSeriesGuide";
import ConicsGuide from "./ConicsGuide";
import LinesGuide from "./LinesGuide";
import CirclesTangentsGuide from "./CirclesTangentsGuide";
import AdvancedCalculusGuide from "./AdvancedCalculusGuide";
import DifferentialEquationsGuide from "./DifferentialEquationsGuide";

function CalcTopicPart({ sectionId, title, path, Guide, part, nextPath, nextLabel, courseId }) {
  const { recordVisit } = useProgress();
  useEffect(() => {
    recordVisit(sectionId);
  }, [recordVisit, sectionId]);

  return (
    <div className="guide-part-wrapper">
      <div className="guide-part-topbar">
        <div className="guide-part-info">
          <span className="guide-part-badge">Section {part}</span>
          <span className="guide-part-title">{title}</span>
        </div>
        <BookmarkButton id={sectionId} title={title} path={path} />
      </div>
      <Guide part={part} />
      <SectionCompleteBar
        sectionId={sectionId}
        nextPath={nextPath}
        nextLabel={nextLabel}
        courseId={courseId}
      />
    </div>
  );
}

export function DiffPart1() {
  return (
    <CalcTopicPart
      sectionId="calc-diff-1"
      title="Differentiation — Section 1"
      path="/differentiation/1"
      Guide={DifferentiationGuide}
      part={1}
      nextPath="/differentiation/2"
      nextLabel="Applications & advanced tools"
    />
  );
}

export function DiffPart2() {
  return (
    <CalcTopicPart
      sectionId="calc-diff-2"
      title="Differentiation — Section 2"
      path="/differentiation/2"
      Guide={DifferentiationGuide}
      part={2}
      nextPath="/integration/1"
      nextLabel="Integration & Applications"
    />
  );
}

export function IntPart1() {
  return (
    <CalcTopicPart
      sectionId="calc-int-1"
      title="Integration — Section 1"
      path="/integration/1"
      Guide={IntegrationGuide}
      part={1}
      nextPath="/integration/2"
      nextLabel="Techniques & improper integrals"
    />
  );
}

export function IntPart2() {
  return (
    <CalcTopicPart
      sectionId="calc-int-2"
      title="Integration — Section 2"
      path="/integration/2"
      Guide={IntegrationGuide}
      part={2}
      nextPath="/sequences-series/1"
      nextLabel="Sequences & Infinite Series"
    />
  );
}

export function SeriesPart1() {
  return (
    <CalcTopicPart
      sectionId="calc-series-1"
      title="Sequences & Series — Section 1"
      path="/sequences-series/1"
      Guide={SequencesSeriesGuide}
      part={1}
      nextPath="/sequences-series/2"
      nextLabel="Tests & power series"
    />
  );
}

export function SeriesPart2() {
  return (
    <CalcTopicPart
      sectionId="calc-series-2"
      title="Sequences & Series — Section 2"
      path="/sequences-series/2"
      Guide={SequencesSeriesGuide}
      part={2}
      nextPath="/conic-sections/1"
      nextLabel="Conic Sections & Analytic Geometry"
    />
  );
}

export function ConicsPart1() {
  return (
    <CalcTopicPart
      sectionId="calc-conics-1"
      title="Conic Sections — Section 1"
      path="/conic-sections/1"
      Guide={ConicsGuide}
      part={1}
      nextPath="/conic-sections/2"
      nextLabel="Classification & applications"
    />
  );
}

export function ConicsPart2() {
  return (
    <CalcTopicPart
      sectionId="calc-conics-2"
      title="Conic Sections — Section 2"
      path="/conic-sections/2"
      Guide={ConicsGuide}
      part={2}
      nextPath="/taylor-series/1"
      nextLabel="Taylor Series"
    />
  );
}

export function LinesPart1() {
  return (
    <CalcTopicPart
      sectionId="lines-1"
      title="Straight Lines & Analytical Geometry — Section 1"
      path="/lines-geometry/1"
      Guide={LinesGuide}
      part={1}
      nextPath="/lines-geometry/2"
      nextLabel="System of Lines & Pairs of Lines"
      courseId="calculus-analytical-geometry"
    />
  );
}

export function LinesPart2() {
  return (
    <CalcTopicPart
      sectionId="lines-2"
      title="Pairs of Straight Lines & Systems — Section 2"
      path="/lines-geometry/2"
      Guide={LinesGuide}
      part={2}
      nextPath="/circles-tangents/1"
      nextLabel="Circle & Conic Tangents"
      courseId="calculus-analytical-geometry"
    />
  );
}

export function CirclesPart1() {
  return (
    <CalcTopicPart
      sectionId="circles-1"
      title="Circle Analytic Geometry — Section 1"
      path="/circles-tangents/1"
      Guide={CirclesTangentsGuide}
      part={1}
      nextPath="/circles-tangents/2"
      nextLabel="Tangents, Normals & Conics"
      courseId="calculus-analytical-geometry"
    />
  );
}

export function CirclesPart2() {
  return (
    <CalcTopicPart
      sectionId="circles-2"
      title="Conic Tangents, Normals & Loci — Section 2"
      path="/circles-tangents/2"
      Guide={CirclesTangentsGuide}
      part={2}
      nextPath="/advanced-calculus/1"
      nextLabel="Advanced Single-Variable Calculus"
      courseId="calculus-analytical-geometry"
    />
  );
}

export function AdvCalcPart1() {
  return (
    <CalcTopicPart
      sectionId="advcalc-1"
      title="Limits, Theorems & Advanced Differentiation — Section 1"
      path="/advanced-calculus/1"
      Guide={AdvancedCalculusGuide}
      part={1}
      nextPath="/advanced-calculus/2"
      nextLabel="Hyperbolic Functions & Applied Integrals"
      courseId="calculus-analytical-geometry"
    />
  );
}

export function AdvCalcPart2() {
  return (
    <CalcTopicPart
      sectionId="advcalc-2"
      title="Hyperbolics, Curvature & Applied Integrals — Section 2"
      path="/advanced-calculus/2"
      Guide={AdvancedCalculusGuide}
      part={2}
      nextPath="/differential-equations/1"
      nextLabel="Ordinary Differential Equations"
      courseId="calculus-analytical-geometry"
    />
  );
}

export function OdePart1() {
  return (
    <CalcTopicPart
      sectionId="ode-1"
      title="First-Order Ordinary Differential Equations — Section 1"
      path="/differential-equations/1"
      Guide={DifferentialEquationsGuide}
      part={1}
      nextPath="/differential-equations/2"
      nextLabel="Higher-Order ODEs & Linear Systems"
      courseId="calculus-analytical-geometry"
    />
  );
}

export function OdePart2() {
  return (
    <CalcTopicPart
      sectionId="ode-2"
      title="Exact, Bernoulli & Second-Order ODEs — Section 2"
      path="/differential-equations/2"
      Guide={DifferentialEquationsGuide}
      part={2}
      nextPath="/courses/calculus-analytical-geometry"
      nextLabel="Course Overview"
      courseId="calculus-analytical-geometry"
    />
  );
}

