import React from "react";
import "../styles/post.css";
const PostComp = ({ post }) => {
    return (
      <div className="post-card">
        <div className="post-header">
          <img src={post.profilePicture} alt="Profile" className="profile-pic" />
          <span>{post.userId}</span>
        </div>
        <div className="text-content">{post.text}</div>
        {post.picture && <img src={post.picture} alt="Post" className="post-image" />}
        {post.location && (
          <p className="location">
            <a href={`https://www.google.com/maps?q=${post.location.latitude},${post.location.longitude}`} target="_blank" rel="noopener noreferrer">
              {post.location.name || "View Location"}
            </a>
          </p>
        )}
        <div className="window-button"></div>
      </div>
    );
  };
  
  export default PostComp;