const Joi = require('joi');

module.exports = async (req, res, next) => {
  try {
    const schemaRental = Joi.object({

      name: Joi.string().min(2),
      cnpj: Joi.string().regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/),
      activities: Joi.string().min(5),
      address: Joi.array().min(1).items(
        {
          zipCode: Joi.string().regex(/^\d{5}-\d{3}$/),
          street: Joi.string().min(2),
          complement: Joi.string(),
          number: Joi.number().min(1),
          city: Joi.string().min(1),
          state: Joi.string().min(2).max(2),
          isFilial: Joi.boolean(),
        },
      ),
    });

    const { error } = await schemaRental.validate(req.body, { abortEarl: false });
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
