import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_3CQmcnQPRDA5kugDXaMF5iYPY3QGV44",
  authDomain: "react-crud-6b701.firebaseapp.com",
  projectId: "react-crud-6b701",
  storageBucket: "react-crud-6b701.appspot.com",
  messagingSenderId: "405453930575",
  appId: "1:405453930575:web:5cc8b976499e21780aea3a",
  measurementId: "G-SW95C95YEB"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
