import React from 'react';
import { Sparkles, Terminal, Globe, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import SectionHeader from './SectionHeader';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeader 
          title="About Me" 
          subtitle="A closer look at my background, philosophy, and what drives my development process."
          alignment="left"
          tag="Introduction"
          Icon={Sparkles}
          className="fade-up"
        />

        <div className="about-card fade-up" style={{ padding: '3rem' }}>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '2rem' }}>
            {personalInfo.summary}
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Terminal size={20} color="var(--accent-primary)" />
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>Clean Architecture</h4>
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>Focus on writing modular, maintainable, and highly optimized code structures.</p>
            </div>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Globe size={20} color="var(--accent-primary)" />
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>Global Standards</h4>
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>Adhering to web accessibility and modern SEO performance best practices.</p>
            </div>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Cpu size={20} color="var(--accent-primary)" />
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>AI Integration</h4>
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>Leveraging advanced AI workflows to accelerate development and deliver smarter features.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
