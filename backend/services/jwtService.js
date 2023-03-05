const jwt = require('jsonwebtoken')

class JwtService {
    generateToken(id, firstName, lastName, email, role) {
        return jwt.sign(
            {id, firstName, lastName, email, role},
            process.env.JWT_SECRET_KEY,
            {expiresIn: '24h'}
        )
    }

    getToken(req) {
        const token = req?.headers?.authorization.split(' ')[1] || ''
        if (!token) {
            return res.status(401).json({message: NOT_AUTH_MSG})
        }

        return token
    }

    verifyToken(token) {
        return jwt.verify(token, process.env.JWT_SECRET_KEY)
    }
}


module.exports = new JwtService()