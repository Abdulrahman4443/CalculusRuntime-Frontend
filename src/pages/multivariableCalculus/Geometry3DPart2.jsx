import { useEffect } from "react";
import { useProgress } from "../../context/ProgressContext";
import BookmarkButton from "../../components/BookmarkButton";
import SectionCompleteBar from "../../components/SectionCompleteBar";
import Geometry3DGuide from "./Geometry3DGuide";
import "./GuidePart.css";

function Geometry3DPart2() {
  const { recordVisit } = useProgress();

  useEffect(() => {
    recordVisit("geo3d-2");
  }, [recordVisit]);

  return (
    <div className="guide-part-wrapper">
      <div className="guide-part-topbar">
        <div className="guide-part-info">
          <span className="guide-part-badge">Section 2</span>
          <span className="guide-part-title">3D Analytical Geometry — Lines in 3D, Skew Lines &amp; Quadric Surfaces</span>
        </div>
        <BookmarkButton
          id="geo3d-2"
          title="3D Analytical Geometry — Section 2"
          path="/3d-geometry/2"
        />
      </div>
      <Geometry3DGuide part={2} />
      <SectionCompleteBar
        sectionId="geo3d-2"
        nextPath="/courses/multivariable-calculus"
        nextLabel="Back to Multivariable Calculus"
      />
    </div>
  );
}

export default Geometry3DPart2;
