const Router = require('express');

const router = new Router()
const gameRouter = require('./gameRouter')

router.use('/game', gameRouter)

module.exports = router