import { useState } from "react";
import Post from "../components/post";

export default function Feed() {
    const [posts, setPosts] = useState(["post1", "post2", "post3"]);
    return (
        <>
            <p>feed</p>
            <>
                {posts.map((post, index) => {
                    return (
                        <div key={index} className="post-container">
                            <Post post={post} />
                        </div>
                    )
                })}
            </>
        </>
    )
}