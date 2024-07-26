// src/App.js
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

import portfoliobg from './assets/images/portfoliobg.jpg';
import portfoliobginverse from './assets/images/portfoliobginverse.jpg';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleBackground = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`App ${isDarkMode ? 'dark' : 'light'}`}
      style={{
        backgroundImage: `url(${isDarkMode ? portfoliobg : portfoliobginverse})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <Header isDarkMode={isDarkMode} toggleBackground={toggleBackground} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home isDarkMode={isDarkMode} />} />
        <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
        <Route path="/projects" element={<Projects isDarkMode={isDarkMode} />} />
        <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
      </Routes>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
