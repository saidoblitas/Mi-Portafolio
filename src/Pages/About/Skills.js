import React from 'react';
import '../../Pages/About/About.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Mis Habilidades</h2>
      <div className="skills-list">
        <div className="skill">
          <h3 className="skill-title">HTML</h3>
          <div className="skill-bar">
            <div className="skill-level html"></div>
          </div>
        </div>
        <div className="skill">
          <h3 className="skill-title">CSS</h3>
          <div className="skill-bar">
            <div className="skill-level css"></div>
          </div>
        </div>
        <div className="skill">
          <h3 className="skill-title">JavaScript</h3>
          <div className="skill-bar">
            <div className="skill-level js"></div>
          </div>
        </div>
        <div className="skill">
          <h3 className="skill-title">React</h3>
          <div className="skill-bar">
            <div className="skill-level react"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
