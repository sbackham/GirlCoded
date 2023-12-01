import React, { useEffect, useState } from 'react';
import { observeAuthState } from '../authService';
import { useLocation } from 'react-router-dom'; // Import useLocation
import './Comments.css'; // Ensure you have a CSS file for Comments

const Comments = () => {
  const [user, setUser] = useState(null);
  const location = useLocation(); // Hook to get the current location

  // Define gradients object to match the Navbar's gradients or specific to Comments
  const gradients = {
    '/': 'linear-gradient(to right, #385bf5 68%, #ffc8d3 32%)',
    '/login': 'linear-gradient(to right, #385bf5 58%, #ffc8d3 42%)',
    '/team/sirena-backham': 'linear-gradient(to right, #385bf5 30%, #ffc8d3 70%)',
    '/team/diego-diaz': 'linear-gradient(to right, #385bf5 81%, #ffc8d3 19%)',
    '/team/fatima-kammona': 'linear-gradient(to right, #385bf5 40%, #ffc8d3 60%)',
    '/Pages/ProjectPage': 'linear-gradient(to right, #385bf5 49%, #ffc8d3 51%)',
    // Add other paths and gradients as needed
  };

  // Determine the current gradient based on the path
  const currentGradient = gradients[location.pathname] || gradients['/'];

  // Style object for the comment box container
  const commentBoxStyle = {
    background: currentGradient,
    // Add any additional styles you want for the comment box container
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/commentbox.io/dist/commentBox.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.commentBox('5706269499326464-proj');
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = observeAuthState(setUser);
    return unsubscribe; // Unsubscribe on unmount
  }, []);

  return (
    <div className="commentbox" style={commentBoxStyle}>
      {/* Render comment box for logged-in users */}
      {/* ... */}
    </div>
  );
};

export default Comments;
