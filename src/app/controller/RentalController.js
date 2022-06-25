const RentalServices = require('../service/RentalService');

class RentalController {
  static async create(req, res) {
    try {
      const result = await RentalServices.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(error.status || 400).json(
        { Error: error.name, Description: error.description },
      );
    }
  }

  static async list(req, res) {
    try {
      const result = await RentalServices.list(req.query);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.status || 400).json(
        { Error: error.name, Description: error.description },
      );
    }
  }

  static async getById(req, res) {
    try {
      const result = await RentalServices.getById(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.status || 400).json(
        { Error: error.name, Description: error.description },
      );
    }
  }

  static async update(req, res) {
    try {
      const result = await RentalServices.updateRental(req.params.id, req.body);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.status || 400).json(
        { Error: error.name, Description: error.description },
      );
    }
  }

  static async delete(req, res) {
    try {
      const result = await RentalServices.deleteRental(req.params.id);
      return res.status(204).json(result);
    } catch (error) {
      return res.status(error.status || 400).send();
    }
  }
}

module.exports = RentalController;
