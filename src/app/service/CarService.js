const CarRepository = require('../repository/CarRepository')

class CarService {
	static async create(payload) {
		const result = await CarRepository.createCar(payload)
		return result
	}

	static async find(payload) {
		const result = await CarRepository.listCar(payload)
		return result
	}

	static async findById(payload) {
		const result = await CarRepository.getCar(payload)
		return result 
	}

	static async findByIdAndUpdate(payload, id ) {
		const result = await CarRepository.updateCar(payload, id)
		return result
	}

	static async findByIdAndDelete(payload) {
		const result = await CarRepository.deleteCar(payload)
	}
}

module.exports = CarService 