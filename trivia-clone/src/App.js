import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Homepage.js';
import QuizPage from './pages/Quizpage.js';
import ResultPage from './pages/Resultpage.js';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/quiz" component={QuizPage} />
        <Route path="/result" component={ResultPage} />
      </Switch>
    </Router>
  );
};

export default App;
