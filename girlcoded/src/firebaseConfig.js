// Import the functions you need from the Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
/*
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
  */
  apiKey: "AIzaSyDtQyXWsQgdDKnv5l4YwF7lhVLJIVSt3wg",
    authDomain: "lab3seniordesign.firebaseapp.com",
    projectId: "lab3seniordesign",
    storageBucket: "lab3seniordesign.appspot.com",
    messagingSenderId: "912740682923",
    appId: "1:912740682923:web:b354a64702d187e720bbee",
    measurementId: "G-RL1DG7PVXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Auth service for the default app
const auth = getAuth(app);

export { auth };
