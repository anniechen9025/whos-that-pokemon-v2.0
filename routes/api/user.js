const router = require("express").Router();
const UserController = require("../../controllers/generalController");

// Matches with "/api/books"
router.route("/")
  .post(UserController.create);

// Matches with "/api/books/:id"
router.route("/login")
  .post(UserController.create)
  .put(UserController.update);

router.route("/logout")
  .post(UserController.update);

module.exports = router;
