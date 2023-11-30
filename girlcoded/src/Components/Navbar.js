import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ paddingLeft: 120, paddingRight: 120, paddingTop: 22, paddingBottom: 22, background: 'white', boxShadow: '0px -1px 1px rgba(0, 0, 0, 0.10) inset', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: 150 }}>
        {/* Use Link to make these clickable */}
        <Link to="/" style={{ textDecoration: 'none', color: '#3563E9', fontSize: 20, fontWeight: '700' }}>Home</Link>
        <Link to="/projects" style={{ textDecoration: 'none', color: '#424242', fontSize: 20 }}>Projects</Link>
        <Link to="/team/sirena-backham" style={{ textDecoration: 'none', color: '#424242', fontSize: 20 }}>Sirena</Link>
        <Link to="/team/diego-diaz" style={{ textDecoration: 'none', color: '#424242', fontSize: 20 }}>Diego</Link>
        <Link to="/team/fatima-kammona" style={{ textDecoration: 'none', color: '#424242', fontSize: 20 }}>Fatima</Link>
      </div>
      <div style={{ display: 'flex', gap: 20 }}>
        <Link to="/login" style={{
                  textDecoration: 'none',
                  backgroundColor: '#3563E9', // Blue background
                  color: 'white', // White text
                  padding: '10px 20px', // Some padding
                  borderRadius: '5px', // Rounded corners
                  fontSize: '16px', // Match font-size with the rest of the navbar items
                  fontWeight: '500', // Font weight as needed
                  letterSpacing: '0.46px', // Spacing for the letters
                  display: 'inline-flex', // Use inline-flex to center content
                  alignItems: 'center', // Center align items
                  justifyContent: 'center', // Center justify content
                  boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)', // Optional shadow for depth
                  transition: 'background-color 0.2s', // Transition for hover effect
                }}>
                  Login
                </Link>
      </div>
    </nav>
  );
};

export default Navbar;
