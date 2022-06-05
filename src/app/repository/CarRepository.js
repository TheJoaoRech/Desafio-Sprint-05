const CarSchema = require('../schema/CarSchema')

class CarRepository {
	static async createCar(payload){
		return await CarSchema.create(payload)
	}
    
	static async listCar(payload) {
		return await CarSchema.find(payload)
	}

	static async getCar(payload) {
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