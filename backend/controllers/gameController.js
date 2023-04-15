const ApiError = require("../errors/apiError");
const uuid = require("uuid");
const path = require("path");
const { Game } = require("../models");

class GameController {
  async create(req, res, next) {
    try {
      const { title, description } = req.body;
      const price = parseFloat(req.body?.price) || 0;
      const releaseDate = new Date(req.body?.releaseDate) || new Date();
      const { photo } = req.files;
      const photoName = uuid.v4() + ".jpg";
      photo.mv(path.resolve(__dirname, "../static/img", photoName));

      const game = await Game.create(
        title,
        description,
        price,
        photoName,
        releaseDate
      );

      return res.json(game);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const { page, count, category, genre } = req.query;
      const limit = parseInt(req.query?.limit || 10);

      if (count) {
        const count = await Game.getCount();
        return res.json(count);
      }

      if (category && page) {
        const gamesByCategory = await Game.getAllByCategory(
          category,
          page,
          limit
        );
        return res.json(gamesByCategory);
      }

      if (genre && page) {
        const gamesByGenre = await Game.getAllByGenre(genre, page, limit);
        return res.json(gamesByGenre);
      }

      if (page) {
        const games = await Game.getAllByPage(page, limit);
        return res.json(games);
      }

      const games = await Game.getAll();
      return res.json(games);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getOne(req, res, next) {
    try {
      const id = parseFloat(req.params.id);
      const game = await Game.getOne(id);

      return res.json(game);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async search(req, res, next) {
    try {
      const value = req.params?.value || "";
      const games = await Game.search(value);

      return res.json(games);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new GameController();
