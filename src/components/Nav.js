import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const logoPath = process.env.PUBLIC_URL + '/assets/logo.png';

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="brand-link">
          <img src={logoPath} alt="Arin Kase Logo" className="logo" />
          <span className="brand-name">ARIN KASE</span>
        </Link>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;