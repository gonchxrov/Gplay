const ApiError = require("../errors/apiError");
const { Purchase } = require("../models");

class PurchaseController {
  async create(req, res, next) {
    try {
      const userId = parseInt(req.body?.userId) || 0;
      const gameId = parseInt(req.body?.gameId) || 0;
      const price = parseFloat(req.body?.price) || 0;
      const quantity = parseInt(req.body?.quantity) || 0;

      const purchase = await Purchase.create(userId, gameId, price, quantity);

      return res.json(purchase);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    try {
      const userId = parseInt(req.query?.userId);

      if (userId) {
        const purchases = await Purchase.getAllByUserId(userId);
        return res.json(purchases);
      }

      const purchases = await Purchase.getAll();
      return res.json(purchases);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new PurchaseController();
