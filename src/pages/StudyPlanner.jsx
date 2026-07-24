import { useEffect, useState } from "react";
import {
  addTask,
  getTasks,
  deleteTask
} from "../services/studyPlanner";

import { saveHistory } from "../services/history";

export default function StudyPlanner() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    const data = await getTasks();
    setTasks(data);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  async function handleAdd() {

    if (!task.trim()) return;

    await addTask(task);

    await saveHistory(
      "📅 Study Plan",
      `Added study task "${task}"`
    );

    setTask("");

    loadTasks();

  }

  async function handleDelete(id) {

    await deleteTask(id);

    loadTasks();

  }

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-green-600 mb-6">
          📅 Study Planner
        </h1>

        <div className="flex gap-3">

          <input
            type="text"
            placeholder="Add today's study task..."
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            className="flex-1 border rounded-xl p-4"
          />

          <button
            onClick={handleAdd}
            className="bg-green-600 text-white px-6 rounded-xl hover:bg-green-700"
          >
            Add
          </button>

        </div>

        <div className="mt-8">

          {tasks.length===0 && (

            <p className="text-gray-500">
              No study tasks yet.
            </p>

          )}

          {tasks.map((item)=>(

            <div
              key={item.id}
              className="flex justify-between items-center bg-gray-100 rounded-xl p-4 mt-3"
            >

              <div>

                <h3 className="font-semibold">

                  {item.task}

                </h3>

              </div>

              <button
                onClick={()=>handleDelete(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}