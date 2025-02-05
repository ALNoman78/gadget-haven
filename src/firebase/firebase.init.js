// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL4cX3PgxDSP2XTnArr75tdRKDReyAYBM",
  authDomain: "mobile-shop-8dac0.firebaseapp.com",
  projectId: "mobile-shop-8dac0",
  storageBucket: "mobile-shop-8dac0.firebasestorage.app",
  messagingSenderId: "753857690467",
  appId: "1:753857690467:web:edcec86fc44455640af156",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;