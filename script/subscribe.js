import { db } from './firebaseConfig.js';
import { showCustomAlert, closeCustomAlert } from './customAlert.js';

import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js";

// Event listener for the subscribe button
document.getElementById('subscribe-btn').addEventListener('click', async function () {
    const email = document.getElementById('email').value.trim();

    if (!email) {
        showCustomAlert("Invalid Email", "Please enter a valid email address.");
        return;
    }

    try {
        // Add the email to the "subscribers" collection in Firestore
        await addDoc(collection(db, "subscribers"), {
            email: email,
            timestamp: serverTimestamp()
        });

        showCustomAlert("Success", "You have been subscribed!");
    } catch (error) {
        console.error("Error adding email to Firestore: ", error);
        showCustomAlert("Error", "Something went wrong")
    }

    // Clear the email input field after submission
    document.getElementById('email').value = '';
});
