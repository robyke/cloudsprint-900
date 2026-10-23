import { useMemo } from "react";
import { getAreaById } from "../data/summaries";
import "./Readiness.css";

function getSavedQuizResults() {
  try {
    return JSON.parse(
      localStorage.getItem("cloudsprintQuizResults") || "[]"
    );
  } catch {
    return [];
  }
}

function getReadinessLabel(score) {
  if (score >= 85) {
    return {
      title: "Strong Practice Readiness",
      icon: "🏆",
      message:
        "Your tracked practice performance is strong. Keep reviewing weaker areas and maintain consistency.",
    };
  }

  if (score >= 70) {
    return {
      title: "Almost Ready",
      icon: "🚀",
      message:
        "You have a solid foundation. Focus on lower-scoring skill areas before your next practice session.",
    };
  }

  if (score >= 50) {
    return {
      title: "Building Confidence",
      icon: "📈",
      message:
        "You are making progress. More focused practice will help strengthen your weaker concepts.",
    };
  }

  return {
    title: "Keep Learning",
    icon: "📚",
    message:
      "Use Quick Learn, Must-Know Terms and practice quizzes to build a stronger foundation.",
  };
}

function Readiness({ onStudy, onPractice }) {
  const quizHistory = useMemo(
    () => getSavedQuizResults(),
    []
  );

  const allAnswers = useMemo(() => {
    return quizHistory.flatMap(
      (quiz) => quiz.results || []
    );
  }, [quizHistory]);

  const skillScores = useMemo(() => {
    const areas = [
      {
        id: "cloud-concepts",
        weight: 27.5,
      },
      {
        id: "architecture-services",
        weight: 37.5,
      },
      {
        id: "management-governance",
        weight: 32.5,
      },
    ];

    return areas.map((item) => {
      const answers = allAnswers.filter(
        (answer) => answer.skillArea === item.id
      );

      const correct = answers.filter(
        (answer) => answer.correct
      ).length;

      const total = answers.length;

      const score =
        total === 0
          ? 0
          : Math.round(
              (correct / total) * 100
            );

      return {
        ...item,
        area: getAreaById(item.id),
        total,
        correct,
        score,
      };
    });
  }, [allAnswers]);

  const testedAreas = skillScores.filter(
    (skill) => skill.total > 0
  );

  const readinessScore = useMemo(() => {
    if (testedAreas.length === 0) {
      return 0;
    }

    const totalWeight = testedAreas.reduce(
      (sum, skill) => sum + skill.weight,
      0
    );

    const weightedScore =
      testedAreas.reduce(
        (sum, skill) =>
          sum + skill.score * skill.weight,
        0
      ) / totalWeight;

    return Math.round(weightedScore);
  }, [testedAreas]);

  const readiness =
    getReadinessLabel(readinessScore);

  const totalAnswered = allAnswers.length;

  const strongestArea =
    testedAreas.length > 0
      ? [...testedAreas].sort(
          (a, b) => b.score - a.score
        )[0]
      : null;

  const weakestArea =
    testedAreas.length > 0
      ? [...testedAreas].sort(
          (a, b) => a.score - b.score
        )[0]
      : null;

  if (quizHistory.length === 0) {
    return (
      <section className="readiness-page">
        <div className="readiness-hero">
          <div>
            <span className="hero-badge dark-badge">
              🎯 READINESS
            </span>

            <h3>
              Know when your practice is getting stronger.
            </h3>

            <p>
              CloudSprint estimates your practice readiness from your quiz
              performance across the three AZ-900 skill areas.
            </p>
          </div>

          <div className="readiness-empty-icon">
            📊
          </div>
        </div>

        <div className="no-performance-card">
          <div className="no-performance-icon">
            🎯
          </div>

          <p className="eyebrow">
            NO READINESS DATA YET
          </p>

          <h3>
            Complete a practice quiz first
          </h3>

          <p>
            Your readiness estimate will appear after CloudSprint has practice
            results to analyze.
          </p>

          <button onClick={onPractice}>
            Start Practice Quiz →
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="readiness-page">
      <div className="readiness-hero">
        <div>
          <span className="hero-badge dark-badge">
            🎯 READINESS
          </span>

          <h3>
            Know where you stand.
          </h3>

          <p>
            Your readiness estimate combines your tracked quiz performance
            across the AZ-900 skill areas.
          </p>
        </div>

        <div className="readiness-main-score">
          <div
            className="readiness-score-ring"
            style={{
              background: `conic-gradient(
                #67e8f9 0 ${readinessScore}%,
                rgba(255, 255, 255, 0.14) ${readinessScore}% 100%
              )`,
            }}
          >
            <div>
              <strong>
                {readinessScore}%
              </strong>

              <span>
                Practice Readiness
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="readiness-status-card">
        <div className="readiness-status-icon">
          {readiness.icon}
        </div>

        <div>
          <p className="eyebrow">
            CURRENT STATUS
          </p>

          <h3>
            {readiness.title}
          </h3>

          <p>
            {readiness.message}
          </p>
        </div>
      </div>

      <div className="readiness-metrics">
        <article>
          <span>⚡</span>

          <div>
            <p>Questions Tracked</p>

            <strong>
              {totalAnswered}
            </strong>
          </div>
        </article>

        <article>
          <span>🏆</span>

          <div>
            <p>Strongest Area</p>

            <strong>
              {strongestArea
                ? strongestArea.area?.shortTitle
                : "Not enough data"}
            </strong>
          </div>
        </article>

        <article>
          <span>🎯</span>

          <div>
            <p>Focus Next</p>

            <strong>
              {weakestArea
                ? weakestArea.area?.shortTitle
                : "Take a quiz"}
            </strong>
          </div>
        </article>
      </div>

      <div className="section-header">
        <div>
          <p className="eyebrow">
            WEIGHTED PERFORMANCE
          </p>

          <h3>
            Readiness by Skill Area
          </h3>
        </div>

        <p>
          The estimate uses approximate midpoint weighting from the official
          AZ-900 skills ranges.
        </p>
      </div>

      <div className="readiness-area-grid">
        {skillScores.map((skill) => (
          <article
            className="readiness-area-card"
            key={skill.id}
          >
            <div className="readiness-area-top">
              <div className="readiness-area-icon">
                {skill.area?.icon}
              </div>

              <span>
                {skill.area?.weight}
              </span>
            </div>

            <h4>
              {skill.area?.shortTitle}
            </h4>

            <div className="readiness-area-score">
              <strong>
                {skill.total === 0
                  ? "—"
                  : `${skill.score}%`}
              </strong>

              <span>
                {skill.correct} correct of {skill.total}
              </span>
            </div>

            <div className="readiness-area-track">
              <span
                style={{
                  width: `${
                    skill.total === 0
                      ? 0
                      : skill.score
                  }%`,
                }}
              ></span>
            </div>

            <button
              onClick={() => onStudy(skill.id)}
            >
              Review This Area →
            </button>
          </article>
        ))}
      </div>

      <div className="readiness-scale">
        <div>
          <span className="scale-dot red"></span>

          <div>
            <strong>0–49%</strong>
            <p>Keep Learning</p>
          </div>
        </div>

        <div>
          <span className="scale-dot orange"></span>

          <div>
            <strong>50–69%</strong>
            <p>Building Confidence</p>
          </div>
        </div>

        <div>
          <span className="scale-dot blue"></span>

          <div>
            <strong>70–84%</strong>
            <p>Almost Ready</p>
          </div>
        </div>

        <div>
          <span className="scale-dot green"></span>

          <div>
            <strong>85–100%</strong>
            <p>Strong Practice Readiness</p>
          </div>
        </div>
      </div>

      <div className="readiness-focus-card">
        <div>
          <p className="eyebrow">
            YOUR NEXT MOVE
          </p>

          <h3>
            {weakestArea
              ? `Strengthen ${weakestArea.area?.shortTitle}`
              : "Keep practicing"}
          </h3>

          <p>
            {weakestArea
              ? `Your current tracked score in this area is ${weakestArea.score}%. Review the concepts, then take another quiz to measure improvement.`
              : "Complete more practice questions to improve the accuracy of your readiness estimate."}
          </p>
        </div>

        <div className="readiness-focus-actions">
          <button
            className="readiness-review-button"
            onClick={() =>
              onStudy(
                weakestArea?.id ||
                  "architecture-services"
              )
            }
          >
            📚 Review Focus Area
          </button>

          <button
            className="readiness-practice-button"
            onClick={onPractice}
          >
            ⚡ Take Another Quiz
          </button>
        </div>
      </div>

      <div className="readiness-disclaimer">
        <span>ℹ️</span>

        <p>
          <strong>Important:</strong>{" "}
          This readiness score is a CloudSprint study estimate based only on
          your practice activity. It is not an official Microsoft exam score or
          a guarantee that you will pass AZ-900.
        </p>
      </div>
    </section>
  );
}

export default Readiness;