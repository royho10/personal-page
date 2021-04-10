import React, { Component } from 'react';
import './ThemeModeSwitch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

class ThemeModeSwitch extends Component {
	onSwitchThemeMode = (event) => {
		this.props.onChangeThemeMode(event.target.checked);
	}

	render() {	
		return (
			<div className="theme-switch-wrapper">
				{ this.props.darkModeOn 
					? 	<span id="toggle-icon">
							<span className="toggle-text">Dark Mode</span>
						  	<FontAwesomeIcon icon={faMoon} className="fs-moon" />
						</span>  	
					:   <span id="toggle-icon">
							<span className="toggle-text">Light Mode</span>
						  	<FontAwesomeIcon icon={faSun} className="fs-sun" />
						</span>
				}
				<label className="theme-switch">
					<input type="checkbox" onChange={this.onSwitchThemeMode} />
					<div className="slider round"></div>
				</label>
			</div>
		)
	}
}

export default ThemeModeSwitch;