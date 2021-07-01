const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  pokemon: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;
