import { db, auth } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy
} from "firebase/firestore";

// Add Task
export async function addTask(task) {

  const user = auth.currentUser;

  if (!user) return;

  await addDoc(
    collection(db, "users", user.uid, "studyPlanner"),
    {
      task,
      completed: false,
      createdAt: serverTimestamp()
    }
  );

}

// Get Tasks
export async function getTasks() {

  const user = auth.currentUser;

  if (!user) return [];

  const q = query(
    collection(db, "users", user.uid, "studyPlanner"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

}

// Delete Task
export async function deleteTask(id) {

  const user = auth.currentUser;

  if (!user) return;

  await deleteDoc(
    doc(db, "users", user.uid, "studyPlanner", id)
  );

}