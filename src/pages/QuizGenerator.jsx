import { useState } from "react";
import { askGemini } from "../services/gemini";
import { updateProgress } from "../services/progress";
import { saveHistory } from "../services/history";
import { exportToPDF } from "../utils/pdfExport";

export default function QuizGenerator() {

  const [topic, setTopic] = useState("");
  const [quiz, setQuiz] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateQuiz() {

    if (!topic.trim()) {
      alert("Please enter a topic");
      return;
    }

    setLoading(true);
    setQuiz("");

    try {

      const prompt = `
You are an AI Exam Preparation Assistant.

Generate 5 multiple-choice questions about "${topic}".

Rules:
- Each question should have 4 options (A, B, C, D)
- Mention the correct answer after each question
- Keep explanations simple for university students
- Format clearly for exam preparation
`;

      const result = await askGemini(prompt);

      // Update Firestore Progress
      await updateProgress("Quizzes");

      // Save History
      await saveHistory(
        "📝 Quiz",
        `Generated quiz on "${topic}"`
      );

      setQuiz(result);

    } catch (error) {

      console.error("Quiz Error:", error);

      setQuiz("❌ Failed to generate quiz. Please try again.");

    }

    setLoading(false);

  }

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold mb-6 text-blue-600">
          📝 AI Quiz Generator
        </h1>

        <input
          type="text"
          placeholder="Enter subject or topic..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full border rounded-xl p-4"
        />

        <button
          onClick={generateQuiz}
          className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          {loading ? "Generating Quiz..." : "Generate Quiz"}
        </button>

        {quiz && (

          <div className="mt-8 bg-gray-100 p-6 rounded-xl whitespace-pre-wrap">

            <h2 className="text-xl font-bold mb-4">
              Generated Quiz
            </h2>

            {quiz}

            <button
              onClick={() => exportToPDF("Quiz", quiz)}
              className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
            >
              📥 Download Quiz as PDF
            </button>

          </div>

        )}

      </div>

    </div>

  );

}