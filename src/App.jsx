import Navbar from './components/navbar'
import Feed from './pages/feed';
import Map from './pages/map';
import Raccoon from './pages/raccoon';
import Inbox from './pages/inbox';
import Profile from './pages/profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { ref, get, child } from "firebase/database";
import { db } from "./firebase.js";



function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const dbRef = ref(db);
      try {
        const snapshot = await get(child(dbRef, "posts"));
        if (snapshot.exists()) {
          setPosts(snapshot.val());
        } else {
          console.log("No posts found.");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);


  return (
    <>
      <Routes>
        <Route path="/" element={<Feed posts={posts} />} />
        <Route path='/map' element={<Map />} />
        <Route path='/raccoon' element={<Raccoon />} />
        <Route path='/inbox' element={<Inbox />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Navbar></Navbar>
    </>

  )
}

export default App
