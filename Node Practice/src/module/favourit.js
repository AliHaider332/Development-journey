const fs = require('fs');
const path = require('path');
const favouritFilePath = path.join(__dirname, '../Data', 'favourit.json');

module.exports = class SaveFavourite {
  constructor(id) {
    this.id = id;
  }

  save() {
    const id = this.id; // keep a reference

    SaveFavourite.fetch((favs) => {
      if (!favs.includes(id)) {
        favs.push(id);
      }
      fs.writeFile(favouritFilePath, JSON.stringify(favs), (err) => {
        if (err) console.log('❌ Error writing favourit.json:', err);
        else console.log('✅ Favourite saved:', id);
      });
    });
  }

  static fetch(callback) {
    fs.readFile(favouritFilePath, (err, data) => {
      if (err) {
        if (err.code === 'ENOENT') return callback([]);
        console.log('❌ Error reading favourit.json:', err);
        return callback([]);
      }

      try {
        const parsedData = JSON.parse(data.toString() || '[]');
        callback(parsedData);
      } catch (parseError) {
        console.log('❌ Error parsing favourit.json:', parseError);
        callback([]);
      }
    });
  }
  static removeFavourit(id, callback) {
    SaveFavourite.fetch((DATA) => {
      DATA = DATA.filter((item) => item != id);

      fs.writeFile(favouritFilePath, JSON.stringify(DATA), (err) => {
        if (err) {
          console.log('❌ Error writing favourit.json:', err);
          return callback(err);
        }

        console.log('✅ Favourite removed:', id);
        console.log(DATA);

        callback();
      });
    });
  }
};
