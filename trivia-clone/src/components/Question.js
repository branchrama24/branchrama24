import React from 'react';
import AnswerButton from './AnswerButton';
import './Question.css';

const Question = ({ question, onAnswer }) => {
  return (
    <div className="question-container">
      <h2>{question.question}</h2>
      <div className="options-container">
        {question.options.map((option, index) => (
          <AnswerButton
            key={index}
            text={option}
            onClick={() => onAnswer(option === question.answer)}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
