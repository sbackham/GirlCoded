import React from 'react';
import './ProjectPage.css';

// Any other imports you need (e.g., components, utilities, hooks)

const ProjectPage = () => {
    return (
        <div className="background-cont">
          <div className="other-cont">
            <h1 className="project-title">Web-Enabled Thermometer</h1>
            <p className="project-summary">
                This project aimed to create a web-enabled thermometer device that interfaced with both computers and mobile phones. It involved a 3-layer IoT structure, incorporating a D18B20 temperature sensor, I2C display, and Raspberry Pico microcontroller. The hardware segment addressed mechanical bouncing with a pushbutton and robust circuit construction. Backend development featured Wi-Fi connectivity configuration, mobile alerts using Twilio, and data processing. The frontend was developed using JavaScript and React, offering a real-time, interactive application for temperature display and control. Despite challenges in fully meeting front-end requirements, the project successfully integrated various technologies and components, facilitated by effective team collaboration.
            </p>
            <a href="https://github.com/fqkammona/Temperature-Sensor" target="_blank" rel="noopener noreferrer" className="project-link">
                Learn More
            </a>
          </div>
        </div>
      );
};

export default ProjectPage;


