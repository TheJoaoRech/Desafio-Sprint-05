const express = require('express');
const FleetController = require('../app/controller/FleetController');

const router = express.Router();

router
	.post('/api/v1/rental/:id_rental/fleet', FleetController.create)
	.get('/api/v1/rental/:id_rental/fleet', FleetController.list)
	.get('/api/v1/rental/:id_rental/fleet/:id', FleetController.getById)
	.put('/api/v1/rental/:id_rental/fleet/:id', FleetController.update)
	.delete('/api/v1/rental/:id_rental/fleet/:id', FleetController.delete);

module.exports = router;