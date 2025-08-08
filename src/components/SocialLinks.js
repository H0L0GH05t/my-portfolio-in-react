import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import './SocialLinks.css';

function SocialLinks() {
  const emailAddress = 'arin.kase@gmail.com';

  return (
    <div className="social-links-container">
      <a href="https://github.com/H0L0GH05t" target="_blank" rel="noopener noreferrer" className="social-link github">
        <FaGithub size={30} />
      </a>
      <a href="https://www.linkedin.com/in/arin-kase-b6874994" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
        <FaLinkedin size={30} />
      </a>
      <a href={`mailto:${emailAddress}`} className="social-link email">
        <HiOutlineMail size={30} />
        <span className="email-text">{emailAddress}</span>
      </a>
    </div>
  );
}

export default SocialLinks;