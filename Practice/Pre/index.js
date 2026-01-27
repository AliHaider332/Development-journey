import express from 'express';
import mongoose from 'mongoose';
import router from './Routes/crudOperation.js';
const app = express();
mongoose
  .connect('mongodb+srv://abc:abc@demo.cf3vm4p.mongodb.net/?appName=Demo')
  .then(() => {
    console.log('connected');
  })
  .catch((err) => {
    `error${err}`;
  });

app.use(express.urlencoded({ extended: false }));
app.use(router)

app.listen(8000);
