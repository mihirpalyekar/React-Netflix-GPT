// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8zbl973jgNjYiZo1_JQBXZTwtnpMV9m8",
  authDomain: "reactneflixgpt.firebaseapp.com",
  projectId: "reactneflixgpt",
  storageBucket: "reactneflixgpt.appspot.com",
  messagingSenderId: "989395153609",
  appId: "1:989395153609:web:0f255556b1f8d422831318",
  measurementId: "G-QV0NVZPTVK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();