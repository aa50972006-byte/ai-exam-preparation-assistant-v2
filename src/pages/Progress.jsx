export default function Progress() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-6">
          📊 Progress Report
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-blue-100 p-6 rounded-xl">
            <h2 className="text-xl font-bold">Quizzes</h2>
            <p className="text-4xl mt-4">12</p>
          </div>

          <div className="bg-green-100 p-6 rounded-xl">
            <h2 className="text-xl font-bold">Flashcards</h2>
            <p className="text-4xl mt-4">45</p>
          </div>

          <div className="bg-purple-100 p-6 rounded-xl">
            <h2 className="text-xl font-bold">Study Days</h2>
            <p className="text-4xl mt-4">18</p>
          </div>

        </div>

      </div>
    </div>
  );
}