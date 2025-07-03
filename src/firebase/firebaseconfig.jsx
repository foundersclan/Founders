// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwHPf_LfC-q_VZ8NUEKk0eLFuLWS74u04",
  authDomain: "founders-6ed01.firebaseapp.com",
  projectId: "founders-6ed01",
  storageBucket: "founders-6ed01.firebasestorage.app",
  messagingSenderId: "747836366338",
  appId: "1:747836366338:web:9d3a3735676f0f7d3f911b",
  measurementId: "G-B9CV5EJZLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firedb = getFirestore(app);

export {firedb};