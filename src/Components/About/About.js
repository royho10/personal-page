import './About.css';
import processThinkerLight from './process_thinker_light.svg';
import processThinkerDark from './process_thinker_dark.svg';
import selfLearnerLight from './self_learner_light.svg';
import selfLearnerDark from './self_learner_dark.svg';
import teamPlayerLight from './team_player_light.svg';
import teamPlayerDark from './team_player_dark.svg';

const About = ({ darkModeOn }) => {
	return (
	<div id="about" className="section">
		<h1>About Me</h1>
		<div className="about-container">
			<div className="image-container">
				<h2>Fullstack Developer</h2>
				{ darkModeOn  
					? <img src={processThinkerDark} alt="process thinker" id="leftImage" />
					: <img src={processThinkerLight} alt="process thinker" id="leftImage" />
				}
			</div>
			<div className="image-container">
				<h2>Self Learner</h2>
				{ darkModeOn
					? <img src={selfLearnerDark} alt="self learner" id="centerImage" />
					: <img src={selfLearnerLight} alt="self learner" id="centerImage" />
				}
			</div>
			<div className="image-container">
				<h2>Team Player</h2>
				{ darkModeOn
					? <img src={teamPlayerDark} alt="team player" id="rightImage" />
					: <img src={teamPlayerLight} alt="team player" id="rightImage" />
				}
			</div>
		</div>
	</div>
	)
}

export default About;