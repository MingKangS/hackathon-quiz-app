import quizData from "../quiz-data";

const QuizCard = ({quizName}) => {
	return ( 
		<a className="quizCard defaultText" href={"/quiz/" + quizName.replace(" ", "-")}>
			<div >
				<p className="cardTitle">{ quizName }</p>
				<p className="numOfQuestions">{quizData[quizName].questions.length + " Questions" }</p>
				<h3 className="cardDescription"> { quizData[quizName].description } </h3>

				
			</div>
		</a>
	 );
}
 
export default QuizCard;