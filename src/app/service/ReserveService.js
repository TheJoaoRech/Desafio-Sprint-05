const ReserveRepository = require('../repository/ReserveRepository');
const PersonRepository = require('../repository/PersonRepository');
const RentalRepository = require('../repository/RentalRepository');

class ReserveService {
  async create(payload) {
    const { id_user } = payload;
    const user = await PersonRepository.getById(id_user);
    if (user.canDrive !== 'yes') { throw new Error('This user cannot drive!'); }
    return ReserveRepository.create(payload);
  }

  async list(payload) {
    const { id_rental } = payload;
    const rental = await RentalRepository.getById(id_rental);
    if (!rental) throw new Error();
    return ReserveRepository.list(payload);
  }

  async getById(payload) {
    const result = await ReserveRepository.getById(payload);
    return result;
  }

  async updateReserve(payload, reqBody) {
    const result = await ReserveRepository.updateReserve(payload, reqBody);
    return result;
  }

  async deleteReserve(payload) {
    const result = await ReserveRepository.deleteReserve(payload);
    return result;
  }
}

module.exports = new ReserveService();
