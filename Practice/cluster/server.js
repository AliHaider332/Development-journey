const cluster = require('cluster');
const os = require('os');
const express = require('express');

const cor = os.cpus().length;
console.log(cluster.isPrimary);
if (cluster.isPrimary) {
  for (let i = 0; i < cor; i++) {
    cluster.fork();
  }
} else {
  const app = express();

  app.get('/', (req, res) => {
    return res.status(200).json({ message: `helo ${process.pid}` });
  });
  const port=3000

  app.listen(port, () => {
    console.log('Hi I am Running'+port);
  });
}
