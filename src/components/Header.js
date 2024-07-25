// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ toggleBackground }) => {
  return (
    <header className="home-header">
      <h1>My Portfolio</h1>
      <nav aria-label="Main Navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><button className="toggle-bg-button" onClick={toggleBackground}>Toggle Background</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
