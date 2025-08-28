const express = require('express');
const { loginControlar, loginControlarPost } = require('../../controlar/loginControlar');
const loginRouter = express.Router();
loginRouter.get('/login', loginControlar);
loginRouter.post('/login', loginControlarPost);
module.exports = { loginRouter };
