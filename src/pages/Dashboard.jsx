import Sidebar from "../components/dashboard/Sidebar";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatsCards from "../components/dashboard/StatsCards";
import AITools from "../components/dashboard/AITools";
import RecentActivity from "../components/dashboard/RecentActivity";

import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Dashboard() {

  const navigate = useNavigate();

  const handleLogout = async () => {

    try {

      await signOut(auth);

      navigate("/login");

    } catch (error) {

      console.error("Logout Error:", error);

    }

  };

  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <main className="flex-1 p-8">

        {/* Top Buttons */}

        <div className="flex justify-end gap-4 mb-6">

          <Link
            to="/ai-chat"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            🤖 AI Study Assistant
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>

        </div>

        {/* Dashboard Components */}

        <WelcomeCard />

        <StatsCards />

        <AITools />

        <RecentActivity />

      </main>

    </div>

  );

}