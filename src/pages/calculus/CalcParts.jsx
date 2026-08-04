import { useEffect } from "react";
import { useProgress } from "../../context/ProgressContext";
import BookmarkButton from "../../components/BookmarkButton";
import SectionCompleteBar from "../../components/SectionCompleteBar";
import "../GuidePart.css";
import DifferentiationGuide from "./DifferentiationGuide";
import IntegrationGuide from "./IntegrationGuide";

function CalcTopicPart({ sectionId, title, path, Guide, part, nextPath, nextLabel }) {
  const { recordVisit } = useProgress();
  useEffect(() => {
    recordVisit(sectionId);
  }, [recordVisit, sectionId]);

  return (
    <div className="guide-part-wrapper">
      <div className="guide-part-topbar">
        <div className="guide-part-info">
          <span className="guide-part-badge">Part {part} of 2</span>
          <span className="guide-part-title">{title}</span>
        </div>
        <BookmarkButton id={sectionId} title={title} path={path} />
      </div>
      <Guide part={part} />
      <SectionCompleteBar sectionId={sectionId} nextPath={nextPath} nextLabel={nextLabel} />
    </div>
  );
}

export function DiffPart1() {
  return (
    <CalcTopicPart
      sectionId="calc-diff-1"
      title="Differentiation - Part 1"
      path="/differentiation/1"
      Guide={DifferentiationGuide}
      part={1}
      nextPath="/differentiation/2"
      nextLabel="Next: Part 2 - Applications & advanced tools"
    />
  );
}

export function DiffPart2() {
  return (
    <CalcTopicPart
      sectionId="calc-diff-2"
      title="Differentiation - Part 2"
      path="/differentiation/2"
      Guide={DifferentiationGuide}
      part={2}
      nextPath="/integration/1"
      nextLabel="Next: Integration & Applications"
    />
  );
}

export function IntPart1() {
  return (
    <CalcTopicPart
      sectionId="calc-int-1"
      title="Integration - Part 1"
      path="/integration/1"
      Guide={IntegrationGuide}
      part={1}
      nextPath="/integration/2"
      nextLabel="Next: Part 2 - Techniques & improper integrals"
    />
  );
}

export function IntPart2() {
  return (
    <CalcTopicPart
      sectionId="calc-int-2"
      title="Integration - Part 2"
      path="/integration/2"
      Guide={IntegrationGuide}
      part={2}
      nextPath="/courses/calculus-analytical-geometry"
      nextLabel="Back to Calculus & Analytical Geometry hub"
    />
  );
}
