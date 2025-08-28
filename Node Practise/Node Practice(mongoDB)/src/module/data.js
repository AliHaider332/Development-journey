const mongoose = require('mongoose');
const User = require('./loginSchema');
const dataSchema = new mongoose.Schema({
  title: { type: String, require: true },
  location: { type: String, require: true },
  rent: { type: Number, require: true },
  type: { type: String, require: true },
  link: String,
  description: String,
});


dataSchema.pre('findOneAndDelete', async function (next) {
  try {
    const id = this.getQuery()._id;
    console.log("id in pre delete ", id);

    
    await User.updateMany(
      { favourit: id },         // find users containing this id
      { $pull: { favourit: id } } // remove it from the array
    );

    
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model('DataHandling', dataSchema);
