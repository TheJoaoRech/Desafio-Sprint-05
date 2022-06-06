const {Router} = require('express')
const PersonRouter = require('./PersonRouter')
const CarRouter = require('./CarRouter')
const AuthenticateRoute = require('./AuthRouter')

const routes = (app) => {
	app.use(PersonRouter)
	app.use(CarRouter)
	app.use(AuthenticateRoute)
}
module.exports = routes