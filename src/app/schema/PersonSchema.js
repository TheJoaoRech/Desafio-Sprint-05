const mongoose = require('mongoose')

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

const Person = mongoose.model('Person', PersonSchema)
module.exports = Person