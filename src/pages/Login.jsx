import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 px-4">

      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8">

        <h1 className="text-4xl font-bold text-center text-blue-600">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Sign in to continue
        </p>

        <form className="mt-8 space-y-5">

          <div>
            <label className="font-medium">Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>

            <label className="font-medium">Password</label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full mt-2 border rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-5 text-gray-500"
              >
                {showPassword ? "🙈" : "👁"}
              </button>

            </div>

          </div>

          <div className="flex justify-between text-sm">

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>

          </div>

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Sign In
          </button>

          <button
            type="button"
            className="w-full border py-3 rounded-xl hover:bg-gray-100 transition"
          >
            Continue with Google
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
  to="/register"
  className="text-blue-600 hover:underline"
>
  Register
</Link>
        </p>

      </div>

    </div>
  );
}