const ApiError = require("../errors/apiError");
const { Genre } = require("../models");

class GenreController {
  async getAll(req, res) {
    const genres = await Genre.getAll();
    return res.json(genres);
  }

  async getOne(req, res, next) {
    try {
      const id = parseFloat(req.params.id);
      const genre = await Genre.getOne(id);

      return res.json(genre);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new GenreController();
