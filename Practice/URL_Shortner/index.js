import express from 'express';
import mongoose from 'mongoose';
import route from './routes/crudHandler.js';

const app = express();

/* ---------- Middlewares ---------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ---------- EJS Setup ---------- */
app.set('view engine', 'ejs');
app.set('views', './views'); // optional but recommended

/* ---------- MongoDB Connection ---------- */
mongoose
  .connect('mongodb+srv://abc:abc@demo.cf3vm4p.mongodb.net/url_shortner')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

/* ---------- Routes ---------- */
app.use(route);

/* ---------- Server ---------- */
app.listen(9000, () => {
  console.log('Server running on port 9000');
});
