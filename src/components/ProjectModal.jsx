import React from 'react';
import { X } from 'lucide-react';
import { GitHubIcon } from './Icons';

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

        <span className="modal-category">{project.category}</span>
        <h3 className="modal-title">{project.title}</h3>
        <p className="modal-desc">{project.fullDesc}</p>

        <h4 className="modal-section-title">Key Architectural Features & Workflows:</h4>
        <ul className="modal-features-list">
          {project.features.map((feature, fIdx) => (
            <li key={fIdx}>{feature}</li>
          ))}
        </ul>

        <h4 className="modal-section-title">Technologies Used:</h4>
        <div className="project-tech-list" style={{ marginBottom: '1.75rem' }}>
          {project.techStack.map((tech, tIdx) => (
            <span key={tIdx} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>

        <div className="modal-footer">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <GitHubIcon size={16} />
            <span>GitHub Repository</span>
          </a>
          <button className="btn btn-primary btn-sm" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
