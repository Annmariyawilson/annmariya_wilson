import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header" id="siteHeader">
      <div className="nav-container">
        <a href="#hero" className="brand-logo" id="brandLogo" onClick={closeMenu}>
          <div className="logo-text-group">
            <span className="logo-text">{personalInfo.name}</span>
            <span className="logo-sub">Full Stack Developer</span>
          </div>
        </a>

        <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} id="navMenu">
          <a href="#about" className="nav-link" onClick={closeMenu}>
            About
          </a>
          <a href="#projects" className="nav-link" onClick={closeMenu}>
            Projects
          </a>
          <a href="#skills" className="nav-link" onClick={closeMenu}>
            Skills
          </a>
          <a href="#experience" className="nav-link" onClick={closeMenu}>
            Experience
          </a>
          <a href="#services" className="nav-link" onClick={closeMenu}>
            Services
          </a>
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="btn btn-sage btn-sm desktop-cta" onClick={closeMenu}>
            <span>Let's Talk</span>
            <ArrowUpRight size={14} />
          </a>
          <button
            className="mobile-toggle"
            id="mobileMenuBtn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
