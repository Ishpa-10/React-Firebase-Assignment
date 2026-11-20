import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvUwrU_edU6oP1hvpp3dazeUFNCVPBWRM",
  authDomain: "react-firebase-assignmen-f4149.firebaseapp.com",
  projectId: "react-firebase-assignmen-f4149",
  storageBucket: "react-firebase-assignmen-f4149.firebasestorage.app",
  messagingSenderId: "167949863803",
  appId: "1:167949863803:web:e83f290358cd3e35504bde"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);