import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useProgress } from "../../context/ProgressContext";
import {
  getCourseTitle,
  isCourseCertificateEligible,
  getRequiredSections,
} from "../../data/courseCompletion";
import { runBackgroundVerification } from "../../services/verificationAPI";
import "./Certificate.css";

const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8002";

/**
 * Calls the backend to issue a signed certificate + QR code for a
 * completed course. Backend: POST /api/certificates/generate
 * (see routers/certificates.py — Dev 3).
 */
async function requestCertificate(accessToken, courseId, courseTitle, username) {
  const response = await fetch(`${API_URL}/api/certificates/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      course_id: courseId,
      course_title: courseTitle,
      username,
    }),
  });

  if (!response.ok) {
    let detail = "";
    try {
      detail = (await response.json()).detail || "";
    } catch {}
    throw new Error(detail || `Certificate request failed (${response.status}).`);
  }

  return response.json();
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

    setStatus("loading");
    let cancelled = false;

    (async () => {
      // Ask Dev 2's verification service whether this course is actually
      // complete before issuing anything — single source of truth instead
      // of a local ad-hoc check.
      const userProgress = {
        userId: user.id,
        completedSections: Object.keys(progress.completedSections || {}).filter(
          (id) => progress.completedSections[id]
        ),
      };
      const courseData = {
        id: courseId,
        requiredSections: getRequiredSections(courseId),
      };

      const verification = await runBackgroundVerification(userProgress, courseData);
      if (cancelled) return;

      if (!verification.verified) {
        setStatus("incomplete");
        return;
      }

      const timestamps = Object.values(progress.completedSectionTimestamps || {});
      const completedAt = timestamps.length ? Math.max(...timestamps) : Date.now();

      try {
        const data = await requestCertificate(
          user.accessToken,
          courseId,
          courseTitle,
          user.username
        );
        if (cancelled) return;
        setCertificate({
          id: data.cert_id,
          courseTitle,
          studentName: user.username,
          completedAt,
          verifyUrl: data.verify_url,
          qrImage: data.qr_png_base64,
        });
        setStatus("success");
      } catch {
        if (!cancelled) setStatus("failed");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [
    courseId,
    user,
    isHydrated,
    progress.completedSections,
    progress.completedSectionTimestamps,
    courseTitle,
  ]);

  const qrSrc = certificate?.qrImage || null;

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