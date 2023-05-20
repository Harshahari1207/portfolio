// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import firebase from "firebase/compat/app";
import "firebase/compat/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7-NseKYUCAaZu1cp9n8ZYd12wRPADLP8",
  authDomain: "portfolio-4c607.firebaseapp.com",
  databaseURL:
    "https://portfolio-4c607-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-4c607",
  storageBucket: "portfolio-4c607.appspot.com",
  messagingSenderId: "842039451519",
  appId: "1:842039451519:web:e6394f39dfc0679c0f444a",
  measurementId: "G-P0GM1TMFYP",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
