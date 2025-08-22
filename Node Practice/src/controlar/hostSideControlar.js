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

exports.editControlar = (req, res) => {
  const id = req.params.id;
  console.log(id);

  DataHandling.fetchById(id, (DATA) => {
    res.render('../host/edit', { Data: DATA });
  });
};

exports.updatePost = (req, res) => {
  const data = req.body;
  DataHandling.updateData(data, () => {
    res.redirect('/Host-Post-List');
  });
};

exports.deleteControlar = (req, res) => {
  
  const id = req.params.id;

  DataHandling.deletePost(id,()=>{res.redirect('/Host-Post-List')})
};

