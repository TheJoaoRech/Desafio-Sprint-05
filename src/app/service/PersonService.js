const PersonRepository = require('../repository/PersonRepository')

class PersonService {
	static async create(payload) {
		const result = await PersonRepository.createPerson(payload)
		return result
	}

	static async list(payload) {
		const result = await PersonRepository.list(payload)
		return result
	}

	static async getById(payload) {
		const result = await PersonRepository.getById(payload)
		return result
	}

	static async updatePerson(id, payload) {
		const result = await PersonRepository.updatePerson(payload, id)
		return result
	}

	static async deletePerson(payload) {
		const result = await PersonRepository.deletePerson(payload) 
        return result
	}
}

module.exports = PersonService