// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDjEEJpss7apOJDQ9SmLRJ_LPACjpHfwk8",
  authDomain: "social-media-fab59.firebaseapp.com",
  projectId: "social-media-fab59",
  storageBucket: "social-media-fab59.appspot.com",
  messagingSenderId: "1004687825673",
  appId: "1:1004687825673:web:7de85e0c81041f05a791d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();