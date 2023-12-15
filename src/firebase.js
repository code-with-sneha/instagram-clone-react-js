// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxG-4EJJY1tVhr12HdcawCXc5Ei_nQUsw",
  authDomain: "react-instagram-clone-8dee5.firebaseapp.com",
  projectId: "react-instagram-clone-8dee5",
  storageBucket: "react-instagram-clone-8dee5.appspot.com",
  messagingSenderId: "578321741499",
  appId: "1:578321741499:web:fea6b3a3673b3940aadb9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();