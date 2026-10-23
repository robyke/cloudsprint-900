const KEYS = {
  quizResults: "cloudsprintQuizResults",
  knownTerms: "cloudsprintKnownTerms",
  reviewTerms: "cloudsprintReviewTerms",
  reviewedSummaries: "cloudsprintReviewedSummaries",
  lastPage: "cloudsprintLastPage",
};

export function getStorageItem(key, fallback) {
  try {
    const value = localStorage.getItem(key);

    if (value === null) {
      return fallback;
    }

    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

export function setStorageItem(key, value) {
  try {
    localStorage.setItem(
      key,
      JSON.stringify(value)
    );
  } catch {
    // Keep the app usable even if browser storage is unavailable.
  }
}

export function getQuizResults() {
  return getStorageItem(
    KEYS.quizResults,
    []
  );
}

export function saveQuizResults(results) {
  setStorageItem(
    KEYS.quizResults,
    results
  );
}

export function getKnownTerms() {
  return getStorageItem(
    KEYS.knownTerms,
    []
  );
}

export function saveKnownTerms(termIds) {
  setStorageItem(
    KEYS.knownTerms,
    termIds
  );
}

export function getReviewTerms() {
  return getStorageItem(
    KEYS.reviewTerms,
    []
  );
}

export function saveReviewTerms(termIds) {
  setStorageItem(
    KEYS.reviewTerms,
    termIds
  );
}

export function getReviewedSummaries() {
  return getStorageItem(
    KEYS.reviewedSummaries,
    []
  );
}

export function saveReviewedSummaries(summaryIds) {
  setStorageItem(
    KEYS.reviewedSummaries,
    summaryIds
  );
}

export function getLastPage() {
  return localStorage.getItem(
    KEYS.lastPage
  ) || "Dashboard";
}

export function saveLastPage(page) {
  try {
    localStorage.setItem(
      KEYS.lastPage,
      page
    );
  } catch {
    // Ignore browser storage errors.
  }
}

export function resetCloudSprintProgress() {
  Object.values(KEYS).forEach(
    (key) => {
      localStorage.removeItem(key);
    }
  );
}

export function calculateQuizStats() {
  const quizzes = getQuizResults();

  const answers = quizzes.flatMap(
    (quiz) => quiz.results || []
  );

  const totalQuestions =
    answers.length;

  const correctAnswers =
    answers.filter(
      (answer) => answer.correct
    ).length;

  const accuracy =
    totalQuestions === 0
      ? 0
      : Math.round(
          (correctAnswers /
            totalQuestions) *
            100
        );

  return {
    quizCount: quizzes.length,
    totalQuestions,
    correctAnswers,
    accuracy,
  };
}

export function calculateSkillScores() {
  const quizzes = getQuizResults();

  const answers = quizzes.flatMap(
    (quiz) => quiz.results || []
  );

  const skillAreas = [
    "cloud-concepts",
    "architecture-services",
    "management-governance",
  ];

  return skillAreas.map(
    (skillArea) => {
      const skillAnswers =
        answers.filter(
          (answer) =>
            answer.skillArea ===
            skillArea
        );

      const total =
        skillAnswers.length;

      const correct =
        skillAnswers.filter(
          (answer) =>
            answer.correct
        ).length;

      const accuracy =
        total === 0
          ? 0
          : Math.round(
              (correct / total) *
                100
            );

      return {
        skillArea,
        total,
        correct,
        accuracy,
      };
    }
  );
}

export function calculateReadiness() {
  const scores =
    calculateSkillScores();

  const weights = {
    "cloud-concepts": 27.5,
    "architecture-services": 37.5,
    "management-governance": 32.5,
  };

  const tested =
    scores.filter(
      (score) =>
        score.total > 0
    );

  if (tested.length === 0) {
    return 0;
  }

  const usedWeight =
    tested.reduce(
      (sum, score) =>
        sum +
        weights[score.skillArea],
      0
    );

  const weightedTotal =
    tested.reduce(
      (sum, score) =>
        sum +
        score.accuracy *
          weights[score.skillArea],
      0
    );

  return Math.round(
    weightedTotal / usedWeight
  );
}