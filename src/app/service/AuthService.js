const PersonRepository = require('../repository/PersonRepository')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const authConfig = require('../../config/authConfig.json')

class AuthService {
    static async auth(email, password) {
        const person = await PersonRepository.auth(email)

        if (!person) {
            throw new Error('Email not found!')
        }

        const validPassword = await bcrypt.compare(password, person.password)
        if (!validPassword) {
            throw new Error('Invalid password!')
        }
        
        person.password = undefined
        const token = jwt.sign({ id: person.id }, authConfig.secret, {
            expiresIn: 86400
        })
        
        return { token, email: person.email, canDrive: person.canDrive }
    }
}

module.exports = AuthService