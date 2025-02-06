import React, { useState, useEffect } from "react";
import "../styles/profile.css";
import Carousel from "../components/carousel";

const Profile = () => {
  const [bgColor, setBgColor] = useState("#ffffff"); // default white

  // Load saved color from localStorage
  useEffect(() => {
    const savedColor = localStorage.getItem("postCardBgColor");
    if (savedColor) setBgColor(savedColor);
  }, []);
  const savedCollectionName = localStorage.getItem("collectionName") || "my_silly_collection";
  const [collectionName, setCollectionName] = useState(savedCollectionName);
  const [isEditing, setIsEditing] = useState(false);
  const [newCollectionName, setNewCollectionName] = useState(collectionName);

  const images = [
    { src: "/raccoon-eat.png", caption: "Cool sofa!" },
    { src: "/raccon-guitar.png", caption: "Found a great chair" },
    { src: "/raccoon-cig.png", caption: "Old, but still good!" },
  ];
  // Save color to localStorage when changed
  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setBgColor(newColor);
    localStorage.setItem("postCardBgColor", newColor);
  };
  // Update collection name in local storage
  useEffect(() => {
    localStorage.setItem("collectionName", collectionName);
  }, [collectionName]);

  // Handle the input change for the new name
  const handleCollectionNameChange = (e) => {
    setNewCollectionName(e.target.value);
  };

  // Handle save or cancel
  const handleSave = () => {
    setCollectionName(newCollectionName);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewCollectionName(collectionName); // Reset to original
    setIsEditing(false);
  };


  return (
    <div className="profile">
      <div className="prof-header">
        <img className="background-pic" src="/god-raccoon.jpg" alt="godly raccoon staring down at u" />
        <div className="prof-header-bottom">
          <button className="follow-btn">follow</button>
          <img className="profile-pic-prof" src="/image.png" alt="hot af girl" />
          <button className="message-btn">message</button>
        </div>
      </div>
      <div className="color-picker">
        <input type="color" value={bgColor} onChange={handleColorChange} />
      </div>
      <div className="post-card-prof" style={{ backgroundColor: bgColor }}>
        <div className="post-header-prof">
          <h2 className="prof-username">Lil_Trash_Girl</h2>
        </div>
        <div className="post-content-prof">bioboibioibiobio</div>
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
            <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
              ✏️
            </button>
          </h2>
        </div>

        {isEditing && (
          <div className="edit-actions">
            <button onClick={handleSave} className="save-btn">Save</button>
            <button onClick={handleCancel} className="cancel-btn">Cancel</button>
          </div>
        )}

        <div className="post-content-prof">
          <div className="carousel-container">
            <Carousel images={images} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Profile;
