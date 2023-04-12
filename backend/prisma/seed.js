const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const data = require("./data");

async function createUsers() {
  try {
    const users = await prisma.user.createMany({
      data: data.users,
      skipDuplicates: true,
    });

    let count = users?.count || 0;
    console.log("Creted users:", count);
  } catch (error) {
    let errorMessage = error?.message || "Undefined error";
    console.error("failed to create users:", errorMessage);
  }
}

async function createGames() {
  try {
    const games = await prisma.game.createMany({
      data: data.games,
      skipDuplicates: true,
    });

    let count = games?.count || 0;
    console.log("Creted games:", count);
  } catch (error) {
    let errorMessage = error?.message || "Undefined error";
    console.error("failed to create games:", errorMessage);
  }
}

async function createCategories() {
  try {
    const categories = await prisma.category.createMany({
      data: data.categories,
      skipDuplicates: true,
    });

    let count = categories?.count || 0;
    console.log("Creted categories:", count);
  } catch (error) {
    let errorMessage = error?.message || "Undefined error";
    console.error("failed to create users:", errorMessage);
  }
}

async function createGenres() {
  try {
    const genres = await prisma.genre.createMany({
      data: data.genres,
      skipDuplicates: true,
    });

    let count = genres?.count || 0;
    console.log("Creted genres:", count);
  } catch (error) {
    let errorMessage = error?.message || "Undefined error";
    console.error("failed to create users:", errorMessage);
  }
}

async function createCategoryOnGame() {
  try {
    const categoryOnGame = await prisma.categoryOnGame.createMany({
      data: data.categoriesOnGames,
      skipDuplicates: true,
    });

    let count = categoryOnGame?.count || 0;
    console.log("Creted categories for games:", count);
  } catch (error) {
    let errorMessage = error?.message || "Undefined error";
    console.error("failed to create users:", errorMessage);
  }
}

async function createGenreOnGame() {
  try {
    const genreOnGame = await prisma.genreOnGame.createMany({
      data: data.genresOnGames,
      skipDuplicates: true,
    });

    let count = genreOnGame?.count || 0;
    console.log("Creted genres for games:", count);
  } catch (error) {
    let errorMessage = error?.message || "Undefined error";
    console.error("failed to create users:", errorMessage);
  }
}

async function main() {
  await createUsers();
  await createGames();
  await createCategories();
  await createCategoryOnGame();
  await createGenres();
  await createGenreOnGame();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
