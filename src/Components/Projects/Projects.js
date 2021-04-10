import './Projects.css';
import taskManagementLight from './task_management_light.svg';
import taskManagementDark from './task_management_dark.svg';

const Projects = ({ darkModeOn }) => {
	return (
	<div id="projects" className="section">
		<h1>My Projects</h1>
		<div className="projects-container">
			<div className="image-container">
				<h2>Task Management</h2>
				{ darkModeOn  
					? <img src={taskManagementDark} alt="task manangement" id="taskManagementLightImage" />
					: <img src={taskManagementLight} alt="task manangement" id="taskManagementDarkImage" />
				}
			</div>
		</div>
	</div>
	)
}

export default Projects;