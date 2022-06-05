const {Router} = require('express')
const PersonRouter = require('./PersonRouter')

const routes = (app) => {
	app.use(PersonRouter)
}
module.exports=routes