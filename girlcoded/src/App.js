// src/App.js

import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import Comments from './Components/Comments';
import GroupPhoto from './Components/GroupPhoto';

function App() {
  const teamMembers = [
    {
      name: 'Sirena Backham',
      title: 'Frontend Developer',
      bio: 'Sirena has a passion for creating intuitive user interfaces and has worked on numerous web development projects.',
      imageUrl: '/path/to/sirena-image.jpg' // Replace with the actual path to the image file
    },
    {
      name: 'Diego Diaz',
      title: 'Backend Developer',
      bio: 'Diego specializes in server-side logic and database management, ensuring data is processed efficiently.',
      imageUrl: '/path/to/diego-image.jpg' // Replace with the actual path to the image file
    },
    {
      name: 'Fatima Kammona',
      title: 'Full Stack Developer',
      bio: 'With expertise in both front and back end, Fatima can handle the full spectrum of web development.',
      imageUrl: '/path/to/fatima-image.jpg' // Replace with the actual path to the image file
    }

  ];
   const groupPhotoUrl = '/Components/CatsPhoto';

  return (
    <div className="App">
      <Navbar />
      <HomePage teamMembers={teamMembers} groupPhotoUrl={groupPhotoUrl} />
      <Comments />
    </div>
  );
}

export default App;
