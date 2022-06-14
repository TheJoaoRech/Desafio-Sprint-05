const moment = require('moment');
const PersonRepository = require('../repository/PersonRepository');

class PersonService {
	static async create(payload) {
		moment.suppressDeprecationWarnings = true;
		const validAge = moment().diff(payload.birthDay, 'years');
		if(validAge < 18) { throw {message: 'You must be over 18 years of age to register!'};}

		const result = await PersonRepository.create(payload);
		return result;
	}

	static async list(payload) {
		const result = await PersonRepository.list(payload);
		return result;
	}

	static async getById(payload) {
		const result = await PersonRepository.getById(payload);
		return result;
	}

	static async updatePerson(payload, reqBody) {
		const result = await PersonRepository.updatePerson(payload, reqBody);
		return result;
	}

	static async deletePerson(payload) {
		const result = await PersonRepository.deletePerson(payload); 
		return result;
	}
}

module.exports = PersonService;