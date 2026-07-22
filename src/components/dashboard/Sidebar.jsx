import { NavLink, useNavigate } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Ask AI", path: "/ask-ai" },
  { name: "Quiz Generator", path: "/quiz-generator" },
  { name: "PDF Summarizer", path: "/pdf-summarizer" },
  { name: "Flashcards", path: "/flashcards" },
  { name: "Study Planner", path: "/study-planner" },
  { name: "Progress", path: "/progress" },
  { name: "Profile", path: "/profile" },
  { name: "Settings", path: "/settings" },
];

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="w-64 min-h-screen bg-white shadow-lg p-6 flex flex-col">

      <h1 className="text-2xl font-bold text-blue-600 mb-8">
        ExamAI
      </h1>

      <div className="flex flex-col gap-2">

        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}

      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-auto bg-red-500 text-white py-3 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>

    </div>
  );
}