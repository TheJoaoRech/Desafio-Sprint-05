const Joi = require('joi').extend(require('@joi/date'));
const cpfValidation = require('../../../utils/cpfValidation');

module.exports = async (req, res, next) => {
	try {
		const schemaPerson = Joi.object({
			
			name: Joi.string().min(3).max(30).required().trim(),
			cpf: Joi.string().required().regex(/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}/).message('Your CPF should only contain characters accepted by the system!'),
			birthDay: Joi.date().required().format('DD/MM/YYYY'),
			email: Joi.string().min(10).required().email().lowercase().trim(),
			password: Joi.string().min(6).required(),
			canDrive: Joi.string().required().valid('yes', 'no')
		});

		const { error } = await schemaPerson.validate(req.body, { abortEarl: false });
		if (error) throw error;
		if(!cpfValidation(req.body.cpf)) throw {message: 'Your CPF is invalid!'};
		return next();
	} catch (error) {
		return res.status(400).json({Error: error.message});
	}
};