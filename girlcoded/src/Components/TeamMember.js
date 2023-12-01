import React from 'react';
import './TeamMember.css';
import { Link } from 'react-router-dom';

const TeamMember = ({ name, title, bio, imageUrl }) => {


  return (
    <div className="team-member">
      <img src={imageUrl} alt={name} className="member-photo" />
      <Link to={`/team/${name.replace(/\s+/g, '-').toLowerCase()}`}>
                  <h3>{name}</h3>
                </Link>
      <p className="member-title">{title}</p>
      <p className="member-bio">{bio}</p>
    </div>
  );
};

export default TeamMember;
