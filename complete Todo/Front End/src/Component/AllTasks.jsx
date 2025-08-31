import { CheckCircle, XCircle, Trash2 } from "lucide-react"; // ✅ if using lucide-react

export default function AllTasks({ tasks, deleteTask, completeTask }) {
  function formatDate(dateString) {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => {
        const isCompleted = task.status;

        return (
          <div
            key={task._id}
            className={`flex items-center justify-between p-4 rounded-2xl shadow-md border transition transform hover:scale-[1.01] hover:shadow-lg
              ${isCompleted ? "bg-green-50 border-green-300" : "bg-indigo-50 border-indigo-200"}
            `}
          >
            <div>
              <p
                className={`text-lg font-semibold flex items-center gap-2 ${
                  isCompleted ? "line-through text-gray-500" : "text-gray-800"
                }`}
              >
                {isCompleted ? <CheckCircle className="text-green-600" size={20} /> : <XCircle className="text-indigo-500" size={20} />}
                {task.task}
              </p>
              <p className="text-sm text-gray-500 mt-1">📅 {formatDate(task.date)}</p>
            </div>

            <div className="flex gap-2">
              {/* ✅ Complete/Undo button */}
              <button
                onClick={() => completeTask(task._id)}
                className={`px-3 py-1.5 rounded-xl shadow transition font-medium flex items-center gap-1 cursor-pointer
                  ${isCompleted
                    ? "bg-gray-400 text-white hover:bg-gray-500"
                    : "bg-green-500 text-white hover:bg-green-600"}
                `}
              >
                {isCompleted ? "Undo" : "Complete"}
              </button>

              {/* ❌ Delete button */}
              <button
                onClick={() => deleteTask(task._id)}
                className="px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-xl shadow font-medium flex items-center gap-1 cursor-pointer"
              >
                <Trash2 size={18} /> Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
