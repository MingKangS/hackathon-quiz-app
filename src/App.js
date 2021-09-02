import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/home';
import Quiz from './components/Quiz';

function App() {
  return (
    <Router>
      <div className="container">
      <Route path="/" exact component={Home} />
      <Route path="/quiz/:quizName" component={Quiz} />
      </div>
    </Router>
  );
}

export default App;
