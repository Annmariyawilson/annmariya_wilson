import React from 'react';
import { ArrowRight, Sparkles, MapPin, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-grid">
        {/* Left Column: Editorial Content */}
        <div className="hero-content">
          <div className="hero-status-strip">
            <div className="hero-status-pill">
              <span className="pulse-dot" aria-hidden="true"></span>
              <span>Available for Opportunities • Dubai, UAE</span>
            </div>
            <span className="hero-tag">
              <Sparkles size={13} />
              <span>Full Stack &amp; AI Engineer</span>
            </span>
          </div>

          <h1 className="hero-title">
            Engineering <span className="serif-italic-accent">intuitive</span>, scalable &amp; <span className="serif-italic-accent">impactful</span> digital experiences.
          </h1>

          <p className="hero-subtitle">
            I'm <strong>{personalInfo.name}</strong>, a Full Stack Developer with 2 years of production experience crafting responsive web applications, SaaS platforms, e-commerce systems, and robust REST APIs using React, Next.js, Node.js, and MongoDB.
          </p>

          {/* Quick Tech Stack Badges */}
          <div className="hero-tech-strip" aria-label="Core Technologies">
            <span className="hero-tech-badge">React.js</span>
            <span className="hero-tech-badge">Next.js</span>
            <span className="hero-tech-badge">Node.js</span>
            <span className="hero-tech-badge">Express</span>
            <span className="hero-tech-badge">MongoDB</span>
            <span className="hero-tech-badge">Supabase</span>
            <span className="hero-tech-badge">REST APIs</span>
            <span className="hero-tech-badge">AI Workflows</span>
          </div>

          {/* Actions & Social Links */}
          <div className="hero-actions-row">
            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-sage" id="exploreProjectsBtn">
                <span>View Featured Work</span>
                <ArrowRight size={15} />
              </a>
              <a href="#contact" className="btn btn-outline-editorial" id="contactHeroBtn">
                <span>Get In Touch</span>
                <ArrowRight size={15} />
              </a>
            </div>

            <div className="hero-social-links" aria-label="Social and contact links">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer noopener"
                className="hero-social-btn"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GitHubIcon size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="hero-social-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hero-social-btn"
                aria-label="Send Email"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Minimalist Portrait Showcase */}
        <div className="hero-visual">
          <div className="hero-editorial-frame">
            {/* Corner Precision Ticks */}
            <span className="corner-tick corner-tl" aria-hidden="true">+</span>
            <span className="corner-tick corner-tr" aria-hidden="true">+</span>
            <span className="corner-tick corner-bl" aria-hidden="true">+</span>
            <span className="corner-tick corner-br" aria-hidden="true">+</span>

            {/* Inner Floating Status Badges */}
            <div className="hero-floating-badge badge-top">
              <div className="badge-icon-wrap">
                <MapPin size={13} />
              </div>
              <div className="badge-text">
                <span className="badge-label">Location</span>
                <span className="badge-value">{personalInfo.location}</span>
              </div>
            </div>

            {/* Portrait Image Container */}
            <div className="hero-image-wrapper">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="hero-portrait-img"
                loading="eager"
              />
              <div className="hero-image-gradient" aria-hidden="true"></div>
            </div>

            {/* Floating Experience Badge */}
            <div className="hero-floating-badge badge-bottom">
              <div className="badge-icon-wrap">
                <Sparkles size={13} />
              </div>
              <div className="badge-text">
                <span className="badge-label">Proven Track Record</span>
                <span className="badge-value">2 Yrs Exp • 12+ Live Projects</span>
              </div>
            </div>

            {/* Frame Footer Meta */}
            <div className="hero-frame-footer">
              <div className="frame-meta-left">
                <span className="frame-name">{personalInfo.name}</span>
                <span className="frame-role">Full Stack &amp; UI Specialist</span>
              </div>
              <div className="frame-meta-right">
                <span className="frame-tech">MERN • Next.js • AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
