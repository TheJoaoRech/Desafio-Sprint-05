const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const PersonSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
    
	cpf: {
		type: String,
		required: true
	},
    
	birthDay: {
		type: String,
		required: true
	},
   
	email: {
		type: String,
		required: true
	},
    
	password: {
		type: String,
		required: true
	},
    
	canDrive: {
		type: String,
		enum: ['yes', 'no'],
		required: true
	}

},

{versionKey: false}

)

PersonSchema.plugin(mongoosePaginate)
const Person = mongoose.model('Person', PersonSchema)
Person.paginate().then({})

module.exports = Person