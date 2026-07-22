const stats = [
  {
    title: "Uploaded Notes",
    value: "12",
    icon: "📄",
    color: "bg-blue-500",
  },
  {
    title: "Quizzes",
    value: "28",
    icon: "📝",
    color: "bg-green-500",
  },
  {
    title: "Flashcards",
    value: "145",
    icon: "🧠",
    color: "bg-purple-500",
  },
  {
    title: "Study Progress",
    value: "82%",
    icon: "🎯",
    color: "bg-orange-500",
  },
];

export default function StatsCards() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

      {stats.map((item, index) => (

        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
        >

          <div
            className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center text-3xl`}
          >
            {item.icon}
          </div>

          <h3 className="mt-5 text-gray-500">
            {item.title}
          </h3>

          <p className="text-3xl font-bold mt-2">
            {item.value}
          </p>

        </div>

      ))}

    </div>
  );
}