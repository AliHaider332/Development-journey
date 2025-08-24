const path = require('path');
const DataHandling = require('../module/data');
const SaveFavourite = require('../module/favourit');

const routeDirectory = path.join(__dirname, '../view/host');

exports.serverRouter = (req, res) => {
  res.sendFile(path.join(routeDirectory, 'serverside.html'));
};

exports.hostList = (req, res) => {
  DataHandling.fetch().then(([DATA]) => {
    res.render('../host/hostPostList', { Data: DATA });
  });
};

exports.editControlar = (req, res) => {
  const id = req.params.id;
  console.log(id);

  DataHandling.fetchById(id).then(([DATA]) => {
    res.render('../host/edit', { Data: DATA[0] });
  });
};

exports.updatePost = (req, res) => {
  const data = req.body;
  DataHandling.updateData(data).then(() => {
    res.redirect('/Host-Post-List');
  });
};

exports.deleteControlar = (req, res) => {
  const id = req.params.id;
  SaveFavourite.removeFavourit(id).then(console.log("Favourite removed successfully!"));
  DataHandling.deletePost(id).then(() => {
    res.redirect('/Host-Post-List');
  });
};
