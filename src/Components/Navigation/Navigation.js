import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const toggleNav = () => {
	//let displayNavBars = document.getElementById("menu-items");
	let displayNavBars = document.querySelector(".menu-items");
	displayNavBars.classList.toggle("show");
	//window.getComputedStyle(displayNavBars).display === 'none' ? displayNavBars.style.display = 'flex' : displayNavBars.style.display = 'none';
}

const Navigation = () => {
	return (
	<div id="nav">
		<FontAwesomeIcon icon={faBars} className="toggleMenu" onClick={toggleNav}/>
		<div id="menu-items" className="menu-items">
			<a href="#home">HOME</a>
			<a href="#about">ABOUT</a>
			<a href="#projects">PROJECTS</a>
			<a href="#quoteGenerator">QUOTE GENERATOR</a>
			<a href="#contact">CONTACT</a>
		</div>
	</div>
	)
}

export default Navigation;