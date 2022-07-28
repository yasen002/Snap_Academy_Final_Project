// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNsGpr63xLAhAbF__Il9kQw9I1AFQ0nv8",
  authDomain: "chapsnat-b2bc0.firebaseapp.com",
  projectId: "chapsnat-b2bc0",
  storageBucket: "chapsnat-b2bc0.appspot.com",
  messagingSenderId: "1013682065301",
  appId: "1:1013682065301:web:f465a3b37dfab58ce7709c",
  measurementId: "G-VNX4RF1R7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);