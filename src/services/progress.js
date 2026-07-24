import { db, auth } from "../firebase";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";


export async function updateProgress(field) {

  const user = auth.currentUser;

  if (!user) return;


  const userRef = doc(db, "userProgress", user.uid);


  const snapshot = await getDoc(userRef);


  if (!snapshot.exists()) {

    await setDoc(userRef, {
      quizzes: 0,
      summaries: 0,
      flashcards: 0,
      aiQuestions: 0,
    });

  }


  await updateDoc(userRef, {

    [field]: increment(1)

  });

}