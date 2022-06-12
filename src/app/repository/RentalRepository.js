const RentalSchema = require('../schema/RentalSchema');
const axios = require('axios').default;

class RentalRepository {
	static async create(payload) {
		for (let dado = 0; dado < payload.address.length; dado++) {
			const { logradouro, bairro, localidade, uf } = (await axios.get(`https://viacep.com.br/ws/${payload.address[dado].zipCode}/json`)).data;
			payload.address[dado].street = logradouro;
			payload.address[dado].district = bairro;
			payload.address[dado].city = localidade;
			payload.address[dado].state = uf;
		}
		return RentalSchema.create(payload);
	}

	static async list(payload) {
		const paginate = {
			totalDocs: 'total',
			docs: 'people',
			page: 'offset',
			totalPages: 'offsets',
			nextPage: false,
			prevPage: false,
			pagingCounter: false,
			meta: false,
			hasPrevPage: false,
			hasNextPage: false
		};
		const options = {
			limit: 5,
			offset: 1,
			customLabels: paginate
		};
		return await RentalSchema.paginate(payload, {}); //Options Bugado.
	}

	static async getById(payload) {
		return await RentalSchema.findById(payload);
	}

	static async updateRental(id, payload) {
		return await RentalSchema.findByIdAndUpdate(id, payload);
	}

	static async deleteRental(payload) {
		return await RentalSchema.findByIdAndDelete(payload);
	}
}

module.exports = RentalRepository;