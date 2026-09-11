import React, { useState } from 'react';
import { Info, TrendingUp, ShoppingBag, School } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { GitHubIcon } from './Icons';
import ProjectModal from './ProjectModal';

const projectIcons = [TrendingUp, ShoppingBag, School];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'FinTech / Trading', value: 'FinTech' },
    { label: 'E-Commerce', value: 'E-Commerce' },
    { label: 'Management', value: 'Management' }
  ];

  const filteredProjects = projects.filter((proj) => {
    if (filter === 'all') return true;
    return proj.category.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="header-split">
            <div>
              <span className="section-tag">Featured Engineering</span>
              <h2 className="section-title">Production Projects</h2>
              <p className="section-desc">
                High-impact web platforms delivering responsive frontend user experiences and reliable backend integrations.
              </p>
            </div>

            <div className="filter-controls" id="projectFilter">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  className={`filter-btn ${filter === cat.value ? 'active' : ''}`}
                  onClick={() => setFilter(cat.value)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, idx) => {
            const Icon = projectIcons[idx % projectIcons.length] || TrendingUp;
            return (
              <article key={project.id} className="glass-panel project-card">
                <div className={`project-banner banner-${idx % 3}`}>
                  <span className="banner-badge">{project.badge}</span>
                  <div className="banner-icon-graphic">
                    <Icon size={48} />
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-meta">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.shortDesc}</p>

                  <div className="project-tech-list">
                    {project.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <button
                      className="btn btn-sm btn-outline preview-btn"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Info size={14} />
                      <span>View Details</span>
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link"
                      aria-label="GitHub Repository"
                    >
                      <GitHubIcon size={18} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
