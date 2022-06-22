/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/app');

describe('Create a person',() => {
	it('Create a person for test!', async () => {
		const person = {
			name: 'Joãozinho da Silva',
			cpf: '131.147.860-49',
			birthDay: '10/10/2002',
			email: 'joazinho@emai.com',
			password: '123456',
			canDrive: 'yes'
		};
		await request(app).post('/api/v1/person/').send(person);
		const response = await request(app).get('/api/v1/person');
		const {status} = response;
		const {all} = response.body;
		expect(all).toBe(1);
		expect(status).toBe(200);
	});});