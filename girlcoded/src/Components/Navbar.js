import React, { useState, useEffect } from 'react'; // Add useState and useEffect here
import { Link } from 'react-router-dom';
import Login from './Login';
import { observeAuthState, signOutUser } from '../authService';

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = observeAuthState(setUser);
    return unsubscribe; // Make sure to clean up the subscription
  }, []);

  const handleLogout = async () => {
    try {
      await signOutUser();
      // Update UI after sign out
    } catch (error) {
      // Handle error, possibly set an error state and display it
    }
  };
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
      <div>
              {!user ? (
                <Link to="/login">Login</Link> // This should ideally redirect to a login page or open a login modal
              ) : (
                <button onClick={handleLogout}>Log out</button>
              )}
            </div>
    </nav>
  );
};

export default Navbar;
