import React, { useState } from 'react';
import certificatesData from '../data/certificatesData';
import './About.css';

function About() {
  const [openCertCategories, setOpenCertCategories] = useState({});

  // Function to toggle the state of a certificate category
  const toggleCategory = (categoryId) => {
    setOpenCertCategories(prevState => ({
      ...prevState,
      [categoryId]: !prevState[categoryId]
    }));
  };

  // Function to handle resume download
  const handleDownloadResume = () => {
    const resumePath = process.env.PUBLIC_URL + '/assets/ArinKase_Resume.pdf';

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'ArinKase_Resume.pdf'; // Suggested filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>

      <section className="about-section">
        <h3 className="section-heading">Give me a problem, and I'll solve it.</h3>
        <p className="section-content">
          I have a passion for innovation, quality, and efficiency, proven ability to design,
           develop, and implement complex software solutions using various programming languages
            and frameworks, as well as expertise in backend development, and automation. With
             strong analytical and problem-solving skills and a history of successfully
              leading and mentoring junior engineers, I can help drive a product to success.
        </p>
      </section>

      <section className="about-section">
        <h3 className="section-heading">Skills</h3>
        <p className="section-content">
          <ul>
            <li><b>Programming Languages:</b></li>
            <ul><li>Python, JavaScript, C#, C++, XSLT, XML, Java</li></ul>
            <li><b>Frameworks:</b></li>
            <ul><li>Django, Flask, React, .NET</li></ul>
            <li><b>Databases:</b></li>
            <ul><li>MongoDB, PostgreSQL, MySQL, MSSQL</li></ul>
            <li><b>APIs:</b></li>
            <ul><li>RESTful API Development, API Endpoint Testing</li></ul>
            <li><b>Automation:</b></li>
            <ul><li>Scripting (Python, JavaScript, Bash), Selenium, Test Driven Development</li></ul>
            <li><b>Machine Learning:</b></li>
            <ul><li>Familiarity with Machine Learning concepts, PyTorch, Scikit-learn</li></ul>
            <li><b>Soft Skills:</b></li>
            <ul><li>Leadership, Teamwork, Communication, Problem-Solving, Analytical Thinking, Technical Writing and Documentation</li></ul>
          </ul>
        </p>
      </section>

      <section className="about-section">
        <h3 className="section-heading">Work Experience</h3>
        <p className="section-content">
          Here's a brief overview of my professional journey:
          <ul>
            <li><b>Contractor</b> at Alignerr (Feb 2025 - Present)</li>
            <li><b>Contributor</b> at Outlier AI (Oct 2024 - Present)</li>
            <li><b>Professional Development</b> [see certificates] (July 2023 - Present)</li>
            <li><b>Software Engineer II</b> at Iteris (Oct 2022 - June 2023)</li>
            <li><b>Software Engineer II</b> at Gates Corporation (Nov 2020 - Sept 2022)</li>
            <li><b>Software Engineer</b> at DataRobot (July 2019 - Nov 2019)</li>
            <li><b>Software Engineer</b> at Agfa Graphics (June 2014 - May 2019)</li>
          </ul>
        </p>
        <button onClick={handleDownloadResume} className="download-resume-button">
          Download My Resume
        </button>
      </section>

      <section className="about-section certificates-section">
        <h3 className="section-heading">Certificates & Courses</h3>
        {certificatesData.map(group => (
          <div key={group.id} className="certificate-group">
            <button
              className="certificate-group-toggle"
              onClick={() => toggleCategory(group.id)}
              aria-expanded={!!openCertCategories[group.id]} // Accessibility attribute
            >
              {group.category} {openCertCategories[group.id] ? '▲' : '▼'}
            </button>
            <div className={`certificate-list ${openCertCategories[group.id] ? 'open' : 'closed'}`}>
              <ul>
                {group.certificates.map(cert => (
                  <li key={cert.name + cert.issuer}>
                    <strong>{cert.name}</strong> from {cert.issuer} ({cert.date})
                    {cert.link && (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certificate-link">
                        {' '}View Credential
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
      {/* Add more sections like Skills, Education, etc. */}
    </div>
  );
}

export default About;