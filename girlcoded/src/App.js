import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import TeamIntro from './TeamIntro';
import TeamMember from './TeamMember';
import GroupPhoto from './GroupPhoto';
import Comments from './Comments';
import './App.css'; // Your main CSS file

function App() {
  return (
    <div>
      <Navbar />
      <TeamIntro />
      <TeamMember />
      <GroupPhoto />
      <Comments />
    </div>
  );
}


export default App;
