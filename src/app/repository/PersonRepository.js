const PersonSchema = require('../schema/PersonSchema')

class PersonRepository {
	static async createPerson(payload) {
		return await PersonSchema.create(payload)
	}
    
	static async listPerson(payload) {
		const customLabels = {
            totalDocs: 'total',
            docs: 'Person',
            page: 'offset',
            nextPage: false,
            prevPage: false,
            totalPages: 'offsets',
            pagingCounter: false,
            meta: false,
            hasPrevPage: false,
            hasNextPage: false
        }
        const options = {
            limit: 5,
            offset: 1,
            customLabels: customLabels
        }
		return await PersonSchema.paginate(payload, options, {})
	}

	static async getPerson(payload) {
		return await PersonSchema.findById(payload)
	}

	static async updatePerson(id, payload) {
		return await PersonSchema.findByIdAndUpdate(id, payload)
	}

	static async deletePerson(payload) {
		return await PersonSchema.findByIdAndDelete(payload)
	}
}

module.exports = PersonRepository