// src/pages/Projects.js
import React from 'react';
import './Projects.css';

const Projects = ({ isDarkMode }) => {
  return (
    <div className={`projects-container ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>My Projects</h1>
      <p>Here are some of my projects...</p>
    </div>
  );
};

export default Projects;
