import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
	return (
	<div id="contact" className="section title-group">
		<h1>Contact</h1>
		<div className="social-icons">
			<FontAwesomeIcon icon={faGithub} className="icon" />
			<FontAwesomeIcon icon={faLinkedin} className="icon" />
		</div>		
	</div>
	)
}

export default Contact;