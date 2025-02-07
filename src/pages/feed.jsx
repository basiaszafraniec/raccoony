import React from "react";
import PostComp from "../components/post.jsx";
import NewPost from "../components/newPost.jsx"; // Import the NewPost component


const Feed = ({ posts, users }) => {
  if (!posts) return <p>loading posts...</p>;

  return (
    <div className="feed">
      <NewPost />
      {Object.entries(posts).map(([postId, post]) => (
        <PostComp key={post.id} post={post} users={users} />
      ))}
      <h2 className="balls">Ur all caught up :)</h2>
    </div>
  );
};

export default Feed;
