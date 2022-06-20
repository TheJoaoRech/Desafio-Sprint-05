/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/app');

describe('Create a car',() => {
	it('Create a car for test!', async () => {
		const car = {
			model: 'S10',
			type: 'sedan',
			brand: 'GM',
			color: 'branco',
			year: '2021',
			accessories: [
				{
					description: 'Ar-condicionado'
				}
			],
			passengersQtd: '5'
		};
		const response = await request(app).post('/api/v1/car').send(car);
		expect(response.statusCode).toBe(201);
	});
});