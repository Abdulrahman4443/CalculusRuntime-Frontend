export function verifyCourseCompletion(userProgress = {}, courseData = {}) {
  const completedLessons = userProgress.completedLessonIds || [];
  const quizScores = userProgress.quizScores || {};

  const requiredLessons = courseData.requiredLessonIds || [];
  const requiredQuizzes = courseData.requiredQuizzes || []; 

  const uncompletedLessons = requiredLessons.filter(
    (lessonId) => !completedLessons.includes(lessonId)
  );

  const failedQuizzes = requiredQuizzes.filter((quiz) => {
    const userScore = quizScores[quiz.id];
    return userScore === undefined || userScore < quiz.passingScore;
  });

  const totalItems = requiredLessons.length + requiredQuizzes.length;
  const completedItems = 
    (requiredLessons.length - uncompletedLessons.length) + 
    (requiredQuizzes.length - failedQuizzes.length);

  const completionPercentage = totalItems > 0 
    ? Math.round((completedItems / totalItems) * 100) 
    : 0;

  const isComplete = uncompletedLessons.length === 0 && failedQuizzes.length === 0;

  return {
    verified: isComplete,
    completionPercentage,
    missingRequirements: isComplete ? null : {
      uncompletedLessons,
      failedQuizzes: failedQuizzes.map((q) => q.id)
    }
  };
}