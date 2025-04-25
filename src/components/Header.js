// src/components/Header.js
import React, { memo, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import "../styles/Header.css";

const Header = ({ isDarkMode, toggleBackground }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const location = useLocation();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={`home-header ${isDarkMode ? "dark" : "light"}`}>
      <h1>Jacob Tordjman</h1>
      <nav aria-label="Main Navigation">
        <div className="header-actions">
          <div className="mobile-menu-icon" onClick={handleMobileMenuToggle}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
          {isMobileView && (
            <button
              className={`toggle-bg-button ${isDarkMode ? "dark" : "light"}`}
              onClick={toggleBackground}
              aria-label="Toggle Background"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          )}
          <ul className={isMobileMenuOpen ? "nav-links active" : "nav-links"}>
            <li>
              <Link
                to="/home"
                onClick={closeMobileMenu}
                className={
                  location.pathname === "/home"
                    ? `active-link ${isDarkMode ? "dark" : "light"}`
                    : ""
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className={
                  location.pathname === "/about"
                    ? `active-link ${isDarkMode ? "dark" : "light"}`
                    : ""
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={closeMobileMenu}
                className={
                  location.pathname === "/projects"
                    ? `active-link ${isDarkMode ? "dark" : "light"}`
                    : ""
                }
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className={
                  location.pathname === "/contact"
                    ? `active-link ${isDarkMode ? "dark" : "light"}`
                    : ""
                }
              >
                Contact
              </Link>
            </li>
            {!isMobileView && (
              <li className="toggle-bg-list-item desktop-only">
                <button
                  className={`toggle-bg-button ${isDarkMode ? "dark" : "light"}`}
                  onClick={toggleBackground}
                  aria-label="Toggle Background"
                >
                  {isDarkMode ? <FaSun /> : <FaMoon />}
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);
