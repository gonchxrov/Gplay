const Router = require("express");

const router = new Router();
const userRouter = require("./userRouter");
const gameRouter = require("./gameRouter");
const purchaseRouter = require("./purchaseRouter");
const authMiddleware = require("../middlewares/authMiddleware");

router.use("/user", userRouter);
router.use("/game", gameRouter);
router.use("/purchase", authMiddleware, purchaseRouter);

module.exports = router;
