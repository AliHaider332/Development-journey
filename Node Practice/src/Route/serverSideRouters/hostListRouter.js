const express = require('express');
const { hostList } = require('../../controlar/hostSideControlar');

const hostListRouter = express.Router();

hostListRouter.get('/Host-Post-List', hostList);

module.exports = { hostListRouter };
