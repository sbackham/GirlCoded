import React from 'react';
import Navbar from '../Components/Navbar';
import Comments from '../Components/Comments';
import pic1 from  '../Images/FatimaPhotos/pic1.JPG';
import pic2 from  '../Images/FatimaPhotos/pic2.JPG';
import pic3 from  '../Images/FatimaPhotos/pic3.JPG';
import pic4 from  '../Images/FatimaPhotos/pic4.JPG';
import pic5 from  '../Images/FatimaPhotos/pic5.JPG';
import fatimaImage from '../Images/fatima.jpg';
import PhotoGallery from '../Components/PhotoGallery';


const photos = [
  {
    id: 1,
    url: pic1,
  },
  {
    id: 2,
    url: pic2,
  },
  {
    id: 3,
    url: pic3,
  },
  {
    id: 4,
    url: pic4,
  },
  {
    id: 5,
    url: pic5,
  },
];  

const FatimaPersonalPage = () => {
  return (
    <>
      <main>
      <section id="introduction" style={{ display: 'flex', alignItems: 'center' }}>
           <img src={fatimaImage} alt="Fatima Kammona" style={{ width: '300px', marginRight: '10px', borderRadius: '20px' }} />            <div>
              <h1>Hello! My name is Fatima Kammona.</h1>
              <p>I am a 5th year CSE and EE at the University of Iowa. Welcome to my portfolio page! </p>
            </div>
        </section>
        <PhotoGallery photos={photos} />

          <h2>Personal Life and Hobbies</h2>
          <p> In my personal time, I enjoy hanging out with my family and loves ones, such as my pets. </p>
          <p> I like to reading and sleeping. </p>

       
      </main>
    </>
  );
};

export default FatimaPersonalPage;