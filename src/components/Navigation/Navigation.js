import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
	return (
		<ul className="navigation">
			<li>
				<NavLink to="/home" className="nav-link" activeClassName="active">
					Home
				</NavLink>
			</li>
			<li>
				<NavLink to="/product/All" className="nav-link" activeClassName="active">
					Products
				</NavLink>
			</li>
			<li>
				<NavLink to="/Stores" className="nav-link" activeClassName="active">
					Stores
				</NavLink>
			</li>
			<li>
				<NavLink to="/Categories" className="nav-link" activeClassName="active">
					Categories
				</NavLink>
			</li>
			<li>
				<NavLink to="/Recommendations" className="nav-link" activeClassName="active">
					Recommendations
				</NavLink>
			</li>
			<li>
				<NavLink to="/about" className="nav-link" activeClassName="active">
					About
				</NavLink>
			</li>
			<li>
				<NavLink to="/contact" className="nav-link" activeClassName="active">
					Contact
				</NavLink>
			</li>
		</ul>
	);
}
