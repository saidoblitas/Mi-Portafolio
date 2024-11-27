import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from './Components/Loading/Loading';
import Home from '../src/Pages/Home/Home';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <Router>
      <div className="App">
        {isLoading ? <Loading /> : <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>}
      </div>
    </Router>
  );
};

export default App;
