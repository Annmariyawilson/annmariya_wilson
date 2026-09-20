import React from 'react';

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
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <StatsStrip />
        <Contact />
      </main>
    </div>
  );
}

export default App;
