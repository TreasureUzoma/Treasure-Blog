// Add firebase rules to prevent access 
// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBB5uEvjeAfYGUCEKDOr19jrryc55j_Dko",
    authDomain: "github-profile-roast.firebaseapp.com",
    projectId: "github-profile-roast",
    storageBucket: "github-profile-roast.appspot.com",
    messagingSenderId: "781404853532",
    appId: "1:781404853532:web:3a7a7af2d65714f26816d9",
    measurementId: "G-N1Q4MMEV24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
