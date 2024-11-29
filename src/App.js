import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Project from "./Pages/Projects/Projects";
import Header from "./Components/Header/Header";
import TorchComponent from "./Components/TorchComponent/TorchComponent";
import "./App.css";

const App = () => {
  const savedTheme = localStorage.getItem("isLightTheme") === "true";

  const [isLightTheme, setIsLightTheme] = useState(savedTheme);

  useEffect(() => {
    localStorage.setItem("isLightTheme", isLightTheme);
  }, [isLightTheme]);

  const handleThemeChange = (isChecked) => {
    setIsLightTheme(isChecked);
  };

  return (
    <Router>
      <div className={`App ${isLightTheme ? "light-theme" : "dark-theme"}`}>
        <TorchComponent
          isLightTheme={isLightTheme}
          onThemeChange={handleThemeChange}
        />
        <Header isLightTheme={isLightTheme} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
