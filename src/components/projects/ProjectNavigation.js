import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectNavigation.css';

function ProjectNavigation({ currentProjectId, projectsData }) {
  const currentIndex = projectsData.findIndex(p => p.id === currentProjectId);
  const totalProjects = projectsData.length;

  // Loop back for continuous navigation
  const prevIndex = (currentIndex - 1 + totalProjects) % totalProjects;
  const nextIndex = (currentIndex + 1) % totalProjects;

  const prevProject = projectsData[prevIndex];
  const nextProject = projectsData[nextIndex];

  return (

    <div className="project-navigation">

      <Link to={`/projects/${prevProject.id}`} className="nav-button prev-button">
        <div className="nav-text">
          <span>&larr; Previous Project</span>
        </div>
      </Link>

      <Link to="/projects" className="nav-button return-to-projects-button">
        Back to Projects
      </Link>

      <Link to={`/projects/${nextProject.id}`} className="nav-button next-button">
        <div className="nav-text">
          <span>Next Project &rarr;</span>
        </div>
      </Link>
    </div>
  );
};

export default ProjectNavigation;