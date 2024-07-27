// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import '../styles/Header.css';

const Header = ({ isDarkMode, toggleBackground }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleClick = () => {
    toggleBackground();
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`home-header ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>My Portfolio</h1>
      <nav aria-label="Main Navigation">
        <ul className={menuOpen ? 'menu-open' : ''}>
          <li><Link to="/home" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
          <li><Link to="/projects" onClick={handleLinkClick}>Projects</Link></li>
          <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
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
        <button
          className="menu-toggle"
          onClick={handleMenuToggle}
          aria-label="Toggle Menu"
        >
          <FaBars />
        </button>
      </nav>
    </header>
  );
};

export default Header;
