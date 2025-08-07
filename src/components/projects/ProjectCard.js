import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ project }) {
  const { id, title, description, image } = project;

  return (
    <Link to={`/projects/${id}`} className="project-card-link">
      <div className="project-card">
        <img src={ process.env.PUBLIC_URL + image} alt={title} className="project-card-image" />
        <div className="project-card-content">
          <h3 className="project-card-title">{title}</h3>
          <p className="project-card-description">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;