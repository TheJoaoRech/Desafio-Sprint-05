const Joi = require('Joi');
const { cnpjValid } = require('../../../utils/regex');
const { cepValid } = require('../../../utils/regex');

module.exports = async (req, res, next) => {
	try {
		const schemaRental = Joi.object({

			name: Joi.string().min(2).required(),
			cnpj: Joi.string().regex(cnpjValid).required(),
			activities: Joi.string().min(5).required(),
			address: Joi.array().min(1).items(
				{
					zipCode: Joi.string().regex(cepValid).required(),
					street: Joi.string().min(2),
					complement: Joi.string(),
					number: Joi.number().min(1).required(),
					city: Joi.string().min(1),
					state: Joi.string().min(2).max(2),
					isFilial: Joi.boolean().required()
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