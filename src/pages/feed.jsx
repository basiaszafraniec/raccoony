import React from "react";
import PostComp from "../components/post.jsx";
import NewPost from "../components/newPost.jsx"; // Import the NewPost component


const Feed = ({ posts }) => {
  if (!posts) return <p>Loading posts...</p>;

  return (
    <div className="feed">
      <NewPost />
      {Object.entries(posts).map(([postId, post]) => (
        <PostComp key={postId} post={post} />
      ))}
      <h2>Ur all caught up :)</h2>
    </div>
  );
};

export default Feed;

// import React, { useState, useEffect } from "react";
// import { db } from "../firebase";
// import { ref, onValue } from "firebase/database";
// import PostComp from "../components/post.jsx";

// const Feed = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const postsRef = ref(db, "posts");

//     const unsubscribe = onValue(postsRef, (snapshot) => {
//       if (snapshot.exists()) {
//         const postsData = snapshot.val();
//         const postsArray = Object.entries(postsData).map(([postId, post]) => ({
//           id: postId,
//           ...post,
//         }));
//         setPosts(postsArray.reverse()); // show newest posts first
//       } else {
//         setPosts([]);
//       }
//     });

//     return () => unsubscribe(); // cleanup when component unmounts
//   }, []);

//   if (!posts.length) return <p>loading posts...</p>;

//   return (
//     <div>
//       {posts.map((post) => (
//         <PostComp key={post.id} post={post} />
//       ))}
//     </div>
//   );
// };

// export default Feed;
