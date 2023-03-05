const bcrypt = require('bcrypt')

class PasswordService {
    async hash(password) {
      const hash = await bcrypt.hash(password, 5)
      return hash
    }

    compare(password, hashPassword) {
      return bcrypt.compareSync(password, hashPassword)
    }
}


module.exports = new PasswordService()