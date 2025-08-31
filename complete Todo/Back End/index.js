const express = require('express');
const { createServer } = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {router} = require('./src/Route/todoRoutes');
const mongo_DB_URL =
  'mongodb+srv://root:root@root.fu0mz5q.mongodb.net/todo?retryWrites=true&w=majority&appName=Root';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use('/todo',router)
const server = createServer(app);
const Port = 3001;

mongoose.connect(mongo_DB_URL).then(
  server.listen(Port, () => {
    console.log(`Website running on: http://localhost:${Port}/`);
  })
);
