const DataHandling = require('../module/data');
const path = require('path');


exports.clientRouter1 = (req, res) => {
  DataHandling.fetch((DATA) => {
    res.render('clientside', { Data: DATA });
  });
};

exports.clientRouter2 = (req, res) => {
  const { title, location, rent, type, link, description } = req.body;
  const Data = new DataHandling(title, location, rent, type, link, description);
  Data.save();
  res.redirect('/client');
};

exports.favouritList = (req, res) => {
  DataHandling.fetch((DATA) => {
    res.render('favourit', { Data: DATA });
  });
};

exports.bookingPost = (req, res) => {
  res.sendFile(path.join(__dirname, '../view', '/user', 'booking.html'));
};
