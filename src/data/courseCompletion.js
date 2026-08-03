import { COURSES } from "./courses";

/**
 * Ordered section IDs required to earn a certificate for each course.
 * IDs must match the `sectionId` prop already passed to <SectionCompleteBar />
 * on each guide page (see CalcParts.jsx / TaylorPart2.jsx / etc).
 *
 * Only courses listed here are certificate-eligible. Add a course id + its
 * section list to light up the certificate flow for it.
 */
export const COURSE_CERTIFICATE_SECTIONS = {
  "calculus-analytical-geometry": [
    "limits-1",
    "limits-2",
    "calc-diff-1",
    "calc-diff-2",
    "calc-int-1",
    "calc-int-2",
    "taylor-1",
    "taylor-2",
  ],
};

export function getCourseTitle(courseId) {
  return COURSES.find((c) => c.id === courseId)?.title || courseId;
}

export function isCourseCertificateEligible(courseId) {
  return Object.prototype.hasOwnProperty.call(COURSE_CERTIFICATE_SECTIONS, courseId);
}

export function getRequiredSections(courseId) {
  return COURSE_CERTIFICATE_SECTIONS[courseId] || [];
}

export function getRemainingSections(courseId, completedSections = {}) {
  return getRequiredSections(courseId).filter((id) => !completedSections[id]);
}

export function isCourseComplete(courseId, completedSections = {}) {
  if (!isCourseCertificateEligible(courseId)) return false;
  return getRemainingSections(courseId, completedSections).length === 0;
}

/** True only when sectionId is the last required section for courseId. */
export function isFinalSectionOfCourse(courseId, sectionId) {
  const required = getRequiredSections(courseId);
  return required.length > 0 && required[required.length - 1] === sectionId;
}
