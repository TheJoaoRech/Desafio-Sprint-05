const ReserveSchema = require('../schema/ReserveSchema');

class ReserveRepository {
  async create(payload) {
    return ReserveSchema.create(payload);
  }

  async list(payload) {
    const costumizePaginate = {
      totalDocs: 'total', docs: 'Reserves', page: 'offset', nextPage: false, prevPage: false, totalPages: 'offsets', pagingCounter: false, meta: false, hasPrevPage: false, hasNextPage: false,
    };
    const { limit = 100, offset = 0, ...query } = payload;
    const options = {
      limit: Number(limit),
      offset: Number(offset),
      customLabels: costumizePaginate,
    };
    return ReserveSchema.paginate(query, options);
  }

  async getById(payload) {
    return ReserveSchema.findById(payload);
  }

  async updateReserve(payload, reqBody) {
    return ReserveSchema.findByIdAndUpdate(payload, reqBody);
  }

  async deleteReserve(payload) {
    return ReserveSchema.findByIdAndDelete(payload);
  }
}

module.exports = new ReserveRepository();
