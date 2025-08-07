import React from 'react';
import ProjectNavigation from './ProjectNavigation';
import projectsData from '../../data/projectsData';
import './ProjectDetail.css';
import ReportTemplate from './ReportTemplate';

function CodingProjectDetail({ project }) {
  return (
    <div className="project-detail">
      <h2 className="project-detail-title">{project.title}</h2>
      <img src={ process.env.PUBLIC_URL + project.image} alt={project.title} className="project-detail-image" />
      {project.report ? (
        <ReportTemplate report={project.report} />
      ) : (
        <p className="project-detail-long-description">{project.longDescription}</p>
      )}

      <div className="project-links">
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link-button">
            View on GitHub
          </a>
        )}
        {project.liveDemoLink && (
          <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="project-link-button">
            Live Demo
          </a>
        )}
      </div>

      <ProjectNavigation currentProjectId={project.id} projectsData={projectsData} />
    </div>
  );
}

export default CodingProjectDetail;