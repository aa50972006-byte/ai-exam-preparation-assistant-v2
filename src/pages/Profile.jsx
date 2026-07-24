import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function Profile() {

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    createdAt: "",
  });

  const [progress, setProgress] = useState({
    Quizzes: 0,
    Flashcards: 0,
    Summaries: 0,
    Aiquestions: 0,
  });

  const [editing, setEditing] = useState(false);

  useEffect(() => {

    async function loadProfile() {

      const user = auth.currentUser;

      if (!user) return;

      const userDoc = await getDoc(doc(db, "users", user.uid));

      if (userDoc.exists()) {
        setUserData(userDoc.data());
      }

      const progressDoc = await getDoc(doc(db, "userProgress", user.uid));

      if (progressDoc.exists()) {
        setProgress(progressDoc.data());
      }

    }

    loadProfile();

  }, []);

  const handleSave = async () => {

    const user = auth.currentUser;

    if (!user) return;

    await updateDoc(doc(db, "users", user.uid), {
      name: userData.name,
    });

    alert("Profile updated successfully!");

    setEditing(false);

  };

  const total =
    progress.Quizzes +
    progress.Flashcards +
    progress.Summaries +
    progress.Aiquestions;

  const percentage = Math.min(total * 5, 100);

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">

          <div className="flex items-center gap-6">

            <div className="w-24 h-24 rounded-full bg-white text-blue-600 flex items-center justify-center text-5xl font-bold">

              {userData.name ? userData.name.charAt(0).toUpperCase() : "U"}

            </div>

            <div>

              {editing ? (

                <input
                  value={userData.name}
                  onChange={(e)=>setUserData({...userData,name:e.target.value})}
                  className="text-black px-3 py-2 rounded-lg w-64"
                />

              ) : (

                <h1 className="text-4xl font-bold">
                  {userData.name}
                </h1>

              )}

              <p className="text-blue-100 mt-2">
                {userData.email}
              </p>

            </div>

          </div>

        </div>

        <div className="p-8">

          <div className="flex justify-between mb-8">

            <h2 className="text-2xl font-bold">
              📊 Learning Statistics
            </h2>

            {editing ? (

              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-5 py-2 rounded-lg"
              >
                Save
              </button>

            ) : (

              <button
                onClick={()=>setEditing(true)}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg"
              >
                Edit Profile
              </button>

            )}

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-blue-100 rounded-xl p-5">
              <h3>🤖 AI Questions</h3>
              <p className="text-3xl font-bold">
                {progress.Aiquestions}
              </p>
            </div>

            <div className="bg-green-100 rounded-xl p-5">
              <h3>📝 Quizzes</h3>
              <p className="text-3xl font-bold">
                {progress.Quizzes}
              </p>
            </div>

            <div className="bg-purple-100 rounded-xl p-5">
              <h3>🧠 Flashcards</h3>
              <p className="text-3xl font-bold">
                {progress.Flashcards}
              </p>
            </div>

            <div className="bg-orange-100 rounded-xl p-5">
              <h3>📄 Summaries</h3>
              <p className="text-3xl font-bold">
                {progress.Summaries}
              </p>
            </div>

          </div>

          <div className="mt-10">

            <h2 className="text-2xl font-bold mb-4">
              🎯 Overall Progress
            </h2>

            <div className="w-full bg-gray-300 rounded-full h-6">

              <div
                className="bg-green-500 h-6 rounded-full transition-all duration-500"
                style={{width:`${percentage}%`}}
              ></div>

            </div>

            <p className="mt-3 font-semibold">
              {percentage}% Completed
            </p>

          </div>

        </div>

      </div>

    </div>

  );

}