const PersonSchema = require('../schema/PersonSchema')

class PersonRepository {
	static async createPerson(payload) {
		return await PersonSchema.create(payload)
	}
    
	static async listPerson(payload) {
		return await PersonSchema.find(payload)
	}

	static async getPerson(payload) {
		return await PersonSchema.findById(payload)
	}

	static async updatePerson(id, payload) {
		return await PersonSchema.findByIdAndUpdate(id, payload)
	}

	static async deletePerson(payload) {
		return await PersonSchema.findByIdAndDelete(payload)
	}
}

module.exports = new PersonRepository()