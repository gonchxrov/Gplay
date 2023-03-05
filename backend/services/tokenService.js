const jwt = require('jsonwebtoken')

class TokenService {
    generate(id, firstName, lastName, email, role) {
        return jwt.sign(
            {id, firstName, lastName, email, role},
            process.env.JWT_SECRET_KEY,
            {expiresIn: '24h'}
        )
    }

    get(req) {
        const token = req?.headers?.authorization.split(' ')[1] || ''
        if (!token) {
            return res.status(401).json({message: NOT_AUTH_MSG})
        }

        return token
    }

    verify(token) {
        return jwt.verify(token, process.env.JWT_SECRET_KEY)
    }
}


module.exports = new TokenService()