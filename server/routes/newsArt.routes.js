const Router = require("express");
const router = new Router();
const authMiddleware = require("../middleware/auth.middleware");

const newsArtController = require("../controller/newsArt.controller");

router.post("/newsArt", authMiddleware, newsArtController.create);

module.exports = router;
