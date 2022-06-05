const CarRepository = require('../repository/CarRepository')

class CarService {
	static async create(payload) {
		const result = await CarRepository.createCar(payload)
		return result
	}

	static async listAll(payload) {
		const result = await CarRepository.listAllCar(payload)
		return result
	}

	static async getById(payload) {
		const result = await CarRepository.getCar(payload)
		return result 
	}

	static async update(payload, id ) {
		const result = await CarRepository.updateCar(payload, id)
		return result
	}

	static async delete(payload) {
		const result = await CarRepository.deleteCar(payload)
	}
}

module.exports = CarService 