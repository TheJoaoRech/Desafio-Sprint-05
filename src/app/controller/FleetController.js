const FleetService = require('../service/FleetService');

class FleetController {
  async create(req, res) {
    try {
      const result = await FleetService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(error.status || 400).json(
        { Error: error.name, Description: error.description },
      );
    }
  }

  async list(req, res) {
    try {
      const { id_rental } = req.params;
      const reqQuery = req.query;
      const list = await FleetService.list(
        { ...reqQuery, id_rental: String(id_rental) },
      );
      res.status(200).json(list);
    } catch (error) {
      res.status(400).json(
        { Error: error.name, Description: error.description },
      );
    }
  }

  async getById(req, res) {
    try {
      const result = await FleetService.getById(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.status || 400).json(
        { Error: error.name, Description: error.description },
      );
    }
  }

  async update(req, res) {
    try {
      const result = await FleetService.updateFleet(req.params.id, req.body);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.status || 400).json(
        { Error: error.name, Description: error.description },
      );
    }
  }

  async delete(req, res) {
    try {
      const result = await FleetService.deleteFleet(req.params.id);
      return res.status(204).json(result);
    } catch (error) {
      return res.status(error.status || 400).send();
    }
  }
}

module.exports = new FleetController();
