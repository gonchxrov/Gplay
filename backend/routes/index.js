const Router = require("express");

const router = new Router();
const userRouter = require("./userRouter");
const gameRouter = require("./gameRouter");
const categoryRouter = require("./categoryRouter");
const genreRouter = require("./genreRouter");
const purchaseRouter = require("./purchaseRouter");
const authMiddleware = require("../middlewares/authMiddleware");

router.use("/user", userRouter);
router.use("/game", gameRouter);
router.use("/category", categoryRouter);
router.use("/genre", genreRouter);
router.use("/purchase", authMiddleware, purchaseRouter);

module.exports = router;
