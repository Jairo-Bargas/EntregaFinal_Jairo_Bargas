// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-Z3rZgBukBkHTrLCr40GsTkctQrmyICA",
  authDomain: "ecommerce-jb-edf9c.firebaseapp.com",
  projectId: "ecommerce-jb-edf9c",
  storageBucket: "ecommerce-jb-edf9c.firebasestorage.app",
  messagingSenderId: "965277663011",
  appId: "1:965277663011:web:d5a4bfe2e5e801ce45d696"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)