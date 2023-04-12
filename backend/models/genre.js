const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class Genre {
  async getAll() {
    const genres = await prisma.genre.findMany();
    return genres;
  }

  async getOne(id) {
    const genre = await prisma.genre.findUnique({ where: { id } });
    return genre;
  }
}

module.exports = new Genre();
