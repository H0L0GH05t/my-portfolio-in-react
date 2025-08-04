import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projectsData';
import './Home.css';

function Home() {
  const profilePhotoPath = process.env.PUBLIC_URL + '/assets/profile-photo.jpg';
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    const getRandomProjects = () => {
      if (projectsData.length < 2) {
        return projectsData;
      }
      const shuffled = [...projectsData].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 2);
    };

    setFeaturedProjects(getRandomProjects());
  }, []);

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <img src={profilePhotoPath} alt="Arin Kase" className="profile-photo" />
          <p className="intro-text">
            Hello, I'm <span className="highlight-text">ARIN KASE</span>,
            a scrappy software specialist obsessed with automation and creating excellent
            user experiences.
          </p>
        </div>
      </section>

      <div className="about-cta-container">
        <Link to="/about" className="about-cta-button">
          Learn More About My Background & Skills <br /> (Resume Available Here!)
        </Link>
      </div>

      <section className="featured-projects-section">
        <h2 className="featured-title">Featured Projects</h2>
        <div className="featured-projects-grid">
          {featuredProjects.map(project => (
            <Link to={`/projects/${project.id}`} key={project.id} className="featured-project-card-link">
              <div className="featured-project-card">
                <img src={project.image} alt={project.title} className="featured-project-image" />
                <div className="featured-project-content">
                  <h3 className="featured-project-title">{project.title}</h3>
                  <p className="featured-project-summary">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link to="/projects" className="view-all-projects-button">
          View All Projects
        </Link>
      </section>
    </div>
  );
}

export default Home;