import { useEffect, useMemo, useState } from "react";
import "./App.css";
import {
  studyAreas,
  summaries,
  getAreaById,
  getSummariesByArea,
} from "./data/summaries";
import { terms } from "./data/terms";
import PracticeQuiz from "./components/PracticeQuiz";
import WeakAreas from "./components/WeakAreas";
import Readiness from "./components/Readiness";
import About from "./components/About";
import {
  getKnownTerms,
  saveKnownTerms,
  getReviewTerms,
  saveReviewTerms,
  getReviewedSummaries,
  saveReviewedSummaries,
  getLastPage,
  saveLastPage,
  calculateQuizStats,
  calculateReadiness,
  calculateSkillScores,
} from "./utils/storage";

const quickTopics = [
  {
    title: "IaaS vs PaaS vs SaaS",
    text: "Know who manages what. This is one of the most important AZ-900 foundations.",
    emoji: "🧩",
  },
  {
    title: "Regions vs Zones",
    text: "Regions are geographic areas. Availability zones are separate datacenter groups inside a region.",
    emoji: "🌍",
  },
  {
    title: "RBAC vs Azure Policy",
    text: "RBAC controls who can do something. Azure Policy controls what configurations are allowed.",
    emoji: "🔐",
  },
];

function getReadinessLabel(score) {
  if (score >= 85) return "Strong Practice Readiness";
  if (score >= 70) return "Almost Ready";
  if (score >= 50) return "Building Confidence";
  return "Keep Learning";
}

