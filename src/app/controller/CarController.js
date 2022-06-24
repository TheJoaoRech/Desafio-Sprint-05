const CarService = require('../service/CarService');

class CarController {
  static async create(req, res) {
    try {
      const result = await CarService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(error.status || 400).json(
        { Error: error.name, Description: error.description },
      );
    }
  }

  static async list(req, res) {
    try {
      const result = await CarService.list(req.query);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.status || 400).json(
        { Error: error.name, Description: error.description },
      );
    }
  }

  static async getById(req, res) {
    try {
      const result = await CarService.getById(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.status || 400).json(
        { Error: error.name, Description: error.description },
      );
    }
  }

  static async update(req, res) {
    try {
      const result = await CarService.updateCar(req.params.id, req.body);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.status || 400).json(
        { Error: error.name, Description: error.description },
      );
    }
  }

  static async updateAcessorieCar(req, res) {
    try {
      const { idAcess } = req.params;
      const reqBody = req.body;
      const result = await CarService.updateAcessorieCar(idAcess, reqBody);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.status || 400).json(
        { Error: error.name, Description: error.description },
      );
    }
  }

  static async delete(req, res) {
    try {
      const result = await CarService.deleteCar(req.params.id);
      return res.status(204).json(result);
    } catch (error) {
      return res.status(error.status || 400).json(
        { Error: error.name, Description: error.description },
      );
    }
  }
}

module.exports = CarController;
