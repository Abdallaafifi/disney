// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFkl1lZ6I2wEP6BXfT2hZEzlpYokW1gjM",
  authDomain: "netflex-54b01.firebaseapp.com",
  projectId: "netflex-54b01",
  storageBucket: "netflex-54b01.appspot.com",
  messagingSenderId: "720043703622",
  appId: "1:720043703622:web:166da082b4b817f224b947",
};

// REACT_APP_FIREBASE_API_KEY = "AIzaSyCFkl1lZ6I2wEP6BXfT2hZEzlpYokW1gjM";
// REACT_APP_FIREBASE_AUTH_DOMAIN = "netflex-54b01.firebaseapp.com";
// REACT_APP_FIREBASE_PROJECT_ID = "netflex-54b01";
// REACT_APP_FIREBASE_STORAGE_BUCKET = "netflex-54b01.appspot.com";
// REACT_APP_FIREBASE_MESSAGE_SENDER = "720043703622";
// REACT_APP_FIREBASE_APP_ID = "1:720043703622:web:166da082b4b817f224b947";
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const dp = getFirestore(app);
