import React from 'react';
import { useSelector } from 'react-redux';

function UserProfile() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;