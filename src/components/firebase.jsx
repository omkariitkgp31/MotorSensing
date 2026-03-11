import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCiM1U7myY5LSrj0hTLg5na3gd6OO5NkTA",
    authDomain: "smart-motor-99619.firebaseapp.com",
    projectId: "smart-motor-99619",
    storageBucket: "smart-motor-99619.firebasestorage.app",
    messagingSenderId: "173270056459",
    appId: "1:173270056459:web:7a0d298db4c972cb78110e",
    measurementId: "G-CB4FRQ9Y9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);