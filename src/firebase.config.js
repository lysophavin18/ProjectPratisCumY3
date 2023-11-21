import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBi4B0dvvu1yQhFE-TtwYJyxZ5G_rkPktU",
  authDomain: "homeasr-a8e97.firebaseapp.com",
  projectId: "homeasr-a8e97",
  storageBucket: "homeasr-a8e97.appspot.com",
  messagingSenderId: "420905039668",
  appId: "1:420905039668:web:9540d4342b3bf47e031761",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
