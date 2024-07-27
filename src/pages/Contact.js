// src/pages/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = ({ isDarkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.5,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className={`contact-container ${isDarkMode ? 'dark' : 'light'}`}>
      <motion.h1
        className="contact-title"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        {"Let's Get In Touch"}
      </motion.h1>
      <motion.p
        className="contact-description"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        As of now, I'm not looking for any new job opportunities, but my inbox is always open if you want to communicate with me. Hit me up if you have some questions, want a collaboration, or just want to play a game of chess. I'll try to get back to you as soon as I can.
      </motion.p>
      <motion.div
        className="contact-socials"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        <h2>Here are my Socials</h2>
        <div className={`social-icons ${isDarkMode ? 'dark' : 'light'}`}>
          <a href="https://www.linkedin.com/in/jacobtordjman" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/jacobtordjman" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://leetcode.com/JakeWanSkywalker" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <FaCode />
          </a>
          <a href="mailto:jacobtordjman10220@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
