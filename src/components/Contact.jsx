import React, { useState } from 'react';
import { Mail, MapPin, Send, Copy, Check, ArrowRight, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon } from './Icons';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setToastMessage('✨ Thank you! Your inquiry has been sent.');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setToastMessage('');
      }, 5000);
    }, 600);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-card-banner">
          <div className="contact-left-col">
            <span className="section-tag">Let's Create Something Great</span>
            <h2 className="contact-large-title serif-heading">
              Have a project in mind?<br />I'd love to hear about it.
            </h2>
            <p className="section-desc">
              Looking for a dedicated Full Stack Developer (React.js, Next.js, Node.js) for your team in Dubai, UAE or globally remote? Let's connect.
            </p>

            <div className="contact-channels-row">
              <div className="contact-channel-item">
                <div className="contact-channel-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="contact-channel-label">Email</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <a href={`mailto:${personalInfo.email}`} className="contact-channel-val">
                      {personalInfo.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent-sage)' }}
                      title="Copy email"
                    >
                      {copied ? <Check size={14} /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="contact-channel-item">
                <div className="contact-channel-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="contact-channel-label">Location</span>
                  <span className="contact-channel-val">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="contact-social-row">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="GitHub Profile"
              >
                <GitHubIcon size={18} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="LinkedIn Profile"
              >
                <LinkedInIcon size={18} />
              </a>

              <a
                href={personalInfo.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="Vercel Live App"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          <div className="contact-form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contactName">Your Name</label>
                <input
                  type="text"
                  id="contactName"
                  placeholder="e.g. Alex Morgan"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contactEmail">Your Email</label>
                <input
                  type="email"
                  id="contactEmail"
                  placeholder="alex@company.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contactMessage">Your Message</label>
                <textarea
                  id="contactMessage"
                  rows="4"
                  placeholder="Tell me about your project or role..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-sage btn-block" disabled={isSubmitting}>
                <span>{isSubmitting ? 'Sending...' : "Let's Talk"}</span>
                <ArrowRight size={15} />
              </button>

              {toastMessage && (
                <div className="form-toast" role="alert">
                  {toastMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
