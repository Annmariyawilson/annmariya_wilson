import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop fade-up"
      onClick={onClose}
      aria-hidden="false"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal-dialog glass-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {project.image && (
          <div className="modal-hero-img-wrap">
            <img
              src={project.image}
              alt={project.title}
              className="modal-hero-img"
            />
          </div>
        )}

        <div className="modal-content-inner">
          <span className="section-tag" style={{ marginBottom: '1rem', padding: '0.3rem 0.8rem', fontSize: '0.65rem' }}>{project.category}</span>
          <h3 className="modal-title serif-heading">{project.title}</h3>
          <p className="modal-desc">{project.fullDesc}</p>

          <h4 className="modal-section-title">Key Highlights:</h4>
          <ul className="modal-features-list">
            {project.features.map((feature, fIdx) => (
              <li key={fIdx}>{feature}</li>
            ))}
          </ul>

          <h4 className="modal-section-title">Technologies Used:</h4>
          <div className="project-tags-list">
            {project.techStack.map((tech, tIdx) => (
              <span key={tIdx} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="modal-footer">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sage"
              >
                <span>Visit Live Website</span>
                <ExternalLink size={16} />
              </a>
            )}
            <button className="btn btn-outline-editorial" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
