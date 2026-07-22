import { useState } from "react";
import { askGemini } from "../services/gemini";

export default function StudyPlanner() {
  const [subjects, setSubjects] = useState("");
  const [days, setDays] = useState("");
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);

  async function generatePlan() {
    if (!subjects || !days) return;

    setLoading(true);

    const prompt = `
Create a ${days}-day study plan for these subjects:

${subjects}

Requirements:
- Divide study equally
- Include revision sessions
- Keep it suitable for university students
`;

    const result = await askGemini(prompt);
    setPlan(result);
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-6">
          📅 AI Study Planner
        </h1>

        <textarea
          rows="5"
          placeholder="Enter subjects (one per line)"
          value={subjects}
          onChange={(e) => setSubjects(e.target.value)}
          className="w-full border rounded-xl p-4 mb-4"
        />

        <input
          type="number"
          placeholder="Days until exam"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          className="w-full border rounded-xl p-4 mb-4"
        />

        <button
          onClick={generatePlan}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          {loading ? "Generating..." : "Generate Study Plan"}
        </button>

        {plan && (
          <div className="mt-8 bg-gray-100 p-6 rounded-xl whitespace-pre-wrap">
            {plan}
          </div>
        )}

      </div>
    </div>
  );
}