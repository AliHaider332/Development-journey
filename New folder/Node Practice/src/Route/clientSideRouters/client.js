const express = require('express');
const directory = require('../../controlar/useSideControlar');
const bodyParser = require('body-parser');

const client = express.Router();
client.use(bodyParser.urlencoded({ extended: true }));

client.get('/client', directory.clientRouter1);

client.post('/client', directory.clientRouter2);

module.exports = { client };
