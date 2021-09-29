import React from "react";
import { getAbouttImage } from "../../lib/bestbuy";
import "./About.css";

export default function About() {
	return (
		<div className="about">
			<p>Page Under Construction.</p>
			<br />
			<br />
			<br />
			{getAbouttImage()}
		</div>
	);
}
