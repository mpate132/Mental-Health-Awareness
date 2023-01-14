// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9lOasLw3FblDLIXtgWd7NfBJK5thjzQo",
  authDomain: "mental-health-awareness-c6e44.firebaseapp.com",
  projectId: "mental-health-awareness-c6e44",
  storageBucket: "mental-health-awareness-c6e44.appspot.com",
  messagingSenderId: "936419131186",
  appId: "1:936419131186:web:a1ed22ac69fd8519aee12b",
  measurementId: "G-60ZSL9PL3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);