const fs = require('fs');
const path = require('path');
const db = require('./DataBaseUtil');


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
    const sql = `INSERT INTO data (title, location, rent, type, link, description) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [
      this.title,
      this.location,
      this.rent,
      this.type,
      this.link,
      this.description,
    ];

    db.execute(sql, values)
      .then(() => console.log('Data inserted successfully'))
      .catch((err) => console.log('Error inserting data:', err));
  }

  static fetch() {
    return db.execute('SELECT * FROM data');
  }

  static fetchById(id) {
    return db.execute(`SELECT * FROM data WHERE id=?`, [id]);
  }

  static updateData(Data) {
    return db.execute(
      'UPDATE data SET title=?,location=?,rent=?,type=?,link=?,description=? WHERE id=? ',
      [
        Data.title,
        Data.location,
        Data.rent,
        Data.type,
        Data.link,
        Data.description,
        Data.id,
      ]
    );
  }

  static deletePost(id) {
    return db.execute(`DELETE FROM data WHERE id=?`, [id]);
  }
};
