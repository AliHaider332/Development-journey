const { getDB } = require('./DataBaseUtil');

module.exports = class SaveFavourite {
  constructor(id) {
    this._id = id;
  }

  save() {
    const db = getDB();
    return db.collection('fav').insertOne(this);
  }

  static fetch() {
    const db = getDB();
    return db.collection('fav').find().toArray();
  }
  static removeFavourit(id) {
    const db = getDB();
    return db.collection('fav').deleteOne({_id:id})
  }
};
