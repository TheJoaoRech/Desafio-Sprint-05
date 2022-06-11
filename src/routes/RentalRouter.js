const express = require('express');
const RentalController = require('../app/controller/RentalController');

const router = express.Router();

router
	.post('/api/v1/rental', RentalController.create)
	.get('/api/v1/rental', RentalController.list)
	.get('/api/v1/rental/:id', RentalController.getById)
	.put('/api/v1/rental/:id', RentalController.update)
	.delete('/api/v1/rental/:id', RentalController.delete);

module.exports = router;