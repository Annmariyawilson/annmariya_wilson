import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-logo">
          {personalInfo.name} <span style={{ color: 'var(--accent-primary)' }}>.</span>
        </div>
        
        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
        
        <button 
          onClick={scrollToTop}
          className="btn btn-outline-editorial"
          style={{ width: '40px', height: '40px', padding: 0, borderRadius: '50%' }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
