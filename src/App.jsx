import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import StatsStrip from './components/StatsStrip';
import About from './components/About';
import Skills from './components/Skills';
import Process from './components/Process';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main id="mainContent">
        <Hero />
        <Projects />
        <Services />
        <StatsStrip />
        <About />
        <Skills />
        <Process />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
