import React from 'react';
import './ProjectPage.css';

// Any other imports you need (e.g., components, utilities, hooks)

const ProjectPage = () => {
    return (
        <div className="background-cont">
          <div className="other-cont">
            <h1 className="project-title">Project Title</h1>
            <img className="project-image" src="image_url_here" alt="Project Title" />
            <p className="project-summary">
                Here is a brief summary of the project. You can describe the project details here.
            </p>
            <a href="link_to_project_details" target="_blank" rel="noopener noreferrer" className="project-link">
                Learn More
            </a>
            
          </div>
        </div>
      );

};

export default ProjectPage;
