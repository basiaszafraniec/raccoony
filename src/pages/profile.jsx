import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-background">
        <img src="path_to_background_image.jpg" alt="Background" />
      </div>
      <div className="profile-info">
        <div className="profile-picture">
          <img src="path_to_profile_picture.jpg" alt="Profile" />
        </div>
        <h1 className="username">Username</h1>
        <p className="bio">This is a short bio about the user.</p>
      </div>
      <div className="collection-section">
        <h2>My Collection</h2>
        <Link to="/collection">
          <button>View Collection</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
