const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class Category {
  async getAll() {
    const category = await prisma.category.findMany();
    return category;
  }
}

module.exports = new Category();
