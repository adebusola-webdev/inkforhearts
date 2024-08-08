import React from 'react'
import { useState } from 'react';

export const Loginform = ({ onSwitchToSignup, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Email:', email);
        console.log('Password:', password);
        onClose(); // Close the pop-up after submission
      };

      const handleSwitchToSignup = (e) => {
        e.preventDefault();
        onSwitchToSignup();
      };
  return (
    <>
    <div className="overlay">
        <div className="popup">
          <div className="popup-header">
          <h2>Login</h2>
          <button className="close-btn" onClick={onClose}>×</button>
         
          </div>
         
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Log in</button>
          </form>
          <p>Don't have an account? <a href="#" onClick={handleSwitchToSignup}>Sign Up</a></p>

        </div>
      </div>
    </>
  )
}
