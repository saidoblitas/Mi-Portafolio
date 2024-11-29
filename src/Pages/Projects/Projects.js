import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [torch, setTorch] = useState(false);

  const toggleTorch = () => setTorch(!torch);

  return (
    <div className="project-container">
      <h1 className="project-title">ESTOS SON MIS PROYECTOS</h1>

      {/* Primer proyecto */}
      <div className="project-content">
        <div className="image-container">
          <img
            src={require("../../Assets/Images/Goloso.png")}
            alt="Restaurante El Goloso"
          />
        </div>
        <div className="project-description">
          <h2>Restaurante El Goloso</h2>
          <p>
            Un proyecto sobre un restaurante de comida usando React, HTML, CSS y
            JavaScript.
          </p>
          <a
            href="https://github.com/saidoblitas/Restaurante-El-Goloso"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={`animated-button ${torch ? "torch-on" : "torch-off"}`}
              onClick={toggleTorch}
            >
              <svg
                viewBox="0 0 24 24"
                className="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
              <span className="text">Go to Project</span>
              <span className="circle"></span>
              <svg
                viewBox="0 0 24 24"
                className="arr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
      {/* Segundo proyecto */}
      <div className="project-content">
        <div className="image-container">
          <img
            src={require("../../Assets/Images/Goloso.png")}
            alt="Restaurante El Goloso"
          />
        </div>
        <div className="project-description">
          <h2>Restaurante El Goloso</h2>
          <p>
            Un proyecto sobre un restaurante de comida usando React, HTML, CSS y
            JavaScript.
          </p>
          <a
            href="https://github.com/saidoblitas/Restaurante-El-Goloso"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={`animated-button ${torch ? "torch-on" : "torch-off"}`}
              onClick={toggleTorch}
            >
              <svg
                viewBox="0 0 24 24"
                className="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
              <span className="text">Go to Project</span>
              <span className="circle"></span>
              <svg
                viewBox="0 0 24 24"
                className="arr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>

      {/* Más proyectos */}
    </div>
  );
};

export default Projects;
