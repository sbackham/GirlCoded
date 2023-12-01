import React from 'react';
import './Lightbox.css';

const Lightbox = ({ image, altText, onClose }) => {
  if (!image) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-content" onClick={e => e.stopPropagation()}>
        <img src={image} alt={altText} />
        <button onClick={onClose} className="lightbox-close">Close</button>
      </div>
    </div>
  );
};

export default Lightbox;
