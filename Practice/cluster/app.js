const express = require('express');
const app = express();

app.get('/', (req, res) => {
  return res.status(200).json({ message: `helo ${process.pid}` });
});

app.listen(3000, () => {
  console.log('Hi I am Running');
});
