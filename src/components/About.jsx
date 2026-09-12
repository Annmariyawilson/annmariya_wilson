import React from 'react';
import { GraduationCap, Award, CheckCircle2, Terminal, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { personalInfo, education, certifications } from '../data/portfolioData';

const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">
            <Sparkles size={13} />
            <span>Professional Background</span>
          </span>
          <h2 className="section-title">About Me & Qualifications</h2>
          <p className="section-desc">
            Bridging frontend visual polish with resilient backend architectures to deliver comprehensive, production-ready web applications.
          </p>
        </div>

        <div className="about-grid">
          {/* Summary & Core Competencies */}
          <div className="about-card glass-panel">
            <div>
              <h3 className="serif-heading" style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>
                Full Stack Development Philosophy
              </h3>
              <p className="about-summary-p">{personalInfo.summary}</p>
            </div>

            <div className="about-highlights">
              <div className="about-highlight-item">
                <CheckCircle2 size={20} color="#31572c" />
                <span>MERN & MEAN Stack Architecture</span>
              </div>
              <div className="about-highlight-item">
                <ShieldCheck size={20} color="#4f772d" />
                <span>JWT & Role-Based Access Control</span>
              </div>
              <div className="about-highlight-item">
                <Terminal size={20} color="#31572c" />
                <span>RESTful APIs & CRUD Pipelines</span>
              </div>
              <div className="about-highlight-item">
                <Zap size={20} color="#90a955" />
                <span>AI Workflow Acceleration</span>
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
                    <h4 className="edu-title serif-heading">{edu.degree}</h4>
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
                  <div className="edu-icon-wrap">
                    <Award size={22} />
                  </div>
                  <div>
                    <h4 className="edu-title serif-heading">{cert.title}</h4>
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
