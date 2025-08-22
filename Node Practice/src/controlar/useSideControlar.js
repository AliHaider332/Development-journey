const DataHandling = require('../module/data');

const path = require('path');
const SaveFavourite = require('../module/favourit');

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

exports.favouritList1 = (req, res) => {
  const { id } = req.body;

  if (id) {
    const favouritSave = new SaveFavourite(id);
    favouritSave.save();
    console.log('✅ Favourite Added:', id);
  }
  res.redirect('/favourit');
};

exports.favouritList2 = (req, res) => {
  SaveFavourite.fetch((favIds) => {
    DataHandling.fetch((DATA) => {
      const favHouses = DATA.filter((item) => favIds.includes(item.id));
      res.render('favourit', { Data: favHouses });
    });
  });
};

// ---------------- Booking ----------------
exports.bookingPost = (req, res) => {
  res.sendFile(path.join(__dirname, '../view', '/user', 'booking.html'));
};

exports.userListControlar = (req, res) => {
  DataHandling.fetch((DATA) => {
    res.render('postList', { Data: DATA });
  });
};

exports.postDetail = (req, res) => {
  const id = req.params.id;

  DataHandling.fetchById(id, (DATA) => {
    if (!DATA) {
      res.redirect('/userList');
    } else {
      res.render('detail', { item: DATA });
    }
  });
};

exports.removeControlar = (req, res) => {
  const { id } = req.params;
  SaveFavourite.removeFavourit(id, () => {
    res.redirect('/favourit');
  });
};

