import { useState } from "react";
import { askGemini } from "../services/gemini";
import { updateProgress } from "../services/progress";
import { saveHistory } from "../services/history";

export default function Flashcards() {

  const [topic, setTopic] = useState("");
  const [flashcards, setFlashcards] = useState("");
  const [loading, setLoading] = useState(false);

  const generateFlashcards = async () => {

    if (!topic.trim()) return;

    setLoading(true);

    try {

      const prompt = `
Create 15 study flashcards about "${topic}".

Format:

Flashcard 1

Question:
Answer:

Flashcard 2

Question:
Answer:

Make answers short and easy for exam preparation.
`;

      const result = await askGemini(prompt);

      // Update Firebase Progress
      await updateProgress("flashcards");
      await saveHistory(
  "🧠 Flashcards",
  `Created flashcards for "${topic}"`
);

      setFlashcards(result);

    } catch (error) {

      console.error(error);

      setFlashcards("Failed to generate flashcards. Please try again.");

    }

    setLoading(false);

  };

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-purple-600 mb-6">
          🧠 AI Flashcards Generator
        </h1>

        <input
          type="text"
          placeholder="Enter subject or topic..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full border rounded-xl p-4"
        />

        <button
          onClick={generateFlashcards}
          className="mt-5 bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700"
        >
          {loading ? "Generating..." : "Generate Flashcards"}
        </button>

        {flashcards && (
          <div className="mt-8 bg-gray-100 rounded-xl p-6 whitespace-pre-wrap">

            <h2 className="text-xl font-bold mb-4">
              Generated Flashcards
            </h2>

            {flashcards}

          </div>
        )}

      </div>

    </div>

  );

}