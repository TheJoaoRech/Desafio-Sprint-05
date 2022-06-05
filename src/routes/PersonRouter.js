const express = require("express")
const PersonController = require("../app/controller/PersonController")

const router = express.Router()

router
	.post("/api/v1/person", PersonController.create)
	.get("/api/v1/person", PersonController.list)
	.get('/:id', PersonController.getById)
	.put('/:id', PersonController.update)
	.delete('/:id', PersonController.delete)

module.exports = router