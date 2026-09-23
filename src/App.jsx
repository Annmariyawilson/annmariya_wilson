import React, { useEffect, Suspense, lazy } from 'react';
import { ChevronDown } from 'lucide-react';

import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';

const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Education = lazy(() => import('./components/Education'));

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, {
      threshold: 0,
      rootMargin: "0px 0px -50px 0px"
    });

    const observeElements = () => {
      const hiddenElements = document.querySelectorAll('.section:not(.is-revealed), .fade-up:not(.is-revealed)');
      hiddenElements.forEach((el) => observer.observe(el));
    };

    observeElements();

    // Watch for lazy-loaded components entering the DOM
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

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

        <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}>Loading...</div>}>
          <Projects />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
