import { useEffect } from "react";
import { useProgress } from "../../context/ProgressContext";
import BookmarkButton from "../../components/BookmarkButton";
import SectionCompleteBar from "../../components/SectionCompleteBar";
import Geometry3DGuide from "./Geometry3DGuide";
import "./GuidePart.css";

function Geometry3DPart1() {
  const { recordVisit } = useProgress();

  useEffect(() => {
    recordVisit("geo3d-1");
  }, [recordVisit]);

  return (
    <div className="guide-part-wrapper">
      <div className="guide-part-topbar">
        <div className="guide-part-info">
          <span className="guide-part-badge">Section 1</span>
          <span className="guide-part-title">3D Analytical Geometry — Direction Cosines, Angle Between Lines, Planes &amp; Point-to-Plane Distance</span>
        </div>
        <BookmarkButton
          id="geo3d-1"
          title="3D Analytical Geometry — Section 1"
          path="/3d-geometry/1"
        />
      </div>
      <Geometry3DGuide part={1} />
      <SectionCompleteBar
        sectionId="geo3d-1"
        nextPath="/3d-geometry/2"
        nextLabel="Lines in 3D & Quadric Surfaces"
      />
    </div>
  );
}

export default Geometry3DPart1;
