import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import NavLink from "./components/NavBarLink";

import "./navbar.scss";
import logo from "../../assets/logo.png";

export default function NavBar() {
	const [toogleMenu, setToogleMenu] = useState(false);

	const handleBurguerClick = (e) => {
		e.preventDefault();
		setToogleMenu(!toogleMenu);
	};

	return (
		<nav className="nav">
			<NavLink exact to={"/"} activeClassName="nav__links--selected">
				<img src={logo} alt="Not found" className="nav__img" />
			</NavLink>
			<span className="nav__burguer" onClick={handleBurguerClick}>
				<span className="nav__burguer_bar"></span>
				<span className="nav__burguer_bar"></span>
				<span className="nav__burguer_bar"></span>
			</span>
			<div className={`nav__links ${toogleMenu ? "active" : ""}`}>
				<ul>
					<NavLink exact to={"/home"} activeClassName="nav__links--selected">
						<li>Home</li>
					</NavLink>
					<NavLink exact to={"/about"} activeClassName="nav__links--selected">
						<li>About</li>
					</NavLink>
					<NavLink
						exact
						to={"/newactivity"}
						activeClassName="nav__links--selected"
					>
						<li>New activity</li>
					</NavLink>
				</ul>
			</div>
		</nav>
	);
}
