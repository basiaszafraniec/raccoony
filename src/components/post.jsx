import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/post.css";

const PostComp = ({ post }) => {
  const navigate = useNavigate();

  const handleViewLocation = () => {
    if (post.location) {
      navigate(`/map?lat=${post.location.latitude}&lng=${post.location.longitude}`);
    }
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <img src={post.profilePicture} alt="Profile" className="profile-pic" />
        <span><h2>{post.username}</h2></span>
      </div>
      <div className="post-content">
        <div className="text-content"><span>{post.text}</span></div>
        {post.location && (
          <p className="location">
            <button onClick={handleViewLocation} className="view-location-btn">
              {post.location.name || "View Location"}
            </button>
          </p>
        )}
        {post.picture && post.picture.trim() !== "nope" && (
          <img src={post.picture} alt="Post" className="post-image" />
        )}

      </div>
      <div className="window-button"></div>
    </div>
  );
};

export default PostComp;

