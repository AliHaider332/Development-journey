import mongoose from 'mongoose';
const mongoDB_Schema = new mongoose.Schema({
  original_URL: {
    type: String,
    require: true,
  },
  shortID: {
    type: String,
    require: true,
  },
  impressions: {
    type: [{ time: Number }],
  },
});
export const user = mongoose.model('user', mongoDB_Schema);
