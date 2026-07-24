import { useEffect, useState } from "react";
import { getProgress } from "../../services/getProgress";

export default function StatsCards() {

  const [stats, setStats] = useState({
    quizzes: 0,
    flashcards: 0,
    summaries: 0,
    aiQuestions: 0
  });

  const [loading, setLoading] = useState(true);



  useEffect(() => {

    async function loadProgress() {

      try {

        const data = await getProgress();


        if (data) {

          setStats({

            quizzes: data.Quizzes || 0,

            flashcards: data.Flashcards || 0,

            summaries: data.Summaries || 0,

            aiQuestions: data.Aiquestions || 0

          });

        }


      } catch(error) {

        console.error(
          "Progress loading error:",
          error
        );

      }


      setLoading(false);

    }


    loadProgress();


  }, []);




  const cards = [

    {
      title: "Quizzes",
      value: stats.quizzes,
      icon: "📝",
      color: "bg-green-500"
    },

    {
      title: "Flashcards",
      value: stats.flashcards,
      icon: "🧠",
      color: "bg-purple-500"
    },

    {
      title: "PDF Summaries",
      value: stats.summaries,
      icon: "📄",
      color: "bg-blue-500"
    },

    {
      title: "AI Questions",
      value: stats.aiQuestions,
      icon: "🤖",
      color: "bg-orange-500"
    }

  ];



  return (

    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">


      {cards.map((item,index)=>(


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

            {loading ? "..." : item.value}

          </p>



        </div>


      ))}



    </div>

  );

}