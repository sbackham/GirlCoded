import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import './navbar.css'; // Make sure the path is correct to import the CSS file

const Navbar = () => {
  const location = useLocation(); // Hook to get the current location

  // Object mapping paths to gradient styles
  const gradients = {
    '/': 'linear-gradient(to right, #385bf5 68%, #ffc8d3 32%)',
    '/login': 'linear-gradient(to right, #385bf5 58%, #ffc8d3 42%)',
    '/team/sirena-backham': 'linear-gradient(to right, #385bf5 30%, #ffc8d3 30%, #ffc8d3 100%)',
    '/team/diego-diaz': 'linear-gradient(to right, #385bf5 81%, #ffc8d3 19%)',
    '/team/fatima-kammona': 'linear-gradient(to right, #385bf5 40%, #ffc8d3 40%, #ffc8d3 100%)',
  };

  // Determine the current gradient based on the path
  const currentGradient = gradients[location.pathname] || gradients['/'];

  // Style object for the background container
  const backgroundStyle = {
    background: currentGradient,
    padding: '30px 0', // Add your padding as required
  };

  return (
    <div className="background-container" style={backgroundStyle}>
      <nav className="navbar">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/projects" className="nav-item">Projects</Link>
        <Link to="/team/sirena-backham" className="nav-item">Sirena</Link>
        <Link to="/team/diego-diaz" className="nav-item">Diego</Link>
        <Link to="/team/fatima-kammona" className="nav-item">Fatima</Link>
        <Link to="/login" className="nav-item">Login</Link>
      </nav>
    </div>
  );
};

export default Navbar;
