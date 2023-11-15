import React, { useState } from 'react';
import './AccountCreation.css';
const AccountCreation = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Sending request to create account with username:', username, 'and password:', password);
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Account Creation</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input type="text" className="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" className="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br />
        <button type="submit" className="btnacc">Create Account</button>
      </form>
    </div>
  );
};

export default AccountCreation;
