/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/app');

describe('Create a car',() => {
	it('Create a car for test!', async () => {
		const person = {
			name: 'Joãozinho da Silva',
			cpf: '131.147.860-49',
			birthDay: '10/10/2002',
			email: 'joazinho@emai.com',
			password: '123456',
			canDrive: 'yes'
		};
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
		const response = await request(app).post('/api/v1/person/').send(person);
		let { status } = response;
		expect(status).toBe(201);
		const { email } = response.body;
		const { password } = person;
		const authenticate = await request(app).post('/api/v1/authenticate/').send({ email, password });
		status = authenticate.status;
		const { token } = authenticate.body;
		expect(status).toBe(200);
		const authorization = await request(app).post('/api/v1/car/').send(car).set('Authorization', `Bearer ${token}`);
		status = authorization.status;
		expect(status).toBe(201);
	});
});