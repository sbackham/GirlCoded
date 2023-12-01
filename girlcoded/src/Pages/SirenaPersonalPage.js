import React from 'react';
import Navbar from '../Components/Navbar';
import Comments from '../Components/Comments';
import ProjectSection from '../Components/ProjectSection';
import PhotoGallery from '../Components/PhotoGallery';
import sirenaImage from '../Images/sirena.png';
import fam from '../Images/SirenaPhotos/fam.png';
import fam2 from '../Images/SirenaPhotos/fam2.png';
import dubber from '../Images/SirenaPhotos/dubberdus.png';
import engies from '../Images/SirenaPhotos/engies.png';
import engies2 from '../Images/SirenaPhotos/engies2.png';
import blog from '../Images/SirenaPhotos/blog.png';
import iotchess from  '../Images/SirenaPhotos/iotchess.png';
import rfid from  '../Images/SirenaPhotos/rfid.jpg';
import macaroni from  '../Images/SirenaPhotos/macaroni.png';
import pc from '../Images/SirenaPhotos/pc.png';
import nails from  '../Images/SirenaPhotos/nails.png';
import donutvase from  '../Images/SirenaPhotos/donutvase.png';
import iot from '../Images/SirenaPhotos/iot.png';
import './Sirena.css';


const photos = [
  {
    id: 1,
    url: fam,
  },
  {
    id: 2,
    url: fam2,
  },

  {
    id: 3,
    url: engies,
  },
  {
    id: 4,
    url: dubber,
  },
   {
     id: 5,
     url: engies2,
   }
];
const merp = [
{
    id: 1,
    url: macaroni,
  },
  {
    id: 2,
    url: nails,
  },

  {
    id: 3,
    url: pc,
  },
  {
    id: 4,
    url: donutvase,
  },
];

const projects = [
{
      id: 1,
      title: "Personal Blog",
      description: "Played around with making my own personal blog, with a noisy background and music. I plan on putting silly interests on it, but it has links to my LinkedIn and Github as well.",
      imageUrl: blog
    },
{
      id: 2,
      title: "IoT Chessboard",
      description: "Built a chess web application using a Firebase database, Hall sensors, LEDs (Adafruit Neopixel), a Raspberry Pi, and Arduino. Arduino used to handle the hardware;  LEDs, Hall sensors, and shift registers (to collect data from each space on the board). Raspberry Pi used to handle chess logic (using Stockfish chess engine), board state, and Firebase communication (for user authentication and database), with Node.js for server to run Stockfish engine on the web application",
      imageUrl: iot ,
    },
  {
    id: 3,
    title: "RFID Attendance System",
    description: "Utilized an Arduino Uno, RFID Scanner, LCD, PLX-DAQ excel add-on and MFRC522 library. Created an RFID key-fob scanning attendance system that verifies the owner’s validity against the existing database of valid UIDs, and uses LEDs, an LCD display, and a buzzer to signal if the owner is allowed access. Used the MFRC522 Library for Arduino to read and write RFID. Used PLX-DAQ for Arduino to Excel for real-time serial data communication",
    imageUrl: rfid,
  },
  // ... more projects
];


const SirenaPersonalPage = () => {
  return (
    <>
      <main>
          <section id="introduction" style={{ display: 'flex', alignItems: 'center' }}>
           <img src={sirenaImage} alt="Sirena Backham" style={{ width: '300px', marginRight: '10px', borderRadius: '20px' }} />            <div>
              <h1>Hello! My name is Sirena Backham.</h1>
              <p>I am a 4th year CSE at the University of Iowa with a FA in Big Data. Welcome to my portfolio page! </p>
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

        <h2>Personal Life and Hobbies</h2>
        <p> In my personal time, I enjoy hanging out with my family and loves ones, such as my pets. </p>
        <p> I like to watch TV, play video games, go hiking, and cook. </p>
        <p> Below are some personal projects, unrelated to my academics. I like to do nails, always looking into upgrading my pc, and I like pottery. I made this toroidal vase. </p>
        <PhotoGallery photos={merp} />

      </main>
    </>
  );
};

export default SirenaPersonalPage;