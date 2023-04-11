const { Category } = require("../models");

class CategoryController {
  async getAll(req, res) {
    const categories = await Category.getAll();
    return res.json(categories);
  }
}

module.exports = new CategoryController();
