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
      <Link
        to={`/projects/${prevProject.id}`}
        className="nav-button prev-button"
        aria-label={`Go to previous project: ${prevProject.title}`}
      >
        &larr; Previous Project
      </Link>

      <Link to="/projects" className="nav-button return-to-projects-button">
        Back to All Projects
      </Link>

      <Link
        to={`/projects/${nextProject.id}`}
        className="nav-button next-button"
        aria-label={`Go to next project: ${nextProject.title}`}
      >
        Next Project &rarr;
      </Link>
    </div>
  );
}

export default ProjectNavigation;