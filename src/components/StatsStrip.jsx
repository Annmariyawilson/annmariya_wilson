import React from 'react';
import { personalInfo } from '../data/portfolioData';

const StatsStrip = () => {
  return (
    <div className="container" style={{ position: 'relative' }}>
      <div className="stats-strip-container fade-up">
        {personalInfo.stats.map((stat, idx) => (
          <div key={idx} className="stats-strip-item">
            <div className="stats-big-number">{stat.value}</div>
            <div className="stats-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsStrip;
