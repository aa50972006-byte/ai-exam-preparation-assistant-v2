import { useState } from "react";
import { auth } from "../firebase";
import {
  updatePassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Settings() {

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleChangePassword = async () => {

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    try {

      await updatePassword(auth.currentUser, password);

      alert("Password updated successfully!");

      setPassword("");

    } catch (error) {

      alert(error.message);

    }

  };

  const handleLogout = async () => {

    await signOut(auth);

    navigate("/login");

  };

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold mb-8 text-blue-600">

          ⚙️ Settings

        </h1>

        <div className="mb-8">

          <h2 className="text-xl font-semibold mb-2">

            Logged in Email

          </h2>

          <div className="bg-gray-100 p-4 rounded-xl">

            {auth.currentUser?.email}

          </div>

        </div>

        <div className="mb-8">

          <h2 className="text-xl font-semibold mb-3">

            Change Password

          </h2>

          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full border rounded-xl p-4"
          />

          <button
            onClick={handleChangePassword}
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
          >
            Update Password
          </button>

        </div>

        <div>

          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-3 rounded-xl hover:bg-red-600"
          >
            Logout
          </button>

        </div>

      </div>

    </div>

  );

}