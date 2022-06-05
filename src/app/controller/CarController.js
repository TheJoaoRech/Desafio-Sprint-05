const CarService = require('../service/CarService')

class CarController {
	static async createCar(req, res) {
		try {
			const result = await CarService.create(req.body)
			return res.status(201).json(result)
		} catch (error) {
			return res.status(400).json(error)
		}
	}

	static async listCar(req, res) {
		try {
			const result = await CarService.find(req.query)
			return res.status(200).json(result)
		} catch (error) {
			return res.status(400).json(error)
		}
	}

	static async getCar(req, res) {
		try {
			const result = await CarService.findById(req.params.id)
			return res.status(200).json(result)
		} catch (error) {
			return res.status(400).json(error)
		}
	}

	static async updateCar(req, res) {
		try {
			const result = await CarService.findByIdAndUpdate(req.params.id, req.body)
			return res.status(200).json(result)
		} catch (error) {
			return res.status(400).json(error)
		}
	}
    
	static async deleteCar(req, res) {
		try {
			const result = await CarService.findByIdAndDelete(req.params.id)
			return res.status(204).json(result)
		} catch (error) {
			return res.status(400).json(error)
		}
	}
}

module.exports = CarController