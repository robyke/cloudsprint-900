# CloudSprint 900
## Live Demo

Try CloudSprint 900 here:

https://cloudsprint-900.vercel.app/

**Learn the terms. Focus on what matters. Know when you're ready.**

CloudSprint 900 is an unofficial AZ-900 study companion built for the **Vibe Coding Hackathon: AZ-900 Exam Prep Edition**.

It helps beginners learn Azure fundamentals using short explanations, must-know terms, original practice questions, weak-area tracking, and a practice-readiness score.

---

## Problem

AZ-900 can feel overwhelming for beginners because:

- Azure documentation can be long and technical.
- Many services and concepts sound similar.
- Learners may not know what topics deserve more attention.
- Reading alone does not clearly show weak areas.
- It can be difficult to know whether study progress is improving.

CloudSprint 900 turns this into a simple learning flow:

**Learn → Remember → Practice → Improve**

---

## Target Users

CloudSprint 900 is designed for:

- Beginners learning Microsoft Azure
- Students preparing for AZ-900
- Career switchers entering cloud computing
- Busy learners who need fast revision
- Learners who want simple explanations instead of dense documentation

---

## Features

### Quick Learn

Short AZ-900 summaries with:

- Simple definitions
- Why the concept matters
- Real-world examples
- Memory cues
- Common confusion warnings
- Exam-focus reminders

### Must-Know Terms

A searchable Azure terminology library where learners can:

- Review key terms
- Mark terms as **Know It**
- Mark terms for **Review Again**
- Filter terms by AZ-900 skill area

Progress is saved in the browser.

### Practice Quiz

Includes **50 original CloudSprint questions**.

Quiz modes include:

- Quick Sprint
- Cloud Concepts
- Azure Architecture & Services
- Azure Management & Governance
- Full 50-question practice

Each question provides:

- Instant answer feedback
- Explanation of the correct answer
- A hint when the learner is wrong

The questions are original study questions and are not copied from the real Microsoft certification exam.

### Weak Areas

CloudSprint analyzes saved quiz results to identify:

- Topics needing attention
- Improving topics
- Strong topics
- Performance by AZ-900 skill area

This gives learners a clear next study action.

### Practice Readiness

CloudSprint calculates an estimated practice-readiness score using quiz performance across the three AZ-900 skill areas.

The weighting is based on approximate midpoints of the published AZ-900 skill ranges:

- Cloud Concepts: 25–30%
- Azure Architecture & Services: 35–40%
- Azure Management & Governance: 30–35%

Readiness levels:

- 0–49%: Keep Learning
- 50–69%: Building Confidence
- 70–84%: Almost Ready
- 85–100%: Strong Practice Readiness

The readiness score is only a study estimate and is not an official Microsoft exam score or guarantee of passing.

---

## Prompt Engineering Approach

CloudSprint uses an **Explain It Simply** framework for beginner-friendly learning content.

The explanation structure is:

1. Define the Azure concept simply.
2. Give a familiar analogy.
3. Show an Azure example.
4. Explain a common confusion.
5. Finish with a short memory cue.

Example prompt structure:

```text
Explain [AZURE CONCEPT] for a beginner.

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
- Do not claim what will appear on the exam
```

This structured approach helps keep explanations focused, consistent, and suitable for entry-level learners.

---

## AZ-900 Learning Areas

CloudSprint follows the three main AZ-900 skill areas.

### Cloud Concepts

Topics include:

- Cloud computing
- Public, private, and hybrid cloud
- Shared responsibility
- Consumption-based pricing
- CapEx and OpEx
- High availability
- Scalability
- Elasticity
- Reliability
- Predictability
- Manageability
- IaaS, PaaS, and SaaS
- Serverless computing

### Azure Architecture & Services

Topics include:

- Azure regions
- Availability zones
- Resource groups
- Management hierarchy
- Virtual machines
- Containers
- Azure Functions
- Virtual networks
- Subnets
- VNet peering
- VPN Gateway
- ExpressRoute
- Azure Blob Storage
- Azure Files
- Azure Disk Storage
- Storage redundancy
- Microsoft Entra ID
- MFA
- Conditional Access
- Microsoft Defender for Cloud

### Azure Management & Governance

Topics include:

- Azure Cost Management
- Budgets
- Tags
- Azure Policy
- Resource locks
- Azure Resource Manager
- Infrastructure as Code
- Azure Arc
- Azure portal
- Azure Cloud Shell
- Azure CLI
- Azure PowerShell
- Microsoft Purview
- Azure Monitor
- Azure Advisor
- Azure Service Health
- Application Insights
- Log Analytics

---

## Progress Tracking

CloudSprint uses browser `localStorage` to save:

- Quiz results
- Correct and incorrect answers
- Weak-area performance
- Known terms
- Terms marked for review
- Reviewed summaries
- Last visited page
- Practice readiness

No account or backend is required for the prototype.

---

## Technology

CloudSprint 900 was built using:

- React
- Vite
- JavaScript
- CSS
- Browser Local Storage
- Git
- GitHub

---

## Project Structure

```text
cloudsprint-900/
│
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── PracticeQuiz.jsx
│   │   ├── Readiness.jsx
│   │   ├── Readiness.css
│   │   └── WeakAreas.jsx
│   │
│   ├── data/
│   │   ├── questions.js
│   │   ├── summaries.js
│   │   └── terms.js
│   │
│   ├── utils/
│   │   └── storage.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
└── README.md
```

---

## Run Locally

Clone the repository:

```bash
git clone https://github.com/robyke/cloudsprint-900.git
```

Enter the project:

```bash
cd cloudsprint-900
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown by Vite.

---

## Future Improvements

Possible future versions could include:

- Cloud-based learner accounts
- Cross-device progress synchronization
- More original practice questions
- Topic-specific quizzes
- Daily study streaks
- Achievements and XP
- Adaptive question difficulty
- AI-generated beginner explanations
- Personalized revision plans
- Microsoft Learn resource links

---

## Responsible Exam Preparation

CloudSprint 900 does not use leaked exam material.

Practice questions are original learning questions written for this project.

The app focuses on understanding Azure fundamentals rather than memorizing real certification exam questions.

---

## Disclaimer

CloudSprint 900 is an independent, unofficial educational project.

It is **not affiliated with, sponsored by, or endorsed by Microsoft**.

Microsoft Azure and AZ-900 are names used only to describe the certification and learning subject.

---

## Author

**Robin Kinyua**

GitHub: [robyke](https://github.com/robyke)

Built for the **Vibe Coding Hackathon: AZ-900 Exam Prep Edition**.