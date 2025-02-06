import React, { useState } from "react";
import { db } from "../firebase"; // Make sure to import your Firebase setup
import { collection, addDoc } from "firebase/firestore"; // Firebase Firestore functions

const NewPost = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [postText, setPostText] = useState("");

  const handlePostTextChange = (e) => setPostText(e.target.value);

  const handleSubmit = async () => {
    if (postText.trim()) {
      try {
        await addDoc(collection(db, "posts"), {
          text: postText,
          createdAt: new Date(),
          // Add other fields like profilePicture, username, location, etc., if needed
        });
        setPostText(""); // Reset text after submitting
        setIsOpen(false); // Close the input form
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  return (
    <div className="post-card">
      <div className="new-post">
        {!isOpen ? (
          <button onClick={() => setIsOpen(true)} className="plus-button">
            +
          </button>
        ) : (
          <div className="post-input">
            <textarea
              value={postText}
              onChange={handlePostTextChange}
              placeholder="What's on your mind?"
              rows="4"
            />
            <div>
              <button onClick={handleSubmit} className="submit-post-btn">
                post
              </button>
              <button onClick={() => setIsOpen(false)} className="cancel-post-btn">
                cancel
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default NewPost;

// import React, { useState } from "react";
// import { db } from "../firebase"; 
// import { ref, push, serverTimestamp } from "firebase/database";

// const NewPost = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [postText, setPostText] = useState("");

//   const handlePostTextChange = (e) => setPostText(e.target.value);

//   const handleSubmit = async () => {
//     if (postText.trim()) {
//       try {
//         await push(ref(db, "posts"), {
//           text: postText,
//           createdAt: serverTimestamp(), // firebase will handle the timestamp
//         });

//         setPostText(""); // reset text after submitting
//         setIsOpen(false); // close the input form
//       } catch (error) {
//         console.error("error adding post: ", error);
//       }
//     }
//   };

//   return (
//     <div className="post-card">
//       <div className="new-post">
//         {!isOpen ? (
//           <button onClick={() => setIsOpen(true)} className="plus-button">
//             +
//           </button>
//         ) : (
//           <div className="post-input">
//             <textarea
//               value={postText}
//               onChange={handlePostTextChange}
//               placeholder="what's on your mind?"
//               rows="4"
//             />
//             <div>
//               <button onClick={handleSubmit} className="submit-post-btn">
//                 post
//               </button>
//               <button onClick={() => setIsOpen(false)} className="cancel-post-btn">
//                 cancel
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NewPost;
