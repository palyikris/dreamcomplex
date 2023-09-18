// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "dreamapartmanok.firebaseapp.com",
  projectId: "dreamapartmanok",
  storageBucket: "dreamapartmanok.appspot.com",
  messagingSenderId: process.env.MESSAGE_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MES_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
