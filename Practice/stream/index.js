const express = require('express');
const status = require('express-status-monitor');
const fs = require('fs');
const zlib = require('zlib');
const app = express();
app.use(status());

// const data = fs.readFileSync('./file.txt');
fs.createReadStream('./file.txt').pipe(
  zlib.createGzip().pipe(fs.createWriteStream('./file.zip'))
);
app.get('/', (req, res) => {
  const data = fs.createReadStream('./file.txt', 'utf-8');
  data.on('data', (chunk) => {
    res.write(chunk);
  });
  data.on('end', () => {
    res.end();
  });
  // fs.createReadStream('./file.txt').pipe(
  //   zlib.createGunzip().pipe(fs.createWriteStream('file.zip'))
  // );
});
app.listen(3000);
