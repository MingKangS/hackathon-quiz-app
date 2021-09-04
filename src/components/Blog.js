import pay from '../styles/hackathon-pay.png';

const p = " In an age where life is always greener on other people’s social media feeds, the old adage of saving money goes against human behaviour and our basic social need for acceptance and status. \nAdditionally, the fact that almost 90% of Malaysians earn under RM5,000 in monthly wages amidst rising costs of living* explains why the level of debt is high amongst Malaysians**. In cases like these, the notion of building wealth becomes seemingly impossible.\nInstead of comparing your life to someone else’s Instagram feed, we advocate being smart about minding your wealth. While earnings and risk tolerance differ from individual to individual, here are some handy principles to consider in your 20s for a financially secure future."
const p2 = "\nThe 20s is the most important stage to build good money habits that can secure a sound financial future. While your earnings are at entry level, the good news is that your debt and expense levels are also relatively low. At this stage in your life, your priority should be putting your money to work and building your career. \n1. ESTABLISH A BUDGET\nAccident Pro Prime\nFirst and foremost, establish a budget. It’s always a good idea to live within your means at the start of your career. A rule of thumb would be to look at putting your money into various ‘buckets’.  Allocate at least 10% of your salary to build an Emergency Bucket of at least RM10,000. Following that, you could look at a further 15% for long term savings and investments (more about that later). Next, deduct what you need to repay loans or other debts. And from the remainder, create a budget for expenses such as transportation, food, mobile or internet bills, leisure activities, clothing and other needs."

const Blog = () => {
	return ( 
		<div className="">
			<div className="navbar"><h1 className="appName">InteractiveFinancialLiteracyQuiz</h1></div>
			<div className="flex">
				<h1 className="blogh1">How to manage money in your twenties</h1>
				<img src={pay} className="img"></img>
				<p className="blogp">&emsp;&emsp;{p}<br></br><br></br><br></br>&emsp;&emsp;{p2}<br></br><br></br><br></br>&emsp;&emsp;{p2.slice(20)}<br></br><br></br><br></br>&emsp;&emsp;{p}</p>
			</div>
			<div className="footer"></div>
		</div>
	 );
}
 
export default Blog;