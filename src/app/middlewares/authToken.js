/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const authConfig = require('../config/authConfig.json');

module.exports = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader)
		return res.status(401).send({ error: 'It is necessary to provide a token to access this content.'});

	const parts = authHeader.split(' ');

	if (!parts.length === 2)
		return res.status(401).send({ error: 'This token is invalid.' });

	const [scheme, token] = parts;

	if (!/^Bearer$/i.test(scheme))
		return res.status(401).send({
			error: 'This token does not have a valid format.'
		});

	jwt.verify(token, authConfig.secret, (err, decoded) => {
		if (err) return res.status(401).send({ error: 'This token is invalid, please enter a valid one'});

		req.userId = decoded.id;
	});

	return next();

};