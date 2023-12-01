import React from 'react';
import './ProjectSection.css';

  const ProjectSection = ({ projects }) => {
    // Check if projects is defined and is an array
    if (!Array.isArray(projects)) {
      // Handle the case where projects is not an array, e.g., render a fallback UI or return null
      return <div>No projects to display.</div>;
    }

    return (
      <section id="projects">

        <h2>Personal Projects</h2>
        {projects.map(project => (
          <div key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {/* other project details */}
          </div>
        ))}
      </section>
    );
  };

  export default ProjectSection;
