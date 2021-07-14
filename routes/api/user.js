const router = require("express").Router();
const UserController = require("../../controllers/generalController");

// Matches with "/api/user"
router.route("/")
  .post(UserController.createUser)
  .get(UserController.getUsername);

// Matches with "/api/user/login",
router.route("/login")
  .post(UserController.loginUser)
  .put(UserController.updatePassword)
  .get(UserController.getUserinfo);

router.route("/logout")
  .post(UserController.logoutUser);

module.exports = router;
