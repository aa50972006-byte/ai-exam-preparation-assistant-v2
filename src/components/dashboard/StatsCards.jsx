import { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function StatsCards() {

  const [stats, setStats] = useState({
    quizzes: 0,
    summaries: 0,
    flashcards: 0,
    aiQuestions: 0,
  });

  useEffect(() => {

    async function loadStats() {

      const user = auth.currentUser;

      if (!user) return;

      const docRef = doc(db, "userProgress", user.uid);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setStats(docSnap.data());
      }

    }

    loadStats();

  }, []);

  const total =
    stats.quizzes +
    stats.summaries +
    stats.flashcards +
    stats.aiQuestions;

  const percentage = Math.min(total * 5, 100);

  const cards = [

    {
      title: "AI Questions",
      value: stats.aiQuestions,
      icon: "🤖",
      color: "bg-blue-500",
    },

    {
      title: "Quizzes",
      value: stats.quizzes,
      icon: "📝",
      color: "bg-green-500",
    },

    {
      title: "Flashcards",
      value: stats.flashcards,
      icon: "🧠",
      color: "bg-purple-500",
    },

    {
      title: "Study Progress",
      value: `${percentage}%`,
      icon: "🎯",
      color: "bg-orange-500",
    },

  ];

  return (

    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

      {cards.map((item, index) => (

        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
        >

          <div
            className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center text-3xl`}
          >
            {item.icon}
          </div>

          <h3 className="mt-5 text-gray-500">
            {item.title}
          </h3>

          <p className="text-3xl font-bold mt-2">
            {item.value}
          </p>

        </div>

      ))}

    </div>

  );

}