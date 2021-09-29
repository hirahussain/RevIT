import React from "react";

import { getFooterImage } from "../../lib/bestbuy";
import "./Footer.css";

export default function Footer() {
	return (
		<footer class="footer-distributed">
			<div class="footer-left">
				<h3>
					Rev<span>IT</span>
				</h3>

				<p class="footer-links">
					<a href="#">Home</a>·<a href="#">Blog</a>·<a href="#">Pricing</a>·<a href="#">About</a>·<a href="#">Faq</a>·
					<a href="#">Contact</a>
				</p>

				<p class="footer-company-name">Rev IT &copy; 2021</p>
			</div>

			<div class="footer-center">
				<div>
					<i class="fa fa-map-marker"></i>
					<p>
						<span>32 Revolution Cres</span> Melbourne, Australia
					</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+2 3233 423 322</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p>
						<a href="mailto:support@company.com">contact@revit.com</a>
					</p>
				</div>
			</div>

			<div class="footer-right">
				<p class="footer-company-about">
					<span>About the company</span>
					Rev IT is a Reviewer's Company where you find e-advisory service for available products &amp; Digital
					Services.
				</p>

				<div class="footer-icons">
					<a href="https://www.facebook.com/learnbuildteach/">
						<i class="fa fa-facebook"></i>
					</a>
					<a href="https://www.twitter.com/jamesqquick">
						<i class="fa fa-twitter"></i>
					</a>
					<a href="https://www.linkedin.com/">
						<i class="fa fa-linkedin"></i>
					</a>
					<a href="https://github.com">
						<i class="fa fa-github"></i>
					</a>
				</div>
			</div>
		</footer>
	);
}
