import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header" id="siteHeader">
      <div className="nav-container">
        <a href="#hero" className="brand-logo" id="brandLogo" onClick={closeMenu}>
          <span className="logo-symbol">AW</span>
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
            Work
          </a>
          <a href="#services" className="nav-link" onClick={closeMenu}>
            Services
          </a>
          <a href="#skills" className="nav-link" onClick={closeMenu}>
            Skills
          </a>
          <a href="#experience" className="nav-link" onClick={closeMenu}>
            Experience
          </a>
          <a href="#contact" className="btn btn-sage btn-sm" onClick={closeMenu}>
            <span>Let's Talk</span>
            <ArrowUpRight size={14} />
          </a>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle-btn"
            id="themeToggle"
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
            title="Toggle theme"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <button
            className="mobile-toggle"
            id="mobileMenuBtn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
