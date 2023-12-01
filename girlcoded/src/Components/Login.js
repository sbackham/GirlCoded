import React, { useState, useContext } from 'react'; // Added useContext
import { signIn } from '../authService'; // Make sure the path to authService is correct
import { AuthContext } from './AuthContext'; // Import AuthContext

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login } = useContext(AuthContext); // Use login function from AuthContext

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Reset errors

    try {
      await signIn(email, password);
      login(); // Update auth state using login from AuthContext
      onLoginSuccess();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="Username"
        placeholder="Enter Username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
