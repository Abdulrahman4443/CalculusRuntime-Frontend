import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useProgress } from "../../context/ProgressContext";
import {
  getCourseTitle,
  isCourseCertificateEligible,
  getRemainingSections,
} from "../../data/courseCompletion";
import "./Certificate.css";

/**
 * Builds a short, shareable certificate id from user + course + date.
 * This is a local, deterministic stand-in so the view works with no
 * backend. Swap this (and the setTimeout "issue" step below) for a real
 * `GET /api/certificates/:courseId` call once Developer 2's endpoint exists —
 * everything else on this page (states, layout, QR) stays the same.
 */
function buildCertificateId(username, courseId, completedAt) {
  const raw = `${username}|${courseId}|${completedAt}`;
  let hash = 0;
  for (let i = 0; i < raw.length; i++) {
    hash = (hash * 31 + raw.charCodeAt(i)) >>> 0;
  }
  return `CR-${hash.toString(36).toUpperCase()}`;
}

function formatDate(ts) {
  return new Date(ts).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function Certificate() {
  const { courseId } = useParams();
  const { user } = useAuth();
  const { progress, isHydrated } = useProgress();

  // loading | guest | incomplete | failed | success
  const [status, setStatus] = useState("loading");
  const [certificate, setCertificate] = useState(null);

  const courseTitle = useMemo(() => getCourseTitle(courseId), [courseId]);

  useEffect(() => {
    if (!isCourseCertificateEligible(courseId)) {
      setStatus("failed");
      return undefined;
    }
    if (!isHydrated) {
      setStatus("loading");
      return undefined;
    }
    if (!user) {
      setStatus("guest");
      return undefined;
    }

    const remaining = getRemainingSections(courseId, progress.completedSections);
    if (remaining.length > 0) {
      setStatus("incomplete");
      return undefined;
    }

    setStatus("loading");
    const timestamps = Object.values(progress.completedSectionTimestamps || {});
    const completedAt = timestamps.length ? Math.max(...timestamps) : Date.now();

    // Small delay so the loading state is visible — this is also exactly
    // where a real fetch() to the backend would go.
    const timer = setTimeout(() => {
      try {
        const certId = buildCertificateId(user.username, courseId, completedAt);
        const verifyUrl = `${window.location.origin}/certificate/verify/${certId}`;
        setCertificate({
          id: certId,
          courseTitle,
          studentName: user.username,
          completedAt,
          verifyUrl,
        });
        setStatus("success");
      } catch {
        setStatus("failed");
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [
    courseId,
    user,
    isHydrated,
    progress.completedSections,
    progress.completedSectionTimestamps,
    courseTitle,
  ]);

  const qrSrc = certificate
    ? `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
        certificate.verifyUrl
      )}`
    : null;

  return (
    <div className="cert-page">
      {status === "loading" && (
        <div className="cert-state cert-state--loading">
          <div className="cert-spinner" aria-hidden="true" />
          <p>Preparing your certificate…</p>
        </div>
      )}

      {status === "guest" && (
        <div className="cert-state">
          <h2>Log in to view your certificate</h2>
          <p>Your progress is tied to your account — sign in to unlock this certificate.</p>
          <Link to="/login" className="cert-btn cert-btn--primary">
            Log in
          </Link>
        </div>
      )}

      {status === "incomplete" && (
        <div className="cert-state">
          <h2>Not finished yet</h2>
          <p>
            Complete every section of <strong>{courseTitle}</strong> to unlock your certificate.
          </p>
          <Link to={`/courses/${courseId}`} className="cert-btn cert-btn--primary">
            Back to course
          </Link>
        </div>
      )}

      {status === "failed" && (
        <div className="cert-state">
          <h2>We couldn't load this certificate</h2>
          <p>Something went wrong, or this course doesn't offer a certificate yet.</p>
          <Link to="/dashboard" className="cert-btn cert-btn--primary">
            Back to dashboard
          </Link>
        </div>
      )}

      {status === "success" && certificate && (
        <>
          <div className="cert-card" id="certificate-printable">
            <div className="cert-card-border">
              <div className="cert-seal">CR</div>
              <div className="cert-heading">Certificate of Completion</div>
              <div className="cert-sub">This certifies that</div>
              <div className="cert-name">{certificate.studentName}</div>
              <div className="cert-sub">has successfully completed</div>
              <div className="cert-course">{certificate.courseTitle}</div>

              <div className="cert-footer">
                <div className="cert-footer-block">
                  <div className="cert-footer-label">Date</div>
                  <div className="cert-footer-value">{formatDate(certificate.completedAt)}</div>
                </div>

                <div className="cert-qr-block">
                  {qrSrc && (
                    <img src={qrSrc} alt="Certificate verification QR code" className="cert-qr" />
                  )}
                  <div className="cert-footer-label">Scan to verify</div>
                </div>

                <div className="cert-footer-block">
                  <div className="cert-footer-label">Certificate ID</div>
                  <div className="cert-footer-value cert-id">{certificate.id}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="cert-actions">
            <button type="button" className="cert-btn cert-btn--primary" onClick={() => window.print()}>
              Print / Save as PDF
            </button>
            <Link to="/dashboard" className="cert-btn cert-btn--ghost">
              Back to dashboard
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Certificate;
