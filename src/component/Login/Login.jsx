import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import yourImage from 'file:///C:/Users/LENOVO/Downloads/Group%2012.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (email === 'test@example.com' && password === 'password') {
      alert('Login successful!');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
          <p>Don't have an Account? <Link to="/signup" className="signup-link">Signup</Link></p>
        </div>
        <div className="image-container">
          <img src={yourImage} alt="Description" />
        </div>
      </div>
    </div>
  );
};

export default Login;
