import React from 'react';
import {
  Layout,
  Server,
  Database,
  GitBranch,
  Sparkles,
  Cpu
} from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';

const iconMap = {
  Layout: Layout,
  Server: Server,
  Database: Database,
  GitBranch: GitBranch,
  Sparkles: Sparkles,
  Cpu: Cpu
};

const Skills = () => {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Technical Matrix</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-desc">
            An extensive toolset encompassing modern client frameworks, server runtimes, databases, AI development tools, and agile collaboration practices.
          </p>
        </div>

        <div className="skills-grid">
          {Object.entries(technicalSkills).map(([key, category]) => {
            const IconComponent = iconMap[category.icon] || Layout;
            return (
              <div key={key} className="glass-panel skill-category-card">
                <div className="category-header">
                  <div className="category-icon-box">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="category-title">{category.category}</h3>
                </div>

                <div className="skill-pills-wrap">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-pill">
                      <span>{skill.name}</span>
                      <span className="skill-level-badge">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
