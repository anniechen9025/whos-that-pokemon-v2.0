const router = require("express").Router();
const UserController = require("../../controllers/generalController");

// Matches with "/api/user"
router.route("/")
  .post(UserController.createUser);

// Matches with "/api/user/login",
router.route("/login")
  .post(UserController.loginUser)
  .put(UserController.updatePassword);

router.route("/logout")
  .post(UserController.logoutUser);

module.exports = router;
