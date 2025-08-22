import React, { useState } from 'react';
import './ReportTemplate.css';
import ImageSlideshow from '../ImageSlideshow';
import ImageModal from '../ImageModal';

function ReportTemplate({ report, githubLink, liveDemoLink, behanceLink, dribbbleLink, portfolioPdf, startdate, enddate, lofiFigmaLink, hifiFigmaLink }) {
  const [modalImage, setModalImage] = useState(null);

  if (!report) {
    return null;
  }

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="project-report-template">
      {report.overview && (
        <div className="report-section">
          <h3 className="report-section-heading">{report.overview.title}</h3>
          {(startdate && enddate) && (
            <div className="report-date-badge">
              Project Duration: {startdate} - {enddate}
            </div>
          )}
          <p className="report-text-content">{report.overview.content}</p>
        </div>
      )}

      <div className="project-links">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link-button">
            View on GitHub
          </a>
        )}
        {liveDemoLink && (
          <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className="project-link-button">
            Live Demo
          </a>
        )}
        {behanceLink && (
          <a href={behanceLink} target="_blank" rel="noopener noreferrer" className="project-link-button">
            View on Behance
          </a>
        )}
        {dribbbleLink && (
          <a href={dribbbleLink} target="_blank" rel="noopener noreferrer" className="project-link-button">
            View on Dribbble
          </a>
        )}
        {lofiFigmaLink && (
          <a href={lofiFigmaLink} target="_blank" rel="noopener noreferrer" className="project-link-button">
            View Lo-fi Prototype on Figma
          </a>
        )}
        {hifiFigmaLink && (
          <a href={hifiFigmaLink} target="_blank" rel="noopener noreferrer" className="project-link-button">
            View Hi-fi Prototype on Figma
          </a>
        )}
        {portfolioPdf && (
          <a href={process.env.PUBLIC_URL + portfolioPdf} target="_blank" rel="noopener noreferrer" className="project-link-button">
            View Case Study (PDF)
          </a>
        )}
      </div>

      {report.sections.map((section, index) => (
        <div key={index} className="report-section">
          {section.heading && <h3 className="report-section-heading">{section.heading}</h3>}
          {section.content && section.image?.placement !== 'inline' && (
            <p className="report-text-content">{section.content}</p>
          )}

          {section.image && (
            section.image.image && Array.isArray(section.image.image) ? (
              <div className="report-image-block">
                <ImageSlideshow images={section.image.image} />
              </div>
            ) : (
              <div className={section.image.placement === 'inline' ? "report-inline-image-container" : "report-image-block"}>
                <img
                  src={section.image.src}
                  alt={section.image.alt}
                  className={section.image.placement === 'inline' ? 'report-column-image clickable-image' : 'report-image clickable-image'}
                  onClick={() => openModal(section.image)}
                />
                {section.image.placement === 'inline' && <p className="report-text-content">{section.content}</p>}
              </div>
            )
          )}

          {section.columns && (
            <div className="report-columns">
              {section.columns.map((column, colIndex) => (
                <div key={colIndex} className="report-column">
                  {column.subheading && <h4 className="report-column-subheading">{column.subheading}</h4>}
                  {column.body.map((item, bodyIndex) => (
                    <div key={bodyIndex}>
                      {item.subheading && <h5 className="report-body-subheading">{item.subheading}</h5>}
                      {item.type === 'text' && (
                        <p className="report-text-content">{item.value}</p>
                      )}
                      {item.type === 'image' && (
                        <div className="report-column-image-container">
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="report-column-image clickable-image"
                            onClick={() => openModal(item)}
                          />
                        </div>
                      )}
                      {item.listItems && (
                        <>
                          {item.listHeader && (
                            <h4 className="report-column-subheading">{item.listHeader}</h4>
                          )}
                          <ul className="report-going-forward-list">
                            {item.listItems.map((listItem, listIndex) => (
                              <li key={listIndex} className="report-going-forward-list-item">
                                {listItem}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {report.figmaEmbed && (
        <div className="report-section">
          <h3 className="report-section-heading">{report.figmaEmbed.title}</h3>
          {report.figmaEmbed.subheading && (
            <h4 className="report-column-subheading">{report.figmaEmbed.subheading}</h4>
          )}
          <div className="figma-embed-container">
            <iframe
              title="Figma Interactive Prototype"
              className="figma-embed"
              src={report.figmaEmbed.url}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <div className="project-links">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link-button">
            View on GitHub
          </a>
        )}
        {liveDemoLink && (
          <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className="project-link-button">
            Live Demo
          </a>
        )}
        {behanceLink && (
          <a href={behanceLink} target="_blank" rel="noopener noreferrer" className="project-link-button">
            View on Behance
          </a>
        )}
        {dribbbleLink && (
          <a href={dribbbleLink} target="_blank" rel="noopener noreferrer" className="project-link-button">
            View on Dribbble
          </a>
        )}
        {lofiFigmaLink && (
          <a href={lofiFigmaLink} target="_blank" rel="noopener noreferrer" className="project-link-button">
            View Lo-fi Prototype on Figma
          </a>
        )}
        {hifiFigmaLink && (
          <a href={hifiFigmaLink} target="_blank" rel="noopener noreferrer" className="project-link-button">
            View Hi-fi Prototype on Figma
          </a>
        )}
        {portfolioPdf && (
          <a href={process.env.PUBLIC_URL + portfolioPdf} target="_blank" rel="noopener noreferrer" className="project-link-button">
            View Case Study (PDF)
          </a>
        )}
      </div>

      {report.goingForward && (
        <div className="report-section">
          {report.goingForward.title && (
            <h3 className="report-section-heading">{report.goingForward.title}</h3>
          )}
          {report.goingForward.subheading && (
            <h4 className="report-going-forward-subheading">{report.goingForward.subheading}</h4>
          )}
          {report.goingForward.body?.map((item, index) => (
            <div key={index}>
              {item.columns && (
                <div className="report-columns">
                  {item.columns.map((column, colIndex) => (
                    <div key={colIndex} className="report-column">
                      {column.subheading && <h4 className="report-column-subheading">{column.subheading}</h4>}
                      {column.body.map((bodyItem, bodyIndex) => (
                        <div key={bodyIndex}>
                          {bodyItem.subheading && <h5 className="report-body-subheading">{bodyItem.subheading}</h5>}
                          {bodyItem.type === 'text' && (
                            <p className="report-text-content">{bodyItem.value}</p>
                          )}
                          {bodyItem.type === 'image' && (
                            <div className="report-column-image-container">
                              <img
                                src={bodyItem.src}
                                alt={bodyItem.alt}
                                className="report-column-image clickable-image"
                                onClick={() => openModal(bodyItem)}
                              />
                            </div>
                          )}
                          {bodyItem.listItems && (
                            <>
                              {bodyItem.listHeader && (
                                <h4 className="report-column-subheading">{bodyItem.listHeader}</h4>
                              )}
                              <ul className="report-going-forward-list">
                                {bodyItem.listItems.map((listItem, listIndex) => (
                                  <li key={listIndex} className="report-going-forward-list-item">
                                    {listItem}
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
              {item.type === 'text' && (
                <p className="report-text-content">{item.value}</p>
              )}
              {item.listItems && (
                <>
                  {item.listHeader && (
                    <h4 className="report-column-subheading">{item.listHeader}</h4>
                  )}
                  <ul className="report-going-forward-list">
                    {item.listItems.map((listItem, listIndex) => (
                      <li key={listIndex} className="report-going-forward-list-item">
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      )}

      {modalImage && (
        <ImageModal
          src={modalImage.src}
          alt={modalImage.alt}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default ReportTemplate;