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
  it('Returns all the cars.', async () => {
    const { status } = await request(app).get('/api/v1/car').set('Authorization', `Bearer ${token}`).send();
    expect(status).toBe(204);
  });
  it('Returns all the cars successful.', async () => {
    const { status } = await request(app)
      .post('/api/v1/car')
      .set('Authorization', `Bearer ${token}`)
      .send({
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
      });
    expect(status).toBe(201);
  });
  it('Returns all the cars with an error.', async () => {
    const { status } = await request(app)
      .post('/api/v1/car')
      .set('Authorization', `Bearer ${token}`)
      .send({
        model: 'S10 3.0',
        type: 'sedan',
        brand: 'GM',
        color: 'prata',
        year: '',
        accessories: [
          {
            description: 'Gabine dupla'
          },
          {
            description: 'Dir. Hidráulica'
          }
        ],
        passengersQtd: 4
      });
    expect(status).toBe(400);
  });
});
