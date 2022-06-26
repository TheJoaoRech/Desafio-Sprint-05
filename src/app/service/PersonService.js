const PersonRepository = require('../repository/PersonRepository');

class PersonService {
  async create(payload) {
    const result = await PersonRepository.create(payload);
    return result;
  }

  async list(payload) {
    const result = await PersonRepository.list(payload);
    return result;
  }

  async getById(payload) {
    const result = await PersonRepository.getById(payload);
    return result;
  }

  async updatePerson(payload, reqBody) {
    const result = await PersonRepository.updatePerson(payload, reqBody);
    return result;
  }

  async deletePerson(_id) {
    const result = await PersonRepository.deletePerson(_id);
    return result;
  }
}

module.exports = new PersonService();
