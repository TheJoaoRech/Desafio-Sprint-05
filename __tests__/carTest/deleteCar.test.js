const request = require('supertest');
const app = require('../../src/app');
const Person = require('../../src/app/schema/PersonSchema');
const Car = require('../../src/app/schema/CarSchema');

beforeEach(async () => {
  await Car.deleteMany();
});
beforeEach(async () => {
  await Person.deleteMany();
});
const personPostTest = {
  name: 'Joãozinho da Silva',
  cpf: '131.147.860-49',
  birthDay: '10/10/2002',
  email: 'joazinho@emai.com',
  password: '123456',
  canDrive: 'yes'
};
const carPostTest = {
  model: 'S10 3.0',
  type: 'sedan',
  brand: 'GM',
  color: 'prata',
  year: '2009',
  accessories: [
    {
      description: 'Gabine dupla'
    },
    {
      description: 'Dir. Hidráulica'
    }
  ],
  passengersQtd: 4
};
let token = '';
describe('Testing the authenticate.', () => {
  beforeEach(async () => {
    await request(app).post('/api/v1/person').send(personPostTest);
    const result = await request(app)
      .post(`/api/v1/authenticate`)
      .send({ email: personPostTest.email, password: personPostTest.password });
    const { body } = result;
    token = body.token;
  });
  it('Delete a car with successful.', async () => {
    const carPost = await request(app).post('/api/v1/car').set('Authorization', `Bearer ${token}`).send(carPostTest);
    const { status } = await request(app)
      .delete(`/api/v1/car/${carPost.body._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send();
    expect(status).toBe(204);
  });
  it('Delete a car with an error.', async () => {
    await request(app).post('/api/v1/car').set('Authorization', `Bearer ${token}`).send(carPostTest);
    const id = '62b7688af845c58053bbde';
    const { status } = await request(app).delete(`/api/v1/car/${id}`).set('Authorization', `Bearer ${token}`).send();
    expect(status).toBe(404);
  });
});
