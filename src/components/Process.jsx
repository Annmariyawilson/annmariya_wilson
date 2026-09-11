import React from 'react';

const steps = [
  {
    num: "01",
    title: "Discover",
    text: "Understand goals, project requirements, architectural scope, and target user journeys."
  },
  {
    num: "02",
    title: "Design",
    text: "Craft responsive component systems, structured schemas, and intuitive UI interactions."
  },
  {
    num: "03",
    title: "Develop",
    text: "Build clean full-stack code using React.js, Next.js, Node.js, and secure REST APIs."
  },
  {
    num: "04",
    title: "Launch",
    text: "Test, optimize for Lighthouse 95+ speed, and deploy to production on Vercel."
  }
];

const Process = () => {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My Process</span>
          <h2 className="section-title">How I Work</h2>
        </div>

        <div className="process-steps-row">
          {steps.map((step, idx) => (
            <div key={idx} className="process-step-item">
              <div className="process-step-badge">{step.num}</div>
              <h3 className="process-step-title serif-heading">{step.title}</h3>
              <p className="process-step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
