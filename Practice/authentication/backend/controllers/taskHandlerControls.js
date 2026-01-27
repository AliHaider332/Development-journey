import { Task } from '../models/task_DB.js';

// Create a new task
export const createTask = async (req, res) => {
  try {
    const { taskTitle, taskDescription, taskStatus } = req.body;
    const userId = req.user.id;

    if (!taskTitle || !taskDescription) {
      return res.status(400).json({
        success: false,
        message: 'Task title and description are required.',
      });
    }

    const newTask = await Task.create({
      taskTitle,
      task: taskDescription,
      taskStatus: taskStatus || 'pending', // Default to pending
      createdBy: userId,
    });

    res.status(201).json({
      success: true,
      message: 'Task created successfully.',
      task: newTask,
    });
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong while creating the task.',
    });
  }
};

// Get all tasks created by the current user
export const getAllTasks = async (req, res) => {
  try {
    const userId = req.user.id;

    const tasks = await Task.find({ createdBy: userId }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: tasks.length,
      tasks,
    });
  } catch (error) {
    console.error('Get Tasks Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch tasks.',
    });
  }
};

// Update a task by ID
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { taskTitle, taskDescription, taskStatus } = req.body;

    const task = await Task.findById(id);
    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: 'Task not found.' });
    }

    // Optional: Only admin or creator can update
    if (
      req.user.role !== 'admin' &&
      task.createdBy.toString() !== req.user._id.toString()
    ) {
      return res
        .status(403)
        .json({ success: false, message: 'Not authorized.' });
    }

    // Update only provided fields
    task.taskTitle = taskTitle || task.taskTitle;
    task.taskDescription = taskDescription || task.taskDescription;
    task.taskStatus = taskStatus || task.taskStatus;

    await task.save();

    res.status(200).json({
      success: true,
      message: 'Task updated successfully.',
      task,
    });
  } catch (error) {
    console.error('Update Task Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update task.',
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the task first
    const task = await Task.findById(id);
    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: 'Task not found' });
    }

    // Optional: Only creator or admin can delete
    if (
      req.user.role !== 'admin' &&
      task.createdBy.toString() !== req.user._id.toString()
    ) {
      return res
        .status(403)
        .json({
          success: false,
          message: 'Not authorized to delete this task',
        });
    }

    // Delete the task
    await Task.findByIdAndDelete(id);

    res
      .status(200)
      .json({ success: true, message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Delete Task Error:', error);
    res.status(500).json({ success: false, message: 'Failed to delete task' });
  }
};
