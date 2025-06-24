import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, tags, image, link, iconMap }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card-link">
      <div className="project-card">
        <div className="project-image-container">
          <img src={image} alt={`${title} preview`} className="project-image" />
        </div>
        <div className="project-content">
          <h3 className="project-title">{title}.exe</h3>
          <p className="project-description">{description}</p>
          <div className="project-tags">
            {tags.map(tag => (
              <span key={tag} className="project-tag">
                {iconMap[tag] || tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard; 