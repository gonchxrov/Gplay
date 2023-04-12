const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class Category {
  async getAll() {
    const categories = await prisma.category.findMany();
    return categories;
  }

  async getOne(id) {
    const category = await prisma.category.findUnique({ where: { id } });
    return category;
  }
}

module.exports = new Category();
