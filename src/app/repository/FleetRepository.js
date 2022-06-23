const FleetSchema = require('../schema/FleetSchema');

class FleetRepository {
	static async create(payload) {
		return  FleetSchema.create(payload);
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
		return  FleetSchema.paginate(query, options);
	}

	static async getById(payload) {
		return  FleetSchema.findById(payload);
	}

	static async updateFleet(payload, reqBody) {
		return  FleetSchema.findByIdAndUpdate(payload, reqBody);
	}

	static async deleteFleet(payload) {
		return  FleetSchema.findByIdAndDelete(payload);
	}
}

module.exports = FleetRepository;