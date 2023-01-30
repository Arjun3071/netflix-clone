// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_RGZRtwVYCOEitxo-7IedzAYQyyUhAYc",
  authDomain: "netflix-react-ad336.firebaseapp.com",
  projectId: "netflix-react-ad336",
  storageBucket: "netflix-react-ad336.appspot.com",
  messagingSenderId: "174642520266",
  appId: "1:174642520266:web:17d5d96dd075f357845433",
  measurementId: "G-7ZZYGD8SVY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
