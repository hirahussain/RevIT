import React from "react";

import FooterImage from "./FooterImage";
import "./Footer.css";

export default function Footer() {
	return (
		<div className="footer">
			<div>
				<FooterImage />
			</div>
			<div>
				<p>Footer copyright 2021</p>
			</div>
		</div>
	);
}
