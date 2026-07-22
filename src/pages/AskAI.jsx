import { useState } from "react";
import { askGemini } from "../services/gemini";

export default function AskAI() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAskAI() {
    if (!prompt.trim()) return;

    setLoading(true);

    const result = await askGemini(prompt);

    setResponse(result);

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-6">
          🤖 Ask Gemini AI
        </h1>

        <textarea
          rows="6"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask anything about your studies..."
          className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleAskAI}
          className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>

        {response && (
          <div className="mt-8 bg-gray-100 p-6 rounded-xl">
            <h2 className="font-bold text-xl mb-3">
              AI Response
            </h2>

            <p className="whitespace-pre-wrap">
              {response}
            </p>
          </div>
        )}

      </div>

    </div>
  );
}