const activities = [
  {
    title: "Uploaded Operating System Notes",
    time: "2 hours ago",
    icon: "📄",
  },
  {
    title: "Generated Compiler Quiz",
    time: "Yesterday",
    icon: "📝",
  },
  {
    title: "Created AI Flashcards",
    time: "2 days ago",
    icon: "🧠",
  },
  {
    title: "Asked AI about DSA",
    time: "3 days ago",
    icon: "🤖",
  },
];

export default function RecentActivity() {
  return (
    <div className="mt-10">

      <h2 className="text-3xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="bg-white rounded-2xl shadow-lg">

        {activities.map((activity, index) => (

          <div
            key={index}
            className="flex items-center justify-between p-5 border-b last:border-none hover:bg-gray-50 transition"
          >

            <div className="flex items-center gap-4">

              <div className="text-3xl">
                {activity.icon}
              </div>

              <div>

                <h3 className="font-semibold">
                  {activity.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {activity.time}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}