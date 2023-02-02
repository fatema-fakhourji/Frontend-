import React from 'react';
import './navbar.css';

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from '../../assets/logo-1.png';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
    <img src={logo} />
    		<nav ref={navRef}>
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
	);
}

export default Navbar;

// import React from 'react';
// import './navbar.css';


// import logo from '../../assets/logo-1.png';

// const Navbar = () => {
//   return (
//       <div className='navbar-section'> 
//             <div className='navbar-links'>

//           <div className='navbar-links_logo'> 
//         <img src={logo} />
//            </div> 
//            <div className='navbar-container-container'> </div>
//           <div className='navbar-links_container'>
//             <ul> 
//           <li> <p> Anass Haydar </p></li>
//           </ul>
//           </div>
//           </div>
//       </div>
//     )
//   }
// export default Navbar