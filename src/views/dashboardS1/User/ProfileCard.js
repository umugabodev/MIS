// src/ProfileCard.js
import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
      <img src={user.avatar} alt="User Avatar" className="avatar" />
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
};

export default ProfileCard;
