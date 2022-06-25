const RentalRepository = require('../repository/RentalRepository');

class RentalServices {
  async create(payload) {
    const result = await RentalRepository.create(payload);
    return result;
  }

  async list(payload) {
    const result = await RentalRepository.list(payload);
    return result;
  }

  async getById(payload) {
    const result = await RentalRepository.getById(payload);
    return result;
  }

  async updateRental(payload, reqBody) {
    const result = await RentalRepository.updateRental(payload, reqBody);
    return result;
  }

  async deleteRental(payload) {
    const result = await RentalRepository.deleteRental(payload);
    return result;
  }
}

module.exports = new RentalServices();
