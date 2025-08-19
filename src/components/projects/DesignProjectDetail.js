import React, { useEffect } from 'react';
import ProjectNavigation from './ProjectNavigation';
import projectsData from '../../data/projectsData';
import './ProjectDetail.css';
import ReportTemplate from './ReportTemplate';

function DesignProjectDetail({ project }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [project]);

  if (!project) {
    return <div>Project not found.</div>;
  }
  return (
    <div className="project-detail">
      <h2 className="project-detail-title">{project.title}</h2>
      <img src={ process.env.PUBLIC_URL +  project.image} alt={project.title} className="project-detail-image" />
      {project.report ? (
        <ReportTemplate
          report={project.report}
          behanceLink={project.behanceLink}
          dribbbleLink={project.dribbbleLink}
          portfolioPdf={project.portfolioPdf}
        />
      ) : (
        <p className="project-detail-long-description">{project.longDescription}</p>
      )}

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