// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, updateDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFXQ3TngvT7i9-dC-ZFbhEr5EyAyLnyn4",
  authDomain: "pytania-c2572.firebaseapp.com",
  projectId: "pytania-c2572",
  storageBucket: "pytania-c2572.appspot.com",
  messagingSenderId: "984596912905",
  appId: "1:984596912905:web:2e714edace5cd70a5691d8",
  measurementId: "G-KEEEZ1VP4L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


export const database = getFirestore(app);