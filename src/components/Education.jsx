import React from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';
import { education, certifications } from '../data/portfolioData';
import SectionHeader from './SectionHeader';

const Education = () => {
  return (
    <>
      <section className="section" id="education">
        <div className="container">
          <SectionHeader 
            title="Education" 
            subtitle="My academic foundation that supports my development career."
            alignment="left"
            tag="Academic Background"
            Icon={Sparkles}
            className="fade-up"
          />

          <div className="editorial-card fade-up" style={{ padding: '2.5rem', maxWidth: '800px', margin: '0' }}>
            {education.map((edu, idx) => (
              <div key={idx} style={{ marginBottom: idx !== education.length - 1 ? '2rem' : 0, borderBottom: idx !== education.length - 1 ? '1px solid var(--border-color)' : 'none', paddingBottom: idx !== education.length - 1 ? '2rem' : 0 }}>
                <h4 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>{edu.degree}</h4>
                <div style={{ color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '0.25rem', fontSize: '1.1rem' }}>{edu.institution}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>{edu.period} | {edu.location}</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="certifications" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeader 
            title="Certifications" 
            subtitle="Professional certifications and continuous learning."
            alignment="left"
            tag="Professional Growth"
            Icon={Sparkles}
            className="fade-up"
          />

          <div className="editorial-card fade-up" style={{ padding: '2.5rem', maxWidth: '800px', margin: '0' }}>
            {certifications.map((cert, idx) => (
              <div key={idx} style={{ marginBottom: idx !== certifications.length - 1 ? '2rem' : 0, borderBottom: idx !== certifications.length - 1 ? '1px solid var(--border-color)' : 'none', paddingBottom: idx !== certifications.length - 1 ? '2rem' : 0 }}>
                <h4 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>{cert.title}</h4>
                <div style={{ color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '0.25rem', fontSize: '1.1rem' }}>{cert.issuer}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>{cert.period} | {cert.location}</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6', marginBottom: cert.link ? '1.5rem' : '0' }}>{cert.description}</p>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noreferrer" className="btn btn-sage" style={{ display: 'inline-flex', padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                    View Certificate <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
