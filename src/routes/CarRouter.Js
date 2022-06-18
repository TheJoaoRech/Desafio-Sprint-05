const express = require('express');
const CarController = require('../app/controller/CarController');
const validateCar = require('../app/validations/Car/validateCar');
const updateCar = require('../app/validations/Car/updateCar');
const authToken = require('../app/middlewares/authToken');

const router = express.Router();

router
	.post('/api/v1/car', authToken, validateCar, CarController.create)
	.get('/api/v1/car', authToken, CarController.list)
	.get('/api/v1/car/:id', authToken, CarController.getById)
	.put('/api/v1/car/:id', authToken, updateCar, CarController.update)
	.delete('/api/v1/car/:id', authToken, CarController.delete)
	.patch('/api/v1/car/:id/accessories/:idAcess', authToken, CarController.updateAcessorieCar);

module.exports = router;