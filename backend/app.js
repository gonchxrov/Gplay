const express = require('express');
const dotenv = require('dotenv');
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
dotenv.config();

const port = process.env.PORT || 4000;

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});

app.get('/', async (req, res) => {
  res.send("It works!");
});

app.get('/users', async (req, res) => {
  const user = await prisma.user.findMany();
  res.json(user);
});

app.listen(port, () =>
  console.log(`Server running on port ${port}, http://localhost:${port}`)
);