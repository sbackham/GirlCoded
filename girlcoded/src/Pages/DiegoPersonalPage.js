import React from 'react';
import Navbar from '../Components/Navbar';
import Comments from '../Components/Comments';
import diegoImage from '../Images/DiegoPhotos/diego.jpg';
import diegoImage2 from '../Images/DiegoPhotos/diego2.png';
import diegoImage3 from '../Images/DiegoPhotos/diego3.png';
import diegoImage4 from '../Images/DiegoPhotos/diego4.png';
import diegoImage5 from '../Images/DiegoPhotos/diego5.png';
import diegoImage6 from '../Images/DiegoPhotos/diego6.png';
import diegoImage7 from '../Images/DiegoPhotos/diego7.png';
import diegoImage8 from '../Images/DiegoPhotos/diego8.png';
import diegoImage9 from '../Images/DiegoPhotos/diego9.png';
import PhotoGallery from '../Components/PhotoGallery';

const photos = [
    {
      id: 1,
      url: diegoImage2,
    },
    {
      id: 2,
      url: diegoImage3,
    },
  
    {
      id: 3,
      url: diegoImage4,
    },
    {
      id: 4,
      url: diegoImage5,
    },
  ];

  const photos2 = [
    {
      id: 1,
      url: diegoImage6,
    },
    {
      id: 2,
      url: diegoImage7,
    },
  
    {
      id: 3,
      url: diegoImage8,
    },
    {
      id: 4,
      url: diegoImage9,
    },
  ];

const DiegoPersonalPage = () => {
  return (
    <>
      <main>
      <section id="introduction" style={{ display: 'flex', alignItems: 'center' }}>
           <img src={diegoImage} alt="Diego Diaz" style={{ width: '300px', marginRight: '10px', borderRadius: '20px' }} />            <div>
              <h1>Hello! My name is Diego Diaz.</h1>
              <p>I am a 4th year EE at the University of Iowa with a FA in Power Systems. Welcome to my portfolio page! </p>
            </div>
        </section>

        <p>Diego Diaz is an accomplished Electrical Engineering student at The University of Iowa, set to graduate in May 2024. With a GPA of 3.20, he has a strong focus on Electronic Circuits, Integrated Circuits, and Power Systems, complemented by coursework in Power Electronics, Embedded Systems, and Communication Networks & Systems. Diego is proficient in a variety of technical skills, including AutoCAD Suite, MATLAB, C++, Assembly, FPGA/VHDL, SPICE Suite, Quarteus, and is bilingual in English and Spanish. His engineering experience includes roles as an Engineering Research Assistant at the University of Iowa, where he worked on graph-based neural networks for contaminant detection, and as an intern at Constellation Energy, gaining hands-on experience with technical drawings and procedures.</p>
       
       <p>Diego has also demonstrated leadership and technical prowess through projects such as leading the design and implementation of a sophisticated mixed-signal transceiver circuit, and as a Target Program Intern at Fermi National Accelerator Laboratory, where he worked on a simulation for the Long-Baseline Neutrino Facility. Additionally, he is an active community member, serving as a Student Electrical Engineer Advisor for the American Wind Energy Association and working to promote higher education accessibility for the Latino population at the university through the Association For Latinos Moving Ahead.</p>
      </main>

      <h2>Photo Gallery</h2>
      <p>I love my cat Shelby, I love Men I trust, My GF is Nancy, I am a nerd XD</p>
    <PhotoGallery photos={photos} />

        <PhotoGallery photos={photos2} />
    </>
  );
};

export default DiegoPersonalPage;