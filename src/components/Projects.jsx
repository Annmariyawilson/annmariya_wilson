import React, { useState } from 'react';
import {
  ExternalLink,
  Info,
  GraduationCap,
  Compass,
  Sparkles,
  Palette,
  Wind,
  Cookie,
  Newspaper,
  UtensilsCrossed,
  TrendingUp,
  Layers,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const iconLookup = {
  'holycross-college': GraduationCap,
  'day-off-journeys': Compass,
  'salmara-ayurveda': Sparkles,
  'kalangara-paints': Palette,
  'chillmaster-uae': Wind,
  'choco-mint': Cookie,
  'true-news': Newspaper,
  'amilas-masala-paste': UtensilsCrossed,
  'trade-learners': TrendingUp,
  'phoenix-platform': Layers,
  'security-spy': ShieldCheck,
  'ar-architects': Building2
};

const thumbnailStyles = [
  'thumbnail-dark',
  'thumbnail-cream',
  'thumbnail-stone',
  'thumbnail-sage'
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { label: 'All Projects (12)', value: 'all' },
    { label: 'E-Commerce', value: 'e-commerce' },
    { label: 'Corporate & Services', value: 'corporate' },
    { label: 'Institutional & EdTech', value: 'institutional' },
    { label: 'Food & Hospitality', value: 'food' },
    { label: 'Design & Tech', value: 'design' }
  ];

  const filteredProjects = projects.filter((proj) => {
    if (filter === 'all') return true;
    if (filter === 'e-commerce') {
      return proj.category.toLowerCase().includes('e-commerce') || proj.id.includes('salmara') || proj.id.includes('amila');
    }
    if (filter === 'corporate') {
      return proj.category.toLowerCase().includes('corporate') || proj.category.toLowerCase().includes('saas') || proj.id.includes('chillmaster') || proj.id.includes('kalangara') || proj.id.includes('phoenix');
    }
    if (filter === 'institutional') {
      return proj.category.toLowerCase().includes('institutional') || proj.category.toLowerCase().includes('edtech') || proj.id.includes('holycross') || proj.id.includes('trade');
    }
    if (filter === 'food') {
      return proj.category.toLowerCase().includes('food') || proj.category.toLowerCase().includes('travel') || proj.id.includes('choco') || proj.id.includes('day-off');
    }
    if (filter === 'design') {
      return proj.category.toLowerCase().includes('architecture') || proj.category.toLowerCase().includes('security') || proj.category.toLowerCase().includes('media') || proj.id.includes('ar-architects') || proj.id.includes('security') || proj.id.includes('true-news');
    }
    return true;
  });

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="header-split">
          <div>
            <span className="section-tag">Selected Work</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-desc">
              A collection of live commercial web applications, e-commerce storefronts, institutional portals, and SaaS platforms.
            </p>
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
            const Icon = iconLookup[project.id] || Sparkles;
            const themeClass = thumbnailStyles[idx % thumbnailStyles.length];

            return (
              <article key={project.id} className="editorial-card project-card">
                <div className={`project-thumbnail ${themeClass}`}>
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
                      <Info size={14} />
                      <span>Details</span>
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-live-btn"
                        title={`Visit ${project.title}`}
                      >
                        <span>Visit Live</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
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
