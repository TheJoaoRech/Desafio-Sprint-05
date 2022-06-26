const ReserveService = require('../service/ReserveService');

class ReserveController {
  async create(req, res) {
    try {
      const result = await ReserveService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(error.status || 400).json({ Error: error.name, Description: error.description });
    }
  }

  async list(req, res) {
    try {
      const { id_rental } = req.params;
      const reqQuery = req.query;
      const list = await ReserveService.list({ ...reqQuery, id_rental: String(id_rental) });
      res.status(200).json(list);
    } catch (error) {
      res.status(400).json({ Error: error.name, Description: error.description });
    }
  }

  async getById(req, res) {
    try {
      const result = await ReserveService.getById(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.status || 400).json({ Error: error.name, Description: error.description });
    }
  }

  async update(req, res) {
    try {
      const result = await ReserveService.updateReserve(req.params.id, req.body);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.status || 400).json({ Error: error.name, Description: error.description });
    }
  }

  async delete(req, res) {
    try {
      const result = await ReserveService.deleteReserve(req.params.id);
      return res.status(204).json(result);
    } catch (error) {
      return res.status(error.status || 404).send();
    }
  }
}

module.exports = new ReserveController();
