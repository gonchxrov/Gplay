const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class Purchase {
  async create(userId, gameId, price, quantity) {
    try {
      const purchase = await prisma.purchase.create({
        data: {
          userId,
          gameId,
          price,
          quantity,
        },
      });

      return purchase;
    } catch (error) {
      let errorMessage = error?.message || "Undefined error";
      return errorMessage;
    }
  }

  async getAll() {
    const purchases = await prisma.purchase.findMany({
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
      include: {
        game: true,
      },
    });
    return purchases;
  }

  async getAllByUserId(userId) {
    const purchases = await prisma.purchase.findMany({
      where: { userId },
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
      include: {
        game: true,
      },
    });
    return purchases;
  }
}

module.exports = new Purchase();
