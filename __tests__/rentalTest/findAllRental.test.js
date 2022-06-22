/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/app');

describe('Create a rental',() => {
	it('Create a rental for test!', async () => {
		const rental = {
			name: 'Localiza Rent a Car',
			cnpj: '16.670.085/0001-55',
			activities: 'Aluguel de Carros E Gestão de Frotas',
			address: [{
				zipCode: '96200-200',
				number:'1234',
				isFilial: false
			}]
		};
		await request(app).post('/api/v1/rental/').send(rental);
		const response = await request(app).get('/api/v1/rental');
		const {status} = response;
		const {all} = response.body;
		expect(all).toBe(1);
		expect(status).toBe(200);
	});
});