const express = require('express');
const { bookingPost } = require('../../controlar/useSideControlar');

const booking = express.Router();

booking.get('/booking', bookingPost);

module.exports = { booking };
