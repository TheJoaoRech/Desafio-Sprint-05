const PersonSchema = require('../schema/PersonSchema')

class AuthenticateRepository {
	static async auth(payload) {
		return await PersonSchema.findOne({ payload }).select("+password")
	}
}

module.exports = AuthenticateRepository