import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import yourImage from 'file:///C:/Users/LENOVO/Downloads/Group%2012 1.svg';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Proceed with signup logic here (e.g., API call)
    alert('Signup successful!');
  };

  return (
    <div className='signup-bg'>
      <Navbar />
      <div className="signup-container">
        <div className="signup-border-container">
          <div className="signup-form">
            <h2>Signup</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
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
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <button type="submit" style={{color:'white', textDecoration:'none'}}>Signup</button>
            </form>
            <p>Already have an Account? <Link to="/" className="login-link">Login</Link></p>
          </div>
          <div className="image-container">
            <img src={yourImage} alt="Description" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
