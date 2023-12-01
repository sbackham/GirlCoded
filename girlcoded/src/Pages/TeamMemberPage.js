
import React from 'react';

const TeamMemberPage = ({ teamMember }) => {
  // No need to use useParams here, as the teamMember is being passed directly as a prop

  if (!teamMember) {
    return <div>Member not found.</div>;
  }

  // Now you can directly use the teamMember prop to access the member's data
  return (
    <div className="team-member-page">
      <img src={teamMember.imageUrl} alt={teamMember.name} className="team-member-image" />
      <h1>{teamMember.name}</h1>
      <h2>{teamMember.title}</h2>
      <p>{teamMember.bio}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default TeamMemberPage;