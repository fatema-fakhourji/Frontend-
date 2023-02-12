import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from '../../assets/logo-1.png';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<div>
	      <Link to="/login">
          <button className='login-button'>Login</button>
        </Link>

		<header>
			
    <img src={logo} />
    		<nav ref={navRef}>
			<p> Anass Haydar </p>
				<a onClick={() => document.getElementById("about").scrollIntoView()}>About</a>
				<a onClick={() => document.getElementById("skills").scrollIntoView()}>Skills</a>
				<a onClick={() => document.getElementById("projects").scrollIntoView()}>Projects</a>
				<a onClick={() => document.getElementById("certificates").scrollIntoView()}>Certificates</a>
				<a onClick={() => document.getElementById("contact").scrollIntoView()}>Contact</a>


				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
		</div>
	);
}

export default Navbar;

