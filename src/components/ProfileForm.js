import React, { useState } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import { db } from '../firebase'; // Ensure 'db' is correctly imported
import { collection, addDoc } from 'firebase/firestore';

const ProfileForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    const user = auth.currentUser;

    try {
      if (user) {
        await updateProfile(user, { displayName: name });
        // Assuming you have a users collection in your Firestore
        await addDoc(collection(db, 'users'), {
          name,
          email
        });
      }
    } catch (error) {
      console.error('Error updating profile: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default ProfileForm;
