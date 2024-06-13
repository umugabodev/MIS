// src/Profile.js
import React from 'react';
import ProfileCard from './ProfileCard';

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'A software developer from San Francisco.',
    avatar: 'https://via.placeholder.com/150'
  };

  return (
    <div className="profile">
      <ProfileCard user={user} />
    </div>
  );
};

export default Profile;
