import { useNavigate } from "react-router-dom";
const tools = [
  {
    icon: "🤖",
    title: "Ask AI",
    description: "Ask any study-related question.",
    route: "/ask-ai"
  },
  {
    icon: "📄",
    title: "Summarize PDF",
    description: "Generate quick summaries from lecture notes.",
    route: "/pdf-summarizer"
  },
  {
    icon: "📝",
    title: "Generate Quiz",
    description: "Create MCQs from your uploaded notes.",
    route: "/quiz-generator"
  },
  {
    icon: "🧠",
    title: "Create Flashcards",
    description: "Generate revision flashcards instantly.",
    route: "/flashcards"
  },
  {
    icon: "📅",
    title: "Study Planner",
    description: "Create a personalized study schedule.",
    route: "/study-planner"
  },
  {
    icon: "📊",
    title: "Progress Report",
    description: "Track your learning performance.",
    route: "/progress"
  }
];

export default function AITools() {

  const navigate = useNavigate();
  return (
    <div className="mt-10">

      <h2 className="text-3xl font-bold mb-6">
        AI Study Tools
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {tools.map((tool, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition"
          >

            <div className="text-5xl mb-4">
              {tool.icon}
            </div>

            <h3 className="text-xl font-semibold">
              {tool.title}
            </h3>

            <p className="text-gray-600 mt-3">
              {tool.description}
            </p>

        <button
  onClick={() => navigate(tool.route)}
  className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
>
  Open
</button>

          </div>

        ))}

      </div>

    </div>
  );
}