import mongoose from 'mongoose';
const user = new mongoose.Schema({
  first_name: {
    type: String,
    require: true,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
  },
  job: {
    type: String,
  },
});

export const schemaModel = mongoose.model('user', user);
