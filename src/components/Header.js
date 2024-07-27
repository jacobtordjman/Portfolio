// src/components/Header.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Header.css';

const Header = ({ isDarkMode, toggleBackground }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`home-header ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>My Portfolio</h1>
      <nav aria-label="Main Navigation">
        <ul className={isMobileMenuOpen ? 'nav-links active' : 'nav-links'}>
          <li>
            <Link
              to="/home"
              onClick={closeMobileMenu}
              className={location.pathname === '/home' ? `active-link ${isDarkMode ? 'dark' : 'light'}` : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className={location.pathname === '/about' ? `active-link ${isDarkMode ? 'dark' : 'light'}` : ''}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={closeMobileMenu}
              className={location.pathname === '/projects' ? `active-link ${isDarkMode ? 'dark' : 'light'}` : ''}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className={location.pathname === '/contact' ? `active-link ${isDarkMode ? 'dark' : 'light'}` : ''}
            >
              Contact
            </Link>
          </li>
          <li>
            <button
              className={`toggle-bg-button ${isDarkMode ? 'dark' : 'light'}`}
              onClick={toggleBackground}
              aria-label="Toggle Background"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
        <div className="mobile-menu-icon" onClick={handleMobileMenuToggle}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
