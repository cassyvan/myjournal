import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBdUwz1Wsw4kDXgLgPT4wVuzEHIa3bE_MQ",
  authDomain: "journalapp-89069.firebaseapp.com",
  databaseURL: "https://journalapp-89069-default-rtdb.firebaseio.com",
  projectId: "journalapp-89069",
  storageBucket: "journalapp-89069.appspot.com",
  messagingSenderId: "964907251844",
  appId: "1:964907251844:web:2e09ee64f03f8e83336ad1",
  measurementId: "G-R26318TMRM",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export { app, db, auth, firebase_app };
