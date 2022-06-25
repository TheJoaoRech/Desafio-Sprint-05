const Joi = require('joi').extend(require('@joi/date'));
const birthDayValidate = require('../../utils/birthDayValidate');
const cpfValidation = require('../../utils/cpfValidation');
const { cpfRegex } = require('../../utils/regexExample');

module.exports = async (req, res, next) => {
  try {
    const schemaPerson = Joi.object({

      name: Joi.string().min(3).max(30).required()
        .trim(),
      cpf: Joi.string().required().regex(cpfRegex).message('Your CPF should only contain characters accepted by the system!'),
      birthDay: Joi.date().required().format('DD/MM/YYYY').max(birthDayValidate()),
      email: Joi.string().min(10).required().email()
        .lowercase()
        .trim(),
      password: Joi.string().min(6).required(),
      canDrive: Joi.string().required().valid('yes', 'no'),
    });

    if (!cpfValidation(req.body.cpf)) throw new Error('Your CPF is invalid!');
    const { error } = await schemaPerson.validate(req.body, { abortEarly: false });
    if (error) throw error;
    return next();
  } catch (error) {
    if (error.details === undefined) {
      return res.status(400).json({ Error: error.message });
    }
    return res.status(400).json(
      error.details.map((detail) => ({
        name: detail.path.join(),
        description: detail.message,
      })),
    );
  }
};
