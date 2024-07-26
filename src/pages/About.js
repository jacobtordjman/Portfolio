// src/pages/About.js
import React from 'react';
import './About.css';

const About = ({ isDarkMode }) => {
  return (
    <div className={`about-container ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>About Me</h1>
      <p>{"I'm a passionate developer..."}</p>
    </div>
  );
};

export default About;
