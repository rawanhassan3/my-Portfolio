import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDr5joocyc3FAA-MfCT7c8VS8DvWYm9PLg",
  authDomain: "my-portfolio-ffd9a.firebaseapp.com",
  projectId: "my-portfolio-ffd9a",
  storageBucket: "my-portfolio-ffd9a.firebasestorage.app",
  messagingSenderId: "804959647092",
  appId: "1:804959647092:web:cd97938b5ce08a12f56821",
  measurementId: "G-Y4RZQXTWGP"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
