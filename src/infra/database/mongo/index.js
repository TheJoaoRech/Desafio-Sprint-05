/* eslint-disable node/no-extraneous-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */

const mongoose = require('mongoose');
const config = require('../../../config/config');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

module.exports = db;