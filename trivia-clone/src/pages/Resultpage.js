import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import './ResultPage.css';

const ResultPage = () => {
  const location = useLocation();
  const history = useHistory();
  const { score, total } = location.state;

  return (
    <div className="result-container">
      <h1>Quiz Completed!</h1>
      <p>Your Score: {score}/{total}</p>
      <button onClick={() => history.push('/')}>Go Home</button>
    </div>
  );
};

export default ResultPage;
