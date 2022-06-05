const express = require("express")
const CarController = require("../app/controller/CarController")

const router = express.Router()

router
	.post("/api/v1/car", CarController.create)
	.get("/api/v1/car", CarController.list)
	.get("/api/v1/car/:id", CarController.getById)
	.put("/api/v1/car/:id", CarController.update)
	.delete("/api/v1/car/:id", CarController.delete)

module.exports = router