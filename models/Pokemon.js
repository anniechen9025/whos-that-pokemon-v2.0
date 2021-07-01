const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  pokemon: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;
