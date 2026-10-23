import "./About.css";

function About() {
  const promptSteps = [
    {
      number: "01",
      title: "Define Simply",
      text: "Explain the Azure concept in beginner-friendly language without unnecessary jargon.",
    },
    {
      number: "02",
      title: "Use an Analogy",
      text: "Connect the concept to something familiar so the learner can form a mental picture.",
    },
    {
      number: "03",
      title: "Show an Azure Example",
      text: "Give a realistic Azure use case that stays within AZ-900 fundamentals.",
    },
    {
      number: "04",
      title: "Expose the Confusion",
      text: "Compare the concept with a commonly confused service or idea.",
    },
    {
      number: "05",
      title: "Finish with a Memory Cue",
      text: "End with one short takeaway the learner can remember during revision.",
    },
  ];

  return (
    <section className="about-page">
      <div className="about-hero">
        <div>
          <span className="hero-badge dark-badge">
            ☁️ ABOUT CLOUDSPRINT 900
          </span>

          <h3>
            Learn the terms. Focus on what matters. Know when you're ready.
          </h3>

          <p>
            CloudSprint 900 is a focused AZ-900 study companion designed for
            beginners who want simpler explanations, targeted practice and a
            clearer way to track progress.
          </p>
        </div>

        <div className="about-logo-card">
          <div className="about-logo-icon">
            ☁
          </div>

          <strong>
            CloudSprint
          </strong>

          <span>
            900
          </span>
        </div>
      </div>

      <div className="about-section">
        <div className="about-section-heading">
          <p className="eyebrow">
            THE PROBLEM
          </p>

          <h3>
            AZ-900 can feel bigger than it needs to.
          </h3>
        </div>

        <div className="about-problem-grid">
          <article>
            <span>📚</span>

            <h4>
              Too much information
            </h4>

            <p>
              Beginners often face long documentation, unfamiliar terminology
              and many Azure services at once.
            </p>
          </article>

          <article>
            <span>🤔</span>

            <h4>
              Similar concepts
            </h4>

            <p>
              Topics such as RBAC vs Policy, VPN vs ExpressRoute and IaaS vs
              PaaS can be easy to mix up.
            </p>
          </article>

          <article>
            <span>🎯</span>

            <h4>
              Unclear priorities
            </h4>

            <p>
              Learners may not know which areas deserve extra revision based on
              the official skills weighting.
            </p>
          </article>

          <article>
            <span>📈</span>

            <h4>
              Weak progress feedback
            </h4>

            <p>
              Reading alone does not clearly show which topics are strong and
              which still need practice.
            </p>
          </article>
        </div>
      </div>

      <div className="about-section">
        <div className="about-section-heading">
          <p className="eyebrow">
            THE SOLUTION
          </p>

          <h3>
            One focused study flow.
          </h3>
        </div>

        <div className="solution-flow">
          <div>
            <span>1</span>

            <strong>
              Learn
            </strong>

            <p>
              Read short explanations and simple examples.
            </p>
          </div>

          <div className="flow-arrow">
            →
          </div>

          <div>
            <span>2</span>

            <strong>
              Remember
            </strong>

            <p>
              Review must-know terms and common confusions.
            </p>
          </div>

          <div className="flow-arrow">
            →
          </div>

          <div>
            <span>3</span>

            <strong>
              Practice
            </strong>

            <p>
              Answer original questions with instant feedback.
            </p>
          </div>

          <div className="flow-arrow">
            →
          </div>

          <div>
            <span>4</span>

            <strong>
              Improve
            </strong>

            <p>
              Use weak-area tracking and readiness insights.
            </p>
          </div>
        </div>
      </div>

      <div className="about-two-column">
        <article className="about-info-card">
          <p className="eyebrow">
            TARGET USERS
          </p>

          <h3>
            Who is CloudSprint for?
          </h3>

          <div className="about-user-list">
            <div>
              <span>🌱</span>

              <p>
                Beginners learning Azure for the first time
              </p>
            </div>

            <div>
              <span>🎓</span>

              <p>
                Students preparing for AZ-900
              </p>
            </div>

            <div>
              <span>💼</span>

              <p>
                Career switchers entering cloud computing
              </p>
            </div>

            <div>
              <span>⏱️</span>

              <p>
                Busy learners who need fast revision
              </p>
            </div>
          </div>
        </article>

        <article className="about-info-card">
          <p className="eyebrow">
            LEARNING VALUE
          </p>

          <h3>
            What makes it useful?
          </h3>

          <div className="about-user-list">
            <div>
              <span>💡</span>

              <p>
                Simple explanations instead of dense wording
              </p>
            </div>

            <div>
              <span>⚠️</span>

              <p>
                Common-confusion warnings for similar Azure concepts
              </p>
            </div>

            <div>
              <span>⚡</span>

              <p>
                Immediate quiz explanations and memory cues
              </p>
            </div>

            <div>
              <span>📊</span>

              <p>
                Performance-based weak-area and readiness tracking
              </p>
            </div>
          </div>
        </article>
      </div>

      <div className="prompt-section">
        <div className="prompt-heading">
          <div>
            <p className="eyebrow">
              PROMPT ENGINEERING
            </p>

            <h3>
              Explain It Simply Framework
            </h3>
          </div>

          <span>
            🧠
          </span>
        </div>

        <p className="prompt-intro">
          CloudSprint uses a structured explanation pattern so every concept can
          be taught consistently without drifting outside beginner AZ-900 scope.
        </p>

        <div className="prompt-steps">
          {promptSteps.map((step) => (
            <article key={step.number}>
              <span className="prompt-number">
                {step.number}
              </span>

              <div>
                <h4>
                  {step.title}
                </h4>

                <p>
                  {step.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="prompt-example">
          <p className="eyebrow">
            EXAMPLE PROMPT DESIGN
          </p>

          <pre>
{`Explain [AZURE CONCEPT] for a beginner.

Return:
1. One simple definition
2. One real-world analogy
3. One Azure example
4. One common confusion
5. One memory cue

Rules:
- Stay within AZ-900 fundamentals
- Use simple English
- Do not use real exam questions
- Do not claim what will appear on the exam`}
          </pre>
        </div>
      </div>

      <div className="about-section">
        <div className="about-section-heading">
          <p className="eyebrow">
            RESPONSIBLE EXAM PREP
          </p>

          <h3>
            Practice without pretending to predict the exam.
          </h3>
        </div>

        <div className="responsible-grid">
          <article>
            <span>✅</span>

            <h4>
              Original questions
            </h4>

            <p>
              CloudSprint practice questions are written for this project and
              are not copied from the real AZ-900 exam.
            </p>
          </article>

          <article>
            <span>📊</span>

            <h4>
              Weight-based focus
            </h4>

            <p>
              Study emphasis follows the published skill-area weighting rather
              than claiming specific questions will appear.
            </p>
          </article>

          <article>
            <span>🎯</span>

            <h4>
              Readiness estimate
            </h4>

            <p>
              Readiness is based only on local CloudSprint practice performance.
            </p>
          </article>
        </div>
      </div>

      <div className="about-disclaimer">
        <span>ℹ️</span>

        <div>
          <strong>
            Unofficial study tool
          </strong>

          <p>
            CloudSprint 900 is an independent learning project. It is not
            affiliated with, sponsored by or endorsed by Microsoft. AZ-900 and
            Azure are Microsoft-related product and certification names used
            only to describe the learning topic.
          </p>
        </div>
      </div>

      <footer className="about-footer">
        <div>
          <strong>
            CloudSprint 900
          </strong>

          <p>
            Built for the Vibe Coding Hackathon: AZ-900 Exam Prep Edition.
          </p>
        </div>

        <span>
          Learn • Practice • Improve
        </span>
      </footer>
    </section>
  );
}

export default About;