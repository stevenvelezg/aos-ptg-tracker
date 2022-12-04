// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjWUc0zkQ5YbADDJscucbs5E-3fIN8HGc",
  authDomain: "aos-ptg-tracker.firebaseapp.com",
  projectId: "aos-ptg-tracker",
  storageBucket: "aos-ptg-tracker.appspot.com",
  messagingSenderId: "365545204485",
  appId: "1:365545204485:web:4a21ecefd0f6c5cdaf256c",
  measurementId: "G-K8R3CEKZG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);