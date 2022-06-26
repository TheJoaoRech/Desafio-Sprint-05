const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const PersonRepository = require('../repository/PersonRepository');
require('dotenv').config();

class AuthService {
  async auth(email, password) {
    const person = await PersonRepository.auth(email);

    if (!person) {
      throw new Error('Email not found!');
    }

    const validPassword = await bcrypt.compare(password, person.password);
    if (!validPassword) {
      throw new Error('Invalid password!');
    }

    person.password = undefined;
    const token = jwt.sign({ id: person.id }, process.env.SECRET, {
      expiresIn: 86400
    });

    return { token, email: person.email, canDrive: person.canDrive };
  }
}

module.exports = new AuthService();
