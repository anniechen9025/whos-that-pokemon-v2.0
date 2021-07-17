const router = require("express").Router();
const pokemonController = require("../../controllers/generalController");

// Matches with "/api/books"
router.route("/")
    .get(pokemonController.getAllPokemon)
    .post(pokemonController.saveCaughtPokemon)
    .put(pokemonController.increasePokemonAmount);

// Matches with "/api/books/:id"
router.route("/delete")
    .delete(pokemonController.restAllPokemon);

module.exports = router;
