const moment = require('moment');

const birthDayValidate = () => moment().subtract(18, 'years').format('MM-DD-YYYY');

module.exports = birthDayValidate;
