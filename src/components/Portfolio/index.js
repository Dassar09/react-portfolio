import React from 'react';
import './index.scss'

const Portfolio = ({ title, description, techStack, projectLink, image }) => {
  return (
    <div className="project">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>Tech Stack:</strong> {techStack}</p>
        <a href={projectLink} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
