import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/portfolioData';

const Experience = () => {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Career History</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-desc">
            Demonstrated track record in architecting production platforms, reusable design systems, and full-stack solutions.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="glass-panel experience-card">
                <div className="exp-header">
                  <div className="exp-role-company">
                    <h3 className="exp-role">{exp.role}</h3>
                    <span className="exp-company">{exp.company}</span>
                  </div>

                  <div className="exp-badges">
                    <span className="exp-period">
                      <Calendar size={13} style={{ display: 'inline', marginRight: '4px' }} />
                      {exp.period}
                    </span>
                    <span className="exp-location">
                      <MapPin size={13} style={{ display: 'inline', marginRight: '4px' }} />
                      {exp.location}
                    </span>
                    <span className="exp-type">{exp.type}</span>
                  </div>
                </div>

                <ul className="exp-bullets">
                  {exp.highlights.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>

                <div className="exp-tags">
                  {exp.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="exp-tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
