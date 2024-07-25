// src/pages/Home.js
import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h2>Hi there,</h2>
          <h1>My name is Jacob</h1>
          <h2 className="typewriter-container">I am a&nbsp; <span className="typewriter">
            <Typewriter
              options={{
                strings: ['Fullstack Developer', 'Web Developer', 'Mobile Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </span></h2>
          <div className="home-buttons">
            <button className="btn-primary">Get In Touch</button>
            <button className="btn-secondary">Download Resume</button>
          </div>
        </div>
        <div className="home-image">
          <img src={require('../assets/images/Programming2.svg').default} alt="Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Home;
