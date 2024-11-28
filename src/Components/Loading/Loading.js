import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loading.css';

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const letters = "Loading...".split("");

  return (
    <div className="loading-container">
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
