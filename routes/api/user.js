const router = require("express").Router();
const UserController = require("../../controllers/generalController");

// Matches with "/api/books"
router.route("/")
  .post(UserController.createUser);

// Matches with "/api/books/:id"
router.route("/login")
  .post(UserController.loginUser)
  .put(UserController.updatePassword);

router.route("/logout")
  .post(UserController.logoutUser);

module.exports = router;
