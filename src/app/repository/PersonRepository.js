const PersonSchema = require('../schema/PersonSchema');

class PersonRepository {
  async create(payload) {
    return PersonSchema.create(payload);
  }

  async list(payload) {
    const costumizePaginate = {
      totalDocs: 'total', docs: 'Persons', page: 'offset', nextPage: false, prevPage: false, totalPages: 'offsets', pagingCounter: false, meta: false, hasPrevPage: false, hasNextPage: false,
    };
    const { limit = 100, offset = 0, ...query } = payload;
    const options = {
      limit: Number(limit),
      offset: Number(offset),
      customLabels: costumizePaginate,
    };
    return PersonSchema.paginate(query, options);
  }

  async getById(payload) {
    return PersonSchema.findById(payload);
  }

  async updatePerson(payload, reqBody) {
    return PersonSchema.findByIdAndUpdate(payload, reqBody);
  }

  async deletePerson(_id) {
    return PersonSchema.findByIdAndDelete(_id);
  }

  async auth(email) {
    return PersonSchema.findOne({ email }).select('+password');
  }
}

module.exports = new PersonRepository();
