const express = require('express');
const { createServer } = require('http');
const path = require('path');


const { welcome } = require('./src/Route/welcome');
const { serverSide } = require('./src/Route/serverSideRouters/server');
const { client } = require('./src/Route/clientSideRouters/client');
const { Page404 } = require('./src/Route/404Route');
const { favourit } = require('./src/Route/clientSideRouters/favourit');
const { booking } = require('./src/Route/clientSideRouters/booking');
const {
  hostListRouter,
} = require('./src/Route/serverSideRouters/hostListRouter');

const { postList } = require('./src/Route/clientSideRouters/postList');
const { detailPage } = require('./src/Route/clientSideRouters/detail');

const { editPage } = require('./src/Route/serverSideRouters/editPage');
const {
  deleteOption,
} = require('./src/Route/serverSideRouters/deleteOption.js');
const {
  removeFav,
} = require('./src/Route/clientSideRouters/removeFavourit.js');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'src')));

// Body parser middleware
app.use(express.urlencoded({ extended: true }));

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'view', 'user'));

// Routers
app.use(welcome);
app.use(serverSide);
app.use(client);
app.use(favourit);
app.use(booking);
app.use(hostListRouter);
app.use(postList);
app.use(detailPage);
app.use(editPage);
app.use(deleteOption);
app.use(removeFav);
app.use(Page404);

// Start server
const server = createServer(app);
const Port = 3001;
server.listen(Port, () => {
  console.log(`Website running on: http://localhost:${Port}/`);
});
