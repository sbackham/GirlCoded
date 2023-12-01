// LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import './loginPage.css';

const LoginPage = () => {
  let navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/'); // Redirect to home page after successful login
  };

  const handleNavigateToRegister = () => {
    navigate('/register'); // Navigate to registration page
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <Login onLoginSuccess={handleLoginSuccess} />
        <p className="register-link" onClick={handleNavigateToRegister}>
          Don't have an account? Register here
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
