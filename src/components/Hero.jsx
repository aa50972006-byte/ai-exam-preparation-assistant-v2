import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-800">
            AI Exam
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Preparation Assistant
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Study smarter with Artificial Intelligence.
            Upload your notes, generate quizzes,
            create flashcards, summarize PDFs,
            and prepare for exams faster.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">

  <Link
    to="/register"
    className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition"
  >
    Get Started
  </Link>

  <a
    href="#features"
    className="px-6 py-3 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 transition"
  >
    Watch Demo
  </a>

</div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="w-full max-w-md rounded-3xl bg-white/70 backdrop-blur-lg shadow-2xl border border-white p-8">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              AI Dashboard Preview
            </h2>

            <div className="space-y-4">

              <div className="p-4 rounded-xl bg-blue-100">
                📄 Notes Uploaded
              </div>

              <div className="p-4 rounded-xl bg-purple-100">
                🤖 AI Summary Ready
              </div>

              <div className="p-4 rounded-xl bg-green-100">
                ✅ Quiz Generated
              </div>

              <div className="p-4 rounded-xl bg-yellow-100">
                📚 Flashcards Created
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}