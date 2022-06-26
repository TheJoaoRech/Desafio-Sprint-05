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
  it('Change a car update with successful.', async () => {
    const carPost = await request(app).post('/api/v1/car').set('Authorization', `Bearer ${token}`).send(carPostTest);
    const { status } = await request(app)
      .get(`/api/v1/car/${carPost.body._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        year: '2010'
      });
    expect(status).toBe(200);
  });
  it('Change a car update with error.', async () => {
    const carPost = await request(app).post('/api/v1/car').set('Authorization', `Bearer ${token}`).send(carPostTest);
    const { status } = await request(app)
      .get(`/api/v1/car/${carPost.body._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        year: '20100'
      });
    expect(status).toBe(400);
  });
});
