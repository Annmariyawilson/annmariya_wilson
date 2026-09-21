import React from 'react';
import { Sparkles, Briefcase } from 'lucide-react';
import { experiences } from '../data/portfolioData';
import SectionHeader from './SectionHeader';

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeader 
          title="Professional Experience" 
          subtitle="My track record of building production-ready applications, collaborating with agile teams, and delivering high-quality digital solutions."
          alignment="left"
          tag="Career Journey"
          Icon={Sparkles}
          className="fade-up"
        />

        <div className="timeline-container fade-up">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-card">
              <div className="timeline-dot"></div>
              
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <div className="exp-company">{exp.company}</div>
                </div>
                <div className="exp-meta" style={{ textAlign: 'right' }}>
                  <div>{exp.period}</div>
                  <div>{exp.location} • {exp.type}</div>
                </div>
              </div>

              <ul className="exp-highlights" style={{ listStyle: 'none', padding: 0 }}>
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx}>{highlight}</li>
                ))}
              </ul>
              
              <div className="skill-tags" style={{ marginTop: '1.5rem' }}>
                {exp.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="skill-tag" style={{ fontSize: '0.75rem', color: 'var(--accent-primary)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
