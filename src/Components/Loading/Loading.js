import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loading.css';

const Loading = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        navigate('/home');
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const letters = "Loading...".split("");

  return (
    <div className={`loading-container ${!isVisible ? 'fade-out' : ''}`}>
      <div className="loading-text">
        {letters.map((letter, index) => (
          <span key={index} style={{ '--i': index + 1 }}>
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loading;
