import { useEffect, useState } from "react";
import { getHistory } from "../../services/history";


export default function RecentActivity() {

  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {

    async function loadHistory() {

      try {

        const data = await getHistory();

        setActivities(data);


      } catch(error) {

        console.error(
          "History loading error:",
          error
        );

      } finally {

        setLoading(false);

      }

    }


    loadHistory();


  }, []);




  function formatTime(timestamp) {

    if (!timestamp) {
      return "Just now";
    }


    return timestamp.toDate().toLocaleString();

  }




  return (

    <div className="mt-10">


      <h2 className="text-3xl font-bold mb-6">
        Recent Activity
      </h2>



      <div className="bg-white rounded-2xl shadow-lg">



        {loading && (

          <p className="p-6 text-gray-500">
            Loading activity...
          </p>

        )}




        {!loading && activities.length === 0 && (

          <p className="p-6 text-gray-500">
            No activity yet.
          </p>

        )}





        {activities.map((activity)=>(


          <div

            key={activity.id}

            className="flex items-center gap-4 p-5 border-b last:border-none hover:bg-gray-50 transition"


          >



            <div className="text-3xl">

              {activity.type}

            </div>




            <div>


              <h3 className="font-semibold">

                {activity.description}

              </h3>



              <p className="text-gray-500 text-sm">

                {formatTime(activity.createdAt)}

              </p>


            </div>



          </div>


        ))}



      </div>


    </div>

  );

}