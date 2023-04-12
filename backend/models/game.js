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

  async getAllByCategory(category) {
    const categoryId = parseInt(category) || 1;
    const gamesWithCategory = await prisma.game.findMany({
      include: {
        category: {
          where: { categoryId },
        },
      },
    });

    const games = gamesWithCategory.filter((game) => {
      if (game.category.length) {
        delete game.category;
        return true;
      }
    });

    return games;
  }

  async getAllByGenre(genre) {
    const genreId = parseInt(genre) || 1;
    const gamesWithGenres = await prisma.game.findMany({
      include: {
        genre: {
          where: { genreId },
        },
      },
    });

    const games = gamesWithGenres.filter((game) => {
      if (game.genre.length) {
        delete game.genre;
        return true;
      }
    });

    return games;
  }

  async getAllByPage(page) {
    const limit = 10;
    const offset = page * limit - limit;
    const games = await prisma.game.findMany({
      skip: offset,
      take: limit,
    });

    return games;
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
