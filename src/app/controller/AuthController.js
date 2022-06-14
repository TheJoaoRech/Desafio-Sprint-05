const AuthService = require('../service/AuthService');

class AuthController {
	static async auth(req, res) {
		try {
			const { email, password } = req.body;
			const result = await AuthService.auth(email, password);
			return res.status(204).json(result);
		} catch (error) {
			return res.status(400).json({description: error.description, Error: error.message});
		}
	}
}

module.exports = AuthController;