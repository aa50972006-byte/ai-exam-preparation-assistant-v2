import { db, auth } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export async function getProgress() {

  const user = auth.currentUser;

  if (!user) return null;

  const userRef = doc(db, "userProgress", user.uid);

  const snapshot = await getDoc(userRef);

  if (snapshot.exists()) {
    return snapshot.data();
  }

  return null;
}