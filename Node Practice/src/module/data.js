const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../Data', 'DATA.json');
module.exports = class DataHandling {
  constructor(title, location, rent, type, link, description) {
    (this.title = title),
      (this.location = location),
      (this.rent = rent),
      (this.type = type),
      (this.link = link),
      (this.description = description);
  }
  save() {
    DataHandling.fetch((DATA) => {
      DATA.push(this);

      fs.writeFile(filePath, JSON.stringify(DATA), (error) => {
        console.log('The Data is added', error);
      });
    });
  }
  static fetch(callback) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        // If file doesn’t exist, start fresh
        if (err.code === 'ENOENT') {
          return callback([]);
        }
        console.log('❌ Error reading file:', err);
        return callback([]);
      }

      try {
        const parsedData = JSON.parse(data.toString() || '[]');
        callback(parsedData);
      } catch (parseError) {
        console.log('❌ Error parsing JSON:', parseError);
        callback([]);
      }
    });
  }
};
