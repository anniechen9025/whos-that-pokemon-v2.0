const router = require("express").Router();
const userRoutes = require("./user");
const pokemonRoutes = require("./pokemon");

// Book routes
router.use("/user", userRoutes);
router.use("/pokemon", pokemonRoutes);

module.exports = router;
