import express from 'express';
import {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from '../controllers/taskHandlerControls.js';
import { authorizeUsers } from '../middlewares/authenticateUser.js';
const taskRouter = express.Router();
taskRouter.post('/create-task', authorizeUsers(['admin']), createTask);
taskRouter.get('/get-add-admin-post', authorizeUsers(['admin']), getAllTasks);
taskRouter.put('/update-task/:id', authorizeUsers(['admin']), updateTask);
taskRouter.delete('/delete-task/:id', deleteTask);
export default taskRouter;
