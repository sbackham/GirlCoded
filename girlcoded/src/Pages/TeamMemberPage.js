import React from 'react';
import { useParams } from 'react-router-dom';

const TeamMemberPage = ({ teamMembers }) => {
  const { memberName } = useParams();

  const member = teamMembers.find(m =>
    m.name.replace(/\s+/g, '-').toLowerCase() === memberName
  );

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <div className="team-member-page">
      <h1>{member.name}</h1>
      <img src={member.imageUrl} alt={member.name} />
      <h2>{member.title}</h2>
      <p>{member.bio}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default TeamMemberPage;
