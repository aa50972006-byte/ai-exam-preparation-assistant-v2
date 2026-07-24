import { useState } from "react";
import { askGemini } from "../services/gemini";
import { updateProgress } from "../services/progress";
import { saveHistory } from "../services/history";

export default function QuizGenerator() {

  const [topic, setTopic] = useState("");
  const [quiz, setQuiz] = useState("");
  const [loading, setLoading] = useState(false);


  async function generateQuiz() {

    if (!topic.trim()) return;


    setLoading(true);


    try {

      const prompt = `
Generate 5 multiple-choice questions about "${topic}".

Rules:
- Each question should have 4 options (A, B, C, D)
- Mention the correct answer after each question
- Keep the language simple for university students.
`;


      const result = await askGemini(prompt);


      // Update Firebase progress
      await updateProgress("quizzes");
      await saveHistory(
  "📝 Quiz",
  `Generated quiz on "${topic}"`
);


      setQuiz(result);


    } catch (error) {

      console.error(error);

      setQuiz("Failed to generate quiz. Please try again.");

    }


    setLoading(false);

  }


  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">


        <h1 className="text-3xl font-bold mb-6">
          📝 AI Quiz Generator
        </h1>


        <input

          type="text"

          placeholder="Enter topic..."

          value={topic}

          onChange={(e)=>setTopic(e.target.value)}

          className="w-full border rounded-xl p-4 mb-4"

        />


        <button

          onClick={generateQuiz}

          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"

        >

          {loading ? "Generating..." : "Generate Quiz"}

        </button>



        {quiz && (

          <div className="mt-8 bg-gray-100 p-6 rounded-xl whitespace-pre-wrap">

            {quiz}

          </div>

        )}


      </div>

    </div>

  );
}