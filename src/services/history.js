import { auth, db } from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

export async function saveHistory(type, title) {

  const user = auth.currentUser;

  if (!user) return;

  await addDoc(
    collection(db, "users", user.uid, "history"),
    {
      type,
      title,
      createdAt: serverTimestamp(),
    }
  );

}