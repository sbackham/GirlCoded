
import React, { useState } from 'react';
import Lightbox from './Lightbox'; // Import the Lightbox component
import './PhotoGallery.css';

const PhotoGallery = ({ photos }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (photo) => {
    setSelectedImage(photo);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="photo-gallery">
      {photos.map(photo => (
        <img
          key={photo.id}
          src={photo.url}
          alt={photo.description}
          className="gallery-photo"
          onClick={() => handleImageClick(photo.url)}
        />
      ))}
      {selectedImage && (
        <Lightbox image={selectedImage} altText="Full-size image" onClose={closeLightbox} />
      )}
    </div>
  );
};

export default PhotoGallery;
