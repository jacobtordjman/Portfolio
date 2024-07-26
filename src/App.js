// src/App.js
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

const portfoliobg = require('./assets/images/portfoliobg.jpg').default;
const portfoliobginverse = require('./assets/images/portfoliobginverse.jpg').default;

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
        <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
      </Routes>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;