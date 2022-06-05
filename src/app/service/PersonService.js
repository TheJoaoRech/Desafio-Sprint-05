const PersonRepository = require('../repository/PersonRepository')

class PersonService {
	static async create(payload) {
		const result = await PersonRepository.createPerson(payload)
		return result
	}

	static async find(payload) {
		const result = await PersonRepository.listPerson(payload)
		return result
	}

	static async findById(payload) {
		const result = await PersonRepository.getPerson(payload)
		return result
	}

	static async findByIdAndUpdate(id, payload) {
		const result = await PersonRepository.updatePerson(payload, id)
		return result
	}

	static async findByIdAndDelete(payload) {
		const result = await PersonRepository.deletePerson(payload) 
        return result
	}
}

module.exports = PersonService