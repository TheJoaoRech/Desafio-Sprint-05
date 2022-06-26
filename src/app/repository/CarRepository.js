const CarSchema = require('../schema/CarSchema');

class CarRepository {
  async create(payload) {
    return CarSchema.create(payload);
  }

  async list(payload) {
    const costumizePaginate = {
      totalDocs: 'total', docs: 'Vehicles', page: 'offset', nextPage: false, prevPage: false, totalPages: 'offsets', pagingCounter: false, meta: false, hasPrevPage: false, hasNextPage: false,
    };
    const { limit = 100, offset = 0, ...query } = payload;
    const options = {
      limit: Number(limit),
      offset: Number(offset),
      customLabels: costumizePaginate,
    };
    return CarSchema.paginate(query, options);
  }

  async getById(payload) {
    return CarSchema.findById(payload);
  }

  async updateCar(payload, reqBody) {
    return CarSchema.findByIdAndUpdate(payload, reqBody);
  }

  async updateAcessorieCar(idAcess, attDesc) {
    const result = await CarSchema.findOneAndUpdate({ 'accessories._id': idAcess }, { $set: { 'accessories.$.description': attDesc.description } }, { returnOriginal: false });
    return result;
  }

  async deleteCar(_id) {
    return CarSchema.findByIdAndDelete(_id);
  }
}

module.exports = new CarRepository();
