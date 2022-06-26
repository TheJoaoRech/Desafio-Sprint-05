const request = require('supertest');
const app = require('../../src/app');
const Rental = require('../../src/app/schema/RentalSchema');

describe('Delete a rental!', () => {
  beforeEach(async () => {
    await Rental.deleteMany();
  });
  it('Delete a rental with sucess.', async () => {
    const rental = await request(app)
      .post('/api/v1/rental')
      .send({
        name: 'Localiza Rent a Car',
        cnpj: '16.670.085/0001-55',
        activities: 'Aluguel de Carros E Gestão de Frotas',
        address: [
          {
            zipCode: '96200-200',
            number: '1234',
            isFilial: false
          }
        ]
      });
    const rentalDelete = await request(app).delete(`/api/v1/rental/${rental.body._id}`).send();
    expect(rentalDelete.status).toBe(204);
  });
  it('Delete a rental with an error.', async () => {
    await request(app)
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
    const id = '62b25ffae2f0ef696o9ba37d2';
    const rentalDelete = await request(app).delete(`/api/v1/rental/${id}`).send();
    expect(rentalDelete.status).toBe(404);
  });
});
