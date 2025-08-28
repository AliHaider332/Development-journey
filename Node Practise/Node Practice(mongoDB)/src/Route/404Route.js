const express = require('express');
const { throw404 } = require('../controlar/404');

const Page404 = express.Router();

// Catch-all: if no route matched, this will run
Page404.use('/', throw404);

module.exports = { Page404 };
