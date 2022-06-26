const request = require('supertest');
const app = require('../../src/app');
const Rental = require('../../src/app/schema/RentalSchema');

describe('Find all the rentals!', () => {
  beforeEach(async () => {
    await Rental.deleteMany();
  });
  it('Returns a rental using his ID', async () => {
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
    const rentalGet = await request(app).get(`/api/v1/rental/${rental.body._id}`).send();
    expect(rentalGet.status).toBe(200);
  });
  it('Returns a rental using his id but with an error. ', async () => {
    const rental = await request(app)
      .post('/api/v1/rental')
      .send({
        name: 'Localiza Rent a Car',
        cnpj: '64.646.687/0001-1',
        activities: 'Aluguel de Carros E Gestão de Frotas',
        address: [
          {
            zipCode: '96200-200',
            number: '232',
            isFilial: false
          }
        ]
      });
    const rentalGet = await request(app).get(`/api/v1/rental/${rental.body._id}`).send();
    expect(rentalGet.status).toBe(400);
  });
  it('Returns a rental using his id but with an error!', async () => {
    await request(app)
      .post('/api/v1/rental')
      .send({
        name: 'Localiza Rent a Car',
        cnpj: '64.646.687/0001-1',
        activities: 'Aluguel de Carros E Gestão de Frotas',
        address: [
          {
            zipCode: '96200-200',
            number: '232',
            isFilial: false
          }
        ]
      });
    const id = '62b';
    const rentalGet = await request(app).get(`/api/v1/rental/${id}`).send();
    expect(rentalGet.status).toBe(400);
  });
});
