// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZPvv2tR7jbC5a3Qv8Wc1o-bC3JjFik70",
  authDomain: "assignment--06-2e434.firebaseapp.com",
  projectId: "assignment--06-2e434",
  storageBucket: "assignment--06-2e434.firebasestorage.app",
  messagingSenderId: "302269509879",
  appId: "1:302269509879:web:fd5df4600fef263f5923f2",
  measurementId: "G-2K6KV6VBXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

