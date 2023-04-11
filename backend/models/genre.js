const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class Genre {
  async getAll() {
    const genres = await prisma.genre.findMany();
    return genres;
  }
}

module.exports = new Genre();
