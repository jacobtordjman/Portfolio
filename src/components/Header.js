// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../styles/Header.css';

const Header = ({ isDarkMode, toggleBackground }) => {
  const handleToggleClick = () => {
    console.log("Toggling Dark Mode from Header");
    toggleBackground();
  }

  return (
    <header className={`home-header ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>My Portfolio</h1>
      <nav aria-label="Main Navigation">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <button 
              className={`toggle-bg-button ${isDarkMode ? 'dark' : 'light'}`} 
              onClick={handleToggleClick}
              aria-label="Toggle Background"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
