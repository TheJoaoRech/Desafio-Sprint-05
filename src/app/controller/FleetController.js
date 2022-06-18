const FleetService = require('../service/FleetService');

class FleetController {
	static async create(req, res) {
		try {
			const result = await FleetService.create(req.body);
			return res.status(201).json(result);
		} catch (error) {
			return res.status(400).json({Error: error.message});
		}
	}

	static async list(req, res) {
		try {
			const result = await FleetService.list(req.query);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(400).json({Error: error.message});
		}
	}

	static async getById(req, res) {
		try {
			const result = await FleetService.getById(req.params.id);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(400).json({Error: error.message});
		}
	}

	static async update(req, res) {
		try {
			const result = await FleetService.updateFleet(req.params.id, req.body);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(400).json({Error: error.message});
		}
	}
    
	static async delete(req, res) {
		try {
			const result = await FleetService.deleteFleet(req.params.id);
			return res.status(204).json(result);
		} catch (error) {
			return res.status(400).json({Error: error.message});
		}
	}
}

module.exports = FleetController;