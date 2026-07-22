export default function Settings() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-6">
          ⚙️ Settings
        </h1>

        <div className="space-y-4">

          <button className="w-full bg-blue-600 text-white p-3 rounded-lg">
            Change Password
          </button>

          <button className="w-full bg-green-600 text-white p-3 rounded-lg">
            Enable Notifications
          </button>

          <button className="w-full bg-red-600 text-white p-3 rounded-lg">
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}