import React, { useState, useEffect, useRef } from 'react';
import { UserCheck, Award, Layers, Globe } from 'lucide-react';

const statsData = [
  {
    icon: Award,
    target: 2,
    suffix: "",
    label: "Years Experience"
  },
  {
    icon: UserCheck,
    target: 100,
    suffix: "%",
    label: "Client Satisfaction"
  },
  {
    icon: Layers,
    target: 15,
    suffix: "+",
    label: "Tech Modules"
  },
  {
    icon: Globe,
    target: 12,
    suffix: "+",
    label: "Live Client Projects"
  }
];

const StatItem = ({ item, isVisible }) => {
  const [count, setCount] = useState(0);
  const Icon = item.icon;

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = item.target;
    const duration = 1600; // ms
    let startTime = null;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * end);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isVisible, item.target]);

  return (
    <div className="stats-strip-item">
      <div className="stats-icon-circle">
        <Icon size={20} />
      </div>
      <div className="stats-big-number">
        {isVisible ? count : 0}{item.suffix}
      </div>
      <div className="stats-sublabel">{item.label}</div>
    </div>
  );
};

const StatsStrip = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="stats-strip-section" ref={sectionRef}>
      <div className="container">
        <div className="stats-strip-container">
          {statsData.map((stat, idx) => (
            <StatItem key={idx} item={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
