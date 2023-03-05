const tokenService = require('../services/tokenService')

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
      next()
    }

    try {
      const token = tokenService.get(req)
      if (!token) {
        return res.status(401).json({message: "Not authorized"})
      }

      req.user = tokenService.verify(token)
      next()
    } catch (e) {
      res.status(401).json({message: "Not authorized"})
    }
};