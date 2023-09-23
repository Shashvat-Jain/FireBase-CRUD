import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7ZO7QWEgrCDh1HKwYBt8cPqBOs8gk9l8",
  authDomain: "react-crud-28efe.firebaseapp.com",
  projectId: "react-crud-28efe",
  storageBucket: "react-crud-28efe.appspot.com",
  messagingSenderId: "759735099836",
  appId: "1:759735099836:web:8b9018b691efeb3e350bb9",
  measurementId: "G-Y647WMMVL4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
