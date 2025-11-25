// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB867DHVhCkYBkA_KHnMVFbJmcW_INATjk",
  authDomain: "cprg306-week10.firebaseapp.com",
  projectId: "cprg306-week10",
  storageBucket: "cprg306-week10.firebasestorage.app",
  messagingSenderId: "134591568074",
  appId: "1:134591568074:web:a471cb594a753961c87c33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);