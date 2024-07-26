// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={isDarkMode ? 'dark' : 'light'}>
      <p>© 2024 My Portfolio</p>
    </footer>
  );
};

export default Footer;
