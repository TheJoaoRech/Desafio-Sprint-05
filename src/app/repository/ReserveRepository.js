const ReserveSchema = require('../schema/ReserveSchema');

class ReserveRepository {
	static async create(payload) {
		return await ReserveSchema.create(payload);
	}

	static async list(payload) {
		const costumizePaginate = {totalDocs: 'total', docs: 'Reserves', page: 'offset', nextPage: false, prevPage: false, totalPages: 'offsets', pagingCounter: false, meta: false, hasPrevPage: false, hasNextPage: false
		};
		const {limit = 100, offset = 0, ...query} = payload;  
		const options = {
			limit: Number(limit),
			offset: Number(offset),
			customLabels: costumizePaginate
		};
		return await ReserveSchema.paginate(query, options);
	}

	static async getById(payload) {
		return await ReserveSchema.findById(payload);
	}

	static async updateReserve(payload, reqBody) {
		return await ReserveSchema.findByIdAndUpdate(payload, reqBody);
	}

	static async deleteReserve(payload) {
		return await ReserveSchema.findByIdAndDelete(payload);
	}
}

module.exports = ReserveRepository;