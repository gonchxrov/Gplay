const { Genre } = require("../models");

class GenreController {
  async getAll(req, res) {
    const genres = await Genre.getAll();
    return res.json(genres);
  }
}

module.exports = new GenreController();
