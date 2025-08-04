import React from 'react';
import projectsData from '../data/projectsData';
import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <p className="projects-description">
        The projects below showcase my skills in UI/UX design, web app development (both front end and full stack), and design for physical products.
      </p>
      <div className="projects-grid">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;