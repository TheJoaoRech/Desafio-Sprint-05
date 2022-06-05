const express = require("express")
const PersonController = require("../app/controller/PersonController")

const router = express.Router()

router
	.post("/api/v1/person", PersonController.create)
	.get("/api/v1/person", PersonController.list)
	.get("/api/v1/person/:id", PersonController.getById)
	.put("/api/v1/person/:id", PersonController.update)
	.delete("/api/v1/person/:id", PersonController.delete)

module.exports = router