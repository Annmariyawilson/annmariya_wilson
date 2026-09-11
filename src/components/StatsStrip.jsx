import React from 'react';
import { UserCheck, Award, Layers, Globe } from 'lucide-react';

const statsData = [
  {
    icon: Award,
    number: "2+",
    label: "Years Experience"
  },
  {
    icon: UserCheck,
    number: "100%",
    label: "Client Satisfaction"
  },
  {
    icon: Layers,
    number: "15+",
    label: "Tech Modules"
  },
  {
    icon: Globe,
    number: "3+",
    label: "Production Platforms"
  }
];

const StatsStrip = () => {
  return (
    <section className="stats-strip-section">
      <div className="container">
        <div className="stats-strip-container">
          {statsData.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="stats-strip-item">
                <div className="stats-icon-circle">
                  <Icon size={18} />
                </div>
                <div className="stats-big-number">{stat.number}</div>
                <div className="stats-sublabel">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
