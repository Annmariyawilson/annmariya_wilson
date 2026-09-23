import React, { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';

const CountUpAnimation = ({ endValueStr }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);
  
  // Parse number and suffix
  const numMatch = endValueStr.match(/\d+/);
  const targetNum = numMatch ? parseInt(numMatch[0], 10) : 0;
  const suffix = endValueStr.replace(/[0-9]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp = null;
    const duration = 2000; // 2 seconds
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // ease out cubic function
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * targetNum));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(targetNum);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isVisible, targetNum]);

  return (
    <span ref={countRef}>
      {count}{suffix}
    </span>
  );
};

const StatsStrip = () => {
  return (
    <div className="container" style={{ position: 'relative' }}>
      <div className="stats-strip-container fade-up">
        {personalInfo.stats.map((stat, idx) => (
          <div key={idx} className="stats-strip-item">
            <div className="stats-big-number">
              <CountUpAnimation endValueStr={stat.value} />
            </div>
            <div className="stats-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsStrip;
