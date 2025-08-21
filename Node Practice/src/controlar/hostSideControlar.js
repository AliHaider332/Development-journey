const path = require('path');
const DataHandling = require('../module/data');

const routeDirectory = path.join(__dirname, '../view/host');

exports.serverRouter = (req, res) => {
  res.sendFile(path.join(routeDirectory, 'serverside.html'));
};

exports.hostList = (req, res) => {
  DataHandling.fetch((DATA) => {
    res.render('../host/hostPostList', { Data: DATA });
  });
};
