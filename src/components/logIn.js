const login = () => {
	return ( 
		<div className="geryBg c h100">
			<div className="form">
				<h1 className="formh1">Welcome to Interactive Financial Literacy Quiz!</h1>
				<h3 className="formh3">Please sign up using:</h3>
				<div className="shareContainer">
					<a href="/home" className="defaultText shareFacebook"><div className="shareFacebook"><h4 className="shareh4">Facebook</h4></div></a>
					<p>or</p>
					<a href="/home" className="defaultText shareFacebook"><div className="shareTwitter"><h4 className="shareh4">Twitter</h4></div></a>
				</div>
				
			</div>
			
		</div>
	 );
}
 
export default login;