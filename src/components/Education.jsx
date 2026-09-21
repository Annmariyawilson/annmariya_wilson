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

          <div className="fade-up" style={{ maxWidth: '800px', margin: '0' }}>
            {education.map((edu, idx) => (
              <div key={idx} style={{ 
                marginBottom: idx !== education.length - 1 ? '3rem' : 0, 
                position: 'relative',
                paddingLeft: '2rem',
                borderLeft: '2px solid var(--accent-primary)'
              }}>
                <div style={{
                  position: 'absolute',
                  left: '-6px',
                  top: '8px',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: 'var(--accent-primary)'
                }} />
                <h4 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)', lineHeight: '1.3' }}>{edu.degree}</h4>
                <div style={{ color: 'var(--text-primary)', fontWeight: '500', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{edu.institution}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{edu.period} • {edu.location}</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>{edu.description}</p>
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
            alignment="right"
            tag="Professional Growth"
            Icon={Sparkles}
            className="fade-up"
          />

          <div className="fade-up" style={{ maxWidth: '1000px', margin: '0' }}>
            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-grid">
                
                {/* Left Side: Institute Meta & Actions */}
                <div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '1.1rem', marginBottom: '0.3rem' }}>{cert.issuer}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{cert.period} | {cert.location}</div>
                  
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noreferrer" style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '0.5rem', 
                      padding: '0.6rem 1.2rem', 
                      fontSize: '0.75rem', 
                      fontWeight: '600', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.1em', 
                      color: 'var(--text-primary)', 
                      border: '1px solid var(--text-primary)', 
                      textDecoration: 'none',
                      borderRadius: '4px'
                    }} className="cert-btn-hover">
                      VIEW CERTIFICATE <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                {/* Right Side: Course Details */}
                <div>
                  <h4 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '0.8rem', fontFamily: 'var(--font-serif)', lineHeight: '1.3' }}>{cert.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>{cert.description}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
