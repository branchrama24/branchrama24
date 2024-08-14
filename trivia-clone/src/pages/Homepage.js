import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Trivia OOP</h1>
      <Link to="/quiz">
        <button className="start-button">Start Quiz</button>
      </Link>
    </div>
  );
};

export default HomePage;
