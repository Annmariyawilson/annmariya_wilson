import React from 'react';
import { Mail, MapPin, Send, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import SectionHeader from './SectionHeader';

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-card-banner fade-up">
          <div>
            <SectionHeader
              tag="Get In Touch"
              Icon={Sparkles}
              title={
                <>
                  Let's build something <span className="serif-italic-accent">extraordinary.</span>
                </>
              }
              subtitle="I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
              alignment="left"
            />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="floating-icon" style={{ position: 'relative', width: '45px', height: '45px', animation: 'none' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email</div>
                  <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '500' }}>{personalInfo.email}</a>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="floating-icon" style={{ position: 'relative', width: '45px', height: '45px', animation: 'none' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Location</div>
                  <div style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: '500' }}>{personalInfo.location}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Send a Message</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" placeholder="How can I help you?"></textarea>
              </div>
              <button className="btn btn-sage" style={{ width: '100%', marginTop: '1rem' }}>
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
