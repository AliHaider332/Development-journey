// -------------------- IMPORTS --------------------
const express = require('express');
const { createServer } = require('http');
const path = require('path');
const mongoose = require('mongoose').default;
const session = require('express-session');
const mongoSession = require('connect-mongodb-session')(session);
const multer = require('multer');

// -------------------- CONFIG --------------------
const app = express();
const PORT = 3000;
const DB_URL = 'mongodb+srv://root:root@root.fu0mz5q.mongodb.net/airbnb?retryWrites=true&w=majority&appName=Root';

// -------------------- VIEW ENGINE --------------------
app.set('view engine', 'ejs');
app.set('views', [
  path.join(__dirname, 'src', 'view'),
  path.join(__dirname, 'src', 'view', 'user'),
  path.join(__dirname, 'src', 'view', 'host'),
  path.join(__dirname, 'src', 'view', 'authentication'),
]);

// -------------------- MIDDLEWARE --------------------
app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, '../uploads')));
app.use(express.urlencoded({ extended: true }));

// 🔹 Global multer but safe for only multipart requests
const fileFilter = (req, file, cb) => {
  if (['image/jpeg', 'image/jpg', 'image/png', 'image/gif'].includes(file.mimetype)) {
    cb(null, true); // accept file
  } else {
    cb(null, false); // reject with error
  }
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/uploads/');
  },
  
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
})

app.use(multer({storage,fileFilter}).single('link'));
// 🔹 Session store in MongoDB
const store = new mongoSession({
  uri: DB_URL,
  collection: 'sessions',
});

app.use(session({
  secret: "Hi I am Ali Haider",
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 }, // 1 hour
  store,
}));

// 🔹 Custom middleware: check login
app.use((req, res, next) => {
  req.isLoggedIn = req.session.isLoggedIn || false;
  next();
});

// -------------------- ROUTES --------------------
const { welcome } = require('./src/Route/welcome');
const { serverSide } = require('./src/Route/serverSideRouters/server');
const { client } = require('./src/Route/clientSideRouters/client');
const { favourit } = require('./src/Route/clientSideRouters/favourit');
const { booking } = require('./src/Route/clientSideRouters/booking');
const { hostListRouter } = require('./src/Route/serverSideRouters/hostListRouter');
const { postList } = require('./src/Route/clientSideRouters/postList');
const { detailPage } = require('./src/Route/clientSideRouters/detail');
const { editPage } = require('./src/Route/serverSideRouters/editPage');
const { deleteOption } = require('./src/Route/serverSideRouters/deleteOption.js');
const { removeFav } = require('./src/Route/clientSideRouters/removeFavourit.js');
const { loginRouter } = require('./src/Route/authentication/loginRouter.js');
const { logoutRouter } = require('./src/Route/authentication/logoutRouter.js');
const { signuppage } = require('./src/Route/authentication/signup.js');
const { Page404 } = require('./src/Route/404Route');

// 🔹 Public routes
app.use(welcome);
app.use(loginRouter);
app.use(logoutRouter);
app.use(signuppage);
app.use(client);
app.use(favourit);
app.use(booking);
app.use(postList);
app.use(detailPage);
app.use(removeFav);

// 🔹 Protected routes (require login)
app.use('/server', (req, res, next) => req.isLoggedIn ? next() : res.redirect('/login'));
app.use(serverSide);

app.use('/Host-Post-List', (req, res, next) => req.isLoggedIn ? next() : res.redirect('/login'));
app.use(hostListRouter);

app.use('/edit-page/:id', (req, res, next) => req.isLoggedIn ? next() : res.redirect('/login'));
app.use(editPage);
app.use(deleteOption);

// 🔹 404 Route (last)
app.use(Page404);

// -------------------- SERVER START --------------------
const server = createServer(app);

mongoose.connect(DB_URL)
  .then(() => {
    server.listen(PORT, () => {
      console.log('✅ Connected to MongoDB');
      console.log(`🚀 Server running at http://localhost:${PORT}/`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });
