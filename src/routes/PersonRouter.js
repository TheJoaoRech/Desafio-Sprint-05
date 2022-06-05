const express = require("express")
const PersonController = require("../app/controller/PersonController")

const router = express.Router()

router
	.post("/api/v1/person", PersonController.createPerson)
	.get("/api/v1/person", PersonController.listPerson)
	.get('/:id', PersonController.getPerson)
	.put('/:id', PersonController.updatePerson)
	.delete('/:id', PersonController.deletePerson)

module.exports = router