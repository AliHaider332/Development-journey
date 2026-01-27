import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
} from '../../serverLayer';
//deleteTask
const AdminDashboard = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const statusRef = useRef(null);

  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);

  // Load tasks
  const loadTasks = async () => {
    try {
      const data = await getAllTasks();
      setTasks(data.tasks);
    } catch (error) {
      toast.error(error.message);
      if (error.status === 401 || error.status === 403) {
        navigate('/unauthorized');
      } else {
      }
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  // Add / Update task
  const submitHandler = async (e) => {
    e.preventDefault();

    const payload = {
      taskTitle: titleRef.current.value,
      taskDescription: descriptionRef.current.value,
      taskStatus: statusRef.current.value,
    };

    if (!payload.taskTitle || !payload.taskDescription) {
      toast.error('All fields are required');
      return;
    }

    try {
      if (editId) {
        await updateTask(editId, payload);
        toast.success('Task updated');
      } else {
        await createTask(payload);
        toast.success('Task added');
      }

      // Reset form
      titleRef.current.value = '';
      descriptionRef.current.value = '';
      statusRef.current.value = 'pending';
      setEditId(null);

      loadTasks();
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Edit task
  const editTask = (task) => {
    titleRef.current.value = task.taskTitle;
    descriptionRef.current.value = task.taskDescription;
    statusRef.current.value = task.taskStatus;
    setEditId(task._id);
  };

  // Delete task
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;

    try {
      await deleteTask(id);
      toast.success('Task deleted');
      loadTasks();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* ADD / UPDATE FORM */}
        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">
            {editId ? 'Update Task' : 'Add New Task'}
          </h2>

          <form className="space-y-4" onSubmit={submitHandler}>
            <input
              ref={titleRef}
              placeholder="Task Title"
              className="w-full px-4 py-2 border rounded"
            />

            <textarea
              ref={descriptionRef}
              placeholder="Task Description"
              rows="3"
              className="w-full px-4 py-2 border rounded"
            />

            <select
              ref={statusRef}
              defaultValue="pending"
              className="w-full px-4 py-2 border rounded"
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>

            <button className="bg-green-600 text-white px-6 py-2 rounded">
              {editId ? 'Update Task' : 'Add Task'}
            </button>
          </form>
        </div>

        {/* TASK LIST */}
        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">All Tasks</h2>

          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="flex justify-between items-center border p-4 rounded"
              >
                <div>
                  <h3 className="font-semibold">{task.taskTitle}</h3>
                  <p className="text-sm text-gray-600">
                    {task.taskDescription}
                  </p>
                  <span className="text-xs text-blue-600">
                    {task.taskStatus}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => editTask(task)}
                    className="text-sm bg-blue-500 text-white px-4 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="text-sm bg-red-500 text-white px-4 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
