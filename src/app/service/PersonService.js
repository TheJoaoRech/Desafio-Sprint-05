const PersonRepository = require('../repository/PersonRepository')

class PersonService {
	static async create(payload) {
		const result = await PersonRepository.createPerson(payload)
		return result
	}

	static async listAll(payload) {
		const result = await PersonRepository.listPerson(payload)
		return result
	}

	static async getById(payload) {
		const result = await PersonRepository.getPerson(payload)
		return result
	}

	static async update(id, payload) {
		const result = await PersonRepository.updatePerson(payload, id)
		return result
	}

	static async delete(payload) {
		const result = await PersonRepository.deletePerson(payload) 
        return result
	}
}

module.exports = PersonService