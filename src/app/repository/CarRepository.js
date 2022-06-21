const CarSchema = require('../schema/CarSchema');

class CarRepository {
	static async create(payload){
		return  CarSchema.create(payload);
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
		return  CarSchema.paginate(query, options);
	}

	static async getById(payload) {
		return  CarSchema.findById(payload);
	}

	static async updateCar(payload, reqBody) {
		return  CarSchema.findByIdAndUpdate(payload, reqBody);
	}

	static async updateAcessorieCar(idAcess, attDesc) {
		const result = await CarSchema.findOneAndUpdate({ 'accessories._id': idAcess },{$set: {'accessories.$.description': attDesc.description}},{returnOriginal: false});
		return  result;
	}

	static async deleteCar(payload) {
		return  CarSchema.findByIdAndDelete(payload);
	}
}

module.exports = CarRepository;