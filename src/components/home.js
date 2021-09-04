import quizData from "../quiz-data";
import QuizCard from "./QuizCard";
import { useState, useEffect } from "react";

const Home = () => {
	const [displayedQuizCards, setDisplayedQuizCards] = useState(Object.keys(quizData))
	const [selectedcategories, setSelectedcategories] = useState([])

	const categories = ["Investments", "Spending", "Financial planning", "Loans", "Credit cards", "Career", "Retirement"]

	useEffect(() => {
		const newDisplayedQuizCards = [...Object.keys(quizData)].filter((q) => {
			//console.log(quizData[q].categories.filter(value => selectedcategories.includes(value)).length > 0)
			return selectedcategories.length == 0 || quizData[q].categories.filter(value => selectedcategories.includes(value)).length > 0;
		})
		setDisplayedQuizCards(newDisplayedQuizCards)
		
	}, [selectedcategories])

	const toggleCategory = (c) => {
		if (!selectedcategories.includes(c)) {
			console.log(selectedcategories.concat(c))
			setSelectedcategories(selectedcategories.concat(c))
		} else {
			const ind = selectedcategories.indexOf(c)
			console.log(ind, selectedcategories.slice(0,ind), selectedcategories.slice(ind+1))
			setSelectedcategories(selectedcategories.slice(0,ind).concat(selectedcategories.slice(ind+1)))
		};
		
	}
	//console.log(displayedQuizCards)
	return ( 
		<div className="geryBg">
			<div className="navbar"><h1 className="appName">InteractiveFinancialLiteracyQuiz</h1></div>
			<div>
				<h2 className="sectionLabel">Categories</h2>
				<div className="categoryContainer">
					{ categories.map((c, index) => (
						<div className={!selectedcategories.includes(c) ? "categoryDiv" : "selectedCategoryDiv"} onClick={() => toggleCategory(c)}><p className="category">{c}</p></div>
					))}
				</div>
			</div>
			<div className="quizCardContainer">
				{ displayedQuizCards.map((quiz, index) => (
          <QuizCard quizName={quiz}/>
        ))}
			</div>
			
		</div>
	 );
}
 
export default Home;