const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const generationSchema = new Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  pk_id: {
    type: Number,
  },
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  Image_url: {
    type: String,
  },
});

const Generation = mongoose.model('Generation', generationSchema);

module.exports = Generation;
