const joi = require('joi');
const InvalidField = require('../utils/invalidField');

const autPost = joi.object({
	email: joi.string().email().required().error(new InvalidField('email')),
	password: joi.string().min(6).required().error(new InvalidField('password')),
});

module.exports = async (req, res, next) => {
	const reqBody = req.body;
	try{
		if(req.method == 'POST') {
			await autPost.validateAsync({...reqBody});
			next();
		}

	} catch(error) {
		return res.status(400).json({Error: error.message});
	}
};