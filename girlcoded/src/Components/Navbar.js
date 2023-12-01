import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './navbar.css'; // Make sure the path is correct to import the CSS file

const Navbar = () => {
  return (
    <div className="background-container">
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
