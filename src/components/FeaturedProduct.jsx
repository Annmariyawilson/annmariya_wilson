import React from 'react';
import { ExternalLink, Sparkles, Bot, FileText, CheckCircle2 } from 'lucide-react';
import SectionHeader from './SectionHeader';

const FeaturedProduct = () => {
  return (
    <section className="section" id="products">
      <div className="container">
        <div className="header-split fade-up">
          <div>
            <SectionHeader 
              title="My Own Product" 
              subtitle="Showcasing ChatCV.ai - The AI-Powered Resume Builder. An end-to-end SaaS platform built to solve real-world problems."
              alignment="left"
              tag="Featured Product"
              Icon={Sparkles}
            />
          </div>
        </div>

        <div className="product-showcase fade-up">
          <div className="product-content">
            
            <h3 className="product-title">ChatCV.ai</h3>
            <p className="product-tagline">The AI-Powered Resume Builder</p>
            
            <p className="product-description">
              ChatCV.ai is a modern, responsive web application that leverages Artificial Intelligence to help users build, enhance, and review their resumes. Features a real-time editor, intelligent resume parsing, ATS-friendly templates, AI-driven content generation, and mock interview practice.
            </p>

            <div className="product-features">
              <div className="feature-item">
                <FileText size={20} className="feature-icon" />
                <div>
                  <h4>Smart Data Parsing</h4>
                  <p>Extract text from old PDFs with fallback OCR vision capabilities.</p>
                </div>
              </div>
              <div className="feature-item">
                <Bot size={20} className="feature-icon" />
                <div>
                  <h4>AI-Powered Suite</h4>
                  <p>AI Resume Review, Bullet Enhancer, and Mock Interview Bot powered by Gemini API.</p>
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={20} className="feature-icon" />
                <div>
                  <h4>Cloud Sync & Export</h4>
                  <p>Version control via Firebase and high-quality PDF export.</p>
                </div>
              </div>
            </div>

            <div className="product-tech">
              <span className="tech-tag">React 19</span>
              <span className="tech-tag">Firebase</span>
              <span className="tech-tag">Gemini AI</span>
              <span className="tech-tag">Vite</span>
            </div>

            <div className="product-actions">
              <a 
                href="https://chatcv-ai.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <span>Visit ChatCV.ai</span>
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
          
          <div className="product-visual">
            <div className="product-image-container">
              <img 
                src="/assets/projects/chatcv-mockup.jpg" 
                alt="ChatCV.ai UI Mockup" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
