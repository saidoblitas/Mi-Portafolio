import React, { useState, useEffect } from "react";
import "./TorchComponent.css";

const TorchComponent = ({ onThemeChange }) => {
  const savedTheme = localStorage.getItem("isLightTheme") === "true";
  const [isChecked, setIsChecked] = useState(savedTheme);
  useEffect(() => {
    localStorage.setItem("isLightTheme", isChecked);
    onThemeChange(isChecked);
  }, [isChecked, onThemeChange]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="container">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <div className="checkmark"></div>
      <div className="torch">
        <div className="head">
          <div className="face top">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="face left">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="face right">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="stick">
          <div className="side side-left">
            {Array.from({ length: 16 }, (_, i) => (
              <div key={`left-${i}`}></div>
            ))}
          </div>
          <div className="side side-right">
            {Array.from({ length: 16 }, (_, i) => (
              <div key={`right-${i}`}></div>
            ))}
          </div>
        </div>
      </div>
    </label>
  );
};

export default TorchComponent;
