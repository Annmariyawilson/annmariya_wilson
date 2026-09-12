import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentScroll = window.scrollY;
        const progress = (currentScroll / totalHeight) * 100;
        setScrollProgress(progress);
        setShowBackToTop(currentScroll > 400);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
      <button
        className={`back-to-top-btn ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        title="Scroll to top"
      >
        <ArrowUp size={18} />
      </button>
    </>
  );
};

export default ScrollProgress;
