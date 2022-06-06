const express = require("express")
const CarController = require("../app/controller/CarController")
const validateCar = require("../app/validations/Car/validateCar")
const updateCar = require("../app/validations/Car/validateCar")

const router = express.Router()

router
	.post("/api/v1/car", validateCar, CarController.create)
	.get("/api/v1/car", CarController.list)
	.get("/api/v1/car/:id", CarController.getById)
	.put("/api/v1/car/:id", updateCar, CarController.update)
	.delete("/api/v1/car/:id", CarController.delete)

module.exports = router