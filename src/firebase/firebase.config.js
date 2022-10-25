// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjbOTG8du0bUqzhmJPdbonOOpYMeOP26A",
  authDomain: "a-teaching-tone.firebaseapp.com",
  projectId: "a-teaching-tone",
  storageBucket: "a-teaching-tone.appspot.com",
  messagingSenderId: "1028942392855",
  appId: "1:1028942392855:web:ca80065374fe6251db7652"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;