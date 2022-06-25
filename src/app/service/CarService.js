const CarRepository = require('../repository/CarRepository');

class CarService {
  async create(payload) {
    const result = await CarRepository.create(payload);
    return result;
  }

  async list(payload) {
    const result = await CarRepository.list(payload);
    return result;
  }

  async getById(payload) {
    const result = await CarRepository.getById(payload);
    return result;
  }

  async updateCar(payload, reqBody) {
    const result = await CarRepository.updateCar(payload, reqBody);
    return result;
  }

  async updateAcessorieCar(idAcess, payload) {
    const result = await CarRepository.updateAcessorieCar(idAcess, payload);
    return result;
  }

  async deleteCar(payload) {
    const result = await CarRepository.deleteCar(payload);
    return result;
  }
}

module.exports = new CarService();
