import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB3d_nX-RVxjc1SwWtCoiZfYDDCkAHm96Q",
  authDomain: "override-hack.firebaseapp.com",
  projectId: "override-hack",
  storageBucket: "override-hack.appspot.com",
  messagingSenderId: "341161817540",
  appId: "1:341161817540:web:7fd1da502338383a07e091",
  measurementId: "G-PYLSJ2NH7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const firestore = getFirestore(app);


export {  auth, firestore, db};
