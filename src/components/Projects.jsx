import React, { useState } from 'react';
import { ExternalLink, Info, Sparkles } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import SectionHeader from './SectionHeader';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { label: 'All Projects', value: 'all' },
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
      return proj.category.toLowerCase().includes('corporate') || proj.category.toLowerCase().includes('saas') || proj.category.toLowerCase().includes('fintech') || proj.id.includes('chillmaster') || proj.id.includes('kalangara') || proj.id.includes('phoenix') || proj.id.includes('zyvest');
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
    <section className="section" id="projects">
      <div className="container">
        <div className="header-split fade-up">
          <div>
            <SectionHeader 
              title="Featured Projects" 
              subtitle="Live commercial web applications, e-commerce storefronts, and SaaS platforms built with modern full-stack technologies."
              alignment="left"
              tag="Selected Work"
              Icon={Sparkles}
            />
          </div>


        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card fade-up">
              <div className="project-img-wrap" onClick={() => setSelectedProject(project)} style={{ cursor: 'pointer' }}>
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-img" loading="lazy" />
                ) : (
                  <div className="project-img" style={{ background: 'var(--bg-glass)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Sparkles size={40} color="var(--accent-primary)" opacity={0.3} />
                  </div>
                )}
                <div className="project-overlay">
                  <button className="btn btn-sage" onClick={() => setSelectedProject(project)}>View Details</button>
                </div>
              </div>

              <div className="project-body">
                <div style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                  {project.category}
                </div>
                <h3 className="project-heading" onClick={() => setSelectedProject(project)} style={{ cursor: 'pointer' }}>
                  {project.title}
                </h3>
                <p className="project-desc">{project.shortDesc}</p>

                <div className="project-footer-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
                  >
                    <Info size={14} />
                    <span style={{ fontSize: '0.85rem' }}>Details</span>
                  </button>
                  
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '500' }}
                    >
                      <span>Visit Live</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;
