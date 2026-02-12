import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectMongoDB } from './Configs/DBSetup.js';
import userRoutes from './Routes/userRoutes.js';
import blogRoutes from './Routes/blogRoutes.js';
import cors from 'cors';
dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors(
  {
    origin:"http://localhost:5173",
    credentials: true, 
  }
))
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(userRoutes);
app.use(blogRoutes);
async function startServer() {
  await connectMongoDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🚀`);
  });
}

startServer();
