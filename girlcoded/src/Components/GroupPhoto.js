import React from 'react';
import './GroupPhoto.css';

const GroupPhoto = ({ imageUrl }) => {
  return (
    <div className="group-photo-container">
      <img src={imageUrl} alt="Group" className="group-photo" />
    </div>
  );
};

export default GroupPhoto;
