import quizData from "../quiz-data";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import congrats from '../styles/congrats.png';
import finance from '../styles/hackathon-finance.png';
import money from '../styles/hackathon-money.png';
import pay from '../styles/hackathon-pay.png';
import mortgage from '../styles/hackathon-mortgage.png';
import home from '../styles/hackathon-home.png';
import dissapointed from '../styles/hackathon-dissapointed.png';

const Quiz = () => {
	let { quizName } = useParams();
	const quiz = quizData[quizName.replace("-", " ")]
	const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

	const [currQuestionNumber, setCurrQuestionNumber] = useState(0)
	const [selectedAnswer, setSelectedAnswer] = useState(-1)
	const [points, setPoints] = useState(0)
	//console.log(quiz.questions[currQuestionNumber].length,quiz.questions)

	const selectAnswer = (ind) => {
		setSelectedAnswer(ind)
		console.log(quiz.questions[currQuestionNumber][ind+1][2], points)
		if (quiz.questions[currQuestionNumber][ind+1][2]) setPoints(points+1)
	}
	
	return ( 
		<div>
			<div className="navbar"><h1 className="appName">InteractiveFinancialLiteracyQuiz</h1></div>
			{
				currQuestionNumber >= quiz.questions.length &&
					<div className="congratsContainer">
						

						{
							points > quiz.questions.length / 2 &&
								<div className="congratsContainer">
									<h1 className="congratsh1">Congratulations!</h1>
									<h3 className="congratsh3">You have scored <b>{points} out of {quiz.questions.length}</b> questions and succesfully completed the quiz: <b>{quizName.replace("-", " ")}.</b></h3>
									<img src={congrats} className="congratsImg"></img>
									<h3 className="h3">Well done on the quiz! It seems that you good financial knowledge on this topic. You have earned yourself a discount on the following <b>Hong Leong Bank</b> products: </h3>
									<div className="quizCardContainer">
										<a className="productCard defaultText" href="https://www.hlb.com.my/en/personal-banking/loans/property-loan/home-loan.html">
												<img src={home} className="productImg"></img>
												<h4 className="productTitle"> Home Loan </h4>
												<h3 className="productDesc">If you’re thinking of getting a new home, Hong Leong Bank’s Housing Loan is the one for you. A competitive home loan package with flexibility to make extra payment and daily interest calculation that will help you save in interest.Daily interest calculation for interest saving. A term loan facility to suit your financial needs. Mortgage Decreasing Term Assurance is a term life insurance that covers death and total permanent disability. Provide additional financial protection for you and your family with slight increase on your monthly instalments. Flexibility to make extra payments in any amount at any time. Hassle free payment with: Standing Instructions from your Hong Leong Bank / Hong Leong Islamic Bank savings/current account. MEPS IBG/Internet Banking (e.g. www.hongleongconnect.my)</h3>
										</a>
										<a className="productCard defaultText" href="https://www.hlb.com.my/en/personal-banking/loans/property-loan/mortgage-plus.html">
												<img src={mortgage} className="productImg"></img>
												<h4 className="productTitle"> MortgagePlus </h4>
												<h3 className="productDesc"> With MortgagePlus you can finance your property with complete flexibility to save on interest automatically. MortgagePlus links your Home Loan to a current account to give you more savings. The daily balance in your current account is automatically offset against your principal home loan account, thus reducing your daily interest charges nterest on your loan is computed on daily basis and is reduced as soon as extra payment is made. Maximize on interest saving when you consolidate all your funds into current account linked to the loan and utilize this account for all your banking transactional needs. Quick access to your funds via branch, cheque book, ATM and Internet Banking from your current account. Designed with you in mind, making it easier and more affordable for you to own a home.</h3>
										</a>
										
									</div>
								</div>
						}

						{
							points <= quiz.questions.length / 2 &&
								<div className="congratsContainer">
									<h1 className="toughLuckh1">Tough luck!</h1>
									<h3 className="congratsh3">You have scored <b>{points} out of {quiz.questions.length}</b> questions on the following quiz: <b>{quizName.replace("-", " ")}.</b></h3>
									<img src={dissapointed} className="congratsImg"></img>
									<h3 className="h3">We have found some gaps in your financial literacy knowledge. You might find the following blogs useful and interesting:</h3>
									<div className="quizCardContainer">
										<a className="card defaultText" href="../blog">
											<div >
												<img src={pay} className="blogImg"></img>
												<h4 className="blogTitle"> How to manage money in your twenties </h4>
											</div>
										</a>
										<a className="card defaultText" href="../blog">
											<div >
												<img src={finance} className="blogImg"></img>
												<h4 className="blogTitle"> Entering the world of investments </h4>
											</div>
										</a>
										<a className="card defaultText" href="../blog">
											<div >
												<img src={money} className="blogImg"></img>
												<h4 className="blogTitle"> Loans: how do we do it right? </h4>
											</div>
										</a>
									</div>
								</div>
						}

						<p className="congratsp">Share your new learnings with friends!</p>
						<div className="shareContainer">
							<div className="shareFacebook"><h4 className="shareh4">Facebook</h4></div>
							<p>or</p>
							<div className="shareTwitter"><h4 className="shareh4">Twitter</h4></div>
						</div>
						<p className="returnHome">Click here to return to <a href="/">home page.</a></p>
						<div className="footer"></div>
					</div>
			}

			{
				currQuestionNumber < quiz.questions.length &&
				<>
				<h1 className="title">{quizName.replace("-", " ")}</h1>
				<p className="question">{currQuestionNumber+1 + ") " + quiz.questions[currQuestionNumber][0]} </p>
				{ [...Array(quiz.questions[currQuestionNumber].length-1).keys()].map((ind, index) => (
						<div className={ind == selectedAnswer ? quiz.questions[currQuestionNumber][ind+1][2] ? "correctOption": "wrongOption" : "option"} onClick={() => selectAnswer(ind)}>
							<p className="optionText">{alphabets[ind] + ") " + quiz.questions[currQuestionNumber][ind+1][0]}</p>
						</div>
					))}
				{ selectedAnswer > -1 &&
					<div className="explanation">
						<p>{quiz.questions[currQuestionNumber][selectedAnswer+1][1]}</p>
					</div>	
				}

				<div className="buttonContainer">
					{ currQuestionNumber > 0 &&
					<button 
						className="prevButton button" 
						onClick={() => {
							setCurrQuestionNumber(currQuestionNumber-1)
							setSelectedAnswer(-1)
						}}
					>
						Prev
					</button>	
				}
				{ currQuestionNumber < quiz.questions.length &&
					<button 
						className="nextButton button" 
						onClick={() => {
							setCurrQuestionNumber(currQuestionNumber+1)
							setSelectedAnswer(-1)
						}}
					>
						Next
					</button>
				}
				</div>
				</>
			}
		</div>
	 );
}
 
export default Quiz;