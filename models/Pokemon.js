const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  name: {
    type: String
  },
  type: {
    type: String
  },
  pk_id: {
    type: Number
  },
  height: {
    type: Number
  },
  weight: {
    type: Number
  },
  image_url: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;
