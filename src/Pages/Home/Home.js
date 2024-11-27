import React from 'react';
import './Home.css';
import Header from '../../Components/Header/Header';

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="welcome-text">WELCOME TO MY PORTAFOLIO</div>
    </div>
  );
};

export default Home;
