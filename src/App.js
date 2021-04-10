import React, { Component } from 'react';
import './App.css';
import ThemeModeSwitch from './Components/ThemeModeSwitch/ThemeModeSwitch';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import QuoteGenerator from './Containers/QuoteGenerator/QuoteGenerator';
import Contact from './Components/Contact/Contact';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      darkModeOn: false
    }
    this.onChangeThemeMode = this.onChangeThemeMode.bind(this);
  }

  componentDidMount() {
    // loading dark mode theme if the user switched to it last time he visited the page
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      if (currentTheme === 'dark') {
        this.setState({ darkModeOn: true });
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('nav').style.backgroundColor = 'rgb(0 0 0 / 50%)';
        document.querySelector(".menu-items").style.backgroundColor = 'rgb(0 0 0 / 50%)';
        document.getElementById('quote-container').style.background = 'rgba(0, 0, 0, 0.4)';
        document.querySelector('input[type="checkbox"]').checked = true;
      }
    }
  }

  toggleDarkLightMode

  onChangeThemeMode = (darkModeOn) => {
    darkModeOn ? this.setState({ darkModeOn: true }) : this.setState({ darkModeOn: false });
    darkModeOn ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light');
    darkModeOn ? document.getElementById('nav').style.backgroundColor = 'rgb(0 0 0 / 50%)' : document.getElementById('nav').style.backgroundColor = 'rgb(255 255 255 / 50%)';
    darkModeOn ? document.getElementById('quote-container').style.backgroundColor = 'rgba(0, 0, 0, 0.4)' : document.getElementById('quote-container').style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    darkModeOn ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');   
  }

  render() {
    const { darkModeOn } = this.state;
    return (
      <div>
        <ThemeModeSwitch onChangeThemeMode={this.onChangeThemeMode} darkModeOn={darkModeOn} />
        <Navigation />
        <Home />
        <About darkModeOn={darkModeOn} />
        <Projects darkModeOn={darkModeOn} />
        <QuoteGenerator />
        <Contact />
      </div>
    );
  }
}

export default App;
