const ReserveService = require('../service/ReserveService');

class ReserveController {
	static async create(req, res) {
		try {
			const result = await ReserveService.create(req.body);
			return res.status(201).json(result);
		} catch (error) {
			return res.status(400).json({Error: error.message});
		}
	}

	static async list(req, res) {
		try {
			const result = await ReserveService.list(req.query);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(400).json({Error: error.message});
		}
	}

	static async getById(req, res) {
		try {
			const result = await ReserveService.getById(req.params.id);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(400).json({Error: error.message});
		}
	}

	static async update(req, res) {
		try {
			const result = await ReserveService.updateReserve(req.params.id, req.body);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(400).json({Error: error.message});
		}
	}
    
	static async delete(req, res) {
		try {
			const result = await ReserveService.deleteReserve(req.params.id);
			return res.status(204).json(result);
		} catch (error) {
			return res.status(400).json({Error: error.message});
		}
	}
}

module.exports = ReserveController;