import React from 'react';
import Login from './Login';
import { useNavigate } from 'react-router-dom';
import './loginPage.css'; // Assuming your CSS is in LoginPage.css

const LoginPage = () => {
  let navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/'); // Redirect to home page after successful login
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <Login onLoginSuccess={handleLoginSuccess} />
      </div>
    </div>
  );
};

export default LoginPage;
