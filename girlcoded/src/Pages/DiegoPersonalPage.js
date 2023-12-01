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
        <section id="introduction">
          <div>
            <h1>Hello! My name is Diego Diaz</h1>
            <p>Description about me and my personal interests and work: blah blah blah!</p>
          </div>

        </section>
       
      </main>
    </>
  );
};

export default DiegoPersonalPage;