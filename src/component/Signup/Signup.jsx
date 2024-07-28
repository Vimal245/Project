import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import yourImage from 'file:///C:/Users/LENOVO/Downloads/Group%2012.svg';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (name && email && phone && address) {
      alert('Signup successful!');
      setName('');
      setEmail('');
      setPhone('');
      setAddress('');
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div>
        <Navbar></Navbar>
    <div className="signup-container">
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
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
      <p>Already have an Account? <Link to="/" className="login-link">Login</Link></p>
    </div>
    <div className="image-container">
          <img src={yourImage} alt="Description" />
    </div>
    </div>
    </div>
  );
};

export default SignupForm;
