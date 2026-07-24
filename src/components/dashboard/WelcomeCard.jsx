export default function WelcomeCard() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl">

      <h1 className="text-4xl font-bold">
        Welcome Back 👋
      </h1>

      <p className="mt-4 text-blue-100 text-lg">
        Your AI-powered learning dashboard is ready.
      </p>

      <div className="flex gap-4 mt-8 flex-wrap">

        <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
          Upload Notes
        </button>

        <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition">
          Ask AI
        </button>

      </div>

    </div>
  );
}