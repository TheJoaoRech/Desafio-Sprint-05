const request = require('supertest');
const app = require('../../src/app');
const Rental = require('../../src/app/schema/RentalSchema');

describe('Update a rental!', () => {
  beforeEach(async () => {
    await Rental.deleteMany();
  });
  it('Update a rental with sucess.', async () => {
    const rental = await request(app)
      .post('/api/v1/rental')
      .send({
        name: 'Localiza Rent a Car',
        cnpj: '64.646.687/0001-10',
        activities: 'Aluguel de Carros E Gestão de Frotas',
        address: [
          {
            zipCode: '96200-200',
            number: '232',
            isFilial: false
          }
        ]
      });
    const updateRental = await request(app).put(`/api/v1/rental/${rental.body._id}`).send({
      name: 'Localiza Rent a Moto'
    });
    expect(updateRental.status).toBe(200);
  });
  it('Updating a rental with an error.', async () => {
    const rental = await request(app)
      .post('/api/v1/rental')
      .send({
        name: 'Localiza Rent a Car',
        cnpj: '64.646.687/0001-10',
        activities: 'Aluguel de Carros E Gestão de Frotas',
        address: [
          {
            zipCode: '96200-200',
            number: '232',
            isFilial: false
          }
        ]
      });
    const updateRental = await request(app).put(`/api/v1/rental/${rental.body._id}`).send({
      cnpj: '64.646.6877000110'
    });
    expect(updateRental.status).toBe(400);
  });
});
