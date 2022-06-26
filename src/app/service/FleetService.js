const FleetRepository = require('../repository/FleetRepository');
const RentalRepository = require('../repository/RentalRepository');

class FleetService {
  async create(payload) {
    const result = await FleetRepository.create(payload);
    return result;
  }

  async list(payload) {
    const result = await FleetRepository.list(payload);
    const { id_rental } = payload;
    const rental = await RentalRepository.getById(id_rental);
    if (!rental) throw new Error();
    return result;
  }

  async getById(payload) {
    const result = await FleetRepository.getById(payload);
    return result;
  }

  async updateFleet(payload, reqBody) {
    const result = await FleetRepository.updateFleet(payload, reqBody);
    return result;
  }

  async deleteFleet(_id) {
    const result = await FleetRepository.deleteFleet(_id);
    return result;
  }
}

module.exports = new FleetService();
