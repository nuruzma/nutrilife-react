import React from "react";


const Footer = () => {
	const currentYear = new Date().getFullYear();


	return (
		<footer>
			<div className="footer-container">
				<div className="footer-section about">
					<h3>NutriLife</h3>
					<p>Your trusted guide to healthy living through balanced nutrition, effective fitness, and mindful wellness practice</p>
					<div className="social-media">
						<a href="#" aria-label="Facebook"> 
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="#" aria-label="Twitter">
							<i className="fab fa-twitter"></i>
						</a>
						<a href="#" aria-label="Instagram">
							<i className="fab fa-instagram"></i>
						</a>
						<a href="#" aria-label="Pinterest">
							<i className="fab fa-pinterest-p"></i>
						</a>
					</div>
				</div>

				<div className="footer-section quick-links">
					<h3>Quick Links</h3>
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">Categories</a></li>
						<li><a href="#">Articles</a></li>
						<li><a href="#">Calculators</a></li>
						<li><a href="#">Contact</a></li>
						<li><a href="#">FAQ</a></li>
					</ul>
				</div>

				<div className="footer-section resources">
					<h3>Resources</h3>
					<ul>
						<li><a href="#">Nutrition Guides</a></li>
						<li><a href="#">Workout Plans</a></li>
						<li><a href="#">Recipes</a></li>
						<li><a href="#">Mental Health</a></li>
					</ul>
				</div>

				<div className="footer-section contact">
					<h3>Contact Us</h3>
					<p>Email: info@nutrilife.com</p>
					<p>Phone: (123) 456-7890</p>
					<p>Address: 123 Health Street, Wellness City, WC 12345</p>
				</div>
			</div>

			<div className="copyright">
				<p>&copy; {currentYear} NutriLife. All rights reserved</p>
			</div>
		</footer>
	);
};


export default Footer;

