const express = require("express")
const AuthController = require('../app/controller/AuthController')

const router = express.Router()

router
	.post("/api/v1/authenticate", AuthController.auth)

module.exports = router