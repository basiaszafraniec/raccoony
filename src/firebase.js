import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDgXxV_nIb7rIZCf2yZpt0cF8jGWoATStk",
    authDomain: "raccoony-c2b08.firebaseapp.com",
    databaseURL: "https://raccoony-c2b08-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "raccoony-c2b08",
    storageBucket: "raccoony-c2b08.firebasestorage.app",
    messagingSenderId: "624071999746",
    appId: "1:624071999746:web:eb1152117b111cb170c21b"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db }; 
