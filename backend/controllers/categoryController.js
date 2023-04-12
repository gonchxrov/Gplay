const ApiError = require("../errors/apiError");
const { Category } = require("../models");

class CategoryController {
  async getAll(req, res) {
    const categories = await Category.getAll();
    return res.json(categories);
  }

  async getOne(req, res, next) {
    try {
      const id = parseFloat(req.params.id);
      const category = await Category.getOne(id);

      return res.json(category);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new CategoryController();
