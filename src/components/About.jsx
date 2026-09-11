import React from 'react';
import { GraduationCap, Award, CheckCircle2, Terminal, ShieldCheck, Zap } from 'lucide-react';
import { personalInfo, education, certifications } from '../data/portfolioData';

const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Professional Background</span>
          <h2 className="section-title">About Me & Qualifications</h2>
          <p className="section-desc">
            Bridging frontend visual polish with resilient backend architectures to deliver comprehensive web applications.
          </p>
        </div>

        <div className="about-grid">
          {/* Summary & Core Competencies */}
          <div className="about-card glass-panel">
            <div>
              <h3 className="text-white" style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>
                Full Stack Development Philosophy
              </h3>
              <p className="about-summary-p">{personalInfo.summary}</p>
            </div>

            <div className="about-highlights">
              <div className="about-highlight-item">
                <CheckCircle2 size={18} color="var(--accent-emerald)" />
                <span>MERN & MEAN Stack Development</span>
              </div>
              <div className="about-highlight-item">
                <ShieldCheck size={18} color="var(--accent-primary)" />
                <span>JWT & Role-Based Access Control</span>
              </div>
              <div className="about-highlight-item">
                <Terminal size={18} color="var(--accent-cyan)" />
                <span>REST API Integration & CRUD</span>
              </div>
              <div className="about-highlight-item">
                <Zap size={18} color="var(--accent-amber)" />
                <span>AI-Driven Acceleration (Cursor/Antigravity)</span>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="edu-cert-stack">
            {/* Education */}
            {education.map((edu, idx) => (
              <div key={idx} className="glass-panel edu-card">
                <div className="edu-cert-header">
                  <div className="edu-icon-wrap">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h4 className="edu-title">{edu.degree}</h4>
                    <span className="edu-institution">{edu.institution}</span>
                  </div>
                </div>
                <div className="edu-meta">
                  <span>📅 {edu.period}</span>
                  <span>📍 {edu.location}</span>
                </div>
                <p className="edu-desc">{edu.description}</p>
              </div>
            ))}

            {/* Certification */}
            {certifications.map((cert, idx) => (
              <div key={idx} className="glass-panel cert-card">
                <div className="edu-cert-header">
                  <div className="edu-icon-wrap" style={{ background: 'rgba(168, 85, 247, 0.12)', color: 'var(--accent-secondary)' }}>
                    <Award size={22} />
                  </div>
                  <div>
                    <h4 className="edu-title">{cert.title}</h4>
                    <span className="edu-institution">{cert.issuer}</span>
                  </div>
                </div>
                <div className="edu-meta">
                  <span>📅 {cert.period}</span>
                  <span>📍 {cert.location}</span>
                </div>
                <p className="edu-desc">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
