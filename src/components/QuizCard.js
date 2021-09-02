import quizData from "../quiz-data";

const QuizCard = ({quizName}) => {
	return ( 
		<a href={"/quiz/" + quizName.replace(" ", "-")}>
			<div className="">
				<p className="">{ quizName }</p>
				
				<h3 className=""> { quizData[quizName].description } </h3>

				
			</div>
		</a>
	 );
}
 
export default QuizCard;