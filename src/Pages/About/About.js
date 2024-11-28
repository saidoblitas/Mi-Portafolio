import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container-about">
      <div className="about-content-about">
        <div className="text-section-about">
          <h1 className="title-about">
            <span className="hidden-text">Sobre mí</span>
          </h1>
          <p className="description-about">Soy desarrollador Front-end.</p>
          <p className="description-about">
            Me apasiona crear soluciones digitales atractivas y fáciles de usar,
            siempre enfocado en mejorar la experiencia del usuario.
          </p>
        </div>


        <div className="image-section-about">
          <img
            src={require('../../Assets/Images/perfil.png')}
            alt="Perfil"
            className="profile-image-about"
          />
        </div>
      </div>

      <div className="image-gallery-about">
        <img src={require('../../Assets/Images/yo1.jpg')} alt="Imagen 1" />
        <img src={require('../../Assets/Images/yo2.jpg')} alt="Imagen 2" />
        <img src={require('../../Assets/Images/yo3.jpg')} alt="Imagen 3" />
        <img src={require('../../Assets/Images/yo4.png')} alt="Imagen 4" />
      </div>
    </div>
  );
};

export default About;
