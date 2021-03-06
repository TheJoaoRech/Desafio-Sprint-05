const RentalServices = require('../service/RentalService');

class RentalController {
  async create(req, res) {
    try {
      const result = await RentalServices.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(error.status || 400).json({ Error: error.name, Description: error.description });
    }
  }

  async list(req, res) {
    try {
      const result = await RentalServices.list(req.query);
      if (result.Rentals.length === 0) {
        return res.status(204).end();
      }
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.status || 400).json({ Error: error.name, Description: error.description });
    }
  }

  async getById(req, res) {
    try {
      const result = await RentalServices.getById(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.status || 400).json({ Error: error.name, Description: error.description });
    }
  }

  async update(req, res) {
    try {
      const result = await RentalServices.updateRental(req.params.id, req.body);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.status || 400).json({ Error: error.name, Description: error.description });
    }
  }

  async delete(req, res) {
    try {
      const result = await RentalServices.deleteRental(req.params.id);
      return res.status(204).json(result);
    } catch (error) {
      return res.status(error.status || 404).send();
    }
  }
}

module.exports = new RentalController();
