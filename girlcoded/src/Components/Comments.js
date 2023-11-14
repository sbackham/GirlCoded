import React, { useEffect } from 'react';

const Comments = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/commentbox.io/dist/commentBox.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.commentBox('my-project-id');
    };

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="commentbox"></div>
  );
};

export default Comments;
