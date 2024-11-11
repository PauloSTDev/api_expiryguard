import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDf4r5veEWSwjfEeBU-laYI5iNz4LPGlUA",
  authDomain: "mvp-farmacias-f6498.firebaseapp.com",
  databaseURL:  "https://mvp-farmacias-f6498-default-rtdb.firebaseio.com/",
  projectId: "mvp-farmacias-f6498",
  storageBucket: "mvp-farmacias-f6498.firebasestorage.app",
  messagingSenderId: "617804991515",
  appId: "1:617804991515:web:7d232994aae52526823cbe",
  measurementId: "G-3484H71W7G"
};;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbFirestore = getFirestore(app);

export {app, db, dbFirestore};