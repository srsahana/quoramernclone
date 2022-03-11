// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5J-H2SygdDCPCegpd10Ge4y-mGzxDqng",
  authDomain: "quora-clone-mern-159e3.firebaseapp.com",
  projectId: "quora-clone-mern-159e3",
  storageBucket: "quora-clone-mern-159e3.appspot.com",
  messagingSenderId: "519685468640",
  appId: "1:519685468640:web:5c3423b1819def4d73fb85",
  measurementId: "G-1LZN5Y9961"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const provider = new GoogleAuthProvider()

export {auth, provider}
