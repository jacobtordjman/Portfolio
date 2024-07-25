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

const portfoliobg = require('./assets/images/portfoliobg.png').default;
const portfoliobginverse = require('./assets/images/portfoliobginverse.png').default;

function App() {
  const [bgImage, setBgImage] = useState(portfoliobg);

  const toggleBackground = () => {
    setBgImage((prevBgImage) =>
      prevBgImage === portfoliobg ? portfoliobginverse : portfoliobg
    );
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Header toggleBackground={toggleBackground} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
