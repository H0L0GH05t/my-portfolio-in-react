import React from 'react';
import ProjectNavigation from './ProjectNavigation';
import projectsData from '../../data/projectsData';
import './ProjectDetail.css';

function DesignProjectDetail({ project }) {
  return (
    <div className="project-detail">
      <h2 className="project-detail-title">{project.title}</h2>
      <img src={project.image} alt={project.title} className="project-detail-image" />
      <p className="project-detail-long-description">{project.longDescription}</p>

      <div className="project-links">
        {project.behanceLink && (
          <a href={project.behanceLink} target="_blank" rel="noopener noreferrer" className="project-link-button">
            View on Behance
          </a>
        )}
        {project.dribbbleLink && (
          <a href={project.dribbbleLink} target="_blank" rel="noopener noreferrer" className="project-link-button">
            View on Dribbble
          </a>
        )}
        {project.portfolioPdf && (
          <a href={process.env.PUBLIC_URL + project.portfolioPdf} target="_blank" rel="noopener noreferrer" className="project-link-button">
            View Case Study (PDF)
          </a>
        )}
      </div>

      <ProjectNavigation currentProjectId={project.id} projectsData={projectsData} />
    </div>
  );
}

export default DesignProjectDetail;