import React, { useState, useEffect } from "react";
import "../styles/profile.css";
import Carousel from "../components/carousel";
import Achievements from "./achievements";

const ProfileCard = ({ user, isEditable = false }) => {
  const [bgColor, setBgColor] = useState(user?.backgroundColor || "#ff95dd");
  const [collectionName, setCollectionName] = useState(user?.collection?.name || "my_silly_collection");
  const [isEditing, setIsEditing] = useState(false);
  const [newCollectionName, setNewCollectionName] = useState(collectionName);

  useEffect(() => {
    if (user) {
      setBgColor(user.backgroundColor || "#ff95dd");
      setCollectionName(user.collection?.name || "my_silly_collection");
    }
  }, [user]);

  if (!user) return <div>loading...</div>;

  const handleCollectionNameChange = (e) => {
    setNewCollectionName(e.target.value);
  };

  const handleSave = () => {
    setCollectionName(newCollectionName);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewCollectionName(collectionName);
    setIsEditing(false);
  };

  return (
    <div className="profile">
      <div className="prof-header">
        <img className="background-pic" src={user.backgroundPic} alt="profile background" />
        <div className="prof-header-bottom">
          {!isEditable && (<button className="follow-btn" title="FOLLOW"><img src="/follow.png" alt="follow button" /></button>)}
          <img className="profile-pic-prof" src={user.profilePic} alt="profile" />
          {!isEditable && (<button className="message-btn" title="MESSAGE"><img src="/sailboat-light.png" alt="" /></button>)}
        </div>
      </div>
      <div className="profile-content">
        {isEditable && (
          <div className="color-picker">
            <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
          </div>
        )}

        <div className="post-card-prof" style={{ backgroundColor: bgColor }}>
          <div className="post-header-prof">
            <h2 className="prof-username">{user.username}</h2>
          </div>
          <div className="post-content-prof">{user.bio}</div>
        </div>

        {/* COLLECTION CAROUSEL */}
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
            {isEditable && (
              <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>✏️</button>
            )}
          </div>

          {isEditable && isEditing && (
            <div className="edit-actions">
              <button onClick={handleSave} className="save-btn">Save</button>
              <button onClick={handleCancel} className="cancel-btn">Cancel</button>
            </div>
          )}

          <div className="post-content-prof">
            <Carousel images={user.collection} />
          </div>
        </div>

        {/* ACHIEVEMENTS */}
        {isEditable && Object.entries(user.achievements).length > 0 && (
          <div className="post-card-prof" style={{ backgroundColor: bgColor }}>
            <Achievements user={user} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
