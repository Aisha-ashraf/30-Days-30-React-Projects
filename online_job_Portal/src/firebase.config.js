// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ8AdQaMR9ji3URjA-Zp1oXvk4q1sWlmY",
  authDomain: "online-job-portal-86277.firebaseapp.com",
  projectId: "online-job-portal-86277",
  storageBucket: "online-job-portal-86277.appspot.com",
  messagingSenderId: "611919404553",
  appId: "1:611919404553:web:2dc576a2add24ce3e962d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};