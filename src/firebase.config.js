// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD34Y8Y0ZHf03QsGJvXvAiYom6K2YQkO8g",
  authDomain: "house-marketplace-58d19.firebaseapp.com",
  projectId: "house-marketplace-58d19",
  storageBucket: "house-marketplace-58d19.appspot.com",
  messagingSenderId: "291365934672",
  appId: "1:291365934672:web:3c270ec41b1e926fcba355"
};

// Initialize Firebase
export const db = getFirestore()