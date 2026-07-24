import { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

export default function RecentActivity() {

  const [activities, setActivities] = useState([]);

  useEffect(() => {

    async function loadHistory() {

      const user = auth.currentUser;

      if (!user) return;

      try {

        const q = query(
          collection(db, "users", user.uid, "history"),
          orderBy("createdAt", "desc"),
          limit(5)
        );

        const snapshot = await getDocs(q);

        const history = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setActivities(history);

      } catch (error) {

        console.error(error);

      }

    }

    loadHistory();

  }, []);

  return (

    <div className="mt-10">

      <h2 className="text-3xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="bg-white rounded-2xl shadow-lg">

        {activities.length === 0 ? (

          <div className="p-6 text-center text-gray-500">
            No recent activity yet.
          </div>

        ) : (

          activities.map((activity) => (

            <div
              key={activity.id}
              className="flex items-center justify-between p-5 border-b last:border-none hover:bg-gray-50 transition"
            >

              <div className="flex items-center gap-4">

                <div className="text-3xl">
                  {activity.type}
                </div>

                <div>

                  <h3 className="font-semibold">
                    {activity.title}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {activity.createdAt?.toDate().toLocaleString() || "Just now"}
                  </p>

                </div>

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  );

}