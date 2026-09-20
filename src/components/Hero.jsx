import React from 'react';
import { ArrowRight, Sparkles, MapPin, Mail, Code, Database, Layout } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section className="hero-section fade-up" id="hero">
      <div className="container hero-grid">
        {/* Left Column: Typography & Content */}
        <div className="hero-content">


          <p className="hero-subtitle">
            I'm <strong>{personalInfo.name}</strong>, a {personalInfo.role}. I help businesses and startups create beautiful, responsive websites and powerful web apps using React, Next.js, Express.js, and Node.js.
          </p>

          <div className="hero-tech-strip">
            <span className="hero-tech-badge">React.js</span>
            <span className="hero-tech-badge">Next.js</span>
            <span className="hero-tech-badge">Express.js</span>
            <span className="hero-tech-badge">Node.js</span>
            <span className="hero-tech-badge">MongoDB</span>
            <span className="hero-tech-badge">AI-Assisted Dev</span>
          </div>

          <div className="hero-actions-row">

            <div className="hero-social-links">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hero-social-btn">
                <GitHubIcon size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hero-social-btn">
                <LinkedInIcon size={20} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="hero-social-btn">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <div className="hero-image-wrapper">
              <img src={personalInfo.avatar} alt={personalInfo.name} className="hero-portrait-img" loading="eager" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
