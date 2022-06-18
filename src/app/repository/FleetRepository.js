const FleetSchema = require('../schema/FleetSchema');

class FleetRepository {
	static async create(payload) {
		return await FleetSchema.create(payload);
	}

	static async list(payload) {
		const costumizePaginate = {totalDocs: 'total', docs: 'Fleets', page: 'offset', nextPage: false, prevPage: false, totalPages: 'offsets', pagingCounter: false, meta: false, hasPrevPage: false, hasNextPage: false
		};
		const {limit = 100, offset = 0, ...query} = payload;  
		const options = {
			limit: Number(limit),
			offset: Number(offset),
			customLabels: costumizePaginate
		};
		return await FleetSchema.paginate(query, options);
	}

	static async getById(payload) {
		return await FleetSchema.findById(payload);
	}

	static async updateFleet(payload, reqBody) {
		return await FleetSchema.findByIdAndUpdate(payload, reqBody);
	}

	static async deleteFleet(payload) {
		return await FleetSchema.findByIdAndDelete(payload);
	}
}

module.exports = FleetRepository;