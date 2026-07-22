const stats = [
  {
    number: "10K+",
    title: "Practice Questions"
  },
  {
    number: "500+",
    title: "Study Notes"
  },
  {
    number: "95%",
    title: "Student Satisfaction"
  },
  {
    number: "24/7",
    title: "AI Assistance"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-gray-800">
            Why Choose ExamAI?
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Everything you need for smarter exam preparation in one place.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}

          <div>

            <div className="space-y-6">

              <div className="flex gap-4">

                <div className="text-3xl">⚡</div>

                <div>

                  <h3 className="text-xl font-semibold">
                    Fast AI Responses
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Ask questions and receive instant explanations.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="text-3xl">📚</div>

                <div>

                  <h3 className="text-xl font-semibold">
                    Smart Learning
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Learn through quizzes, summaries and flashcards.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="text-3xl">🎯</div>

                <div>

                  <h3 className="text-xl font-semibold">
                    Better Results
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Stay organized and improve exam performance.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="grid grid-cols-2 gap-6">

            {stats.map((item, index) => (

              <div
                key={index}
                className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 text-center shadow-lg"
              >

                <h3 className="text-4xl font-bold">
                  {item.number}
                </h3>

                <p className="mt-3">
                  {item.title}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}