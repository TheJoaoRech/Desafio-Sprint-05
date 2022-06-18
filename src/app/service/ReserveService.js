const ReserveRepository = require('../repository/ReserveRepository');

class ReserveService {
	static async create(payload) {
		const result = await ReserveRepository.create(payload);
		return result;
	}

	static async list(payload) {
		const result = await ReserveRepository.list(payload);
		return result;
	}

	static async getById(payload) {
		const result = await ReserveRepository.getById(payload);
		return result;
	}

	static async updateReserve(payload, reqBody) {
		const result = await ReserveRepository.updateReserve(payload, reqBody);
		return result;
	}

	static async deleteReserve(payload) {
		const result = await ReserveRepository.deleteReserve(payload);
		return result;
	}
}

module.exports = ReserveService;