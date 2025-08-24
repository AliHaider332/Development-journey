const DataHandling = require('../module/data');

const path = require('path');
const SaveFavourite = require('../module/favourit');

exports.clientRouter1 = (req, res) => {
  DataHandling.fetch().then((DATA) => {
    res.render('clientside', { Data: DATA });
  });
};

exports.clientRouter2 = (req, res) => {
  const { title, location, rent, type, link, description } = req.body;
  const Data = new DataHandling(title, location, rent, type, link, description);
  Data.save().then(() => {
    console.log('successfully');
  });
  res.redirect('/client');
};

exports.favouritList1 = (req, res) => {
  const { _id } = req.body;
  console.log(_id);

  const favouritSave = new SaveFavourite(_id);
  favouritSave
    .save()
    .then(() => {
      console.log('successfully');
    })
    .catch(() => {
      console.log(`Cann't set to favourite`);
    });
  res.redirect('/favourit');
};

exports.favouritList2 = (req, res) => {
  SaveFavourite.fetch().then((favHouses) => {
    DataHandling.fetch().then((DATA) => {
      const favIds = favHouses.map((fav) => fav._id.toString());

      const requirePost = DATA.filter((Post) =>
        favIds.includes(Post._id.toString())
      );

      res.render('favourit', { Data: requirePost });
    });
  });
};


exports.bookingPost = (req, res) => {
  res.sendFile(path.join(__dirname, '../view', '/user', 'booking.html'));
};

exports.userListControlar = (req, res) => {
  DataHandling.fetch().then((DATA) => {
    res.render('postList', { Data: DATA });
  });
};

exports.postDetail = (req, res) => {
  const id = req.params.id;

  DataHandling.fetchById(id)
    .then((DATA) => {
      res.render('detail', { item: DATA });
    })
    .catch(() => {
      res.redirect('/userList');
    });
};

exports.removeControlar = (req, res) => {
  const { id } = req.params;
  SaveFavourite.removeFavourit(id).then(() => {
    res.redirect('/favourit');
  });
};
