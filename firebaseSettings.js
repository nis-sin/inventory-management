// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzMoqfkJ9-SEFYstxX69MVwK64a78JGBQ",
  authDomain: "inventory-management-cb024.firebaseapp.com",
  projectId: "inventory-management-cb024",
  storageBucket: "inventory-management-cb024.appspot.com",
  messagingSenderId: "290689976430",
  appId: "1:290689976430:web:8c7a4cdd61799f526efe7f",
  measurementId: "G-37MRW9C1KV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};