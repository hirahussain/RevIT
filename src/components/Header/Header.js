import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";

import Navigation from "../Navigation/Navigation";
import Search from "./Search";

export default function Header(props) {
	const [formData, setFormData] = useState("");
	const path = useLocation().pathname;
	const location = path.split("/")[1];

	return (
		<div className={"header " + location}>
			<Navigation />

			<div className="header-content">
				{location === "home" ? (
					<>
						<h2> We keep only Genuine and Useful Reviews from Real Users like U</h2>
						<Search setCache={props.setCache} />
					</>
				) : (
					<h4>{location}</h4>
				)}
			</div>
		</div>
	);
}
