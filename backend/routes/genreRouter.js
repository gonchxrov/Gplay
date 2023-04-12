const Router = require("express");
const router = new Router();
const genreController = require("../controllers/genreController");

router.get("/", genreController.getAll);
router.get("/:id", genreController.getOne);

module.exports = router;
