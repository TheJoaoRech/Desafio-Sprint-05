const PersonRouter = require('./PersonRouter');
const CarRouter = require('./CarRouter');
const AuthenticateRouter = require('./AuthRouter');
const RentalRouter = require('./RentalRouter');

const routes = (app) => {
	app.use(PersonRouter);
	app.use(CarRouter);
	app.use(AuthenticateRouter);
	app.use(RentalRouter);
};
module.exports = routes;