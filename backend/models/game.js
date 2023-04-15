const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class Game {
  async create(title, description, price, photo, releaseDate) {
    try {
      const game = await prisma.game.create({
        data: {
          title,
          description,
          price,
          photo,
          releaseDate,
        },
      });

      return game;
    } catch (error) {
      let errorMessage = error?.message || "Undefined error";
      return errorMessage;
    }
  }

  async getCount() {
    const count = await prisma.game.count();
    return count;
  }

  async getAll() {
    const games = await prisma.game.findMany();
    return games;
  }

  async getAllByCategory(category, page, limit) {
    const categoryId = parseInt(category) || 1;
    const offset = page * limit - limit;

    const totalCount = await prisma.categoryOnGame.count({
      where: { categoryId },
    });

    const gamesWithCategory = await prisma.categoryOnGame.findMany({
      skip: offset,
      take: limit,
      where: { categoryId },
      include: {
        game: true,
      },
    });

    const games = gamesWithCategory.map(
      (gameWithCategory) => gameWithCategory.game
    );

    return { games, totalCount };
  }

  async getAllByGenre(genre, page, limit) {
    const genreId = parseInt(genre) || 1;
    const offset = page * limit - limit;

    const totalCount = await prisma.genreOnGame.count({
      where: { genreId },
    });

    const gamesWithGenres = await prisma.genreOnGame.findMany({
      skip: offset,
      take: limit,
      where: { genreId },
      include: {
        game: true,
      },
    });

    const games = gamesWithGenres.map((gameWithGenres) => gameWithGenres.game);

    return { games, totalCount };
  }

  async getAllByPage(page, limit) {
    const offset = page * limit - limit;
    const totalCount = await prisma.game.count();
    const games = await prisma.game.findMany({
      skip: offset,
      take: limit,
    });

    return { games, totalCount };
  }

  async getOne(id) {
    const game = await prisma.game.findUnique({ where: { id } });
    return game;
  }

  async search(value) {
    const games = await prisma.game.findMany({
      where: {
        title: {
          contains: value,
          mode: "insensitive",
        },
      },
    });

    return games;
  }
}

module.exports = new Game();