function App() {
  const [activePage, setActivePage] = useState(() => getLastPage());
  const [selectedArea, setSelectedArea] = useState("all");
  const [openSummary, setOpenSummary] = useState(null);

  const [termArea, setTermArea] = useState("all");
  const [termSearch, setTermSearch] = useState("");
  const [openTerm, setOpenTerm] = useState(null);

  const [knownTerms, setKnownTerms] = useState(() => getKnownTerms());
  const [reviewTerms, setReviewTerms] = useState(() => getReviewTerms());
  const [reviewedSummaries, setReviewedSummaries] = useState(() =>
    getReviewedSummaries()
  );

  const quizStats = calculateQuizStats();
  const readinessScore = calculateReadiness();
  const skillScores = calculateSkillScores();

  const navItems = [
    "Dashboard",
    "Quick Learn",
    "Must-Know Terms",
    "Practice Quiz",
    "Weak Areas",
    "Readiness",
    "About",
  ];

  useEffect(() => {
    saveLastPage(activePage);
  }, [activePage]);

  useEffect(() => {
    saveKnownTerms(knownTerms);
  }, [knownTerms]);

  useEffect(() => {
    saveReviewTerms(reviewTerms);
  }, [reviewTerms]);

  useEffect(() => {
    saveReviewedSummaries(reviewedSummaries);
  }, [reviewedSummaries]);

  const filteredSummaries = useMemo(() => {
    if (selectedArea === "all") return summaries;
    return getSummariesByArea(selectedArea);
  }, [selectedArea]);

  const filteredTerms = useMemo(() => {
    return terms.filter((term) => {
      const matchesArea =
        termArea === "all" ? true : term.area === termArea;

      const searchText = termSearch.trim().toLowerCase();

      const matchesSearch =
        searchText === "" ||
        term.term.toLowerCase().includes(searchText) ||
        term.definition.toLowerCase().includes(searchText) ||
        term.example.toLowerCase().includes(searchText);

      return matchesArea && matchesSearch;
    });
  }, [termArea, termSearch]);

  const markKnown = (id) => {
    setKnownTerms((current) =>
      current.includes(id) ? current.filter((termId) => termId !== id) : [...current, id]
    );

    setReviewTerms((current) =>
      current.filter((termId) => termId !== id)
    );
  };

  const markReview = (id) => {
    setReviewTerms((current) =>
      current.includes(id) ? current.filter((termId) => termId !== id) : [...current, id]
    );

    setKnownTerms((current) =>
      current.filter((termId) => termId !== id)
    );
  };

  const toggleReviewedSummary = (id) => {
    setReviewedSummaries((current) =>
      current.includes(id)
        ? current.filter((summaryId) => summaryId !== id)
        : [...current, id]
    );
  };

  const currentPageTitle =
    activePage === "Dashboard" ? "Dashboard" : activePage;

  const handleStudyArea = (areaId) => {
    setSelectedArea(areaId);
    setActivePage("Quick Learn");
  };

  const handlePractice = () => {
    setActivePage("Practice Quiz");
  };

  const getSkillProgress = (skillId) => {
    const skill = skillScores.find(
      (item) => item.skillArea === skillId
    );

    return skill?.total > 0 ? skill.accuracy : 0;
  };

  const weakestSkill = [...skillScores]
    .filter((skill) => skill.total > 0)
    .sort((a, b) => a.accuracy - b.accuracy)[0];

  const weakestArea = weakestSkill
    ? getAreaById(weakestSkill.skillArea)
    : getAreaById("architecture-services");

  const stats = [
    {
      label: "Readiness",
      value: `${readinessScore}%`,
      icon: "🎯",
    },
    {
      label: "Questions",
      value: quizStats.totalQuestions,
      icon: "⚡",
    },
    {
      label: "Accuracy",
      value: `${quizStats.accuracy}%`,
      icon: "📈",
    },
    {
      label: "Reviewed",
      value: reviewedSummaries.length,
      icon: "📚",
    },
  ];

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">☁</div>

          <div>
            <h1>CloudSprint</h1>
            <span>900</span>
          </div>
        </div>

        <nav>
          {navItems.map((item) => (
            <button
              key={item}
              className={activePage === item ? "nav-item active" : "nav-item"}
              onClick={() => setActivePage(item)}
            >
              <span className="nav-dot"></span>
              {item}
            </button>
          ))}
        </nav>

        <div className="sidebar-card">
          <div className="streak-icon">🎯</div>

          <strong>
            {readinessScore}% practice readiness
          </strong>

          <p>
            {quizStats.totalQuestions > 0
              ? `${quizStats.totalQuestions} questions tracked so far.`
              : "Take a quiz to start tracking your progress."}
          </p>
        </div>

        <div className="sidebar-footer">
          <p>Unofficial AZ-900 Study Tool</p>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="eyebrow">AZ-900 LEARNING DASHBOARD</p>
            <h2>{currentPageTitle}</h2>
          </div>

          <div className="top-actions">
            <div className="xp-pill">
              ⚡ {quizStats.correctAnswers * 10} XP
            </div>

            <button className="profile-button">
              RK
            </button>
          </div>
        </header>

        {activePage === "Dashboard" && (
          <>
            <section className="hero">
              <div className="hero-copy">
                <span className="hero-badge">
                  🚀 Your Azure sprint starts here
                </span>

                <h3>
                  Learn smarter.
                  <br />
                  <span>Pass with confidence.</span>
                </h3>

                <p>
                  Quick summaries, original practice questions, weak-area
                  tracking and a readiness score built around the AZ-900 skills
                  outline.
                </p>

                <div className="hero-buttons">
                  <button
                    className="primary-button"
                    onClick={() => setActivePage("Practice Quiz")}
                  >
                    ⚡ Start Quick Sprint
                  </button>

                  <button
                    className="secondary-button"
                    onClick={() => setActivePage("Quick Learn")}
                  >
                    📚 Continue Learning
                  </button>
                </div>
              </div>

              <div className="hero-visual">
                <div className="readiness-card">
                  <div
                    className="readiness-ring"
                    style={{
                      background: `conic-gradient(
                        #67e8f9 0 ${readinessScore}%,
                        rgba(255, 255, 255, 0.14) ${readinessScore}% 100%
                      )`,
                    }}
                  >
                    <div>
                      <strong>{readinessScore}%</strong>
                      <span>Ready</span>
                    </div>
                  </div>

                  <h4>{getReadinessLabel(readinessScore)}</h4>

                  <p>
                    {quizStats.totalQuestions > 0
                      ? "Based on your saved practice activity."
                      : "Complete a quiz to start measuring progress."}
                  </p>

                  <div className="mini-progress">
                    <span
                      style={{
                        width: `${readinessScore}%`,
                      }}
                    ></span>
                  </div>
                </div>

                <div className="floating-card card-one">
                  ⚡ {quizStats.totalQuestions} answers tracked
                </div>

                <div className="floating-card card-two">
                  🏆 {quizStats.correctAnswers} correct
                </div>
              </div>
            </section>

            <section className="stats-grid">
              {stats.map((stat) => (
                <article className="stat-card" key={stat.label}>
                  <div className="stat-icon">{stat.icon}</div>

                  <div>
                    <p>{stat.label}</p>
                    <strong>{stat.value}</strong>
                  </div>
                </article>
              ))}
            </section>

            <section className="section-header">
              <div>
                <p className="eyebrow">YOUR LEARNING PATH</p>
                <h3>AZ-900 Skill Areas</h3>
              </div>

              <p>
                Focus your revision according to the official skills weighting.
              </p>
            </section>

            <section className="skills-grid">
              {studyAreas.map((skill) => {
                const progress = getSkillProgress(skill.id);

                return (
                  <article className="skill-card" key={skill.id}>
                    <div className="skill-top">
                      <div className="skill-icon">
                        {skill.icon}
                      </div>

                      {skill.badge && (
                        <span className="weight-badge">
                          {skill.badge}
                        </span>
                      )}
                    </div>

                    <p className="skill-weight">
                      {skill.weight} of exam skills
                    </p>

                    <h4>{skill.title}</h4>

                    <p className="skill-description">
                      {skill.description}
                    </p>

                    <div className="skill-progress-heading">
                      <span>Your practice score</span>
                      <strong>{progress}%</strong>
                    </div>

                    <div className="progress-bar">
                      <span
                        style={{
                          width: `${progress}%`,
                        }}
                      ></span>
                    </div>

                    <div className="skill-buttons">
                      <button
                        onClick={() => {
                          setSelectedArea(skill.id);
                          setActivePage("Quick Learn");
                        }}
                      >
                        Study Topic
                      </button>

                      <button
                        className="outline-button"
                        onClick={() =>
                          setActivePage("Practice Quiz")
                        }
                      >
                        Practice
                      </button>
                    </div>
                  </article>
                );
              })}
            </section>

            <section className="bottom-grid">
              <article className="focus-card">
                <div className="focus-heading">
                  <div>
                    <p className="eyebrow">RECOMMENDED NEXT</p>
                    <h3>Continue Learning</h3>
                  </div>

                  <span>🎯</span>
                </div>

                <div className="focus-content">
                  <div>
                    <span className="small-badge">
                      Focus area
                    </span>

                    <h4>{weakestArea?.shortTitle}</h4>

                    <p>
                      Review this area, then return to Practice Quiz to measure
                      your improvement.
                    </p>
                  </div>

                  <button
                    className="primary-button"
                    onClick={() =>
                      handleStudyArea(
                        weakestArea?.id || "architecture-services"
                      )
                    }
                  >
                    Review Now →
                  </button>
                </div>
              </article>

              <article className="exam-focus-card">
                <p className="eyebrow">QUICK EXAM FOCUS</p>
                <h3>Architecture & Services</h3>

                <strong>35–40%</strong>

                <p>
                  This is the highest-weighted AZ-900 skill area. Give it extra
                  attention without ignoring the other sections.
                </p>
              </article>
            </section>

            <section className="section-header topics-heading">
              <div>
                <p className="eyebrow">FAST REVISION</p>
                <h3>Common Confusions</h3>
              </div>
            </section>

            <section className="quick-topics">
              {quickTopics.map((topic) => (
                <article key={topic.title}>
                  <div>{topic.emoji}</div>

                  <h4>{topic.title}</h4>

                  <p>{topic.text}</p>

                  <button
                    onClick={() => setActivePage("Quick Learn")}
                  >
                    Learn the difference →
                  </button>
                </article>
              ))}
            </section>

            <section className="daily-sprint">
              <div>
                <p className="eyebrow">TODAY'S CHALLENGE</p>

                <h3>Ready for your Daily Sprint?</h3>

                <p>
                  1 quick summary • 3 key terms • 5 practice questions
                </p>
              </div>

              <button
                className="sprint-button"
                onClick={() => setActivePage("Practice Quiz")}
              >
                Start Today's Sprint ⚡
              </button>
            </section>

            <footer>
              <strong>CloudSprint 900</strong>

              <p>
                Unofficial AZ-900 study tool. Not affiliated with or endorsed
                by Microsoft.
              </p>
            </footer>
          </>
        )}

        {activePage === "Quick Learn" && (
          <section className="quick-learn-page">
            <div className="learn-hero">
              <div>
                <span className="hero-badge dark-badge">
                  📚 QUICK LEARN
                </span>

                <h3>Understand Azure without the jargon.</h3>

                <p>
                  Short explanations, simple examples, memory cues and common
                  confusions for the concepts you need to know.
                </p>
              </div>

              <div className="learn-hero-card">
                <span>⚡</span>

                <div>
                  <strong>
                    {reviewedSummaries.length}/{summaries.length} reviewed
                  </strong>

                  <p>Progress is saved automatically</p>
                </div>
              </div>
            </div>

            <div className="area-filter">
              <button
                className={selectedArea === "all" ? "active" : ""}
                onClick={() => setSelectedArea("all")}
              >
                All Topics
              </button>

              {studyAreas.map((area) => (
                <button
                  key={area.id}
                  className={selectedArea === area.id ? "active" : ""}
                  onClick={() => setSelectedArea(area.id)}
                >
                  {area.icon} {area.shortTitle}
                </button>
              ))}
            </div>

            {selectedArea !== "all" && (
              <div className="selected-area-banner">
                <div>
                  <span>{getAreaById(selectedArea)?.icon}</span>

                  <div>
                    <p className="eyebrow">CURRENT FOCUS</p>
                    <h3>{getAreaById(selectedArea)?.title}</h3>
                  </div>
                </div>

                <strong>{getAreaById(selectedArea)?.weight}</strong>
              </div>
            )}

            <div className="summary-grid">
              {filteredSummaries.map((summary) => {
                const isOpen = openSummary === summary.id;
                const area = getAreaById(summary.area);
                const reviewed = reviewedSummaries.includes(summary.id);

                return (
                  <article
                    className={isOpen ? "summary-card open" : "summary-card"}
                    key={summary.id}
                  >
                    <button
                      className="summary-main"
                      onClick={() =>
                        setOpenSummary(isOpen ? null : summary.id)
                      }
                    >
                      <div className="summary-card-icon">
                        {summary.icon}
                      </div>

                      <div className="summary-title-block">
                        <span className="summary-area">
                          {area?.shortTitle}
                        </span>

                        <h4>
                          {summary.title} {reviewed ? "✓" : ""}
                        </h4>

                        <p>{summary.meaning}</p>
                      </div>

                      <div className="summary-toggle">
                        {isOpen ? "−" : "+"}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="summary-details">
                        <div className="detail-box">
                          <span>💡</span>

                          <div>
                            <strong>Why it matters</strong>
                            <p>{summary.why}</p>
                          </div>
                        </div>

                        <div className="detail-box">
                          <span>🌍</span>

                          <div>
                            <strong>Simple example</strong>
                            <p>{summary.example}</p>
                          </div>
                        </div>

                        <div className="detail-box remember-box">
                          <span>🧠</span>

                          <div>
                            <strong>Remember this</strong>
                            <p>{summary.remember}</p>
                          </div>
                        </div>

                        <div className="detail-box confusion-box">
                          <span>⚠️</span>

                          <div>
                            <strong>Common confusion</strong>
                            <p>{summary.confusion}</p>
                          </div>
                        </div>

                        <div className="exam-tip-box">
                          <span>🎯 EXAM FOCUS</span>
                          <p>{summary.examTip}</p>
                        </div>

                        <div className="summary-actions">
                          <button
                            className="reviewed-button"
                            onClick={() =>
                              toggleReviewedSummary(summary.id)
                            }
                          >
                            {reviewed
                              ? "✓ Reviewed"
                              : "✓ Mark as Reviewed"}
                          </button>

                          <button
                            className="practice-topic-button"
                            onClick={() =>
                              setActivePage("Practice Quiz")
                            }
                          >
                            Practice This Topic →
                          </button>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {activePage === "Must-Know Terms" && (
          <section className="terms-page">
            <div className="terms-hero">
              <div>
                <span className="hero-badge dark-badge">
                  🧠 MUST-KNOW TERMS
                </span>

                <h3>Build your Azure vocabulary.</h3>

                <p>
                  Search essential AZ-900 terms, review simple definitions and
                  mark the ones you know or need to revisit.
                </p>
              </div>

              <div className="terms-score-card">
                <div>
                  <strong>{knownTerms.length}</strong>
                  <span>Know It</span>
                </div>

                <div>
                  <strong>{reviewTerms.length}</strong>
                  <span>Review Again</span>
                </div>

                <div>
                  <strong>{terms.length}</strong>
                  <span>Total Terms</span>
                </div>
              </div>
            </div>

            <div className="terms-controls">
              <div className="term-search">
                <span>🔎</span>

                <input
                  type="text"
                  placeholder="Search a term, definition or example..."
                  value={termSearch}
                  onChange={(event) => setTermSearch(event.target.value)}
                />
              </div>

              <div className="area-filter">
                <button
                  className={termArea === "all" ? "active" : ""}
                  onClick={() => setTermArea("all")}
                >
                  All Terms
                </button>

                {studyAreas.map((area) => (
                  <button
                    key={area.id}
                    className={termArea === area.id ? "active" : ""}
                    onClick={() => setTermArea(area.id)}
                  >
                    {area.icon} {area.shortTitle}
                  </button>
                ))}
              </div>
            </div>

            <div className="terms-result-row">
              <p>
                Showing <strong>{filteredTerms.length}</strong> of{" "}
                <strong>{terms.length}</strong> terms
              </p>

              {termSearch && (
                <button onClick={() => setTermSearch("")}>
                  Clear search
                </button>
              )}
            </div>

            <div className="terms-grid">
              {filteredTerms.map((term) => {
                const area = getAreaById(term.area);
                const isOpen = openTerm === term.id;
                const isKnown = knownTerms.includes(term.id);
                const needsReview = reviewTerms.includes(term.id);

                return (
                  <article
                    className={
                      isKnown
                        ? "term-card known"
                        : needsReview
                        ? "term-card review"
                        : "term-card"
                    }
                    key={term.id}
                  >
                    <button
                      className="term-card-main"
                      onClick={() => setOpenTerm(isOpen ? null : term.id)}
                    >
                      <div>
                        <span className="term-area">
                          {area?.icon} {area?.shortTitle}
                        </span>

                        <h4>{term.term}</h4>
                        <p>{term.definition}</p>
                      </div>

                      <span className="term-open-icon">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="term-details">
                        <div className="term-example">
                          <span>🌍 Simple example</span>
                          <p>{term.example}</p>
                        </div>

                        <div className="term-confusion">
                          <span>⚠️ Don't mix it up</span>
                          <p>{term.confusion}</p>
                        </div>

                        <div className="term-actions">
                          <button
                            className={
                              isKnown
                                ? "know-button selected"
                                : "know-button"
                            }
                            onClick={() => markKnown(term.id)}
                          >
                            {isKnown ? "✓ Known" : "✓ Know It"}
                          </button>

                          <button
                            className={
                              needsReview
                                ? "review-button selected"
                                : "review-button"
                            }
                            onClick={() => markReview(term.id)}
                          >
                            {needsReview
                              ? "↻ Marked for Review"
                              : "↻ Review Again"}
                          </button>
                        </div>
                      </div>
                    )}

                    {isKnown && (
                      <div className="term-status known-status">
                        ✓ You know this
                      </div>
                    )}

                    {needsReview && (
                      <div className="term-status review-status">
                        ↻ Review later
                      </div>
                    )}
                  </article>
                );
              })}
            </div>

            {filteredTerms.length === 0 && (
              <div className="empty-terms">
                <div>🔎</div>
                <h3>No terms found</h3>

                <p>
                  Try a different search word or choose another category.
                </p>

                <button onClick={() => setTermSearch("")}>
                  Show all terms
                </button>
              </div>
            )}
          </section>
        )}

        {activePage === "Practice Quiz" && <PracticeQuiz />}

        {activePage === "Weak Areas" && (
          <WeakAreas
            onStudy={handleStudyArea}
            onPractice={handlePractice}
          />
        )}

        {activePage === "Readiness" && (
          <Readiness
            onStudy={handleStudyArea}
            onPractice={handlePractice}
          />
        )}

        {activePage === "About" && <About />}
      </main>
    </div>
  );
}

export default App;