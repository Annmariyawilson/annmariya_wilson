import React, { useState } from 'react';
import { Send, CheckCircle, XCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [toast, setToast] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        form.reset();
        setToast({ type: 'success', text: "Thanks! I'll get back to you soon." });
        setTimeout(() => setToast(null), 4000);
      } else {
        setToast({ type: 'error', text: "Oops! There was a problem." });
        setTimeout(() => setToast(null), 4000);
      }
    } catch (error) {
      setToast({ type: 'error', text: "Oops! There was a problem." });
      setTimeout(() => setToast(null), 4000);
    }
  };

  return (
    <section className="section" id="contact" style={{ paddingBottom: '6rem' }}>
      <div className="container">
        

        <div className="contact-layout-box">
          
          {/* Form Side (Left) */}
          <div className="contact-form-side">
            <form 
              action="https://formspree.io/f/xvgryprr" 
              method="POST" 
              onSubmit={handleSubmit}
            >
              <div style={{ marginBottom: '2.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Full Name</label>
                <input type="text" name="name" className="contact-simple-input" required />
              </div>
              <div style={{ marginBottom: '2.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>E-mail</label>
                <input type="email" name="_replyto" className="contact-simple-input" required />
              </div>
              <div style={{ marginBottom: '3rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Message</label>
                <textarea name="message" rows="1" className="contact-simple-input" style={{ resize: 'none' }} required></textarea>
              </div>
              <button style={{ 
                background: 'var(--text-primary)', 
                color: 'var(--bg-primary)', 
                border: 'none', 
                borderRadius: '40px', 
                padding: '0.8rem 2.5rem', 
                fontSize: '0.9rem', 
                cursor: 'pointer', 
                fontWeight: '500',
                transition: 'opacity 0.3s',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>

          {/* Info Side (Right) */}
          <div className="contact-info-side">
            <h2 style={{ fontSize: '2.5rem', fontWeight: '500', color: 'var(--text-primary)', marginBottom: '2rem', letterSpacing: '-0.02em', fontFamily: 'var(--font-serif)', lineHeight: '1.2' }}>
              Let's build together.
            </h2>
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '400', marginBottom: '0.2rem', color: 'var(--text-primary)' }}>Contact</h4>
              <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', wordBreak: 'break-all' }}>{personalInfo.email}</a>
            </div>
            
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '400', marginBottom: '0.2rem', color: 'var(--text-primary)' }}>Based in</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{personalInfo.location}</p>
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          background: toast.type === 'success' ? 'var(--text-primary)' : '#e74c3c',
          color: toast.type === 'success' ? 'var(--bg-primary)' : 'white',
          padding: '1rem 1.5rem',
          borderRadius: '12px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          fontWeight: '500',
          fontSize: '0.95rem',
          animation: 'toastSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}>
          {toast.type === 'success' ? <CheckCircle size={20} /> : <XCircle size={20} />}
          {toast.text}
        </div>
      )}
    </section>
  );
};

export default Contact;
