const fs = require('fs');
const path = require('path');

const db = require('./DataBaseUtil');
module.exports = class SaveFavourite {
  constructor(id) {
    this.id = id;
  }

  save() {
    const id = this.id;
    return db.execute('INSERT INTO fav (id) VALUES (?)', [id]);
  }

  static fetch() {
    return db.execute('SELECT * FROM data JOIN fav ON data.id=fav.id');
  }
  static removeFavourit(id) {
    return db.execute('DELETE FROM fav WHERE id=?', [id]);
  }
};
