import quizData from "../quiz-data";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const Quiz = () => {
	let { quizName } = useParams();
	const quiz = quizData[quizName.replace("-", " ")]
	const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

	const [currQuestionNumber, setCurrQuestionNumber] = useState(0)
	const [selectedAnswer, setSelectedAnswer] = useState(-1)
	console.log(quiz.questions[currQuestionNumber].length,quiz.questions)
	
	return ( 
		<div>
			<h1>{quizName.replace("-", " ")}</h1>
			<p>{currQuestionNumber+1 + ") " + quiz.questions[currQuestionNumber][0]} </p>
			{ [...Array(quiz.questions[currQuestionNumber].length-1).keys()].map((ind, index) => (
					<div onClick={() => {setSelectedAnswer(ind)}}>
						<p>{alphabets[ind] + ") " + quiz.questions[currQuestionNumber][ind+1][0]}</p>
					</div>
        ))}
			{ selectedAnswer > -1 &&
				<div>
					<p>{quiz.questions[currQuestionNumber][selectedAnswer+1][1]}</p>
				</div>	
			}

			{ currQuestionNumber > 0 &&
				<button onClick={() => setCurrQuestionNumber(currQuestionNumber-1)}>Prev</button>	
			}
			{ currQuestionNumber < quiz.questions[currQuestionNumber].length-2 &&
				<button onClick={() => setCurrQuestionNumber(currQuestionNumber+1)}>Next</button>
			}
		</div>
	 );
}
 
export default Quiz;