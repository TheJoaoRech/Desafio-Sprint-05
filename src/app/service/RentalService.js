const RentalRepository = require('../repository/RentalRepository');

class RentalServices {
  static async create(payload) {
    const result = await RentalRepository.create(payload);
    return result;
  }

  static async list(payload) {
    const result = await RentalRepository.list(payload);
    return result;
  }

  static async getById(payload) {
    const result = await RentalRepository.getById(payload);
    return result;
  }

  static async updateRental(payload, reqBody) {
    const result = await RentalRepository.updateRental(payload, reqBody);
    return result;
  }

  static async deleteRental(payload) {
    const result = await RentalRepository.deleteRental(payload);
    return result;
  }
}

module.exports = RentalServices;
