import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const goToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className={`header-container ${darkMode ? 'dark' : ''}`}>
      <div className="header-title" onClick={goToHome}>
        I'M SAID
      </div>

      <div className="header-links">
        <Link to="/about">About</Link> {}
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="toggle-container">
        <input
          type="checkbox"
          className="toggle-switch"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
      </div>

      <div className="header-divider"></div>
    </div>
  );
};

export default Header;
