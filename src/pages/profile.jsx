
import React, { useState, useEffect } from "react";
import "../styles/profile.css";
import Carousel from "../components/carousel";

const Profile = ({ profileInfo }) => {
  const masterUser = profileInfo?.["master-user"];
  
  const [bgColor, setBgColor] = useState("#ffffff"); // default white
  const [collectionName, setCollectionName] = useState(masterUser?.collectionName || "my_silly_collection");
  const [isEditing, setIsEditing] = useState(false);
  const [newCollectionName, setNewCollectionName] = useState(collectionName);

  useEffect(() => {
    if (masterUser) {
      setBgColor(masterUser.backgroundColor || "#ffffff");
      setCollectionName(masterUser.collection?.name || "my_silly_collection");
    }
  }, [masterUser]);

  if (!masterUser) return <div>Loading...</div>;

  // Handle the input change for the new name
  const handleCollectionNameChange = (e) => {
    setNewCollectionName(e.target.value);
  };

  // Handle save or cancel
  const handleSave = () => {
    setCollectionName(newCollectionName);
    setIsEditing(false);
    // Normally, you'd update the database here
  };

  const handleCancel = () => {
    setNewCollectionName(collectionName); // Reset to original
    setIsEditing(false);
  };

  return (
    <div className="profile">
      <div className="prof-header">
        <img className="background-pic" src={masterUser.backgroundPic} alt="profile background" />
        <div className="prof-header-bottom">
          <button className="follow-btn">follow</button>
          <img className="profile-pic-prof" src={masterUser.profilePic} alt="profile" />
          <button className="message-btn">message</button>
        </div>
      </div>

      <div className="color-picker">
        <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
      </div>

      <div className="post-card-prof" style={{ backgroundColor: bgColor }}>
        <div className="post-header-prof">
          <h2 className="prof-username">{masterUser.username}</h2>
        </div>
        <div className="post-content-prof">{masterUser.bio}</div>
      </div>

      <div className="post-card-prof collection" style={{ backgroundColor: bgColor }}>
        <div className="post-header-prof">
          <h2 className="prof-username">
            {isEditing ? (
              <input
                type="text"
                value={newCollectionName}
                onChange={handleCollectionNameChange}
                className="collection-name-input"
              />
            ) : (
              <span className="collection-name">{collectionName}</span>
            )}
          </h2>
          <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
            ✏️
          </button>
        </div>

        {isEditing && (
          <div className="edit-actions">
            <button onClick={handleSave} className="save-btn">Save</button>
            <button onClick={handleCancel} className="cancel-btn">Cancel</button>
          </div>
        )}

        <div className="post-content-prof">
          <div className="carousel-container">
            <Carousel images={masterUser.collection} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
