const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const RentalSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},

	cnpj: {
		type: String,
		unique: true,
		required: true
	},

	activities: {
		type: String,
		required: true
	},

	address:[ {
		zipCode: {
			type: String,
			required: true
		},

		street: {
			type: String,
		},

		complement: {
			type: String
		},

		district: {
			type: String,
			
		},
		number: {
			type: Number,
			
		},
		city: {
			type: String,
			
		},
		state: {
			type: String,
			
		},
		isFilial: {
			type: Boolean,
			required: true
		},
		_id: false
	}]
},

{ timestamps: false, versionKey: false}

);

RentalSchema.plugin(mongoosePaginate);
const Rental = mongoose.model('Rental', RentalSchema);

module.exports = Rental;