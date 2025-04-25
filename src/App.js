import React, { useState, lazy, Suspense, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

import portfoliobg from "./assets/images/portfoliobg.webp";
import portfoliobginverse from "./assets/images/portfoliobginverse.webp";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleBackground = () => {
    setIsDarkMode(!isDarkMode);
    console.log("Dark Mode Toggled:", !isDarkMode);
  };
  const [bgLoaded, setBgLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = isDarkMode ? portfoliobg : portfoliobginverse;
    img.onload = () => setBgLoaded(true);
  }, [isDarkMode]);

  return (
    <div
      className={`App ${isDarkMode ? "dark" : "light"}`}
      style={{
        backgroundImage: bgLoaded
          ? `url(${isDarkMode ? portfoliobg : portfoliobginverse})`
          : "none",
        backgroundColor: isDarkMode ? "#1a1a1a" : "#ffffff",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        transition: "background-color 0.3s ease",
      }}
    >
      <Header isDarkMode={isDarkMode} toggleBackground={toggleBackground} />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/Portfolio" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home isDarkMode={isDarkMode} />} />
          <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
          <Route
            path="/projects"
            element={<Projects isDarkMode={isDarkMode} />}
          />
          <Route
            path="/contact"
            element={<Contact isDarkMode={isDarkMode} />}
          />
        </Routes>
      </Suspense>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
