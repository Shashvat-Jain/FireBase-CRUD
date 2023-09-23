import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR ID HERE",
  authDomain: "YOUR ID HERE",
  projectId: "YOUR ID HERE",
  storageBucket: "YOUR ID HERE",
  messagingSenderId: "YOUR ID HERE",
  appId: "YOUR ID HERE",
  measurementId: "YOUR ID HERE"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
