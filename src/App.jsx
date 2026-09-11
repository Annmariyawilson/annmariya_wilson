import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      {/* Ambient background light orbs */}
      <div className="glow-sphere sphere-1" aria-hidden="true"></div>
      <div className="glow-sphere sphere-2" aria-hidden="true"></div>
      <div className="glow-sphere sphere-3" aria-hidden="true"></div>

      <Navbar />
      <main id="mainContent">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
