const Joi = require('joi');
const moment = require('moment');
//const cpfValidation = require('../../../utils/cpfValidation');

module.exports = async (req, res, next) => {

	const schemaPerson = Joi.object({

		name: Joi.string().min(3).max(30).trim(),
		cpf: Joi.string().regex(/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}/).message('Your CPF should only contain characters accepted by the system!'),
		birthDay: Joi.date(),
		email: Joi.string().min(10).email().lowercase().trim(),
		password: Joi.string().min(6),
		canDrive: Joi.string().valid('yes', 'no')
	});

	const reqBody = req.body;
	const birthDay = moment(req.body.birthDay, 'DD/MM/YYYY').format('YYYY/MM/DD');
	try {
		if (!birthDayValidate(req.body.birthDay)) throw {message: 'Your birthDay is invalid!'};
		await schemaPerson.validateAsync({...reqBody, birthDay});

		// if(!cpfValidation(req.body.cpf)) throw {message: 'Your CPF is invalid!'};
		return next();
		
	} catch (error) {
		if(error.details === undefined) {
			return res.status(400).json({Error: error.message});
		}
		return res.status(400).json(
			error.details.map((detail) => ({
				name: detail.path.join(),
				description: detail.message
			})));}

	function birthDayValidate(formatedDate) {
		const date = new Date().toLocaleDateString();
		const formatedDateNow = moment(date, 'DD/MM/YYYY').format('YYYY/MM/DD');
		const age = moment(formatedDateNow).diff(formatedDate, 'years', true);
		if( Math.trunc(age) < 18) {
			return false;
		} else return true;
	}};