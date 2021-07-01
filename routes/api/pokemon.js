const router = require("express").Router();
const pokemonController = require("../../controllers/generalController");

// Matches with "/api/books"
router.route("/")
    .get(pokemonController.findAll)
    .post(pokemonController.create);

// Matches with "/api/books/:id"
router.route("/delete")
    .get(pokemonController.findById)
    .put(pokemonController.update)
    .delete(pokemonController.remove);

module.exports = router;
