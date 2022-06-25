const AuthService = require('../service/AuthService');

class AuthController {
  async auth(req, res) {
    try {
      const { email, password } = req.body;
      const result = await AuthService.auth(email, password);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.status || 400).send();
    }
  }
}

module.exports = new AuthController();
