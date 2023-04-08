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
