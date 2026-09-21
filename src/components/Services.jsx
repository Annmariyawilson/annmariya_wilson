import React from 'react';
import { Globe, Smartphone, Server, Layers, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader';

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Scalable, high-performance web applications built with React.js, Next.js, TypeScript, and modern modular architectures."
  },
  {
    icon: Smartphone,
    title: "UI/UX Development",
    desc: "Intuitive, responsive user interfaces and reusable component systems that deliver fluid interactions across all devices."
  },
  {
    icon: Server,
    title: "Backend & REST APIs",
    desc: "Robust Node.js & Express servers, JWT authentication, role-based access control (RBAC), and fast database integration."
  },
  {
    icon: Layers,
    title: "Cloud & Optimization",
    desc: "Seamless Vercel deployment setups, technical SEO optimization, and agile delivery using Git, Jira, and Slack."
  }
];

const Services = () => {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <SectionHeader 
          title="Services & Capabilities" 
          subtitle="End-to-end development expertise delivering polished digital products from concept to cloud deployment."
          alignment="left"
          tag="What I Do"
          Icon={Sparkles}
        />

        <div className="services-grid">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="editorial-card service-card">
                <div className="service-icon-circle">
                  <Icon size={22} />
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
