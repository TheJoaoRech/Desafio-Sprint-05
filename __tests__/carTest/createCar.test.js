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
  passengersQtd: 6
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
  it('Creating a car.', async () => {
    const { status } = await request(app).post('/api/v1/car').set('Authorization', `Bearer ${token}`).send(carPostTest);
    expect(status).toBe(201);
  });
  it('Create a car error in the model.', async () => {
    const { status } = await request(app)
      .post('/api/v1/car')
      .set('Authorization', `Bearer ${token}`)
      .send({
        model: 'S',
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
    expect(status).toBe(400);
  });
  it('Create a car error in the type.', async () => {
    const { status } = await request(app)
      .post('/api/v1/car')
      .set('Authorization', `Bearer ${token}`)
      .send({
        model: 'S10 3.0',
        type: 'S',
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
    expect(status).toBe(400);
  });
  it('Create a car error in the brand.', async () => {
    const { status } = await request(app)
      .post('/api/v1/car')
      .set('Authorization', `Bearer ${token}`)
      .send({
        model: 'S10 3.0',
        type: 'sedan',
        brand: '',
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
    expect(status).toBe(400);
  });
  it('Create a car error in the color.', async () => {
    const { status } = await request(app)
      .post('/api/v1/car')
      .set('Authorization', `Bearer ${token}`)
      .send({
        model: 'S10 3.0',
        type: 'sedan',
        brand: 'GM',
        color: '',
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
    expect(status).toBe(400);
  });
  it('Create a car error in the year.', async () => {
    const { status } = await request(app)
      .post('/api/v1/car')
      .set('Authorization', `Bearer ${token}`)
      .send({
        model: 'S10 3.0',
        type: 'sedan',
        brand: 'GM',
        color: 'prata',
        year: '20240',
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
  it('Create a car error in the acessories.', async () => {
    const { status } = await request(app).post('/api/v1/car').set('Authorization', `Bearer ${token}`).send({
      model: 'S10 3.0',
      type: 'sedan',
      brand: 'GM',
      color: 'prata',
      year: '2009',
      accessories: [],
      passengersQtd: 4
    });
    expect(status).toBe(400);
  });
});
