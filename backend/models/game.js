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
          releaseDate
        },
      })

      return game
    } catch (error) {
      let errorMessage = error?.message || 'undefined error'
      return errorMessage
    }
  }

  async getAll() {
    const games = await prisma.game.findMany()
    return games
  }

  async getOne(id) {
    const game = await prisma.game.findUnique({ where: {id} })
    return game
  }
}

module.exports = new Game()