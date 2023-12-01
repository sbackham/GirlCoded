import React from 'react';
import Navbar from '../Components/Navbar';
import Comments from '../Components/Comments';
import ProjectSection from '../Components/ProjectSection';
import PhotoGallery from '../Components/PhotoGallery';

const projects = [
{
      id: 1,
      title: "Another Project",
      description: "description",
      imageUrl: "path/to/project1-image.jpg", // Replace with the actual path or import
      link: "http://link-to-project1.com"
    },
  {
    id: 1,
    title: "RFID Attendance System",
    description: "Utilized an Arduino Uno, RFID Scanner, LCD, PLX-DAQ excel add-on and MFRC522 library. Created an RFID key-fob scanning attendance system that verifies the owner’s validity against the existing database of valid UIDs, and uses LEDs, an LCD display, and a buzzer to signal if the owner is allowed access. Used the MFRC522 Library for Arduino to read and write RFID. Used PLX-DAQ for Arduino to Excel for real-time serial data communication",
  },
  // ... more projects
];

const FatimaPersonalPage = () => {
  return (
    <>
      <main>
        <section id="introduction">
          <div>
            <h1>Hello! My name is Fatima Kammona</h1>
            <p>Description about me and my personal interests and work: blah blah blah!</p>
          </div>

        </section>
        <ProjectSection projects={projects} />
        <div className="RFID-Project">
          <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/oqcNgqPrAtc"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen>
                </iframe>
        </div>
        <h2>Photo Gallery</h2>
        <PhotoGallery photos={photos} />
      </main>
    </>
  );
};

export default FatimaPersonalPage;