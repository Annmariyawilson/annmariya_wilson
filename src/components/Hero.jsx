import React from 'react';
import { ArrowRight, Sparkles, MapPin, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      {/* Dynamic Ambient Background Glows */}
      <div className="ambient-glow hero-glow-1" aria-hidden="true" />
      <div className="ambient-glow hero-glow-2" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-content">
          <span className="hero-tag">
            <Sparkles size={14} />
            <span>Full Stack Development • AI-Assisted Architecture</span>
          </span>

          <h1 className="hero-title">
            I build digital experiences that are <em>intuitive</em>, <em>intelligent</em> and impactful.
          </h1>

          <p className="hero-subtitle">
            I'm <strong>{personalInfo.name}</strong>, a Full Stack Developer with 2 years of experience crafting responsive, production-grade web applications, SaaS platforms, and trading architectures that deliver measurable impact.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-sage" id="exploreProjectsBtn">
              <span>View My Work</span>
              <ArrowRight size={15} />
            </a>
            <a href="#contact" className="btn btn-outline-editorial" id="contactHeroBtn">
              <span>Let's Work Together</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-portrait-card">
            {/* Top Status Bar */}
            <div className="hero-top-badge">
              <span className="hero-badge-tag">Full Stack & AI Engineer</span>
              <div className="hero-status-pill">
                <span className="hero-status-dot"></span>
                <span>{personalInfo.location} • Available</span>
              </div>
            </div>

            {/* Profile Avatar Asset */}
            <div className="hero-avatar-wrap">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="hero-avatar-img"
                loading="eager"
              />
              <div className="hero-avatar-overlay"></div>
            </div>

            <h3 className="hero-card-name serif-heading">{personalInfo.name}</h3>
            <p className="hero-card-role">Full Stack & UI Specialist</p>

            <p className="hero-card-summary">
              Specialized in MERN & MEAN stacks, Next.js, REST API engineering, and AI-accelerated workflows with Cursor and Antigravity.
            </p>

            <div className="hero-card-pills">
              <span className="hero-pill">React.js</span>
              <span className="hero-pill">Next.js</span>
              <span className="hero-pill">Node.js</span>
              <span className="hero-pill">Express.js</span>
              <span className="hero-pill">MongoDB</span>
              <span className="hero-pill">Supabase</span>
              <span className="hero-pill">Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
