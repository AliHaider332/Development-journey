const express = require('express');
const bodyParser = require('body-parser');
const { deleteControlar } = require('../../controlar/hostSideControlar');

const deleteOption = express.Router();

// Middleware (parse form data)
deleteOption.use(bodyParser.urlencoded({ extended: true }));

// Correct route
deleteOption.post('/deletePost/:id', deleteControlar);

module.exports = { deleteOption };
