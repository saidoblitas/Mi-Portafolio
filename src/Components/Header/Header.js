import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ isLightTheme }) => {
  const [darkMode, setDarkMode] = useState(isLightTheme);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [hideHeader, setHideHeader] = useState(false);
  const location = useLocation();

  // Función para alternar entre modo oscuro y modo claro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Función para redirigir al home
  const goToHome = () => {
    window.location.href = '/';
  };

  // Función para agregar la clase 'active-link' a los enlaces
  const getLinkClass = (path) => {
    return location.pathname === path ? 'active-link' : '';
  };

  // Detectar el desplazamiento para ocultar o mostrar el header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < prevScrollY) {
        setHideHeader(false); // Se muestra cuando se desplaza hacia arriba
      } else {
        setHideHeader(true); // Se oculta cuando se desplaza hacia abajo
      }
      setPrevScrollY(window.scrollY); // Actualiza el scroll previo
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  return (
    <div className={`header-container ${darkMode ? 'torch-on' : 'torch-off'} ${hideHeader ? 'hide-header' : ''}`}>
      <div className="header-title" onClick={goToHome}>
        I'M SAID
      </div>

      <div className="header-links">
        <Link to="/about" className={getLinkClass('/about')}>About</Link>
        <Link to="/projects" className={getLinkClass('/projects')}>Projects</Link>
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
