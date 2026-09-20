import React from 'react';
import { Sparkles } from 'lucide-react';
import { education, certifications } from '../data/portfolioData';
import SectionHeader from './SectionHeader';

const Education = () => {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHeader 
          title="Education & Certifications" 
          subtitle="My academic foundation and professional certifications that support my engineering career."
          alignment="center"
          tag="Academic Background"
          Icon={Sparkles}
          className="fade-up"
        />

        <div className="contact-card-banner fade-up" style={{ padding: 0, gap: '2rem', display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <div className="editorial-card edu-card" style={{ padding: '2rem', height: '100%' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Education</h3>
              {education.map((edu, idx) => (
                <div key={idx} style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{edu.degree}</h4>
                  <div style={{ color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '0.25rem' }}>{edu.institution}</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{edu.period} | {edu.location}</div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{edu.description}</p>
                </div>
              ))}
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', marginTop: '2rem', color: 'var(--text-primary)' }}>Certifications</h3>
              {certifications.map((cert, idx) => (
                <div key={idx}>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{cert.title}</h4>
                  <div style={{ color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '0.25rem' }}>{cert.issuer}</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{cert.period} | {cert.location}</div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default Education;
