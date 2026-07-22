import { useState } from "react";
import { askGemini } from "../services/gemini";

export default function PdfSummarizer() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  async function summarizeNotes() {
    if (!text.trim()) return;

    setLoading(true);

    const prompt = `
Summarize the following study notes in simple language.

Notes:
${text}
`;

    const result = await askGemini(prompt);

    setSummary(result);

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-6">
          📄 AI Notes Summarizer
        </h1>

        <textarea
          rows={10}
          placeholder="Paste your lecture notes here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border rounded-xl p-4"
        />

        <button
          onClick={summarizeNotes}
          className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
        >
          {loading ? "Summarizing..." : "Summarize"}
        </button>

        {summary && (
          <div className="mt-8 bg-gray-100 p-6 rounded-xl whitespace-pre-wrap">
            <h2 className="text-xl font-bold mb-3">
              Summary
            </h2>

            {summary}
          </div>
        )}

      </div>
    </div>
  );
}