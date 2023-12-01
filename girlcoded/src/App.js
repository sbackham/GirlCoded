
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import TeamMemberPage from './Pages/TeamMemberPage';
import Comments from './Components/Comments';
import groupPhoto from './Images/CatsPhoto.jpg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import sirenaImage from './Images/sirena.png';
import fatimaImage from './Images/fatima.jpg';
import diegoImage from './Images/DiegoPhotos/diego.jpg';
import SirenaPersonalPage from './Pages/SirenaPersonalPage';
import DiegoPersonalPage from './Pages/DiegoPersonalPage';
import FatimaPersonalPage from './Pages/FatimaPersonalPage';
import ProjectPage from './Pages/ProjectPage';
import LoginPage from './Components/loginPage';
import PrivateRoute from './Components/PrivateRoute';
import Register from './Components/Register';
import { AuthProvider } from './Components/AuthContext';
//hi



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
      title: 'Computer Science Engineering',
      bio: 'Diego specializes in server-side logic and database management, ensuring data is processed efficiently.',
      skills:'Skills: Eating, Sleeping, MATLAB',
      interests:'Interests: Cats, Mincraft, Youtube, 3d girls ',
      imageUrl: diegoImage // Replace with the actual path to the image file
    },
    {
      name: 'Fatima Kammona',
      title: 'Electrical Engineering and Computer Science Engineering',
      bio: 'With expertise in both front and back end, Fatima can handle the full spectrum of web development.',
      skills:'Skills: Java | C++ | C | Assembly | Linux | Python | Verilog | Virtuoso | Spectre | VHDL | Quartus | SPICE | MATLAB | FPGA • Git | Bash | Unit Testing | Visual Basic | CTF | Agile | Bilingual- English and Arabic | Limited Working- ASL',
      interests:'Interests: Reading, sleeping and eating',
      imageUrl:  fatimaImage// Replace with the actual path to the image file
    }

  ];

 return (
 <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage teamMembers={teamMembers} groupPhotoUrl={groupPhoto} />} />
        <Route path="/team/sirena-backham" element={<SirenaPersonalPage />} />
        <Route path="/team/diego-diaz" element={<DiegoPersonalPage />} />
        <Route path="/team/fatima-kammona" element={<FatimaPersonalPage />} />
        <Route path="/Pages/ProjectPage" element={<ProjectPage />} />
        <Route path="/register" element={<Register />} />
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
   </AuthProvider>
  );
}

export default App;
