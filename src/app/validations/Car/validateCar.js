const Joi = require('joi').extend(require('@joi/date'));

module.exports = async (req, res, next) => {
  try {
    const schemaCar = Joi.object({
      model: Joi.string().min(3).required().trim(),
      type: Joi.string().min(3).required().trim(),
      brand: Joi.string().min(2).required().trim(),
      color: Joi.string().min(2).required().trim(),
      year: Joi.number().min(1950).max(2022).required(),
      accessories: Joi.array()
        .min(1)
        .unique()
        .required()
        .items({ description: Joi.string().min(1).required().trim() }),
      passengersQtd: Joi.number().required().min(1)
    });

    const { error } = await schemaCar.validate(req.body, { abortEarly: false });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json(
      error.details.map((detail) => ({
        name: detail.path.join('.'),
        description: detail.message
      }))
    );
  }
};
