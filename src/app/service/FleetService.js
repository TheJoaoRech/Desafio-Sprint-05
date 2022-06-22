/* eslint-disable camelcase */
const FleetRepository = require('../repository/FleetRepository');
const RentalRepository = require('../repository/RentalRepository');

class FleetService {
	static async create(payload) {
		const result = await FleetRepository.create(payload);
		return result;
	}

	static async list(payload) {
		const result = await FleetRepository.list(payload);
		const {id_rental} = payload;
		const rental = await RentalRepository.getById(id_rental);
		if (!rental) throw new Error;
		return result;
	}

	static async getById(payload) {
		const result = await FleetRepository.getById(payload);
		return result;
	}

	static async updateFleet(payload, reqBody) {
		const result = await FleetRepository.updateFleet(payload, reqBody);
		return result;
	}

	static async deleteFleet(payload) {
		const result = await FleetRepository.deleteFleet(payload);
		return result;
	}
}

module.exports = FleetService;