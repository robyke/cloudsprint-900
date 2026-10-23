import { useMemo, useState } from "react";
import { questions, quizModes } from "../data/questions";
import { getAreaById } from "../data/summaries";

function shuffleArray(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function saveQuizResult(result) {
  const existingResults = JSON.parse(
    localStorage.getItem("cloudsprintQuizResults") || "[]"
  );

  const updatedResults = [...existingResults, result];

  localStorage.setItem(
    "cloudsprintQuizResults",
    JSON.stringify(updatedResults)
  );
}

function PracticeQuiz() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [activeMode, setActiveMode] = useState(null);

  const currentQuestion = quizQuestions[currentIndex];

  const percentage = useMemo(() => {
    if (quizQuestions.length === 0) return 0;

    return Math.round(
      (score / quizQuestions.length) * 100
    );
  }, [score, quizQuestions.length]);

  const startQuiz = (mode) => {
    let selectedQuestions = [];

    if (mode.skillArea) {
      selectedQuestions = shuffleArray(
        questions.filter(
          (question) =>
            question.skillArea === mode.skillArea
        )
      );
    } else if (mode.id === "quick") {
      selectedQuestions = shuffleArray(questions).slice(
        0,
        10
      );
    } else {
      selectedQuestions = shuffleArray(questions);
    }

    setActiveMode(mode);
    setQuizQuestions(selectedQuestions);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswerSubmitted(false);
    setScore(0);
    setResults([]);
    setQuizFinished(false);
    setQuizStarted(true);
  };

  const submitAnswer = () => {
    if (
      selectedAnswer === null ||
      answerSubmitted
    ) {
      return;
    }

    const isCorrect =
      selectedAnswer === currentQuestion.correctAnswer;

    if (isCorrect) {
      setScore(
        (currentScore) => currentScore + 1
      );
    }

    setResults((currentResults) => [
      ...currentResults,
      {
        questionId: currentQuestion.id,
        skillArea: currentQuestion.skillArea,
        topic: currentQuestion.topic,
        correct: isCorrect,
        selectedAnswer,
        correctAnswer:
          currentQuestion.correctAnswer,
      },
    ]);

    setAnswerSubmitted(true);
  };

  const finishQuiz = () => {
    const finalScore =
      score +
      (selectedAnswer ===
      currentQuestion.correctAnswer
        ? 0
        : 0);

    const quizRecord = {
      id: Date.now(),
      date: new Date().toISOString(),
      mode: activeMode?.title || "Practice Quiz",
      totalQuestions: quizQuestions.length,
      correctAnswers: finalScore,
      percentage: Math.round(
        (finalScore / quizQuestions.length) * 100
      ),
      results,
    };

    saveQuizResult(quizRecord);
    setQuizFinished(true);
  };

  const nextQuestion = () => {
    if (
      currentIndex ===
      quizQuestions.length - 1
    ) {
      const quizRecord = {
        id: Date.now(),
        date: new Date().toISOString(),
        mode: activeMode?.title || "Practice Quiz",
        totalQuestions: quizQuestions.length,
        correctAnswers: score,
        percentage: Math.round(
          (score / quizQuestions.length) * 100
        ),
        results,
      };

      saveQuizResult(quizRecord);
      setQuizFinished(true);
      return;
    }

    setCurrentIndex(
      (index) => index + 1
    );

    setSelectedAnswer(null);
    setAnswerSubmitted(false);
  };

  const restartQuiz = () => {
    setQuizStarted(false);
    setQuizQuestions([]);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswerSubmitted(false);
    setScore(0);
    setResults([]);
    setQuizFinished(false);
    setActiveMode(null);
  };

  const getResultMessage = () => {
    if (percentage >= 85) {
      return {
        icon: "🏆",
        title: "Strong Practice Readiness",
        text:
          "Excellent result. Keep reviewing weaker topics so your knowledge stays balanced.",
      };
    }

    if (percentage >= 70) {
      return {
        icon: "🚀",
        title: "Almost Ready",
        text:
          "You have a solid foundation. Focus on the questions you missed before another sprint.",
      };
    }

    if (percentage >= 50) {
      return {
        icon: "📈",
        title: "Building Confidence",
        text:
          "Good progress. Review your weak topics and try another practice sprint.",
      };
    }

    return {
      icon: "📚",
      title: "Keep Learning",
      text:
        "Use Quick Learn and Must-Know Terms to strengthen the concepts you missed.",
    };
  };

  if (!quizStarted) {
    return (
      <section className="quiz-page">
        <div className="quiz-hero">
          <div>
            <span className="hero-badge dark-badge">
              ⚡ PRACTICE QUIZ
            </span>

            <h3>
              Turn Azure knowledge into confidence.
            </h3>

            <p>
              Practice with original AZ-900-style
              questions, get instant explanations
              and discover which areas need more
              attention.
            </p>
          </div>

          <div className="quiz-hero-stats">
            <div>
              <strong>
                {questions.length}
              </strong>
              <span>Questions</span>
            </div>

            <div>
              <strong>3</strong>
              <span>Skill Areas</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Original</span>
            </div>
          </div>
        </div>

        <div className="quiz-notice">
          <span>💡</span>

          <div>
            <strong>
              Practice, not prediction
            </strong>

            <p>
              These are original study questions
              based on AZ-900 learning objectives.
              They are not real Microsoft exam
              questions.
            </p>
          </div>
        </div>

        <div className="section-header">
          <div>
            <p className="eyebrow">
              CHOOSE YOUR SPRINT
            </p>

            <h3>Practice Modes</h3>
          </div>

          <p>
            Start with a quick mixed sprint or
            focus on one skill area.
          </p>
        </div>

        <div className="quiz-mode-grid">
          {quizModes.map((mode) => (
            <article
              className="quiz-mode-card"
              key={mode.id}
            >
              <div className="quiz-mode-icon">
                {mode.icon}
              </div>

              <h4>{mode.title}</h4>

              <p>{mode.description}</p>

              {mode.skillArea ? (
                <span className="quiz-mode-weight">
                  {
                    getAreaById(
                      mode.skillArea
                    )?.weight
                  }
                </span>
              ) : (
                <span className="quiz-mode-weight">
                  {mode.count} questions
                </span>
              )}

              <button
                onClick={() =>
                  startQuiz(mode)
                }
              >
                Start Practice →
              </button>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (quizFinished) {
    const message = getResultMessage();

    const incorrectResults =
      results.filter(
        (result) => !result.correct
      );

    const weakTopics = [
      ...new Set(
        incorrectResults.map(
          (result) => result.topic
        )
      ),
    ];

    return (
      <section className="quiz-page">
        <div className="quiz-result-card">
          <div className="result-icon">
            {message.icon}
          </div>

          <p className="eyebrow">
            SPRINT COMPLETE
          </p>

          <h3>{message.title}</h3>

          <div className="result-score">
            <strong>
              {percentage}%
            </strong>

            <span>
              {score} of{" "}
              {quizQuestions.length} correct
            </span>
          </div>

          <p className="result-message">
            {message.text}
          </p>

          <div className="result-progress">
            <span
              style={{
                width: `${percentage}%`,
              }}
            ></span>
          </div>

          {weakTopics.length > 0 ? (
            <div className="weak-topic-result">
              <p className="eyebrow">
                REVIEW THESE TOPICS
              </p>

              <div>
                {weakTopics.map((topic) => (
                  <span key={topic}>
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="perfect-result">
              🎉 No weak topics detected in
              this sprint.
            </div>
          )}

          <button
            className="primary-quiz-button"
            onClick={restartQuiz}
          >
            Try Another Sprint
          </button>
        </div>
      </section>
    );
  }

  const area = getAreaById(
    currentQuestion.skillArea
  );

  const isCorrect =
    selectedAnswer ===
    currentQuestion.correctAnswer;

  const progress =
    ((currentIndex + 1) /
      quizQuestions.length) *
    100;

  return (
    <section className="quiz-page">
      <div className="quiz-progress-card">
        <div className="quiz-progress-info">
          <div>
            <span>
              Question {currentIndex + 1} of{" "}
              {quizQuestions.length}
            </span>

            <strong>
              Score: {score}/
              {currentIndex +
                (answerSubmitted ? 1 : 0)}
            </strong>
          </div>

          <div className="quiz-progress-track">
            <span
              style={{
                width: `${progress}%`,
              }}
            ></span>
          </div>
        </div>
      </div>

      <article className="question-card">
        <div className="question-meta">
          <span>
            {area?.icon}{" "}
            {area?.shortTitle}
          </span>

          <span>
            {currentQuestion.topic}
          </span>

          <span>
            {currentQuestion.difficulty}
          </span>
        </div>

        <h3>
          {currentQuestion.question}
        </h3>

        <div className="answer-list">
          {currentQuestion.options.map(
            (option, index) => {
              let answerClass =
                "answer-option";

              if (
                selectedAnswer === index
              ) {
                answerClass +=
                  " selected";
              }

              if (answerSubmitted) {
                if (
                  index ===
                  currentQuestion.correctAnswer
                ) {
                  answerClass +=
                    " correct";
                } else if (
                  selectedAnswer === index &&
                  index !==
                    currentQuestion.correctAnswer
                ) {
                  answerClass +=
                    " incorrect";
                }
              }

              return (
                <button
                  key={option}
                  className={answerClass}
                  onClick={() => {
                    if (!answerSubmitted) {
                      setSelectedAnswer(
                        index
                      );
                    }
                  }}
                >
                  <span className="answer-letter">
                    {String.fromCharCode(
                      65 + index
                    )}
                  </span>

                  <span>{option}</span>

                  {answerSubmitted &&
                    index ===
                      currentQuestion.correctAnswer && (
                      <strong>✓</strong>
                    )}

                  {answerSubmitted &&
                    selectedAnswer ===
                      index &&
                    index !==
                      currentQuestion.correctAnswer && (
                      <strong>✕</strong>
                    )}
                </button>
              );
            }
          )}
        </div>

        {!answerSubmitted ? (
          <button
            className="submit-answer-button"
            disabled={
              selectedAnswer === null
            }
            onClick={submitAnswer}
          >
            Check Answer
          </button>
        ) : (
          <div
            className={
              isCorrect
                ? "answer-feedback correct-feedback"
                : "answer-feedback incorrect-feedback"
            }
          >
            <div className="feedback-title">
              <span>
                {isCorrect ? "🎉" : "💡"}
              </span>

              <strong>
                {isCorrect
                  ? "Correct!"
                  : "Not quite — learn from this one."}
              </strong>
            </div>

            <p>
              {
                currentQuestion.explanation
              }
            </p>

            {!isCorrect && (
              <div className="answer-hint">
                <strong>
                  Memory cue:
                </strong>{" "}
                {
                  currentQuestion.wrongAnswerHint
                }
              </div>
            )}

            <button
              className="next-question-button"
              onClick={nextQuestion}
            >
              {currentIndex ===
              quizQuestions.length - 1
                ? "See Results →"
                : "Next Question →"}
            </button>
          </div>
        )}
      </article>

      <div className="quiz-footer-note">
        <span>🧠</span>

        <p>
          Focus on why an answer is
          correct, not just which option
          is correct.
        </p>
      </div>
    </section>
  );
}

export default PracticeQuiz;