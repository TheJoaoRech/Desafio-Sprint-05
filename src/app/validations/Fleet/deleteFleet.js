const Joi = require('joi');
const { plateRegex } = require('../../utils/regexExample');
const { idRegex } = require('../../utils/regexExample');
const { status } = require('../../utils/enumsExamples');

module.exports = async (req, res, next) => {
  try {
    const schemaFleet = Joi.object({
      id_car: Joi.string().regex(idRegex),
      id_rental: Joi.string(),
      status: Joi.string().valid(...status),
      daily_value: Joi.number().min(1),
      plate: Joi.string().regex(plateRegex),
    });

    const { error } = await schemaFleet.validate(req.body, { abortEarly: false });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json(
      error.details.map((detail) => ({
        name: detail.path.join('.'),
        description: detail.message,
      })),
    );
  }
};
