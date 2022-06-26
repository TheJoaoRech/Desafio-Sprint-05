const Joi = require('joi');
const { cnpjRegex } = require('../../utils/regexExample');
const { cepRegex } = require('../../utils/regexExample');

module.exports = async (req, res, next) => {
  try {
    const schemaRental = Joi.object({
      name: Joi.string().min(2).required(),
      cnpj: Joi.string().regex(cnpjRegex).required(),
      activities: Joi.string().min(5).required(),
      address: Joi.array()
        .min(1)
        .items({
          zipCode: Joi.string().regex(cepRegex).required(),
          street: Joi.string().min(2),
          complement: Joi.string(),
          number: Joi.number().min(1).required(),
          city: Joi.string().min(1),
          state: Joi.string().min(2).max(2),
          isFilial: Joi.boolean().required()
        })
    });

    const { error } = await schemaRental.validate(req.body, { abortEarl: false });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json(
      error.details.map((detail) => ({
        name: detail.path.join(),
        description: detail.message
      }))
    );
  }
};
