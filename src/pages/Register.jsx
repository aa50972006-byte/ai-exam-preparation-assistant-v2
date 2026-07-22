import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-blue-100 px-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-purple-600">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Join ExamAI today
        </p>

        <form className="space-y-5 mt-8">

          <div>
            <label className="font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full mt-2 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>

            <label className="font-medium">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                className="w-full mt-2 border rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-5"
              >
                {showPassword ? "🙈" : "👁"}
              </button>

            </div>

          </div>

          <button
            className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition"
          >
            Create Account
          </button>

          <button
            type="button"
            className="w-full border py-3 rounded-xl hover:bg-gray-100 transition"
          >
            Continue with Google
          </button>

        </form>

        <p className="text-center mt-6">

          Already have an account?

          <Link
  to="/login"
  className="text-purple-600 hover:underline ml-2"
>
  Login
</Link>

        </p>

      </div>

    </div>
  );
}