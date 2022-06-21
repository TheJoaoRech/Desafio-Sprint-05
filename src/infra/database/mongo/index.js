const mongoose = require('mongoose');
const config = require('../../../config/config');
require('dotenv').config();

class Database {
	constructor() {
		this.connect();
	}

	connect(){
		return mongoose.connect( 
			`mongodb+srv://admin:admin@cluster0.yeahbf8.mongodb.net/?retryWrites=true&w=majority`
		);
	}
	
	disconnect() {
		return mongoose.connection.close();
	}

}
module.exports = new Database().connect();