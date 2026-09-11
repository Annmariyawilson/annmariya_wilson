import React from 'react';
import { Globe, Smartphone, Server, Layers } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Scalable, high-performance web applications built with React.js, Next.js, and modern TypeScript architecture."
  },
  {
    icon: Smartphone,
    title: "UI/UX Engineering",
    desc: "Intuitive, responsive user interfaces and reusable component systems that deliver fluid interactions across devices."
  },
  {
    icon: Server,
    title: "Backend & REST APIs",
    desc: "Robust Node.js & Express servers, JWT authentication, role-based access control (RBAC), and database integration."
  },
  {
    icon: Layers,
    title: "Cloud & DevOps",
    desc: "Seamless Vercel deployment setups, SEO optimization, and agile workflow delivery using Git, Jira, and Slack."
  }
];

const Services = () => {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What I Do</span>
          <h2 className="section-title">Services & Capabilities</h2>
        </div>

        <div className="services-grid">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="editorial-card service-card">
                <div className="service-icon-circle">
                  <Icon size={20} />
                </div>
                <h3 className="service-card-title serif-heading">{item.title}</h3>
                <p className="service-card-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
