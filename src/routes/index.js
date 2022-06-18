const PersonRouter = require('./PersonRouter');
const CarRouter = require('./CarRouter');
const AuthenticateRouter = require('./AuthRouter');
const RentalRouter = require('./RentalRouter');
const SwaggerRouter = require('./SwaggerRouter');
const ReserveRouter = require('./ReserveRouter');
const FleetRouter = require('./FleetRouter');

const routes = (app) => {
	app.use(PersonRouter);
	app.use(CarRouter);
	app.use(AuthenticateRouter);
	app.use(RentalRouter);
	app.use(SwaggerRouter);
	app.use(ReserveRouter);
	app.use(FleetRouter);
};

module.exports = routes;