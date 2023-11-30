
import React from 'react';
import './TeamMember.css';

const TeamMember = ({ name, title, bio, imageUrl }) => {
  return (
    <div className="team-member">
      <img src={imageUrl} alt={name} className="member-photo" />
      <h3 className="member-name">{name}</h3>
      <p className="member-title">{title}</p>
      <p className="member-bio">{bio}</p>
    </div>
  );
};

export default TeamMember;
