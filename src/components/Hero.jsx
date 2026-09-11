import React from 'react';
import { ArrowUpRight, Sparkles, MapPin, Code2, Zap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="badges-row">
            <div className="status-badge" id="statusBadge">
              <span className="status-pulse"></span>
              <MapPin size={14} />
              <span>{personalInfo.location} • Open for Opportunities</span>
            </div>

            <div className="ai-badge">
              <Sparkles size={14} />
              <span>AI-Assisted Dev (Cursor & Antigravity)</span>
            </div>
          </div>

          <h1 className="hero-title">
            <span className="gradient-text">Full Stack</span> Developer crafting high-performance web applications.
          </h1>

          <p className="hero-subtitle">
            Hi, I'm <strong className="text-white">{personalInfo.name}</strong>. With 2 years of professional experience, I build robust, scalable platforms using <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, and <strong>Express.js</strong> with clean architecture and responsive UI design.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary" id="exploreProjectsBtn">
              <span>View Projects</span>
              <ArrowUpRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary" id="contactHeroBtn">
              <span>Get in Touch</span>
            </a>
          </div>

          <div className="hero-stats">
            {personalInfo.stats.map((stat, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <div className="stat-divider"></div>}
                <div className="stat-card">
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="glass-panel hero-code-card">
            <div className="code-header">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="code-title">annmariya_profile.ts</span>
              <span className="code-status">Active</span>
            </div>
            <pre className="code-body"><code><span className="code-keyword">const</span> <span className="code-variable">developer</span> = {`{`}
  <span className="code-prop">name</span>: <span className="code-string">"{personalInfo.name}"</span>,
  <span className="code-prop">role</span>: <span className="code-string">"Full Stack Developer"</span>,
  <span className="code-prop">location</span>: <span className="code-string">"{personalInfo.location}"</span>,
  <span className="code-prop">stack</span>: {`{`}
    <span className="code-prop">frontend</span>: [<span className="code-string">"React.js"</span>, <span className="code-string">"Next.js"</span>, <span className="code-string">"Angular"</span>, <span className="code-string">"Tailwind"</span>],
    <span className="code-prop">backend</span>: [<span className="code-string">"Node.js"</span>, <span className="code-string">"Express.js"</span>, <span className="code-string">"REST APIs"</span>, <span className="code-string">"JWT"</span>],
    <span className="code-prop">databases</span>: [<span className="code-string">"MongoDB"</span>, <span className="code-string">"MySQL"</span>, <span className="code-string">"Supabase"</span>]
  {`}`},
  <span className="code-prop">aiAssisted</span>: [<span className="code-string">"Cursor"</span>, <span className="code-string">"Antigravity"</span>],
  <span className="code-prop">status</span>: <span className="code-string">"Ready to build & deploy 🚀"</span>
{`}`};</code></pre>
            <div className="code-footer">
              <div className="code-footer-left">
                <Zap size={16} className="text-white" />
                <span>MERN & MEAN Architecture</span>
              </div>
              <div className="code-footer-right">Vercel Ready ⚡</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
