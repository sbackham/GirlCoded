import React from 'react';

const video = () => {
  return (
    <div className="video-responsive">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/oqcNgqPrAtc"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>
      </iframe>
    </div>
  );
};

export default video;
