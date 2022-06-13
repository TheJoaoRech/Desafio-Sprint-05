const Joi = require('Joi');
const { cnpjValid } = require('../../../utils/regex');
const { cepValid } = require('../../../utils/regex');

module.exports = async (req, res, next) => {
	try {
		const schemaRental = Joi.object({

			name: Joi.string().min(2).trim(),
			cnpj: Joi.string().regex(cnpjValid).trim(),
			activities: Joi.string().min(5).trim(),	
			address: Joi.array().min(1).items(
				{
					zipCode: Joi.string().regex(cepValid).trim(),
					street: Joi.string().min(2).trim(),
					complement: Joi.string().trim(),
					number: Joi.number().min(1).trim(),
					city: Joi.string().min(1).trim(),
					state: Joi.string().min(2).max(2).trim(),
					isFilial: Joi.boolean().trim()
				}
			)
		});

		const { error } = await schemaRental.validate(req.body, { abortEarl: true });
		if (error) throw error;
		return next();
	} catch (error) {
		return res.status(400).json({Error: error.message});
	}
};