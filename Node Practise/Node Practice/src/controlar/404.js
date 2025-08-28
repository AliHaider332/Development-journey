const path = require('path');
const routeDirectory = path.join(__dirname, '../view');
exports.throw404 = (req, res) => {
  res.sendFile(path.join(routeDirectory, '404.html'));
};
