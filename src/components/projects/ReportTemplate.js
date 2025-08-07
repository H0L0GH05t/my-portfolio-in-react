import React from 'react';
import './ReportTemplate.css';

function ReportTemplate({ report }) {
  if (!report) {
    return null; // Return nothing if no report data is provided
  }

  // Render report text block
  const renderTextBlock = (block) => (
    <div key={block.heading} className="report-text-block">
      {block.heading && <h4 className="report-section-heading">{block.heading}</h4>}
      {block.content && <p className="report-text-content">{block.content}</p>}
    </div>
  );

  // Render report image block
  const renderImageBlock = (block) => (
    <div key={block.image.src} className="report-image-block">
      <img src={block.image.src} alt={block.image.alt} className="report-image" />
    </div>
  );

  return (
    <div className="project-report-template">
      {report.overview && (
        <div className="report-overview">
          <h3 className="report-overview-heading">{report.overview.title}</h3>
          <p className="report-overview-content">{report.overview.content}</p>
        </div>
      )}

      {report.sections.map((section, index) => {
        // Render different content based on the properties of the section object
        if (section.heading) {
          return renderTextBlock(section);
        } else if (section.image) {
          return renderImageBlock(section);
        }
        return null;
      })}

      {report.goingForward && (
        <div className="report-going-forward">
          <h3 className="report-going-forward-heading">{report.goingForward.title}</h3>
          <p className="report-going-forward-content">{report.goingForward.content}</p>
        </div>
      )}
    </div>
  );
}

export default ReportTemplate;