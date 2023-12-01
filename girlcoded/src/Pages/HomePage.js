// src/Pages/HomePage.js

import React from 'react';
import TeamMember from '../Components/TeamMember';
import GroupPhoto from '../Components/GroupPhoto';
// ... other imports

const HomePage = ({ teamMembers, groupPhotoUrl }) => {
  return (
    <main className="home-page">
      {/* Title Section */}
      <section style={{ textAlign: 'center', padding: '20px 0' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0', color: '#3563E9' }}>Team Girl Coded</h1>
      </section>

      {/* Team Section */}
      <section className="team-section">
              <div className="team-container">
                {teamMembers.map(member => (
                  <TeamMember key={member.name} {...member} />
                ))}
              </div>
            </section>
      <GroupPhoto imageUrl={groupPhotoUrl} />
      {/* ... other sections */}
    </main>
  );
};

export default HomePage;
