const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../Data', 'DATA.json');

module.exports = class DataHandling {
  constructor(title, location, rent, type, link, description) {
    this.id = Math.random().toString(36).substring(2, 9);
    this.title = title;
    this.location = location;
    this.rent = rent;
    this.type = type;
    this.link = link;
    this.description = description;
  }

  save() {
    DataHandling.fetch((DATA) => {
      DATA.push(this);
      fs.writeFile(filePath, JSON.stringify(DATA, null, 2), (error) => {
        if (error) console.log('❌ Error writing DATA.json:', error);
        else console.log('✅ Data added to DATA.json');
      });
    });
  }

  static fetch(callback) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        if (err.code === 'ENOENT') return callback([]);
        console.log('❌ Error reading DATA.json:', err);
        return callback([]);
      }

      try {
        const parsedData = JSON.parse(data.toString() || '[]');
        callback(parsedData);
      } catch (parseError) {
        console.log('❌ Error parsing DATA.json:', parseError);
        callback([]);
      }
    });
  }

  static fetchById(id, callback) {
    DataHandling.fetch((DATA) => {
      callback(DATA.find((item) => item.id == id));
    });
  }

  static updateData(Data, callback) {
    DataHandling.fetch((DATA) => {
      const index = DATA.findIndex((item) => item.id == Data.id);
      DATA[index] = Data;

      fs.writeFile(filePath, JSON.stringify(DATA, null, 2), (error) => {
        if (error) console.log('❌ Error writing DATA.json:', error);
        else console.log('✅ Data added to DATA.json');
      });

      callback();
    });
  }
  static deletePost(id, callback) {
    DataHandling.fetch((DATA) => {
      DATA = DATA.filter((item) => item.id != id);
      fs.writeFile(filePath, JSON.stringify(DATA, null, 2), (error) => {
        if (error) console.log('❌ Error writing DATA.json:', error);
        else console.log('✅ Data added to DATA.json');
      });
      callback();
    });
  }
};
