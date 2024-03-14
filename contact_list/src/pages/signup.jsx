import React, { useState, useCallback } from 'react';
import axios from 'axios';
import './Login.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = useCallback((e) => {
    setUsername(e.target.value);
  }, []);

  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleSignup = async () => {
    try {
      const response = await axios.post('https://contactlist-1.onrender.com/api/signup', {
        username,
        password,
      });
      console.log(response.data);
      alert("SignUp Done Now Go back and Try Logging In With Those credentials");
    } catch (error) {
      console.error('Signup error:', error.message);
    }
  };

  return (
    <div className="login-container">
      <h1>Signup</h1>
      <label>
        Username:
        <input className="login-input" type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input className="login-input" type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button className="login-button" onClick={handleSignup}>Signup</button>
      <p className="login-signup-link">Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default Signup;
