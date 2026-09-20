import React from 'react';
import { Mail, MapPin, Send, User, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container">
        
        <div className="contact-section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="contact-huge-title" style={{ marginBottom: '1rem' }}>
            Let's build <span className="serif-italic-accent">together.</span>
          </h2>
          <p className="contact-editorial-subtitle" style={{ margin: '0 auto' }}>
            I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="contact-grid">
          {/* Info Side */}
          <div className="contact-minimal-info" style={{ paddingTop: '1rem' }}>
            <div className="minimal-info-item" style={{ marginBottom: '1.5rem' }}>
              <span className="minimal-info-label">Email</span>
              <a href={`mailto:${personalInfo.email}`} className="minimal-link" style={{ wordBreak: 'break-all' }}>{personalInfo.email}</a>
            </div>
            
            <div className="minimal-info-item" style={{ marginBottom: '1.5rem' }}>
              <span className="minimal-info-label">Location</span>
              <span className="minimal-text">{personalInfo.location}</span>
            </div>

            <div className="minimal-info-item">
              <span className="minimal-info-label" style={{ marginBottom: '0.75rem' }}>Social Media</span>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Minimal Form Side */}
          <div className="contact-minimal-form" style={{ maxWidth: '450px', width: '100%', margin: '0 auto', border: '1px solid var(--border-color)', padding: '2.5rem', background: 'var(--bg-card)' }}>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label className="form-label">Name</label>
                <div className="input-wrapper">
                  <User size={18} className="form-icon" />
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <div className="input-wrapper">
                  <Mail size={18} className="form-icon" />
                  <input type="email" className="form-control" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <div className="input-wrapper">
                  <MessageSquare size={18} className="form-icon" style={{ top: '1rem' }} />
                  <textarea className="form-control" rows="4"></textarea>
                </div>
              </div>
              <button className="btn btn-sage" style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}>
                <span style={{ fontSize: '1.1rem', letterSpacing: '0.05em' }}>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
