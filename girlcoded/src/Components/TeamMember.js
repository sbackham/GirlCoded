import React from 'react';
import './TeamMember.css';
import { Link } from 'react-router-dom';

const TeamMember = ({ name, title, bio, imageUrl }) => {



  return (
    <div className="team-member">
      <img src={imageUrl} alt={name} className="member-photo" />
      <h3 className="member-name">{name}</h3>
      <p className="member-title">{title}</p>
      <p className="member-bio">{bio}</p>
      <Link to={`/team/${name.replace(/\s+/g, '-').toLowerCase()}`}>
            <img src={imageUrl} alt={name} />
            <h3>{name}</h3>
          </Link>
    </div>
  );
};

export default TeamMember;
