const { getDB } = require('./DataBaseUtil');
const { ObjectId } = require('mongodb');

module.exports = class DataHandling {
  constructor(title, location, rent, type, link, description) {
    this.title = title;
    this.location = location;
    this.rent = rent;
    this.type = type;
    this.link = link;
    this.description = description;
  }

  save() {
    const db = getDB();
    return db.collection('data').insertOne(this);
  }

  static fetch() {
    const db = getDB();
    return db.collection('data').find().toArray();
  }

  static fetchById(id) {
    const db = getDB();
    return db.collection('data').findOne({ _id: new ObjectId(id) });
  }

  static updateData(Data) {
    const db = getDB();
    const id = Data._id;
    delete Data._id;

    return db
      .collection('data')
      .updateOne({ _id: new ObjectId(id) }, { $set: Data });
  }

  static deletePost(id) {
    const db = getDB();
    return db.collection('data').deleteOne({ _id: new ObjectId(id) });
  }
};
