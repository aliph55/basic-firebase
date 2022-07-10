// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlk9U50zFDRSDr-XEpq3gjgf-83SodkoE",
  authDomain: "fir-auth-yt-c1970.firebaseapp.com",
  projectId: "fir-auth-yt-c1970",
  storageBucket: "fir-auth-yt-c1970.appspot.com",
  messagingSenderId: "1088480607666",
  appId: "1:1088480607666:web:0bae2d88da8469739a38ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };
