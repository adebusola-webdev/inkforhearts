import React from 'react'
import '../styles/form.css'
import { useState } from 'react';
import '../styles/form.css'

const Formpop = ({ onClose ,onSwitchToLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSwitchToLogin = (e) => {
      e.preventDefault();
      onSwitchToLogin();
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      console.log('Email:', email);
      console.log('Password:', password);
      onClose(); // Close the pop-up after submission
    };


  return (
  
       
      <div className="overlay">
        <div className="popup">
          <div className="popup-header">
          <h2>Sign up</h2>
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
            <button type="submit">sign up</button>
          </form>
               <p>Already have an account? <a href="#" onClick={handleSwitchToLogin}>Log in</a></p>

        </div>
      </div>

  
  
  )
}

export default Formpop