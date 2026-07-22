import Sidebar from "../components/dashboard/Sidebar";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatsCards from "../components/dashboard/StatsCards";
import AITools from "../components/dashboard/AITools";
import RecentActivity from "../components/dashboard/RecentActivity";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <WelcomeCard />
        <StatsCards />
        <AITools />
        <RecentActivity />
      </main>
    </div>
  );
}