import Navbar from './components/navbar'
import Feed from './pages/feed';
import Map from './pages/map';
import Raccoon from './pages/raccoon';
import Inbox from './pages/inbox';
import Message from './pages/message.jsx';
import Profile from './pages/profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { ref, get, child } from "firebase/database";
import { db } from "./firebase.js";

export default App

function App() {
  const [posts, setPosts] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(db);
      try {
        // fetch posts
        const postsSnap = await get(child(dbRef, "posts"));
        const postsData = postsSnap.exists() ? postsSnap.val() : {};

        // fetch users
        const usersSnap = await get(child(dbRef, "users"));
        const usersData = usersSnap.exists() ? usersSnap.val() : {};

        // merge user data into posts
        const mergedPosts = Object.entries(postsData).map(([postId, post]) => ({
          ...post,
          username: usersData[post.userId]?.username || "Unknown User",
          profilePicture: usersData[post.userId]?.profilePicture || "https://via.placeholder.com/50",
        }));

        setPosts(mergedPosts);
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Feed posts={posts} />} />
        <Route path="/map" element={<Map />} />
        <Route path="/raccoon" element={<Raccoon />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/message" element={<Message />} />
        <Route path="/profile" element={<Profile users={users} />} />
      </Routes>
      <Navbar />
    </>
  );
}

