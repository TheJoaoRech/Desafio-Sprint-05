const CarSchema = require('../schema/CarSchema');

class CarRepository {
	static async create(payload){
		return await CarSchema.create(payload);
	}
    
	static async list(payload) {
		const costumizePaginate = {totalDocs: 'total', docs: 'Vehicles', page: 'offset', nextPage: false, prevPage: false, totalPages: 'offsets', pagingCounter: false, meta: false, hasPrevPage: false, hasNextPage: false
		};
		const {limit = 100, offset = 0, ...query} = payload;  
		const options = {
			limit: Number(limit),
			offset: Number(offset),
			customLabels: costumizePaginate
		};
		return await CarSchema.paginate(query, options);
	}

	static async getById(payload) {
		return await CarSchema.findById(payload);
	}

	static async updateCar(payload, reqBody) {
		return await CarSchema.findByIdAndUpdate(payload, reqBody);
	}

	static async updateAcessorieCar(idAcess, attDesc) {
		const result = await CarSchema.findOneAndUpdate({ 'accessories._id': idAcess },{$set: {'accessories.$.description': attDesc.description}},{returnOriginal: false});
		return await result;
	}

	static async deleteCar(payload) {
		return await CarSchema.findByIdAndDelete(payload);
	}
}

module.exports = CarRepository;