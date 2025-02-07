import Navbar from './components/navbar'
import Feed from './pages/feed';
import Map from './pages/map';
import Raccoon from './pages/raccoon';
import Inbox from './pages/inbox';
import Message from './pages/message.jsx';
import Profile from './pages/profile';
import UserProfile from './pages/userProfile.jsx';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { ref, get, child } from "firebase/database";
import { db } from "./firebase.js";
import 'leaflet/dist/leaflet.css';


export default App

function App() {
  const [posts, setPosts] = useState(null);
  const [users, setUsers] = useState(null);
  const [profileInfo, setProfileInfo] = useState(null);

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
        const usersDataArray = Object.entries(usersData).map(([id, user]) => ({
          id,  // Adding the id as a property to each user
          ...user,
        }));

        // fetch profile-info
        const profileSnap = await get(child(dbRef, "profile-info"));
        const profileData = profileSnap.exists() ? profileSnap.val() : {};

        // merge user data into posts
        const mergedPosts = Object.entries(postsData).map(([postId, post]) => {
          const user = usersData[post.userId];
          return {
            ...post,
            username: user?.username || "Unknown User",
            profilePic: user?.profilePic || "https://via.placeholder.com/50",
          };
        });
        

        setPosts(mergedPosts);
        setUsers(usersDataArray);
        setProfileInfo(profileData);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Feed posts={posts} users={users} />} />
        <Route path="/map" element={<Map />} />
        <Route path="/raccoon" element={<Raccoon />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/message" element={<Message />} />
        <Route path="/profile" element={<Profile users={users} profileInfo={profileInfo} />} />
        <Route path="/user/:userId" element={<UserProfile users={users} />} />
      </Routes>
      <Navbar />
    </>
  );
}