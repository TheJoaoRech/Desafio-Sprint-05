const PersonService = require('../service/PersonService')

class PersonController {
	static async create(req, res) {
		try {
			const result = await PersonService.create(req.body)
			return res.status(201).json(result)
		} catch (error) {
			return res.status(400).json(error)
		}
	}

	static async list(req, res) {
		try {
			const result = await PersonService.list(req.query)
			return res.status(200).json(result)
		} catch (error) {
			return res.status(400).json(error)
		}
	}

	static async getById(req, res) {
		try {
			const result = await PersonService.getById(req.params.id)
			return res.status(200).json(result)
		} catch (error) {
			return res.status(400).json(error)
		}
	}

	static async update(req, res) {
		try {
			const result = await PersonService.updatePerson(req.params.id, req.body)
			return res.status(200).json(result)
		} catch (error) {
			return res.status(400).json(error)
		}
	}
    
	static async delete(req, res) {
		try {
			const result = await PersonService.deletePerson(req.params.id)
			return res.status(204).json(result)
		} catch (error) {
			return res.status(400).json(error)
		}
	}
}

module.exports = PersonController