const Joi = require('joi');
const moment = require('moment');
const cpfValidation = require('../../../utils/cpfValidation');

module.exports = async (req, res, next) => {

	const schemaPerson = Joi.object({
			
		name: Joi.string().min(3).max(30).required().trim(),
		cpf: Joi.string().required().regex(/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}/).message('Your CPF should only contain characters accepted by the system!'),
		birthDay: Joi.date().required(),
		email: Joi.string().min(10).required().email().lowercase().trim(),
		password: Joi.string().min(6).required(),
		canDrive: Joi.string().required().valid('yes', 'no')
	});

	const reqBody = req.body;
	const birthDay = moment(reqBody.birthDay, 'DD/MM/YYYY').format('YYYY/MM/DD');
	const birthDayValidate = moment().diff(birthDay, 'years', false) < 18;
	
	try {
		if (birthDayValidate) throw {message: 'Your birthDay is invalid!'};
		await schemaPerson.validateAsync({...reqBody, birthDay});
		if(!cpfValidation(req.body.cpf)) throw {message: 'Your CPF is invalid!'};
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
};