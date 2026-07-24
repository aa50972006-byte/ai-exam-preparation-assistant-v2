import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8RTClUznUxAZWIz6ER4nji7haW2mRsc0",
  authDomain: "ai-exam-preparation-assi-a9b18.firebaseapp.com",
  projectId: "ai-exam-preparation-assi-a9b18",
  storageBucket: "ai-exam-preparation-assi-a9b18.firebasestorage.app",
  messagingSenderId: "180832526222",
  appId: "1:180832526222:web:06a6e0d754c2fc2f620edf"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;