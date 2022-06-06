const express = require("express")
const AuthController = require('../app/controller/AuthController')
const AuthValidate = require('../utils/authValidation')

const router = express.Router()

router
	.post("/api/v1/authenticate", AuthValidate, AuthController.auth)

module.exports = router