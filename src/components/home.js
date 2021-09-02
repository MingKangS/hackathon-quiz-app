import quizData from "../quiz-data";
import QuizCard from "./QuizCard";
import { useState } from "react";

const Home = () => {
	const [displayedQuizCards, setDisplayedQuizCards] = useState(Object.keys(quizData))
	console.log(displayedQuizCards)
	return ( 
		<div>
			{ displayedQuizCards.map((quiz, index) => (
          <QuizCard quizName={quiz}/>
        ))}
		</div>
	 );
}
 
export default Home;