const express = require('express');
const cors = require('cors');
const { DATA } = require('./data');
const multer = require('multer');
const app = express();

const upload = multer({ dest: 'upload/' });

// enable CORS
app.use(cors());
// app.use(multer());

// parse JSON
app.use(express.json());

app.post('/api/upload', upload.single('file'), (req, res) => {
  console.log('Successful');
  res.send('success');
});

app.get('/api/get-data', (req, res) => {
  res.status(200).json({ data: DATA });
});

app.post('/api/post-data', (req, res) => {
  DATA.push(req.body);
  res.status(200).json({ message: 'Successful' });
});

app.put('/api/update-user/:id', (req, res) => {
  const id = req.params.id;
  const data = req.body;
  DATA[id] = data;
  // console.log(id, data); // 5
  res.send('success');
});

app.listen(3000, () => {
  console.log('Server is Running');
});
