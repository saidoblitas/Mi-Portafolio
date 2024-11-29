import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const goToHome = () => {
    window.location.href = '/';
  };

  const getLinkClass = (path) => {
    return location.pathname === path ? 'active-link' : '';
  };

  return (
    <div className={`header-container ${darkMode ? 'dark' : ''}`}>
      <div className="header-title" onClick={goToHome}>
        I'M SAID
      </div>

      <div className="header-links">
        <Link to="/about" className={getLinkClass('/about')}>About</Link>
        <Link to="/projects" className={getLinkClass('/projects')}>Projects</Link> {}
        <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
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
