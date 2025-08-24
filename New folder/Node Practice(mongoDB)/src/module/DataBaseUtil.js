const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongo_URL =
  'mongodb+srv://root:root@root.fu0mz5q.mongodb.net/?retryWrites=true&w=majority&appName=Root';
let _db;
let _favdb;
const mongoConnect = (callback) => {
  MongoClient.connect(mongo_URL)
    .then((client) => {
      console.log('✅ Connected to MongoDB');
      _db = client.db('airbnb');
      callback();
    })
    .catch((err) => {
      console.log('❌ Error occurred:', err);
    });
};
const getDB = () => {
  if (!_db) {
    console.log('Error is Generated');
  }
  return _db;
};
const favGetDB = () => {
  if (!_favdb) {
    console.log('Error is Generated');
  }
  return _favdb;
};
exports.getDB = getDB;
exports.mongoConnect = mongoConnect;
exports.favGetDB = favGetDB;
