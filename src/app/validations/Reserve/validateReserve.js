const Joi = require('joi').extend(require('@joi/date'));

module.exports = async (req, res, next) => {
	try {

		const schemaReserve = Joi.object({
			id_user: Joi.string().required(),
			data_start: Joi.date().format('DD/MM/YYYY').required(),
			data_end: Joi.date().format('DD/MM/YYYY').required(),
			id_car: Joi.string().required(),
			id_rental: Joi.string().required(),
			final_value: Joi.number().required()
		});

		const { error } = await schemaReserve.validate(req.body, { abortEarly: false });
		if (error) throw error;
		return next();

	} catch (error) {
		return res.status(400).json(
			error.details.map((detail) => ({
				name: detail.path.join(),
				description: detail.message
			})));}
};