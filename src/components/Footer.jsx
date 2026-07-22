export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ExamAI
          </h2>

          <p className="mt-5 text-gray-400 leading-7">
            Your AI-powered learning companion for smarter exam preparation.
            Upload notes, generate quizzes, create flashcards,
            and achieve better grades.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>

          </ul>
        </div>

        {/* AI Tools */}
        <div>

          <h3 className="text-xl font-semibold mb-5">
            AI Tools
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li className="hover:text-white cursor-pointer">
              AI Quiz Generator
            </li>

            <li className="hover:text-white cursor-pointer">
              PDF Summarizer
            </li>

            <li className="hover:text-white cursor-pointer">
              Flashcards
            </li>

            <li className="hover:text-white cursor-pointer">
              AI Tutor
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-semibold mb-5">
            Contact
          </h3>

          <p className="text-gray-400">
            University of Swabi
          </p>

          <p className="text-gray-400 mt-3">
            AI Final Project
          </p>

          <p className="text-gray-400 mt-3">
            examai@gmail.com
          </p>

        </div>

      </div>

      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">

        © 2026 ExamAI. All Rights Reserved.

      </div>

    </footer>
  );
}