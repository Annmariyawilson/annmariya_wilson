import React, { useState } from 'react';
import { ArrowRight, TrendingUp, ShoppingBag, School, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const projectStyles = [
  { themeClass: 'thumbnail-dark', icon: TrendingUp },
  { themeClass: 'thumbnail-cream', icon: ShoppingBag },
  { themeClass: 'thumbnail-stone', icon: School }
];

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
        <div className="header-split">
          <div>
            <span className="section-tag">Selected Work</span>
            <h2 className="section-title">Featured Projects</h2>
          </div>

          <div className="filter-controls">
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

        <div className="projects-grid">
          {filteredProjects.map((project, idx) => {
            const style = projectStyles[idx % projectStyles.length];
            const Icon = style.icon;

            return (
              <article key={project.id} className="editorial-card project-card">
                <div className={`project-thumbnail ${style.themeClass}`}>
                  <span className="project-card-badge">{project.badge}</span>
                  <div className="thumbnail-icon-wrap">
                    <Icon size={44} />
                  </div>
                </div>

                <div className="project-body">
                  <div className="project-client-cat">{project.category}</div>
                  <h3 className="project-heading serif-heading">{project.title}</h3>
                  <p className="project-desc">{project.shortDesc}</p>

                  <div className="project-tags-list">
                    {project.techStack.slice(0, 4).map((tech, tIdx) => (
                      <span key={tIdx} className="project-tag-item">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-footer-row">
                    <button
                      className="project-view-link"
                      onClick={() => setSelectedProject(project)}
                    >
                      <span>View Details</span>
                      <ArrowRight size={14} />
                    </button>
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
