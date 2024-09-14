import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './Profile.css'; // For styling the form

const Profile = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const auth = getAuth(); // Firebase auth

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful!');
      // After login, redirect user to the profile page or dashboard
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="profile-page">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="form-title">Login</h2>
        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit1" className="submit-button">Login</button>
      </form>
    </div>
  );
};

export default Profile;
