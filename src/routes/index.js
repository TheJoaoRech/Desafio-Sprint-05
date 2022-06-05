const {Router} = require('express')
const PersonRouter = require('./PersonRouter')
const CarRouter = require('./CarRouter')

const routes = (app) => {
	app.use(PersonRouter)
	app.use(CarRouter)
}
module.exports=routes