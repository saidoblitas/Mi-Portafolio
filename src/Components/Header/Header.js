import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const [isAnimated, setIsAnimated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (location.pathname === "/home" && !isAnimated) {
      const header = document.querySelector(".header-container");
      header.classList.add("animate");
      setIsAnimated(true);
    }
  }, [location, isAnimated]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".header-container")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="header-container">
      <div className="header-title">
        {location.pathname === "/home" ? "Home" : location.pathname.slice(1).toUpperCase()}
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`header-links ${isMenuOpen ? "show" : ""}`}>
        <Link to="/home" 
              className={location.pathname === "/home" ? "active" : ""} 
              onClick={handleLinkClick}>
          Home
        </Link>
        <Link to="/about" 
              className={location.pathname === "/about" ? "active" : ""} 
              onClick={handleLinkClick}>
          About
        </Link>
        <Link to="/projects" 
              className={location.pathname === "/projects" ? "active" : ""} 
              onClick={handleLinkClick}>
          Projects
        </Link>
        <Link to="/contact" 
              className={location.pathname === "/contact" ? "active" : ""} 
              onClick={handleLinkClick}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
