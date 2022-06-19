const express = require('express');
const ReserveController = require('../app/controller/ReserveController');
const validateReserve = require('../app/validations/Reserve/validateReserve');
const updateReserve = require('../app/validations/Reserve/updateReserve');

const router = express.Router();

router
	.post('/api/v1/rental/:id_rental/reserve', validateReserve, ReserveController.create)
	.get('/api/v1/rental/:id_rental/reserve', ReserveController.list)
	.get('/api/v1/rental/:id_rental/reserve/:id', ReserveController.getById)
	.put('/api/v1/rental/:id_rental/reserve/:id', updateReserve, ReserveController.update)
	.delete('/api/v1/rental/:id_rental/reserve/:id', ReserveController.delete);

module.exports = router;