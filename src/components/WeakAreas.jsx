import { useMemo } from "react";
import { getAreaById } from "../data/summaries";

function getSavedQuizResults() {
  try {
    return JSON.parse(
      localStorage.getItem("cloudsprintQuizResults") || "[]"
    );
  } catch {
    return [];
  }
}

function getPerformanceLabel(accuracy) {
  if (accuracy >= 80) {
    return {
      label: "Strong",
      className: "strong",
      icon: "✅",
    };
  }

  if (accuracy >= 60) {
    return {
      label: "Improving",
      className: "improving",
      icon: "📈",
    };
  }

  return {
    label: "Needs Attention",
    className: "attention",
    icon: "⚠️",
  };
}

function WeakAreas({ onStudy, onPractice }) {
  const quizHistory = useMemo(
    () => getSavedQuizResults(),
    []
  );

  const allAnswers = useMemo(() => {
    return quizHistory.flatMap(
      (quiz) => quiz.results || []
    );
  }, [quizHistory]);

  const topicPerformance = useMemo(() => {
    const topicMap = {};

    allAnswers.forEach((answer) => {
      if (!topicMap[answer.topic]) {
        topicMap[answer.topic] = {
          topic: answer.topic,
          skillArea: answer.skillArea,
          total: 0,
          correct: 0,
          incorrect: 0,
        };
      }

      topicMap[answer.topic].total += 1;

      if (answer.correct) {
        topicMap[answer.topic].correct += 1;
      } else {
        topicMap[answer.topic].incorrect += 1;
      }
    });

    return Object.values(topicMap)
      .map((topic) => ({
        ...topic,
        accuracy:
          topic.total === 0
            ? 0
            : Math.round(
                (topic.correct / topic.total) * 100
              ),
      }))
      .sort((a, b) => {
        if (a.accuracy !== b.accuracy) {
          return a.accuracy - b.accuracy;
        }

        return b.total - a.total;
      });
  }, [allAnswers]);

  const skillPerformance = useMemo(() => {
    const areas = [
      "cloud-concepts",
      "architecture-services",
      "management-governance",
    ];

    return areas.map((areaId) => {
      const answers = allAnswers.filter(
        (answer) =>
          answer.skillArea === areaId
      );

      const correct = answers.filter(
        (answer) => answer.correct
      ).length;

      const total = answers.length;

      const accuracy =
        total === 0
          ? 0
          : Math.round(
              (correct / total) * 100
            );

      return {
        id: areaId,
        area: getAreaById(areaId),
        total,
        correct,
        incorrect: total - correct,
        accuracy,
      };
    });
  }, [allAnswers]);

  const totalAnswered = allAnswers.length;

  const totalCorrect = allAnswers.filter(
    (answer) => answer.correct
  ).length;

  const overallAccuracy =
    totalAnswered === 0
      ? 0
      : Math.round(
          (totalCorrect / totalAnswered) * 100
        );

  const weakTopics = topicPerformance.filter(
    (topic) =>
      topic.accuracy < 60
  );

  const improvingTopics =
    topicPerformance.filter(
      (topic) =>
        topic.accuracy >= 60 &&
        topic.accuracy < 80
    );

  const strongTopics = topicPerformance.filter(
    (topic) =>
      topic.accuracy >= 80
  );

  if (quizHistory.length === 0) {
    return (
      <section className="weak-page">
        <div className="weak-hero">
          <div>
            <span className="hero-badge dark-badge">
              🎯 WEAK AREAS
            </span>

            <h3>
              Know what to study next.
            </h3>

            <p>
              CloudSprint analyzes your practice
              answers and turns mistakes into a
              focused revision plan.
            </p>
          </div>

          <div className="weak-hero-icon">
            🧠
          </div>
        </div>

        <div className="no-performance-card">
          <div className="no-performance-icon">
            📊
          </div>

          <p className="eyebrow">
            NO PRACTICE DATA YET
          </p>

          <h3>
            Complete a quiz first
          </h3>

          <p>
            Your weak areas will appear here
            after you answer practice questions.
          </p>

          <button onClick={onPractice}>
            Start Practice Quiz →
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="weak-page">
      <div className="weak-hero">
        <div>
          <span className="hero-badge dark-badge">
            🎯 WEAK AREAS
          </span>

          <h3>
            Focus where it matters most.
          </h3>

          <p>
            Your quiz history is converted into
            topic-level performance so you can
            spend less time guessing what to
            revise.
          </p>
        </div>

        <div className="weak-summary-card">
          <div>
            <strong>
              {overallAccuracy}%
            </strong>

            <span>
              Overall Accuracy
            </span>
          </div>

          <div>
            <strong>
              {totalAnswered}
            </strong>

            <span>
              Answers Tracked
            </span>
          </div>

          <div>
            <strong>
              {weakTopics.length}
            </strong>

            <span>
              Weak Topics
            </span>
          </div>
        </div>
      </div>

      <div className="weak-insight-banner">
        <span>💡</span>

        <div>
          <strong>
            Your study recommendation
          </strong>

          <p>
            {weakTopics.length > 0
              ? `Start with ${weakTopics[0].topic}. It currently has your lowest tracked accuracy.`
              : improvingTopics.length > 0
              ? `You have no major weak topics right now. Keep improving ${improvingTopics[0].topic}.`
              : "Your tracked topics are currently strong. Keep practicing to maintain your performance."}
          </p>
        </div>
      </div>

      <div className="section-header">
        <div>
          <p className="eyebrow">
            SKILL AREA PERFORMANCE
          </p>

          <h3>
            Your AZ-900 Progress
          </h3>
        </div>

        <p>
          Based only on questions you have
          completed in CloudSprint.
        </p>
      </div>

      <div className="weak-skill-grid">
        {skillPerformance.map(
          (skill) => {
            const performance =
              getPerformanceLabel(
                skill.accuracy
              );

            return (
              <article
                className="weak-skill-card"
                key={skill.id}
              >
                <div className="weak-skill-top">
                  <div className="weak-skill-icon">
                    {skill.area?.icon}
                  </div>

                  <span
                    className={`performance-badge ${performance.className}`}
                  >
                    {performance.icon}{" "}
                    {skill.total === 0
                      ? "Not Tested"
                      : performance.label}
                  </span>
                </div>

                <p className="skill-weight">
                  {skill.area?.weight} of exam skills
                </p>

                <h4>
                  {skill.area?.shortTitle}
                </h4>

                <div className="weak-skill-score">
                  <strong>
                    {skill.total === 0
                      ? "—"
                      : `${skill.accuracy}%`}
                  </strong>

                  <span>
                    {skill.correct} correct of{" "}
                    {skill.total}
                  </span>
                </div>

                <div className="weak-progress-track">
                  <span
                    style={{
                      width: `${
                        skill.total === 0
                          ? 0
                          : skill.accuracy
                      }%`,
                    }}
                  ></span>
                </div>

                <div className="weak-skill-actions">
                  <button
                    onClick={() =>
                      onStudy(skill.id)
                    }
                  >
                    Review
                  </button>

                  <button
                    onClick={onPractice}
                  >
                    Practice
                  </button>
                </div>
              </article>
            );
          }
        )}
      </div>

      <div className="section-header">
        <div>
          <p className="eyebrow">
            TOPIC BREAKDOWN
          </p>

          <h3>
            What needs attention?
          </h3>
        </div>

        <p>
          Below 60% needs attention, 60–79%
          is improving, and 80%+ is strong.
        </p>
      </div>

      <div className="topic-performance-list">
        {topicPerformance.map(
          (topic, index) => {
            const performance =
              getPerformanceLabel(
                topic.accuracy
              );

            const area = getAreaById(
              topic.skillArea
            );

            return (
              <article
                className="topic-performance-card"
                key={`${topic.topic}-${index}`}
              >
                <div className="topic-performance-main">
                  <div className="topic-rank">
                    {index + 1}
                  </div>

                  <div className="topic-performance-info">
                    <span>
                      {area?.icon}{" "}
                      {area?.shortTitle}
                    </span>

                    <h4>
                      {topic.topic}
                    </h4>

                    <div className="topic-mini-stats">
                      <span>
                        {topic.total} answered
                      </span>

                      <span>
                        {topic.correct} correct
                      </span>

                      <span>
                        {topic.incorrect} incorrect
                      </span>
                    </div>
                  </div>

                  <div className="topic-accuracy">
                    <strong>
                      {topic.accuracy}%
                    </strong>

                    <span
                      className={`performance-badge ${performance.className}`}
                    >
                      {performance.label}
                    </span>
                  </div>
                </div>

                <div className="topic-progress-track">
                  <span
                    style={{
                      width: `${topic.accuracy}%`,
                    }}
                  ></span>
                </div>
              </article>
            );
          }
        )}
      </div>

      <div className="weak-groups">
        <article className="weak-group attention-group">
          <div className="weak-group-heading">
            <span>⚠️</span>

            <div>
              <p className="eyebrow">
                PRIORITY
              </p>

              <h3>
                Needs Attention
              </h3>
            </div>
          </div>

          {weakTopics.length > 0 ? (
            <div className="weak-topic-chips">
              {weakTopics.map(
                (topic) => (
                  <span
                    key={topic.topic}
                  >
                    {topic.topic} •{" "}
                    {topic.accuracy}%
                  </span>
                )
              )}
            </div>
          ) : (
            <p className="group-empty">
              No topics below 60%.
            </p>
          )}
        </article>

        <article className="weak-group improving-group">
          <div className="weak-group-heading">
            <span>📈</span>

            <div>
              <p className="eyebrow">
                PROGRESSING
              </p>

              <h3>
                Improving
              </h3>
            </div>
          </div>

          {improvingTopics.length > 0 ? (
            <div className="weak-topic-chips">
              {improvingTopics.map(
                (topic) => (
                  <span
                    key={topic.topic}
                  >
                    {topic.topic} •{" "}
                    {topic.accuracy}%
                  </span>
                )
              )}
            </div>
          ) : (
            <p className="group-empty">
              No topics in this range yet.
            </p>
          )}
        </article>

        <article className="weak-group strong-group">
          <div className="weak-group-heading">
            <span>✅</span>

            <div>
              <p className="eyebrow">
                DOING WELL
              </p>

              <h3>
                Strong
              </h3>
            </div>
          </div>

          {strongTopics.length > 0 ? (
            <div className="weak-topic-chips">
              {strongTopics.map(
                (topic) => (
                  <span
                    key={topic.topic}
                  >
                    {topic.topic} •{" "}
                    {topic.accuracy}%
                  </span>
                )
              )}
            </div>
          ) : (
            <p className="group-empty">
              Keep practicing to build strong
              topics.
            </p>
          )}
        </article>
      </div>

      <div className="weak-action-banner">
        <div>
          <p className="eyebrow">
            NEXT BEST ACTION
          </p>

          <h3>
            Turn weak spots into points.
          </h3>

          <p>
            Review the concepts you missed,
            then take another sprint to see
            whether your accuracy improves.
          </p>
        </div>

        <div className="weak-action-buttons">
          <button
            className="weak-review-button"
            onClick={() =>
              onStudy(
                weakTopics[0]?.skillArea ||
                  "architecture-services"
              )
            }
          >
            📚 Review Weakest Area
          </button>

          <button
            className="weak-practice-button"
            onClick={onPractice}
          >
            ⚡ Practice Again
          </button>
        </div>
      </div>
    </section>
  );
}

export default WeakAreas;