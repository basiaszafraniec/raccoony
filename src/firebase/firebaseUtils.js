// firebase/firebaseUtils.js
import { ref, get, child } from 'firebase/database';
import { database } from './firebaseConfig';

// Fetch all posts
export const fetchPosts = async () => {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, 'posts'));
    if (snapshot.exists()) {
        return snapshot.val();
    } else {
        console.error('No posts available.');
        return {};
    }
};

// Fetch a specific post
export const fetchPostById = async (postId) => {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, `posts/${postId}`));
    if (snapshot.exists()) {
        return snapshot.val();
    } else {
        console.error('Post not found.');
        return null;
    }
};

// Fetch a user by userId
export const fetchUserById = async (userId) => {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, `users/${userId}`));
    if (snapshot.exists()) {
        return snapshot.val();
    } else {
        console.error('User not found.');
        return null;
    }
};
