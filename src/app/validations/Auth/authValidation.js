const Joi = require('joi');
const InvalidField = require('../../utils/invalidField');

const autPost = Joi.object({
  email: Joi.string().email().required().error(new InvalidField('email')),
  password: Joi.string().min(6).required().error(new InvalidField('password'))
});

module.exports = async (req, res, next) => {
  const reqBody = req.body;
  try {
    if (req.method === 'POST') {
      await autPost.validateAsync({ ...reqBody });
      next();
    }
  } catch (error) {
    return res.status(400).json(
      error.details.map((detail) => ({
        name: detail.path.join('.'),
        description: detail.message
      }))
    );
  }
};
