// src/pages/Home.js
import React from 'react';
import '../styles/Home.css';
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';

import Programming from '../assets/images/Programming.svg';
import ProgrammingInverse from '../assets/images/ProgrammingInverse.svg';

const Home = ({ isDarkMode }) => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '../assets/files/CV.pdf';
    link.download = 'Jacob Tordjman.pdf';
    link.click();
  };

  return (
    <div className={`home-container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="home-content">
        <div className="home-text">
          <h2>Hi there,</h2>
          <h1>My name is Jacob</h1>
          <div className="intro-text">
            <h2>I am a&nbsp;</h2>
            <h2 className="typewriter-container">
              <Typewriter
                options={{
                  strings: ['Fullstack Developer', 'Web Developer', 'Mobile Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          </div>
          <div className="home-buttons">
            <button className={`btn-primary ${isDarkMode ? 'dark' : 'light'}`} onClick={handleContactClick}>Get In Touch</button>
            <button className={`btn-secondary ${isDarkMode ? 'dark' : 'light'}`} onClick={handleDownloadResume}>Download Resume</button>
          </div>
        </div>
        <div className={`coding-image ${isDarkMode ? 'dark' : 'light'}`}>
          <img src={isDarkMode ? Programming : ProgrammingInverse} alt="Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Home;
