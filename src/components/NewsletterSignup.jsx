import React, { useState }from "react";

import ReactDOM from "react-dom/client";


const NewsletterSignup = () => {
	const [email, setEmail] = useState('');
	const [subscribed , setSubscribed] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (email && email.includes('@') && email.includes ('.')) {
			console.log('Subscribing email:', email);
			setSubscribed(true);
			setEmail('');

			setTimeout(() => {
				setSubscribed(false);
			}, 5000);
		} else {
			alert('Please enter a valid email address');
		}
	};


	return (
		<>
		<section id="contact" className="newsletter">
			<div className="container">
				<h2>Stay Updated with NutriLife</h2>
				<p>Join the team and receive weekly updates on nutrition tips, new recipes and exclusive offers.</p>

			    {subscribed ? (
					<div className="success-message">
						<p>Thank you for subscribing! You will start receiving our updates soon.</p>
					</div>
					) : (
		
					<form 
					className="newsletter-form" onSubmit={handleSubmit}>
						<input type="email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required/>
						<button type="submit">Subscribe</button>
					</form>
				)}
			</div>
		</section>
		</>
	);
};


export default NewsletterSignup;