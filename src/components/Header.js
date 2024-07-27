// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../styles/Header.css';

const Header = ({ isDarkMode, toggleBackground }) => {
  return (
    <header className={`home-header ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>My Portfolio</h1>
      <nav aria-label="Main Navigation">
        <ul>
          <li>
            <NavLink 
              to="/home" 
              className={({ isActive }) => isActive ? `active-link ${isDarkMode ? 'dark' : 'light'}` : ''}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? `active-link ${isDarkMode ? 'dark' : 'light'}` : ''}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => isActive ? `active-link ${isDarkMode ? 'dark' : 'light'}` : ''}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? `active-link ${isDarkMode ? 'dark' : 'light'}` : ''}
            >
              Contact
            </NavLink>
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
      </nav>
    </header>
  );
};

export default Header;
