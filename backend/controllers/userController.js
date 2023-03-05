const ApiError = require('../errors/apiError');
const tokenService = require('../services/tokenService')
const passwordService = require('../services/passwordService')
const { User } = require('../models')


class UserController {
  async registration(req, res, next) {
    try {
      const {firstName, lastName, email, password} = req.body
      if (!firstName || !lastName || !email || !password) {
        return next(ApiError.badRequest('Incorrect user data'))
      }

      const candidate = await User.getOneByEmail(email)
      if (candidate) {
        return next(ApiError.badRequest('User with this email already exists'))
      }

      const hashPassword = await passwordService.hash(password)
      const user = await User.create(firstName, lastName, email, hashPassword)
      const token = tokenService.generate(user.id, user.firstName, user.lastName, user.email, user.role)

      return res.json({token})
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async login(req, res, next) {
    const {email, password} = req.body
    const user = await User.getOneByEmail(email)
    if (!user) {
        return next(ApiError.internal('User not found'))
    }

    let comparePassword = passwordService.compare(password, user.password)
    if (!comparePassword) {
        return next(ApiError.internal('Incorrect password specified'))
    }
    
    const token = tokenService.generate(user.id, user.firstName, user.lastName, user.email, user.role)

    return res.json({token})
  }

  async check(req, res, next) {
    try{
      const token = tokenService.generate(req.user.id, req.user.firstName, req.user.lastName, req.user.email, req.user.role)
      return res.json({token})
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
}

module.exports = new UserController()