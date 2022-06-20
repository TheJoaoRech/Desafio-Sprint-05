const ReserveRepository = require('../repository/ReserveRepository');
const PersonRepository = require('../repository/PersonRepository');

class ReserveService {
	static async create(payload) {
		const {id_user} = payload;
		const user = await PersonRepository.getById(id_user);
		if (user.canDrive !== 'yes') {throw new Error('This user cannot drive!');}
		return await ReserveRepository.create(payload);
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