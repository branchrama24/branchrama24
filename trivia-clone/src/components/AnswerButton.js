import React from 'react';
import './AnswerButton.css';

const AnswerButton = ({ text, onClick }) => {
  return (
    <button className="answer-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default AnswerButton;
