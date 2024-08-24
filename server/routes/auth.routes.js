const Router = require("express");
const router = new Router();
/* const { check } = require("express-validator"); */
const authMiddleware = require("../middleware/auth.middleware");

const authController = require("../controller/auth.controller");

router.post(
  "/registration",
  /*  [
    check("username", "Имя пользователя не может быть пустым").notEmpty,
    check("username", "Имя пользователя не может быть пустым").isLength({
      min: 6,
      max: 10,
    }),
  ], */
  authController.registration
);
router.post("/login", authController.login);
router.get("/users", authMiddleware, authController.getUsers);

module.exports = router;
