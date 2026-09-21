import React from 'react';
import { ChevronDown } from 'lucide-react';

import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import StatsStrip from './components/StatsStrip';
import Contact from './components/Contact';
import Education from './components/Education';

function App() {
  return (
    <div className="app-container">
      {/* Animated Background Orbs */}
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>
      <div className="bg-noise"></div>

      <main id="mainContent">
        <Hero />
        <StatsStrip />
        
        <div style={{ display: 'flex', justifyContent: 'center', margin: '3rem 0', opacity: 0.8 }} className="fade-up">
          <a href="#projects" aria-label="Scroll down to projects" className="bounce-animation" style={{ color: 'var(--accent-primary)', cursor: 'pointer' }}>
            <ChevronDown size={32} />
          </a>
        </div>

        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
