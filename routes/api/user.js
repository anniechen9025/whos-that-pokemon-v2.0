const router = require("express").Router();
const UserController = require("../../controllers/generalController");

// Matches with "/api/books"
router.route("/")
  .get(UserController.findAll)
  .post(UserController.create);

// Matches with "/api/books/:id"
router.route("/login")
  .get(UserController.findById)
  .put(UserController.update)
  .delete(UserController.remove);

router.route("/logout")
  .get(UserController.findById)
  .put(UserController.update)
  .delete(UserController.remove);

router.route("/pw")
  .get(UserController.findById)
  .put(UserController.update)
  .delete(UserController.remove);

module.exports = router;
