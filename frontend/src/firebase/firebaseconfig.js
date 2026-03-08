import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQ_gjX7dBVs69EMRjQDflUjciqczNqP4g",
  authDomain: "bookify-b0ec5.firebaseapp.com",
  projectId: "bookify-b0ec5",
  storageBucket: "bookify-b0ec5.firebasestorage.app",
  messagingSenderId: "1032483425714",
  appId: "1:1032483425714:web:bc0293a6c6ccedf81a28ab"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
