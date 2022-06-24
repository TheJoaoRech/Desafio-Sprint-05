const mongoose = require('mongoose');
const config = require('../../../config/config');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

module.exports = db;
