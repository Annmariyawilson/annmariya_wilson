import React from 'react';
import { Zap, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-left">
          <span className="footer-logo">AW</span>
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}. Full Stack Developer.
          </p>
        </div>

        <div className="footer-right">
          <div className="badge-tag">
            <Zap size={14} color="var(--accent-primary)" />
            <span>Built with React & Vite • Optimized for Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
