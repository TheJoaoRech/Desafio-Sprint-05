const Joi = require('joi').extend(require('@joi/date'));

module.exports = async (req, res, next) => {
  try {
    const schemaReserve = Joi.object({
      id_user: Joi.string(),
      data_start: Joi.date().format('DD/MM/YYYY'),
      data_end: Joi.date().format('DD/MM/YYYY'),
      id_car: Joi.string(),
      id_rental: Joi.string(),
      final_value: Joi.number(),
    });

    const { error } = await schemaReserve.validate(req.body, { abortEarly: false });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json(
      error.details.map((detail) => ({
        name: detail.path.join(),
        description: detail.message,
      })),
    );
  }
};
