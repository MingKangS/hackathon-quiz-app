import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/home';
import Quiz from './components/Quiz';
import Blog from './components/Blog';
import login from './components/logIn';
import './styles/home.css';
import './styles/quiz.css';
import './styles/quizCard.css';
import './styles/congrats.css';


function App() {
  return (
    <Router>
      <div className="container">
      <Route path="/" exact component={login} />
			<Route path="/home" exact component={Home} />
      <Route path="/quiz/:quizName" component={Quiz} />
			<Route path="/blog" component={Blog} />
      </div>
    </Router>
  );
}

export default App;
