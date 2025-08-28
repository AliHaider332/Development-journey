const express = require('express');
const welcome = express.Router();
welcome.get('/', (req, res) => {
  res.render('welcome', { isLoggedIn: req.isLoggedIn ,role: req.session.user ? req.session.user.role : false});
});
module.exports = { welcome };
