import { useState } from "react";
import { askGemini } from "../services/gemini";

export default function StudyPlanner() {

  const [subject, setSubject] = useState("");
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);


  const generatePlan = async () => {

    if (!subject || !days || !hours) return;


    setLoading(true);


    const prompt = `
Create a detailed study plan.

Subject:
${subject}

Number of days:
${days}

Study hours per day:
${hours}


Include:
1. Daily topics
2. Revision schedule
3. Practice activities
4. Exam preparation tips

Make it realistic for a university student.
`;


    const result = await askGemini(prompt);


    setPlan(result);

    setLoading(false);

  };


  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">


        <h1 className="text-3xl font-bold text-green-600 mb-6">
          📅 AI Study Planner
        </h1>


        <input
          type="text"
          placeholder="Enter subject"
          value={subject}
          onChange={(e)=>setSubject(e.target.value)}
          className="w-full border rounded-xl p-4 mb-4"
        />


        <input
          type="number"
          placeholder="Number of days"
          value={days}
          onChange={(e)=>setDays(e.target.value)}
          className="w-full border rounded-xl p-4 mb-4"
        />


        <input
          type="number"
          placeholder="Study hours per day"
          value={hours}
          onChange={(e)=>setHours(e.target.value)}
          className="w-full border rounded-xl p-4"
        />


        <button
          onClick={generatePlan}
          className="mt-5 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700"
        >
          {loading ? "Creating Plan..." : "Generate Study Plan"}
        </button>



        {plan && (

          <div className="mt-8 bg-gray-100 p-6 rounded-xl whitespace-pre-wrap">

            <h2 className="text-xl font-bold mb-4">
              📚 Your Study Plan
            </h2>

            {plan}

          </div>

        )}


      </div>

    </div>

  );

}