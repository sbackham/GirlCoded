
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import TeamMemberPage from './Pages/TeamMemberPage';
import Comments from './Components/Comments';
import groupPhoto from './Images/CatsPhoto.jpg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import sirenaImage from './Images/sirena.png';
import SirenaPersonalPage from './Pages/SirenaPersonalPage';
import LoginPage from './Components/loginPage';
import PrivateRoute from './Components/PrivateRoute';



function App() {
  const teamMembers = [
    {
      name: 'Sirena Backham',
      title: 'Computer Science and Engineering Major',
      bio: 'Sirena is a CSE with a FA in Big Data. She is a 4th year student at the University of Iowa. She has a passion for creating intuitive user interfaces and has worked on numerous web development projects. She also has a passion for working in teams with fellow electrical engineers to create well-rounded and sophistaticated IoTs.',
      skills:'Skills: Python, C++ Java, HTML, JavaScript, CSS',
      interests:'Interests: Full Stack Development, IoTs, Animals, Pottery, Hiking',
      imageUrl: sirenaImage // Replace with the actual path to the image file
    },
    {
      name: 'Diego Diaz',
      title: 'Backend Developer',
      bio: 'Diego specializes in server-side logic and database management, ensuring data is processed efficiently.',
      skills:'Skills: hi',
      interests:'Interests: hi',
      imageUrl: '/path/to/diego-image.jpg' // Replace with the actual path to the image file
    },
    {
      name: 'Fatima Kammona',
      title: 'Full Stack Developer',
      bio: 'With expertise in both front and back end, Fatima can handle the full spectrum of web development.',
      skills:'Skills: hi',
      interests:'Interests: hi',
      imageUrl: '/path/to/fatima-image.jpg' // Replace with the actual path to the image file
    }

  ];

 return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage teamMembers={teamMembers} groupPhotoUrl={groupPhoto} />} />
        <Route path="/team/sirena-backham" element={<SirenaPersonalPage />} />
        <Route path="/team/diego-diaz" element={<TeamMemberPage teamMember={teamMembers.find(m => m.name === 'Diego Diaz')} />} />
        <Route path="/team/fatima-kammona" element={<TeamMemberPage teamMember={teamMembers.find(m => m.name === 'Fatima Kammona')} />} />
        <Route
            path="/private-portfolio"
            element={
              <PrivateRoute>

              </PrivateRoute>
            }
          />

      </Routes>
      <Comments />
    </Router>
  );
}

export default App;
