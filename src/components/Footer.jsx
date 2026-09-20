import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {


  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-logo">
          {personalInfo.name} <span style={{ color: 'var(--accent-primary)' }}>.</span>
        </div>
        
        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
        

      </div>
    </footer>
  );
};

export default Footer;
