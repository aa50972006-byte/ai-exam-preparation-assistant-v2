import { db, auth } from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  query,
  orderBy,
  limit
} from "firebase/firestore";


// Save activity

export async function saveHistory(type, description) {

  try {

    const user = auth.currentUser;


    console.log("Current User:", user);


    if (!user) {
      console.log("No user logged in");
      return;
    }



    const historyRef = collection(
      db,
      "users",
      user.uid,
      "history"
    );



    const docRef = await addDoc(historyRef, {

      type: type,

      description: description,

      createdAt: serverTimestamp()

    });



    console.log(
      "History saved successfully:",
      docRef.id
    );



  } catch (error) {

    console.error(
      "History save error:",
      error
    );

  }

}




// Get recent activities

export async function getHistory() {

  try {

    const user = auth.currentUser;


    if (!user) {
      console.log("No user logged in");
      return [];
    }



    const historyRef = collection(
      db,
      "users",
      user.uid,
      "history"
    );



    const q = query(

      historyRef,

      orderBy(
        "createdAt",
        "desc"
      ),

      limit(5)

    );



    const snapshot = await getDocs(q);



    return snapshot.docs.map(doc => ({

      id: doc.id,

      ...doc.data()

    }));


  } catch(error) {

    console.error(
      "History fetch error:",
      error
    );


    return [];

  }

}