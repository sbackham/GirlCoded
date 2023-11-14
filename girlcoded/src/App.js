import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Comments from './Components/Comments';
import './App.css'; // Your main CSS file

/*
Add these components once we have the js for each
import TeamIntro from './TeamIntro';
import TeamMember from './TeamMember';
import GroupPhoto from './GroupPhoto';
import Comments from './Comments';
<TeamIntro />
      <TeamMember />
      <GroupPhoto />
      */


function App() {
  return (
    <div>
      <Navbar />
      <Comments />
    </div>
  );
}


export default App;
