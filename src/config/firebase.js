// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3n4kZ43Sp-yecqKDkZ0DqB1ms0sCz37s",
  authDomain: "first-firebase-app-31bd8.firebaseapp.com",
  projectId: "first-firebase-app-31bd8",
  storageBucket: "first-firebase-app-31bd8.appspot.com",
  messagingSenderId: "983894644937",
  appId: "1:983894644937:web:9370ab377d2876f7715518",
  measurementId: "G-LLQFQG5MHN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const facebookProvider = new FacebookAuthProvider();
