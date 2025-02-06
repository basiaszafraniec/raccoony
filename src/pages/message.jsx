import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/inbox.css";

const Message = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  return (
    <div className="message-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="chat-window">
        <p>Chat with user/group ID: {id}</p>
        <div className="chat-box">(Messages would be here)</div>
      </div>
    </div>
  );
};

export default Message;
