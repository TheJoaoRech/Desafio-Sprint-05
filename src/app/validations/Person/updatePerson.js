const Joi = require('joi').extend(require('@joi/date'));
const birthDayValidate = require('../../../utils/birthDayValidate');
//const cpfValidation = require('../../../utils/cpfValidation');

module.exports = async (req, res, next) => {
	try {
		
		const schemaPerson = Joi.object({

			name: Joi.string().min(3).max(30).trim(),
			cpf: Joi.string().regex(/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}/).message('Your CPF should only contain characters accepted by the system!'),
			birthDay: Joi.date().format('DD/MM/YYYY').max(birthDayValidate()),
			email: Joi.string().min(10).email().lowercase().trim(),
			password: Joi.string().min(6),
			canDrive: Joi.string().valid('yes', 'no')
		});

		const { error } = await schemaPerson.validate(req.body, { abortEarly: false });
		if (error) throw error;
		return next();
		
	} catch (error) {
		return res.status(400).json(
			error.details.map((detail) => ({
				name: detail.path.join(),
				description: detail.message
			})));}
};