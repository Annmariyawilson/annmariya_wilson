import React from 'react';

const SectionHeader = ({ title, subtitle, alignment = 'left', className = '', tag, Icon }) => {
  return (
    <div className={`section-header-container align-${alignment} ${className}`}>
      {tag && (
        <span className="section-tag">
          {Icon && <Icon size={14} />}
          <span>{tag}</span>
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
