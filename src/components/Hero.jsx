import React from 'react';
import { ArrowRight, Sparkles, MapPin, Mail, Code, Database, Layout, Download } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section className="hero-section editorial-hero" id="hero">
      <div className="container">
        
        <div className="editorial-layout">
          <div className="editorial-content">
            <h1 className="editorial-title">
              Full&nbsp;Stack <br />
              <span className="serif-italic-accent">Developer.</span>
            </h1>

            <p className="editorial-subtitle">
              I'm <strong>{personalInfo.name}</strong>. I build scalable, high-performance websites and powerful web applications. Focused on clean design, performance, and seamless user experiences.
            </p>

            <div className="editorial-tech-list">
              Angular &nbsp;&mdash;&nbsp; React &nbsp;&mdash;&nbsp; Next.js &nbsp;&mdash;&nbsp; Node.js &nbsp;&mdash;&nbsp; Express &nbsp;&mdash;&nbsp; MongoDB
            </div>

            <div className="editorial-actions">
              <a href="/assets/hero/Annmariya-wilson.pdf" download className="btn btn-sage">
                <Download size={18} /> Download CV
              </a>

              <div className="editorial-social-links">
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
          
          <div className="editorial-image-container">
            <div className="hero-image-wrapper">
              <div className="hero-animated-bg-shape shape-1"></div>
              <div className="hero-animated-bg-shape shape-2"></div>
              <div className="dots-pattern top-left"></div>
              <img src="/assets/hero/annmariya-wilsom-profile-img.png" alt="Annmariya Wilson" className="hero-profile-image" />
              <div className="corner-accent top-left"></div>
              <div className="corner-accent bottom-right"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
