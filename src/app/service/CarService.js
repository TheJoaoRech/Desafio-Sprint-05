const CarRepository = require('../repository/CarRepository')

class CarService {
	static async create(payload) {
		const result = await CarRepository.create(payload)
		return result
	}

	static async list(payload) {
		const result = await CarRepository.list(payload)
		return result
	}

	static async getById(payload) {
		const result = await CarRepository.getById(payload)
		return result 
	}

	static async updateCar(payload, id ) {
		const result = await CarRepository.updateCar(payload, id)
		return result
	}

	static async deleteCar(payload) {
		const result = await CarRepository.deleteCar(payload)
		return result
	}
}

module.exports = CarService 