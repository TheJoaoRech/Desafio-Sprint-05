const PersonSchema = require('../schema/PersonSchema')

class PersonRepository {
    static async auth(email){
        return await PersonSchema.findOne({ email }).select('+password');
    }

	static async create(payload) {
		return await PersonSchema.create(payload)
	}
    
	static async list(payload) {
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
		return await PersonSchema.paginate(payload) //Options Bugado.
	}

	static async getById(payload) {
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