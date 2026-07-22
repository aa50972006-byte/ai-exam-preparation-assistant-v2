export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold text-white">
          Ready to Ace Your Exams?
        </h2>

        <p className="mt-6 text-xl text-blue-100 leading-8">
          Join thousands of students who are preparing smarter with AI.
          Upload your notes, generate quizzes, create flashcards,
          and study more efficiently.
        </p>

        <div className="mt-10 flex justify-center gap-6 flex-wrap">

          <button className="px-8 py-4 rounded-xl bg-white text-blue-600 font-bold shadow-lg hover:scale-105 transition">
            Start for Free
          </button>

          <button className="px-8 py-4 rounded-xl border-2 border-white text-white hover:bg-white hover:text-blue-600 transition">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}