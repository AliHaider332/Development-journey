const express = require('express');

const serverSide = express.Router();

const directory = require('../../controlar/hostSideControlar');

serverSide.get('/server', directory.serverRouter);

module.exports = { serverSide };
