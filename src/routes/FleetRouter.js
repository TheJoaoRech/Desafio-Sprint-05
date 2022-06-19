const express = require('express');
const FleetController = require('../app/controller/FleetController');
const validateFleet = require('../app/validations/Fleet/validateFleet');
const updateFleet = require('../app/validations/Fleet/updateFleet');

const router = express.Router();

router
	.post('/api/v1/rental/:id_rental/fleet', validateFleet, FleetController.create)
	.get('/api/v1/rental/:id_rental/fleet', FleetController.list)
	.get('/api/v1/rental/:id_rental/fleet/:id', FleetController.getById)
	.put('/api/v1/rental/:id_rental/fleet/:id', updateFleet, FleetController.update)
	.delete('/api/v1/rental/:id_rental/fleet/:id', FleetController.delete);

module.exports = router;