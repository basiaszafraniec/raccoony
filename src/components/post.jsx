import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/post.css";
import { Link } from "react-router-dom";

const PostComp = ({ postId, post, users }) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const handleViewLocation = () => {
    if (post.location) {
      navigate(`/map?lat=${post.location.latitude}&lng=${post.location.longitude}`);
    }
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  console.log(post);

  return (
    <div className="post-card">
      <Link to={`/user/${post.userId}`} className="username">
        <div className="post-header">
          <img src={post.profilePic} alt="Profile" className="profile-pic" />
          <span><h2>{post.username}</h2></span>
        </div>
      </Link>
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
      <div className="post-actions">
        <button
          onClick={handleLike}
          className={`like-btn ${liked ? "liked" : ""}`}
        >
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>
        <button className="comment-btn">💬 Comment</button>
      </div>
      <div className="window-button"></div>
    </div>
  );
};

export default PostComp;
