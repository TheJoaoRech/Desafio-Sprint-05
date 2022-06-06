const express = require("express")
const PersonController = require("../app/controller/PersonController")
const validatePerson = require("../app/validations/Person/validatePerson")

const router = express.Router()

router
	.post("/api/v1/person", validatePerson, PersonController.create)
	.get("/api/v1/person", PersonController.list)
	.get("/api/v1/person/:id", PersonController.getById)
	.put("/api/v1/person/:id", PersonController.update)
	.delete("/api/v1/person/:id", PersonController.delete)

module.exports = router