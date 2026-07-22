export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-6">
          👤 My Profile
        </h1>

        <div className="space-y-4">

          <input className="w-full border p-3 rounded-lg" placeholder="Full Name" />

          <input className="w-full border p-3 rounded-lg" placeholder="Email" />

          <input className="w-full border p-3 rounded-lg" placeholder="University" />

          <input className="w-full border p-3 rounded-lg" placeholder="Department" />

          <input className="w-full border p-3 rounded-lg" placeholder="Semester" />

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Save Profile
          </button>

        </div>

      </div>

    </div>
  );
}