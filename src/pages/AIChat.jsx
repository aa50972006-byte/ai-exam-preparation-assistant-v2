import { useState } from "react";
import { askGemini } from "../services/gemini";
import { updateProgress } from "../services/progress";
import { saveHistory } from "../services/history";

export default function AIChat() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);


  const handleAsk = async () => {

    if (!question.trim()) return;


    setLoading(true);


    try {

      const response = await askGemini(question);


      // Update Firebase progress
      await updateProgress("aiQuestions");
      await saveHistory(
  "🤖 AI",
  `Asked AI about "${question}"`
);


      setAnswer(response);


    } catch (error) {

      console.error(error);

      setAnswer("Something went wrong. Please try again.");

    }


    setLoading(false);

  };


  return (

    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">


        <h1 className="text-3xl font-bold mb-6 text-blue-600">
          🤖 AI Study Assistant
        </h1>


        <textarea
          rows="6"
          value={question}
          onChange={(e)=>setQuestion(e.target.value)}
          placeholder="Ask anything about your studies..."
          className="w-full border rounded-xl p-4"
        />


        <button

          onClick={handleAsk}

          className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"

        >

          {loading ? "Thinking..." : "Ask AI"}

        </button>



        <div className="mt-8 border rounded-xl p-5 bg-gray-50 min-h-[150px] whitespace-pre-wrap">

          {loading ? "Thinking..." : answer}

        </div>


      </div>

    </div>

  );
}