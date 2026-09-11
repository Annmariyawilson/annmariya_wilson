import React, { useState } from 'react';
import { Mail, MapPin, Send, Copy, Check, ExternalLink } from 'lucide-react';
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
      setToastMessage('✨ Thank you! Your message has been received. I will respond promptly.');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setToastMessage('');
      }, 6000);
    }, 750);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-wrapper glass-panel">
          <div className="contact-info">
            <div>
              <span className="section-tag">Let's Connect</span>
              <h2 className="contact-title">Start a project or discuss an opportunity.</h2>
              <p className="contact-desc">
                Whether you're looking for a Full Stack Developer (React.js, Next.js, Node.js) for your team in Dubai or globally remote, feel free to reach out.
              </p>
            </div>

            <div className="contact-items">
              <div className="contact-item">
                <div className="item-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="item-label">Email Address</span>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <a href={`mailto:${personalInfo.email}`} className="item-value">
                      {personalInfo.email}
                    </a>
                    <button
                      className="copy-email-btn"
                      onClick={handleCopyEmail}
                      title="Copy email to clipboard"
                    >
                      {copied ? <Check size={14} color="var(--accent-emerald)" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="item-icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="item-label">Location</span>
                  <span className="item-value">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GitHubIcon size={20} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedInIcon size={20} />
              </a>

              <a
                href={personalInfo.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Vercel Live Portfolio"
                title="Vercel Live Portfolio"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Send a Direct Message</h3>

            <div className="form-group">
              <label htmlFor="contactName">Your Name</label>
              <input
                type="text"
                id="contactName"
                placeholder="Alex Morgan"
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
                placeholder="Hi Annmariya, I would love to discuss a project..."
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <Send size={18} />
            </button>

            {toastMessage && (
              <div className="form-toast" role="alert" aria-live="polite">
                {toastMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
