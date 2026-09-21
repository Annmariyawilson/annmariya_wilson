import React from 'react';
import { ArrowRight, Sparkles, MapPin, Mail, Code, Database, Layout, Download } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section className="hero-section fade-up" id="hero">
      <div className="container hero-grid">
        {/* Left Column: Typography & Content */}
        <div className="hero-content">

          <h1 className="hero-title">
            Full Stack <br /> <span className="serif-italic-accent">Developer</span>
          </h1>
          <p className="hero-subtitle">
            I'm <strong>{personalInfo.name}</strong>. I help businesses and startups create beautiful, responsive websites and powerful, scalable web applications.
          </p>

          <div className="hero-tech-strip">
            <span className="hero-tech-badge">Angular</span>
            <span className="hero-tech-badge">React.js</span>
            <span className="hero-tech-badge">Next.js</span>
            <span className="hero-tech-badge">MongoDB</span>
            <span className="hero-tech-badge">Express.js</span>
            <span className="hero-tech-badge">Node.js</span>
            <span className="hero-tech-badge">Cursor</span>
            <span className="hero-tech-badge">Antigravity</span>
          </div>

          <div className="hero-actions-row">
            <a href="/assets/Annmariya_Wilson_CV.pdf" download className="btn btn-sage">
              <Download size={18} /> Download CV
            </a>

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
