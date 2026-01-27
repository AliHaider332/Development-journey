import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userHandlerRoutes.js';
import cors from 'cors';
import { authenticateUser } from './middlewares/authenticateUser.js';
import taskRouter from './routes/taskHandlerRoutes.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:5173', // frontend URL
    credentials: true, // allow cookies
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);

app.use('/api', userRoutes);
app.use('/api', authenticateUser, taskRouter);
mongoose
  .connect('mongodb+srv://abc:abc@demo.cf3vm4p.mongodb.net/authentication')
  .then(() => console.log('DB Connected'))
  .catch((err) => console.error(`Something went wrong: ${err}`));

app.listen(8000, () => {
  console.log('Server is Running on 8000 Port');
});
