const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class User {
  async create(firstName, lastName, email, password) {
    try {
      const user = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          password,
        },
      });

      return user;
    } catch (error) {
      let errorMessage = error?.message || "Undefined error";
      return errorMessage;
    }
  }

  async getOne(id) {
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
  }

  async getOneByEmail(email) {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  }
}

module.exports = new User();
