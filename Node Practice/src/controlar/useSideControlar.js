const DataHandling = require('../module/data');

const path = require('path');
const SaveFavourite = require('../module/favourit');

exports.clientRouter1 = (req, res) => {
  DataHandling.fetch().then(([DATA]) => {
    res.render('clientside', { Data: DATA });
  });
};

exports.clientRouter2 = (req, res) => {
  const { title, location, rent, type, link, description } = req.body;
  const Data = new DataHandling(title, location, rent, type, link, description);
  Data.save();
  res.redirect('/client');
};

exports.favouritList1 = (req, res) => {
  const { id } = req.body;

  const favouritSave = new SaveFavourite(id);
  favouritSave.save()
    .then(() => {
      res.redirect('/favourit');
    })
    .catch(() => {console.log(`Cann't set to favourite`);
    });
};

exports.favouritList2 = (req, res) => {
  SaveFavourite.fetch().then(([favHouses])=>{res.render('favourit', { Data: favHouses });})
};

// ---------------- Booking ----------------
exports.bookingPost = (req, res) => {
  res.sendFile(path.join(__dirname, '../view', '/user', 'booking.html'));
};

exports.userListControlar = (req, res) => {
  DataHandling.fetch().then(([DATA]) => {
    res.render('postList', { Data: DATA });
  });
};

exports.postDetail = (req, res) => {
  const id = req.params.id;

  DataHandling.fetchById(id)
    .then(([DATA]) => {
      res.render('detail', { item: DATA[0] });
    })
    .catch(() => {
      res.redirect('/userList');
    });
};

exports.removeControlar = (req, res) => {
  const { id } = req.params;
  SaveFavourite.removeFavourit(id).then( () => {
    res.redirect('/favourit');
  });
};
