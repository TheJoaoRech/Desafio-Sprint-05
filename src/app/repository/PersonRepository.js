const PersonSchema = require('../schema/PersonSchema');

class PersonRepository {
	static async create(payload) {
		return await PersonSchema.create(payload);
	}
    
	static async list(payload) {
		const costumizePaginate = {totalDocs: 'total', docs: 'Persons', page: 'offset', nextPage: false, prevPage: false, totalPages: 'offsets', pagingCounter: false, meta: false, hasPrevPage: false, hasNextPage: false
		};
		const {limit = 100, offset = 0, ...query} = payload;  
		const options = {
			limit: Number(limit),
			offset: Number(offset),
			customLabels: costumizePaginate
		};
		return await PersonSchema.paginate(query, options);
	}

	static async getById(payload) {
		return await PersonSchema.findById(payload);
	}

	static async updatePerson(payload, reqBody) {
		return await PersonSchema.findByIdAndUpdate(payload, reqBody);
	}

	static async deletePerson(payload) {
		return await PersonSchema.findByIdAndDelete(payload);
	}

	static async auth(email) {
		return await PersonSchema.findOne({ email }).select('+password');
	}
}

module.exports = PersonRepository;