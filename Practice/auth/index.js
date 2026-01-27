import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import router from './routes/urlShortner.js';
import user_router from './routes/userHandler.js';
import { restrictToLoggedinUserOnly } from './middleware/checkLogin.js';

const app = express();

// ✅ Body parsers
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ❌ always pass { extended: true }

// ✅ View engine setup
app.set('view engine', 'ejs');
app.set('views', './views');

// ✅ Connect to MongoDB
mongoose
  .connect('mongodb+srv://abc:abc@demo.cf3vm4p.mongodb.net/auth')
  .then(() => console.log('DB Connected'))
  .catch((err) => console.error(`Something went wrong: ${err}`));

// ✅ Routes
app.use('/', user_router); // always pass a path prefix (here root '/')
app.use('/', restrictToLoggedinUserOnly, router); // uncomment if using urlShortner routes

// ✅ Start server
app.listen(8000, () => console.log('Server is running on port 8000'));
