
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDxG3hDsbMV1ph9diIQeTHCyo6FZxVJdY",
  authDomain: "toll-cf51e.firebaseapp.com",
  projectId: "toll-cf51e",
  storageBucket: "toll-cf51e.firebasestorage.app",
  messagingSenderId: "177947635573",
  appId: "1:177947635573:web:a5214439c841c2f28b6d3c",
  measurementId: "G-3HDBHGQ3PG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export everything you need
export { app, auth, db, storage };
