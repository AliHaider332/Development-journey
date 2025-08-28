const express = require('express');
const { logoutControlar } = require('../../controlar/loginControlar');

const logoutRouter = express.Router();

logoutRouter.post('/logout', logoutControlar);
module.exports={logoutRouter}