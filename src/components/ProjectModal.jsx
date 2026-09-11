import React from 'react';
import { X, ExternalLink } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="modal-backdrop active"
      id="projectModal"
      onClick={onClose}
      aria-hidden="false"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal-dialog editorial-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <span className="modal-category">{project.category}</span>
        <h3 className="modal-title serif-heading">{project.title}</h3>
        <p className="modal-desc">{project.fullDesc}</p>

        <h4 className="modal-section-title">Key Architectural Features & Highlights:</h4>
        <ul className="modal-features-list">
          {project.features.map((feature, fIdx) => (
            <li key={fIdx}>{feature}</li>
          ))}
        </ul>

        <h4 className="modal-section-title">Technologies Used:</h4>
        <div className="project-tags-list" style={{ marginBottom: '1.75rem' }}>
          {project.techStack.map((tech, tIdx) => (
            <span key={tIdx} className="project-tag-item">
              {tech}
            </span>
          ))}
        </div>

        <div className="modal-footer">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sage btn-sm"
            >
              <span>Visit Live Website</span>
              <ExternalLink size={14} />
            </a>
          )}
          <button className="btn btn-outline-editorial btn-sm" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
