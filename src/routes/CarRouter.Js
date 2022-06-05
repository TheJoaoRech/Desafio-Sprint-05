const express = require("express")
const CarController = require("../app/controller/CarController")

const router = express.Router()

router
	.post("/api/v1/car", CarController.create)
	.get("/api/v1/car", CarController.list)
	.get('/:id', CarController.getById)
	.put('/:id', CarController.update)
	.delete('/:id', CarController.delete)

module.exports = router