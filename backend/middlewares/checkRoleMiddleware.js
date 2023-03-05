const tokenService = require('../services/tokenService')

module.exports = function(role) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }

    try {
      const token = tokenService.get(req)
      if (!token) {
          return res.status(401).json({message: "Not authorized"})
      }
      
      const user = tokenService.verify(token)
      if (user.role !== role) {
          return res.status(403).json({message: "No access"})
      }
      
      req.user = user;
      next()
    } catch (e) {
      res.status(401).json({message: "Not authorized"})
    }
  }
}
