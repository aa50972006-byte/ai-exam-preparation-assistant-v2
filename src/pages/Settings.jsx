import { auth } from "../firebase";
import {
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Settings() {

  const navigate = useNavigate();

  const user = auth.currentUser;

  const handleLogout = async () => {
    await signOut(auth);
    alert("Logged out successfully!");
    navigate("/login");
  };

  const handleResetPassword = async () => {

    if (!user?.email) return;

    try {

      await sendPasswordResetEmail(auth, user.email);

      alert("Password reset email has been sent.");

    } catch (error) {

      alert(error.message);

    }

  };

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">

          <h1 className="text-4xl font-bold">
            ⚙️ Settings
          </h1>

          <p className="mt-2 text-blue-100">
            Manage your account preferences
          </p>

        </div>

        <div className="p-8 space-y-6">

          <div className="bg-gray-100 rounded-xl p-5">

            <h2 className="text-xl font-bold mb-2">
              👤 Account Information
            </h2>

            <p>
              <strong>Email:</strong> {user?.email}
            </p>

          </div>

          <button
            onClick={handleResetPassword}
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            🔑 Reset Password
          </button>

          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition"
          >
            🚪 Logout
          </button>

        </div>

      </div>

    </div>

  );

}