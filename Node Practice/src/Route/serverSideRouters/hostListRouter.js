const express = require('express');
const { hostList, updatePost } = require('../../controlar/hostSideControlar');
const bodyParser = require('body-parser');


const hostListRouter = express.Router();
hostListRouter.use(bodyParser.urlencoded({ extended: true }));
hostListRouter.post('/Host-Post-List',updatePost);
hostListRouter.get('/Host-Post-List', hostList);

module.exports = { hostListRouter };
