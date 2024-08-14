import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { questions } from '../data/questions';
import Question from '../components/Question';
import './QuizPage.css';

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const history = useHistory();

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      history.push('/result', { score, total: questions.length });
    }
  };

  return (
    <div className="quiz-container">
      <Question
        question={questions[currentQuestionIndex]}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default QuizPage;
