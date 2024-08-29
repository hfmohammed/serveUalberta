import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
  
    try {
      // Perform login request
      const response = await fetch('http://localhost:5111/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });
  
      if (response.ok) {
        navigate('/');

        // Fetch session info
        const sessionResponse = await fetch('http://localhost:5111/session');
  
        if (sessionResponse.ok) {
          const sessionData = await sessionResponse.json();
          console.log('Session email:', sessionData);
        } else {
          const errorResult = await sessionResponse.text();
          console.error('Failed to fetch session info:', errorResult);
          alert('Failed to fetch session info');
        }
      } else {
        const errorResult = await response.text();
        alert('Login failed: ' + errorResult);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
