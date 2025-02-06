import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/inbox.css";

const messages = [
  { id: 1, name: "Misha", lastMessage: "hey, did you see that design?", isGroup: false },
  { id: 2, name: "Tattoo Enthusiasts", lastMessage: "New tattoo of the week is up!", isGroup: true },
  { id: 3, name: "Lena", lastMessage: "can't wait for our session!", isGroup: false }
];

const Inbox = () => {
  const navigate = useNavigate();

  return (
    <div className="inbox-container">
      <h2>Inbox</h2>
      <div className="message-list">
        {messages.map((msg) => (
          <div key={msg.id} className={`message-item ${msg.isGroup ? "group" : "user"}`} onClick={() => navigate(`/message/${msg.id}`)}>
            <span className="message-name">{msg.name}</span>
            <span className="message-preview">{msg.lastMessage}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inbox;