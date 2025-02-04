import React from "react";
import PostComp from "../components/post.jsx";

const Feed = ({ posts }) => {
  if (!posts) return <p>Loading posts...</p>;

  return (
    <div>
      {Object.entries(posts).map(([postId, post]) => (
        <PostComp key={postId} post={post} />
      ))}
    </div>
  );
};

export default Feed;
