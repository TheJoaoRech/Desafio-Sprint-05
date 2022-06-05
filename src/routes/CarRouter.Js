const express = require("express")
const CarController = require("../app/controller/CarController")

const router = express.Router()

router
	.post("/api/v1/car", CarController.createCar)
	.get("/api/v1/car", CarController.listCar)
	.get('/:id', CarController.getCar)
	.put('/:id', CarController.updateCar)
	.delete('/:id', CarController.deleteCar)

module.exports = router