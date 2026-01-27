import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    taskTitle: { type: String, required: true },
    task: { type: String, required: true },
    taskStatus: {
      type: String,
      required: true,
      enum: ['pending', 'in-progress', 'completed'], // optional but recommended
      default: 'pending',
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

export const Task = mongoose.model('Task', taskSchema);
