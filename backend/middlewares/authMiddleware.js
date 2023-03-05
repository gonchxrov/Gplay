const jwtService = require('../services/jwtService')

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
      next()
    }

    try {
      const token = jwtService.getToken(req)
      if (!token) {
        return res.status(401).json({message: "Not authorized"})
      }

      req.user = jwtService.verifyToken(token)
      next()
    } catch (e) {
      res.status(401).json({message: "Not authorized"})
    }
};