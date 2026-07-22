const features = [
  {
    icon: "📄",
    title: "PDF Summarizer",
    description: "Upload lecture notes and instantly get AI-generated summaries."
  },
  {
    icon: "📝",
    title: "Quiz Generator",
    description: "Generate practice quizzes from your notes in one click."
  },
  {
    icon: "🧠",
    title: "Flashcards",
    description: "Create smart flashcards to revise important concepts."
  },
  {
    icon: "🤖",
    title: "AI Study Assistant",
    description: "Ask questions about your study material and get instant answers."
  },
  {
    icon: "📅",
    title: "Study Planner",
    description: "Organize subjects and create an effective study schedule."
  },
  {
    icon: "📊",
    title: "Progress Tracking",
    description: "Monitor your learning progress with simple visual statistics."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-gray-800">
            Powerful AI Features
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Everything you need to prepare for exams smarter and faster.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              <div className="text-5xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}