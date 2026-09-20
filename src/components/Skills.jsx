import React from 'react';
import { Layout, Server, Database, GitBranch, Sparkles, Cpu } from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';
import SectionHeader from './SectionHeader';

const iconMap = {
  Layout, Server, Database, GitBranch, Sparkles, Cpu
};

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeader 
          title="Technical Expertise" 
          subtitle="A comprehensive overview of my technical stack, focusing on modern web technologies, scalable architectures, and clean code practices."
          alignment="center"
          tag="Capabilities"
          Icon={Sparkles}
          className="fade-up"
        />

        <div className="skills-grid">
          {Object.entries(technicalSkills).map(([key, category], idx) => {
            const Icon = iconMap[category.icon] || Sparkles;
            
            return (
              <div key={key} className="skill-bento-card fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="skill-icon-header">
                  <Icon />
                  <h3 className="skill-title">{category.category}</h3>
                </div>
                <div className="skill-tags">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-tag">
                      {skill.name}
                    </span>
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
