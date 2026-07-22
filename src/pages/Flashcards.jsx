import { useState } from "react";
import { askGemini } from "../services/gemini";

export default function Flashcards() {
  const [topic, setTopic] = useState("");
  const [cards, setCards] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateFlashcards() {
    if (!topic.trim()) return;

    setLoading(true);

    const prompt = `
Create 10 study flashcards about "${topic}".

Format:

Front: Question
Back: Answer

Keep them simple for university students.
`;

    const result = await askGemini(prompt);

    setCards(result);
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-6">
          🧠 AI Flashcard Generator
        </h1>

        <input
          type="text"
          placeholder="Enter topic..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full border rounded-xl p-4 mb-4"
        />

        <button
          onClick={generateFlashcards}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          {loading ? "Generating..." : "Generate Flashcards"}
        </button>

        {cards && (
          <div className="mt-8 bg-gray-100 p-6 rounded-xl whitespace-pre-wrap">
            {cards}
          </div>
        )}

      </div>
    </div>
  );
}