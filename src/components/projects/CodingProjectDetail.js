import React, { useEffect } from 'react';
import ProjectNavigation from './ProjectNavigation';
import projectsData from '../../data/projectsData';
import './ProjectDetail.css';
import ReportTemplate from './ReportTemplate';

function CodingProjectDetail({ project }) {
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
      <img src={ process.env.PUBLIC_URL + project.image} alt={project.title} className="project-detail-image" />
      {project.report ? (
        <ReportTemplate
          report={project.report}
          githubLink={project.githubLink}
          liveDemoLink={project.liveDemoLink}
          startdate={project.startdate}
          enddate={project.enddate}
          lofiFigmaLink={project.lofiFigmaLink}
          hifiFigmaLink={project.hifiFigmaLink}
        />
      ) : (
        <p className="project-detail-long-description">{project.longDescription}</p>
      )}

      <ProjectNavigation currentProjectId={project.id} projectsData={projectsData} />
    </div>
  );
}

export default CodingProjectDetail;