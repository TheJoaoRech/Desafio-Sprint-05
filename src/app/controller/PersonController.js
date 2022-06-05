const PersonService = require('../service/PersonService')

class PersonController {
	static async createPerson(req, res) {
		try {
			const result = await PersonService.create(req.body)
			return res.status(201).json(result)
		} catch (error) {
			return res.status(400).json(error)
		}
	}

	static async listAllPerson(req, res) {
		try {
			const result = await PersonService.listAll(req.query)
			return res.status(200).json(result)
		} catch (error) {
			return res.status(400).json(error)
		}
	}

	static async listById(req, res) {
		try {
			const result = await PersonService.getById(req.params.id)
			return res.status(200).json(result)
		} catch (error) {
			return res.status(400).json(error)
		}
	}

	static async updatePerson(req, res) {
		try {
			const result = await PersonService.update(req.params.id, req.body)
			return res.status(200).json(result)
		} catch (error) {
			return res.status(400).json(error)
		}
	}
    
	static async deletePerson(req, res) {
		try {
			const result = await PersonService.delete(req.params.id)
			return res.status(204).json(result)
		} catch (error) {
			return res.status(400).json(error)
		}
	}
}

module.exports = new PersonController()