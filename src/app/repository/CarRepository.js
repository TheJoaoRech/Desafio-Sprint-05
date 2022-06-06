const CarSchema = require('../schema/CarSchema')

class CarRepository {
	static async create(payload){
		return await CarSchema.create(payload)
	}
    
	static async list(payload) {
		const paginate = {
            totalDocs: 'total',
            docs: 'vehicles',
            page: 'offset',
            totalPages: 'offsets',
            nextPage: false,
            prevPage: false,
            pagingCounter: false,
            meta: false,
            hasPrevPage: false,
            hasNextPage: false
        }
        const options = {
            limit: 5,
            offset: 1,
            customLabels: paginate
        }
		return await CarSchema.paginate(payload, {}) //Options Bugado.
	}

	static async getById(payload) {
		return await CarSchema.findById(payload)
	}

	static async updateCar(id, payload) {
		return await CarSchema.findByIdAndUpdate(id, payload)
	}

	static async deleteCar(payload) {
		return await CarSchema.findByIdAndDelete(payload)
	}
}

module.exports = CarRepository