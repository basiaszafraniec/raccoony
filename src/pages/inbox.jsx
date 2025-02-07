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
    <div className="messages">
      <h1>just imagine messanger but it's way cooler</h1>
    </div>

  );
};

export default Inbox;