const express = require('express');
const { removeControlar } = require('../../controlar/useSideControlar');

const removeFav = express.Router();
removeFav.get('/fav-remove/:id', removeControlar);

module.exports = { removeFav };
