import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Progress() {

  const [progress, setProgress] = useState({
    quizzes: 0,
    summaries: 0,
    flashcards: 0,
    aiQuestions: 0,
  });

  useEffect(() => {

    async function loadProgress() {

      const user = auth.currentUser;

      if (!user) return;

      const docRef = doc(db, "userProgress", user.uid);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProgress(docSnap.data());
      }

    }

    loadProgress();

  }, []);

  const total =
    progress.quizzes +
    progress.flashcards +
    progress.summaries +
    progress.aiQuestions;

  const percentage = Math.min(total * 5, 100);

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-8">
          📊 Your Learning Progress
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-blue-100 p-6 rounded-xl">
            <h2 className="text-lg font-bold">📝 Quizzes</h2>
            <p className="text-4xl mt-3 font-bold">
              {progress.quizzes}
            </p>
          </div>

          <div className="bg-green-100 p-6 rounded-xl">
            <h2 className="text-lg font-bold">📄 Summaries</h2>
            <p className="text-4xl mt-3 font-bold">
              {progress.summaries}
            </p>
          </div>

          <div className="bg-purple-100 p-6 rounded-xl">
            <h2 className="text-lg font-bold">🧠 Flashcards</h2>
            <p className="text-4xl mt-3 font-bold">
              {progress.flashcards}
            </p>
          </div>

          <div className="bg-yellow-100 p-6 rounded-xl">
            <h2 className="text-lg font-bold">🤖 AI Questions</h2>
            <p className="text-4xl mt-3 font-bold">
              {progress.aiQuestions}
            </p>
          </div>

        </div>

        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-4">
            Overall Progress
          </h2>

          <div className="w-full bg-gray-300 rounded-full h-6">

            <div
              className="bg-green-500 h-6 rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            ></div>

          </div>

          <p className="mt-3 text-lg font-semibold">
            {percentage}% Completed
          </p>

        </div>

      </div>

    </div>

  );

}
``